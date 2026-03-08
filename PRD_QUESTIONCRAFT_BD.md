# QuestionCraft BD - Product Requirements Document (PRD)

**Version:** 1.0  
**Last Updated:** March 8, 2026  
**Status:** Final Specification for Development  
**Platform:** Web Application (Desktop-First, Responsive)

---

## 📋 Executive Summary

### Product Name
**QuestionCraft BD**

### Tagline
**"স্মার্ট প্রশ্নপত্র, সহজ উপায়ে"**

### Vision Statement
বাংলাদেশের শিক্ষক ও শিক্ষার্থীদের জন্য একটি জনপ্রিয় ও সহজ শিক্ষা টুল তৈরি করা যেখানে প্রশ্নপত্র তৈরি, পরীক্ষা শিট, এবং শিক্ষা সম্পর্কিত যাবতীয় document সহজে তৈরি করা যাবে।

### Primary Problem
শিক্ষকদের প্রশ্নপত্র তৈরিতে অনেক সময় লাগে এবং manual কাজ করতে হয়।

### Solution
AI-চালিত একটি সম্পূর্ণ বিনামূল্যে platform যা Gemini AI ব্যবহার করে NCTB কারিকুলাম অনুযায়ী মিনিটে প্রশ্নপত্র তৈরি করতে পারে।

---

## 🎯 Target Audience

### Primary Users (সমান গুরুত্ব সহ):
1. **মাধ্যমিক স্কুলের শিক্ষক** (Class 6-10)
2. **উচ্চ মাধ্যমিক কলেজ শিক্ষক** (Class 11-12)
3. **প্রাইভেট টিউটর**
4. **কোচিং সেন্টার**
5. **মাদ্রাসা শিক্ষক**
6. **বিশ্ববিদ্যালয় প্রভাষক**

### User Demographics:
- **Age:** 25-60 years
- **Location:** বাংলাদেশ (সব অঞ্চল)
- **Primary Device:** Desktop/Laptop (মোবাইল support আছে)
- **Tech Literacy:** Basic to Intermediate
- **Primary Language:** বাংলা (English option available)

### Supported Subjects:
- পদার্থবিজ্ঞান (Physics)
- রসায়ন (Chemistry)
- গণিত (Mathematics)
- জীববিজ্ঞান (Biology)
- বাংলা
- ইংরেজি (English)
- ইসলাম শিক্ষা
- তথ্য ও যোগাযোগ প্রযুক্তি (ICT)
- **All other NCTB subjects**

---

## 🏗️ Technical Architecture

### Technology Stack

```
Frontend:
├── HTML5 (Semantic markup)
├── CSS3 (Modern styling)
├── Vanilla JavaScript (ES6+)
└── Tailwind CSS (via CDN)

AI Integration:
├── Google Gemini API (FREE tier)
│   ├── Question Generation
│   ├── Grammar Check
│   ├── Translation (Bengali ↔ English)
│   ├── Auto-tagging
│   └── Answer Key Generation

Storage Layer:
├── Google Drive API (User's personal storage)
│   ├── Questions (JSON files)
│   ├── Papers (PDF + JSON)
│   ├── Settings
│   └── Exports
└── Supabase (Community & shared data)
    ├── Public question marketplace
    ├── Shared questions database
    └── Real-time collaboration

Authentication:
└── Supabase Auth
    ├── Google OAuth
    ├── Microsoft OAuth
    └── Email/Password

Libraries:
├── jsPDF (PDF generation)
├── html2canvas (HTML to canvas)
├── Lucide Icons (UI icons)
├── Inter/Poppins fonts (English)
└── Hind Siliguri (Bengali)

Hosting & Deployment:
├── Netlify (Static hosting)
├── Custom domain (পরে)
└── HTTPS enforced

Error Tracking:
└── Sentry (Automatic error reporting)
```

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary: #10B981;        /* Emerald 500 */
--primary-dark: #059669;   /* Emerald 600 */
--primary-light: #D1FAE5;  /* Emerald 100 */

/* Secondary Colors */
--secondary: #FBBF24;      /* Amber 400 */
--secondary-dark: #F59E0B; /* Amber 500 */
--secondary-light: #FEF3C7;

/* Neutral Colors */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-500: #6B7280;
--gray-900: #111827;

/* Semantic Colors */
--success: #10B981;
--error: #EF4444;
--warning: #F59E0B;
--info: #3B82F6;
```

### Typography

```css
/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Font Family */
body {
  font-family: 'Hind Siliguri', sans-serif; /* Bengali */
}

.english-text {
  font-family: 'Inter', sans-serif; /* English */
}

/* Font Sizes */
h1 { font-size: 3rem; font-weight: 700; }      /* 48px */
h2 { font-size: 2.25rem; font-weight: 700; }   /* 36px */
h3 { font-size: 1.875rem; font-weight: 600; }  /* 30px */
h4 { font-size: 1.5rem; font-weight: 600; }    /* 24px */
body { font-size: 1rem; }                       /* 16px */
small { font-size: 0.875rem; }                  /* 14px */
```

### Design Style
- **Style:** Modern & Colorful (vibrant colors, subtle animations)
- **Icons:** Lucide Icons
- **Illustrations:** Minimalist style for empty states
- **Brand Personality:** Professional & Serious
- **Tone of Voice:** Formal (আপনি, আপনার)

---

## 📄 Pages & Features Specification

### 1. Landing Page (`index.html`)

**Purpose:** Marketing, showcase features, drive sign-ups

**Sections:**

**A. Hero Section**
- Badge: "AI চালিত স্মার্ট প্রশ্নপত্র তৈরির প্ল্যাটফর্ম"
- Main Heading: "স্মার্ট প্রশ্নপত্র তৈরি করুন AI এর সাহায্যে"
- Subheading: Brief description
- CTA Buttons:
  - Primary: "এখনই শুরু করুন" → /signup.html
  - Secondary: "ডেমো দেখুন" → Demo video/tour

**B. Statistics Cards (4 cards in grid)**
```
৯০০০+ শিক্ষক ব্যবহারকারী
৫০০০+ প্রশ্নপত্র তৈরি
১০০+ বই সংগ্রহ
৯৮% সন্তুষ্ট ব্যবহারকারী
```

**C. "কীভাবে কাজ করে" Section (3 Steps)**
1. শ্রেণী ও বিষয় নির্বাচন করুন
2. কাস্টমাইজেশন করুন (Question type, difficulty, etc.)
3. তৈরি ও ডাউনলোড করুন (PDF)

**D. Features Showcase**
- AI-চালিত প্রশ্ন তৈরি
- কাস্টম এডিটর
- বই সংগ্রহ (NCTB)
- সম্পূর্ণ বিনামূল্যে

**E. FAQ Section**
Common questions and answers

**F. Footer**
- Logo + Description
- Quick Links (হোম, ফিচার, বই সংগ্রহ, সাহায্য)
- যোগাযোগ (Email, Phone)
- Newsletter signup
- Social links
- Copyright notice

**Design Reference:** Provided HTML (document index 4)

---

### 2. Signup Page (`signup.html`)

**Purpose:** User registration

**Layout:** Split screen
- Left: Branding (gradient background, logo, features)
- Right: Signup form

**Form Fields:**
- পুরো নাম (Full Name) - Required
- ইমেইল ঠিকানা (Email) - Required
- প্রতিষ্ঠানের নাম (Institution Name) - Required
- পাসওয়ার্ড (Password) - Required, min 8 characters
- Password strength indicator
- Terms & Privacy checkbox - Required

**Social Signup Options:**
- "গুগল দিয়ে সাইন আপ করুন" (Google OAuth)
- "মাইক্রোসফট দিয়ে সাইন আপ করুন" (Microsoft OAuth)

**After Signup Flow:**
1. Email verification (optional)
2. Request Drive permissions
3. Create "QuestionCraft BD" folder in Drive
4. Redirect to onboarding

**Design Reference:** Provided HTML (document index 2)

---

### 3. Login Page (`login.html`)

**Purpose:** User authentication

**Layout:** Split screen (similar to signup)

**Form Fields:**
- ইমেইল অথবা ফোন নম্বর (Email or Phone)
- পাসওয়ার্ড (Password)
- "আমাকে মনে রাখুন" checkbox
- "পাসওয়ার্ড ভুলে গেছেন?" link

**Social Login:**
- Google OAuth
- Microsoft OAuth

**After Login:**
- Check if first-time login → Onboarding
- Else → Dashboard

**Design Reference:** Provided HTML (document index 3)

---

### 4. Onboarding Flow

**Purpose:** Guide new users through setup

**Step 1: Welcome Screen**
- Welcome message
- Platform overview (30-second explanation)
- "শুরু করুন" button

**Step 2: Profile Setup**
```javascript
{
  name: "From Google/Manual",
  email: "From Google/Manual",
  institution: "User input",
  phone: "User input (optional)",
  profile_photo: "From Google/Upload",
  classes_taught: ["6", "7", "8", ...] // Multi-select
}
```

**Step 3: Interactive Tutorial**
- Quick tour of dashboard (tooltips)
- How to create first question
- How to generate PDF
- "সম্পন্ন করুন" button → Dashboard

---

### 5. Dashboard (`/dashboard`)

**Purpose:** Main user hub

**Layout:**

**Top Navbar (Sticky)**
- Logo (left)
- Search bar (center) - Global search
- Notification icon
- Language toggle (বাংলা/English)
- Theme toggle (Light/Dark)
- User avatar dropdown:
  - Profile
  - Settings
  - Logout

**Left Sidebar (Fixed, 280px)**
```
Navigation:
├── Dashboard (active)
├── প্রশ্ন ব্যাংক (Question Bank)
├── আমার প্রশ্নপত্র (My Papers)
├── NCTB বই লাইব্রেরি (NCTB Books Library)
├── সেটিংস (Settings)
└── লগআউট (Logout)
```

**Main Content Area:**

**A. Stats Cards (4 cards, top row)**
```javascript
{
  total_papers: "মোট প্রশ্নপত্র",
  total_questions: "প্রশ্ন ব্যাংকে প্রশ্ন",
  papers_this_month: "এই মাসে তৈরি",
  storage_used: "Storage Used" // From Drive API
}
```

**B. Upcoming Exam Reminders (if any)**
Card showing upcoming exams with countdown

**C. Recent Papers Table**
Columns:
- Icon + Title
- Subject
- Class
- Date Created
- Status (Draft/Published)
- Actions (View, Edit, Download, Delete)

Pagination: 10 items per page

**D. Quick Action Buttons (Floating/Fixed bottom-right)**
- "নতুন প্রশ্নপত্র তৈরি করুন" (Primary)
- "প্রশ্ন ব্যাংক দেখুন"

---

### 6. Question Bank (`/question-bank`)

**Purpose:** Browse, manage all questions

**Layout:**

**Filter Panel (Top)**
```javascript
Filters:
├── Subject (Dropdown: পদার্থবিজ্ঞান, রসায়ন, গণিত, etc.)
├── Class (Multi-select: 6, 7, 8, 9, 10, 11, 12)
├── Type (MCQ, সৃজনশীল, সংক্ষিপ্ত, True/False, etc.)
├── Difficulty (সহজ, মাঝারি, কঠিন)
├── Source (AI Generated, Manual, Past Paper, Community)
└── Tags (Custom keywords)

Sort Options:
├── Date Created (Newest/Oldest)
├── Difficulty (Easy → Hard)
├── Marks (Low → High)
└── Alphabetical
```

**Search Bar**
- Full-text search across question content
- Search by tags
- Advanced search (filters + keywords)

**View Toggle**
- Grid View (3 columns)
- List View (detailed table)

**Question Cards (Grid View)**
Each card displays:
```javascript
{
  question_preview: "First 100 characters...",
  badges: {
    subject: "পদার্থবিজ্ঞান",
    class: "১০",
    type: "MCQ",
    difficulty: "মাঝারি"
  },
  metadata: {
    marks: "1",
    created_at: "21 Dec 2024"
  },
  actions: [
    "View (Eye icon)",
    "Edit (Pencil icon)",
    "Add to Paper (Plus icon)",
    "Delete (Trash icon)"
  ]
}
```

**Bulk Actions**
- Select multiple questions
- Delete selected
- Export selected (PDF/Excel)
- Move to folder (organize)

**Pagination**
- 20 items per page
- Page numbers + Previous/Next

---

### 7. Create Question Page (`/create-question`)

**Purpose:** Create/edit individual questions

**Layout:** Split View (60-40)

**Left Pane: Editor (60%)**

**Question Type Tabs (Top)**
```
├── MCQ (Multiple Choice)
├── সৃজনশীল (Creative)
├── সংক্ষিপ্ত (Short Answer)
├── True/False
├── Fill in the Blanks
└── Matching
```

**MCQ Editor Form:**
```javascript
{
  question_text: {
    label: "প্রশ্ন",
    type: "textarea",
    rich_text: true, // Support for bold, italic, etc.
    bengali_support: true,
    image_upload: true
  },
  options: {
    count: "flexible", // 3, 4, or 5 options
    format: {
      bengali: "ক, খ, গ, ঘ",
      english: "A, B, C, D"
    },
    fields: [
      "Option ক/A (textarea)",
      "Option খ/B (textarea)",
      "Option গ/C (textarea)",
      "Option ঘ/D (textarea)"
    ]
  },
  correct_answer: {
    type: "radio",
    options: "Same as option count"
  },
  metadata: {
    subject: "Dropdown (required)",
    class: "Dropdown (required)",
    chapter: "Dropdown/Text (optional)",
    topic: "Text (optional)",
    difficulty: "Dropdown (সহজ/মাঝারি/কঠিন)",
    marks: "Number input (default: 1)",
    tags: "Tag input (comma-separated)"
  },
  explanation: {
    label: "ব্যাখ্যা (Optional)",
    type: "textarea",
    rich_text: true
  }
}
```

**সৃজনশীল Question Structure:**

**Option 1: NCTB Standard**
```javascript
{
  stimulus: "উদ্দীপক (Stimulus passage/scenario)",
  sub_questions: [
    {
      label: "ক) জ্ঞানমূলক",
      marks: 1,
      question: "Text"
    },
    {
      label: "খ) অনুধাবনমূলক",
      marks: 2,
      question: "Text"
    },
    {
      label: "গ) প্রয়োগমূলক",
      marks: 3,
      question: "Text"
    },
    {
      label: "ঘ) উচ্চতর দক্ষতামূলক",
      marks: 4,
      question: "Text"
    }
  ],
  total_marks: 10
}
```

**Option 2: Custom Structure**
- User can add/remove sub-questions
- Custom marks per sub-question
- Flexible labels

**AI Assistant Panel (Collapsible, bottom of editor)**
```javascript
AI Actions:
├── Fix Grammar (ব্যাকরণ ঠিক করুন)
├── Translate (অনুবাদ করুন: Bengali ↔ English)
├── Auto-tag (স্বয়ংক্রিয় ট্যাগ)
├── Generate Similar (একই ধরনের প্রশ্ন তৈরি করুন)
└── Generate Answer Key (MCQ only)
```

**Right Pane: Live Preview (40%)**
- Real-time A4 paper preview
- Shows exactly how question will appear in PDF
- Zoom controls (50%, 75%, 100%, 125%, 150%)
- "Preview in Full Screen" button

**Action Buttons (Bottom)**
- "খসড়া সংরক্ষণ করুন" (Save as Draft) - Gray button
- "প্রশ্ন ব্যাংকে যোগ করুন" (Add to Question Bank) - Primary button

**Save Flow:**
```javascript
// Save to Google Drive
const questionData = {
  id: `q_${timestamp}`,
  type: "mcq",
  question: "...",
  options: [...],
  correct_answer: 0,
  metadata: {
    subject: "...",
    class: "...",
    chapter: "...",
    topic: "...",
    difficulty: "...",
    marks: 1,
    tags: [...],
    source: "manual",
    created_by: user.email,
    created_at: "ISO timestamp",
    updated_at: "ISO timestamp",
    version: 1
  }
};

// Save to Drive
await saveFileToDrive(
  `question_${questionData.id}.json`,
  questionData,
  questionsFolder
);
```

---

### 8. Create Paper Page (`/create-paper`)

**Purpose:** Assemble questions into complete question paper

**Workflow Tabs:**

**Tab 1: Paper Details**
```javascript
{
  title: "পদার্থবিজ্ঞান - মধ্যবর্ষীয় পরীক্ষা ২০২৪",
  subject: "Dropdown (required)",
  class: "Dropdown (required)",
  exam_type: "Dropdown (Monthly/Midterm/Final/Quiz)",
  institution: {
    name: "Auto from profile (editable)",
    address: "Optional",
    logo: "Upload (optional)"
  },
  exam_info: {
    duration: "Number + Unit (90 minutes)",
    total_marks: "Auto-calculated from questions",
    date: "Date picker (optional)",
    time: "Time picker (optional)"
  },
  instructions: {
    text: "Textarea (Default instructions provided)",
    editable: true
  }
}
```

**Tab 2: Add Questions**

**Left Panel: Question Browser**
- Search/filter questions (same as Question Bank)
- Checkbox selection
- "Add Selected" button

**Right Panel: Selected Questions**
- Drag-and-drop reordering
- Section divisions:
  ```javascript
  Sections:
  ├── MCQ Section (auto-grouped by type)
  ├── সৃজনশীল Section
  ├── সংক্ষিপ্ত Section
  └── Custom Sections (user can create)
  ```
- Each question shows:
  - Question preview
  - Marks
  - Move up/down buttons
  - Remove button
- Total marks counter (updates dynamically)

**Tab 3: Paper Settings**

**PDF Customization:**
```javascript
{
  paper_size: "Dropdown (A4/Legal/Letter)",
  layout: "Single Column / Two Column",
  font: {
    bengali: "User choose (Kalpurush/SolaimanLipi/Hind Siliguri)",
    english: "Inter",
    size: "Dropdown (10pt/11pt/12pt)"
  },
  margins: {
    top: "Number input (default: 25mm)",
    bottom: "Number input (default: 25mm)",
    left: "Number input (default: 20mm)",
    right: "Number input (default: 20mm)"
  },
  header: {
    include: "Checkbox (default: true)",
    show_logo: "Checkbox",
    show_institution: "Checkbox"
  },
  watermark: {
    include: "Checkbox (default: true)",
    text: "QuestionCraft BD (editable)",
    opacity: "Slider (10-50%)"
  },
  answer_key: {
    include: "Checkbox (MCQ only)",
    position: "Dropdown (Separate Page/Same Page/Separate PDF)"
  },
  color_scheme: "Dropdown (Black & White / Color)",
  page_numbers: {
    include: "Checkbox (default: true)",
    format: "Dropdown (Page 1 of 5 / 1/5 / 1)"
  },
  signature_space: {
    include: "Checkbox",
    label: "শিক্ষকের স্বাক্ষর (editable)"
  }
}
```

**Tab 4: Preview & Generate**

**Live Preview**
- Full paper preview with all formatting
- Scroll through pages
- Download sample (watermarked)

**Generate Actions:**
- "খসড়া সংরক্ষণ করুন" (Save Draft to Drive)
- "PDF ডাউনলোড করুন" (Generate & Download PDF)
- "প্রশ্নপত্র শেয়ার করুন" (Share with colleagues)

**PDF Generation Flow:**
```javascript
// Using jsPDF
async function generatePDF(paperData, settings) {
  const doc = new jsPDF('p', 'mm', settings.paper_size);
  
  // Add Bengali font
  doc.addFont('Kalpurush.ttf', 'Kalpurush', 'normal');
  doc.setFont('Kalpurush');
  
  // Header
  if (settings.header.include) {
    if (settings.header.show_logo && paperData.institution.logo) {
      doc.addImage(logo, 'PNG', 20, 10, 30, 30);
    }
    doc.setFontSize(16);
    doc.text(paperData.institution.name, 105, 20, { align: 'center' });
  }
  
  // Paper title
  doc.setFontSize(14);
  doc.text(paperData.title, 105, 35, { align: 'center' });
  
  // Exam info
  doc.setFontSize(10);
  doc.text(`বিষয়: ${paperData.subject}`, 20, 50);
  doc.text(`শ্রেণী: ${paperData.class}`, 20, 55);
  doc.text(`সময়: ${paperData.duration}`, 150, 50);
  doc.text(`পূর্ণমান: ${paperData.total_marks}`, 150, 55);
  
  // Divider line
  doc.line(20, 60, 190, 60);
  
  // Instructions
  doc.setFontSize(9);
  doc.text(paperData.instructions, 20, 70, { maxWidth: 170 });
  
  // Questions (iterate through sections)
  let yPosition = 85;
  paperData.sections.forEach(section => {
    // Section header
    doc.setFontSize(12);
    doc.text(section.name, 20, yPosition);
    yPosition += 8;
    
    // Section questions
    section.questions.forEach((q, index) => {
      // Question number
      doc.setFontSize(11);
      doc.text(`${index + 1}. ${q.question}`, 20, yPosition, { maxWidth: 170 });
      yPosition += 10;
      
      // Options (if MCQ)
      if (q.type === 'mcq') {
        q.options.forEach((opt, i) => {
          const label = String.fromCharCode(2453 + i); // ক, খ, গ, ঘ
          doc.text(`   ${label}) ${opt}`, 25, yPosition, { maxWidth: 165 });
          yPosition += 7;
        });
      }
      
      yPosition += 5;
      
      // Page break if needed
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
    });
  });
  
  // Watermark (all pages)
  if (settings.watermark.include) {
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setTextColor(200, 200, 200);
      doc.setFontSize(50);
      doc.text(settings.watermark.text, 105, 150, {
        align: 'center',
        angle: 45,
        opacity: settings.watermark.opacity / 100
      });
      doc.setTextColor(0, 0, 0);
    }
  }
  
  // Answer key (if included)
  if (settings.answer_key.include) {
    if (settings.answer_key.position === 'separate_page') {
      doc.addPage();
      doc.setFontSize(14);
      doc.text('Answer Key', 105, 20, { align: 'center' });
      // Add answers...
    }
  }
  
  // Save to Drive
  const pdfBlob = doc.output('blob');
  await uploadPDFToDrive(pdfBlob, paperData.title);
  
  // Also download locally
  doc.save(`${paperData.title}.pdf`);
}
```

---

### 9. My Papers Page (`/my-papers`)

**Purpose:** Manage all created question papers

**Filter Tabs (Top)**
```
├── All Papers
├── Published
├── Drafts
└── Archived
```

**Papers Table**

Columns:
- Icon + Title
- Subject
- Class
- Date Created
- Status (Badge: Draft/Published/Archived)
- Actions

Actions Dropdown:
```javascript
[
  "দেখুন (View)",
  "এডিট করুন (Edit)",
  "ডাউনলোড PDF",
  "শেয়ার করুন (Share)",
  "Duplicate",
  "আর্কাইভ (Archive)",
  "মুছুন (Delete)"
]
```

**Share Paper Modal:**
```javascript
{
  share_type: "Radio (Link/Email/Specific Teachers)",
  link: {
    generate: "Create shareable link",
    permissions: "Dropdown (View Only/Can Edit)",
    expiry: "Optional (24 hours/7 days/30 days/Never)"
  },
  email: {
    recipients: "Email input (comma-separated)",
    message: "Textarea (optional)"
  },
  specific_teachers: {
    search: "Search by name/email",
    select: "Multi-select from same institution"
  }
}
```

---

### 10. NCTB Books Library (`/nctb-books`)

**Purpose:** Upload NCTB textbooks and generate questions from them

**Layout:**

**Upload Section (Card at top)**
```javascript
{
  book_name: "Text input (e.g., পদার্থবিজ্ঞান ১ম পত্র)",
  subject: "Dropdown",
  class: "Dropdown (6-12)",
  file_upload: {
    type: "PDF",
    max_size: "50MB",
    drag_drop: true
  }
}
```

**Upload Flow:**
```javascript
async function uploadTextbook(file, metadata) {
  showLoading('বই আপলোড হচ্ছে...');
  
  // 1. Upload to Drive
  const fileId = await uploadPDFToDrive(file, metadata.book_name);
  
  // 2. Extract text using Gemini Vision API
  showLoading('PDF থেকে টেক্সট extract হচ্ছে...');
  const pdfText = await extractTextWithGemini(fileId);
  
  // 3. Detect chapters using Gemini
  showLoading('অধ্যায় detect হচ্ছে...');
  const chapters = await detectChaptersWithGemini(pdfText);
  
  // 4. Save book metadata
  const bookData = {
    id: `book_${timestamp}`,
    name: metadata.book_name,
    subject: metadata.subject,
    class: metadata.class,
    file_id: fileId,
    chapters: chapters,
    uploaded_at: timestamp,
    total_questions_generated: 0
  };
  
  await saveBookMetadata(bookData);
  
  hideLoading();
  showSuccess('বই সফলভাবে আপলোড হয়েছে!');
  showChapterSelectionModal(bookData);
}
```

**Books Grid (Display uploaded books)**

Each book card shows:
```javascript
{
  cover: "Auto-generated thumbnail from PDF",
  title: "পদার্থবিজ্ঞান ১ম পত্র",
  metadata: {
    class: "১১",
    chapters: "১২টি অধ্যায়"
  },
  stats: {
    questions_generated: "240টি প্রশ্ন",
    completion: "100%"
  },
  actions: [
    "অধ্যায় দেখুন (View Chapters)",
    "প্রশ্ন তৈরি করুন (Generate Questions)",
    "মুছুন (Delete)"
  ]
}
```

**Chapter Selection Modal (After upload)**

```javascript
{
  book_title: "Display book name",
  settings: {
    questions_per_chapter: {
      type: "number",
      default: 20,
      min: 5,
      max: 50
    },
    difficulty_mix: {
      type: "dropdown",
      options: [
        "সব ধরনের (30% সহজ, 50% মাঝারি, 20% কঠিন)",
        "বেশিরভাগ সহজ",
        "বেশিরভাগ মাঝারি",
        "বেশিরভাগ কঠিন"
      ]
    }
  },
  chapters: {
    list: [
      {
        number: 1,
        title: "ভৌত জগৎ ও পরিমাপ",
        topics: ["টপিক ১", "টপিক ২"],
        selected: true, // Checkbox
        estimated_questions: 20
      }
      // ... more chapters
    ],
    select_all: "Checkbox"
  },
  summary: {
    selected_chapters: "Count",
    total_questions: "Sum of estimated questions"
  },
  action: "প্রশ্ন তৈরি শুরু করুন (Start Generation)"
}
```

**Question Generation Progress Modal:**
```javascript
{
  status: "প্রশ্ন তৈরি হচ্ছে...",
  progress: {
    bar: "Percentage (0-100%)",
    text: "অধ্যায় 5/12 সম্পন্ন... মোট 100টি প্রশ্ন তৈরি হয়েছে"
  },
  current_task: "অধ্যায় 6 থেকে প্রশ্ন তৈরি হচ্ছে...",
  estimated_time: "~5 মিনিট বাকি"
}
```

**Generation Logic:**
```javascript
async function generateQuestionsFromBook(bookData, selectedChapters, settings) {
  const totalChapters = selectedChapters.length;
  let completedChapters = 0;
  let totalQuestionsGenerated = 0;
  
  for (const chapterNum of selectedChapters) {
    updateProgress(completedChapters, totalChapters, totalQuestionsGenerated);
    
    // Extract chapter text
    const chapterText = extractChapterText(bookData.text, chapterNum);
    
    // Generate questions using Gemini
    const questions = await generateQuestionsWithGemini({
      chapter_text: chapterText,
      count: settings.questions_per_chapter,
      difficulty_mix: settings.difficulty_mix,
      subject: bookData.subject,
      class: bookData.class
    });
    
    // Save each question to Drive
    for (const q of questions) {
      await saveQuestion({
        ...q,
        source: 'ai_nctb_book',
        book_id: bookData.id,
        book_name: bookData.name,
        chapter: chapterNum
      });
    }
    
    totalQuestionsGenerated += questions.length;
    completedChapters++;
    
    // Wait 2 seconds (rate limiting)
    await sleep(2000);
  }
  
  showSuccess(`সফল! মোট ${totalQuestionsGenerated}টি প্রশ্ন তৈরি হয়েছে!`);
}
```

---

### 11. Settings Page (`/settings`)

**Purpose:** User preferences and account management

**Tabs:**

**Tab 1: Profile Settings**
```javascript
{
  profile_photo: "Upload/Change",
  name: "Text input (editable)",
  email: "Read-only (from auth)",
  institution: "Text input",
  phone: "Text input (optional)",
  classes_taught: "Multi-select (6-12)",
  subjects: "Multi-select (all NCTB subjects)"
}
```

**Tab 2: PDF Default Settings**
```javascript
// Same as "Paper Settings" in Create Paper
// These become default values for new papers
{
  default_paper_size: "A4",
  default_font: "Kalpurush",
  default_font_size: "11pt",
  default_layout: "Single Column",
  always_include_header: true,
  always_include_watermark: true,
  default_answer_key_position: "Separate Page"
}
```

**Tab 3: Language & Theme**
```javascript
{
  ui_language: {
    type: "dropdown",
    options: ["বাংলা", "English"],
    current: "বাংলা"
  },
  theme: {
    type: "toggle",
    options: ["Light Mode", "Dark Mode"],
    current: "Light Mode"
  },
  date_format: {
    type: "dropdown",
    options: [
      "21 December, 2024 (English)",
      "২১ ডিসেম্বর, ২০২৪ (Bangla)"
    ]
  },
  number_format: {
    type: "dropdown",
    options: [
      "1, 2, 3 (English)",
      "১, ২, ৩ (Bangla)"
    ]
  }
}
```

**Tab 4: Storage Info**
```javascript
{
  google_drive: {
    total: "15 GB",
    used: "Calculate from Drive API",
    breakdown: {
      questioncraft_files: "X MB",
      other_files: "(15GB - used)"
    },
    visual: "Progress bar"
  },
  onedrive: {
    // Same as Google Drive if connected
    status: "Not Connected / Connected"
  }
}
```

**Tab 5: Account Management**
```javascript
{
  connected_accounts: {
    google: "Display email, Disconnect button",
    microsoft: "Display email if connected, Connect button"
  },
  change_password: {
    current_password: "Password input",
    new_password: "Password input",
    confirm_password: "Password input",
    button: "পাসওয়ার্ড পরিবর্তন করুন"
  },
  export_data: {
    description: "Download all your data",
    format: "ZIP file (JSON + PDFs)",
    button: "সব ডেটা ডাউনলোড করুন"
  },
  delete_account: {
    warning: "This action cannot be undone",
    confirmation: "Type DELETE to confirm",
    button: "অ্যাকাউন্ট ডিলিট করুন (Red, danger)"
  }
}
```

**Tab 6: API Keys (Advanced)**
```javascript
{
  gemini_api_key: {
    label: "Gemini API Key",
    value: "Masked (AIza...****)",
    button: "Change Key",
    note: "Platform provides default key, but you can use your own"
  }
}
```

---

## 🤖 AI Features (Gemini Integration)

### Gemini API Configuration

```javascript
const GEMINI_CONFIG = {
  api_key: 'Your_Free_Gemini_API_Key',
  model: 'gemini-1.5-flash', // Fast & free
  base_url: 'https://generativelanguage.googleapis.com/v1beta',
  rate_limits: {
    requests_per_minute: 60,
    requests_per_day: 1500
  }
};
```

### 1. Question Generation

**Input Parameters:**
```javascript
{
  topic: "String (required) - e.g., নিউটনের সূত্র",
  chapter: "String (optional)",
  count: "Number (required) - default: 20",
  difficulty_level: "Enum (optional) - সহজ/মাঝারি/কঠিন",
  question_type_mix: {
    mcq: "40%",
    creative: "40%",
    short: "20%"
  },
  class_level: "Number (optional) - 6-12",
  custom_instructions: "String (optional)"
}
```

**Gemini Prompt Template:**
```javascript
const prompt = `
বাংলাদেশের NCTB কারিকুলাম অনুযায়ী ${params.count}টি প্রশ্ন তৈরি করুন।

বিষয়: ${params.subject}
শ্রেণী: ${params.class}
অধ্যায়: ${params.chapter}
টপিক: ${params.topic}

Requirements:
- মোট ${params.count}টি প্রশ্ন
- Question types: ${params.question_type_mix}
- Difficulty: ${getDifficultyPrompt(params.difficulty_level)}
- সব প্রশ্ন বাংলায়
- NCTB curriculum অনুযায়ী
- প্রতিটি প্রশ্নে ব্যাখ্যা যোগ করুন

JSON format এ return করুন (কোনো markdown নয়):
{
  "questions": [
    {
      "type": "mcq",
      "question": "প্রশ্ন টেক্সট",
      "options": ["ক", "খ", "গ", "ঘ"],
      "correct_answer": 0,
      "explanation": "ব্যাখ্যা",
      "difficulty": "medium",
      "topic": "টপিক নাম",
      "marks": 1
    }
  ]
}
`;

async function generateQuestionsWithGemini(params) {
  const response = await fetch(
    `${GEMINI_CONFIG.base_url}/models/${GEMINI_CONFIG.model}:generateContent?key=${GEMINI_CONFIG.api_key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 8000
        }
      })
    }
  );
  
  const data = await response.json();
  const text = data.candidates[0].content.parts[0].text;
  
  // Extract JSON
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Invalid response');
  
  const result = JSON.parse(jsonMatch[0]);
  return result.questions;
}
```

### 2. Grammar Check

```javascript
async function fixGrammarWithGemini(text) {
  const prompt = `এই বাংলা টেক্সটের grammar এবং spelling ঠিক করুন:

"${text}"

শুধু corrected text return করুন, অন্য কিছু নয়।`;

  const response = await fetch(
    `${GEMINI_CONFIG.base_url}/models/${GEMINI_CONFIG.model}:generateContent?key=${GEMINI_CONFIG.api_key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );
  
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}
```

### 3. Translation

```javascript
async function translateWithGemini(text, targetLang) {
  const langMap = { bn: 'Bengali', en: 'English' };
  const prompt = `Translate this text to ${langMap[targetLang]}:

"${text}"

Return only the translation.`;

  // Same API call structure as above
  // ...
}
```

### 4. Auto-tagging

```javascript
async function autoTagWithGemini(questionText) {
  const prompt = `এই প্রশ্ন থেকে relevant tags identify করুন:

"${questionText}"

Return comma-separated tags in Bengali, max 5 tags.`;

  // API call...
  // Returns: "নিউটনের সূত্র, বল, ভর, গতিবিদ্যা"
}
```

### 5. Answer Key Generation (MCQ)

```javascript
async function generateAnswerKeyWithGemini(questions) {
  // For MCQs, this is automatic (just read correct_answer field)
  // But AI can also generate explanations for why other options are wrong
  
  const prompt = `এই MCQ প্রশ্নগুলোর জন্য detailed answer key তৈরি করুন:

${JSON.stringify(questions, null, 2)}

For each question, explain:
- সঠিক উত্তর কেন সঠিক
- ভুল উত্তরগুলো কেন ভুল

Return JSON format.`;

  // API call...
}
```

---

## 💾 Data Storage Architecture

### Google Drive Storage

**Folder Structure:**
```
📁 QuestionCraft BD/          (Created on first login)
├── 📁 Questions/             (Individual question files)
│   ├── 📄 question_001.json
│   ├── 📄 question_002.json
│   └── 📄 ...
│
├── 📁 Papers/                (Question papers)
│   ├── 📄 Physics_Midterm_2024.pdf
│   ├── 📄 Physics_Midterm_2024_data.json
│   └── 📄 ...
│
├── 📁 NCTB Books/           (Uploaded textbooks)
│   ├── 📄 Physics_11_Part1.pdf
│   ├── 📄 Physics_11_Part1_metadata.json
│   └── 📄 ...
│
├── 📁 Settings/             (User preferences)
│   └── 📄 user_preferences.json
│
└── 📁 Exports/              (Exported data)
    └── 📄 exported_data_2024_03_08.zip
```

**File Schemas:**

**Question File (question_XXX.json):**
```javascript
{
  "id": "q_1709876543210",
  "type": "mcq", // or "creative", "short", "true_false", etc.
  "question": "নিচের কোনটি নিউটনের প্রথম সূত্র?",
  "options": [
    "বল = ভর × ত্বরণ",
    "স্থির বস্তু স্থিরই থাকবে যতক্ষণ না বাইরে থেকে বল প্রয়োগ করা হয়",
    "প্রত্যেক ক্রিয়ারই সমান ও বিপরীত প্রতিক্রিয়া আছে",
    "কোনোটিই নয়"
  ],
  "correct_answer": 1,
  "explanation": "নিউটনের প্রথম সূত্র জড়তার সূত্র নামে পরিচিত...",
  "metadata": {
    "subject": "পদার্থবিজ্ঞান",
    "class": "9",
    "chapter": "অধ্যায় ৩: গতিবিদ্যা",
    "topic": "নিউটনের সূত্র",
    "difficulty": "medium",
    "marks": 1,
    "tags": ["নিউটনের সূত্র", "জড়তা", "বল", "গতিবিদ্যা"],
    "source": "ai_generated", // or "manual", "past_paper", "community"
    "source_details": {
      "ai_model": "gemini-1.5-flash",
      "generated_at": "2024-03-08T10:30:00Z"
    },
    "created_by": "user@example.com",
    "created_at": "2024-03-08T10:30:00Z",
    "updated_at": "2024-03-08T11:00:00Z",
    "version": 1
  },
  "image": null, // or base64/URL if image attached
  "status": "published" // or "draft"
}
```

**Paper File (Paper_Name_data.json):**
```javascript
{
  "id": "paper_1709876543210",
  "title": "পদার্থবিজ্ঞান ১ম পত্র - মধ্যবর্ষীয় পরীক্ষা",
  "subject": "পদার্থবিজ্ঞান",
  "class": "11",
  "exam_type": "midterm",
  "institution": {
    "name": "ঢাকা কলেজ",
    "address": "ঢাকা, বাংলাদেশ",
    "logo": "data:image/png;base64,..."
  },
  "exam_info": {
    "duration_minutes": 90,
    "total_marks": 50,
    "date": "2024-04-15",
    "time": "10:00 AM"
  },
  "instructions": "১. সব প্রশ্নের উত্তর দিতে হবে...",
  "sections": [
    {
      "name": "MCQ Section",
      "marks": 20,
      "question_ids": ["q_001", "q_002", "q_003", ...]
    },
    {
      "name": "সৃজনশীল Section",
      "marks": 30,
      "question_ids": ["q_020", "q_021", "q_022"]
    }
  ],
  "settings": {
    "paper_size": "A4",
    "layout": "single_column",
    "font": {
      "bengali": "Kalpurush",
      "size": "11pt"
    },
    "header": {
      "include": true,
      "show_logo": true
    },
    "watermark": {
      "include": true,
      "text": "QuestionCraft BD",
      "opacity": 0.2
    },
    "answer_key": {
      "include": true,
      "position": "separate_page"
    }
  },
  "pdf_url": "drive://file_id_of_pdf",
  "created_at": "2024-03-08T10:30:00Z",
  "updated_at": "2024-03-08T11:00:00Z",
  "status": "published", // or "draft", "archived"
  "created_by": "user@example.com",
  "shared_with": ["teacher2@example.com", "teacher3@example.com"],
  "version": 1
}
```

**User Preferences (user_preferences.json):**
```javascript
{
  "user_id": "google_user_id_here",
  "profile": {
    "name": "মো: কামরুল হাসান",
    "email": "kamrul@example.com",
    "institution": "ঢাকা কলেজ",
    "phone": "+8801XXXXXXXXX",
    "profile_photo": "data:image/jpeg;base64,...",
    "classes_taught": ["9", "10", "11", "12"],
    "subjects": ["পদার্থবিজ্ঞান", "রসায়ন"]
  },
  "preferences": {
    "ui_language": "bn",
    "theme": "light",
    "date_format": "en",
    "number_format": "en",
    "pdf_defaults": {
      "paper_size": "A4",
      "font": "Kalpurush",
      "font_size": "11pt",
      "layout": "single_column",
      "include_header": true,
      "include_watermark": true,
      "answer_key_position": "separate_page"
    }
  },
  "stats": {
    "total_questions_created": 150,
    "total_papers_created": 25,
    "ai_questions_generated": 120,
    "manual_questions_added": 30,
    "last_active": "2024-03-08T15:30:00Z"
  },
  "gamification": {
    "points": 1250,
    "level": 5,
    "badges": [
      {
        "id": "first_question",
        "name": "First Question Created",
        "earned_at": "2024-01-15T10:00:00Z"
      },
      {
        "id": "ai_master",
        "name": "AI Master (100+ AI questions)",
        "earned_at": "2024-02-20T14:30:00Z"
      }
    ]
  }
}
```

### Supabase Database Schema

**Purpose:** Community features, shared questions, collaboration

**Tables:**

**1. users (managed by Supabase Auth)**
```sql
-- Automatically created by Supabase Auth
```

**2. community_questions**
```sql
CREATE TABLE community_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  question_data JSONB NOT NULL, -- Same structure as Drive question
  subject TEXT NOT NULL,
  class TEXT NOT NULL,
  type TEXT NOT NULL,
  difficulty TEXT,
  is_public BOOLEAN DEFAULT false,
  downloads_count INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  rating_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_community_subject ON community_questions(subject);
CREATE INDEX idx_community_class ON community_questions(class);
CREATE INDEX idx_community_type ON community_questions(type);
CREATE INDEX idx_community_public ON community_questions(is_public);
```

**3. shared_papers**
```sql
CREATE TABLE shared_papers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES auth.users(id),
  paper_id TEXT NOT NULL, -- Corresponds to Drive file
  shared_with JSONB, -- Array of user emails/IDs
  permissions TEXT DEFAULT 'view', -- 'view' or 'edit'
  link_sharing BOOLEAN DEFAULT false,
  link_token TEXT UNIQUE,
  link_expiry TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_shared_owner ON shared_papers(owner_id);
CREATE INDEX idx_shared_link ON shared_papers(link_token);
```

**4. collaboration_sessions (Real-time)**
```sql
CREATE TABLE collaboration_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  paper_id TEXT NOT NULL,
  participants JSONB, -- Array of user IDs currently editing
  current_state JSONB, -- Current paper state
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**5. gamification_achievements**
```sql
CREATE TABLE gamification_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  achievement_type TEXT NOT NULL,
  points INTEGER DEFAULT 0,
  badge_id TEXT,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_achievements_user ON gamification_achievements(user_id);
```

**6. platform_statistics**
```sql
CREATE TABLE platform_statistics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stat_type TEXT NOT NULL, -- 'total_users', 'total_questions', etc.
  value INTEGER NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 🔐 Authentication & Authorization

### Google OAuth Flow (via Supabase)

```javascript
// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Google Sign In
async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      scopes: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile',
      redirectTo: `${window.location.origin}/callback`
    }
  });
  
  if (error) {
    showError('লগইন করতে সমস্যা হয়েছে');
    return;
  }
}

// Microsoft OAuth
async function signInWithMicrosoft() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      scopes: 'Files.ReadWrite offline_access',
      redirectTo: `${window.location.origin}/callback`
    }
  });
}

// Email/Password Sign Up
async function signUpWithEmail(email, password, userData) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: userData.name,
        institution: userData.institution
      }
    }
  });
  
  if (error) {
    showError('অ্যাকাউন্ট তৈরি করতে সমস্যা হয়েছে');
    return;
  }
  
  // Send verification email
  showSuccess('আপনার ইমেইল চেক করুন verification link এর জন্য');
}

// Handle OAuth Callback
async function handleOAuthCallback() {
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error || !session) {
    window.location.href = '/login.html';
    return;
  }
  
  // Check if first-time user
  const isFirstLogin = await checkIfFirstLogin(session.user.id);
  
  if (isFirstLogin) {
    // Create Drive folder structure
    await createDriveFolderStructure();
    
    // Initialize user preferences
    await initializeUserPreferences(session.user);
    
    // Redirect to onboarding
    window.location.href = '/onboarding.html';
  } else {
    // Redirect to dashboard
    window.location.href = '/dashboard';
  }
}

// Check authentication state
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    console.log('User signed in:', session.user.email);
  } else if (event === 'SIGNED_OUT') {
    window.location.href = '/login.html';
  }
});
```

### Drive Permissions Request

```javascript
async function requestDrivePermissions() {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    showError('Please log in first');
    return;
  }
  
  // Get access token from Supabase session
  const accessToken = session.provider_token;
  
  // Initialize Google Drive API
  await gapi.client.init({
    apiKey: GOOGLE_API_KEY,
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  });
  
  gapi.client.setToken({ access_token: accessToken });
  
  // Create folder structure
  await createQuestionCraftFolder();
}
```

### User Roles & Permissions

```javascript
const USER_ROLES = {
  TEACHER: 'teacher',    // Default role
  ADMIN: 'admin',        // School/institution admin
  SUPER_ADMIN: 'super_admin' // Platform admin
};

// Role-based access control
function hasPermission(user, action) {
  const permissions = {
    teacher: [
      'create_question',
      'edit_own_question',
      'create_paper',
      'share_with_colleagues'
    ],
    admin: [
      ...permissions.teacher,
      'manage_school_users',
      'view_school_stats',
      'moderate_shared_content'
    ],
    super_admin: [
      ...permissions.admin,
      'manage_platform',
      'view_all_users',
      'manage_community_content'
    ]
  };
  
  return permissions[user.role]?.includes(action) || false;
}
```

---

## 🎮 Gamification System

### Points & Levels

```javascript
const GAMIFICATION = {
  actions: {
    create_question: 10,
    create_paper: 50,
    share_question: 20,
    community_contribution: 30,
    complete_onboarding: 100,
    first_ai_generation: 25,
    daily_login: 5
  },
  
  levels: [
    { level: 1, points_required: 0, title: "নতুন শিক্ষক" },
    { level: 2, points_required: 100, title: "প্রশিক্ষণার্থী" },
    { level: 3, points_required: 500, title: "দক্ষ শিক্ষক" },
    { level: 4, points_required: 1000, title: "বিশেষজ্ঞ শিক্ষক" },
    { level: 5, points_required: 2500, title: "মাস্টার শিক্ষক" }
  ],
  
  badges: [
    {
      id: "first_question",
      name: "প্রথম প্রশ্ন",
      description: "প্রথম প্রশ্ন তৈরি করুন",
      icon: "🎯",
      criteria: { questions_created: 1 }
    },
    {
      id: "ai_master",
      name: "AI মাস্টার",
      description: "১০০+ AI প্রশ্ন তৈরি করুন",
      icon: "🤖",
      criteria: { ai_questions: 100 }
    },
    {
      id: "paper_creator",
      name: "পরীক্ষক",
      description: "১০টি প্রশ্নপত্র তৈরি করুন",
      icon: "📄",
      criteria: { papers_created: 10 }
    },
    {
      id: "community_contributor",
      name: "সহযোগী",
      description: "৫০টি প্রশ্ন community তে share করুন",
      icon: "🤝",
      criteria: { shared_questions: 50 }
    }
  ]
};

// Award points
async function awardPoints(userId, action) {
  const points = GAMIFICATION.actions[action];
  
  if (!points) return;
  
  // Update user points
  const currentPoints = await getUserPoints(userId);
  const newPoints = currentPoints + points;
  
  await updateUserPoints(userId, newPoints);
  
  // Check for level up
  const newLevel = calculateLevel(newPoints);
  const currentLevel = await getUserLevel(userId);
  
  if (newLevel > currentLevel) {
    await updateUserLevel(userId, newLevel);
    showLevelUpNotification(newLevel);
  }
  
  // Check for badges
  await checkBadgeEligibility(userId);
}

// Leaderboard
async function getLeaderboard(timeframe = 'all_time') {
  const { data, error } = await supabase
    .from('gamification_achievements')
    .select('user_id, SUM(points) as total_points')
    .groupBy('user_id')
    .orderBy('total_points', { ascending: false })
    .limit(100);
  
  return data;
}
```

### Leaderboard UI

```javascript
// Display in Dashboard or separate /leaderboard page
{
  timeframes: ["This Week", "This Month", "All Time"],
  categories: ["Total Points", "Questions Created", "Papers Created"],
  
  leaderboard_table: {
    columns: ["Rank", "Name", "Institution", "Points", "Level"],
    highlight_current_user: true,
    show_top_10: true,
    pagination: true
  }
}
```

---

## 🔔 Notifications System

### Email Notifications

```javascript
const EMAIL_NOTIFICATIONS = {
  welcome: {
    trigger: "User signup",
    subject: "QuestionCraft BD তে স্বাগতম!",
    template: "welcome_email.html"
  },
  paper_shared: {
    trigger: "Paper shared with user",
    subject: "{teacher_name} আপনার সাথে একটি প্রশ্নপত্র শেয়ার করেছেন",
    template: "paper_shared_email.html"
  },
  new_feature: {
    trigger: "Platform update",
    subject: "নতুন ফিচার যুক্ত হয়েছে!",
    template: "new_feature_email.html"
  },
  weekly_summary: {
    trigger: "Weekly (Monday 9 AM)",
    subject: "আপনার সাপ্তাহিক সারাংশ",
    template: "weekly_summary_email.html"
  }
};

// Send email (using Supabase Edge Functions + SendGrid/Resend)
async function sendEmail(to, template, data) {
  const response = await supabase.functions.invoke('send-email', {
    body: { to, template, data }
  });
  
  return response;
}
```

### Browser Push Notifications

```javascript
// Request permission
async function requestNotificationPermission() {
  const permission = await Notification.requestPermission();
  
  if (permission === 'granted') {
    console.log('Notification permission granted');
  }
}

// Show notification
function showNotification(title, options) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, options);
  }
}

// Example usage
showNotification('নতুন প্রশ্ন তৈরি হয়েছে!', {
  body: 'আপনার AI request সফলভাবে সম্পন্ন হয়েছে।',
  icon: '/logo.png',
  tag: 'question-generated'
});
```

---

## 🤝 Collaboration Features

### Share Questions with Specific Teachers

```javascript
async function shareQuestion(questionId, recipientEmails, permissions = 'view') {
  const question = await getQuestionFromDrive(questionId);
  
  // Save to Supabase shared database
  const { data, error } = await supabase
    .from('community_questions')
    .insert({
      question_data: question,
      user_id: currentUser.id,
      is_public: false,
      shared_with: recipientEmails,
      permissions: permissions
    });
  
  // Send email notifications
  for (const email of recipientEmails) {
    await sendEmail(email, 'question_shared', {
      sharer_name: currentUser.name,
      question_title: question.question.substring(0, 50) + '...'
    });
  }
  
  showSuccess(`${recipientEmails.length} জন শিক্ষকের সাথে শেয়ার করা হয়েছে!`);
}
```

### Co-create Papers (Real-time Collaboration)

```javascript
// Using Supabase Realtime
const channel = supabase.channel(`paper:${paperId}`)
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'collaboration_sessions',
    filter: `paper_id=eq.${paperId}`
  }, (payload) => {
    // Update UI with changes
    updatePaperUI(payload.new.current_state);
  })
  .subscribe();

// Broadcast local changes
async function updatePaperState(paperId, newState) {
  const { data, error } = await supabase
    .from('collaboration_sessions')
    .upsert({
      paper_id: paperId,
      current_state: newState,
      participants: currentParticipants,
      last_updated: new Date().toISOString()
    });
  
  // Broadcast to other participants
  channel.send({
    type: 'broadcast',
    event: 'paper_update',
    payload: { state: newState }
  });
}
```

### Version History

```javascript
// Track versions when saving
async function saveQuestionVersion(questionId, questionData) {
  const existingVersions = await getQuestionVersions(questionId);
  const newVersion = existingVersions.length + 1;
  
  const versionedData = {
    ...questionData,
    metadata: {
      ...questionData.metadata,
      version: newVersion,
      updated_at: new Date().toISOString()
    }
  };
  
  // Save current version
  await saveFileToDrive(
    `question_${questionId}_v${newVersion}.json`,
    versionedData,
    versionsFolder
  );
  
  // Update main file
  await updateFileToDrive(
    `question_${questionId}.json`,
    versionedData,
    questionsFolder
  );
}

// Restore previous version
async function restoreVersion(questionId, version) {
  const versionData = await getFileFromDrive(
    `question_${questionId}_v${version}.json`
  );
  
  // Update main file
  await updateFileToDrive(
    `question_${questionId}.json`,
    versionData,
    questionsFolder
  );
  
  showSuccess(`Version ${version} পুনরুদ্ধার করা হয়েছে!`);
}
```

### Comment on Questions

```javascript
const COMMENTS_SCHEMA = {
  question_id: "String",
  user_id: "String",
  user_name: "String",
  comment_text: "String",
  timestamp: "ISO Date",
  replies: [
    {
      user_id: "String",
      user_name: "String",
      reply_text: "String",
      timestamp: "ISO Date"
    }
  ]
};

// Add comment (saved to Supabase)
async function addComment(questionId, commentText) {
  const { data, error } = await supabase
    .from('question_comments')
    .insert({
      question_id: questionId,
      user_id: currentUser.id,
      user_name: currentUser.name,
      comment_text: commentText,
      created_at: new Date().toISOString()
    });
  
  // Notify question owner
  const question = await getQuestion(questionId);
  if (question.created_by !== currentUser.email) {
    await sendNotification(question.created_by, 'new_comment', {
      commenter: currentUser.name,
      question_preview: question.question.substring(0, 50)
    });
  }
}

// Display comments
async function loadComments(questionId) {
  const { data, error } = await supabase
    .from('question_comments')
    .select('*')
    .eq('question_id', questionId)
    .order('created_at', { ascending: false });
  
  return data;
}
```

---

## 📊 Import/Export Features

### Import from Excel/CSV

```javascript
async function importQuestionsFromCSV(file) {
  const Papa = await import('https://cdn.jsdelivr.net/npm/papaparse@5/papaparse.min.js');
  
  Papa.parse(file, {
    header: true,
    complete: async (results) => {
      const questions = results.data.map(row => ({
        type: row.type || 'mcq',
        question: row.question,
        options: [row.option_a, row.option_b, row.option_c, row.option_d],
        correct_answer: parseInt(row.correct_answer),
        metadata: {
          subject: row.subject,
          class: row.class,
          chapter: row.chapter,
          difficulty: row.difficulty,
          marks: parseInt(row.marks),
          source: 'imported_csv'
        }
      }));
      
      // Save to Drive
      for (const q of questions) {
        await saveQuestion(q);
      }
      
      showSuccess(`${questions.length}টি প্রশ্ন সফলভাবে import করা হয়েছে!`);
    }
  });
}
```

**CSV Format:**
```csv
type,question,option_a,option_b,option_c,option_d,correct_answer,subject,class,chapter,difficulty,marks
mcq,"প্রশ্ন টেক্সট","অপশন ক","অপশন খ","অপশন গ","অপশন ঘ",0,পদার্থবিজ্ঞান,9,অধ্যায় ৩,medium,1
```

### Import from Word Document

```javascript
async function importQuestionsFromWord(file) {
  // Use mammoth.js to extract text from .docx
  const mammoth = await import('https://cdn.jsdelivr.net/npm/mammoth@1/mammoth.browser.min.js');
  
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  
  const text = result.value;
  
  // Parse text using AI to identify questions
  const questions = await parseQuestionsWithGemini(text);
  
  // Save questions
  for (const q of questions) {
    await saveQuestion(q);
  }
  
  showSuccess(`${questions.length}টি প্রশ্ন Word document থেকে import করা হয়েছে!`);
}

// AI parsing
async function parseQuestionsWithGemini(documentText) {
  const prompt = `এই document থেকে সব প্রশ্ন identify করে structured JSON এ return করুন:

${documentText}

Return format:
{
  "questions": [
    {
      "type": "mcq",
      "question": "...",
      "options": [...],
      ...
    }
  ]
}`;

  // Gemini API call...
}
```

### Export to Word (.docx)

```javascript
async function exportQuestionsToWord(questions) {
  // Use docx library
  const { Document, Paragraph, TextRun, HeadingLevel } = await import('https://cdn.jsdelivr.net/npm/docx@8/build/index.js');
  
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: "QuestionCraft BD - Questions Export",
          heading: HeadingLevel.HEADING_1
        }),
        ...questions.flatMap((q, index) => [
          new Paragraph({
            text: `${index + 1}. ${q.question}`,
            heading: HeadingLevel.HEADING_2
          }),
          ...q.options.map((opt, i) => 
            new Paragraph({
              text: `   ${String.fromCharCode(2453 + i)}) ${opt}`
            })
          ),
          new Paragraph({
            text: `সঠিক উত্তর: ${String.fromCharCode(2453 + q.correct_answer)}`,
            italics: true
          }),
          new Paragraph({ text: "" }) // Spacing
        ])
      ]
    }]
  });
  
  // Generate blob
  const blob = await Packer.toBlob(doc);
  
  // Download
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'questions_export.docx';
  a.click();
}
```

### Export to PDF

```javascript
// Same as paper PDF generation, but simpler format
async function exportQuestionsToPDF(questions) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  doc.addFont('Kalpurush.ttf', 'Kalpurush', 'normal');
  doc.setFont('Kalpurush');
  
  let yPosition = 20;
  
  questions.forEach((q, index) => {
    doc.setFontSize(12);
    doc.text(`${index + 1}. ${q.question}`, 20, yPosition, { maxWidth: 170 });
    yPosition += 10;
    
    if (q.type === 'mcq') {
      q.options.forEach((opt, i) => {
        doc.setFontSize(11);
        doc.text(`   ${String.fromCharCode(2453 + i)}) ${opt}`, 25, yPosition, { maxWidth: 165 });
        yPosition += 7;
      });
    }
    
    yPosition += 8;
    
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
  });
  
  doc.save('questions_export.pdf');
}
```

---

## 🎓 Pre-made Templates

### Template Structure

```javascript
const TEMPLATES = {
  monthly_test: {
    name: "মাসিক পরীক্ষা",
    description: "নিয়মিত মাসিক পরীক্ষার জন্য",
    settings: {
      duration: 60,
      total_marks: 30,
      sections: [
        { name: "MCQ", marks: 20, question_count: 20 },
        { name: "সংক্ষিপ্ত", marks: 10, question_count: 5 }
      ],
      instructions: "১. সব প্রশ্নের উত্তর দিতে হবে...",
      header: { include: true },
      answer_key: { include: false }
    }
  },
  
  midterm_exam: {
    name: "মধ্যবর্ষীয় পরীক্ষা",
    description: "Midterm exam এর জন্য",
    settings: {
      duration: 90,
      total_marks: 50,
      sections: [
        { name: "MCQ", marks: 20, question_count: 20 },
        { name: "সৃজনশীল", marks: 30, question_count: 3 }
      ],
      instructions: "১. সব প্রশ্নের উত্তর দিতে হবে...",
      header: { include: true, show_logo: true },
      answer_key: { include: true, position: 'separate_page' }
    }
  },
  
  final_exam: {
    name: "বার্ষিক পরীক্ষা",
    description: "Final exam এর জন্য",
    settings: {
      duration: 120,
      total_marks: 100,
      sections: [
        { name: "MCQ", marks: 30, question_count: 30 },
        { name: "সৃজনশীল", marks: 50, question_count: 5 },
        { name: "সংক্ষিপ্ত", marks: 20, question_count: 10 }
      ],
      instructions: "১. সব প্রশ্নের উত্তর দিতে হবে...",
      header: { include: true, show_logo: true },
      answer_key: { include: true, position: 'separate_pdf' }
    }
  },
  
  quiz_template: {
    name: "কুইজ",
    description: "ছোট কুইজের জন্য",
    settings: {
      duration: 15,
      total_marks: 10,
      sections: [
        { name: "MCQ", marks: 10, question_count: 10 }
      ],
      instructions: "সব প্রশ্নের উত্তর দিতে হবে।",
      header: { include: false },
      answer_key: { include: true, position: 'same_page' }
    }
  }
};

// Apply template
function applyTemplate(templateName) {
  const template = TEMPLATES[templateName];
  
  if (!template) {
    showError('Template not found');
    return;
  }
  
  // Pre-fill paper creation form with template settings
  document.getElementById('duration').value = template.settings.duration;
  document.getElementById('total_marks').value = template.settings.total_marks;
  // ... fill other fields
  
  showSuccess(`"${template.name}" template প্রয়োগ করা হয়েছে!`);
}
```

---

## 🔒 Security Measures

### HTTPS Only

```javascript
// Redirect to HTTPS
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

### Rate Limiting (Gemini API)

```javascript
class RateLimiter {
  constructor(maxPerMinute = 60, maxPerDay = 1500) {
    this.maxPerMinute = maxPerMinute;
    this.maxPerDay = maxPerDay;
    this.minuteRequests = [];
    this.dayRequests = 0;
    this.dayStart = Date.now();
  }
  
  async wait() {
    const now = Date.now();
    
    // Reset day counter
    if (now - this.dayStart > 86400000) { // 24 hours
      this.dayRequests = 0;
      this.dayStart = now;
    }
    
    // Check daily limit
    if (this.dayRequests >= this.maxPerDay) {
      throw new Error('দৈনিক limit শেষ! আগামীকাল আবার চেষ্টা করুন।');
    }
    
    // Check per-minute limit
    const oneMinuteAgo = now - 60000;
    this.minuteRequests = this.minuteRequests.filter(t => t > oneMinuteAgo);
    
    if (this.minuteRequests.length >= this.maxPerMinute) {
      const waitTime = this.minuteRequests[0] + 60000 - now;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    this.minuteRequests.push(now);
    this.dayRequests++;
  }
}

const geminiLimiter = new RateLimiter(60, 1500);

// Usage
await geminiLimiter.wait();
const questions = await generateQuestionsWithGemini(...);
```

### Input Sanitization

```javascript
function sanitizeInput(input) {
  return input
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

// Use before saving
const sanitizedQuestion = sanitizeInput(userInput);
```

### CSRF Protection

```javascript
// Generate CSRF token
function generateCSRFToken() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Store in session
const csrfToken = generateCSRFToken();
sessionStorage.setItem('csrf_token', csrfToken);

// Include in forms
document.getElementById('csrf-token').value = csrfToken;

// Validate on submit
function validateCSRF(submittedToken) {
  const storedToken = sessionStorage.getItem('csrf_token');
  return submittedToken === storedToken;
}
```

### Anti-Piracy Measures

**Problem:** Exam questions leak হওয়া prevent করতে হবে

**Solutions:**

**1. Watermarking:**
```javascript
// Add unique watermark to each PDF
const watermark = `${currentUser.name} - ${currentUser.email} - ${new Date().toISOString()}`;

// Embed in PDF (invisible to casual view, visible in metadata)
doc.setProperties({
  title: paperData.title,
  subject: paperData.subject,
  author: currentUser.name,
  keywords: watermark, // Traceable
  creator: 'QuestionCraft BD'
});

// Also visible watermark (optional)
doc.setTextColor(230, 230, 230);
doc.setFontSize(8);
doc.text(watermark, 105, 290, { align: 'center' });
```

**2. Access Control:**
```javascript
// Limit downloads before exam
const DOWNLOAD_RESTRICTIONS = {
  before_exam: {
    allowed: false, // Can't download until exam day
    message: "পরীক্ষার দিন পর্যন্ত ডাউনলোড করা যাবে না"
  },
  exam_day: {
    allowed: true,
    max_downloads: 3, // Maximum 3 downloads
    time_limit: "Only 1 hour before exam"
  }
};

async function checkDownloadPermission(paperId) {
  const paper = await getPaper(paperId);
  const examDate = new Date(paper.exam_info.date);
  const now = new Date();
  
  // Before exam day
  if (now < examDate.setHours(0, 0, 0, 0)) {
    showError(DOWNLOAD_RESTRICTIONS.before_exam.message);
    return false;
  }
  
  // Check download count
  const downloadCount = await getDownloadCount(paperId, currentUser.id);
  if (downloadCount >= DOWNLOAD_RESTRICTIONS.exam_day.max_downloads) {
    showError('আপনি maximum download limit এ পৌঁছেছেন');
    return false;
  }
  
  // Log download
  await logDownload(paperId, currentUser.id, {
    timestamp: now,
    ip: await getUserIP(),
    user_agent: navigator.userAgent
  });
  
  return true;
}
```

**3. Print Protection (for web preview):**
```javascript
// Disable right-click and print shortcuts on preview
document.addEventListener('contextmenu', (e) => {
  if (e.target.closest('.paper-preview')) {
    e.preventDefault();
    showTooltip('Preview mode এ printing disabled');
  }
});

// Disable Ctrl+P on preview
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
    if (document.querySelector('.paper-preview:hover')) {
      e.preventDefault();
      showMessage('Please use "Download PDF" button');
    }
  }
});
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile first */
:root {
  --mobile: 320px;
  --tablet: 768px;
  --desktop: 1024px;
  --wide: 1280px;
}

/* Desktop-first approach (as requested) */
@media (max-width: 1024px) {
  /* Tablet adjustments */
  .sidebar {
    width: 200px;
  }
}

@media (max-width: 768px) {
  /* Mobile adjustments */
  .sidebar {
    display: none; /* Convert to hamburger menu */
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .split-view {
    flex-direction: column; /* Stack editor and preview */
  }
}
```

### Mobile Navigation

```javascript
// Hamburger menu for mobile
<div class="mobile-menu-toggle">
  <button onclick="toggleMobileMenu()">
    <span class="material-symbols-outlined">menu</span>
  </button>
</div>

<div class="mobile-menu" id="mobile-menu">
  <nav>
    <a href="/dashboard">Dashboard</a>
    <a href="/question-bank">Question Bank</a>
    <a href="/my-papers">My Papers</a>
    <a href="/settings">Settings</a>
  </nav>
</div>

<script>
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('active');
}
</script>
```

---

## 🧪 Error Handling

### Global Error Handler

```javascript
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  
  // Log to Sentry
  if (window.Sentry) {
    Sentry.captureException(event.error);
  }
  
  // Show user-friendly message
  showError('কোনো সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  
  if (window.Sentry) {
    Sentry.captureException(event.reason);
  }
  
  showError('অপারেশন ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
});
```

### User-Friendly Error Messages

```javascript
const ERROR_MESSAGES = {
  // Bangla messages for common errors
  network: "ইন্টারনেট সংযোগ চেক করুন",
  auth: "লগইন সেশন শেষ হয়ে গেছে। আবার লগইন করুন।",
  permission: "এই কাজের অনুমতি নেই",
  quota: "Storage limit শেষ হয়ে গেছে",
  file_too_large: "ফাইল সাইজ সর্বোচ্চ 50MB হতে পারে",
  invalid_format: "ফাইল format সঠিক নয়",
  ai_limit: "দৈনিক AI limit শেষ। আগামীকাল আবার চেষ্টা করুন।"
};

function showError(message) {
  // Toast notification
  const toast = document.createElement('div');
  toast.className = 'error-toast';
  toast.innerHTML = `
    <span class="material-symbols-outlined">error</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
```

---

## 🎬 Loading States

### Skeleton Loaders

```html
<!-- Question card skeleton -->
<div class="skeleton-card">
  <div class="skeleton-title"></div>
  <div class="skeleton-text"></div>
  <div class="skeleton-text short"></div>
  <div class="skeleton-badges">
    <div class="skeleton-badge"></div>
    <div class="skeleton-badge"></div>
  </div>
</div>
```

```css
.skeleton-title {
  height: 24px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 12px;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Progress Bars

```javascript
// Show progress for long operations
function showProgress(message, percentage) {
  const progressBar = document.getElementById('global-progress');
  progressBar.style.display = 'block';
  progressBar.querySelector('.message').textContent = message;
  progressBar.querySelector('.bar-fill').style.width = `${percentage}%`;
}

// Usage
showProgress('প্রশ্ন তৈরি হচ্ছে...', 45);
```

---

## 📏 MVP Priority (Must-Have for Launch)

### Phase 1 Features (Cannot launch without):

1. ✅ **AI Question Generator (Gemini)**
   - Text-based question generation
   - All question types (MCQ, Creative, Short)
   - Gemini API integration

2. ✅ **PDF Question Paper Export**
   - Professional formatting
   - Bengali font support
   - Customizable templates
   - Download functionality

3. ✅ **Built-in Question Bank**
   - CRUD operations (Create, Read, Update, Delete)
   - Search and filter
   - Categorization by subject, class, type

4. ✅ **User Account System**
   - Google OAuth via Supabase
   - Email/Password signup
   - Profile management

5. ✅ **Simple Exam Sheet / Document Generator**
   - Paper creation workflow
   - Question selection
   - PDF generation

### Phase 2 Features (Can add later):

- Book Page Photo Scan
- Student Portal (for test-taking)
- Mobile App/PWA
- Advanced Analytics
- Sponsorship Integration (ads)
- Question Difficulty Auto-detection (Bloom's Taxonomy)
- Community Marketplace
- Advanced collaboration features

---

## 💰 Monetization Strategy

### Revenue Model: 100% FREE for Users

**Core Principle:** সম্পূর্ণ বিনামূল্যে - কোনো subscription, premium features, বা payment gateway নেই

**Revenue Sources:**

**1. Limited Advertisements**
```javascript
const AD_STRATEGY = {
  placement: {
    pdf_download: {
      timing: "Before PDF download",
      duration: "Based on pages (10s/page, max 30s)",
      type: "Video ad (skippable after 5s)"
    }
  },
  
  ad_logic: {
    pages_1: "10 seconds ad",
    pages_2: "20 seconds ad",
    pages_3_plus: "30 seconds ad (or 3x 10s ads)"
  },
  
  providers: [
    "Google AdSense",
    "Local BD ad networks",
    "Educational sponsors"
  ],
  
  targeting: {
    audience: "Teachers, Educators in Bangladesh",
    context: "Education, Teaching tools, NCTB",
    safe_content: true // Family-friendly only
  }
};
```

**2. Donation System (Optional)**
```javascript
// Donation button in Footer & Settings
const DONATION_OPTIONS = {
  bkash: {
    number: "01XXX-XXXXXX",
    qr_code: "bkash_qr.png"
  },
  nagad: {
    number: "01XXX-XXXXXX",
    qr_code: "nagad_qr.png"
  },
  message: "QuestionCraft BD সম্পূর্ণ বিনামূল্যে। যদি platform টি সাহায্য করে থাকে, আপনার ইচ্ছামত donation দিতে পারেন। 🙏"
};
```

**3. Future Revenue (Not for MVP):**
- Sponsored content (NCTB-approved educational content)
- Institutional partnerships
- Government education grants
- Educational organization sponsorships

### Ad Implementation

```html
<!-- Ad container before PDF download -->
<div id="ad-modal" class="modal">
  <div class="modal-content">
    <h3>আপনার প্রশ্নপত্র প্রস্তুত!</h3>
    <p>আপনি সীমিত বিজ্ঞাপনের মাধ্যমে আমাদের platform টি বিনামূল্যে রাখতে সাহায্য করছেন। ধন্যবাদ! 🙏</p>
    
    <!-- Ad placement -->
    <div id="ad-container">
      <!-- Google AdSense or video ad -->
    </div>
    
    <div class="countdown">
      <p>ডাউনলোড শুরু হবে <span id="countdown">10</span> সেকেন্ডে...</p>
    </div>
    
    <button id="download-btn" disabled>ডাউনলোড করুন</button>
  </div>
</div>

<script>
async function downloadPaperWithAd(paperId) {
  const paper = await getPaper(paperId);
  const pageCount = calculatePageCount(paper);
  
  // Calculate ad duration
  const adDuration = Math.min(pageCount * 10, 30); // Max 30 seconds
  
  showAdModal(adDuration);
  
  // Countdown
  let remaining = adDuration;
  const interval = setInterval(() => {
    remaining--;
    document.getElementById('countdown').textContent = remaining;
    
    if (remaining <= 0) {
      clearInterval(interval);
      enableDownload(paperId);
    }
  }, 1000);
}

function enableDownload(paperId) {
  const btn = document.getElementById('download-btn');
  btn.disabled = false;
  btn.onclick = () => {
    generateAndDownloadPDF(paperId);
    hideAdModal();
  };
}
</script>
```

---

## 🚀 Deployment & Hosting

### Netlify Deployment

**netlify.toml:**
```toml
[build]
  publish = "."
  command = "echo 'No build needed for static site'"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Environment Variables (Netlify)

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
GEMINI_API_KEY=your_gemini_key
GOOGLE_DRIVE_CLIENT_ID=your_client_id
GOOGLE_DRIVE_API_KEY=your_api_key
```

### Custom Domain Setup (Later)

```
Domain: questioncraftbd.com (or .net)

DNS Configuration:
├── A Record: @ → Netlify IP
├── CNAME: www → your-site.netlify.app
└── SSL: Auto (Netlify provides)
```

---

## 📊 Success Metrics

### KPIs (Key Performance Indicators)

```javascript
const SUCCESS_METRICS = {
  user_engagement: {
    daily_active_users: "Target: 100+ within 3 months",
    weekly_active_users: "Target: 500+ within 6 months",
    average_session_duration: "Target: 15+ minutes",
    questions_created_per_user: "Target: 50+ per month"
  },
  
  platform_growth: {
    total_users: "Target: 5,000+ teachers in 6 months",
    total_questions: "Target: 50,000+ questions in 6 months",
    total_papers: "Target: 10,000+ papers in 6 months"
  },
  
  technical: {
    page_load_time: "< 2 seconds",
    pdf_generation_time: "< 5 seconds",
    error_rate: "< 1%",
    uptime: "> 99.5%"
  },
  
  business: {
    retention_rate: "> 70% monthly",
    nps_score: "> 50",
    feature_adoption: "> 60% for core features"
  }
};
```

### Measurement Tools

```javascript
// Simple analytics (no external service initially)
const Analytics = {
  trackEvent(event_name, properties) {
    const event = {
      name: event_name,
      properties: properties,
      timestamp: new Date().toISOString(),
      user_id: currentUser?.id,
      session_id: getSessionId()
    };
    
    // Store locally
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    events.push(event);
    
    // Keep only last 100 events
    if (events.length > 100) {
      events.shift();
    }
    
    localStorage.setItem('analytics_events', JSON.stringify(events));
  }
};

// Usage
Analytics.trackEvent('question_created', {
  type: 'mcq',
  source: 'ai_generated',
  subject: 'Physics'
});
```

---

## 📞 Support & Help

### Support Channels

```javascript
const SUPPORT = {
  email: "support@questioncraftbd.com",
  response_time: "24-48 hours",
  
  in_app_feedback: {
    button: "Bottom-right floating button",
    fields: ["Subject", "Description", "Screenshot (optional)"]
  }
};

// Feedback form
async function submitFeedback(data) {
  // Send via Supabase Edge Function (EmailJS or similar)
  const response = await supabase.functions.invoke('send-feedback', {
    body: {
      user: currentUser.email,
      subject: data.subject,
      message: data.message,
      screenshot: data.screenshot,
      url: window.location.href,
      browser: navigator.userAgent
    }
  });
  
  showSuccess('আপনার feedback পাঠানো হয়েছে। ধন্যবাদ!');
}
```

---

## 🗺️ Implementation Roadmap

### Week 1-2: Foundation
- [x] Project setup
- [x] Landing page
- [x] Login/Signup pages
- [x] Supabase Auth integration
- [x] Google Drive API setup

### Week 3-4: Core Features
- [ ] Dashboard
- [ ] Question Bank (CRUD)
- [ ] Question Creator (all types)
- [ ] Gemini AI integration

### Week 5-6: Paper Generation
- [ ] Create Paper workflow
- [ ] PDF generation (jsPDF)
- [ ] Bengali font support
- [ ] Templates

### Week 7-8: NCTB Integration
- [ ] Books Library page
- [ ] PDF upload
- [ ] Chapter detection (Gemini)
- [ ] Bulk question generation

### Week 9-10: Collaboration
- [ ] Share features
- [ ] Comments
- [ ] Real-time collaboration (Supabase)
- [ ] Version history

### Week 11-12: Polish & Launch
- [ ] Gamification system
- [ ] Settings page
- [ ] Import/Export
- [ ] Error tracking (Sentry)
- [ ] Testing
- [ ] Deploy to Netlify
- [ ] Soft launch

### Post-Launch (Phase 2)
- [ ] Book page scan (Gemini Vision)
- [ ] Student portal
- [ ] Mobile app/PWA
- [ ] Analytics dashboard
- [ ] Ad integration

---

## 🎯 Conclusion

This PRD provides a complete specification for building **QuestionCraft BD** - a 100% FREE, AI-powered question paper creation platform for Bangladeshi teachers.

**Key Highlights:**
- ✅ Pure HTML/CSS/JavaScript (no framework complexity)
- ✅ Google Gemini AI (completely FREE)
- ✅ Google Drive storage (user's own storage)
- ✅ Supabase for community features
- ✅ Desktop-first, responsive design
- ✅ NCTB curriculum aligned
- ✅ Full Bengali language support
- ✅ Gamification & collaboration features
- ✅ 100% FREE for users (ad-supported)

**For Antigravity:**
This document contains everything needed to build the complete platform:
- Exact UI specifications with HTML examples
- Complete data schemas (Drive + Supabase)
- API integration details (Gemini, Drive, Supabase)
- All features with code examples
- Security requirements
- Deployment configuration

**Next Steps:**
1. Set up Supabase project
2. Get Gemini API key (FREE)
3. Configure Google Drive API
4. Start with landing page
5. Build progressively following roadmap

---

**Document Version:** 1.0  
**Last Updated:** March 8, 2026  
**Status:** Ready for Development

**Contact:**
- Email: support@questioncraftbd.com
- Platform: QuestionCraft BD
