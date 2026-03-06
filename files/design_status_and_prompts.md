# QuestionCraft BD — Design Status & Stitch Prompts

**তারিখ:** March 5, 2026  
**স্ট্যাটাস:** নতুন ডিজাইন রিভিউ সম্পন্ন

---

## ✅ উপলব্ধ পেজগুলো (Ready to Use)

### 1. **Landing Page** 
- ✅ Modern, clean design
- ✅ Hero section with stats
- ✅ "How it works" section
- ✅ Features cards
- ✅ Footer with newsletter
- **স্ট্যাটাস:** এটি ব্যবহার করা যাবে

### 2. **Registration Page (Sign Up)**
- ✅ Split-screen layout
- ✅ Left panel: Features highlights
- ✅ Right panel: Form with validation
- ✅ Password strength indicator
- ✅ Google OAuth button
- **স্ট্যাটাস:** এটি ব্যবহার করা যাবে

### 3. **Login Page**
- ✅ Clean, minimalist design
- ✅ Email/phone + password
- ✅ "Remember me" checkbox
- ✅ "Forgot password" link
- ✅ Google OAuth
- **স্ট্যাটাস:** এটি ব্যবহার করা যাবে

### 4. **OTP Verification Page**
- ✅ 6-digit OTP input boxes
- ✅ Timer (02:00)
- ✅ "Resend code" button
- ✅ Security footer
- **স্ট্যাটাস:** এটি ব্যবহার করা যাবে

### 5. **Dashboard (Overview)**
- ✅ Left sidebar navigation
- ✅ Stats cards (Total Papers, Drafts, Shared)
- ✅ Recent question papers table
- ✅ Teacher's tip card
- ✅ Collaboration card
- **স্ট্যাটাস:** এটি ব্যবহার করা যাবে

### 6. **Question Creator/Editor**
- ✅ Split-view (Editor + Preview)
- ✅ MCQ/Creative/Short tabs
- ✅ Live A4 paper preview
- ✅ AI Assistant panel
- ✅ Toolbar (Font, Equation, Image, Table)
- **স্ট্যাটাস:** এটি ব্যবহার করা যাবে

### 7. **Terms & Privacy Page**
- ✅ Clean, readable layout
- ✅ Sections: ব্যবহারের শর্তাবলী, তথ্য সংগ্রহ, তথ্য সুরক্ষা, AI নীতি
- ✅ Icon-based sections
- **স্ট্যাটাস:** এটি ব্যবহার করা যাবে

### 8. **PDF Export Settings Modal**
- ✅ Paper size dropdown (A4, Legal, Letter)
- ✅ Layout options (One/Two Column)
- ✅ Document elements toggles
- ✅ Font size slider
- ✅ Live preview
- **স্ট্যাটাস:** এটি ব্যবহার করা যাবে

---

## ❌ যেসব পেজ এখনো তৈরি হয়নি

### 1. Question Bank (প্রশ্ন ব্যাংক) Page
### 2. My Papers (আমার প্রশ্নপত্র) Page  
### 3. Settings (সেটিংস) Page

---

# 🎯 Stitch.withgoogle.com Prompts

## Missing Page #1: Question Bank (প্রশ্ন ব্যাংক)

### Stitch Prompt:

```
Create a modern question bank management page for a Bangladesh education platform called "QuestionCraft BD". Design specifications:

LAYOUT:
- Left sidebar (dark blue-gray #2D3E50): Navigation with icons for Dashboard, My Questions, Question Bank (active), Settings, Support
- Top navbar: Search bar (center), Language toggle (BN), Dark mode toggle, User avatar with name "Dr. Sarah Ahmed - Senior Lecturer"
- Main content area: Light background (#F9FBFA)

HEADER SECTION:
- Page title: "প্রশ্ন ব্যাংক" (Question Bank) - Large, bold
- Subtitle: "সম্পূর্ণ প্রশ্ন লাইব্রেরি থেকে যেকোনো প্রশ্ন খুঁজুন এবং ব্যবহার করুন"
- Right side: "+ নতুন প্রশ্ন যোগ করুন" button (emerald green #10B981)

FILTER PANEL (Top of content):
- Collapsible filter section with rounded white card
- Filter options in a horizontal row:
  * Subject dropdown (বিষয়)
  * Class dropdown (শ্রেণী)
  * Question Type checkboxes: MCQ, Creative, Short (CQ, সংক্ষিপ্ত)
  * Difficulty: Easy/Medium/Hard badges
  * Date range picker
- "Clear All Filters" link (emerald color)
- Active filter count badge

STATS ROW (4 cards):
- Total Questions: 1,247 (with green icon)
- MCQ Questions: 542 (with checklist icon)
- Creative Questions: 389 (with psychology icon)
- Short Questions: 316 (with edit icon)

QUESTIONS GRID:
- Card-based layout (3 columns on desktop)
- Each question card shows:
  * Question preview (first 100 characters in Hind Siliguri font)
  * Small badges: Subject, Class, Question Type, Difficulty
  * Metadata icons: Marks (number), Date created
  * Action buttons row at bottom:
    - View (eye icon)
    - Edit (pencil icon)
    - Add to Paper (plus icon)
    - Delete (trash icon)
  * Hover effect: Slight lift with shadow

PAGINATION:
- Bottom center
- Page numbers (1, 2, 3, ..., 10)
- Previous/Next arrows
- "Showing 1-20 of 1,247 questions"

EMPTY STATE (if no results):
- Centered illustration (books/education themed)
- Text: "কোনো প্রশ্ন পাওয়া যায়নি"
- Description: "ফিল্টার পরিবর্তন করুন অথবা নতুন প্রশ্ন যোগ করুন"
- Primary button: "নতুন প্রশ্ন তৈরি করুন"

COLORS:
- Primary: #10B981 (Emerald)
- Secondary: #FBBF24 (Amber)
- Background: #F9FBFA
- Sidebar: #2D3E50
- Card background: White (#FFFFFF)
- Text: #111827

FONTS:
- Bengali: Hind Siliguri
- English/Numbers: Inter or Public Sans

INTERACTIONS:
- Smooth hover effects on cards
- Filter toggle animation
- Loading skeleton for cards
- Toast notification for actions

Make it clean, professional, and optimized for Bengali educators.
```

---

## Missing Page #2: My Papers (আমার প্রশ্নপত্র)

### Stitch Prompt:

```
Design a "My Question Papers" page for QuestionCraft BD, a Bangladesh education platform. Requirements:

LAYOUT:
- Same left sidebar as Question Bank (Dashboard, My Questions, Question Bank, Settings, Support)
- Top navbar: Search bar, Language (BN/EN), Dark mode, User profile
- Main content: Light background #F9FBFA

PAGE HEADER:
- Title: "আমার প্রশ্নপত্র" (My Question Papers) - Bold, large
- Subtitle: "আপনার তৈরি সকল প্রশ্নপত্র এক জায়গায় সংরক্ষিত"
- Right corner buttons:
  * "Filter" icon button
  * "Sort" dropdown (Date, Title, Subject)
  * "+ নতুন প্রশ্নপত্র তৈরি করুন" (primary emerald button)

STATS CARDS (3 cards in row):
1. Total Papers: 128 (+12% badge)
2. Draft Papers: 14 (5 pending badge in amber)
3. Published Papers: 114 (green checkmark)

FILTER TABS (horizontal):
- All Papers (active)
- Published
- Drafts
- Archived

PAPERS TABLE:
Modern table with these columns:
- Icon column (colored circle with first letter)
- Title & Meta column:
  * Paper title (bold, Bengali)
  * Small metadata: "Physics 1st Paper - Midterm 2024"
  * Attachment count icon if applicable
- Subject column (badge)
- Class column (badge)
- Date Created column (formatted date)
- Status column (badge: Published/Draft/Archived)
- Actions column (icon buttons):
  * View/Preview (eye icon)
  * Edit (pencil icon)
  * Download PDF (download icon)
  * Share (share icon)
  * Delete (trash icon)

TABLE ROWS (sample data):
1. Title: "পদার্থবিজ্ঞান ১ম পত্র - মধ্যবর্ষীয় পরীক্ষা ২০২৪"
   Subject: Physics | Class: 10 | Date: Oct 24, 2023 | Status: Published

2. Title: "উচ্চতর গণিত - বার্ষিক পরীক্ষা"
   Subject: Math | Class: 12 | Date: Oct 22, 2023 | Status: Draft

3. Title: "ইংরেজি ব্যাকরণ - সাপ্তাহিক মূল্যায়ন"
   Subject: English | Class: 9 | Date: Oct 20, 2023 | Status: Published

PAGINATION:
- Bottom of table
- "Showing 1-20 of 128 papers"
- Page numbers: 1, 2, 3, ... 7
- Previous/Next buttons

EMPTY STATE:
- Centered illustration (documents/papers)
- Heading: "আপনার কোনো প্রশ্নপত্র নেই"
- Text: "এখনই আপনার প্রথম প্রশ্নপত্র তৈরি করুন AI এর সাহায্যে"
- CTA: "প্রশ্নপত্র তৈরি শুরু করুন" (emerald button)

QUICK ACTIONS SIDEBAR (right):
- "Recent Activity" card
- "Quick Tips" card (emerald background)
  * Tip: "AI ব্যবহার করে ৫ মিনিটে প্রশ্নপত্র তৈরি করুন"

HOVER EFFECTS:
- Table rows: Light background on hover
- Action buttons: Color change + tooltip
- Cards: Subtle lift

COLORS:
- Primary: #10B981 (Emerald)
- Published badge: Green
- Draft badge: Amber
- Archived badge: Gray

FONTS:
- Bengali: Hind Siliguri
- UI: Public Sans

Design should be clean, data-dense but readable, with smooth interactions.
```

---

## Missing Page #3: Settings (সেটিংস) Page

### Stitch Prompt:

```
Create a comprehensive Settings page for QuestionCraft BD education platform. Design requirements:

LAYOUT:
- Same left sidebar navigation (Dashboard, My Questions, Question Bank, Settings [active])
- Top navbar with search, language, dark mode, profile
- Main area: White background

PAGE STRUCTURE:
Split into two sections:
- Left: Settings navigation tabs (vertical)
- Right: Settings content area (changes based on selected tab)

LEFT TABS MENU:
1. প্রোফাইল সেটিংস (Profile icon) - Active
2. অ্যাকাউন্ট নিরাপত্তা (Lock icon)
3. নোটিফিকেশন (Bell icon)
4. থিম ও ভাষা (Palette icon)
5. PDF সেটিংস (Document icon)
6. সাবস্ক্রিপশন (Credit card icon - Phase 3)

---

TAB 1: প্রোফাইল সেটিংস (Profile Settings) - DEFAULT VIEW

HEADER:
- Title: "প্রোফাইল সেটিংস"
- Subtitle: "আপনার ব্যক্তিগত তথ্য আপডেট করুন"

PROFILE PHOTO SECTION:
- Large circular avatar (120px)
- Current photo preview
- "Change Photo" button
- "Remove Photo" link (red)

FORM FIELDS (in card layout):
1. পুরো নাম (Full Name)
   - Input: "Dr. Sarah Ahmed"
   - Help text: "এই নামটি আপনার প্রশ্নপত্রে দেখানো হবে"

2. ইমেইল ঠিকানা (Email)
   - Input: "sarah.ahmed@example.com"
   - Verified badge (green checkmark)
   - "Change Email" link

3. প্রতিষ্ঠানের নাম (Institution)
   - Input: "Dhaka Residential Model College"

4. পদবী (Designation)
   - Input: "Senior Lecturer"

5. বিষয় (Subject Specialization)
   - Dropdown: Physics (selected)

6. শ্রেণী (Classes Teaching)
   - Multi-select: Class 9, 10, 11, 12

7. ফোন নম্বর (Phone)
   - Input: "+880 1XXX-XXXXXX"
   - "Verify" button

8. ঠিকানা (Address)
   - Textarea

Bottom buttons:
- "পরিবর্তন সংরক্ষণ করুন" (Save - Emerald)
- "বাতিল করুন" (Cancel - Gray outline)

---

TAB 2: অ্যাকাউন্ট নিরাপত্তা (Account Security)

SECTIONS:

A. পাসওয়ার্ড পরিবর্তন (Change Password)
- Current Password field
- New Password field (with strength indicator)
- Confirm Password field
- "Update Password" button

B. দুই-পদক্ষেপ যাচাইকরণ (Two-Factor Auth)
- Toggle switch (ON/OFF)
- Description: "অতিরিক্ত নিরাপত্তার জন্য 2FA সক্রিয় করুন"
- Setup button

C. লগইন হিস্টরি (Login History)
- Table showing:
  * Device/Browser
  * Location
  * Date & Time
  * IP Address
- "এই ডিভাইস" badge for current session

D. সক্রিয় সেশন (Active Sessions)
- List of logged-in devices
- "লগআউট করুন" button for each

---

TAB 3: নোটিফিকেশন (Notifications)

TOGGLE SWITCHES for each:

1. ইমেইল নোটিফিকেশন (Email Notifications)
   - ✅ প্রশ্নপত্র তৈরি সম্পন্ন
   - ✅ AI প্রশ্ন জেনারেশন সফল
   - ⬜ সাপ্তাহিক সামারি
   - ✅ নতুন ফিচার ঘোষণা

2. পুশ নোটিফিকেশন (Browser Push)
   - ✅ নতুন মন্তব্য বা শেয়ার
   - ⬜ সিস্টেম আপডেট

3. SMS নোটিফিকেশন
   - ⬜ গুরুত্বপূর্ণ নিরাপত্তা সতর্কতা

---

TAB 4: থিম ও ভাষা (Theme & Language)

A. ভাষা নির্বাচন (Language)
- Radio buttons:
  * ● বাংলা (selected)
  * ○ English
  * ○ Both (bilingual)

B. থিম মোড (Theme)
- 3 cards to choose:
  * Light Mode (☀️ icon)
  * Dark Mode (🌙 icon) 
  * Auto (system) - selected

C. ফন্ট সাইজ (Font Size)
- Slider: Small → Medium (selected) → Large

D. পরীক্ষামূলক ফিচার (Beta Features)
- Toggle: "নতুন AI টুলস পরীক্ষা করুন"

---

TAB 5: PDF সেটিংস (PDF Export Defaults)

DEFAULT SETTINGS:
1. কাগজের সাইজ: A4 ▼
2. লেআউট: Two Column ▼
3. ফন্ট সাইজ: 11pt (slider)

ALWAYS INCLUDE:
- ✅ Institution Header
- ✅ Watermark
- ⬜ Answer Key at End
- ✅ Page Numbers
- ✅ Footer with Generation Date

"Preview Sample PDF" button

---

GENERAL DESIGN:
- Clean white cards with subtle shadows
- Emerald green (#10B981) primary color
- Bengali font: Hind Siliguri
- Smooth toggle animations
- Success toasts on save
- Confirm dialogs for destructive actions

Make it user-friendly for non-technical teachers.
```

---

# 📝 Additional Recommendations

## Other Pages You Might Need Later:

### 4. **Help & Support Page** (Phase 2)
- FAQ section
- Video tutorials
- Contact form
- WhatsApp support link

### 5. **About Page** (Phase 1 - Optional)
- Company story
- Team members
- Mission & vision
- Contact information

### 6. **Pricing Page** (Phase 3)
- Free vs Pro vs Institution plans
- Feature comparison table
- Payment methods (bKash, SSLCommerz)

### 7. **Books Library** (Phase 2)
- Grid of NCTB textbooks
- Search & filter
- Chapter-wise view
- PDF viewer

---

# 🎯 Implementation Order

**Week 1-2:**
1. ✅ Landing Page
2. ✅ Registration
3. ✅ Login
4. ✅ OTP Verification

**Week 3-4:**
5. ✅ Dashboard
6. ✅ Question Creator
7. ❌ Question Bank (New)
8. ❌ My Papers (New)

**Week 5-6:**
9. ✅ Terms & Privacy
10. ❌ Settings (New)
11. ✅ PDF Export Modal

---

# 💡 Stitch Tips

When using Stitch.withgoogle.com:

1. **Be Specific:**
   - Mention exact colors (#10B981)
   - Specify fonts (Hind Siliguri)
   - Include sample data in Bengali

2. **Reference Similar Designs:**
   - "Similar to the Question Creator page you've seen"
   - "Use the same sidebar as Dashboard"

3. **Breakdowns:**
   - Split complex pages into sections
   - Describe interactions clearly

4. **Export:**
   - Get HTML/CSS code
   - Review in browser
   - Convert to React with Codex

5. **Iterate:**
   - First draft → Review → Refine prompt → Regenerate

---

**Total Pages Status:**
- ✅ Ready: 8 pages
- ❌ Needed: 3 pages
- 📅 Future: 4 pages (Phase 2/3)

