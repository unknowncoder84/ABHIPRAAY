# Before/After Slider Implementation

## Overview
The before/after slider component has been successfully integrated into the About section of the website. This interactive component allows visitors to compare two images by dragging a slider handle.

## Features
- **Interactive Slider**: Drag the handle left/right to reveal before/after images
- **Touch Support**: Works on mobile devices with touch gestures
- **Smooth Animations**: Hover effects and smooth transitions
- **Labeled Images**: Clear "Before" and "After" labels on each side
- **Responsive Design**: Adapts to all screen sizes

## Location
The slider is displayed in the **About Section** of the homepage, between the main content and the features grid.

## Adding Your Images

### Step 1: Prepare Your Images
1. Split your before/after comparison image into two separate files:
   - One showing the "before" state
   - One showing the "after" state
2. Ensure both images have the same dimensions (recommended: 1600x900 pixels)
3. Save them as JPG or PNG format
4. Keep file size under 500KB each for optimal loading

### Step 2: Place Images in Directory
Save your images in the following location:
```
public/images/before-after/
├── before.jpg  (your "before" image)
└── after.jpg   (your "after" image)
```

### Step 3: Verify
1. Restart the development server if running
2. Navigate to the homepage
3. Scroll to the About section
4. You should see your before/after slider

## Customization

### Change Labels
Edit `sections/AboutSection.tsx` and modify the BeforeAfterSlider props:
```tsx
<BeforeAfterSlider
  beforeImage={BEFORE_AFTER_IMAGES.before}
  afterImage={BEFORE_AFTER_IMAGES.after}
  beforeLabel="Your Custom Before Label"
  afterLabel="Your Custom After Label"
/>
```

### Change Section Title
Edit the heading text in `sections/AboutSection.tsx`:
```tsx
<h3 className="text-2xl md:text-3xl font-bold font-poppins text-neutral-900 mb-3">
  Your Custom Title
</h3>
```

### Use Different Images
Edit `utils/constants.ts` and update the image paths:
```typescript
export const BEFORE_AFTER_IMAGES = {
  before: '/images/your-folder/your-before-image.jpg',
  after: '/images/your-folder/your-after-image.jpg',
};
```

## Technical Details

### Component Location
- Component: `components/BeforeAfterSlider.tsx`
- Integration: `sections/AboutSection.tsx`
- Constants: `utils/constants.ts`

### How It Works
1. The component uses clip-path CSS to reveal the "before" image
2. Mouse/touch events update the slider position
3. Framer Motion provides smooth animations
4. Next.js Image component optimizes image loading

## Next Steps
1. Place your before/after images in `public/images/before-after/`
2. Test the slider functionality locally
3. Commit and push changes to deploy to Netlify

## Deployment
Once you've added your images:
```bash
git add .
git commit -m "Add before/after comparison images"
git push origin main
```

Netlify will automatically deploy the updated website with your images.
