# 🚀 Deployment Guide - Aknan Website

## 📋 Quick Deployment Steps

### Step 1: Initialize Git and Push to Repository

Run these commands in your terminal (from the project root directory):

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit for Aknan website"

# Rename branch to main (if needed)
git branch -M main

# Add remote repository
git remote add origin https://github.com/alroshdi/aknan-website.git

# Push to GitHub
git push -u origin main
```

**⚠️ If the remote already exists, use these commands instead:**

```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/alroshdi/aknan-website.git

# Force push (⚠️ Use with caution - this overwrites remote history)
git push -u origin main --force
```

---

### Step 2: Enable GitHub Pages (Manual Setup)

1. **Go to GitHub Repository**
   - Navigate to: https://github.com/alroshdi/aknan-website

2. **Open Settings**
   - Click on the **"Settings"** tab in the repository

3. **Go to Pages**
   - Scroll down to **"Pages"** in the left sidebar
   - Or go directly to: https://github.com/alroshdi/aknan-website/settings/pages

4. **Configure Source**
   - Under **"Source"**, select:
     - **Branch:** `main`
     - **Folder:** `/ (root)`
   
5. **Save**
   - Click **"Save"** button

6. **Wait for Deployment**
   - GitHub will take 1-2 minutes to build and deploy your site

7. **Access Your Site**
   - Your website will be available at:
   - **👉 https://alroshdi.github.io/aknan-website/**

---

### Step 3: Automatic Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site whenever you push to the `main` branch.

**How it works:**
- Every time you push code to the `main` branch, GitHub Actions will:
  1. Checkout your code
  2. Deploy it to the `gh-pages` branch
  3. Your site will be automatically updated

**To use automatic deployment:**
1. The workflow file is already created at `.github/workflows/deploy.yml`
2. After your first push, GitHub Actions will automatically run
3. You can check the deployment status in the **"Actions"** tab of your repository

**Note:** You may need to enable GitHub Actions in your repository settings if it's not already enabled.

---

## 🔄 Updating Your Website

### Method 1: Manual Update

1. Make changes to your files locally
2. Commit and push:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

3. If using GitHub Pages with `main` branch: Site updates automatically
4. If using GitHub Actions: Wait for the workflow to complete (check Actions tab)

### Method 2: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the pencil icon (✏️) to edit
4. Make your changes
5. Commit changes with a message
6. Site will update automatically

---

## 📁 Project Structure

```
aknan-website/
├── index.html              # Home page
├── about.html              # About Us page
├── services.html           # Services page
├── team.html               # Team page
├── contact.html            # Contact page
├── README.md               # Documentation
├── DEPLOYMENT.md           # This file
├── .gitignore              # Git ignore rules
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # Main JavaScript
├── images/                 # Images folder
├── assets/                 # Additional assets
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Actions workflow
```

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Website is accessible at: https://alroshdi.github.io/aknan-website/
- [ ] All pages load correctly (index, about, services, team, contact)
- [ ] Images display properly (if you've added any)
- [ ] Language toggle works (Arabic/English)
- [ ] Contact form is functional
- [ ] Mobile responsive design works
- [ ] WhatsApp button links correctly
- [ ] Google Maps displays (update coordinates if needed)

---

## 🛠️ Troubleshooting

### Issue: Site not loading
- **Solution:** Wait 2-5 minutes after enabling GitHub Pages, then refresh
- Check the "Actions" tab for any deployment errors

### Issue: Changes not appearing
- **Solution:** 
  - Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
  - Check if GitHub Actions workflow completed successfully
  - Verify you pushed to the `main` branch

### Issue: 404 errors on pages
- **Solution:** 
  - Ensure all HTML files are in the root directory
  - Check file names match exactly (case-sensitive)
  - Verify links in navigation are correct

### Issue: CSS/JS not loading
- **Solution:**
  - Check file paths in HTML (should be relative: `css/style.css`)
  - Ensure files are committed and pushed
  - Clear browser cache

---

## 🔗 Useful Links

- **Repository:** https://github.com/alroshdi/aknan-website
- **GitHub Pages:** https://alroshdi.github.io/aknan-website/
- **Actions:** https://github.com/alroshdi/aknan-website/actions
- **Settings:** https://github.com/alroshdi/aknan-website/settings

---

## 📝 Notes

- GitHub Pages is free for public repositories
- Custom domain can be added in Pages settings
- HTTPS is enabled by default
- Site updates automatically on every push to `main` branch
- Maximum file size: 100MB per file
- Maximum repository size: 1GB (recommended: < 500MB)

---

**Last Updated:** 2025
**Repository:** alroshdi/aknan-website

