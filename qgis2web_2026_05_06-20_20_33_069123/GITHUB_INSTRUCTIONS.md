# GitHub Setup Instructions

Follow these steps to push your Graduation Parking Areas Map to GitHub:

## 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Sign in to your account (create one if you don't have it)
3. Click the **+** icon in the top-right corner
4. Select **New repository**
5. Name it: `graduation-parking-areas-map`
6. Add a description: "Interactive web map for graduation parking areas"
7. Choose **Public** or **Private**
8. Click **Create repository**

## 2. Initialize Git in Your Local Folder

Open PowerShell or Command Prompt in your project folder and run:

```powershell
cd "c:\Users\T\Documents\qgis2web_2026_05_06-20_20_33_069123"

git init
git add .
git commit -m "Initial commit: Graduation Parking Areas Map"
```

## 3. Add Your GitHub Repository as Remote

Replace `YOUR_USERNAME` with your GitHub username:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/graduation-parking-areas-map.git
git branch -M main
```

## 4. Push to GitHub

```powershell
git push -u origin main
```

If you get a credentials prompt, enter your GitHub personal access token (not your password).

## 5. Create a Personal Access Token (if needed)

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click **Generate new token**
3. Select `repo` scope
4. Copy the token and use it as your password when prompted

## 6. Share Your Map

Once pushed to GitHub, you can:

1. **Share the Repository Link**: 
   `https://github.com/YOUR_USERNAME/graduation-parking-areas-map`

2. **Deploy to GitHub Pages** (for live preview):
   - Go to repository Settings → Pages
   - Select `main` branch as source
   - Your map will be live at: `https://YOUR_USERNAME.github.io/graduation-parking-areas-map`

3. **Share the Live Map Link**:
   `https://YOUR_USERNAME.github.io/graduation-parking-areas-map`

## Files Included

- `index.html` - Main map file
- `README.md` - Project documentation
- `layers/` - Map layer data
- `styles/` - Layer styling
- `resources/` - JavaScript and CSS libraries
- `.gitignore` - Git ignore rules

## Next Steps

- Update the README.md with your specific details
- Add your GitHub username to the links above
- Push updates regularly with: `git add .` → `git commit -m "message"` → `git push`

Happy mapping! 🗺️
