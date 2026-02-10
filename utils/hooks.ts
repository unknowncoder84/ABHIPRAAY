/**
 * Custom React hooks for animations and interactions
 * Requirements: 8.1, 8.2, 8.3, 8.6
 */

'use client';

import { useEffect, useState, useRef } from 'react';
import { useAnimation } from 'framer-motion';

/**
 * useScrollAnimation Hook
 * Triggers animations when element enters viewport using Intersection Observer
 * 
 * @param threshold - Percentage of element visibility to trigger animation (default: 0.2)
 * @param triggerOnce - Whether to trigger animation only once (default: true)
 * @returns Object with ref to attach to element and animation controls
 * 
 * Requirements: 8.1, 8.3
 */
export function useScrollAnimation(
  threshold: number = 0.2,
  triggerOnce: boolean = true
): {
  ref: React.RefObject<HTMLDivElement>;
  controls: ReturnType<typeof useAnimation>;
  inView: boolean;
} {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting) {
          setInView(true);
          controls.start('visible');
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setInView(false);
          controls.start('hidden');
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls, threshold, triggerOnce]);

  return { ref, controls, inView };
}

/**
 * useNavbarBlur Hook
 * Tracks scroll position to apply blur effect to navbar
 * 
 * @param scrollThreshold - Scroll position in pixels to trigger blur (default: 50)
 * @returns Boolean indicating if navbar should be blurred
 * 
 * Requirements: 2.2, 8.2
 */
export function useNavbarBlur(scrollThreshold: number = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  return isScrolled;
}

/**
 * useReducedMotion Hook
 * Detects user's motion preference for accessibility
 * Respects prefers-reduced-motion media query
 * 
 * @returns Boolean indicating if user prefers reduced motion
 * 
 * Requirements: 8.6
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Fallback for older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
}

/**
 * useHoverAnimation Hook
 * Manages hover state for animations
 * 
 * @returns Object with isHovered state and hover handlers
 */
export function useHoverAnimation(): {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
} {
  const [isHovered, setIsHovered] = useState(false);

  return {
    isHovered,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
}

/**
 * useAutoScroll Hook
 * Manages auto-scrolling behavior with pause on hover
 * Used for image sliders and galleries
 * 
 * @param itemCount - Total number of items to scroll through
 * @param intervalMs - Time between scrolls in milliseconds (default: 5000)
 * @returns Object with current index, pause/resume functions, and hover handlers
 */
export function useAutoScroll(
  itemCount: number,
  intervalMs: number = 5000
): {
  currentIndex: number;
  isPaused: boolean;
  pause: () => void;
  resume: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  goToIndex: (index: number) => void;
} {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
    }, intervalMs);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      if (typeof clearInterval !== 'undefined') {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isPaused && itemCount > 0) {
      startInterval();
    } else {
      stopInterval();
    }

    return () => stopInterval();
  }, [isPaused, itemCount, intervalMs]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return {
    currentIndex,
    isPaused,
    pause,
    resume,
    onMouseEnter: pause,
    onMouseLeave: resume,
    goToIndex: (index: number) => setCurrentIndex(index % itemCount),
  };
}
