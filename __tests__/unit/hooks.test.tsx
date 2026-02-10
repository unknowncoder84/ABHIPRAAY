/**
 * Unit tests for custom animation hooks
 * Tests useScrollAnimation, useNavbarBlur, useReducedMotion, useHoverAnimation, useAutoScroll
 */

import { renderHook, act, waitFor } from '@testing-library/react';
import {
  useScrollAnimation,
  useNavbarBlur,
  useReducedMotion,
  useHoverAnimation,
  useAutoScroll,
} from '@/utils/hooks';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  useAnimation: () => ({
    start: jest.fn(),
    set: jest.fn(),
  }),
}));

describe('Custom Hooks', () => {
  describe('useScrollAnimation', () => {
    let mockObserve: jest.Mock;
    let mockUnobserve: jest.Mock;
    let mockDisconnect: jest.Mock;
    let observeCallback: IntersectionObserverCallback | null = null;

    beforeEach(() => {
      mockObserve = jest.fn();
      mockUnobserve = jest.fn();
      mockDisconnect = jest.fn();

      global.IntersectionObserver = jest.fn((callback, options) => {
        observeCallback = callback;
        return {
          observe: mockObserve,
          unobserve: mockUnobserve,
          disconnect: mockDisconnect,
          root: null,
          rootMargin: options?.rootMargin || '0px',
          thresholds: [options?.threshold || 0],
          takeRecords: jest.fn(),
        };
      }) as any;
    });

    afterEach(() => {
      jest.clearAllMocks();
      observeCallback = null;
    });

    it('should return ref, controls, and inView state', () => {
      const { result } = renderHook(() => useScrollAnimation());

      expect(result.current.ref).toBeDefined();
      expect(result.current.controls).toBeDefined();
      expect(result.current.inView).toBe(false);
    });

    it('should create IntersectionObserver when ref is attached', () => {
      const { result, rerender } = renderHook(() => useScrollAnimation(0.3));

      // Attach a mock element to the ref
      const mockElement = document.createElement('div');
      (result.current.ref as any).current = mockElement;

      // Trigger re-render to create observer
      rerender();

      // Wait for effect to run
      expect(global.IntersectionObserver).toHaveBeenCalled();
      expect(mockObserve).toHaveBeenCalledWith(mockElement);
    });

    it('should use default threshold of 0.2', () => {
      const { result, rerender } = renderHook(() => useScrollAnimation());

      const mockElement = document.createElement('div');
      (result.current.ref as any).current = mockElement;
      rerender();

      expect(global.IntersectionObserver).toHaveBeenCalledWith(
        expect.any(Function),
        expect.objectContaining({
          threshold: 0.2,
        })
      );
    });

    it('should set inView to true when element intersects', () => {
      const { result, rerender } = renderHook(() => useScrollAnimation());

      const mockElement = document.createElement('div');
      (result.current.ref as any).current = mockElement;
      rerender();

      // Simulate intersection
      act(() => {
        if (observeCallback) {
          observeCallback(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            {} as IntersectionObserver
          );
        }
      });

      expect(result.current.inView).toBe(true);
    });

    it('should call controls.start with "visible" when intersecting', () => {
      const { result, rerender } = renderHook(() => useScrollAnimation());

      const mockElement = document.createElement('div');
      (result.current.ref as any).current = mockElement;
      rerender();

      const startSpy = jest.spyOn(result.current.controls, 'start');

      act(() => {
        if (observeCallback) {
          observeCallback(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            {} as IntersectionObserver
          );
        }
      });

      expect(startSpy).toHaveBeenCalledWith('visible');
    });

    it('should not reset inView when triggerOnce is true', () => {
      const { result, rerender } = renderHook(() => useScrollAnimation(0.2, true));

      const mockElement = document.createElement('div');
      (result.current.ref as any).current = mockElement;
      rerender();

      // First intersection
      act(() => {
        if (observeCallback) {
          observeCallback(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            {} as IntersectionObserver
          );
        }
      });

      expect(result.current.inView).toBe(true);

      // Second intersection (leaving viewport)
      act(() => {
        if (observeCallback) {
          observeCallback(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            {} as IntersectionObserver
          );
        }
      });

      // Should still be true because triggerOnce is true
      expect(result.current.inView).toBe(true);
    });

    it('should reset inView when triggerOnce is false', () => {
      const { result, rerender } = renderHook(() => useScrollAnimation(0.2, false));

      const mockElement = document.createElement('div');
      (result.current.ref as any).current = mockElement;
      rerender();

      // First intersection
      act(() => {
        if (observeCallback) {
          observeCallback(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            {} as IntersectionObserver
          );
        }
      });

      expect(result.current.inView).toBe(true);

      // Leaving viewport
      act(() => {
        if (observeCallback) {
          observeCallback(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            {} as IntersectionObserver
          );
        }
      });

      expect(result.current.inView).toBe(false);
    });
  });

  describe('useNavbarBlur', () => {
    beforeEach(() => {
      // Reset scroll position
      Object.defineProperty(window, 'scrollY', {
        writable: true,
        value: 0,
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return false when scroll position is below threshold', () => {
      const { result } = renderHook(() => useNavbarBlur(50));
      expect(result.current).toBe(false);
    });

    it('should return true when scroll position exceeds threshold', () => {
      const { result } = renderHook(() => useNavbarBlur(50));

      act(() => {
        Object.defineProperty(window, 'scrollY', {
          writable: true,
          value: 100,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      expect(result.current).toBe(true);
    });

    it('should use default threshold of 50', () => {
      const { result } = renderHook(() => useNavbarBlur());

      act(() => {
        Object.defineProperty(window, 'scrollY', {
          writable: true,
          value: 51,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      expect(result.current).toBe(true);
    });

    it('should update when crossing threshold', () => {
      const { result } = renderHook(() => useNavbarBlur(50));

      // Below threshold
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          writable: true,
          value: 30,
        });
        window.dispatchEvent(new Event('scroll'));
      });
      expect(result.current).toBe(false);

      // Above threshold
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          writable: true,
          value: 60,
        });
        window.dispatchEvent(new Event('scroll'));
      });
      expect(result.current).toBe(true);

      // Back below threshold
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          writable: true,
          value: 20,
        });
        window.dispatchEvent(new Event('scroll'));
      });
      expect(result.current).toBe(false);
    });

    it('should clean up scroll listener on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
      const { unmount } = renderHook(() => useNavbarBlur());

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    });
  });

  describe('useReducedMotion', () => {
    let mockMatchMedia: jest.Mock;

    beforeEach(() => {
      mockMatchMedia = jest.fn();
      window.matchMedia = mockMatchMedia;
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return false when user does not prefer reduced motion', () => {
      mockMatchMedia.mockReturnValue({
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      });

      const { result } = renderHook(() => useReducedMotion());
      expect(result.current).toBe(false);
    });

    it('should return true when user prefers reduced motion', () => {
      mockMatchMedia.mockReturnValue({
        matches: true,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      });

      const { result } = renderHook(() => useReducedMotion());
      expect(result.current).toBe(true);
    });

    it('should update when media query changes', () => {
      let changeHandler: ((event: MediaQueryListEvent) => void) | null = null;

      mockMatchMedia.mockReturnValue({
        matches: false,
        addEventListener: jest.fn((event, handler) => {
          if (event === 'change') {
            changeHandler = handler;
          }
        }),
        removeEventListener: jest.fn(),
      });

      const { result } = renderHook(() => useReducedMotion());
      expect(result.current).toBe(false);

      // Simulate media query change
      act(() => {
        if (changeHandler) {
          changeHandler({ matches: true } as MediaQueryListEvent);
        }
      });

      expect(result.current).toBe(true);
    });

    it('should clean up event listener on unmount', () => {
      const removeEventListenerMock = jest.fn();
      mockMatchMedia.mockReturnValue({
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: removeEventListenerMock,
      });

      const { unmount } = renderHook(() => useReducedMotion());
      unmount();

      expect(removeEventListenerMock).toHaveBeenCalledWith('change', expect.any(Function));
    });

    it('should handle legacy addListener API', () => {
      const addListenerMock = jest.fn();
      const removeListenerMock = jest.fn();

      mockMatchMedia.mockReturnValue({
        matches: false,
        addListener: addListenerMock,
        removeListener: removeListenerMock,
      });

      const { unmount } = renderHook(() => useReducedMotion());

      expect(addListenerMock).toHaveBeenCalled();

      unmount();

      expect(removeListenerMock).toHaveBeenCalled();
    });
  });

  describe('useHoverAnimation', () => {
    it('should return initial hover state as false', () => {
      const { result } = renderHook(() => useHoverAnimation());
      expect(result.current.isHovered).toBe(false);
    });

    it('should set isHovered to true on mouse enter', () => {
      const { result } = renderHook(() => useHoverAnimation());

      act(() => {
        result.current.onMouseEnter();
      });

      expect(result.current.isHovered).toBe(true);
    });

    it('should set isHovered to false on mouse leave', () => {
      const { result } = renderHook(() => useHoverAnimation());

      act(() => {
        result.current.onMouseEnter();
      });
      expect(result.current.isHovered).toBe(true);

      act(() => {
        result.current.onMouseLeave();
      });
      expect(result.current.isHovered).toBe(false);
    });

    it('should toggle hover state multiple times', () => {
      const { result } = renderHook(() => useHoverAnimation());

      act(() => {
        result.current.onMouseEnter();
      });
      expect(result.current.isHovered).toBe(true);

      act(() => {
        result.current.onMouseLeave();
      });
      expect(result.current.isHovered).toBe(false);

      act(() => {
        result.current.onMouseEnter();
      });
      expect(result.current.isHovered).toBe(true);
    });
  });

  describe('useAutoScroll', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
      jest.useRealTimers();
    });

    it('should start at index 0', () => {
      const { result } = renderHook(() => useAutoScroll(5));
      expect(result.current.currentIndex).toBe(0);
    });

    it('should auto-advance to next index after interval', () => {
      const { result } = renderHook(() => useAutoScroll(5, 1000));

      expect(result.current.currentIndex).toBe(0);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(result.current.currentIndex).toBe(1);
    });

    it('should loop back to 0 after reaching last index', () => {
      const { result } = renderHook(() => useAutoScroll(3, 1000));

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      expect(result.current.currentIndex).toBe(0);
    });

    it('should pause auto-scroll when pause is called', () => {
      const { result } = renderHook(() => useAutoScroll(5, 1000));

      act(() => {
        result.current.pause();
      });

      expect(result.current.isPaused).toBe(true);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      // Should not advance when paused
      expect(result.current.currentIndex).toBe(0);
    });

    it('should resume auto-scroll when resume is called', () => {
      const { result } = renderHook(() => useAutoScroll(5, 1000));

      act(() => {
        result.current.pause();
      });

      act(() => {
        result.current.resume();
      });

      expect(result.current.isPaused).toBe(false);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(result.current.currentIndex).toBe(1);
    });

    it('should pause on mouse enter', () => {
      const { result } = renderHook(() => useAutoScroll(5, 1000));

      act(() => {
        result.current.onMouseEnter();
      });

      expect(result.current.isPaused).toBe(true);
    });

    it('should resume on mouse leave', () => {
      const { result } = renderHook(() => useAutoScroll(5, 1000));

      act(() => {
        result.current.onMouseEnter();
      });

      act(() => {
        result.current.onMouseLeave();
      });

      expect(result.current.isPaused).toBe(false);
    });

    it('should allow manual index navigation', () => {
      const { result } = renderHook(() => useAutoScroll(5, 1000));

      act(() => {
        result.current.goToIndex(3);
      });

      expect(result.current.currentIndex).toBe(3);
    });

    it('should wrap index when goToIndex exceeds itemCount', () => {
      const { result } = renderHook(() => useAutoScroll(5, 1000));

      act(() => {
        result.current.goToIndex(7);
      });

      expect(result.current.currentIndex).toBe(2); // 7 % 5 = 2
    });

    it('should clean up interval on unmount', () => {
      const { unmount } = renderHook(() => useAutoScroll(5, 1000));

      const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

      act(() => {
        unmount();
      });

      expect(clearIntervalSpy).toHaveBeenCalled();
    });

    it('should use default interval of 5000ms', () => {
      const { result } = renderHook(() => useAutoScroll(5));

      expect(result.current.currentIndex).toBe(0);

      act(() => {
        jest.advanceTimersByTime(5000);
      });

      expect(result.current.currentIndex).toBe(1);
    });
  });
});
