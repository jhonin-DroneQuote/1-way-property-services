# Deployment Instructions for Pressure Washing Website

## GitHub Setup Commands
After creating your GitHub repository, run these commands:

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/pressure-washing-site.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Vercel Deployment Steps

### Option 1: Automatic Deployment (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "Import Project"
4. Select your `pressure-washing-site` repository
5. Click "Deploy"
6. Vercel will automatically deploy your site!

### Option 2: Manual Upload
1. Download the latest code from GitHub as ZIP
2. Upload to Vercel dashboard
3. Deploy

## After Deployment
Your website will be available at: `https://your-project-name.vercel.app`

## Manual Git Commands (if needed)
```bash
git status
git add .
git commit -m "Update: Add new features"
git push origin main
```
