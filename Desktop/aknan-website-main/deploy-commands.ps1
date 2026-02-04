# Aknan Website - Git Deployment Commands
# Run these commands in PowerShell from the project root directory

Write-Host "🚀 Starting Git Deployment for Aknan Website..." -ForegroundColor Green

# Step 1: Initialize Git
Write-Host "`n📦 Initializing Git repository..." -ForegroundColor Yellow
git init

# Step 2: Add all files
Write-Host "`n➕ Adding all files..." -ForegroundColor Yellow
git add .

# Step 3: Create initial commit
Write-Host "`n💾 Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit for Aknan website"

# Step 4: Rename branch to main
Write-Host "`n🌿 Setting branch to main..." -ForegroundColor Yellow
git branch -M main

# Step 5: Check if remote exists
Write-Host "`n🔗 Checking remote repository..." -ForegroundColor Yellow
$remoteExists = git remote get-url origin 2>$null

if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' already exists. Removing it..." -ForegroundColor Red
    git remote remove origin
}

# Step 6: Add remote repository
Write-Host "`n🔗 Adding remote repository..." -ForegroundColor Yellow
git remote add origin https://github.com/alroshdi/aknan-website.git

# Step 7: Push to GitHub
Write-Host "`n📤 Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "⚠️  If this is your first push, you may need to authenticate." -ForegroundColor Cyan
git push -u origin main

Write-Host "`n✅ Deployment complete!" -ForegroundColor Green
Write-Host "`n📝 Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to: https://github.com/alroshdi/aknan-website/settings/pages" -ForegroundColor White
Write-Host "2. Select Branch: main, Folder: / (root)" -ForegroundColor White
Write-Host "3. Your site will be at: https://alroshdi.github.io/aknan-website/" -ForegroundColor White

