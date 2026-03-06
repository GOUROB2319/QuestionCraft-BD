# 🎨 Antigravity Styling Fix Prompt (সরাসরি Copy করুন)

---

আমার QuestionCraft BD অ্যাপ্লিকেশন raw/unstyled অবস্থায় আছে। আমাকে complete professional design apply করতে হবে।

## কাজ:

### 1. Tailwind CSS Setup
```
tailwind.config.ts আপডেট করুন:
- Primary color: #10B981
- Secondary: #FBBF24
- Font: Hind Siliguri
```

### 2. Global CSS (app/globals.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap');

body { 
  font-family: 'Hind Siliguri', sans-serif; 
}
```

### 3. Landing Page Style
app/page.tsx তে এগুলো যোগ করুন:

- Gradient background: `bg-gradient-to-b from-emerald-50 via-white to-gray-50`
- Sticky navbar: `sticky top-0 bg-white/80 backdrop-blur-md`
- Hero section: Large heading + primary button
- Stats cards: 4 cards with icons
- How it works: 3 step cards
- Footer: Dark background

### 4. Components তৈরি করুন:
- Button (primary, secondary variants)
- Card (with shadow and border)
- Badge (colored backgrounds)

### 5. Typography:
- All Bengali text: Hind Siliguri font
- Headings: bold, large
- Body: regular weight

### 6. Colors থিম:
- Primary buttons: bg-primary (emerald #10B981)
- Hover effects: hover:bg-primary-600
- Shadows: shadow-lg shadow-primary/20

### 7. Icons:
Material Symbols Outlined ব্যবহার করুন:
```html
<span class="material-symbols-outlined">psychology</span>
```

## Expected Output:
✅ Beautiful landing page with gradients
✅ Bengali fonts working (Hind Siliguri)
✅ Emerald green theme throughout
✅ Professional cards and buttons
✅ Smooth animations and hover effects
✅ Responsive design

এখনই সব files আপডেট করুন এবং styled version তৈরি করুন!
