# ⚡ Movewell Recovery - Quick Start Guide

## 🎯 Untuk Marketing/Admin Team

### 🔐 Login Info
- **URL:** `https://your-domain.com/adminbackend` (RAHASIA!)
- **Email:** `admin@movewellindonesia.com`
- **Password:** `Kramat010`

### ✏️ Edit Artikel (6 Langkah Mudah)
1. Buka admin panel → Login
2. Pilih tab **"Articles"**
3. Klik "Add New Article" atau Edit artikel existing
4. Isi form → Klik "Save"
5. Klik **"Copy JSON"** → Paste ke GitHub `/data/articles.ts` (replace data only) → Commit
6. Website auto-rebuild & deploy (1-2 menit) → Refresh browser

### 💰 Edit Promo (6 Langkah Mudah)
1. Buka admin panel → Login
2. Pilih tab **"Promos"**
3. Edit promo header, rates, atau voucher packs
4. Klik "Save All Changes"
5. Klik **"Copy JSON"** → Paste ke GitHub `/data/promos.ts` (replace data only) → Commit
6. Website auto-rebuild & deploy (1-2 menit) → Refresh browser

### 🖼️ Upload Gambar
1. GitHub → `/data/images` folder
2. Upload files → Commit
3. URL gambar: `/data/images/nama-file.jpg`
4. Copy URL → Paste di admin panel

---

## 👨‍💻 Untuk Developer

### 🚀 Deploy
```bash
# Push to GitHub
git add .
git commit -m "Update"
git push

# Deploy otomatis ke Vercel/Netlify
# Website update dalam 1-2 menit
```

### 📁 File Penting
- `/data/articles.json` - Data artikel
- `/data/promos.json` - Data promo
- `/components/admin/*` - Admin panel components
- `/App.tsx` - Admin routing

### 🔧 Ganti Password Admin
Edit `/components/admin/AdminLogin.tsx`:
```tsx
if (email === "admin@movewellindonesia.com" && password === "PASSWORD_BARU") {
```

### 🔄 Rollback Changes
```bash
git log --oneline
git revert <commit-hash>
git push
```

---

## 📚 Documentation Files

- **ADMIN_GUIDE.md** - Panduan lengkap untuk admin/marketing
- **DEPLOYMENT_GUIDE.md** - Technical deployment guide
- **QUICK_START.md** - This file (quick reference)

## 📝 File Format Info

Data disimpan di **TypeScript files** (`.ts`), bukan JSON:
- `/data/articles.ts` - Articles data
- `/data/promos.ts` - Promos data

Saat edit di GitHub, **jangan hapus** bagian `export const` dan interface!

---

## 🆘 Emergency Contacts

- **Developer:** [Your contact]
- **GitHub:** [Repo URL]
- **Admin Panel:** `/admin-access-2024`

---

## ⚠️ Important Notes

✅ **DO:**
- Selalu copy JSON sebelum commit
- Backup sebelum edit besar
- Logout setelah selesai

❌ **DON'T:**
- Share admin URL publicly
- Edit JSON manual di GitHub
- Delete all content tanpa backup

---

**Need Help?** Baca ADMIN_GUIDE.md untuk panduan lengkap!
