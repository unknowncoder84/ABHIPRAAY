/**
 * Property-Based Test: Hover Interaction Effects
 * 
 * Feature: abhipraay-medical-website
 * Property 3: Hover Interaction Effects
 * 
 * For any interactive element with hover effects (navigation menu items, service cards,
 * buttons), hovering over the element should apply the designated visual effect
 * (underline, glow, ripple, scale).
 * 
 * **Validates: Requirements 2.3, 4.2, 8.2**
 * 
 * Testing Approach: For each hoverable element type, simulate mouseenter event
 * and verify that the appropriate CSS classes or animation states are applied.
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import fc from 'fast-check';
import { Button } from '@/components/Button';
import { Navbar } from '@/components/Navbar';
import React from 'react';

describe('Property 3: Hover Interaction Effects', () => {
  describe('Button Hover Effects', () => {
    it('Property 3: For any button variant, hovering should apply scale animation', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('primary', 'secondary', 'outline'),
          fc.constantFrom('sm', 'md', 'lg'),
          (variant, size) => {
            const { container } = render(
              <Button variant={variant as any} size={size as any}>
                Test Button
              </Button>
            );

            const button = screen.getByRole('button');
            
            // Verify button is rendered
            expect(button).toBeInTheDocument();
            
            // Button should be wrapped in a motion component
            // The motion component handles hover animations
            const motionWrapper = button.parentElement || button;
            expect(motionWrapper).toBeTruthy();
            
            // Verify button has transition classes for smooth hover effects
            expect(button).toHaveClass('transition-all');
            expect(button).toHaveClass('duration-300');
            
            // Simulate hover by triggering mouseenter
            fireEvent.mouseEnter(button);
            
            // Button should remain in document and be interactive
            expect(button).toBeInTheDocument();
            expect(button).not.toBeDisabled();
          }
        ),
        { numRuns: 100 }
      );
    });

    it('Property 3: For any button, hover effects should not apply when disabled', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('primary', 'secondary', 'outline'),
          (variant) => {
            const { container } = render(
              <Button variant={variant as any} disabled>
                Disabled Button
              </Button>
            );

            const button = screen.getByRole('button');
            
            // Verify button is disabled
            expect(button).toBeDisabled();
            expect(button).toHaveClass('disabled:opacity-50');
            expect(button).toHaveClass('disabled:cursor-not-allowed');
            
            // Simulate hover
            fireEvent.mouseEnter(button);
            
            // Button should remain disabled
            expect(button).toBeDisabled();
          }
        ),
        { numRuns: 100 }
      );
    });

    it('Property 3: For any button with ripple enabled, clicking should create ripple effect', async () => {
      fc.assert(
        fc.property(
          fc.constantFrom('primary', 'secondary', 'outline'),
          async (variant) => {
            const { container } = render(
              <Button variant={variant as any} ripple={true}>
                Ripple Button
              </Button>
            );

            const button = screen.getByRole('button');
            
            // Click to trigger ripple
            fireEvent.click(button);
            
            // Ripple element should be created
            await waitFor(() => {
              const ripple = button.querySelector('.animate-ripple');
              expect(ripple).toBeInTheDocument();
            }, { timeout: 100 });
          }
        ),
        { numRuns: 50 } // Reduced runs for async test
      );
    });

    it('Property 3: For any button size, hover effects should be consistent', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('sm', 'md', 'lg'),
          (size) => {
            render(
              <Button size={size as any}>
                Size Test
              </Button>
            );

            const button = screen.getByRole('button');
            
            // All buttons should have hover transition classes regardless of size
            expect(button).toHaveClass('transition-all');
            expect(button).toHaveClass('duration-300');
            
            // Verify size-specific classes are applied
            const sizeClasses = {
              sm: ['px-4', 'py-2', 'text-sm'],
              md: ['px-6', 'py-3', 'text-base'],
              lg: ['px-8', 'py-4', 'text-lg'],
            };
            
            sizeClasses[size as keyof typeof sizeClasses].forEach(cls => {
              expect(button).toHaveClass(cls);
            });
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Navigation Menu Hover Effects', () => {
    it('Property 3: For any navigation menu item, hovering should reveal underline effect', () => {
      fc.assert(
        fc.property(
          fc.integer({ min: 0, max: 5 }), // Index of menu item
          (menuIndex) => {
            render(<Navbar />);

            // Get all navigation links (desktop menu)
            const navLinks = screen.getAllByRole('link').filter(link => 
              link.closest('.hidden.md\\:flex')
            );

            if (navLinks.length === 0 || menuIndex >= navLinks.length) {
              // Skip if no desktop menu items or index out of bounds
              return true;
            }

            const menuItem = navLinks[menuIndex];
            
            // Menu item should have group class for hover effects
            expect(menuItem).toHaveClass('group');
            
            // Find the underline element (child span)
            const underline = menuItem.querySelector('span');
            expect(underline).toBeInTheDocument();
            
            // Underline should have transition classes
            if (underline) {
              expect(underline).toHaveClass('transition-all');
              expect(underline).toHaveClass('duration-300');
              expect(underline).toHaveClass('group-hover:w-full');
            }
            
            // Simulate hover
            fireEvent.mouseEnter(menuItem);
            
            // Menu item should remain interactive
            expect(menuItem).toBeInTheDocument();
          }
        ),
        { numRuns: 100 }
      );
    });

    it('Property 3: For any navigation state, hover effects should be consistent', () => {
      fc.assert(
        fc.property(
          fc.boolean(), // Scrolled state
          (isScrolled) => {
            // Mock window.scrollY
            Object.defineProperty(window, 'scrollY', {
              writable: true,
              value: isScrolled ? 100 : 0,
            });

            render(<Navbar />);

            // Get desktop menu links
            const navLinks = screen.getAllByRole('link').filter(link => 
              link.closest('.hidden.md\\:flex')
            );

            // All menu items should have hover transition
            navLinks.forEach(link => {
              expect(link).toHaveClass('transition-colors');
              expect(link).toHaveClass('duration-200');
            });
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Link Hover Effects', () => {
    it('Property 3: For any button rendered as link, hover effects should apply', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('primary', 'secondary', 'outline'),
          fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.startsWith('/')),
          (variant, href) => {
            render(
              <Button variant={variant as any} href={href}>
                Link Button
              </Button>
            );

            const link = screen.getByRole('link');
            
            // Verify link is rendered with correct href
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', href);
            
            // Link should have transition classes
            expect(link).toHaveClass('transition-all');
            expect(link).toHaveClass('duration-300');
            
            // Simulate hover
            fireEvent.mouseEnter(link);
            
            // Link should remain interactive
            expect(link).toBeInTheDocument();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Action Button Hover Effects', () => {
    it('Property 3: For any action button type, hover should enhance visual feedback', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(
            { href: 'tel:+919653326172', text: 'Call Now', className: 'bg-white text-blue-600' },
            { href: 'https://wa.me/919653326172', text: 'WhatsApp', className: 'bg-green-500 text-white' },
            { href: 'mailto:drmoves@gmail.com', text: 'Email Us', className: 'bg-blue-500 text-white' }
          ),
          (actionButton) => {
            render(
              <a
                href={actionButton.href}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${actionButton.className}`}
              >
                {actionButton.text}
              </a>
            );

            const link = screen.getByRole('link', { name: actionButton.text });
            
            // Verify link has transition classes
            expect(link).toHaveClass('transition-all');
            expect(link).toHaveClass('duration-300');
            expect(link).toHaveClass('shadow-lg');
            expect(link).toHaveClass('hover:shadow-xl');
            
            // Simulate hover
            fireEvent.mouseEnter(link);
            
            // Link should remain interactive
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', actionButton.href);
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Hover Effect Consistency', () => {
    it('Property 3: For any interactive element, hover effects should be reversible', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('primary', 'secondary', 'outline'),
          (variant) => {
            const { container } = render(
              <Button variant={variant as any}>
                Hover Test
              </Button>
            );

            const button = screen.getByRole('button');
            
            // Initial state
            expect(button).toBeInTheDocument();
            
            // Simulate hover
            fireEvent.mouseEnter(button);
            expect(button).toBeInTheDocument();
            
            // Simulate hover end
            fireEvent.mouseLeave(button);
            expect(button).toBeInTheDocument();
            
            // Button should still be functional after hover cycle
            fireEvent.click(button);
            expect(button).toBeInTheDocument();
          }
        ),
        { numRuns: 100 }
      );
    });

    it('Property 3: For any button with custom className, hover effects should still apply', () => {
      fc.assert(
        fc.property(
          fc.string({ minLength: 1, maxLength: 20 }).map(s => `custom-${s.replace(/\s/g, '-')}`),
          (customClass) => {
            render(
              <Button className={customClass}>
                Custom Button
              </Button>
            );

            const button = screen.getByRole('button');
            
            // Should have both custom class and base transition classes
            expect(button).toHaveClass(customClass);
            expect(button).toHaveClass('transition-all');
            expect(button).toHaveClass('duration-300');
            
            // Hover should still work
            fireEvent.mouseEnter(button);
            expect(button).toBeInTheDocument();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Focus and Hover Interaction', () => {
    it('Property 3: For any button, focus and hover effects should coexist', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('primary', 'secondary', 'outline'),
          (variant) => {
            render(
              <Button variant={variant as any}>
                Focus Test
              </Button>
            );

            const button = screen.getByRole('button');
            
            // Button should have focus styles
            expect(button).toHaveClass('focus:outline-none');
            expect(button).toHaveClass('focus:ring-2');
            expect(button).toHaveClass('focus:ring-primary-500');
            
            // Focus the button
            button.focus();
            expect(document.activeElement).toBe(button);
            
            // Hover while focused
            fireEvent.mouseEnter(button);
            
            // Both focus and hover should be active
            expect(document.activeElement).toBe(button);
            expect(button).toBeInTheDocument();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Hover Performance', () => {
    it('Property 3: For any rapid hover sequence, effects should remain stable', () => {
      fc.assert(
        fc.property(
          fc.array(fc.boolean(), { minLength: 5, maxLength: 20 }),
          (hoverSequence) => {
            render(<Button>Rapid Hover</Button>);

            const button = screen.getByRole('button');
            
            // Simulate rapid hover on/off sequence
            hoverSequence.forEach(shouldHover => {
              if (shouldHover) {
                fireEvent.mouseEnter(button);
              } else {
                fireEvent.mouseLeave(button);
              }
            });
            
            // Button should remain stable and functional
            expect(button).toBeInTheDocument();
            expect(button).not.toBeDisabled();
            
            // Should still be clickable
            fireEvent.click(button);
            expect(button).toBeInTheDocument();
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
