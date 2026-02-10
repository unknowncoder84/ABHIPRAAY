# Button Component Documentation

## Overview

The Button component is a versatile, reusable UI element that supports multiple variants, sizes, and interactive features including ripple effects and hover animations. It can function as both a standard button and a Next.js Link.

**Requirements Satisfied:**
- Requirement 1.5: Hero section action buttons
- Requirement 8.2: Button hover effects and ripple animations

## Features

✅ **Three Variants**: Primary, Secondary, and Outline  
✅ **Three Sizes**: Small (sm), Medium (md), Large (lg)  
✅ **Ripple Effect**: Animated ripple on click  
✅ **Hover Animation**: Smooth scale animation on hover  
✅ **Dual Mode**: Works as both button and link (href)  
✅ **Accessibility**: Full keyboard navigation and ARIA support  
✅ **Disabled State**: Proper disabled styling and behavior  
✅ **Custom Styling**: Accepts custom className prop  

## Installation

The Button component is located at `components/Button.tsx` and can be imported as:

```typescript
import { Button } from '@/components/Button';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `children` | `React.ReactNode` | Required | Button content |
| `onClick` | `() => void` | `undefined` | Click handler function |
| `href` | `string` | `undefined` | URL for link mode |
| `ripple` | `boolean` | `true` | Enable/disable ripple effect |
| `className` | `string` | `''` | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disable button |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type attribute |
| `ariaLabel` | `string` | `undefined` | Accessibility label |

## Usage Examples

### Basic Button

```tsx
<Button>Click Me</Button>
```

### Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### With Click Handler

```tsx
<Button onClick={() => console.log('Clicked!')}>
  Click Me
</Button>
```

### As Link

```tsx
<Button href="/contact">Contact Us</Button>
<Button href="https://example.com">External Link</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

### Without Ripple Effect

```tsx
<Button ripple={false}>No Ripple</Button>
```

### Form Buttons

```tsx
<Button type="submit">Submit</Button>
<Button type="reset">Reset</Button>
```

### Real-world Examples (Hero Section)

```tsx
// Call button
<Button href="tel:+919653326172" variant="primary">
  📞 Call Now
</Button>

// WhatsApp button
<Button href="https://wa.me/919653326172" variant="secondary">
  💬 WhatsApp
</Button>

// Email button
<Button href="mailto:drmoves@gmail.com" variant="outline">
  ✉️ Email Us
</Button>
```

### Custom Styling

```tsx
<Button className="shadow-2xl hover:shadow-3xl">
  Custom Shadow
</Button>
```

### Combination Example

```tsx
<Button
  variant="outline"
  size="lg"
  href="/services"
  className="font-bold"
  ariaLabel="View our services"
>
  Explore Services
</Button>
```

## Styling Details

### Variant Styles

**Primary:**
- Background: `bg-primary-500` (soft blue)
- Text: `text-white`
- Hover: `hover:bg-primary-600`
- Shadow: `shadow-md hover:shadow-lg`

**Secondary:**
- Background: `bg-white`
- Text: `text-primary-600`
- Hover: `hover:bg-primary-50`
- Border: `border border-primary-200`
- Shadow: `shadow-md hover:shadow-lg`

**Outline:**
- Background: `bg-transparent`
- Text: `text-primary-600`
- Border: `border-2 border-primary-500`
- Hover: `hover:bg-primary-50 hover:border-primary-600`

### Size Styles

**Small (sm):**
- Padding: `px-4 py-2`
- Font: `text-sm`

**Medium (md):**
- Padding: `px-6 py-3`
- Font: `text-base`

**Large (lg):**
- Padding: `px-8 py-4`
- Font: `text-lg`

### Base Styles

All buttons include:
- Rounded corners: `rounded-lg`
- Font weight: `font-medium`
- Smooth transitions: `transition-all duration-300`
- Focus ring: `focus:ring-2 focus:ring-primary-500`
- Disabled opacity: `disabled:opacity-50`

## Animations

### Hover Scale Animation

The button scales up slightly on hover using Framer Motion:
- Rest: `scale: 1`
- Hover: `scale: 1.05`
- Tap: `scale: 0.95`

### Ripple Effect

On click, a ripple animation emanates from the click point:
- Duration: 600ms
- Effect: Expands and fades out
- Can be disabled with `ripple={false}`

## Accessibility

The Button component follows accessibility best practices:

✅ **Keyboard Navigation**: Fully keyboard accessible  
✅ **Focus Indicators**: Clear focus ring on focus  
✅ **ARIA Labels**: Support for custom aria-label  
✅ **Disabled State**: Proper aria-disabled attribute  
✅ **Semantic HTML**: Uses correct button/link elements  
✅ **Screen Reader Support**: Descriptive labels and roles  

## Browser Support

The Button component works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lightweight**: Minimal bundle size impact
- **Optimized Animations**: Uses CSS transforms for smooth 60fps animations
- **Lazy Ripple Creation**: Ripples are created on-demand
- **Automatic Cleanup**: Ripple elements are removed after animation

## Testing

The Button component has comprehensive test coverage:
- 32 unit tests covering all features
- Tests for variants, sizes, interactions, animations
- Accessibility tests
- Edge case handling

Run tests with:
```bash
npm test -- __tests__/unit/Button.test.tsx
```

## Common Patterns

### Hero Section CTA Buttons

```tsx
<div className="flex gap-4">
  <Button href="tel:+919653326172" size="lg">
    Call Now
  </Button>
  <Button href={WHATSAPP_URL} variant="secondary" size="lg">
    WhatsApp
  </Button>
  <Button href={EMAIL_URL} variant="outline" size="lg">
    Email Us
  </Button>
</div>
```

### Navigation Menu

```tsx
<Button href="#services" variant="outline" size="sm">
  Our Services
</Button>
```

### Form Actions

```tsx
<div className="flex gap-4">
  <Button type="submit" variant="primary">
    Submit
  </Button>
  <Button type="button" variant="outline" onClick={handleCancel}>
    Cancel
  </Button>
</div>
```

## Troubleshooting

### Ripple not showing
- Ensure `ripple` prop is not set to `false`
- Check that button is not disabled
- Verify click event is firing

### Link not working
- Ensure `href` prop is provided
- Check that button is not disabled
- Verify Next.js Link is properly configured

### Styles not applying
- Check for CSS conflicts
- Ensure Tailwind CSS is properly configured
- Verify custom className doesn't override critical styles

## Related Components

- **AnimatedIcon**: For icon animations
- **ServiceCard**: Uses Button for CTAs
- **Navbar**: Uses Button for menu items
- **HeroSection**: Primary use case for Button

## Future Enhancements

Potential future improvements:
- Icon support (left/right positioning)
- Loading state with spinner
- Button groups
- Tooltip integration
- More animation variants

## Contributing

When modifying the Button component:
1. Update tests to maintain coverage
2. Ensure accessibility is preserved
3. Test across all variants and sizes
4. Update this documentation
5. Verify performance impact

## License

Part of the ABHIPRAAY Medical Website project.
