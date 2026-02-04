# 🚀 Complete GitHub Deployment Guide - Aknan Website

## ✅ All Files Created

- ✅ `.github/workflows/deploy.yml` - Automatic deployment workflow
- ✅ `.gitignore` - Git ignore rules
- ✅ `DEPLOYMENT.md` - Detailed deployment guide
- ✅ `deploy-commands.ps1` - PowerShell deployment script
- ✅ `deploy-commands.sh` - Bash deployment script

---

## 📋 Quick Start - Run These Commands

### Option 1: Use the PowerShell Script (Windows)

```powershell
.\deploy-commands.ps1
```

### Option 2: Use the Bash Script (Mac/Linux/Git Bash)

```bash
chmod +x deploy-commands.sh
./deploy-commands.sh
```

### Option 3: Run Commands Manually

Copy and paste these commands one by one:

```bash
# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit for Aknan website"

# Rename branch to main
git branch -M main

# Remove existing remote (if exists)
git remote remove origin

# Add remote repository
git remote add origin https://github.com/alroshdi/aknan-website.git

# Push to GitHub
git push -u origin main
```

**⚠️ If you get an error about existing remote, use:**
```bash
git remote remove origin
git remote add origin https://github.com/alroshdi/aknan-website.git
git push -u origin main --force
```

---

## 🌐 Enable GitHub Pages

### Step-by-Step Instructions:

1. **Go to GitHub Repository**
   - Open: https://github.com/alroshdi/aknan-website

2. **Navigate to Settings**
   - Click **"Settings"** tab (top menu)

3. **Go to Pages**
   - Click **"Pages"** in the left sidebar
   - Or go directly: https://github.com/alroshdi/aknan-website/settings/pages

4. **Configure Source**
   - Under **"Source"** section:
     - **Branch:** Select `main`
     - **Folder:** Select `/ (root)`
   
5. **Save**
   - Click the **"Save"** button

6. **Wait for Deployment**
   - GitHub will build your site (takes 1-2 minutes)
   - You'll see a green checkmark when ready

7. **Access Your Live Site**
   - **👉 https://alroshdi.github.io/aknan-website/**

---

## 🔄 Automatic Deployment Setup

### GitHub Actions Workflow

The repository includes an automatic deployment workflow at `.github/workflows/deploy.yml`.

**How it works:**
- ✅ Automatically runs on every push to `main` branch
- ✅ Deploys to `gh-pages` branch
- ✅ Updates your live site automatically

**To verify it's working:**
1. After your first push, go to: https://github.com/alroshdi/aknan-website/actions
2. You should see a workflow run called "Deploy Aknan Website"
3. Click on it to see the deployment status

**Note:** If GitHub Actions is disabled, enable it in:
- Settings → Actions → General → Allow all actions

---

## 📁 Final Project Structure

```
aknan-website/
├── index.html
├── about.html
├── services.html
├── team.html
├── contact.html
├── README.md
├── DEPLOYMENT.md
├── GITHUB_DEPLOYMENT.md (this file)
├── .gitignore
├── deploy-commands.ps1
├── deploy-commands.sh
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
├── assets/
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## 🔗 Important Links

| Purpose | URL |
|---------|-----|
| **Repository** | https://github.com/alroshdi/aknan-website |
| **Live Website** | https://alroshdi.github.io/aknan-website/ |
| **Pages Settings** | https://github.com/alroshdi/aknan-website/settings/pages |
| **Actions** | https://github.com/alroshdi/aknan-website/actions |
| **Repository Settings** | https://github.com/alroshdi/aknan-website/settings |

---

## 📝 Updating Your Website

### After Making Changes:

1. **Make your changes** to HTML, CSS, or JS files

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Site updates automatically:**
   - If using GitHub Pages with `main` branch: Updates in 1-2 minutes
   - If using GitHub Actions: Check Actions tab for deployment status

---

## ✅ Verification Checklist

After deployment, check:

- [ ] Repository is accessible: https://github.com/alroshdi/aknan-website
- [ ] All files are committed and pushed
- [ ] GitHub Pages is enabled in Settings
- [ ] Website loads at: https://alroshdi.github.io/aknan-website/
- [ ] All pages work (index, about, services, team, contact)
- [ ] Language toggle works (Arabic/English)
- [ ] Mobile responsive design works
- [ ] Contact form is functional
- [ ] GitHub Actions workflow runs successfully (check Actions tab)

---

## 🛠️ Troubleshooting

### Problem: "Repository not found" or authentication error
**Solution:**
- Make sure you're logged into GitHub
- Use GitHub Personal Access Token if 2FA is enabled
- Or use GitHub Desktop for easier authentication

### Problem: Site shows 404
**Solution:**
- Wait 2-5 minutes after enabling Pages
- Check that `index.html` is in the root directory
- Verify branch is set to `main` in Pages settings

### Problem: Changes not appearing
**Solution:**
- Clear browser cache (Ctrl+F5)
- Check GitHub Actions for errors
- Verify you pushed to `main` branch
- Wait a few minutes for GitHub to rebuild

### Problem: CSS/JS not loading
**Solution:**
- Check file paths are relative (e.g., `css/style.css`)
- Ensure all files are committed
- Check browser console for 404 errors

---

## 🎯 Next Steps After Deployment

1. **Update Contact Information**
   - Edit `contact.html` with real phone/email
   - Update Google Maps coordinates
   - Update WhatsApp number in `js/main.js`

2. **Add Real Images**
   - Add company logo to `images/` folder
   - Add team photos
   - Add client logos

3. **Customize Content**
   - Update company information
   - Add real service descriptions
   - Update team member details

4. **Test Everything**
   - Test on mobile devices
   - Test language toggle
   - Test contact form
   - Test all navigation links

5. **SEO Optimization** (Optional)
   - Add Google Analytics
   - Submit sitemap to Google Search Console
   - Add meta descriptions for each page

---

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review GitHub Actions logs
3. Check GitHub Pages build logs in Settings → Pages

---

**🎉 Your website is ready to deploy!**

Run the commands above to push to GitHub, then enable Pages in settings.

**Live URL:** https://alroshdi.github.io/aknan-website/

