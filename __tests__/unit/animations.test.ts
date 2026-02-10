/**
 * Unit tests for animation utilities
 * Tests Framer Motion variants
 */

import {
  fadeInVariant,
  slideUpVariant,
  floatVariant,
  kenBurnsVariant,
  glowHoverVariant,
  staggerContainerVariant,
  pulseVariant,
  bounceVariant,
} from '@/utils/animations';

describe('Animation Variants', () => {
  describe('fadeInVariant', () => {
    it('should have hidden state with opacity 0 and y offset', () => {
      expect(fadeInVariant.hidden).toEqual({
        opacity: 0,
        y: 20,
      });
    });

    it('should have visible state with opacity 1 and no offset', () => {
      expect(fadeInVariant.visible).toMatchObject({
        opacity: 1,
        y: 0,
      });
    });

    it('should have transition configuration in visible state', () => {
      const visible = fadeInVariant.visible as any;
      expect(visible.transition).toMatchObject({
        duration: 0.6,
        ease: 'easeOut',
      });
    });
  });

  describe('slideUpVariant', () => {
    it('should have hidden state with opacity 0 and larger y offset', () => {
      expect(slideUpVariant.hidden).toEqual({
        opacity: 0,
        y: 50,
      });
    });

    it('should return visible state with stagger delay based on index', () => {
      const visibleFn = slideUpVariant.visible as Function;
      const result = visibleFn(2);
      
      expect(result).toMatchObject({
        opacity: 1,
        y: 0,
      });
      expect(result.transition.delay).toBe(0.2); // 2 * 0.1
    });

    it('should default to index 0 when no index provided', () => {
      const visibleFn = slideUpVariant.visible as Function;
      const result = visibleFn();
      
      expect(result.transition.delay).toBe(0);
    });

    it('should use custom easing curve', () => {
      const visibleFn = slideUpVariant.visible as Function;
      const result = visibleFn(0);
      
      expect(result.transition.ease).toEqual([0.25, 0.4, 0.25, 1]);
    });
  });

  describe('floatVariant', () => {
    it('should have animate state with y motion array', () => {
      expect(floatVariant.animate).toMatchObject({
        y: [0, -10, 0],
      });
    });

    it('should have infinite repeat transition', () => {
      const animate = floatVariant.animate as any;
      expect(animate.transition).toMatchObject({
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      });
    });
  });

  describe('kenBurnsVariant', () => {
    it('should have initial state with scale 1', () => {
      expect(kenBurnsVariant.initial).toEqual({
        scale: 1,
      });
    });

    it('should animate to scale 1.1', () => {
      expect(kenBurnsVariant.animate).toMatchObject({
        scale: 1.1,
      });
    });

    it('should have 5 second linear transition', () => {
      const animate = kenBurnsVariant.animate as any;
      expect(animate.transition).toMatchObject({
        duration: 5,
        ease: 'linear',
      });
    });
  });

  describe('glowHoverVariant', () => {
    it('should have rest state with no box shadow', () => {
      expect(glowHoverVariant.rest).toEqual({
        boxShadow: '0 0 0 rgba(59, 130, 246, 0)',
      });
    });

    it('should have hover state with blue glow shadow', () => {
      expect(glowHoverVariant.hover).toMatchObject({
        boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
      });
    });

    it('should have transition duration in hover state', () => {
      const hover = glowHoverVariant.hover as any;
      expect(hover.transition.duration).toBe(0.3);
    });
  });

  describe('staggerContainerVariant', () => {
    it('should have hidden state with opacity 0', () => {
      expect(staggerContainerVariant.hidden).toEqual({
        opacity: 0,
      });
    });

    it('should have visible state with opacity 1', () => {
      expect(staggerContainerVariant.visible).toMatchObject({
        opacity: 1,
      });
    });

    it('should have stagger children configuration', () => {
      const visible = staggerContainerVariant.visible as any;
      expect(visible.transition).toMatchObject({
        staggerChildren: 0.1,
        delayChildren: 0.2,
      });
    });
  });

  describe('pulseVariant', () => {
    it('should have animate state with scale array', () => {
      expect(pulseVariant.animate).toMatchObject({
        scale: [1, 1.05, 1],
      });
    });

    it('should have infinite repeat transition', () => {
      const animate = pulseVariant.animate as any;
      expect(animate.transition).toMatchObject({
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      });
    });
  });

  describe('bounceVariant', () => {
    it('should have animate state with y motion array', () => {
      expect(bounceVariant.animate).toMatchObject({
        y: [0, -15, 0],
      });
    });

    it('should have infinite repeat with delay', () => {
      const animate = bounceVariant.animate as any;
      expect(animate.transition).toMatchObject({
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 1,
        ease: 'easeOut',
      });
    });
  });
});
