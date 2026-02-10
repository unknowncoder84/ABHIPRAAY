# Implementation Plan: ABHIPRAAY Medical Website

## Overview

This implementation plan breaks down the ABHIPRAAY medical website into discrete, incremental coding tasks. The approach follows a component-first strategy, building reusable UI components before assembling them into page sections. Each task builds on previous work, ensuring no orphaned code and continuous integration.

The implementation uses Next.js 14 with App Router, TypeScript, Tailwind CSS, and Framer Motion for animations. Testing includes both unit tests and property-based tests using Jest, React Testing Library, and fast-check.

## Tasks

- [-] 1. Project setup and configuration
  - Initialize Next.js 14 project with TypeScript and App Router
  - Configure Tailwind CSS with custom medical color palette and design tokens
  - Install and configure Framer Motion, Lucide React icons
  - Install testing dependencies: Jest, React Testing Library, fast-check, jest-axe
  - Set up project structure: components/, sections/, utils/, types/
  - Configure Google Fonts (Inter and Poppins)
  - Create base layout with root HTML structure
  - _Requirements: 11.1, 11.2, 11.3_

- [ ] 2. Design system and shared utilities
  - [x] 2.1 Create Tailwind configuration with medical color palette
    - Define primary, medical, and neutral color scales
    - Configure typography scale with Inter and Poppins fonts
    - Set up spacing, shadow, and glassmorphism utility classes
    - Define responsive breakpoints
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [x] 2.2 Create animation utilities and custom hooks
    - Implement Framer Motion variants (fadeIn, slideUp, float, kenBurns, glowHover)
    - Create useScrollAnimation hook with Intersection Observer
    - Create useNavbarBlur hook for scroll-based blur effect
    - Create useReducedMotion hook for accessibility
    - _Requirements: 8.1, 8.2, 8.3, 8.6_

  - [~] 2.3 Write property test for scroll animation hook
    - **Property 2: Scroll-Triggered Animation Activation**
    - **Validates: Requirements 3.7, 4.3, 5.4, 8.1, 8.3**

  - [x] 2.4 Create TypeScript interfaces for data models
    - Define Service, TrustFactor, ContactInfo, HeroImage interfaces
    - Create constants for services, trust factors, and contact information
    - _Requirements: 4.1, 5.1, 7.1, 12.2_

- [ ] 3. Core UI components
  - [x] 3.1 Create Button component with variants
    - Implement primary, secondary, and outline variants
    - Add size options (sm, md, lg)
    - Implement ripple effect on click
    - Add hover scale animation
    - Support both button and link (href) modes
    - _Requirements: 1.5, 8.2_

  - [~] 3.2 Write property test for button hover effects
    - **Property 3: Hover Interaction Effects**
    - **Validates: Requirements 2.3, 4.2, 8.2**

  - [~] 3.3 Create AnimatedIcon component
    - Implement float, pulse, and bounce animation variants
    - Support configurable delay for staggered animations
    - Accept Lucide React icon as children
    - _Requirements: 5.2, 9.6_

  - [~] 3.4 Create ServiceCard component
    - Implement glassmorphism styling with backdrop blur
    - Add glow border hover effect
    - Implement slide-up entrance animation with stagger
    - Display icon, title, and description
    - _Requirements: 4.2, 4.3, 4.4, 4.5, 9.3, 9.4, 9.5_

  - [~] 3.5 Write unit tests for ServiceCard component
    - Test rendering with props
    - Test glassmorphism styles applied
    - Test hover glow effect
    - _Requirements: 4.4, 4.5_

- [ ] 4. Background effects components
  - [~] 4.1 Create GradientBlobs background component
    - Implement three animated gradient blobs
    - Use Framer Motion for continuous floating animation
    - Apply blur and mix-blend-multiply effects
    - Position fixed with -z-10 for background layer
    - _Requirements: 8.4_

  - [~] 4.2 Create MedicalParticles background component
    - Generate 20 particle elements with random positions
    - Implement subtle float animation with varying delays
    - Use low opacity for subtle effect
    - _Requirements: 8.5_

  - [~] 4.3 Write unit tests for background effects
    - Test GradientBlobs renders three blob elements
    - Test MedicalParticles renders 20 particle elements
    - Test animations are applied
    - _Requirements: 8.4, 8.5_

- [ ] 5. Navigation bar component
  - [~] 5.1 Implement Navbar component with sticky positioning
    - Create sticky navbar with glassmorphism background
    - Implement scroll-based blur effect using useNavbarBlur hook
    - Add logo/brand name
    - Create desktop menu with animated underline on hover
    - Implement mobile hamburger menu with slide-in drawer
    - Add smooth scroll to section anchors
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 10.2_

  - [~] 5.2 Write property test for navbar blur effect
    - **Property 8: Navbar Blur on Scroll**
    - **Validates: Requirements 2.2**

  - [~] 5.3 Write unit tests for Navbar component
    - Test sticky positioning applied
    - Test menu items render correctly
    - Test mobile menu toggle functionality
    - Test accessibility (keyboard navigation, ARIA labels)
    - _Requirements: 2.1, 2.4, 2.5_

- [ ] 6. Hero section with image slider
  - [~] 6.1 Create ImageSlider component with Ken Burns effect
    - Implement auto-advancing image carousel
    - Apply Ken Burns zoom effect (scale 1.0 to 1.1) to active image
    - Implement crossfade transitions between images
    - Use Next.js Image component for optimization
    - Configure 5-second interval for auto-advance
    - _Requirements: 1.3, 1.4, 6.1_

  - [~] 6.2 Write property test for auto-scroll behavior
    - **Property 4: Auto-Scroll Behavior**
    - **Validates: Requirements 1.3, 6.1**

  - [~] 6.3 Write property test for Ken Burns zoom effect
    - **Property 6: Ken Burns Zoom Effect**
    - **Validates: Requirements 1.4**

  - [~] 6.4 Create HeroSection component
    - Display headline and subtext with responsive typography
    - Integrate ImageSlider component
    - Create three action buttons (Call, WhatsApp, Gmail)
    - Implement button click handlers with correct URLs
    - Apply fade-in animation on mount
    - _Requirements: 1.1, 1.2, 1.5, 1.6, 1.7, 1.8_

  - [~] 6.5 Write property test for button action routing
    - **Property 1: Button Action Routing**
    - **Validates: Requirements 1.6, 1.7, 1.8, 7.3**

  - [~] 6.6 Write unit tests for HeroSection
    - Test headline and subtext display
    - Test three action buttons render
    - Test button href attributes are correct
    - _Requirements: 1.1, 1.2, 1.5_

- [~] 7. Checkpoint - Verify hero and navigation
  - Ensure all tests pass for components built so far
  - Manually verify hero section displays correctly with animations
  - Verify navbar sticky behavior and mobile menu
  - Ask the user if questions arise

- [ ] 8. About section
  - [~] 8.1 Create AboutSection component
    - Display professional content highlighting clinic expertise
    - Include content about ultrasound procedures, genetic care, patient approach, equipment, and team
    - Apply scroll-triggered fade-in animation
    - Use responsive typography and spacing
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

  - [~] 8.2 Write unit tests for AboutSection
    - Test all required content highlights are present
    - Test scroll animation triggers on viewport entry
    - _Requirements: 3.2, 3.3, 3.4, 3.5, 3.6_

- [ ] 9. Services section
  - [~] 9.1 Create ServicesSection component
    - Map over services data array to render ServiceCard components
    - Implement responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
    - Apply staggered entrance animations to cards
    - Display section heading with fade-in animation
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 10.4_

  - [~] 9.2 Write unit tests for ServicesSection
    - Test five service cards render
    - Test correct service titles and icons
    - Test responsive grid classes applied
    - _Requirements: 4.1, 4.5_

- [ ] 10. Trust section (Why Choose ABHIPRAAY)
  - [~] 10.1 Create TrustSection component
    - Map over trust factors data to render trust items
    - Display AnimatedIcon with float effect for each factor
    - Implement responsive grid layout
    - Apply scroll-triggered fade-in animation
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [~] 10.2 Write unit tests for TrustSection
    - Test four trust factors render
    - Test correct titles and icons
    - Test float animations applied to icons
    - _Requirements: 5.1, 5.3_

- [ ] 11. Gallery section with horizontal slider
  - [~] 11.1 Create GallerySlider component
    - Implement horizontal auto-scrolling gallery
    - Use CSS transforms for smooth infinite scroll
    - Implement pause on hover functionality
    - Resume scrolling when hover ends
    - Use Next.js Image component for gallery images
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [~] 11.2 Write property test for pause on hover round-trip
    - **Property 5: Pause on Hover Round-Trip**
    - **Validates: Requirements 6.2, 6.3**

  - [~] 11.3 Create GallerySection component
    - Integrate GallerySlider component
    - Display section heading
    - Apply scroll-triggered fade-in animation
    - _Requirements: 6.1, 6.2, 6.3_

  - [~] 11.4 Write unit tests for GallerySlider
    - Test auto-scroll functionality with fake timers
    - Test pause on hover
    - Test resume on hover end
    - _Requirements: 6.2, 6.3_

- [ ] 12. Contact section
  - [~] 12.1 Create ContactSection component
    - Display full clinic address with proper formatting
    - Create contact buttons (WhatsApp, Gmail, Call) with correct links
    - Embed Google Maps iframe with clinic location
    - Implement error handling for map loading failures
    - Apply responsive layout (stack on mobile, grid on desktop)
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [~] 12.2 Write unit tests for ContactSection
    - Test address displays correctly
    - Test contact buttons render with correct hrefs
    - Test Google Maps iframe present
    - _Requirements: 7.1, 7.4, 7.5, 7.6_

- [ ] 13. Floating WhatsApp button
  - [~] 13.1 Create WhatsAppButton component
    - Implement fixed positioning (bottom-right corner)
    - Add pulse animation to draw attention
    - Link to WhatsApp with pre-filled phone number
    - Ensure minimum 44x44px tap target for mobile
    - Apply high z-index to stay above content
    - _Requirements: 7.2, 7.3, 7.7, 10.5_

  - [~] 13.2 Write property test for minimum tap target size
    - **Property 10: Minimum Tap Target Size on Mobile**
    - **Validates: Requirements 10.5**

  - [~] 13.3 Write unit tests for WhatsAppButton
    - Test fixed positioning applied
    - Test correct WhatsApp URL
    - Test visible on all screen sizes
    - _Requirements: 7.2, 7.7_

- [~] 14. Checkpoint - Verify all sections
  - Ensure all tests pass for sections
  - Manually verify each section displays correctly
  - Test scroll animations trigger properly
  - Verify responsive behavior on mobile, tablet, desktop
  - Ask the user if questions arise

- [ ] 15. Main page assembly and layout
  - [~] 15.1 Create root layout component
    - Set up HTML structure with lang attribute
    - Apply Inter font to body
    - Include Navbar component
    - Include WhatsAppButton component
    - Add GradientBlobs and MedicalParticles background effects
    - _Requirements: 2.1, 7.2, 8.4, 8.5, 9.2_

  - [~] 15.2 Create home page component
    - Assemble all sections in order: Hero, About, Services, Trust, Gallery, Contact
    - Ensure proper spacing between sections
    - Apply responsive container classes
    - _Requirements: 1.1, 3.1, 4.1, 5.1, 6.1, 7.1_

  - [~] 15.3 Write property test for required content presence
    - **Property 11: Required Content Presence**
    - **Validates: Requirements 1.1, 1.2, 1.5, 3.2, 3.3, 3.4, 3.5, 3.6, 4.1, 5.1, 7.1, 7.2, 7.4, 7.5, 7.6, 12.2**

- [ ] 16. SEO and metadata
  - [~] 16.1 Add page metadata and structured data
    - Configure metadata in layout.tsx (title, description, keywords)
    - Add Open Graph tags for social sharing
    - Implement JSON-LD structured data for medical clinic schema
    - Add robots meta tags
    - Configure favicon and app icons
    - _Requirements: 11.4, 11.5_

  - [~] 16.2 Write unit tests for SEO metadata
    - **Property 15: SEO Metadata Presence**
    - **Validates: Requirements 11.4, 11.5**

- [ ] 17. Responsive design and accessibility
  - [~] 17.1 Write property test for responsive layout adaptation
    - **Property 9: Responsive Layout Adaptation**
    - **Validates: Requirements 10.1, 10.2, 10.3, 10.4, 10.5**

  - [~] 17.2 Write accessibility tests
    - Test keyboard navigation through all interactive elements
    - Test ARIA labels and roles
    - Run axe accessibility audit on all components
    - Test focus trap in mobile menu
    - _Requirements: 2.5, 10.2_

  - [~] 17.3 Implement error boundaries
    - Create ErrorBoundary component for graceful error handling
    - Wrap main sections in error boundaries
    - Add fallback UI for errors
    - _Requirements: Error Handling_

  - [~] 17.4 Add image loading error handling
    - Create ImageWithFallback component
    - Implement fallback images for loading failures
    - Add loading states for images
    - _Requirements: Error Handling_

- [ ] 18. Design system consistency tests
  - [~] 18.1 Write property test for design system consistency
    - **Property 12: Design System Consistency**
    - **Validates: Requirements 2.4, 4.4, 9.3, 9.4, 9.5**

  - [~] 18.2 Write property test for typography system
    - **Property 13: Typography System Application**
    - **Validates: Requirements 9.2**

  - [~] 18.3 Write property test for color palette compliance
    - **Property 14: Color Palette Compliance**
    - **Validates: Requirements 9.1**

- [ ] 19. Image optimization and assets
  - [~] 19.1 Download and optimize hero images
    - Download images from Google Photos source
    - Convert to WebP format for optimization
    - Create multiple sizes for responsive images
    - Save to public/images/hero/ directory
    - Update hero images data with correct paths
    - _Requirements: 12.1_

  - [~] 19.2 Write property test for image source configuration
    - **Property 17: Image Source Configuration**
    - **Validates: Requirements 12.1**

  - [~] 19.3 Optimize gallery and other images
    - Prepare gallery images
    - Add placeholder images for development
    - Configure Next.js Image component with proper sizes
    - Implement lazy loading for below-fold images
    - Mark hero images as priority for loading
    - _Requirements: 11.6_

- [ ] 20. Performance optimization
  - [~] 20.1 Implement code splitting and lazy loading
    - Use dynamic imports for heavy components (Gallery, Contact)
    - Implement loading states for lazy-loaded components
    - Configure Next.js for optimal bundle splitting
    - _Requirements: 11.6_

  - [~] 20.2 Optimize animations for performance
    - Add will-change CSS property to animated elements
    - Use CSS transforms instead of position changes
    - Implement useReducedMotion hook usage
    - Test animation performance with Chrome DevTools
    - _Requirements: 8.7_

- [ ] 21. Final integration and testing
  - [~] 21.1 Write integration tests
    - Test complete user journey from hero to contact
    - Test navigation between sections
    - Test all contact methods work correctly
    - _Requirements: 1.6, 1.7, 1.8, 7.3_

  - [~] 21.2 Write property test for background effects rendering
    - **Property 16: Background Effects Rendering**
    - **Validates: Requirements 8.4, 8.5**

  - [~] 21.3 Run full test suite
    - Execute all unit tests
    - Execute all property-based tests (100 iterations each)
    - Execute integration tests
    - Execute accessibility tests
    - Generate coverage report (target: 80%+)
    - _Requirements: All_

- [~] 22. Final checkpoint and deployment preparation
  - Ensure all tests pass with no failures
  - Verify responsive design on real devices (mobile, tablet, desktop)
  - Test all animations and interactions
  - Verify all contact links work correctly
  - Check SEO metadata in browser dev tools
  - Run Lighthouse audit (target: 90+ performance, 100 accessibility)
  - Ask the user if questions arise or if ready for deployment

## Notes

- All tasks are required for comprehensive implementation with full test coverage
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate universal correctness properties with 100 iterations each
- Unit tests validate specific examples, edge cases, and integration points
- The implementation follows a component-first approach, building reusable pieces before assembly
- All animations use Framer Motion for consistency
- All styling uses Tailwind CSS utility classes
- TypeScript ensures type safety throughout the codebase
