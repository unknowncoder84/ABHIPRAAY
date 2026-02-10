/**
 * Animation utilities and Framer Motion variants
 * Requirements: 8.1, 8.2, 8.3, 8.6
 */

import { Variants } from 'framer-motion';

/**
 * Fade In Variant
 * Used for smooth entrance animations with vertical offset
 */
export const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Slide Up Variant
 * Used for card entrance animations with staggered delays
 * Accepts custom index for stagger effect
 */
export const slideUpVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

/**
 * Float Animation Variant
 * Creates a gentle up/down floating motion
 * Used for icons and decorative elements
 */
export const floatVariant: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Ken Burns Effect Variant
 * Slow zoom effect for images (scale 1.0 to 1.1)
 * Used in hero image slider
 */
export const kenBurnsVariant: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: 1.1,
    transition: {
      duration: 5,
      ease: 'linear',
    },
  },
};

/**
 * Glow Border Hover Variant
 * Creates a glowing border effect on hover
 * Used for service cards and interactive elements
 */
export const glowHoverVariant: Variants = {
  rest: {
    boxShadow: '0 0 0 rgba(59, 130, 246, 0)',
  },
  hover: {
    boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
    transition: {
      duration: 0.3,
    },
  },
};

/**
 * Stagger Container Variant
 * Used to stagger animations of child elements
 */
export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Pulse Animation Variant
 * Creates a pulsing scale effect
 * Used for attention-grabbing elements like WhatsApp button
 */
export const pulseVariant: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Bounce Animation Variant
 * Creates a spring-based bounce effect
 */
export const bounceVariant: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 1,
      ease: 'easeOut',
    },
  },
};
