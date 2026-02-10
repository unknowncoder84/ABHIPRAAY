/**
 * Property-Based Test: Scroll-Triggered Animation Activation
 * 
 * Feature: abhipraay-medical-website
 * Property 2: Scroll-Triggered Animation Activation
 * 
 * For any content section with scroll-triggered animations, when the section
 * enters the viewport (crosses the intersection threshold), the animation system
 * should transition the section from hidden state to visible state.
 * 
 * **Validates: Requirements 3.7, 4.3, 5.4, 8.1, 8.3**
 * 
 * Testing Approach: For each animated section, mock the Intersection Observer,
 * trigger viewport entry, and verify that animation controls transition from
 * 'hidden' to 'visible' variant.
 */

import { renderHook, act } from '@testing-library/react';
import fc from 'fast-check';
import { useScrollAnimation } from '@/utils/hooks';

describe('Property 2: Scroll-Triggered Animation Activation', () => {
  let mockObserve: jest.Mock;
  let mockUnobserve: jest.Mock;
  let mockDisconnect: jest.Mock;
  let observeCallback: IntersectionObserverCallback | null = null;

  beforeEach(() => {
    mockObserve = jest.fn();
    mockUnobserve = jest.fn();
    mockDisconnect = jest.fn();

    // Mock IntersectionObserver
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

  it('Property 2: For any threshold value, when element enters viewport, animation should transition from hidden to visible', () => {
    fc.assert(
      fc.property(
        // Generate threshold values between 0 and 1
        fc.double({ min: 0, max: 1 }),
        (threshold) => {
          // Create a mock element first
          const mockElement = document.createElement('div');
          
          // Render the hook with the generated threshold
          const { result } = renderHook(() => {
            const hookResult = useScrollAnimation(threshold);
            // Attach the element immediately
            (hookResult.ref as any).current = mockElement;
            return hookResult;
          });

          // Wait for effect to run and observer to be created
          act(() => {
            // Effect runs after render
          });

          // Verify IntersectionObserver was created with correct threshold
          expect(global.IntersectionObserver).toHaveBeenCalledWith(
            expect.any(Function),
            expect.objectContaining({
              threshold,
            })
          );

          // Verify element is being observed
          expect(mockObserve).toHaveBeenCalledWith(mockElement);

          // Initial state should be hidden (inView = false)
          expect(result.current.inView).toBe(false);

          // Spy on the controls.start method
          const startSpy = jest.spyOn(result.current.controls, 'start');

          // Simulate element entering viewport
          act(() => {
            if (observeCallback) {
              observeCallback(
                [{ isIntersecting: true } as IntersectionObserverEntry],
                {} as IntersectionObserver
              );
            }
          });

          // Verify animation transitioned to visible state
          expect(result.current.inView).toBe(true);
          expect(startSpy).toHaveBeenCalledWith('visible');

          // Clean up
          startSpy.mockRestore();
        }
      ),
      { numRuns: 20 }
    );
  });

  it('Property 2: For any section type, scroll-triggered animations should activate on viewport entry', () => {
    fc.assert(
      fc.property(
        // Generate different section configurations
        fc.record({
          sectionName: fc.constantFrom('about', 'services', 'trust', 'gallery', 'contact'),
          threshold: fc.double({ min: 0.1, max: 0.5 }),
          triggerOnce: fc.boolean(),
        }),
        (config) => {
          const { sectionName, threshold, triggerOnce } = config;

          // Create mock element first
          const mockElement = document.createElement('div');
          mockElement.setAttribute('data-section', sectionName);

          // Render the hook with generated configuration
          const { result } = renderHook(() => {
            const hookResult = useScrollAnimation(threshold, triggerOnce);
            (hookResult.ref as any).current = mockElement;
            return hookResult;
          });

          // Wait for effect to run
          act(() => {});

          // Verify observer is set up
          expect(mockObserve).toHaveBeenCalledWith(mockElement);

          // Initial state: section should be hidden
          expect(result.current.inView).toBe(false);

          const startSpy = jest.spyOn(result.current.controls, 'start');

          // Simulate section entering viewport
          act(() => {
            if (observeCallback) {
              observeCallback(
                [{ isIntersecting: true } as IntersectionObserverEntry],
                {} as IntersectionObserver
              );
            }
          });

          // Property: Animation should transition to visible
          expect(result.current.inView).toBe(true);
          expect(startSpy).toHaveBeenCalledWith('visible');

          // If triggerOnce is true, observer should unobserve after first trigger
          if (triggerOnce) {
            expect(mockUnobserve).toHaveBeenCalledWith(mockElement);
          }

          // Clean up
          startSpy.mockRestore();
        }
      ),
      { numRuns: 20 }
    );
  });

  it('Property 2: Animation state should remain consistent across multiple viewport entries when triggerOnce is false', () => {
    fc.assert(
      fc.property(
        // Generate a sequence of intersection events
        fc.array(fc.boolean(), { minLength: 2, maxLength: 10 }),
        fc.double({ min: 0.1, max: 0.5 }),
        (intersectionSequence, threshold) => {
          // Create mock element first
          const mockElement = document.createElement('div');
          
          // Render hook with triggerOnce = false
          const { result } = renderHook(() => {
            const hookResult = useScrollAnimation(threshold, false);
            (hookResult.ref as any).current = mockElement;
            return hookResult;
          });

          // Wait for effect to run
          act(() => {});

          const startSpy = jest.spyOn(result.current.controls, 'start');

          // Simulate a sequence of viewport entries and exits
          intersectionSequence.forEach((isIntersecting, index) => {
            act(() => {
              if (observeCallback) {
                observeCallback(
                  [{ isIntersecting } as IntersectionObserverEntry],
                  {} as IntersectionObserver
                );
              }
            });

            // Property: inView state should match intersection state
            expect(result.current.inView).toBe(isIntersecting);

            // Property: controls.start should be called with correct variant
            const expectedVariant = isIntersecting ? 'visible' : 'hidden';
            expect(startSpy).toHaveBeenCalledWith(expectedVariant);
          });

          // Clean up
          startSpy.mockRestore();
        }
      ),
      { numRuns: 20 }
    );
  });

  it('Property 2: For any threshold, animation should only trigger when intersection exceeds threshold', () => {
    fc.assert(
      fc.property(
        fc.double({ min: 0, max: 1 }),
        (threshold) => {
          // Create mock element first
          const mockElement = document.createElement('div');
          
          const { result } = renderHook(() => {
            const hookResult = useScrollAnimation(threshold);
            (hookResult.ref as any).current = mockElement;
            return hookResult;
          });

          // Wait for effect to run
          act(() => {});

          const startSpy = jest.spyOn(result.current.controls, 'start');

          // Simulate element entering viewport (intersecting)
          act(() => {
            if (observeCallback) {
              observeCallback(
                [{ isIntersecting: true } as IntersectionObserverEntry],
                {} as IntersectionObserver
              );
            }
          });

          // Property: When isIntersecting is true, animation should activate
          expect(result.current.inView).toBe(true);
          expect(startSpy).toHaveBeenCalledWith('visible');

          // Simulate element leaving viewport (not intersecting)
          act(() => {
            if (observeCallback) {
              observeCallback(
                [{ isIntersecting: false } as IntersectionObserverEntry],
                {} as IntersectionObserver
              );
            }
          });

          // Property: When isIntersecting is false and triggerOnce is true (default),
          // inView should remain true (animation doesn't reverse)
          expect(result.current.inView).toBe(true);

          // Clean up
          startSpy.mockRestore();
        }
      ),
      { numRuns: 20 }
    );
  });

  it('Property 2: Animation controls should be properly initialized for any configuration', () => {
    fc.assert(
      fc.property(
        fc.record({
          threshold: fc.double({ min: 0, max: 1 }),
          triggerOnce: fc.boolean(),
        }),
        (config) => {
          const { threshold, triggerOnce } = config;

          const { result } = renderHook(() => useScrollAnimation(threshold, triggerOnce));

          // Property: Hook should always return valid controls and ref
          expect(result.current.ref).toBeDefined();
          expect(result.current.controls).toBeDefined();
          expect(result.current.inView).toBe(false);

          // Property: Controls should have start method
          expect(typeof result.current.controls.start).toBe('function');
        }
      ),
      { numRuns: 20 }
    );
  });
});
