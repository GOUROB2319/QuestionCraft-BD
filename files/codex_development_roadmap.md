# 🚀 QuestionCraft BD — Complete Development Roadmap
## Stitch to Production via Codex/Antigravity

**তারিখ:** March 5, 2026  
**স্ট্যাটাস:** Ready for Development  
**Total Designed Pages:** 11/11 ✅

---

## 📊 Current Setup Overview

### আপনার MCP Architecture:

```
┌─────────────┐
│   Stitch    │ (11 Designed Pages)
└──────┬──────┘
       │ MCP
       ▼
┌─────────────────┐
│  Antigravity    │ (Main Development Hub)
└────┬─────┬──────┘
     │     │
 MCP │     │ MCP
     ▼     ▼
┌────────┐ ┌──────────┐
│ Codex  │ │ Supabase │
└────────┘ └──────────┘
     │
     │ MCP
     ▼
┌─────────────┐
│   Stitch    │
└─────────────┘
```

**Advantages:**
- ✅ Direct Stitch → Antigravity connection
- ✅ Codex can access both Stitch designs + Supabase
- ✅ Antigravity orchestrates everything
- ✅ No manual file transfers needed

---

## 🎯 Development Strategy

### Phase-Based Approach:

**Phase 0:** Foundation Setup (Day 1-2)
- Project initialization
- Folder structure
- Core dependencies
- Environment setup

**Phase 1:** Authentication Flow (Day 3-5)
- Landing Page
- Registration
- Login
- OTP Verification

**Phase 2:** Dashboard & Core Features (Day 6-10)
- Dashboard
- Question Creator
- Question Bank
- My Papers (Paper management)

**Phase 3:** Settings & Export (Day 11-12)
- Settings Page
- PDF Export
- MS Word Editor (optional advanced feature)

**Phase 4:** Testing & Deployment (Day 13-15)
- Testing
- Bug fixes
- Vercel deployment

---

# 📋 PHASE 0: Foundation Setup

## Step 0.1: Project Initialization

### Codex Prompt #1: Initialize Next.js Project

```
আমাকে QuestionCraft BD নামে একটি Next.js 14 প্রজেক্ট সেটআপ করতে সাহায্য করুন। Requirements:

1. Next.js 14 App Router
2. TypeScript
3. Tailwind CSS
4. Supabase client library
5. ShadCN UI components
6. React Hook Form
7. Zod validation
8. Lucide React icons

Commands যা run করতে হবে:
- npx create-next-app@latest questioncraft-bd
- TypeScript: Yes
- Tailwind: Yes
- App Router: Yes
- src directory: No

তারপর এই dependencies install করুন:
- @supabase/supabase-js
- @supabase/auth-helpers-nextjs
- react-hook-form
- @hookform/resolvers
- zod
- lucide-react
- class-variance-authority
- clsx
- tailwind-merge

Tailwind config update করুন:
- Primary color: #10B981 (emerald)
- Secondary color: #FBBF24 (amber)
- Font: Hind Siliguri for Bengali

package.json এ Hind Siliguri font Google Fonts থেকে import করার জন্য layout.tsx তে configuration দিন।

সম্পূর্ণ folder structure তৈরি করুন:
app/
  ├── (auth)/
  │   ├── login/
  │   ├── register/
  │   └── verify/
  ├── (dashboard)/
  │   ├── dashboard/
  │   ├── questions/
  │   │   ├── create/
  │   │   └── bank/
  │   ├── papers/
  │   └── settings/
  ├── api/
  │   ├── auth/
  │   ├── questions/
  │   └── papers/
  ├── legal/
  │   ├── terms/
  │   └── privacy/
  └── page.tsx (Landing)

components/
  ├── ui/ (ShadCN)
  ├── layout/
  ├── questions/
  └── papers/

lib/
  ├── supabase.ts
  ├── types.ts
  └── utils.ts

সব folder এ placeholder page.tsx file তৈরি করুন।
```

**Expected Output:**
- ✅ Next.js project initialized
- ✅ All dependencies installed
- ✅ Folder structure created
- ✅ Tailwind configured with colors
- ✅ Hind Siliguri font loaded

---

## Step 0.2: Supabase Setup

### Codex Prompt #2: Configure Supabase

```
Supabase configuration সেটআপ করুন QuestionCraft BD এর জন্য।

1. .env.local file তৈরি করুন এবং এই variables যোগ করুন:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

2. lib/supabase.ts file তৈরি করুন:
- Client-side supabase client
- Server-side supabase client (for API routes)
- Auth helpers

3. middleware.ts তৈরি করুন:
- Protected routes: /dashboard, /questions, /papers, /settings
- Public routes: /, /login, /register, /verify
- Auto redirect logic

4. lib/types.ts এ database types define করুন:
- User type
- Question type
- Paper type
- QuestionPaperAssociation type

Example interfaces দিন TypeScript এর জন্য।
```

**Expected Output:**
- ✅ .env.local created
- ✅ Supabase clients configured
- ✅ Middleware for auth protection
- ✅ TypeScript types defined

---

## Step 0.3: Database Schema

### Codex Prompt #3: Create Supabase Tables

```
Supabase SQL migrations তৈরি করুন QuestionCraft BD এর জন্য।

Tables যা তৈরি করতে হবে:

1. users (extends auth.users)
- id (UUID, PK)
- email (TEXT)
- full_name (TEXT)
- institution (TEXT)
- role (TEXT) -- 'teacher', 'admin'
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

2. questions
- id (UUID, PK)
- user_id (UUID, FK → users)
- title (TEXT)
- type (TEXT) -- 'mcq', 'short', 'broad'
- subject (TEXT)
- topic (TEXT)
- class_level (TEXT)
- difficulty (TEXT) -- 'easy', 'medium', 'hard'
- language (TEXT) -- 'bangla', 'english', 'both'
- content (JSONB) -- stores question data
- marks (INTEGER)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

3. papers
- id (UUID, PK)
- user_id (UUID, FK → users)
- title (TEXT)
- subject (TEXT)
- class_level (TEXT)
- exam_type (TEXT)
- total_marks (INTEGER)
- duration_minutes (INTEGER)
- metadata (JSONB)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

4. question_paper_association
- id (UUID, PK)
- question_id (UUID, FK → questions)
- paper_id (UUID, FK → papers)
- order_index (INTEGER)
- section (TEXT)

Row Level Security (RLS) policies enable করুন:
- Users শুধু নিজের data access করতে পারবে
- INSERT, SELECT, UPDATE, DELETE policies

Complete SQL migration script দিন যা Supabase SQL Editor এ run করা যাবে।
```

**Expected Output:**
- ✅ Complete SQL migration
- ✅ All tables created
- ✅ Foreign keys setup
- ✅ RLS policies enabled

---

# 📋 PHASE 1: Authentication Flow

## Step 1.1: Landing Page

### Codex Prompt #4: Build Landing Page from Stitch

```
Stitch screen "Updated Landing Page (Audit Applied)" (ID: bef3e1efe8f6453392a7b4c7677a5c3b) থেকে Next.js React component তৈরি করুন।

Requirements:
1. app/page.tsx এ implement করুন
2. TypeScript ব্যবহার করুন
3. Tailwind classes Stitch থেকে exactly copy করুন
4. Hind Siliguri font Bengali text এ use করুন
5. All sections include করুন:
   - Hero section
   - Stats cards
   - How it works
   - Features
   - Footer

6. Interactive elements:
   - "শুরু করুন" button → /register redirect
   - "লগইন" link → /login redirect
   - Dark mode toggle (state management)
   - Language toggle (বাংলা/English)

7. Responsive design maintain করুন:
   - Mobile: Stack layout
   - Tablet: 2 columns
   - Desktop: Full layout

8. Add smooth scroll animations using Framer Motion
9. Meta tags for SEO

Component structure:
- Separate Hero, Stats, Features, Footer components
- Import from components/landing/

Clean, production-ready code চাই।
```

**Expected Output:**
- ✅ Landing page fully functional
- ✅ Responsive on all devices
- ✅ Dark mode working
- ✅ Language toggle ready
- ✅ Navigation links active

---

## Step 1.2: Registration Page

### Codex Prompt #5: Build Registration with Form Validation

```
Stitch screen "Updated Registration Screen" (ID: 0597aea366f34690afe96959e5e22471) ব্যবহার করে registration page তৈরি করুন।

Path: app/(auth)/register/page.tsx

Requirements:

1. React Hook Form + Zod validation
2. Form fields:
   - Full Name (required, min 3 chars)
   - Email (required, valid email)
   - Institution Name (required)
   - Password (required, min 8 chars, strength indicator)

3. Password Strength Indicator:
   - Weak (red): < 8 chars
   - Medium (orange): 8+ chars
   - Strong (green): 8+ chars + number + special char

4. Google OAuth button:
   - onClick → Supabase signInWithOAuth
   - Provider: google
   - Redirect to /dashboard

5. Terms checkbox (required)
   - Link to /legal/terms

6. Form submission:
   - Call Supabase signUp
   - On success → redirect to /verify
   - On error → show toast notification

7. Toast notifications using sonner
8. Loading state during submission
9. Split-screen layout from Stitch design

Error messages সব Bengali তে show করুন:
- "সঠিক ইমেইল প্রদান করুন"
- "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে"

Client component ('use client') হতে হবে।
```

**Expected Output:**
- ✅ Registration form with validation
- ✅ Password strength indicator working
- ✅ Google OAuth functional
- ✅ Error handling in Bengali
- ✅ Success redirect to /verify

---

## Step 1.3: Login Page

### Codex Prompt #6: Build Login Page

```
Stitch screen "Updated Login Screen" (ID: 124b208875db4b74a9d1d28b20c7c05b) থেকে login page তৈরি করুন।

Path: app/(auth)/login/page.tsx

Requirements:

1. React Hook Form + Zod
2. Fields:
   - Email/Phone
   - Password (show/hide toggle)
   - Remember Me checkbox

3. Supabase signInWithPassword:
   - Email + password authentication
   - Remember me → session persistence
   - On success → redirect to /dashboard
   - On error → Bengali error message

4. "Forgot Password" link → /forgot-password page (optional)

5. Google OAuth button (same as register)

6. Split-screen design maintain করুন

7. Form validation:
   - Email required
   - Password required
   - Error states

Client component এবং Bengali error messages।
```

**Expected Output:**
- ✅ Login form functional
- ✅ Email + password auth working
- ✅ Google OAuth working
- ✅ Remember me feature
- ✅ Error handling

---

## Step 1.4: OTP Verification

### Codex Prompt #7: Build OTP Verification

```
Stitch screen "Updated OTP Verification (Audit Applied)" (ID: bed185c3c31345438ab9f44f0c3cd2af) থেকে OTP page তৈরি করুন।

Path: app/(auth)/verify/page.tsx

Requirements:

1. 6-digit OTP input boxes:
   - Auto-focus next box on input
   - Backspace goes to previous box
   - Paste support (6 digits at once)
   - Mobile: Numeric keyboard

2. Timer countdown (2 minutes):
   - Display: "০২:০০ মিনিট"
   - When expires → enable "Resend" button

3. Verify button:
   - Call Supabase verifyOtp
   - On success → redirect to /dashboard
   - On error → show error message

4. Resend button:
   - Disabled until timer expires
   - onClick → resend OTP via Supabase

5. Use useSearchParams to get email from query string
6. Centered card layout from Stitch

Clean UI with smooth transitions।
```

**Expected Output:**
- ✅ OTP input working
- ✅ Auto-focus and paste working
- ✅ Timer countdown functional
- ✅ Verify and Resend working
- ✅ Error handling

---

# 📋 PHASE 2: Dashboard & Core Features

## Step 2.1: Dashboard

### Codex Prompt #8: Build Dashboard with Real Data

```
Stitch screen "Updated Teacher Dashboard" (ID: eb8462b0b29d4012a0f119aab3db25d3) থেকে dashboard তৈরি করুন।

Path: app/(dashboard)/dashboard/page.tsx

Requirements:

1. Fetch data from Supabase:
   - Total questions count
   - Total papers count
   - Recent papers (last 10)

2. Stats cards:
   - মোট প্রশ্ন তৈরি (from questions table)
   - মোট প্রশ্নপত্র (from papers table)
   - প্রশ্ন ব্যাংকে প্রশ্ন
   - AI প্রশ্ন তৈরি (Phase 2, show 0 for now)

3. Recent Activity Table:
   - Columns: Name, Subject, Date, Status, Actions
   - Data from papers table
   - Actions: View, Edit, Download PDF, Delete
   - onClick handlers for each action

4. Quick Actions Panel:
   - "নতুন প্রশ্নপত্র তৈরি করুন" → /questions/create
   - "AI দিয়ে তৈরি করুন" → disabled (Phase 2)

5. Sidebar Navigation:
   - Active state for Dashboard
   - Links to other pages

6. Use React Server Components for data fetching
7. Loading skeleton while fetching

Sample data থাকলে show করুন, না থাকলে empty state।
```

**Expected Output:**
- ✅ Dashboard with real Supabase data
- ✅ Stats cards showing counts
- ✅ Recent papers table
- ✅ Navigation working
- ✅ Loading states

---

## Step 2.2: Question Creator

### Codex Prompt #9: Build Question Creator (Complex)

```
Stitch screen "Updated Question Editor (Audit Applied)" (ID: 69bf0a84f97f4b3481f574a4e215a0dd) থেকে question creator তৈরি করুন।

Path: app/(dashboard)/questions/create/page.tsx

Requirements:

1. Split-view Layout:
   - Left: Editor pane (60%)
   - Right: Live preview pane (40%)

2. Editor Features:
   - Segmented button: MCQ / Creative / Short Questions
   - Question blocks (dynamic add/remove)
   - For MCQ:
     * Question text input
     * 4 option inputs (A, B, C, D)
     * Radio for correct answer
     * Marks input
     * Difficulty dropdown
   - For Creative:
     * Question stem
     * Sub-questions (ক, খ, গ, ঘ)
     * Marks breakdown
   - For Short:
     * Question text
     * Marks input

3. Preview Pane:
   - Live A4 paper preview
   - Auto-update on editor changes
   - Show formatted question
   - Institution header (editable)
   - Watermark: "QUESTIONCRAFT BD"

4. Toolbar (left sidebar):
   - Math formula button (optional Phase 2)
   - Image upload button
   - Chart/Graph tool (optional)

5. Save functionality:
   - Save draft → Supabase questions table
   - Auto-save every 30 seconds
   - Status: "Cloud synced" indicator

6. Generate PDF button:
   - Call PDF generation API (Step 2.6)

State management:
- Use useState for questions array
- Use useEffect for auto-save
- Debounce text inputs

Complex component হবে, ভালো structure করুন।
```

**Expected Output:**
- ✅ Split-view editor working
- ✅ MCQ/Creative/Short tabs functional
- ✅ Live preview updating
- ✅ Auto-save working
- ✅ Draft saving to Supabase

---

## Step 2.3: Question Bank

### Codex Prompt #10: Build Question Bank with Filters

```
Stitch screen "Question Bank Management" (ID: a39ef83172e54757807000f24f53b47c) থেকে question bank তৈরি করুন।

Path: app/(dashboard)/questions/bank/page.tsx

Requirements:

1. Fetch all questions from Supabase:
   - WHERE user_id = current_user
   - ORDER BY created_at DESC

2. Stats Cards:
   - Total Questions
   - MCQ Questions (filter by type)
   - Creative Questions
   - Short Questions

3. Filter Panel:
   - Subject dropdown (fetch unique subjects)
   - Class dropdown (6-12)
   - Type checkboxes: MCQ, Creative, Short
   - Difficulty badges: Easy, Medium, Hard
   - "Clear Filters" button

4. Questions Grid:
   - 3 columns (desktop)
   - 2 columns (tablet)
   - 1 column (mobile)
   - Each card:
     * Question preview (first 100 chars)
     * Badges (Subject, Class, Type, Difficulty)
     * Metadata (Marks, Date)
     * Actions: View, Edit, Add to Paper, Delete

5. Pagination:
   - 20 questions per page
   - Previous/Next buttons
   - Page numbers

6. Search bar:
   - Search by question text
   - Debounced input

7. Empty state:
   - "কোনো প্রশ্ন পাওয়া যায়নি"
   - "নতুন প্রশ্ন তৈরি করুন" button

Filter logic implement করুন client-side অথবা server-side query params দিয়ে।
```

**Expected Output:**
- ✅ Question bank with real data
- ✅ Filters working
- ✅ Search functional
- ✅ Pagination working
- ✅ Actions (Edit, Delete) working

---

## Step 2.4: My Papers (Paper Management)

### Codex Prompt #11: Build My Papers Page

```
একটি "My Papers" page তৈরি করুন যেখানে user তার সব question papers manage করতে পারবে।

Path: app/(dashboard)/papers/page.tsx

Requirements:

1. Fetch papers from Supabase:
   - WHERE user_id = current_user
   - Include question count

2. Stats Cards:
   - Total Papers
   - Draft Papers (status = 'draft')
   - Published Papers (status = 'published')

3. Filter Tabs:
   - All Papers (active)
   - Published
   - Drafts
   - Archived

4. Papers Table:
   - Columns: Icon, Title & Meta, Subject, Class, Date, Status, Actions
   - Sample rows from Stitch design
   - Status badges: Published (green), Draft (amber)
   - Actions: View, Edit, Download PDF, Share, Delete

5. Pagination (same as Question Bank)

6. Right Sidebar (optional):
   - Recent Activity
   - Quick Tips

7. Empty State:
   - "আপনার কোনো প্রশ্নপত্র নেই"
   - CTA button

Table hover effects এবং smooth transitions।
```

**Expected Output:**
- ✅ Papers table with data
- ✅ Filter tabs working
- ✅ Actions functional
- ✅ Empty state designed

---

## Step 2.5: PDF Export API

### Codex Prompt #12: Create PDF Generation API

```
একটি API route তৈরি করুন যা question paper থেকে PDF generate করবে।

Path: app/api/papers/[id]/export/route.ts

Requirements:

1. Receive paper_id from URL params
2. Fetch paper data from Supabase:
   - Paper metadata
   - Associated questions (JOIN)

3. Use @react-pdf/renderer অথবা puppeteer:
   - Create A4 PDF
   - Include:
     * Institution header
     * Paper title, subject, class
     * Time, marks
     * Instructions
     * Questions (formatted)
     * Watermark
     * Page numbers

4. Return PDF as blob:
   - Set headers: Content-Type: application/pdf
   - Filename: paper-title.pdf

5. Error handling:
   - 404 if paper not found
   - 500 if generation fails

Bengali font (Hind Siliguri) support করতে হবে PDF এ।
```

**Expected Output:**
- ✅ PDF generation working
- ✅ Bengali font rendering
- ✅ Professional format
- ✅ Download working

---

## Step 2.6: PDF Export Settings Modal

### Codex Prompt #13: Build PDF Settings Modal

```
Stitch screen "Updated Export Settings (Audit Applied)" (ID: 2f8ece4ff159402fb98d7bfc124f2592) থেকে PDF settings modal তৈরি করুন।

Requirements:

1. Modal component (use ShadCN Dialog)
2. Settings:
   - Paper Size dropdown (A4, Legal, Letter)
   - Layout dropdown (One Column, Two Column)
   - Font Size slider (8pt - 16pt)
   - Checkboxes:
     * Include Institution Header
     * Include Watermark
     * Show Answer Key at End
     * Page Numbers
     * Footer with Date

3. Live Preview:
   - Show A4 mockup
   - Update on settings change

4. Buttons:
   - Cancel → close modal
   - Download PDF → call export API with settings

5. State management:
   - Store settings in state
   - Pass to API on export

Modal design Stitch থেকে exactly maintain করুন।
```

**Expected Output:**
- ✅ Modal opening/closing
- ✅ Settings functional
- ✅ Live preview updating
- ✅ PDF export with settings

---

# 📋 PHASE 3: Settings & Advanced Features

## Step 3.1: Settings Page

### Codex Prompt #14: Build Settings with Tabs

```
Stitch screen "Settings Page" (ID: 52277c22698141daa6e62eccf4851289) থেকে settings page তৈরি করুন।

Path: app/(dashboard)/settings/page.tsx

Requirements:

1. Two-column layout:
   - Left: Tabs navigation (280px)
   - Right: Content area

2. Tabs:
   - প্রোফাইল সেটিংস (active)
   - অ্যাকাউন্ট নিরাপত্তা
   - নোটিফিকেশন
   - থিম ও ভাষা
   - PDF সেটিংস

3. Tab 1: Profile Settings
   - Form fields:
     * Full Name
     * Email (disabled, verified badge)
     * Institution
     * Designation
     * Subject (dropdown)
     * Classes Teaching (multi-select)
     * Phone
     * Address (textarea)
   - Avatar upload
   - Save button → update Supabase users table

4. Tab 2: Account Security
   - Change Password form
   - 2FA toggle (optional Phase 2)
   - Login History table

5. Tab 3: Notifications
   - Email notification toggles
   - Push notification toggles
   - SMS toggles

6. Tab 4: Theme & Language
   - Language radio buttons (Bangla/English/Both)
   - Theme cards (Light/Dark/Auto)
   - Font Size slider

7. Tab 5: PDF Settings
   - Default PDF export settings
   - Same as modal settings

Tab switching smooth transition করুন।
```

**Expected Output:**
- ✅ Settings page with tabs
- ✅ Profile form saving to DB
- ✅ All tabs functional
- ✅ Preferences persisting

---

## Step 3.2: Terms & Privacy Page

### Codex Prompt #15: Build Legal Pages

```
Stitch screen থেকে Terms & Privacy page তৈরি করুন।

Path: app/legal/terms/page.tsx

Requirements:

1. Static content page
2. Sections:
   - ব্যবহারের শর্তাবলী
   - তথ্য সংগ্রহ
   - তথ্য সুরক্ষা
   - AI ব্যবহারের নীতি

3. Clean, readable layout
4. Icon-based sections
5. Footer with last updated date

Simple static page, কোনো dynamic content না।
```

**Expected Output:**
- ✅ Terms page created
- ✅ Privacy page created
- ✅ Readable layout

---

# 📋 PHASE 4: Testing & Deployment

## Step 4.1: Testing

### Codex Prompt #16: Add Tests

```
Key pages এর জন্য basic tests লিখুন:

1. Registration form validation
2. Login form validation
3. Dashboard data loading
4. Question creation
5. PDF generation

Use Vitest + React Testing Library.

Critical user flows test করুন।
```

---

## Step 4.2: Deployment

### Codex Prompt #17: Deploy to Vercel

```
QuestionCraft BD deploy করুন Vercel এ:

1. GitHub repository তৈরি করুন
2. Push code to GitHub
3. Vercel এ connect করুন
4. Environment variables set করুন:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY

5. Deploy button click করুন
6. Custom domain setup (optional)

Deployment checklist দিন।
```

**Expected Output:**
- ✅ Live on Vercel
- ✅ Environment variables set
- ✅ Custom domain (optional)

---

# 🎯 Execution Strategy

## Recommended Order:

### Week 1: Foundation + Auth
- Day 1: Phase 0 (Setup)
- Day 2-3: Phase 1 (Landing, Register, Login, OTP)
- Day 4-5: Test auth flow

### Week 2: Core Features
- Day 6-7: Dashboard + Question Creator
- Day 8-9: Question Bank + My Papers
- Day 10: PDF Export

### Week 3: Polish + Deploy
- Day 11: Settings Page
- Day 12: Bug fixes + Testing
- Day 13-15: Deployment + Documentation

---

# 💡 Codex Usage Tips

## General Prompt Structure:

```
[Clear objective]
[Stitch screen reference with ID]
[Specific requirements list]
[Technical constraints]
[Expected output]
```

## Best Practices:

1. **One feature at a time**
   - Don't ask for entire app in one prompt
   - Break into digestible chunks

2. **Reference Stitch IDs**
   - Always mention screen ID
   - Codex can access via MCP

3. **Be specific about data flow**
   - Mention Supabase tables
   - Specify query patterns

4. **Request TypeScript**
   - Always ask for types
   - Better code quality

5. **Ask for error handling**
   - Toast notifications
   - Loading states
   - Empty states

---

# 🔄 Development Workflow

## Daily Workflow:

```
Morning:
1. Review previous day's code
2. Pick next Codex prompt
3. Run prompt in Codex

Afternoon:
4. Test generated code
5. Fix any issues
6. Commit to Git

Evening:
7. Review progress
8. Plan next day
9. Update checklist
```

## Git Strategy:

```
Branches:
- main (production)
- develop (staging)
- feature/landing-page
- feature/auth
- feature/dashboard
- etc.

Commits:
- feat: Add landing page
- fix: Fix registration validation
- style: Update button colors
- docs: Add README
```

---

# 📊 Progress Tracking

## Checklist:

### Phase 0: Foundation
- [ ] Next.js project initialized
- [ ] Supabase configured
- [ ] Database tables created
- [ ] Middleware setup

### Phase 1: Authentication
- [ ] Landing page
- [ ] Registration page
- [ ] Login page
- [ ] OTP verification

### Phase 2: Core Features
- [ ] Dashboard
- [ ] Question creator
- [ ] Question bank
- [ ] My papers
- [ ] PDF export API
- [ ] PDF settings modal

### Phase 3: Settings
- [ ] Settings page (all tabs)
- [ ] Terms & Privacy

### Phase 4: Deployment
- [ ] Testing
- [ ] Bug fixes
- [ ] Vercel deployment
- [ ] Custom domain

---

# 🚨 Common Issues & Solutions

## Issue 1: Stitch Design → React Conversion

**Problem:** Stitch layout breaks in React

**Solution:**
```
Codex Prompt:
"Stitch layout এ grid-cols-3 আছে কিন্তু React এ ভেঙে যাচ্ছে। 
Responsive classes properly add করুন:
- Mobile: grid-cols-1
- Tablet: grid-cols-2  
- Desktop: grid-cols-3"
```

## Issue 2: Bengali Font Not Loading

**Problem:** Hind Siliguri render হচ্ছে না

**Solution:**
```
layout.tsx এ check করুন:
import { Hind_Siliguri } from 'next/font/google'

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['300', '400', '500', '600', '700']
})
```

## Issue 3: Supabase Auth Not Working

**Problem:** Login করার পর redirect হচ্ছে না

**Solution:**
```
middleware.ts check করুন:
- matcher patterns correct?
- Callback URL configured?
- Session refresh logic?
```

## Issue 4: PDF Generation Slow

**Problem:** PDF generate করতে অনেক সময় লাগছে

**Solution:**
```
Codex Prompt:
"PDF generation optimize করুন:
1. Lazy load images
2. Use streaming response
3. Cache repeated elements
4. Show loading indicator"
```

---

# 📞 Getting Help

## If Stuck:

1. **Check Codex Output**
   - Read error messages carefully
   - Look for TypeScript errors

2. **Review Stitch Design**
   - Compare with generated code
   - Check if all elements included

3. **Test Incrementally**
   - Don't build everything at once
   - Test after each feature

4. **Ask Clarifying Prompts**
```
"এই error কেন আসছে? Fix করার জন্য কী করতে হবে?"
"এই component optimize করুন performance এর জন্য"
"এই feature এর জন্য missing কোনো dependency আছে?"
```

---

# ✅ Success Criteria

## MVP Ready When:

- [ ] User can register and login
- [ ] User can create questions (MCQ, Short, Creative)
- [ ] User can save questions to question bank
- [ ] User can create question papers
- [ ] User can export papers as PDF
- [ ] User can manage settings
- [ ] App is deployed and accessible online

## Production Ready When:

- [ ] All auth flows working perfectly
- [ ] Data persisting to Supabase correctly
- [ ] PDF exports with Bengali font
- [ ] Responsive on mobile/tablet/desktop
- [ ] Error handling in all forms
- [ ] Loading states everywhere
- [ ] SEO optimized
- [ ] Performance optimized (< 2s load time)

---

**Ready to Start?** 🚀

Begin with Codex Prompt #1 and work through sequentially.

Good luck! আপনার সফলতা কামনা করছি! 🎉
