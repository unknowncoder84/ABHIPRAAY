# Quick Guide: Add Your Before/After Images

## What You Need to Do

You provided a before/after comparison image. Now you need to split it into two separate images and add them to the project.

## Steps

### 1. Split Your Image
Your image shows a before/after comparison side by side. You need to:
- Crop the LEFT side (before) and save as `before.jpg`
- Crop the RIGHT side (after) and save as `after.jpg`

You can use any image editor:
- Windows: Paint, Paint 3D, or Photos app
- Online: Photopea.com (free Photoshop alternative)
- Mobile: Any photo editing app

### 2. Save the Images
Place both images in this folder:
```
public/images/before-after/
```

The folder structure should look like:
```
public/
  images/
    before-after/
      before.jpg  ← Your "before" image
      after.jpg   ← Your "after" image
```

### 3. Test Locally
1. Make sure your development server is running on port 3002
2. Open http://localhost:3002 in your browser
3. Scroll down to the "About" section
4. You should see your interactive before/after slider!

### 4. Deploy to Netlify
Once you're happy with how it looks:
```bash
git add public/images/before-after/
git commit -m "Add before/after comparison images"
git push origin main
```

Netlify will automatically deploy your changes.

## Image Tips
- Both images should be the same size
- Recommended: 1600x900 pixels (16:9 ratio)
- Keep file size under 500KB each
- Use JPG format for photos

## Need Help?
If you need help splitting the image or have questions, just ask!
