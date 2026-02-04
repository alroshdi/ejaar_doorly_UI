#!/bin/bash
# Aknan Website - Git Deployment Commands
# Run these commands in Git Bash or Terminal from the project root directory

echo "🚀 Starting Git Deployment for Aknan Website..."

# Step 1: Initialize Git
echo ""
echo "📦 Initializing Git repository..."
git init

# Step 2: Add all files
echo ""
echo "➕ Adding all files..."
git add .

# Step 3: Create initial commit
echo ""
echo "💾 Creating initial commit..."
git commit -m "Initial commit for Aknan website"

# Step 4: Rename branch to main
echo ""
echo "🌿 Setting branch to main..."
git branch -M main

# Step 5: Check if remote exists and remove if needed
echo ""
echo "🔗 Checking remote repository..."
if git remote get-url origin &>/dev/null; then
    echo "⚠️  Remote 'origin' already exists. Removing it..."
    git remote remove origin
fi

# Step 6: Add remote repository
echo ""
echo "🔗 Adding remote repository..."
git remote add origin https://github.com/alroshdi/aknan-website.git

# Step 7: Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
echo "⚠️  If this is your first push, you may need to authenticate."
git push -u origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "1. Go to: https://github.com/alroshdi/aknan-website/settings/pages"
echo "2. Select Branch: main, Folder: / (root)"
echo "3. Your site will be at: https://alroshdi.github.io/aknan-website/"

