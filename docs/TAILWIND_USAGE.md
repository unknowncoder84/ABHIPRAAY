# Tailwind CSS Configuration Guide

This document provides guidance on using the custom Tailwind CSS configuration for the ABHIPRAAY Medical Website.

## Medical Color Palette

### Primary Colors
Use for main UI elements, buttons, and interactive components:

```tsx
// Light shades
<div className="bg-primary-50">Very light blue background</div>
<div className="bg-primary-100">Light blue background</div>

// Main blue (500)
<button className="bg-primary-500 text-white">Primary Button</button>

// Dark shades
<div className="bg-primary-900 text-white">Dark blue background</div>
```

### Medical Colors
Healthcare-specific color variants:

```tsx
// White and light blues for medical aesthetic
<div className="bg-medical-white">Pure white</div>
<div className="bg-medical-lightBlue">Light blue tint</div>
<div className="bg-medical-softBlue">Soft blue</div>
<div className="text-medical-trustBlue">Trust blue text</div>
```

### Neutral Colors
For text, borders, and subtle backgrounds:

```tsx
<p className="text-neutral-700">Body text</p>
<div className="border border-neutral-200">Subtle border</div>
<div className="bg-neutral-50">Light gray background</div>
```

## Typography

### Font Families

```tsx
// Inter for body text
<p className="font-inter">Body text with Inter font</p>

// Poppins for headings
<h1 className="font-poppins font-bold">Heading with Poppins</h1>
```

### Typography Scale

```tsx
// Headings
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins">
  Hero Headline
</h1>

<h2 className="text-4xl md:text-5xl font-bold font-poppins">
  Section Title
</h2>

// Body text
<p className="text-base md:text-lg font-inter">
  Body paragraph text
</p>
```

## Glassmorphism Effects

Create frosted glass effects for cards and overlays:

```tsx
// Glass card with backdrop blur
<div className="bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6">
  <h3>Glassmorphism Card</h3>
  <p>Content with frosted glass effect</p>
</div>

// Navbar with glass effect
<nav className="bg-white/70 backdrop-blur-md border-b border-white/20">
  Navigation content
</nav>

// Using predefined glass backgrounds
<div className="bg-glass-white backdrop-blur-lg">Glass white</div>
<div className="bg-glass-light backdrop-blur-md">Glass light</div>
<div className="bg-glass-blue backdrop-blur-lg">Glass blue</div>
```

## Shadows

### Standard Shadows

```tsx
<div className="shadow-sm">Small shadow</div>
<div className="shadow-md">Medium shadow</div>
<div className="shadow-lg">Large shadow</div>
<div className="shadow-xl">Extra large shadow</div>
<div className="shadow-2xl">2XL shadow</div>
```

### Glow Effects

```tsx
// Static glow
<div className="shadow-glow">Glowing element</div>

// Hover glow
<button className="shadow-glow hover:shadow-glow-hover transition-shadow">
  Glow on hover
</button>
```

## Animations

### Fade In

```tsx
<div className="animate-fade-in">
  Fades in from bottom with opacity
</div>
```

### Slide Up

```tsx
<div className="animate-slide-up">
  Slides up from bottom
</div>
```

### Float

```tsx
<div className="animate-float">
  Gentle floating motion
</div>
```

### Ken Burns Effect (Image Zoom)

```tsx
<div className="animate-ken-burns overflow-hidden">
  <img src="..." alt="..." />
</div>
```

### Pulse and Bounce

```tsx
<button className="animate-pulse-slow">Slow pulse</button>
<div className="animate-bounce-slow">Slow bounce</div>
```

## Responsive Design

### Breakpoints

- `sm`: 640px (Mobile landscape)
- `md`: 768px (Tablet)
- `lg`: 1024px (Desktop)
- `xl`: 1280px (Large desktop)
- `2xl`: 1536px (Extra large)

### Usage Examples

```tsx
// Responsive text sizing
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
  Responsive Heading
</h1>

// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>

// Responsive spacing
<section className="py-12 sm:py-16 md:py-20 lg:py-24">
  {/* Section content */}
</section>

// Responsive padding
<div className="px-4 sm:px-6 lg:px-8">
  {/* Container content */}
</div>
```

## Spacing

### Extended Spacing Scale

```tsx
<div className="mt-18">Margin top 4.5rem</div>
<div className="p-88">Padding 22rem</div>
<div className="w-100">Width 25rem</div>
<div className="h-112">Height 28rem</div>
<div className="max-w-128">Max width 32rem</div>
```

## Border Radius

```tsx
<div className="rounded-sm">Small radius</div>
<div className="rounded-md">Medium radius</div>
<div className="rounded-lg">Large radius</div>
<div className="rounded-xl">Extra large radius</div>
<div className="rounded-2xl">2XL radius</div>
<div className="rounded-3xl">3XL radius</div>
<div className="rounded-full">Fully rounded</div>
```

## Transitions

### Duration

```tsx
<button className="transition-all duration-300">
  Smooth transition
</button>

<div className="transition-transform duration-500">
  Slower transition
</div>
```

### Custom Timing Functions

```tsx
// Smooth easing
<div className="transition-all ease-smooth">
  Smooth cubic-bezier transition
</div>

// Bounce easing
<button className="transition-transform ease-bounce hover:scale-105">
  Bouncy hover effect
</button>
```

## Z-Index Layering

```tsx
<div className="z-10">Layer 10</div>
<div className="z-50">Layer 50 (middle)</div>
<div className="z-100">Layer 100 (top)</div>
```

## Complete Component Examples

### Service Card

```tsx
<div className="bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6 md:p-8 hover:shadow-glow-hover transition-all duration-300 animate-slide-up">
  <div className="animate-float">
    <Icon className="w-12 h-12 text-primary-500" />
  </div>
  <h3 className="text-2xl font-semibold font-poppins mt-4 mb-2">
    Service Title
  </h3>
  <p className="text-base font-inter text-neutral-600">
    Service description text
  </p>
</div>
```

### Hero Section

```tsx
<section className="relative min-h-screen flex items-center justify-center py-16 md:py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-neutral-900 animate-fade-in">
      Advanced Ultrasound & Genetic Care
    </h1>
    <p className="text-lg md:text-xl font-inter text-neutral-600 mt-6 animate-fade-in">
      Premium diagnostic care with precision and trust
    </p>
    <div className="flex gap-4 mt-8">
      <button className="bg-primary-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-glow-hover transition-all duration-300">
        Get Started
      </button>
    </div>
  </div>
</section>
```

### Navbar

```tsx
<nav className="sticky top-0 z-100 bg-white/70 backdrop-blur-md border-b border-white/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="font-poppins font-bold text-xl text-primary-600">
        ABHIPRAAY
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="text-neutral-700 hover:text-primary-500 transition-colors duration-200">
          About
        </a>
        <a href="#services" className="text-neutral-700 hover:text-primary-500 transition-colors duration-200">
          Services
        </a>
        <a href="#contact" className="text-neutral-700 hover:text-primary-500 transition-colors duration-200">
          Contact
        </a>
      </div>
    </div>
  </div>
</nav>
```

## Best Practices

1. **Use semantic color names**: Prefer `bg-primary-500` over arbitrary color values
2. **Responsive-first**: Always consider mobile, tablet, and desktop layouts
3. **Consistent spacing**: Use the defined spacing scale for consistency
4. **Animation performance**: Use `transform` and `opacity` for smooth animations
5. **Glassmorphism**: Combine `backdrop-blur` with semi-transparent backgrounds
6. **Accessibility**: Ensure sufficient color contrast for text readability
7. **Typography hierarchy**: Use Poppins for headings, Inter for body text

## Performance Tips

1. Use `will-change` for animated elements:
   ```tsx
   <div className="will-change-transform animate-float">...</div>
   ```

2. Limit simultaneous animations for better performance

3. Use `backdrop-blur` sparingly as it can be performance-intensive

4. Prefer CSS transforms over position changes for animations
