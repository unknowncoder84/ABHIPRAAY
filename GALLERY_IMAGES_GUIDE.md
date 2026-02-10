# Gallery Images Guide

## How to Add Real Clinic Images

The website currently uses placeholder SVG images for the gallery. To replace them with real photos of your clinic:

### Step 1: Prepare Your Images

1. Take high-quality photos of your clinic:
   - Reception and waiting area
   - Ultrasound examination rooms
   - Genetic counseling rooms
   - Diagnostic laboratory
   - Consultation rooms
   - Equipment and technology

2. Recommended image specifications:
   - **Format**: JPG or PNG
   - **Dimensions**: 1200x800 pixels (3:2 aspect ratio)
   - **File size**: Under 500KB each (optimize for web)
   - **Quality**: High resolution but web-optimized

### Step 2: Replace Placeholder Images

Replace the SVG files in `public/images/gallery/` with your actual photos:

```
public/images/gallery/
├── clinic-1.jpg  (Reception & Waiting Area)
├── clinic-2.jpg  (Ultrasound Suite)
├── clinic-3.jpg  (Genetic Counseling Room)
├── clinic-4.jpg  (Diagnostic Laboratory)
└── clinic-5.jpg  (Consultation Room)
```

### Step 3: Update File Extensions (if needed)

If you're using PNG files instead of JPG, update the file paths in:

**File**: `sections/GallerySection.tsx`

```typescript
const galleryImages = [
  '/images/gallery/clinic-1.png',  // Change .svg to .png or .jpg
  '/images/gallery/clinic-2.png',
  '/images/gallery/clinic-3.png',
  '/images/gallery/clinic-4.png',
  '/images/gallery/clinic-5.png',
];
```

### Step 4: Add More Images (Optional)

To add more than 5 images:

1. Add your images to `public/images/gallery/`
2. Update the `galleryImages` array in `sections/GallerySection.tsx`:

```typescript
const galleryImages = [
  '/images/gallery/clinic-1.jpg',
  '/images/gallery/clinic-2.jpg',
  '/images/gallery/clinic-3.jpg',
  '/images/gallery/clinic-4.jpg',
  '/images/gallery/clinic-5.jpg',
  '/images/gallery/clinic-6.jpg',  // Add more images
  '/images/gallery/clinic-7.jpg',
];
```

### Image Optimization Tips

1. **Use online tools** to compress images:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - ImageOptim (Mac)

2. **Maintain aspect ratio**: Keep images at 3:2 ratio (e.g., 1200x800, 1800x1200)

3. **Use descriptive filenames**: 
   - `reception-area.jpg`
   - `ultrasound-room-1.jpg`
   - `genetic-counseling.jpg`

### Getting Images from Google Maps

If you have images on your Google Maps listing:

1. Go to your Google Business Profile
2. Download the photos you've uploaded
3. Optimize them for web use
4. Place them in the gallery folder

### Need Help?

If you need assistance with image optimization or have questions about the gallery, please reach out to your web developer.

## Current Gallery Features

- ✅ Auto-play slider (4 seconds per image)
- ✅ Manual navigation (left/right arrows)
- ✅ Dot indicators for each image
- ✅ Smooth slide animations
- ✅ Mobile responsive
- ✅ Touch/swipe support (on mobile devices)
