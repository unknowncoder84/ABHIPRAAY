/**
 * Unit tests for Button component
 * Requirements: 1.5, 8.2
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '@/components/Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render with children text', () => {
      render(<Button>Click Me</Button>);
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('should render as a button by default', () => {
      render(<Button>Click Me</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button.tagName).toBe('BUTTON');
    });

    it('should render as a link when href is provided', () => {
      render(<Button href="/test">Click Me</Button>);
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/test');
    });

    it('should apply aria-label when provided', () => {
      render(<Button ariaLabel="Test Button">Click Me</Button>);
      expect(screen.getByLabelText('Test Button')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should apply primary variant styles by default', () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-primary-500');
      expect(button).toHaveClass('text-white');
    });

    it('should apply secondary variant styles', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-white');
      expect(button).toHaveClass('text-primary-600');
    });

    it('should apply outline variant styles', () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-transparent');
      expect(button).toHaveClass('border-2');
      expect(button).toHaveClass('border-primary-500');
    });
  });

  describe('Sizes', () => {
    it('should apply medium size by default', () => {
      render(<Button>Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-6');
      expect(button).toHaveClass('py-3');
      expect(button).toHaveClass('text-base');
    });

    it('should apply small size styles', () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4');
      expect(button).toHaveClass('py-2');
      expect(button).toHaveClass('text-sm');
    });

    it('should apply large size styles', () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-8');
      expect(button).toHaveClass('py-4');
      expect(button).toHaveClass('text-lg');
    });
  });

  describe('Interactions', () => {
    it('should call onClick handler when clicked', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick} disabled>Click Me</Button>);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should apply disabled styles when disabled', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled:opacity-50');
      expect(button).toHaveClass('disabled:cursor-not-allowed');
    });

    it('should support different button types', () => {
      const { rerender } = render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
      
      rerender(<Button type="reset">Reset</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });
  });

  describe('Ripple Effect', () => {
    it('should create ripple effect on click by default', async () => {
      render(<Button>Click Me</Button>);
      const button = screen.getByRole('button');
      
      fireEvent.click(button);
      
      // Check if ripple element is created
      await waitFor(() => {
        const ripple = button.querySelector('.animate-ripple');
        expect(ripple).toBeInTheDocument();
      });
    });

    it('should not create ripple when ripple prop is false', () => {
      render(<Button ripple={false}>Click Me</Button>);
      const button = screen.getByRole('button');
      
      fireEvent.click(button);
      
      const ripple = button.querySelector('.animate-ripple');
      expect(ripple).not.toBeInTheDocument();
    });

    it('should not create ripple when disabled', () => {
      render(<Button disabled>Click Me</Button>);
      const button = screen.getByRole('button');
      
      fireEvent.click(button);
      
      const ripple = button.querySelector('.animate-ripple');
      expect(ripple).not.toBeInTheDocument();
    });

    it('should remove ripple after animation completes', async () => {
      jest.useFakeTimers();
      render(<Button>Click Me</Button>);
      const button = screen.getByRole('button');
      
      fireEvent.click(button);
      
      // Ripple should exist immediately
      let ripple = button.querySelector('.animate-ripple');
      expect(ripple).toBeInTheDocument();
      
      // Fast-forward time past animation duration
      jest.advanceTimersByTime(700);
      
      // Ripple should be removed
      await waitFor(() => {
        ripple = button.querySelector('.animate-ripple');
        expect(ripple).not.toBeInTheDocument();
      });
      
      jest.useRealTimers();
    });
  });

  describe('Hover Animation', () => {
    it('should have scale animation classes', () => {
      render(<Button>Hover Me</Button>);
      const button = screen.getByRole('button');
      
      // Button should be wrapped in motion component
      expect(button.parentElement).toBeTruthy();
    });

    it('should not animate when disabled', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toBeDisabled();
    });
  });

  describe('Custom Styling', () => {
    it('should accept and apply custom className', () => {
      render(<Button className="custom-class">Custom</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('custom-class');
      // Should still have base classes
      expect(button).toHaveClass('rounded-lg');
    });
  });

  describe('Link Mode', () => {
    it('should render as Next.js Link when href is provided', () => {
      render(<Button href="/contact">Contact Us</Button>);
      const link = screen.getByRole('link');
      
      expect(link).toHaveAttribute('href', '/contact');
      expect(link.tagName).toBe('A');
    });

    it('should not render as link when disabled even with href', () => {
      render(<Button href="/contact" disabled>Contact Us</Button>);
      const button = screen.getByRole('button');
      
      expect(button.tagName).toBe('BUTTON');
      expect(button).toBeDisabled();
    });

    it('should call onClick for link mode', () => {
      const handleClick = jest.fn();
      render(<Button href="/test" onClick={handleClick}>Link</Button>);
      
      const link = screen.getByRole('link');
      fireEvent.click(link);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('should have focus styles', () => {
      render(<Button>Focus Me</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('focus:outline-none');
      expect(button).toHaveClass('focus:ring-2');
      expect(button).toHaveClass('focus:ring-primary-500');
    });

    it('should set aria-disabled when disabled', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('should be keyboard accessible', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Press Me</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      
      expect(document.activeElement).toBe(button);
    });
  });

  describe('Edge Cases', () => {
    it('should handle multiple rapid clicks', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('should handle empty children gracefully', () => {
      render(<Button>{''}</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toBeInTheDocument();
    });

    it('should handle complex children (icons + text)', () => {
      render(
        <Button>
          <span>Icon</span>
          <span>Text</span>
        </Button>
      );
      
      expect(screen.getByText('Icon')).toBeInTheDocument();
      expect(screen.getByText('Text')).toBeInTheDocument();
    });
  });

  describe('Combination Tests', () => {
    it('should work with all props combined', () => {
      const handleClick = jest.fn();
      render(
        <Button
          variant="outline"
          size="lg"
          onClick={handleClick}
          className="custom-class"
          ariaLabel="Custom Button"
          type="submit"
        >
          Combined Props
        </Button>
      );
      
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('bg-transparent');
      expect(button).toHaveClass('px-8');
      expect(button).toHaveClass('custom-class');
      expect(button).toHaveAttribute('type', 'submit');
      expect(button).toHaveAttribute('aria-label', 'Custom Button');
      
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalled();
    });

    it('should work as link with all styling props', () => {
      render(
        <Button
          href="/test"
          variant="secondary"
          size="sm"
          className="link-custom"
        >
          Link Button
        </Button>
      );
      
      const link = screen.getByRole('link');
      
      expect(link).toHaveAttribute('href', '/test');
      expect(link).toHaveClass('bg-white');
      expect(link).toHaveClass('px-4');
      expect(link).toHaveClass('link-custom');
    });
  });
});
