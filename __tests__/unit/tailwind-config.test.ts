/**
 * Unit tests for Tailwind configuration
 * Task 2.1: Create Tailwind configuration with medical color palette
 * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5
 */

import tailwindConfig from '../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

describe('Tailwind Configuration', () => {
  const config = resolveConfig(tailwindConfig);

  describe('Medical Color Palette - Requirement 9.1', () => {
    it('should define primary color scale with all shades', () => {
      const primaryColors = config.theme.colors.primary;
      
      expect(primaryColors).toBeDefined();
      expect(primaryColors['50']).toBe('#eff6ff');
      expect(primaryColors['100']).toBe('#dbeafe');
      expect(primaryColors['200']).toBe('#bfdbfe');
      expect(primaryColors['300']).toBe('#93c5fd');
      expect(primaryColors['400']).toBe('#60a5fa');
      expect(primaryColors['500']).toBe('#3b82f6'); // Main blue
      expect(primaryColors['600']).toBe('#2563eb');
      expect(primaryColors['700']).toBe('#1d4ed8');
      expect(primaryColors['800']).toBe('#1e40af');
      expect(primaryColors['900']).toBe('#1e3a8a');
    });

    it('should define medical color variants', () => {
      const medicalColors = config.theme.colors.medical;
      
      expect(medicalColors).toBeDefined();
      expect(medicalColors.white).toBe('#ffffff');
      expect(medicalColors.lightBlue).toBe('#f0f9ff');
      expect(medicalColors.softBlue).toBe('#e0f2fe');
      expect(medicalColors.trustBlue).toBe('#0ea5e9');
    });

    it('should define neutral color scale', () => {
      const neutralColors = config.theme.colors.neutral;
      
      expect(neutralColors).toBeDefined();
      expect(neutralColors['50']).toBe('#fafafa');
      expect(neutralColors['100']).toBe('#f5f5f5');
      expect(neutralColors['200']).toBe('#e5e5e5');
      expect(neutralColors['300']).toBe('#d4d4d4');
      expect(neutralColors['400']).toBe('#a3a3a3');
      expect(neutralColors['500']).toBe('#737373');
      expect(neutralColors['600']).toBe('#525252');
      expect(neutralColors['700']).toBe('#404040');
      expect(neutralColors['800']).toBe('#262626');
      expect(neutralColors['900']).toBe('#171717');
    });
  });

  describe('Typography Scale - Requirement 9.2', () => {
    it('should configure Inter font family', () => {
      const fontFamilies = config.theme.fontFamily;
      
      expect(fontFamilies.inter).toBeDefined();
      expect(fontFamilies.inter).toContain('var(--font-inter)');
      expect(fontFamilies.inter).toContain('system-ui');
      expect(fontFamilies.inter).toContain('sans-serif');
    });

    it('should configure Poppins font family', () => {
      const fontFamilies = config.theme.fontFamily;
      
      expect(fontFamilies.poppins).toBeDefined();
      expect(fontFamilies.poppins).toContain('var(--font-poppins)');
      expect(fontFamilies.poppins).toContain('system-ui');
      expect(fontFamilies.poppins).toContain('sans-serif');
    });

    it('should define complete font size scale', () => {
      const fontSizes = config.theme.fontSize;
      
      expect(fontSizes.xs).toBeDefined();
      expect(fontSizes.sm).toBeDefined();
      expect(fontSizes.base).toBeDefined();
      expect(fontSizes.lg).toBeDefined();
      expect(fontSizes.xl).toBeDefined();
      expect(fontSizes['2xl']).toBeDefined();
      expect(fontSizes['3xl']).toBeDefined();
      expect(fontSizes['4xl']).toBeDefined();
      expect(fontSizes['5xl']).toBeDefined();
      expect(fontSizes['6xl']).toBeDefined();
      expect(fontSizes['7xl']).toBeDefined();
    });
  });

  describe('Glassmorphism Utilities - Requirement 9.3', () => {
    it('should define backdrop blur utilities', () => {
      const backdropBlur = config.theme.backdropBlur;
      
      expect(backdropBlur.xs).toBe('2px');
      expect(backdropBlur.sm).toBe('4px');
      expect(backdropBlur.md).toBe('12px');
      expect(backdropBlur.lg).toBe('16px');
      expect(backdropBlur.xl).toBe('24px');
      expect(backdropBlur['2xl']).toBe('40px');
      expect(backdropBlur['3xl']).toBe('64px');
    });

    it('should define glass background colors', () => {
      const bgColors = config.theme.backgroundColor;
      
      expect(bgColors['glass-white']).toBe('rgba(255, 255, 255, 0.8)');
      expect(bgColors['glass-light']).toBe('rgba(255, 255, 255, 0.7)');
      expect(bgColors['glass-blue']).toBe('rgba(240, 249, 255, 0.9)');
    });
  });

  describe('Spacing and Layout - Requirement 9.4', () => {
    it('should define extended spacing scale', () => {
      const spacing = config.theme.spacing;
      
      expect(spacing['18']).toBe('4.5rem');
      expect(spacing['88']).toBe('22rem');
      expect(spacing['100']).toBe('25rem');
      expect(spacing['112']).toBe('28rem');
      expect(spacing['128']).toBe('32rem');
    });

    it('should define border radius utilities', () => {
      const borderRadius = config.theme.borderRadius;
      
      expect(borderRadius.none).toBe('0');
      expect(borderRadius.sm).toBe('0.125rem');
      expect(borderRadius.md).toBe('0.375rem');
      expect(borderRadius.lg).toBe('0.5rem');
      expect(borderRadius.xl).toBe('0.75rem');
      expect(borderRadius['2xl']).toBe('1rem');
      expect(borderRadius['3xl']).toBe('1.5rem');
      expect(borderRadius.full).toBe('9999px');
    });
  });

  describe('Shadow System - Requirement 9.5', () => {
    it('should define standard shadow utilities', () => {
      const boxShadow = config.theme.boxShadow;
      
      expect(boxShadow.sm).toBeDefined();
      expect(boxShadow.md).toBeDefined();
      expect(boxShadow.lg).toBeDefined();
      expect(boxShadow.xl).toBeDefined();
      expect(boxShadow['2xl']).toBeDefined();
      expect(boxShadow.inner).toBeDefined();
      expect(boxShadow.none).toBe('none');
    });

    it('should define glow shadow effects', () => {
      const boxShadow = config.theme.boxShadow;
      
      expect(boxShadow.glow).toBe('0 0 30px rgba(59, 130, 246, 0.3)');
      expect(boxShadow['glow-hover']).toBe('0 0 40px rgba(59, 130, 246, 0.5)');
    });
  });

  describe('Responsive Breakpoints', () => {
    it('should define all responsive breakpoints', () => {
      const screens = config.theme.screens;
      
      expect(screens.sm).toBe('640px');   // Mobile landscape
      expect(screens.md).toBe('768px');   // Tablet
      expect(screens.lg).toBe('1024px');  // Desktop
      expect(screens.xl).toBe('1280px');  // Large desktop
      expect(screens['2xl']).toBe('1536px'); // Extra large
    });
  });

  describe('Animation Utilities', () => {
    it('should define animation classes', () => {
      const animation = config.theme.animation;
      
      expect(animation['fade-in']).toBe('fadeIn 0.6s ease-out');
      expect(animation['slide-up']).toBe('slideUp 0.5s ease-out');
      expect(animation.float).toBe('float 3s ease-in-out infinite');
      expect(animation['pulse-slow']).toBe('pulse 3s ease-in-out infinite');
      expect(animation['ken-burns']).toBe('kenBurns 5s linear forwards');
      expect(animation['bounce-slow']).toBe('bounce 2s ease-in-out infinite');
    });

    it('should define keyframes for animations', () => {
      const keyframes = config.theme.keyframes;
      
      expect(keyframes.fadeIn).toBeDefined();
      expect(keyframes.fadeIn['0%']).toEqual({ opacity: '0', transform: 'translateY(20px)' });
      expect(keyframes.fadeIn['100%']).toEqual({ opacity: '1', transform: 'translateY(0)' });
      
      expect(keyframes.slideUp).toBeDefined();
      expect(keyframes.slideUp['0%']).toEqual({ opacity: '0', transform: 'translateY(50px)' });
      expect(keyframes.slideUp['100%']).toEqual({ opacity: '1', transform: 'translateY(0)' });
      
      expect(keyframes.float).toBeDefined();
      expect(keyframes.float['0%, 100%']).toEqual({ transform: 'translateY(0)' });
      expect(keyframes.float['50%']).toEqual({ transform: 'translateY(-10px)' });
      
      expect(keyframes.kenBurns).toBeDefined();
      expect(keyframes.kenBurns['0%']).toEqual({ transform: 'scale(1)' });
      expect(keyframes.kenBurns['100%']).toEqual({ transform: 'scale(1.1)' });
    });
  });

  describe('Transition Utilities', () => {
    it('should define transition duration utilities', () => {
      const transitionDuration = config.theme.transitionDuration;
      
      expect(transitionDuration['0']).toBe('0ms');
      expect(transitionDuration['75']).toBe('75ms');
      expect(transitionDuration['100']).toBe('100ms');
      expect(transitionDuration['150']).toBe('150ms');
      expect(transitionDuration['200']).toBe('200ms');
      expect(transitionDuration['300']).toBe('300ms');
      expect(transitionDuration['500']).toBe('500ms');
      expect(transitionDuration['700']).toBe('700ms');
      expect(transitionDuration['1000']).toBe('1000ms');
    });

    it('should define custom timing functions', () => {
      const timingFunctions = config.theme.transitionTimingFunction;
      
      expect(timingFunctions['ease-smooth']).toBe('cubic-bezier(0.25, 0.4, 0.25, 1)');
      expect(timingFunctions['ease-bounce']).toBe('cubic-bezier(0.68, -0.55, 0.265, 1.55)');
    });
  });

  describe('Z-Index Scale', () => {
    it('should define z-index utilities', () => {
      const zIndex = config.theme.zIndex;
      
      expect(zIndex['0']).toBe('0');
      expect(zIndex['10']).toBe('10');
      expect(zIndex['20']).toBe('20');
      expect(zIndex['30']).toBe('30');
      expect(zIndex['40']).toBe('40');
      expect(zIndex['50']).toBe('50');
      expect(zIndex['60']).toBe('60');
      expect(zIndex['70']).toBe('70');
      expect(zIndex['80']).toBe('80');
      expect(zIndex['90']).toBe('90');
      expect(zIndex['100']).toBe('100');
    });
  });

  describe('Content Paths', () => {
    it('should include all necessary content paths', () => {
      const content = tailwindConfig.content;
      
      expect(content).toContain('./pages/**/*.{js,ts,jsx,tsx,mdx}');
      expect(content).toContain('./components/**/*.{js,ts,jsx,tsx,mdx}');
      expect(content).toContain('./sections/**/*.{js,ts,jsx,tsx,mdx}');
      expect(content).toContain('./app/**/*.{js,ts,jsx,tsx,mdx}');
    });
  });
});
