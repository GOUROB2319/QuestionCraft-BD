# QuestionCraft BD — Design Audit & Improvement Checklist

**তারিখ:** March 4, 2026  
**উদ্দেশ্য:** Dummy ডিজাইনগুলোর সম্পূর্ণ পর্যালোচনা এবং inconsistency চিহ্নিতকরণ

---

## 🔴 Critical Inconsistencies (অবশ্যই ঠিক করতে হবে)

### 1. Social Login Mismatch

**সমস্যা:**
- ✅ **Login Page:** Google + Facebook দুটোই আছে
- ❌ **Registration Page:** শুধু Google আছে, Facebook নেই

**সমাধান:**
```
Registration Page এ যোগ করুন:
- "ফেসবুক দিয়ে সাইন আপ করুন" button
- অথবা দুই পেজেই শুধু Google রাখুন (recommended)
```

**Recommendation:** শুধু Google রাখুন কারণ:
- Facebook login Bangladesh এ কম ব্যবহৃত
- Google সব শিক্ষকের কাছে আছে
- Maintenance সহজ

---

### 2. Language Toggle Position

**সমস্যা:**
- Landing Page: বাংলা/English toggle আছে navbar এ
- Registration/Login: Language toggle দেখা যাচ্ছে না

**সমাধান:**
```
সব authenticated পেজে language toggle যোগ করুন:
- Registration page top-right corner
- Login page top-right corner
- Dashboard navbar এ
```

---

### 3. Dark Mode Toggle Consistency

**সমস্যা:**
- Landing Page: Dark mode toggle আছে
- Auth pages (Login/Register): Dark mode support unclear

**সমাধান:**
```
সব পেজে consistent dark mode:
- Landing, Login, Register সবখানে toggle button
- Dark mode state localStorage এ save করুন
- Page load এ preference restore করুন
```

---

### 4. Terms & Privacy Link

**সমস্যা:**
- Registration Page: "আমি শর্তাবলী ও গোপনীয়তা নীতি মেনে নিচ্ছি" checkbox আছে
- কিন্তু text clickable link নয়

**সমাধান:**
```
করুন:
"আমি <a href="/legal/terms">শর্তাবলী</a> ও <a href="/legal/privacy">গোপনীয়তা নীতি</a> মেনে নিচ্ছি"

- Links emerald color (#10B981)
- Underline on hover
```

---

### 5. Logo Consistency

**সমস্যা:**
- Landing Page: Logo + "QuestionCraft BD" text
- Auth Pages: শুধু text, logo icon unclear

**সমাধান:**
```
সব পেজে same logo format:
- 40px square icon (emerald bg, white brain icon)
- "QuestionCraft" (bold) + "BD" (emerald color)
- Same size, same style
```

---

## 🟡 Medium Priority Issues (উন্নতির জন্য)

### 6. Form Validation Messages

**সমস্যা:**
- Form fields আছে কিন্তু error message style দেখা যাচ্ছে না

**সমাধান:**
```
প্রতিটি input field এর নিচে error message space রাখুন:
- Red color text (#EF4444)
- Small font (12px)
- Icon সহ (alert circle)

Example:
Email field → "✕ সঠিক ইমেইল দিন"
Password → "✕ কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড প্রয়োজন"
```

---

### 7. Loading States

**সমস্যা:**
- Buttons এ loading spinner দেখা যাচ্ছে না

**সমাধান:**
```
সব submit buttons এ loading state:
- "নিবন্ধন সম্পন্ন করুন" → Spinner + "অপেক্ষা করুন..."
- Button disabled during loading
- Emerald spinner icon
```

---

### 8. Success/Error Toast Messages

**সমস্যা:**
- Success/Error feedback UI নেই

**সমাধান:**
```
Toast notification design করুন:
- Top-right corner
- Green for success, Red for error
- Auto-dismiss after 3s
- Close button

Example messages:
✅ "সফলভাবে নিবন্ধন সম্পন্ন হয়েছে!"
❌ "এই ইমেইল ইতিমধ্যে ব্যবহৃত হয়েছে"
```

---

### 9. Password Strength Indicator

**সমস্যা:**
- Registration page এ password field আছে কিন্তু strength indicator নেই

**সমাধান:**
```
Password field এর নিচে strength bar যোগ করুন:
- Weak: Red bar (1-5 characters)
- Medium: Amber bar (6-7 characters)
- Strong: Green bar (8+ with mix)

Visual:
[▓▓▓▓░░░░] Weak
[▓▓▓▓▓▓░░] Medium
[▓▓▓▓▓▓▓▓] Strong
```

---

### 10. OTP Input Accessibility

**সমস্যা:**
- OTP page এ 6 boxes আছে কিন্তু keyboard navigation unclear

**সমাধান:**
```
Improve OTP experience:
- Auto-focus next box on digit entry ✓ (আছে)
- Backspace এ previous box এ যান
- Paste support for full code ✓ (আছে)
- Mobile এ numeric keyboard open হোক
```

---

### 11. "Remember Me" Functionality

**সমস্যা:**
- Login page এ "আমাকে মনে রাখুন" checkbox আছে
- কিন্তু এটা কী করবে clear নয়

**সমাধান:**
```
Implement করুন:
- Checked হলে: 30 days JWT token
- Unchecked হলে: Session-based (browser close এ logout)
- Tooltip যোগ করুন: "৩০ দিনের জন্য লগইন রাখুন"
```

---

## 🟢 Nice to Have Improvements (অতিরিক্ত উন্নতি)

### 12. Dashboard Welcome Message

**সমস্যা:**
- Dashboard এ generic "স্বাগতম, [User Name]!" আছে
- কিন্তু first-time user এর জন্য onboarding নেই

**সমাধান:**
```
First login detection:
- যদি নতুন user হয়, দেখান:
  "স্বাগতম! আপনার প্রথম প্রশ্নপত্র তৈরি করুন 👇"
  [Quick Start Guide Card]
  
- Returning user:
  "স্বাগতম ফিরে, [Name]! আজ কী তৈরি করবেন?"
```

---

### 13. Breadcrumb Navigation

**সমস্যা:**
- Question Creator page এ breadcrumb আছে
- কিন্তু অন্যান্য pages এ নেই

**সমাধান:**
```
সব dashboard pages এ breadcrumb যোগ করুন:
Dashboard > Questions > Create New
Dashboard > Question Bank
Dashboard > My Papers > Paper #123
```

---

### 14. Empty States Design

**সমস্যা:**
- Question Bank empty state আছে ✓
- কিন্তু "My Papers" এর empty state unclear

**সমাধান:**
```
সব list pages এ proper empty state:
- Illustration (friendly, educational)
- Heading: "এখানে কিছু নেই"
- Description: কী করতে হবে
- Primary CTA button
```

---

### 15. Footer Links Functionality

**সমস্যা:**
- Landing page footer এ links আছে (দ্রুত লিঙ্ক, যোগাযোগ)
- কিন্তু সব links কাজ করবে কিনা unclear

**সমাধান:**
```
Ensure করুন:
✅ হোম → / (Landing)
✅ ফিচার → /#features (scroll to section)
✅ বই সংগ্রহ → /books (Phase 2)
✅ আমাদের সম্পর্কে → /about
✅ সাহায্য → /help অথবা /docs
✅ গোপনীয়তা নীতি → /legal/privacy
✅ ব্যবহারের শর্তাবলী → /legal/terms
```

---

### 16. Mobile Responsive Issues

**সমস্যা:**
- Desktop design আছে
- Mobile এ split-screen pages (Login/Register) কেমন হবে?

**সমাধান:**
```
Mobile breakpoints (<768px):
- Split-screen → Stack vertically
- Left gradient panel → Top (shorter height)
- Right form → Bottom (full height)
- Stats cards → 2 columns instead of 4
- Navigation → Hamburger menu
```

---

### 17. Search Bar Functionality

**সমস্যা:**
- Dashboard navbar এ search bar আছে
- কিন্তু কী search করবে clear নয়

**সমাধান:**
```
Global search implement করুন:
Search in:
- My Questions (title, content)
- My Papers (title, subject)
- Books (Phase 2)

Placeholder: "প্রশ্ন বা প্রশ্নপত্র খুঁজুন..."
Show results dropdown on type
```

---

### 18. Notification System

**সমস্যা:**
- Dashboard এ notification bell icon আছে
- কিন্তু notifications কী দেখাবে?

**সমাধান:**
```
Notification types:
- Paper exported successfully ✅
- AI question generated (Phase 2) 🤖
- Institution invite (Phase 3) 🏫
- New feature announcement 🎉

Badge: Unread count
Dropdown: List of notifications
Mark as read functionality
```

---

### 19. User Profile Dropdown

**সমস্থা:**
- Dashboard navbar এ user avatar আছে
- Dropdown menu design unclear

**সমাধান:**
```
Profile dropdown menu items:
- 👤 প্রোফাইল সেটিংস → /settings/profile
- 🔔 নোটিফিকেশন → /settings/notifications
- 🎨 থিম পছন্দ → Dark/Light toggle
- 🌐 ভাষা → বাংলা/English
- ➖ (Divider)
- 🚪 লগআউট → Logout action
```

---

### 20. Question Type Icons Consistency

**সমস্যা:**
- Question Creator এ MCQ/Creative/Short buttons আছে
- কিন্তু icons consistent নয়

**সমাধান:**
```
Segmented control design:
[● MCQ] [  Creative] [  Short]
     ↑ active (emerald bg)

Icons:
- MCQ: checklist icon
- Creative: psychology icon
- Short: edit_note icon

Same size, same style
```

---

## 📊 Design System Inconsistencies

### 21. Color Usage

**Issues Found:**
```
Primary Green variations:
- #10B981 ✅ (most pages)
- #1fad7e ❌ (some buttons)
- #31814c ❌ (hover states)

Solution: শুধু #10B981 ব্যবহার করুন সবখানে
Hover: #059669 (Emerald 600)
```

---

### 22. Button Sizes

**Issues:**
```
Different button heights:
- Landing CTA: py-4 (48px)
- Login button: py-3 (40px)
- Dashboard buttons: py-2.5 (36px)

Solution: Standardize
- Large (CTA): py-4 (48px)
- Medium (forms): py-3 (40px)
- Small (actions): py-2 (32px)
```

---

### 23. Card Border Radius

**Issues:**
```
Different values:
- Landing cards: rounded-3xl (24px)
- Dashboard cards: rounded-2xl (16px)
- Auth cards: rounded-xl (12px)

Solution:
- Large cards: rounded-3xl (24px)
- Medium cards: rounded-2xl (16px)
- Small cards: rounded-xl (12px)
```

---

### 24. Shadow Consistency

**Issues:**
```
Different shadow values:
- Landing: shadow-2xl
- Dashboard: shadow-lg
- Auth: shadow-md

Solution: Define hierarchy
- Hero elements: shadow-2xl + colored shadow
- Cards: shadow-lg
- Buttons: shadow-md
- Hover states: shadow-xl
```

---

### 25. Font Weight Usage

**Issues:**
```
Inconsistent weights:
- Headlines: font-bold (700) vs font-extrabold (800)
- Body: font-normal (400) vs font-medium (500)

Solution: Standardize
- Display: font-extrabold (800)
- Headings: font-bold (700)
- Subheadings: font-semibold (600)
- Body: font-normal (400)
- Labels: font-medium (500)
```

---

## 🎨 Visual Polish Improvements

### 26. Gradient Backgrounds

**Current:**
```css
Landing: linear-gradient(135deg, #f8fafc, #f0fdf4, #f0f9ff)
Auth pages: linear-gradient(135deg, #10B981, #3B82F6)
```

**Improvement:**
```css
Make gradients smoother:
Landing: linear-gradient(135deg, #f8fafc 0%, #f0fdf4 50%, #f0f9ff 100%)
Auth left panel: linear-gradient(135deg, #10B981 0%, #059669 100%)

Add subtle noise texture overlay for depth
```

---

### 27. Icon Consistency

**Issues:**
- Some pages: Material Symbols Outlined
- Some buttons: Material Symbols Filled

**Solution:**
```
Use ONLY Material Symbols Outlined everywhere
Filled icons শুধু:
- Active states
- Selected items
```

---

### 28. Typography Hierarchy

**Improve readability:**
```
Current line-heights inconsistent

Solution:
- Headlines: leading-tight (1.1)
- Subheadings: leading-snug (1.25)
- Body text: leading-relaxed (1.625)
- Small text: leading-normal (1.5)
```

---

### 29. Spacing Scale

**Issues:**
```
Gap between sections varies:
- Some: py-12 (48px)
- Some: py-16 (64px)
- Some: py-20 (80px)

Solution: Use consistent scale
- Small gap: gap-4 (16px)
- Medium gap: gap-6 (24px)
- Large gap: gap-8 (32px)
- Section spacing: py-16 or py-24
```

---

### 30. Hover/Active States

**Missing hover states:**
```
Add to:
- All buttons (slight scale + shadow increase)
- All cards (lift upward 4px)
- All links (color change to darker emerald)
- All inputs (border color change)

Transition: transition-all duration-200
```

---

## 📱 Responsive Design Checklist

### 31. Mobile Navigation

**Solution:**
```html
< 768px:
- Show hamburger menu icon
- Hide desktop menu
- Full-screen overlay menu
- Large touch targets (min 44px)
```

---

### 32. Mobile Forms

**Issues:**
- Form labels too small on mobile
- Input fields need larger tap targets

**Solution:**
```
Mobile (<640px):
- Input height: min 48px (accessible)
- Font size: 16px (prevents zoom on iOS)
- Labels: 14px (readable)
- Padding: p-4 (comfortable)
```

---

### 33. Mobile Stats Cards

**Current:** 4 columns

**Solution:**
```
Mobile: 2 columns (2x2 grid)
Tablet: 3 columns
Desktop: 4 columns
```

---

## ✅ Accessibility Improvements

### 34. Focus States

**Missing:**
- Keyboard focus indicators

**Add:**
```css
All interactive elements:
focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
```

---

### 35. Alt Text

**Add to all images:**
```html
<img src="..." alt="QuestionCraft BD Logo" />
<img src="..." alt="Dashboard Preview" />
```

---

### 36. ARIA Labels

**Add to icon-only buttons:**
```html
<button aria-label="Dark mode toggle">
  <moon-icon />
</button>

<button aria-label="Search">
  <search-icon />
</button>
```

---

### 37. Color Contrast

**Check:**
```
Text on backgrounds must meet WCAG AA:
- Dark text on light: min 4.5:1
- Light text on dark: min 4.5:1

Test all buttons, labels, small text
```

---

## 🔒 Security & Privacy

### 38. Password Show/Hide

**Current:** ✅ আছে

**Ensure:**
```
- Eye icon toggle
- Type: password → text
- Icon changes (eye → eye-off)
```

---

### 39. OTP Security

**Add:**
```
- Input autocomplete="one-time-code"
- Auto-fill from SMS (mobile)
- Clear OTP on timeout
```

---

### 40. Session Timeout

**Add:**
```
Warning before logout:
"আপনার সেশন ৫ মিনিটে শেষ হবে"
[Extend Session] button
```

---

## 📋 Content & Copy Improvements

### 41. Error Messages in Bangla

**Ensure all errors are in Bangla:**
```
✅ "সঠিক ইমেইল দিন"
✅ "পাসওয়ার্ড মিলছে না"
✅ "এই ফিল্ডটি আবশ্যক"
❌ "Invalid email"
❌ "Password required"
```

---

### 42. Placeholder Text

**Make helpful:**
```
Before: "Enter email"
After: "যেমন: teacher@school.edu.bd"

Before: "Password"
After: "কমপক্ষে ৮ অক্ষরের শক্তিশালী পাসওয়ার্ড"
```

---

### 43. Button Text Clarity

**Improve CTAs:**
```
Before: "Submit"
After: "নিবন্ধন সম্পন্ন করুন"

Before: "Next"
After: "পরবর্তী ধাপ →"
```

---

## 🚀 Performance Considerations

### 44. Image Optimization

**Add:**
```
- Use Next.js Image component
- WebP format with fallback
- Lazy loading for below-fold images
- Proper width/height attributes
```

---

### 45. Font Loading

**Optimize:**
```
- Preload Hind Siliguri font
- Font-display: swap
- Subset only needed characters (Bangla + English)
```

---

## 📊 Analytics & Tracking

### 46. Event Tracking

**Add tracking for:**
```
- Button clicks
- Form submissions
- Page views
- Error occurrences
- Time on page
```

---

## Final Checklist Summary

**Must Fix (Critical):**
- [ ] Social login consistency (Google only on both pages)
- [ ] Language toggle on all pages
- [ ] Terms & Privacy clickable links
- [ ] Logo consistency across pages
- [ ] Dark mode on auth pages

**Should Fix (Medium):**
- [ ] Form validation error messages
- [ ] Loading states on buttons
- [ ] Toast notifications
- [ ] Password strength indicator
- [ ] Remember me functionality

**Nice to Have:**
- [ ] Onboarding for first-time users
- [ ] Global search
- [ ] Notification system
- [ ] Mobile responsive refinements
- [ ] Accessibility improvements

---

**Total Issues Found:** 46
**Critical:** 5
**Medium:** 15
**Nice to Have:** 26

