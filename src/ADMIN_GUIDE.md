# 📝 Movewell Recovery Admin Panel - Panduan Penggunaan

## 🔐 Login ke Admin Panel

1. **Buka URL Admin (RAHASIA - jangan share ke publik):**
   ```
   https://your-domain.com/adminbackend
   ```

2. **Kredensial Login:**
   - **Email:** `admin@movewellindonesia.com`
   - **Password:** `Kramat010`

---

## 📊 Cara Edit Artikel & Promo

### Step 1: Login ke Admin Panel
- Masukkan email dan password di atas
- Klik "Sign In"

### Step 2: Pilih Tab (Articles atau Promos)
- **Articles Tab:** Untuk manage blog articles
- **Promos Tab:** Untuk manage promo & pricing

### Step 3: Edit Content
**Untuk Articles:**
- Klik tombol "Add New Article" untuk artikel baru
- Klik icon pensil (Edit) untuk edit artikel existing
- Klik icon tong sampah (Delete) untuk hapus artikel
- Isi form dengan data artikel (title, excerpt, image URL, category, dll)
- Klik "Save"

**Untuk Promos:**
- Edit header promo (title, subtitle, location, period, booking info)
- Edit opening rates (duration, promo price, regular price)
- Edit voucher packs (title, price, per session price)
- Edit voucher flexibility options
- Klik "Save All Changes"

### Step 4: Copy JSON ke GitHub
1. Setelah selesai edit, klik tombol **"Copy JSON"** di atas
2. Buka GitHub repository: `https://github.com/your-username/your-repo`
3. Masuk ke folder `/data`
4. Pilih file yang sesuai:
   - **articles.ts** untuk artikel
   - **promos.ts** untuk promo
5. Klik tombol **Edit** (icon pensil di kanan atas)
6. Cari bagian `export const articlesData` atau `export const promosData`
7. **Replace hanya bagian data array/object** (jangan hapus `export const` dan interface di atas!)
8. **Paste data JSON** yang sudah di-copy dari admin panel
9. Pastikan format tetap valid TypeScript
10. Scroll ke bawah, tulis commit message (contoh: "Update articles")
11. Klik **"Commit changes"**
12. **Auto Deployment:** Website akan auto-rebuild dan deploy dalam 1-2 menit
13. Refresh browser untuk lihat perubahan (clear cache jika perlu: Ctrl+Shift+R)

**Contoh Edit di GitHub:**
```typescript
// JANGAN hapus bagian ini:
export const articlesData: Article[] = 
  
// PASTE JSON dari admin panel di sini:
[
  { id: 1, title: "...", ... },
  { id: 2, title: "...", ... }
]

// Tambahkan semicolon ; di akhir
;
```

---

## 🖼️ Upload Gambar

### Opsi 1: Pakai URL Gambar External (Unsplash)
1. Buka https://unsplash.com
2. Cari gambar yang sesuai
3. Klik kanan pada gambar → Copy Image Address
4. Paste URL di field "Image URL" di admin panel

### Opsi 2: Upload ke GitHub (Recommended)
1. Buka GitHub repository → folder `/data/images`
2. Klik tombol **"Add file"** → **"Upload files"**
3. Drag & drop gambar atau pilih file
4. Commit changes
5. Setelah upload, URL gambar akan jadi: `/data/images/nama-file.jpg`
6. Copy URL ini dan paste di field "Image URL" di admin panel

---

## ⚠️ Tips Penting

### ✅ DO's:
- Selalu **Copy JSON** sebelum commit ke GitHub
- Test di GitHub preview sebelum publish
- Gunakan gambar dengan ukuran reasonable (max 1MB)
- Backup JSON sebelum edit besar-besaran (klik "Download JSON")

### ❌ DON'Ts:
- Jangan share URL admin panel ke publik
- Jangan lupa commit ke GitHub (data cuma tersimpan di browser admin panel)
- Jangan hapus semua artikel/promo sekaligus tanpa backup
- Jangan ubah structure JSON (hanya ubah nilai/content)

---

## 🆘 Troubleshooting

### Problem: Perubahan tidak muncul di website
**Solusi:**
1. Pastikan sudah commit JSON ke GitHub
2. Tunggu 1-2 menit untuk auto-deployment
3. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
4. Check GitHub Actions untuk lihat status deployment

### Problem: Lupa password admin
**Solusi:**
- Password: `Kramat010` (sudah hardcoded di sistem)
- Jika masih tidak bisa, contact developer

### Problem: JSON format error di GitHub
**Solusi:**
1. Jangan edit manual di GitHub, selalu pakai Admin Panel
2. Jika JSON corrupt, restore dari backup atau download JSON yang lama
3. Validate JSON di https://jsonlint.com sebelum commit

---

## 📞 Support

Jika ada masalah atau butuh bantuan:
1. Screenshot error message
2. Jelaskan step yang dilakukan sebelum error
3. Contact developer/IT support

---

## 🔒 Security Notes

- URL admin panel: `/admin-access-2024` adalah **SECRET** - jangan share
- Password tersimpan di localStorage browser admin
- Logout setelah selesai edit (terutama di komputer shared)
- Ganti password secara berkala (minta developer untuk update)

---

**Last Updated:** November 2024  
**Version:** 1.0
