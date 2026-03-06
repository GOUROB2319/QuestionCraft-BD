# 🎨 Stitch Implementation Guide for QuestionCraft BD

**তারিখ:** March 5, 2026  
**উদ্দেশ্য:** Step-by-step guide to generate missing pages using Stitch

---

## 📋 Pre-Implementation Checklist

### আপনার কাছে যা লাগবে:

- ✅ Google account (Stitch access এর জন্য)
- ✅ Browser (Chrome/Edge recommended)
- ✅ Text editor (VS Code)
- ✅ প্রম্পটগুলো (নিচে দেওয়া আছে)

---

## 🚀 Stitch Workflow (3 Pages)

### প্রতিটি পেজের জন্য এই steps follow করুন:

**Step 1:** Stitch এ যান → https://stitch.withgoogle.com  
**Step 2:** Prompt paste করুন  
**Step 3:** Generate button ক্লিক করুন  
**Step 4:** Output review করুন  
**Step 5:** Code export করুন  
**Step 6:** Local এ test করুন  

---

# 📄 PAGE 1: Question Bank (প্রশ্ন ব্যাংক)

## Optimized Stitch Prompt:

```
Design a Question Bank management page for "QuestionCraft BD" - a Bangladesh education platform.

OVERALL LAYOUT:
- Left sidebar: Width 256px, dark navy (#1e293b), fixed position
- Top navbar: Height 64px, white background, sticky
- Main content: Light gray background (#f9fafb)
- Content max-width: 1280px, centered

SIDEBAR (Dark #1e293b):
Navigation items with icons:
1. Dashboard (home icon)
2. My Questions (document icon) 
3. Question Bank (database icon) - ACTIVE STATE (emerald #10B981 background)
4. Settings (gear icon)
5. Support (help icon)

Logo at top:
- Emerald brain icon + "QuestionCraft BD" text
- White text color

NAVBAR (White, sticky):
Left: Page breadcrumb "Dashboard > Question Bank"
Center: Search input with icon, placeholder "প্রশ্ন খুঁজুন..."
Right: 
- Language toggle (BN/EN)
- Dark mode icon button
- User avatar (circular) + "Dr. Sarah Ahmed"

PAGE HEADER:
- H1: "প্রশ্ন ব্যাংক" (bold, 36px, #111827)
- Subtitle: "সম্পূর্ণ প্রশ্ন লাইব্রেরি থেকে যেকোনো প্রশ্ন খুঁজুন এবং ব্যবহার করুন" (16px, #64748b)
- Right: Button "+ নতুন প্রশ্ন যোগ করুন" (emerald #10B981, white text, rounded-xl)

STATS CARDS (4 cards in grid, gap 24px):
Each card: White background, rounded-2xl, padding 24px, border #e2e8f0

Card 1:
- Icon: Green database icon in circle
- Number: "1,247" (bold, 32px)
- Label: "মোট প্রশ্ন" (14px, gray)

Card 2:
- Icon: Blue checklist icon
- Number: "542"
- Label: "MCQ প্রশ্ন"

Card 3:
- Icon: Purple brain icon
- Number: "389"
- Label: "সৃজনশীল প্রশ্ন"

Card 4:
- Icon: Orange edit icon
- Number: "316"
- Label: "সংক্ষিপ্ত প্রশ্ন"

FILTER SECTION:
White card, rounded-2xl, padding 20px, margin-bottom 24px

Horizontal layout with:
- Subject dropdown: "বিষয়" (Physics, Math, English options)
- Class dropdown: "শ্রেণী" (Class 6-12)
- Type checkboxes: MCQ, Creative, Short (inline)
- Difficulty badges: Easy (green), Medium (amber), Hard (red)
- "Clear Filters" link (emerald color, right aligned)

QUESTIONS GRID:
3 columns on desktop, gap 20px

Each question card:
- White background, rounded-2xl, padding 20px
- Border: 1px solid #e2e8f0
- Hover: Shadow-lg, translate-y -2px

Card content:
1. Question text preview (Bengali, Hind Siliguri font, 14px, 3 lines max, ellipsis)
2. Badges row (gap 8px):
   - Subject badge (blue, small)
   - Class badge (green, small)  
   - Type badge (purple, small)
   - Difficulty badge (color varies)
3. Metadata (gray, 12px):
   - Marks icon + "৫ নম্বর"
   - Calendar icon + "২৪ অক্টোবর, ২০২৩"
4. Actions row (gap 12px):
   - View button (eye icon, gray)
   - Edit button (pencil icon, gray)
   - Add to Paper (plus icon, emerald)
   - Delete (trash icon, red on hover)

Sample question cards (3 examples):

Card 1:
"নিচের কোনটি ভেক্টরের গুণনের ক্ষেত্রে প্রযোজ্য নয়? ক) বিনিময় সূত্র খ) বন্টন সূত্র গ) সংযোগ সূত্র ঘ) ধ্রুবক গুণন"
Badges: Physics | Class 10 | MCQ | Medium
Meta: 1 mark | Oct 24, 2023

Card 2:
"পৃথিবীর কেন্দ্রস্থলে অভিকর্ষজ ত্বরণের মান কত? এবং কেন এটি শূন্য হয়?"
Badges: Physics | Class 9 | Short | Easy
Meta: 2 marks | Oct 22, 2023

Card 3:
"একটি ক্রিকেট বলকে ৫ মিটার উচ্চতা থেকে নিচে ফেলে দেওয়া হলো। একই সময়ে অপর একটি বলকে..."
Badges: Physics | Class 10 | Creative | Hard
Meta: 10 marks | Oct 20, 2023

PAGINATION:
Center aligned, margin-top 32px
- Previous arrow (disabled if page 1)
- Page numbers: 1 (active, emerald), 2, 3, ..., 10
- Next arrow
- Text below: "Showing 1-20 of 1,247 questions" (12px, gray)

COLORS:
- Primary: #10B981 (Emerald 500)
- Secondary: #FBBF24 (Amber 400)  
- Background: #F9FAFB (Gray 50)
- Sidebar: #1E293B (Slate 800)
- Text: #111827 (Gray 900)
- Text Secondary: #64748B (Slate 500)

FONTS:
- Bengali text: "Hind Siliguri", serif
- English/UI: "Inter", sans-serif
- Icons: Material Symbols Outlined

RESPONSIVE:
- Desktop: 3 column grid
- Tablet: 2 column grid
- Mobile: 1 column stack, sidebar hidden (hamburger menu)

Make it clean, modern, and optimized for Bengali educators. Use subtle shadows, smooth transitions on hover, and professional spacing.
```

---

# 📄 PAGE 2: My Papers (আমার প্রশ্নপত্র)

## Optimized Stitch Prompt:

```
Create a "My Question Papers" management page for QuestionCraft BD education platform.

LAYOUT:
Same left sidebar and top navbar as Question Bank page (refer to previous design)
- Sidebar: Dark #1e293b, "My Papers" active state
- Navbar: Search, language, dark mode, user profile

PAGE HEADER:
- H1: "আমার প্রশ্নপত্র" (bold, 36px, #111827)
- Subtitle: "আপনার তৈরি সকল প্রশ্নপত্র এক জায়গায় সংরক্ষিত" (16px, #64748b)
- Right side buttons:
  * Filter icon button (gray, rounded-lg)
  * Sort dropdown (gray, rounded-lg): "Date ↓", "Title A-Z", "Subject"
  * "+ নতুন প্রশ্নপত্র তৈরি করুন" button (emerald, white text, rounded-xl, shadow)

STATS CARDS (3 cards in row, gap 24px):
White background, rounded-2xl, padding 24px

Card 1:
- Icon: Green papers stack
- Number: "128" (bold, 32px)
- Growth badge: "+12%" (green, small, top-right)
- Label: "মোট প্রশ্নপত্র"

Card 2:
- Icon: Amber edit document
- Number: "14"
- Pending badge: "5 pending" (amber, small)
- Label: "খসড়া প্রশ্নপত্র"

Card 3:
- Icon: Green checkmark
- Number: "114"
- Label: "প্রকাশিত প্রশ্নপত্র"

FILTER TABS (horizontal, below stats):
- "All Papers" (active, emerald underline)
- "Published" (gray)
- "Drafts" (gray)
- "Archived" (gray)

PAPERS TABLE:
White card, rounded-2xl, padding 24px

Table structure:
Columns: Icon | Title & Meta | Subject | Class | Date | Status | Actions

Header row (gray background, #f8fafc, rounded-t-xl):
- Icon (blank)
- "প্রশ্নপত্রের নাম" (bold)
- "বিষয়" (bold)
- "শ্রেণী" (bold)
- "তারিখ" (bold)
- "স্ট্যাটাস" (bold)
- "অ্যাকশন" (bold, right aligned)

Sample rows (3 examples):

Row 1:
- Icon: Purple circle with "P"
- Title: "পদার্থবিজ্ঞান ১ম পত্র - মধ্যবর্ষীয় পরীক্ষা ২০২৪" (bold, Bengali, 14px)
  Meta: "3 Attachments" (small, gray, with paperclip icon)
- Subject: Blue badge "Physics"
- Class: Green badge "Class 10"
- Date: "Oct 24, 2023" (gray, 13px)
- Status: Green pill badge "Published" with checkmark icon
- Actions: 5 icon buttons (View, Edit, PDF, Share, Delete)

Row 2:
- Icon: Blue circle with "M"
- Title: "উচ্চতর গণিত - বার্ষিক পরীক্ষা"
- Subject: Purple badge "Math"
- Class: Green badge "Class 12"
- Date: "Oct 22, 2023"
- Status: Amber pill badge "Draft" with clock icon
- Actions: Same 5 buttons

Row 3:
- Icon: Green circle with "E"
- Title: "ইংরেজি ব্যাকরণ - সাপ্তাহিক মূল্যায়ন"
- Subject: Orange badge "English"
- Class: Green badge "Class 9"
- Date: "Oct 20, 2023"
- Status: Green pill badge "Published"
- Actions: Same 5 buttons

Action buttons (icon only, gray, hover emerald):
1. Eye icon (View/Preview)
2. Pencil icon (Edit)
3. Download icon (Download PDF)
4. Share icon (Share)
5. Trash icon (Delete, red on hover)

Hover effect on rows: Light gray background (#f9fafb)

PAGINATION (bottom of table):
- "Showing 1-20 of 128 papers" (left, gray, 13px)
- Page controls (right):
  * Previous button (gray, rounded-lg)
  * Page 1 (active, emerald background, white text)
  * Page 2, 3, ..., 7 (gray)
  * Next button (emerald)

RIGHT SIDEBAR (optional, 300px width):
Card 1: "Recent Activity"
- Icon timeline of recent actions
- "PDF exported: Physics Midterm" 
- "Draft saved: Math Final"
- Timestamps

Card 2: "Quick Tips" (emerald background gradient)
- Lightbulb icon
- Heading: "সময় বাঁচান"
- Text: "AI ব্যবহার করে ৫ মিনিটে প্রশ্নপত্র তৈরি করুন"
- "Try Now →" link

EMPTY STATE (if no papers):
Centered content, padding 80px:
- Illustration: Documents/papers graphic (use simple SVG or icon)
- Heading: "আপনার কোনো প্রশ্নপত্র নেই" (24px, bold)
- Text: "এখনই আপনার প্রথম প্রশ্নপত্র তৈরি করুন AI এর সাহায্যে" (16px, gray)
- Button: "প্রশ্নপত্র তৈরি শুরু করুন" (emerald, large, rounded-xl)

COLORS & FONTS:
Same as Question Bank page
- Primary: #10B981
- Badges: Subject-specific colors (blue, purple, orange, green)
- Bengali: Hind Siliguri
- UI: Inter

INTERACTIONS:
- Table rows: Smooth hover background
- Action buttons: Color change + scale on hover
- Status badges: Subtle shadow
- Transitions: 200ms ease

Make the table data-dense but readable. Use proper spacing and alignment.
```

---

# 📄 PAGE 3: Settings (সেটিংস)

## Optimized Stitch Prompt:

```
Design a comprehensive Settings page for QuestionCraft BD with tabbed navigation.

LAYOUT:
Same sidebar and navbar as previous pages
- Sidebar: "Settings" active state (emerald)
- Main content: Full width, white background

PAGE STRUCTURE (Two-column layout):

LEFT COLUMN (Navigation, 280px width):
White card, rounded-2xl, padding 16px, sticky position

Settings tabs (vertical list):
Each tab: Padding 12px 16px, rounded-lg, hover background

1. "প্রোফাইল সেটিংস" - ACTIVE (emerald background, white text)
   Icon: User circle
   
2. "অ্যাকাউন্ট নিরাপত্তা" (gray text, white bg)
   Icon: Lock

3. "নোটিফিকেশন" (gray)
   Icon: Bell

4. "থিম ও ভাষা" (gray)
   Icon: Palette

5. "PDF সেটিংস" (gray)
   Icon: Document

6. "সাবস্ক্রিপশন" (gray)
   Icon: Credit card
   Badge: "Phase 3" (amber, small)

RIGHT COLUMN (Content area, flex-1):
White card, rounded-2xl, padding 32px

---

TAB 1 CONTENT: প্রোফাইল সেটিংস (DEFAULT ACTIVE)

Header:
- H2: "প্রোফাইল সেটিংস" (28px, bold)
- Subtitle: "আপনার ব্যক্তিগত তথ্য আপডেট করুন" (14px, gray)

Profile Photo Section:
- Large avatar (120px circle, with photo)
- Two buttons below:
  * "Change Photo" (emerald, small)
  * "Remove" link (red text, small)

Form (vertical stack, gap 24px):

Field 1:
- Label: "পুরো নাম" (bold, 14px)
- Input: "Dr. Sarah Ahmed" (filled)
- Help text: "এই নামটি আপনার প্রশ্নপত্রে দেখানো হবে" (12px, gray)

Field 2:
- Label: "ইমেইল ঠিকানা"
- Input: "sarah.ahmed@example.com" (filled, disabled appearance)
- Badge: "Verified ✓" (green, small, right side)
- Link: "Change Email" (emerald, 13px, right side)

Field 3:
- Label: "প্রতিষ্ঠানের নাম"
- Input: "Dhaka Residential Model College" (filled)

Field 4:
- Label: "পদবী"
- Input: "Senior Lecturer" (filled)

Field 5:
- Label: "বিষয়"
- Dropdown: "Physics" selected (with arrow icon)

Field 6:
- Label: "শ্রেণী (একাধিক নির্বাচন করুন)"
- Multi-select pills: "Class 9" "Class 10" "Class 11" "Class 12" (emerald bg)
- Each pill has small × to remove

Field 7:
- Label: "ফোন নম্বর"
- Input: "+880 1XXX-XXXXXX" (filled)
- Button: "Verify" (gray outline, small, right side)

Field 8:
- Label: "ঠিকানা"
- Textarea: 3 rows, rounded border

Bottom buttons (gap 16px):
- "পরিবর্তন সংরক্ষণ করুন" (emerald, large, rounded-xl, shadow)
- "বাতিল করুন" (gray outline, large, rounded-xl)

---

TAB 2 CONTENT: অ্যাকাউন্ট নিরাপত্তা

H2: "অ্যাকাউন্ট নিরাপত্তা"

Section A: পাসওয়ার্ড পরিবর্তন
White sub-card, border, rounded-xl, padding 20px

Fields:
- "বর্তমান পাসওয়ার্ড" (password input)
- "নতুন পাসওয়ার্ড" (password input with strength bar below)
  Strength bar: Orange/Amber/Green based on strength
- "পাসওয়ার্ড নিশ্চিত করুন" (password input)
- Button: "পাসওয়ার্ড আপডেট করুন" (emerald, rounded-lg)

Section B: দুই-পদক্ষেপ যাচাইকরণ
White sub-card, margin-top 24px

- Toggle switch (ON position, emerald)
- Text: "অতিরিক্ত নিরাপত্তার জন্য 2FA সক্রিয় করুন"
- Button: "Setup 2FA" (gray outline)

Section C: লগইন হিস্টরি
Table with columns:
- Device/Browser | Location | Date & Time | IP Address
- Current session has badge "এই ডিভাইস" (green)

Sample rows:
1. "Chrome on Windows | Dhaka, BD | Mar 5, 2026 10:30 AM | 103.xxx.xxx.xxx" [এই ডিভাইস]
2. "Safari on iPhone | Dhaka, BD | Mar 4, 2026 8:15 PM | 103.xxx.xxx.xxx"
3. "Chrome on Android | Chittagong, BD | Mar 3, 2026 2:00 PM | 103.xxx.xxx.xxx"

---

TAB 3 CONTENT: নোটিফিকেশন

H2: "নোটিফিকেশন সেটিংস"

Section: ইমেইল নোটিফিকেশন
White sub-card

Toggle switches (ON=emerald, OFF=gray):
✅ "প্রশ্নপত্র তৈরি সম্পন্ন" (ON)
✅ "AI প্রশ্ন জেনারেশন সফল" (ON)
⬜ "সাপ্তাহিক সামারি" (OFF)
✅ "নতুন ফিচার ঘোষণা" (ON)

Section: পুশ নোটিফিকেশন
✅ "নতুন মন্তব্য বা শেয়ার" (ON)
⬜ "সিস্টেম আপডেট" (OFF)

Section: SMS নোটিফিকেশন
⬜ "গুরুত্বপূর্ণ নিরাপত্তা সতর্কতা" (OFF)

---

TAB 4 CONTENT: থিম ও ভাষা

H2: "থিম ও ভাষা"

Section A: ভাষা নির্বাচন
Radio buttons (vertical):
● "বাংলা" (selected, emerald dot)
○ "English" (gray dot)
○ "Both (Bilingual)" (gray dot)

Section B: থিম মোড
3 cards in row (selectable):
1. Light Mode card (☀️ icon, white bg, border)
2. Dark Mode card (🌙 icon, white bg, border)
3. Auto (System) card (🔄 icon, emerald border - SELECTED)

Section C: ফন্ট সাইজ
- Label: "ফন্ট সাইজ"
- Slider: Small → Medium (active) → Large
- Current value badge: "Medium" (emerald)

Section D: পরীক্ষামূলক ফিচার
Toggle: "নতুন AI টুলস পরীক্ষা করুন" (ON, emerald)
Description: "সর্বশেষ AI ফিচার আগে ব্যবহার করুন" (12px, gray)

---

TAB 5 CONTENT: PDF সেটিংস

H2: "PDF Export ডিফল্ট সেটিংস"

Form fields:

1. "কাগজের সাইজ"
   Dropdown: "A4 (Standard)" selected

2. "লেআউট"
   Dropdown: "Two Column" selected

3. "ফন্ট সাইজ"
   Slider: 8pt → 11pt (active) → 16pt
   Value display: "11pt" badge

Section: Always Include
Checkboxes:
✅ "Institution Header"
✅ "Watermark"
⬜ "Answer Key at End"
✅ "Page Numbers"
✅ "Footer with Generation Date"

Button: "Preview Sample PDF" (gray outline, rounded-lg)

---

GENERAL STYLING:

Colors:
- Primary: #10B981
- Active tab: Emerald background
- Inactive tabs: Gray text, white bg, hover #f9fafb
- Inputs: Border #e2e8f0, focus emerald ring
- Toggle ON: Emerald
- Toggle OFF: Gray (#cbd5e1)

Typography:
- Bengali: Hind Siliguri
- Headings: Bold
- Labels: Semibold, 14px
- Inputs: 14px
- Help text: 12px, gray

Spacing:
- Section gaps: 32px
- Field gaps: 24px
- Card padding: 20-32px

Interactions:
- Smooth toggle animations
- Input focus: Emerald ring, 2px
- Button hover: Slight darken
- Tab hover: Background change

Success toast on save:
"✓ সেটিংস সফলভাবে সংরক্ষিত হয়েছে" (green, top-right, auto-dismiss 3s)

Make it user-friendly for non-technical teachers. Clear labels, helpful descriptions, smooth interactions.
```

---

# 🎯 Stitch Usage Tips

## Before Generating:

1. **Read the prompt carefully**
   - Make sure you understand the layout
   - Note the specific colors and fonts

2. **Copy the ENTIRE prompt**
   - Don't skip any section
   - Include all sample data

3. **Check Stitch settings**
   - Select "Web page" output
   - Choose "Responsive" layout

## During Generation:

4. **Wait patiently**
   - Stitch may take 30-60 seconds
   - Don't refresh the page

5. **Review the output**
   - Check if colors are correct (#10B981)
   - Verify Bengali text (Hind Siliguri font)
   - Look for layout issues

## After Generation:

6. **Export options:**
   - Click "Export Code"
   - Download HTML + CSS
   - Save in organized folders

7. **Test locally:**
   - Open HTML in browser
   - Check responsive design
   - Test on mobile viewport

## If Output is Not Perfect:

8. **Refine the prompt:**
   - Add more specific details
   - Include screenshots of reference
   - Clarify confusing sections

9. **Regenerate:**
   - Click "Regenerate" button
   - Try slight prompt variations
   - Compare outputs

---

# 🔄 After Stitch: React Conversion Workflow

## Step 1: Organize Stitch Output

```
questioncraft-bd/
├── stitch-output/
│   ├── question-bank.html
│   ├── my-papers.html
│   └── settings.html
```

## Step 2: Convert to React (using Codex/Cursor)

Prompt for Codex:

```
Convert this HTML to a Next.js 14 React component:

1. Use TypeScript
2. Keep Tailwind classes exactly as is
3. Replace static data with props/state
4. Add proper imports
5. Use Hind Siliguri font from Google Fonts
6. Make it a client component ('use client')
7. Export as default

[Paste Stitch HTML here]
```

## Step 3: Component Structure

```typescript
// app/(dashboard)/question-bank/page.tsx
'use client';

import { useState } from 'react';

export default function QuestionBankPage() {
  const [filters, setFilters] = useState({...});
  
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside>...</aside>
      
      {/* Main Content */}
      <main>...</main>
    </div>
  );
}
```

## Step 4: Connect to Supabase

Add data fetching:

```typescript
const { data: questions } = await supabase
  .from('questions')
  .select('*')
  .eq('user_id', userId);
```

---

# 📊 Progress Tracking

## Page Generation Checklist:

### Question Bank:
- [ ] Stitch prompt copied
- [ ] Page generated
- [ ] HTML exported
- [ ] Local test passed
- [ ] React conversion done
- [ ] Supabase connected

### My Papers:
- [ ] Stitch prompt copied
- [ ] Page generated
- [ ] HTML exported
- [ ] Local test passed
- [ ] React conversion done
- [ ] Supabase connected

### Settings:
- [ ] Stitch prompt copied
- [ ] Page generated
- [ ] HTML exported
- [ ] Local test passed
- [ ] React conversion done
- [ ] User preferences saved

---

# 🚨 Common Issues & Solutions

## Issue 1: Colors Don't Match
**Solution:** In Stitch prompt, be very explicit:
```
Use EXACT color: #10B981 for all emerald elements
Use EXACT color: #FBBF24 for all amber elements
```

## Issue 2: Bengali Font Not Loading
**Solution:** Add to HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
```

## Issue 3: Layout Breaks on Mobile
**Solution:** Check Tailwind responsive classes:
```
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

## Issue 4: Icons Not Showing
**Solution:** Add Material Symbols:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
```

---

# 💡 Pro Tips

1. **Generate one page at a time**
   - Focus on quality over speed
   - Test each before moving to next

2. **Save all Stitch outputs**
   - Keep original HTML as reference
   - Document any changes you make

3. **Use version control**
   - Git commit after each page
   - Easy to rollback if needed

4. **Test on real devices**
   - Desktop, tablet, mobile
   - Different browsers

5. **Get feedback early**
   - Show to teachers/users
   - Iterate based on feedback

---

# 📞 Need Help?

If you encounter issues:

1. **Check the prompt again**
   - Did you copy everything?
   - Are colors specified correctly?

2. **Try regenerating**
   - Stitch outputs can vary
   - Second attempt might be better

3. **Modify the prompt**
   - Add more details
   - Clarify ambiguous parts

4. **Ask for refinement**
   - Share screenshot with me
   - I'll help adjust the prompt

---

# ✅ Final Checklist

Before considering a page "done":

- [ ] Colors match design system (#10B981, #FBBF24)
- [ ] Bengali text renders correctly (Hind Siliguri)
- [ ] All interactive elements have hover states
- [ ] Page is responsive (mobile, tablet, desktop)
- [ ] Icons load properly (Material Symbols)
- [ ] Spacing is consistent (16px, 24px, 32px grid)
- [ ] Sample data is in Bengali
- [ ] Empty states are designed
- [ ] Loading states are considered
- [ ] Error states are handled

---

**Ready to start?** 🚀

Copy the prompts from above and head to:
👉 **https://stitch.withgoogle.com**

Good luck! আপনার সফলতা কামনা করছি! 🎉
