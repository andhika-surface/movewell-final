# 🚀 MoveWell - Deployment & Setup Guide

## 📁 File Structure

```
├── /data                          ← Data storage (TypeScript files)
│   ├── articles.ts               ← All articles data
│   ├── promos.ts                 ← All promo data
│   └── /images                   ← Uploaded images folder
│
├── /components
│   ├── /admin                    ← Admin panel components
│   │   ├── AdminLogin.tsx        ← Login page
│   │   ├── AdminDashboard.tsx    ← Main dashboard
│   │   ├── ArticleEditor.tsx     ← Article CRUD editor
│   │   └── PromoEditor.tsx       ← Promo editor
│   │
│   ├── ArticlesPage.tsx          ← Public articles page (reads from JSON)
│   ├── PromoPage.tsx             ← Public promo page (reads from JSON)
│   └── ... (other components)
│
├── App.tsx                        ← Main app with admin routing
├── ADMIN_GUIDE.md                 ← Admin panel user guide
└── DEPLOYMENT_GUIDE.md            ← This file
```

---

## 🔧 Setup Instructions

### 1. Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit with admin panel"

# Add remote (replace with your repo)
git remote add origin https://github.com/your-username/movewell-website.git

# Push to main branch
git push -u origin main
```

### 2. Deploy to Vercel/Netlify (Recommended)

**Vercel:**
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Framework Preset: Vite
5. Click "Deploy"
6. Your site will be live at: `https://your-project.vercel.app`

**Netlify:**
1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub → Select repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy"

### 3. Connect Custom Domain

**On Vercel:**
1. Go to Project Settings → Domains
2. Add your domain: `movewellindonesia.com`
3. Follow DNS configuration instructions
4. Add CNAME record to your domain provider

**On Netlify:**
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

---

## 🔐 Admin Access

### Admin Panel URL (KEEP SECRET!)
```
https://your-domain.com/admin-access-2024
```

### Login Credentials
- **Email:** `admin@movewellindonesia.com`
- **Password:** `Kramat010`

⚠️ **Important:** Jangan share URL ini ke publik!

---

## 📝 How Content Management Works

### Architecture:
```
Admin Panel (Edit) → Generate JSON → Copy → 
Paste to GitHub → Commit → Auto Deploy → Website Updated
```

### Data Flow:
1. **Admin edits content** in browser (admin panel)
2. **JSON generated** from form data
3. **Copy JSON** to clipboard
4. **Paste to GitHub** `/data/articles.ts` or `/data/promos.ts` (replace data only)
5. **Commit changes** to GitHub
6. **Auto deployment** triggers (Vercel/Netlify)
7. **Build process** compiles new TypeScript into app (1-2 minutes)
8. **Website updates** with new content

### Why This Approach?
- ✅ **Free:** No database hosting costs
- ✅ **Simple:** No backend server needed
- ✅ **Version Control:** All changes tracked in Git
- ✅ **Rollback:** Easy to revert changes
- ✅ **Fast:** Static site = super fast loading
- ✅ **Type-safe:** JSON imported as modules, no runtime fetch errors

---

## 🎨 How to Update Content

### For Marketing Team:

1. **Open Admin Panel**
   - URL: `https://your-domain.com/admin-access-2024`
   - Login with credentials

2. **Edit Articles/Promos**
   - Use form to add/edit/delete content
   - Fill in all required fields
   - Click "Save"

3. **Copy JSON**
   - Click "Copy JSON" button at top
   - JSON copied to clipboard

4. **Commit to GitHub**
   - Open GitHub repository in browser
   - Go to `/data` folder
   - Click on `articles.json` or `promos.json`
   - Click "Edit" button (pencil icon)
   - Delete old content
   - Paste new JSON
   - Scroll down, click "Commit changes"

5. **Wait for Deployment**
   - Wait 1-2 minutes
   - Refresh website to see changes
   - If not updated, clear cache (Ctrl+Shift+R)

### For Images:

1. **Upload to GitHub:**
   - Go to `/data/images` folder
   - Click "Upload files"
   - Drag & drop images
   - Commit

2. **Use in Admin Panel:**
   - Image URL: `/data/images/your-image.jpg`
   - Or use Unsplash URL

---

## 🔄 Auto Deployment

### Vercel (Recommended)
- **Trigger:** Push to `main` branch
- **Build Time:** ~1 minute
- **Status:** Check at https://vercel.com/your-project

### Netlify
- **Trigger:** Push to `main` branch
- **Build Time:** ~2 minutes
- **Status:** Check at https://app.netlify.com/sites/your-site

---

## 🛠️ Troubleshooting

### Website not updating after commit?
1. Check GitHub Actions/Vercel/Netlify build status
2. Clear browser cache (Ctrl+Shift+R)
3. Wait 2-3 minutes for deployment
4. Check JSON syntax at https://jsonlint.com

### Admin panel not accessible?
1. Make sure URL is exactly: `/admin-access-2024`
2. Clear localStorage: `localStorage.clear()` in console
3. Try incognito/private mode

### Images not loading?
1. Check image path: `/data/images/filename.jpg`
2. Verify file uploaded to GitHub
3. Check file name (case-sensitive)
4. Use direct Unsplash URL as alternative

### JSON format error?
1. Don't edit JSON manually in GitHub
2. Always use Admin Panel to generate JSON
3. If corrupted, restore from previous commit
4. Validate at https://jsonlint.com

---

## 🔒 Security

### Admin Panel:
- URL is hidden (not linked publicly)
- Basic authentication with localStorage
- Password hardcoded (change in code if needed)

### To Change Password:
Edit `/components/admin/AdminLogin.tsx`:
```tsx
if (email === "admin@movewellindonesia.com" && password === "NEW_PASSWORD") {
```

### To Change Admin Email:
Update in same file + update in `ADMIN_GUIDE.md`

---

## 📊 Monitoring

### Check Deployment Status:
- **Vercel:** https://vercel.com/dashboard
- **Netlify:** https://app.netlify.com

### Check Git History:
```bash
git log --oneline
```

### Rollback to Previous Version:
```bash
# Find commit hash
git log --oneline

# Revert to specific commit
git revert <commit-hash>

# Or reset (careful!)
git reset --hard <commit-hash>
git push --force
```

---

## 📈 Analytics (Optional)

Add Google Analytics:
1. Get GA tracking ID
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

---

## 🆘 Support Contacts

- **Developer:** [Your contact]
- **GitHub Repo:** https://github.com/your-username/movewell-website
- **Domain Provider:** [Your domain provider]
- **Hosting:** Vercel/Netlify support

---

## 📝 Changelog

### Version 1.0 (November 2024)
- ✅ Multi-page website
- ✅ Admin panel with login
- ✅ JSON-based content management
- ✅ Articles & Promos editor
- ✅ GitHub integration
- ✅ Auto deployment

---

**Deployment Date:** November 2024  
**Last Updated:** November 6, 2024
