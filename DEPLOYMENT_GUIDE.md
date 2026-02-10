# 🚀 Deployment Guide for ABHIPRAAY Website

## ✅ Code Successfully Pushed to GitHub

Your code is now available at: **https://github.com/unknowncoder84/ABHIPRAAY**

---

## 📸 IMPORTANT: Add Real Clinic Images

Before deploying, you need to add the real clinic images from your message.

### Step 1: Save Images Locally

From the images you shared in the chat, save them with these names in `public/images/gallery/`:

1. **clinic-1.jpg** - Laboratory with medical equipment (first image)
2. **clinic-2.jpg** - Examination room with bed (second image)
3. **clinic-3.jpg** - X-ray/Imaging room (third image)
4. **clinic-4.jpg** - Waiting area with blue ceiling (fourth image)
5. **clinic-5.jpg** - Clinic signage with ABHIPRAAY logo (fifth image)
6. **clinic-6.jpg** - Entrance with glass doors (sixth image)
7. **clinic-7.jpg** - Doctor's office (seventh image)

### Step 2: Optimize Images

Before adding to the repository:
- Resize to 1200x800 pixels (or maintain 3:2 aspect ratio)
- Compress to under 500KB each using:
  - https://tinypng.com/
  - https://squoosh.app/

### Step 3: Add Images to Repository

```bash
# Add the images
git add public/images/gallery/*.jpg

# Commit
git commit -m "Add real clinic images to gallery"

# Push to GitHub
git push origin main
```

---

## 🌐 Deploy to Netlify

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Go to Netlify**: https://app.netlify.com/
2. **Sign up/Login** with your GitHub account
3. **Click "Add new site"** → "Import an existing project"
4. **Choose GitHub** and authorize Netlify
5. **Select repository**: `unknowncoder84/ABHIPRAAY`
6. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18
7. **Click "Deploy site"**

Netlify will automatically:
- Install dependencies
- Build your Next.js app
- Deploy to a live URL
- Provide HTTPS automatically
- Set up continuous deployment (auto-deploy on git push)

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

---

## 🔧 Post-Deployment Configuration

### 1. Custom Domain (Optional)

In Netlify Dashboard:
1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow instructions to configure DNS

### 2. Environment Variables (If needed)

If you add any API keys or secrets:
1. Go to **Site settings** → **Environment variables**
2. Add your variables
3. Redeploy the site

### 3. Forms (If you add contact forms later)

Netlify has built-in form handling:
- Add `netlify` attribute to your forms
- Forms will appear in Netlify Dashboard

---

## 📊 Monitoring Your Site

After deployment, Netlify provides:
- **Live URL**: Your site will be at `https://[site-name].netlify.app`
- **Deploy logs**: View build and deploy logs
- **Analytics**: Track visitors (paid feature)
- **Performance**: Lighthouse scores

---

## 🔄 Continuous Deployment

Every time you push to GitHub:
1. Netlify automatically detects the push
2. Runs the build command
3. Deploys the new version
4. Your site updates automatically

To push updates:
```bash
git add .
git commit -m "Your update message"
git push origin main
```

---

## ⚡ Quick Deployment Checklist

- [x] Code pushed to GitHub ✅
- [ ] Add real clinic images to `public/images/gallery/`
- [ ] Commit and push images to GitHub
- [ ] Sign up for Netlify account
- [ ] Connect GitHub repository to Netlify
- [ ] Deploy site
- [ ] Test live site
- [ ] (Optional) Configure custom domain

---

## 🆘 Troubleshooting

### Build Fails on Netlify

1. Check build logs in Netlify Dashboard
2. Ensure Node version is 18 or higher
3. Verify all dependencies are in package.json

### Images Not Showing

1. Ensure images are in `public/images/gallery/`
2. Check file names match exactly (case-sensitive)
3. Verify images are committed to git

### Site Not Updating

1. Check if build succeeded in Netlify
2. Clear browser cache (Ctrl+Shift+R)
3. Check deploy logs for errors

---

## 📞 Need Help?

If you encounter any issues:
1. Check Netlify documentation: https://docs.netlify.com/
2. Check Next.js deployment guide: https://nextjs.org/docs/deployment
3. Contact your web developer

---

## 🎉 Your Site Will Be Live!

Once deployed, your professional medical website will be:
- ✅ Live on the internet
- ✅ Accessible via HTTPS
- ✅ Mobile responsive
- ✅ Fast and optimized
- ✅ Automatically updated on git push

**Next Steps:**
1. Add the clinic images
2. Push to GitHub
3. Deploy to Netlify
4. Share your live URL!
