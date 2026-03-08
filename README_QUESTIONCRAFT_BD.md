# QuestionCraft BD - স্মার্ট প্রশ্নপত্র, সহজ উপায়ে

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Web-brightgreen)](https://questioncraftbd.netlify.app)
[![Status](https://img.shields.io/badge/Status-In%20Development-yellow)](https://github.com)

**বাংলাদেশের শিক্ষকদের জন্য সম্পূর্ণ বিনামূল্যে AI-চালিত প্রশ্নপত্র তৈরির প্ল্যাটফর্ম**

---

## 📋 সূচিপত্র

- [প্রজেক্ট সম্পর্কে](#-প্রজেক্ট-সম্পর্কে)
- [প্রধান ফিচার](#-প্রধান-ফিচার)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Environment Setup](#-environment-setup)
- [Development Workflow](#-development-workflow)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 প্রজেক্ট সম্পর্কে

### Vision
বাংলাদেশের শিক্ষক ও শিক্ষার্থীদের জন্য একটি জনপ্রিয় ও সহজ শিক্ষা টুল তৈরি করা যেখানে:
- ✅ প্রশ্নপত্র তৈরি মিনিটেই সম্পন্ন হয়
- ✅ পরীক্ষার শিট professional format এ তৈরি হয়
- ✅ শিক্ষা সম্পর্কিত সব document সহজে তৈরি করা যায়
- ✅ সম্পূর্ণ বিনামূল্যে সবার জন্য accessible

### Problem Statement
**শিক্ষকদের প্রশ্নপত্র তৈরিতে অনেক সময় লাগে।** প্রতিটি পরীক্ষার জন্য manually প্রশ্ন লিখতে, format করতে, এবং PDF তৈরি করতে ঘন্টার পর ঘন্টা সময় নষ্ট হয়।

### Solution
AI-চালিত স্মার্ট প্ল্যাটফর্ম যা:
- 🤖 **Google Gemini AI** ব্যবহার করে NCTB কারিকুলাম অনুযায়ী প্রশ্ন তৈরি করে
- 📚 **NCTB Textbook Upload** করে automatically questions generate করে
- 📄 **Professional PDF** তৈরি করে Bengali font সহ
- ☁️ **Google Drive** এ user এর নিজের storage ব্যবহার করে (cost-free)
- 🎓 **Collaboration** features দিয়ে teachers একসাথে কাজ করতে পারে

### Target Users
সবার জন্য সমানভাবে:
- 👨‍🏫 মাধ্যমিক স্কুলের শিক্ষক (Class 6-10)
- 👩‍🏫 উচ্চ মাধ্যমিক কলেজ শিক্ষক (Class 11-12)
- 🎓 প্রাইভেট টিউটর
- 📚 কোচিং সেন্টার
- 🕌 মাদ্রাসা শিক্ষক
- 🏛️ বিশ্ববিদ্যালয় প্রভাষক

### Supported Subjects
✅ সব NCTB বিষয় support করে:
- পদার্থবিজ্ঞান (Physics)
- রসায়ন (Chemistry)
- গণিত (Mathematics)
- জীববিজ্ঞান (Biology)
- বাংলা
- ইংরেজি (English)
- ইসলাম শিক্ষা
- তথ্য ও যোগাযোগ প্রযুক্তি (ICT)
- **এবং আরও অনেক...**

---

## ✨ প্রধান ফিচার

### 🤖 AI Question Generation (Google Gemini - FREE)
```javascript
// Example: Generate 20 Physics questions
const questions = await generateQuestionsWithGemini({
  subject: "পদার্থবিজ্ঞান",
  class: "9",
  topic: "নিউটনের সূত্র",
  count: 20,
  difficulty: "medium"
});

// Returns: 20 NCTB-aligned questions
// Cost: ৳0 (FREE!)
```

**Features:**
- ✅ 1,500 questions/day FREE
- ✅ MCQ, সৃজনশীল, সংক্ষিপ্ত - সব type
- ✅ NCTB curriculum aligned
- ✅ Grammar check
- ✅ Translation (Bengali ↔ English)
- ✅ Auto-tagging
- ✅ Answer key generation

### 📚 NCTB Textbook Upload
```javascript
// Upload PDF textbook → Auto-generate questions
1. Upload: পদার্থবিজ্ঞান ১ম পত্র.pdf
2. AI detects: ১২টি অধ্যায়
3. Generate: 20 questions/chapter
4. Result: 240 questions automatically!
```

### 📄 Professional PDF Generation
```javascript
// Create exam paper with custom formatting
const paperSettings = {
  paper_size: "A4",
  font: "Kalpurush",
  layout: "single_column",
  include_header: true,
  include_answer_key: true,
  watermark: "QuestionCraft BD"
};

// Generate PDF
generatePDF(paperData, paperSettings);
```

**PDF Features:**
- ✅ Bengali font support (Kalpurush, SolaimanLipi, Hind Siliguri)
- ✅ Institution logo & header
- ✅ Section divisions (MCQ, Creative, Short)
- ✅ Answer key (separate page/same page/separate PDF)
- ✅ Customizable margins, font size
- ✅ Watermarking for security
- ✅ Professional formatting

### 🎮 Gamification System
```javascript
// Earn points for activities
Points:
├── Create Question: +10 points
├── Create Paper: +50 points
├── Share Question: +20 points
├── Community Contribution: +30 points
└── Complete Onboarding: +100 points

Levels:
1. নতুন শিক্ষক (0-100 points)
2. প্রশিক্ষণার্থী (100-500 points)
3. দক্ষ শিক্ষক (500-1000 points)
4. বিশেষজ্ঞ শিক্ষক (1000-2500 points)
5. মাস্টার শিক্ষক (2500+ points)
```

**Badges:**
- 🎯 প্রথম প্রশ্ন (First Question Created)
- 🤖 AI মাস্টার (100+ AI questions)
- 📄 পরীক্ষক (10 papers created)
- 🤝 সহযোগী (50 questions shared)

### 🤝 Collaboration Features
- ✅ Share questions with specific teachers
- ✅ Co-create papers together (Real-time collaboration like Google Docs)
- ✅ Comment on questions
- ✅ Version history tracking
- ✅ Community question database

### 📊 Question Bank Management
```javascript
// Organize questions
Filters:
├── Subject (পদার্থবিজ্ঞান, রসায়ন, গণিত...)
├── Class (6-12)
├── Type (MCQ, সৃজনশীল, সংক্ষিপ্ত)
├── Difficulty (সহজ, মাঝারি, কঠিন)
└── Source (AI, Manual, Past Paper, Community)

Views:
├── Grid View (3 columns)
└── List View (detailed table)

Actions:
├── Search (full-text)
├── Sort (Date, Difficulty, Marks)
├── Bulk Actions (Delete, Export, Move)
└── Pagination (20 items/page)
```

### 📥 Import/Export
**Import:**
- ✅ Excel/CSV files
- ✅ Word documents (.docx)
- ✅ AI-powered parsing

**Export:**
- ✅ PDF (professional format)
- ✅ Word (.docx)
- ✅ All in-browser processing

### 🎨 Pre-made Templates
- 📝 Monthly Test Template (60 min, 30 marks)
- 📋 Midterm Exam Template (90 min, 50 marks)
- 📊 Final Exam Template (120 min, 100 marks)
- ⚡ Quiz Template (15 min, 10 marks)

---

## 🛠️ Tech Stack

### Frontend
```
HTML5          - Semantic markup
CSS3           - Modern styling
JavaScript ES6+ - Vanilla JS (no framework)
Tailwind CSS   - Utility-first styling (CDN)
```

### AI & Machine Learning
```
Google Gemini API - Question generation (FREE tier)
├── Model: gemini-1.5-flash
├── Rate Limits: 60 requests/min, 1,500/day
└── Cost: ৳0 (FREE!)
```

### Storage & Database
```
Google Drive API - User's personal storage (FREE 15GB)
├── Questions (JSON files)
├── Papers (PDF + JSON)
├── Settings
└── Exports

Supabase - Community features
├── Shared questions database
├── Real-time collaboration
├── User authentication
└── Public marketplace
```

### Authentication
```
Supabase Auth
├── Google OAuth
├── Microsoft OAuth
└── Email/Password
```

### Libraries
```javascript
jsPDF         - PDF generation
html2canvas   - HTML to canvas conversion
Lucide Icons  - UI icons
Inter/Poppins - English fonts
Hind Siliguri - Bengali font
```

### Deployment & Hosting
```
Netlify       - Static site hosting (FREE)
├── Automatic deploys from Git
├── HTTPS enabled
├── CDN
└── Serverless functions

Custom Domain - questioncraftbd.com (পরে)
```

### Error Tracking
```
Sentry - Automatic error reporting & monitoring
```

---

## 🚀 Getting Started

### Prerequisites
```bash
# Required
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- Text editor (VS Code recommended)

# Optional for development
- Git
- Node.js (for local server)
```

### Quick Start (For Antigravity)

**Step 1: Clone Repository**
```bash
git clone https://github.com/your-username/questioncraft-bd.git
cd questioncraft-bd
```

**Step 2: Setup API Keys**

Create a `config.js` file:
```javascript
// config.js
const CONFIG = {
  // Supabase Configuration
  SUPABASE_URL: 'https://your-project.supabase.co',
  SUPABASE_ANON_KEY: 'your_supabase_anon_key',
  
  // Google Gemini API (FREE)
  GEMINI_API_KEY: 'AIzaSy..._your_free_gemini_key',
  GEMINI_MODEL: 'gemini-1.5-flash',
  
  // Google Drive API
  GOOGLE_CLIENT_ID: 'your-client-id.apps.googleusercontent.com',
  GOOGLE_API_KEY: 'your_google_api_key',
  
  // App Configuration
  APP_NAME: 'QuestionCraft BD',
  VERSION: '1.0.0',
  DRIVE_FOLDER_NAME: 'QuestionCraft BD'
};
```

**Step 3: Run Locally**
```bash
# Option 1: Simple HTTP server (Python)
python -m http.server 8000

# Option 2: Using Node.js
npx serve

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

**Step 4: Open in Browser**
```
http://localhost:8000
```

### API Keys Setup Guide

#### 1. Google Gemini API (FREE - No Credit Card)
```bash
1. Visit: https://makersuite.google.com/app/apikey
2. Sign in with Google account
3. Click "Create API Key" or "Get API Key"
4. Copy the key (starts with "AIza...")
5. Paste in config.js → GEMINI_API_KEY
```

**Rate Limits:**
- ✅ 60 requests/minute
- ✅ 1,500 requests/day
- ✅ 100% FREE forever

#### 2. Supabase Setup (FREE)
```bash
1. Visit: https://supabase.com
2. Create new project
3. Get credentials from Settings → API:
   - Project URL → SUPABASE_URL
   - anon/public key → SUPABASE_ANON_KEY
4. Enable Authentication → Google OAuth
5. Enable Authentication → Email/Password
```

**Database Tables:**
Run these SQL commands in Supabase SQL Editor:

```sql
-- Community Questions Table
CREATE TABLE community_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  question_data JSONB NOT NULL,
  subject TEXT NOT NULL,
  class TEXT NOT NULL,
  type TEXT NOT NULL,
  difficulty TEXT,
  is_public BOOLEAN DEFAULT false,
  downloads_count INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_community_subject ON community_questions(subject);
CREATE INDEX idx_community_class ON community_questions(class);
CREATE INDEX idx_community_type ON community_questions(type);

-- Shared Papers Table
CREATE TABLE shared_papers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES auth.users(id),
  paper_id TEXT NOT NULL,
  shared_with JSONB,
  permissions TEXT DEFAULT 'view',
  link_sharing BOOLEAN DEFAULT false,
  link_token TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gamification Table
CREATE TABLE gamification_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  achievement_type TEXT NOT NULL,
  points INTEGER DEFAULT 0,
  badge_id TEXT,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 3. Google Drive API Setup
```bash
1. Visit: https://console.cloud.google.com
2. Create new project: "QuestionCraft BD"
3. Enable APIs:
   - Google Drive API
   - Google Picker API
4. Create Credentials:
   - OAuth Client ID (Web application)
   - API Key
5. Configure OAuth:
   - Authorized JavaScript origins:
     http://localhost:8000
     https://your-domain.netlify.app
   - Authorized redirect URIs:
     http://localhost:8000/callback
     https://your-domain.netlify.app/callback
6. Copy:
   - Client ID → GOOGLE_CLIENT_ID
   - API Key → GOOGLE_API_KEY
```

#### 4. Sentry Setup (Optional - Error Tracking)
```bash
1. Visit: https://sentry.io
2. Create new project
3. Copy DSN
4. Add to HTML:
```

```html
<script src="https://js.sentry-cdn.com/your-dsn.min.js"></script>
<script>
  Sentry.init({
    dsn: "https://your-dsn@sentry.io/project-id",
    environment: "production"
  });
</script>
```

---

## 📁 Project Structure

```
questioncraft-bd/
│
├── index.html              # Landing page
├── login.html              # Login page
├── signup.html             # Signup page
├── callback.html           # OAuth callback handler
│
├── css/
│   ├── global.css          # Global styles
│   ├── components.css      # Reusable components
│   └── pages/
│       ├── dashboard.css
│       ├── question-bank.css
│       └── create-paper.css
│
├── js/
│   ├── config.js           # Configuration (API keys)
│   ├── auth.js             # Authentication logic
│   ├── drive-api.js        # Google Drive integration
│   ├── gemini-api.js       # Gemini AI integration
│   ├── supabase-client.js  # Supabase client
│   ├── pdf-generator.js    # PDF generation
│   ├── question-manager.js # Question CRUD operations
│   ├── paper-manager.js    # Paper CRUD operations
│   ├── gamification.js     # Points, badges, leaderboard
│   └── utils.js            # Helper functions
│
├── pages/
│   ├── dashboard/
│   │   └── index.html      # Dashboard page
│   ├── question-bank/
│   │   └── index.html      # Question Bank page
│   ├── create-question/
│   │   └── index.html      # Question Creator
│   ├── create-paper/
│   │   └── index.html      # Paper Creator
│   ├── my-papers/
│   │   └── index.html      # My Papers
│   ├── nctb-books/
│   │   └── index.html      # NCTB Books Library
│   └── settings/
│       └── index.html      # Settings page
│
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   └── illustrations/
│   ├── fonts/
│   │   ├── Kalpurush.ttf
│   │   ├── SolaimanLipi.ttf
│   │   └── HindSiliguri.woff2
│   └── templates/
│       ├── monthly-test.json
│       ├── midterm-exam.json
│       └── final-exam.json
│
├── lib/
│   ├── jspdf/
│   │   └── jspdf.umd.min.js
│   ├── html2canvas/
│   │   └── html2canvas.min.js
│   └── papaparse/
│       └── papaparse.min.js
│
├── netlify.toml            # Netlify configuration
├── README.md               # This file
├── PRD.md                  # Product Requirements Document
├── LICENSE                 # MIT License
└── .gitignore              # Git ignore file
```

---

## 🔧 Environment Setup

### Development Environment Variables

Create a `.env` file (do NOT commit to Git):
```bash
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key

# Google Gemini
GEMINI_API_KEY=AIza...your_key

# Google Drive
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_API_KEY=your_api_key

# Sentry (optional)
SENTRY_DSN=https://your-dsn@sentry.io/project-id
```

### .gitignore
```gitignore
# API Keys (NEVER commit these)
config.js
.env
.env.local

# Node modules
node_modules/

# Build files
dist/
build/

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log
npm-debug.log*

# Temporary files
tmp/
temp/
```

---

## 💻 Development Workflow

### Feature Development Process

**1. Create Feature Branch**
```bash
git checkout -b feature/question-generator
```

**2. Develop Feature**
```javascript
// Example: Implement question generator
// File: js/question-generator.js

async function generateQuestions(params) {
  try {
    // 1. Validate input
    if (!params.topic || !params.count) {
      throw new Error('Topic and count are required');
    }
    
    // 2. Call Gemini API
    const questions = await gemini.generateQuestions(params);
    
    // 3. Save to Drive
    for (const q of questions) {
      await saveQuestion(q);
    }
    
    // 4. Update UI
    showSuccess(`${questions.length}টি প্রশ্ন তৈরি হয়েছে!`);
    
    return questions;
  } catch (error) {
    console.error('Question generation error:', error);
    showError('প্রশ্ন তৈরি করতে সমস্যা হয়েছে');
  }
}
```

**3. Test Locally**
```bash
# Run local server
python -m http.server 8000

# Test in browser
# Check console for errors
# Verify functionality
```

**4. Commit & Push**
```bash
git add .
git commit -m "feat: Add AI question generator with Gemini"
git push origin feature/question-generator
```

**5. Deploy to Netlify**
```bash
# Netlify auto-deploys on push to main
git checkout main
git merge feature/question-generator
git push origin main
```

### Code Style Guidelines

**JavaScript:**
```javascript
// Use async/await (not callbacks)
async function fetchData() {
  const data = await api.get('/endpoint');
  return data;
}

// Use meaningful variable names
const questionCount = 20; // Good
const qc = 20; // Bad

// Use const/let (not var)
const API_KEY = 'xxx'; // Constant
let userPoints = 0; // Variable

// Add comments for complex logic
// Calculate difficulty based on Bloom's Taxonomy
const difficulty = calculateDifficulty(question);
```

**CSS (Tailwind):**
```html
<!-- Use Tailwind utility classes -->
<button class="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl">
  Click Me
</button>

<!-- For complex components, use @apply in CSS -->
<style>
.custom-button {
  @apply bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl;
}
</style>
```

**HTML:**
```html
<!-- Use semantic HTML -->
<header>
  <nav>...</nav>
</header>

<main>
  <section>...</section>
</main>

<footer>...</footer>

<!-- Use ARIA labels for accessibility -->
<button aria-label="Close modal">×</button>
```

---

## 🔌 API Integration

### 1. Gemini API Integration

**File: `js/gemini-api.js`**

```javascript
class GeminiAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta';
    this.model = 'gemini-1.5-flash';
  }
  
  async generateQuestions(params) {
    const prompt = `
বাংলাদেশের NCTB কারিকুলাম অনুযায়ী ${params.count}টি প্রশ্ন তৈরি করুন।

বিষয়: ${params.subject}
শ্রেণী: ${params.class}
অধ্যায়: ${params.chapter}

Requirements:
- Question types: 40% MCQ, 40% সৃজনশীল, 20% সংক্ষিপ্ত
- Difficulty: 30% সহজ, 50% মাঝারি, 20% কঠিন
- সব প্রশ্ন বাংলায়

JSON format:
{
  "questions": [
    {
      "type": "mcq",
      "question": "প্রশ্ন",
      "options": ["ক", "খ", "গ", "ঘ"],
      "correct_answer": 0,
      "difficulty": "medium",
      "marks": 1
    }
  ]
}
`;

    const response = await fetch(
      `${this.baseUrl}/models/${this.model}:generateContent?key=${this.apiKey}`,
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
}

// Initialize
const gemini = new GeminiAPI(CONFIG.GEMINI_API_KEY);
```

**Usage:**
```javascript
const questions = await gemini.generateQuestions({
  subject: 'পদার্থবিজ্ঞান',
  class: '9',
  chapter: 'নিউটনের সূত্র',
  count: 20
});
```

### 2. Google Drive API Integration

**File: `js/drive-api.js`**

```javascript
class DriveAPI {
  constructor(clientId, apiKey) {
    this.clientId = clientId;
    this.apiKey = apiKey;
    this.accessToken = null;
    this.folderId = null;
  }
  
  async init() {
    await gapi.load('client:auth2', async () => {
      await gapi.client.init({
        apiKey: this.apiKey,
        clientId: this.clientId,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        scope: 'https://www.googleapis.com/auth/drive.file'
      });
    });
  }
  
  async signIn() {
    const auth = gapi.auth2.getAuthInstance();
    await auth.signIn();
    this.accessToken = auth.currentUser.get().getAuthResponse().access_token;
  }
  
  async createFolder(folderName, parentId = 'root') {
    const response = await gapi.client.drive.files.create({
      resource: {
        name: folderName,
        mimeType: 'application/vnd.google-apps.folder',
        parents: [parentId]
      },
      fields: 'id'
    });
    
    return response.result.id;
  }
  
  async createFile(fileName, content, folderId) {
    const file = new Blob([JSON.stringify(content)], { type: 'application/json' });
    const metadata = {
      name: fileName,
      parents: [folderId]
    };
    
    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    formData.append('file', file);
    
    const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.accessToken}`
      },
      body: formData
    });
    
    return await response.json();
  }
  
  async getFile(fileId) {
    const response = await gapi.client.drive.files.get({
      fileId: fileId,
      alt: 'media'
    });
    
    return response.body;
  }
  
  async listFiles(folderId) {
    const response = await gapi.client.drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: 'files(id, name, createdTime, modifiedTime)'
    });
    
    return response.result.files;
  }
}

// Initialize
const drive = new DriveAPI(CONFIG.GOOGLE_CLIENT_ID, CONFIG.GOOGLE_API_KEY);
```

**Usage:**
```javascript
// Sign in
await drive.signIn();

// Create QuestionCraft BD folder
const mainFolderId = await drive.createFolder('QuestionCraft BD');

// Create subfolders
const questionsFolderId = await drive.createFolder('Questions', mainFolderId);
const papersFolderId = await drive.createFolder('Papers', mainFolderId);

// Save question
await drive.createFile('question_001.json', questionData, questionsFolderId);
```

### 3. Supabase Integration

**File: `js/supabase-client.js`**

```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  CONFIG.SUPABASE_URL,
  CONFIG.SUPABASE_ANON_KEY
);

// Authentication
async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/callback`
    }
  });
}

// Database operations
async function saveToSharedDatabase(questionData) {
  const { data, error } = await supabase
    .from('community_questions')
    .insert({
      user_id: currentUser.id,
      question_data: questionData,
      subject: questionData.metadata.subject,
      class: questionData.metadata.class,
      type: questionData.type,
      is_public: true
    });
  
  return data;
}

// Real-time collaboration
const channel = supabase.channel(`paper:${paperId}`)
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'collaboration_sessions',
    filter: `paper_id=eq.${paperId}`
  }, (payload) => {
    updateUI(payload.new.current_state);
  })
  .subscribe();
```

---

## 🚢 Deployment

### Netlify Deployment (Recommended)

**Step 1: Connect Git Repository**
```bash
1. Push code to GitHub
2. Visit: https://app.netlify.com
3. Click "New site from Git"
4. Connect GitHub
5. Select repository
```

**Step 2: Configure Build Settings**
```
Build command: (leave empty - static site)
Publish directory: .
```

**Step 3: Environment Variables**
```
Settings → Build & Deploy → Environment Variables

Add:
- SUPABASE_URL
- SUPABASE_ANON_KEY
- GEMINI_API_KEY
- GOOGLE_CLIENT_ID
- GOOGLE_API_KEY
```

**Step 4: Deploy**
```
Click "Deploy site"
Wait 2-3 minutes
Site live at: https://your-site.netlify.app
```

**Step 5: Custom Domain (Optional)**
```bash
1. Buy domain: questioncraftbd.com
2. Netlify → Domain Settings
3. Add custom domain
4. Update DNS records:
   - A record: @ → Netlify IP
   - CNAME: www → your-site.netlify.app
5. Wait 24 hours for DNS propagation
```

### netlify.toml Configuration

```toml
[build]
  publish = "."
  command = "echo 'No build needed'"

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

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## 🧪 Testing

### Manual Testing Checklist

**Authentication:**
- [ ] Google OAuth login works
- [ ] Email/Password signup works
- [ ] Session persists after refresh
- [ ] Logout works correctly

**Question Generation:**
- [ ] AI generates valid questions
- [ ] All question types work (MCQ, Creative, Short)
- [ ] Questions save to Drive
- [ ] Bengali text displays correctly

**PDF Generation:**
- [ ] PDF generates successfully
- [ ] Bengali font renders correctly
- [ ] Layout is professional
- [ ] Answer key includes correctly

**Drive Integration:**
- [ ] Folder structure creates correctly
- [ ] Files save to Drive
- [ ] Files load from Drive
- [ ] Syncing works offline

**Collaboration:**
- [ ] Share feature works
- [ ] Real-time updates work
- [ ] Comments save correctly
- [ ] Version history tracks changes

### Browser Testing
Test on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

### Device Testing
- ✅ Desktop (1920x1080)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

---

## 🐛 Debugging

### Common Issues & Solutions

**Issue 1: Gemini API "Rate limit exceeded"**
```javascript
Error: 429 Too Many Requests

Solution:
- Wait 1 minute
- Check daily limit (1,500/day)
- Implement rate limiter (already in code)
```

**Issue 2: Google Drive "Permission denied"**
```javascript
Error: 403 Forbidden

Solution:
- Re-authenticate with Drive
- Check OAuth scopes
- Verify Drive API is enabled
```

**Issue 3: PDF Bengali font not showing**
```javascript
Error: Font not loaded

Solution:
// Load font before generating PDF
const font = await loadBengaliFont('Kalpurush');
doc.addFont(font, 'Kalpurush', 'normal');
doc.setFont('Kalpurush');
```

**Issue 4: Supabase "Invalid token"**
```javascript
Error: JWT expired

Solution:
// Refresh session
const { data } = await supabase.auth.refreshSession();
```

### Debug Mode

Enable debug logging:
```javascript
// config.js
const CONFIG = {
  DEBUG: true, // Set to true for development
  // ...
};

// utils.js
function log(message, data) {
  if (CONFIG.DEBUG) {
    console.log(`[DEBUG] ${message}`, data);
  }
}

// Usage
log('Generating questions', { count: 20, subject: 'Physics' });
```

---

## 📚 Documentation

### Code Documentation

**JSDoc Format:**
```javascript
/**
 * Generate questions using Gemini AI
 * @param {Object} params - Generation parameters
 * @param {string} params.subject - Subject name (e.g., "পদার্থবিজ্ঞান")
 * @param {string} params.class - Class level (6-12)
 * @param {string} params.topic - Topic name
 * @param {number} params.count - Number of questions to generate
 * @param {string} [params.difficulty] - Difficulty level (optional)
 * @returns {Promise<Array>} Array of generated questions
 * @throws {Error} If API call fails
 */
async function generateQuestions(params) {
  // Implementation
}
```

### User Documentation

Create user guide in `docs/` folder:
```
docs/
├── user-guide-bn.md      # Bengali user guide
├── user-guide-en.md      # English user guide
├── api-reference.md      # API documentation
├── troubleshooting.md    # Common issues & fixes
└── faq.md                # Frequently asked questions
```

---

## 🤝 Contributing

### How to Contribute

**1. Fork Repository**
```bash
# Click "Fork" on GitHub
# Clone your fork
git clone https://github.com/your-username/questioncraft-bd.git
```

**2. Create Feature Branch**
```bash
git checkout -b feature/amazing-feature
```

**3. Make Changes**
```javascript
// Follow code style guidelines
// Add comments
// Test thoroughly
```

**4. Commit Changes**
```bash
git add .
git commit -m "feat: Add amazing feature"
```

**Commit Message Format:**
```
feat: Add new feature
fix: Bug fix
docs: Documentation update
style: Code style changes
refactor: Code refactoring
test: Add tests
chore: Build/config changes
```

**5. Push & Create PR**
```bash
git push origin feature/amazing-feature
# Create Pull Request on GitHub
```

### Code Review Process
1. Automated checks run (linting, tests)
2. Manual code review by maintainers
3. Feedback & requested changes
4. Approval & merge

---

## 📊 Performance Optimization

### Best Practices

**1. Lazy Loading Images**
```html
<img src="placeholder.jpg" data-src="actual-image.jpg" loading="lazy">
```

**2. Code Splitting**
```javascript
// Load heavy libraries only when needed
async function generatePDF() {
  const { jsPDF } = await import('./lib/jspdf/jspdf.umd.min.js');
  // Use jsPDF
}
```

**3. Caching**
```javascript
// Cache API responses
const cache = new Map();

async function getCachedData(key, fetcher) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  
  const data = await fetcher();
  cache.set(key, data);
  return data;
}
```

**4. Debouncing Search**
```javascript
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Usage
const searchQuestions = debounce(async (query) => {
  const results = await search(query);
  displayResults(results);
}, 300);
```

---

## 🔒 Security Best Practices

### 1. API Key Protection
```javascript
// NEVER commit API keys to Git
// Use environment variables

// ❌ BAD
const API_KEY = 'AIzaSy...actual_key';

// ✅ GOOD
const API_KEY = process.env.GEMINI_API_KEY;
```

### 2. Input Sanitization
```javascript
function sanitizeInput(input) {
  return input
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .trim();
}

const userInput = sanitizeInput(document.getElementById('question').value);
```

### 3. CSRF Protection
```javascript
const csrfToken = generateCSRFToken();
sessionStorage.setItem('csrf_token', csrfToken);

// Include in forms
document.getElementById('csrf-token').value = csrfToken;
```

### 4. Rate Limiting
```javascript
const rateLimiter = new RateLimiter(60, 1500);

await rateLimiter.wait();
const questions = await gemini.generateQuestions(...);
```

---

## 📈 Roadmap

### Phase 1: MVP (Week 1-12) ✅
- [x] Landing page
- [x] Authentication (Google OAuth, Email/Password)
- [x] Dashboard
- [x] Question Bank CRUD
- [x] AI Question Generation (Gemini)
- [x] PDF Generation
- [x] NCTB Textbook Upload
- [x] Basic collaboration

### Phase 2: Enhanced Features (Month 3-6)
- [ ] Book page photo scan (Gemini Vision)
- [ ] Advanced analytics
- [ ] Mobile app (PWA)
- [ ] Community marketplace
- [ ] Advanced gamification
- [ ] Multi-language support

### Phase 3: Scale (Month 6-12)
- [ ] Student portal (test-taking)
- [ ] Institutional admin panel
- [ ] Advanced reporting
- [ ] Integration with LMS
- [ ] API for third-party apps

---

## 📞 Support

### Contact
- 📧 Email: support@questioncraftbd.com
- 🌐 Website: https://questioncraftbd.netlify.app
- 💬 Community: [Discord/Telegram]
- 📝 Issues: [GitHub Issues](https://github.com/your-username/questioncraft-bd/issues)

### FAQ

**Q: কি সম্পূর্ণ বিনামূল্যে?**
A: হ্যাঁ! Platform 100% FREE। কোনো subscription, premium features, বা hidden costs নেই।

**Q: AI প্রশ্ন তৈরি করতে কত সময় লাগে?**
A: 20টি প্রশ্ন তৈরি হতে ~30 সেকেন্ড।

**Q: কতগুলো প্রশ্ন তৈরি করতে পারবো?**
A: 1,500 questions/day (Gemini free tier limit)। Most teachers এর জন্য যথেষ্ট।

**Q: Data কোথায় সংরক্ষিত হয়?**
A: আপনার নিজের Google Drive এ (15GB free)।

**Q: Offline কাজ করে?**
A: হ্যাঁ, basic features offline কাজ করে। Internet reconnect হলে sync হয়।

---

## 📄 License

MIT License

Copyright (c) 2024 QuestionCraft BD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 🙏 Acknowledgments

- [Google Gemini](https://ai.google.dev/) - FREE AI API
- [Supabase](https://supabase.com/) - Backend as a Service
- [Netlify](https://netlify.com/) - Hosting
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [jsPDF](https://github.com/parallax/jsPDF) - PDF generation
- [Lucide Icons](https://lucide.dev/) - Icons

**Special Thanks:**
- NCTB (National Curriculum and Textbook Board, Bangladesh)
- All teachers of Bangladesh 🇧🇩
- Open source community

---

## 🚀 Quick Commands

```bash
# Development
npm run dev          # Start local server
npm run build        # Build for production
npm run test         # Run tests

# Deployment
git push origin main # Auto-deploy to Netlify

# Database
npm run db:setup     # Setup Supabase tables
npm run db:migrate   # Run migrations
npm run db:seed      # Seed sample data
```

---

**Made with ❤️ for Teachers of Bangladesh 🇧🇩**

**বাংলাদেশের শিক্ষকদের জন্য ভালোবাসা নিয়ে তৈরি করা হয়েছে 🇧🇩**

---

**Version:** 1.0.0  
**Last Updated:** March 8, 2026  
**Status:** In Active Development 🚀
