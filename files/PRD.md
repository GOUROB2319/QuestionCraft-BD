# QuestionCraft BD — Product Requirements Document (PRD)

**Version:** 1.0  
**Last Updated:** March 2026  
**Project Type:** AI-Powered Exam Question Paper Creation Platform  
**Target Market:** Bangladesh Education Sector  

---

## 📋 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Product Vision & Goals](#product-vision--goals)
3. [Target Users](#target-users)
4. [Core Features](#core-features)
5. [User Flows](#user-flows)
6. [Page-by-Page Breakdown](#page-by-page-breakdown)
7. [Technical Architecture](#technical-architecture)
8. [Database Schema](#database-schema)
9. [API Endpoints](#api-endpoints)
10. [Non-Functional Requirements](#non-functional-requirements)
11. [Timeline & Phases](#timeline--phases)

---

## 1. Executive Summary

**QuestionCraft BD** একটি AI-চালিত প্রশ্নপত্র তৈরির প্ল্যাটফর্ম যা বাংলাদেশী শিক্ষকদের জন্য বিশেষভাবে তৈরি। প্ল্যাটফর্মটি NCTB কারিকুলাম অনুসরণ করে এবং বাংলা ও ইংরেজি উভয় ভাষায় প্রশ্ন তৈরি করতে সক্ষম।

### সমস্যা
- শিক্ষকরা প্রশ্নপত্র তৈরিতে অনেক সময় ব্যয় করেন
- ম্যানুয়াল প্রক্রিয়া এবং inconsistent formatting
- NCTB কারিকুলাম অনুযায়ী প্রশ্ন তৈরি করা কঠিন
- প্রিন্ট-রেডি PDF তৈরি করা জটিল

### সমাধান
AI-powered platform যা:
- মিনিটেই প্রশ্নপত্র তৈরি করে
- NCTB সিলেবাস অনুসরণ করে
- বাংলা ও ইংরেজি সাপোর্ট করে
- Professional PDF export করে

---

## 2. Product Vision & Goals

### Vision
বাংলাদেশের প্রতিটি শিক্ষকের জন্য প্রশ্নপত্র তৈরির **go-to platform** হওয়া।

### Goals

**Phase 1 (Months 1-3):** MVP Launch
- ✅ User registration & authentication
- ✅ Basic question creation (MCQ, Short, Broad)
- ✅ Question bank management
- ✅ PDF export (print-ready)
- ✅ Bangla + English support

**Phase 2 (Months 3-6):** AI Integration
- 🤖 AI question generation (Claude/OpenAI API)
- 📚 NCTB curriculum-based questions
- 🎯 Difficulty level control
- 🔄 AI review & improvement

**Phase 3 (Months 6-12):** Scale & Monetization
- 🏫 Institution accounts (team management)
- 💳 Subscription system (Free/Pro/Institution)
- 📊 Analytics dashboard
- 🏛️ Government exam templates (BCS, PSC, HSC)

---

## 3. Target Users

### Primary Users
1. **স্কুল ও কলেজ শিক্ষক**
   - Age: 25-55
   - Tech literacy: Basic to Intermediate
   - Pain point: সময় সাশ্রয়

2. **বিশ্ববিদ্যালয় শিক্ষক**
   - Age: 30-60
   - Tech literacy: Intermediate to Advanced
   - Pain point: Structured assessment creation

### Secondary Users
3. **সরকারি পরীক্ষা সংস্থা**
   - BCS, PSC, JSC/SSC/HSC boards
   - Need: Official formatting standards

4. **কোচিং সেন্টার**
   - Need: Bulk question generation
   - Need: Mock test creation

---

## 4. Core Features

### 4.1 Authentication & User Management
- Email/Phone + Password registration
- Google OAuth login
- OTP verification (email/SMS)
- Password reset functionality
- User profile management

### 4.2 Question Creation
**Manual Creation:**
- MCQ (Multiple Choice Questions)
  - Question text
  - 4 options (A, B, C, D)
  - Correct answer marking
  - Marks allocation
  
- Short Questions
  - Question text
  - Marks allocation
  - Optional hints

- Broad/Creative Questions
  - Question stem/scenario
  - Sub-questions (ক, খ, গ, ঘ)
  - Marks breakdown

**Question Properties:**
- Subject selection
- Class/Grade level
- Chapter/Topic
- Difficulty (Easy/Medium/Hard)
- Language (Bangla/English/Both)

### 4.3 Question Bank Management
- Create personal question library
- Search & filter questions:
  - By subject
  - By topic
  - By difficulty
  - By question type
  - By date created
- Edit existing questions
- Delete questions
- Tag system for organization

### 4.4 Question Paper Builder
- Drag-and-drop interface
- Select questions from bank
- Arrange questions in sections
- Auto-numbering
- Marks distribution
- Time allocation
- Instructions section

### 4.5 PDF Export
**Templates:**
- School/College format
- University format
- Government exam format (BCS, PSC, Board)

**Customization:**
- Institution name
- Exam title
- Subject, Class, Time, Marks
- Header/Footer customization
- Bangla font support (SolaimanLipi/Noto Sans Bengali)

### 4.6 AI Features (Phase 2)
- Auto question generation from topic
- Difficulty-based generation
- NCTB curriculum alignment
- Question quality review
- Answer generation
- Explanation generation

---

## 5. User Flows

### 5.1 New User Onboarding
```
1. Land on homepage
2. Click "শুরু করুন" button
3. Registration page
   - Enter name, email, institution, password
   - Agree to terms
   - Submit
4. Email/OTP verification
5. Redirected to dashboard
6. Welcome tutorial (optional)
```

### 5.2 Create Question Paper (Manual)
```
1. Dashboard → "নতুন প্রশ্নপত্র তৈরি করুন"
2. Select questions from bank OR create new
3. Arrange in paper builder
4. Set metadata (title, subject, marks, time)
5. Preview
6. Export PDF or Save draft
```

### 5.3 AI Question Generation (Phase 2)
```
1. Dashboard → "AI দিয়ে তৈরি করুন"
2. Select:
   - Subject
   - Class
   - Chapter/Topic
   - Question type
   - Difficulty level
   - Number of questions
3. Generate
4. Review & edit generated questions
5. Add to question bank or paper
```

---

## 6. Page-by-Page Breakdown

### 6.1 Landing Page (Public)

**URL:** `/`

**Sections:**

**A. Navigation Bar**
- Logo (left): QuestionCraft BD icon + text
- Menu (center): হোম | ফিচার | বই সংগ্রহ | আমাদের সম্পর্কে
- Actions (right):
  - Language toggle (বাংলা/English)
  - Dark mode toggle
  - "লগইন" link
  - "শুরু করুন" button (primary CTA)

**B. Hero Section**
- Badge: "AI চালিত স্মার্ট প্রশ্নপত্র তৈরির প্ল্যাটফর্ম"
- Headline: "স্মার্ট প্রশ্নপত্র তৈরি করুন AI এর সাহায্যে"
- Subheading: Platform description (2-3 lines)
- CTA buttons:
  - Primary: "এখনই শুরু করুন" → /register
  - Secondary: "ডেমো দেখুন" → Demo video modal

**C. Stats Cards**
Grid of 4 cards:
- ৯০০০+ শিক্ষক ব্যবহারকারী
- ৫০০০+ প্রশ্নপত্র তৈরি
- ১০০+ বই সংগ্রহ
- ৯৮% সন্তুষ্ট ব্যবহারকারী

**D. How It Works Section**
Left: Browser mockup showing dashboard preview
Right: 3 steps
1. শ্রেণী ও বিষয় নির্বাচন
2. কাস্টমাইজেশন করুন
3. তৈরি ও ডাউনলোড

**E. Features Section**
Heading + 3 feature cards in grid:
1. AI চালিত প্রশ্ন তৈরি
   - ChatGPT/DeepSeek integration
   - MCQ, CQ, Short questions
   - Difficulty control
   
2. কাস্টম এডিটর
   - Rich text editing
   - Mathematical formula support
   - Image/diagram upload
   
3. বই সংগ্রহ
   - All Bangladesh textbooks PDFs
   - Chapter-wise question generation

**F. Footer**
4 columns:
1. Brand + description + social links
2. দ্রুত লিঙ্ক (Quick links)
3. যোগাযোগ (Contact info)
4. Newsletter subscription

Bottom: Copyright + Legal links

---

### 6.2 Registration Page

**URL:** `/auth/register`

**Layout:** Split-screen (50-50)

**Left Panel (Gradient background #10B981):**
- Logo + QuestionCraft BD text
- Heading: "শিক্ষার ভবিষ্যৎ এখন আপনার হাতে"
- Description
- 3 Feature highlights (icon + title + description):
  - AI-চালিত প্রশ্ন তৈরি
  - NCTB কারিকুলাম সাপোর্ট
  - সময় সাশ্রয় করুন
- User avatars + "৯০০০+ শিক্ষক ইতিমধ্যে আমাদের উপর আস্থা রেখেছেন"

**Right Panel (White background):**
- Heading: "নতুন অ্যাকাউন্ট তৈরি করুন"
- Subheading: "আপনার তথ্য দিয়ে রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন করুন"

**Form Fields:**
1. পুরো নাম (Full Name)
   - Text input with person icon
   - Placeholder: "যেমন: মো: কামরুল হাসান"

2. ইমেইল ঠিকানা (Email)
   - Email input with mail icon
   - Placeholder: "example@gmail.com"

3. প্রতিষ্ঠানের নাম (Institution Name)
   - Text input with school icon
   - Placeholder: "যেমন: ঢাকা কলেজ"

4. পাসওয়ার্ড (Password)
   - Password input with lock icon
   - Show/hide toggle
   - Placeholder: "কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড"

5. Terms checkbox
   - "আমি শর্তাবলী ও গোপনীয়তা নীতি মেনে নিচ্ছি"

**Submit Button:**
- "নিবন্ধন সম্পন্ন করুন" (person_add icon)
- Full width, emerald green

**Divider:** "অথবা"

**Social Login:**
- "গুগল দিয়ে সাইন আপ করুন" button (Google icon)

**Footer Text:**
- "ইতিমধ্যে অ্যাকাউন্ট আছে? লগইন করুন" → /auth/login

**Validation:**
- Client-side: React Hook Form
- Server-side: Supabase Auth
- Error messages in Bangla

**On Success:**
- Redirect to OTP verification page
- Send verification email/SMS

---

### 6.3 OTP Verification Page

**URL:** `/auth/verify`

**Layout:** Centered card

**Header:**
- Logo + User avatar (top right)

**Card Content:**
- Icon: Shield/verified user (large, emerald)
- Heading: "আপনার অ্যাকাউন্ট যাচাই করুন"
- Description: "আমরা আপনার ইমেইল/ফোনে একটি ৬ ডিজিটের কোড পাঠিয়েছি"

**OTP Input:**
- 6 individual boxes (large, centered)
- Auto-focus next box on digit entry
- Paste support

**Timer:**
- Clock icon + "০২:০০ মিনিট পর পুনরায় কোড পাঠান"
- Countdown from 2 minutes

**Actions:**
- "যাচাই করুন" button (primary, emerald)
- "কোড পাননি? পুনরায় কোড পাঠান" (disabled until timer expires)

**Security Footer:**
- Lock icon + "Secure Verification by QuestionCraft"

**On Success:**
- Redirect to dashboard
- Show welcome toast

---

### 6.4 Login Page

**URL:** `/auth/login`

**Layout:** Split-screen (50-50)

**Left Panel (Gradient background):**
- Logo + QuestionCraft BD
- Heading: "স্বাগতম ফিরে আসার জন্য"
- Description: Account benefits
- Glass card with new feature announcement
- Copyright text

**Right Panel (White):**
- Heading: "লগইন করুন"
- Subheading: "আপনার তথ্য প্রদান করে ড্যাশবোর্ডে প্রবেশ করুন"

**Form Fields:**
1. ইমেইল অথবা ফোন নম্বর
   - Text input with mail icon
   - Placeholder: "example@email.com"

2. পাসওয়ার্ড
   - Password input with lock icon
   - Show/hide toggle
   - "পাসওয়ার্ড ভুলে গেছেন?" link (top-right)

3. "আমাকে মনে রাখুন" checkbox

**Submit Button:**
- "লগইন করুন"
- Full width, emerald green

**Divider:** "অথবা অন্যান্য মাধ্যমে"

**Social Login:**
- Google button
- Facebook button (optional)

**Footer Text:**
- "আপনি কি নতুন? একাউন্ট তৈরি করুন" → /auth/register

**On Success:**
- Redirect to dashboard
- Store JWT token in localStorage/cookies

---

### 6.5 Dashboard Page

**URL:** `/dashboard`

**Layout:** Full-width with sidebar

**Top Navigation:**
- Logo + QuestionCraft BD (left)
- Search bar (center)
- Notifications icon
- User avatar + dropdown (right)

**Sidebar (Left, collapsible):**
- ড্যাশবোর্ড (active)
- প্রশ্ন তৈরি করুন
- প্রশ্ন ব্যাংক
- আমার প্রশ্নপত্র
- বই সংগ্রহ
- সেটিংস

**Main Content Area:**

**A. Welcome Section**
- "স্বাগতম, [User Name]!"
- Current date/time
- Quick action: "নতুন প্রশ্নপত্র তৈরি করুন" button

**B. Stats Overview (4 cards in grid)**
1. মোট প্রশ্ন তৈরি
   - Number + graph icon
   - "গত সপ্তাহে +১২" (growth indicator)

2. মোট প্রশ্নপত্র
   - Number + document icon

3. প্রশ্ন ব্যাংকে প্রশ্ন
   - Number + database icon

4. AI প্রশ্ন তৈরি
   - Number + sparkle icon
   - Badge: "Phase 2"

**C. Recent Activity**
- Table/List view
- Columns: প্রশ্নপত্রের নাম | বিষয় | তারিখ | স্ট্যাটাস | Actions
- Actions: View | Edit | Download PDF | Delete

**D. Quick Actions Panel**
Card with 3 options:
1. ম্যানুয়াল প্রশ্ন তৈরি করুন
2. AI দিয়ে তৈরি করুন (Phase 2)
3. পুরানো প্রশ্ন এডিট করুন

---

### 6.6 Question Creator Page

**URL:** `/questions/create`

**Layout:** Split view (Editor left, Preview right)

**Top Bar:**
- Breadcrumb: Dashboard > My Questions > Create New
- Save Draft button
- Generate PDF button
- Share button

**Left Sidebar (Vertical toolbar):**
- Mathematical formulas tool
- Image upload
- Chart/Graph tool
- Undo/Redo

**Editor Pane (Left, 60%):**

**Page Heading:**
- "Question Editor"
- "Create and structure your exam questions"

**Segmented Button:**
- MCQ (active)
- Creative
- Short Questions

**Question Blocks (vertical stack):**

**Question Block 1:**
- Header: "QUESTION 01" badge
- Right: Marks input + Difficulty dropdown (Easy/Medium/Hard)
- Main textarea: "Type your question here..." (Bangla support)
- Options grid (for MCQ):
  - 4 option inputs (A, B, C, D)
  - Radio select for correct answer
  - Option C selected with checkmark

**Question Block 2:**
- Same structure
- "Add Options" button
- "AI Suggest Options" button (Phase 2)

**Add Button:**
- "Add New Question Section" (dashed border, full width)

**Floating AI Buttons (on hover):**
- Auto-fix button
- AI assist button

---

**Preview Pane (Right, 40%):**

**Header:**
- "Live Paper Preview" label
- Zoom in/out buttons
- Print button

**Paper Sheet (A4 mockup):**
- Watermark: "QUESTIONCRAFT BD" (diagonal, faded)

**Official Header:**
- Institution name (editable)
- Exam title
- Subject | Time | Full Marks

**Instructions:**
- "[N.B. Answer all questions...]"

**Rendered Questions:**
1. Question 1 with options
2. Question 2 (empty answer line)
3. Creative question with sub-parts (ক, খ, গ, ঘ)

**Page Footer:**
- Page number
- "Generated via QuestionCraft BD"

---

**Bottom Status Bar:**
- Cloud sync indicator
- Character count
- Total questions
- Subject | Class | NCTB Syllabus
- Settings icon

---

### 6.7 Question Bank Page

**URL:** `/questions/bank`

**Top Section:**
- Page title: "প্রশ্ন ব্যাংক"
- Search bar (full-text search)
- Filter button
- "নতুন প্রশ্ন যোগ করুন" button

**Filter Panel (Collapsible):**
- Subject dropdown
- Topic dropdown
- Difficulty checkboxes
- Question type checkboxes
- Date range picker
- Clear filters button

**Questions List:**
- Card-based layout OR Table view toggle
- Each card:
  - Question preview (first 100 characters)
  - Metadata: Subject | Topic | Type | Difficulty | Marks
  - Date created
  - Actions: Edit | Delete | Add to Paper | Duplicate

**Pagination:**
- 20 questions per page
- Previous/Next buttons
- Page numbers

**Empty State:**
- Illustration
- "আপনার প্রশ্ন ব্যাংক খালি"
- "নতুন প্রশ্ন যোগ করুন" button

---

### 6.8 Terms & Privacy Page

**URL:** `/legal/terms`

**Layout:** Single column, centered

**Navigation:**
- Back to home link
- Jump to dashboard link

**Content Sections:**

1. **ব্যবহারের শর্তাবলী**
   - শিক্ষামূলক উদ্দেশ্যে ব্যবহার
   - মালিকানা নীতি
   - অ্যাকাউন্ট নিরাপত্তা দায়িত্ব

2. **তথ্য সংগ্রহ**
   - ব্যক্তিগত তথ্য (নাম, প্রতিষ্ঠান)
   - যোগাযোগ তথ্য (ইমেইল, ফোন)

3. **তথ্য সুরক্ষা**
   - এনক্রিপশন নীতি
   - তৃতীয় পক্ষের সাথে শেয়ার না করার প্রতিশ্রুতি

4. **AI ব্যবহারের নীতি**
   - AI প্রযুক্তির ব্যবহার
   - সতর্কতা: শিক্ষক দ্বারা যাচাই প্রয়োজন

**Footer:**
- Last updated date
- Contact email
- Copyright

---

### 6.9 MS Word Style Editor (Advanced Feature)

**URL:** `/editor/word`

**Layout:** Microsoft Word-inspired

**Top Navigation:**
- File menu + Document title
- Share button
- Export button
- User avatar

**Ribbon Toolbar (Tabs):**
- Home (active)
- Insert
- Layout
- AI Tools
- View

**Home Tab Tools:**
- Font selector (Hind Siliguri dropdown)
- Font size
- Bold, Italic, Underline buttons
- Text color
- Alignment tools
- Lists (bullet/numbered)
- Line spacing

**Special Elements:**
- Equation button
- Table button
- Image button
- Borders button

**Main Canvas:**
- A4 page preview with margins
- Live editable content area
- Institution header template
- Question numbering auto-managed

**AI Sidebar (Right):**
- "AI Assistant" header
- Quick actions grid:
  - Fix Grammar
  - Translate
  - Change Tone
  - Expand Questions
- AI suggestions card
- Chat input for AI
- "Generate Content" button

**Status Bar (Bottom):**
- Page count
- Word count
- Accessibility status
- Language selector
- Zoom controls
- Fullscreen toggle

---

## 7. Technical Architecture

### 7.1 Tech Stack

**Frontend:**
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + ShadCN UI
- State: Zustand
- Forms: React Hook Form
- PDF: Puppeteer / React-PDF

**Backend:**
- Database: Supabase (PostgreSQL)
- Auth: Supabase Auth
- Storage: Supabase Storage (for images/PDFs)
- API: Next.js API Routes

**AI Integration (Phase 2):**
- Claude API (Anthropic)
- OpenAI API (GPT-4)

**Hosting:**
- Frontend: Vercel
- Database: Supabase Cloud
- CDN: Vercel Edge Network

---

### 7.2 Folder Structure

```
questioncraft-bd/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── verify/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── questions/
│   │   │   ├── create/
│   │   │   └── bank/
│   │   ├── papers/
│   │   └── settings/
│   ├── legal/
│   ├── api/
│   │   ├── auth/
│   │   ├── questions/
│   │   └── papers/
│   └── page.tsx (Landing)
├── components/
│   ├── ui/ (ShadCN)
│   ├── questions/
│   ├── papers/
│   └── layout/
├── lib/
│   ├── supabase.ts
│   ├── types.ts
│   └── utils.ts
├── public/
└── styles/
```

---

## 8. Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  institution TEXT,
  role TEXT DEFAULT 'teacher', -- teacher, admin, institution
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Questions Table
```sql
CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT NOT NULL, -- mcq, short, broad
  subject TEXT NOT NULL,
  topic TEXT,
  class_level TEXT,
  difficulty TEXT, -- easy, medium, hard
  language TEXT, -- bangla, english, both
  content JSONB NOT NULL, -- stores question data
  marks INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Papers Table
```sql
CREATE TABLE papers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  class_level TEXT,
  exam_type TEXT, -- midterm, final, mock, etc.
  total_marks INTEGER,
  duration_minutes INTEGER,
  question_ids UUID[], -- array of question IDs
  metadata JSONB, -- institution name, date, etc.
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Question_Paper_Association (Many-to-Many)
```sql
CREATE TABLE question_paper_association (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
  paper_id UUID REFERENCES papers(id) ON DELETE CASCADE,
  order_index INTEGER,
  section TEXT, -- Section A, B, etc.
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 9. API Endpoints

### Authentication
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/verify-otp
POST /api/auth/logout
POST /api/auth/reset-password
GET  /api/auth/me
```

### Questions
```
GET    /api/questions          - List all questions (filtered)
POST   /api/questions          - Create new question
GET    /api/questions/:id      - Get single question
PUT    /api/questions/:id      - Update question
DELETE /api/questions/:id      - Delete question
GET    /api/questions/search   - Search questions
```

### Papers
```
GET    /api/papers             - List all papers
POST   /api/papers             - Create new paper
GET    /api/papers/:id         - Get single paper
PUT    /api/papers/:id         - Update paper
DELETE /api/papers/:id         - Delete paper
POST   /api/papers/:id/export  - Generate PDF
```

### AI (Phase 2)
```
POST   /api/ai/generate-questions  - Generate questions via AI
POST   /api/ai/review-question     - Review question quality
POST   /api/ai/generate-answer     - Generate answer/explanation
```

---

## 10. Non-Functional Requirements

### Performance
- Page load: < 2 seconds
- Time to Interactive: < 3 seconds
- PDF generation: < 5 seconds
- Database queries: < 500ms

### Security
- HTTPS only
- JWT authentication
- Row-level security (Supabase)
- Input sanitization
- CSRF protection

### Scalability
- Support 10,000 concurrent users
- 1M+ questions in database
- CDN for static assets

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- High contrast mode

### Localization
- Bengali (primary)
- English (secondary)
- RTL support (future)

---

## 11. Timeline & Phases

### Phase 1: Foundation (Weeks 1-3)
- [ ] Next.js project setup
- [ ] Supabase connection
- [ ] Authentication system
- [ ] Basic UI components
- [ ] Landing page
- [ ] Registration/Login pages

### Phase 2: Core Features (Weeks 4-8)
- [ ] Question creator interface
- [ ] Question bank management
- [ ] Paper builder (drag-drop)
- [ ] PDF export functionality
- [ ] Bangla + English support
- [ ] User dashboard

**Milestone:** MVP Launch (Week 8)

### Phase 3: AI Integration (Weeks 9-12)
- [ ] Claude/OpenAI API integration
- [ ] AI question generator
- [ ] Difficulty control
- [ ] NCTB curriculum data
- [ ] AI review system

**Milestone:** AI Features Live (Week 12)

### Phase 4: Scale (Months 4-6+)
- [ ] Institution accounts
- [ ] Subscription system (SSLCommerz/bKash)
- [ ] Analytics dashboard
- [ ] Government exam templates
- [ ] Mobile app (React Native)

---

## 12. Success Metrics

### User Acquisition
- 1,000 registered users (Month 3)
- 5,000 registered users (Month 6)
- 10,000 registered users (Year 1)

### Engagement
- 50% DAU/MAU ratio
- Avg 3 questions created per user per week
- 70% user retention (30 days)

### Revenue (Phase 4)
- 500 Pro subscribers
- 50 Institution accounts
- $5,000 MRR (Monthly Recurring Revenue)

---

## Appendix

### A. Competitors
- Existing: Manual tools (Word/Excel)
- International: Quizizz, Kahoot (not BD-focused)
- Gap: No AI-powered BD platform

### B. Risks & Mitigations
- **Risk:** Low AI accuracy for Bangla
  - **Mitigation:** Manual review system, user feedback loop
  
- **Risk:** Slow adoption by teachers
  - **Mitigation:** Free tier, training videos, WhatsApp support

### C. Future Features
- Mobile app
- Collaboration (multi-user editing)
- Question marketplace
- Student answer checking
- Analytics for student performance

---

**End of PRD**
