# 📊 Data Folder - Content Management

This folder contains all website content in TypeScript format.

## 📁 Files

- **articles.ts** - All blog articles data
- **promos.ts** - All promotional content and pricing
- **/images** - Uploaded images folder

## ✏️ How to Edit Content

### Option 1: Via Admin Panel (Recommended)
1. Go to `/adminbackend`
2. Login with admin credentials
3. Edit content using forms
4. Copy generated JSON
5. Paste to GitHub (see instructions below)

### Option 2: Direct Edit in GitHub
1. Click on `articles.ts` or `promos.ts`
2. Click "Edit" button (pencil icon)
3. Modify the data array/object
4. Keep the TypeScript syntax valid
5. Commit changes

## ⚠️ Important: Editing Guidelines

### DO ✅
- Edit only the data inside `articlesData` or `promosData`
- Keep the structure valid (commas, quotes, brackets)
- Test locally before committing if possible
- Make small incremental changes

### DON'T ❌
- Delete `export const` statements
- Delete interface definitions at the top
- Break the TypeScript syntax
- Remove all content at once without backup

## 📝 Example: Editing articles.ts

**Before:**
```typescript
export const articlesData: Article[] = [
  {
    id: 1,
    title: "Old Article",
    excerpt: "Old excerpt...",
    // ... other fields
  }
];
```

**After (adding new article):**
```typescript
export const articlesData: Article[] = [
  {
    id: 1,
    title: "Old Article",
    excerpt: "Old excerpt...",
    // ... other fields
  },
  {
    id: 2,
    title: "New Article Title",
    excerpt: "New article excerpt...",
    image: "https://images.unsplash.com/...",
    category: "wellness",
    author: "Author Name",
    date: "November 6, 2024",
    readTime: "5 min read"
  }
];
```

## 🔄 After Editing

1. Commit changes to GitHub
2. Auto-deployment starts (Vercel/Netlify)
3. Wait 1-2 minutes for build to complete
4. Refresh website to see changes
5. Clear cache if needed (Ctrl+Shift+R)

## 🆘 If Something Breaks

1. **Check build logs** on Vercel/Netlify
2. **Common issues:**
   - Missing comma between objects
   - Unclosed quotes or brackets
   - Invalid date format
   - Missing required fields
3. **Quick fix:** Revert to previous commit
4. **Get help:** Check ADMIN_GUIDE.md

## 📚 Data Structure Reference

### Article Object
```typescript
{
  id: number,              // Unique ID
  title: string,           // Article title
  excerpt: string,         // Short description
  image: string,           // Image URL
  category: string,        // recovery | mobility | wellness | tips
  author: string,          // Author name
  date: string,           // Publication date
  readTime: string        // e.g., "5 min read"
}
```

### Promo Object
```typescript
{
  header: {
    title: string,
    subtitle: string,
    location: string,
    period: string,
    booking: string
  },
  openingRates: Array<{
    duration: string,
    price: string,
    regularPrice: string
  }>,
  voucherPacks: Array<{
    title: string,
    price: string,
    pricePerSession: string
  }>,
  voucherFlexibility: string[]
}
```

## 🔗 Related Documentation

- **ADMIN_GUIDE.md** - Complete admin panel guide
- **DEPLOYMENT_GUIDE.md** - Technical deployment info
- **QUICK_START.md** - Quick reference guide
