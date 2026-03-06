# 📝 QuestionCraft BD

> AI-Powered Exam Question Paper Creation Platform for Bangladesh

বাংলাদেশী শিক্ষকদের জন্য বিশেষভাবে ডিজাইন করা AI প্রযুক্তি ব্যবহার করে মিনিটে তৈরি করুন NCTB কারিকুলাম অনুযায়ী প্রশ্নপত্র।

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 Features

### ✅ Phase 1 (MVP - Months 1-3)
- 🔐 **User Authentication** — Email/Phone + Google OAuth
- ✍️ **Question Creation** — MCQ, Short, Broad Questions
- 🏦 **Question Bank** — Personal library with search & filters
- 📋 **Paper Builder** — Drag-drop question arrangement
- 📄 **PDF Export** — Print-ready format with Bangla support
- 🌏 **Bilingual** — Full Bangla + English interface

### 🤖 Phase 2 (AI Integration - Months 3-6)
- ✨ **AI Question Generator** — Claude/OpenAI powered
- 📚 **NCTB Curriculum** — Aligned question generation
- 🎯 **Difficulty Control** — Easy/Medium/Hard
- 🔄 **AI Review** — Quality checking & improvements

### 🚀 Phase 3 (Scale - Months 6-12)
- 🏫 **Institution Accounts** — Team management
- 💳 **Subscription System** — Free/Pro/Institution tiers
- 📊 **Analytics Dashboard** — Usage insights
- 🏛️ **Government Templates** — BCS, PSC, HSC formats

---

## 🎯 Problem We're Solving

### Current Pain Points:
- ⏰ Teachers spend **hours** creating question papers manually
- 📝 Inconsistent formatting and quality
- 🎓 Difficult to align with NCTB curriculum
- 🖨️ Complex to create print-ready PDFs with Bangla font

### Our Solution:
- ⚡ Create professional papers in **minutes**
- 🤖 AI-powered question generation
- ✅ NCTB syllabus compliance
- 📄 One-click PDF export

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + ShadCN UI
- **State Management:** Zustand
- **Forms:** React Hook Form
- **PDF Generation:** Puppeteer / React-PDF
- **Icons:** Material Symbols

### Backend
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Storage:** Supabase Storage
- **API:** Next.js API Routes

### AI Integration (Phase 2)
- **Primary:** Claude API (Anthropic)
- **Secondary:** OpenAI GPT-4 API
- **Vector DB:** Pinecone (for NCTB curriculum)

### DevOps & Deployment
- **Hosting:** Vercel
- **Database Cloud:** Supabase Cloud
- **CDN:** Vercel Edge Network
- **Monitoring:** Vercel Analytics
- **CI/CD:** GitHub Actions

---

## 📁 Project Structure

```
questioncraft-bd/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth pages group
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── verify/
│   │       └── page.tsx
│   ├── (dashboard)/              # Protected dashboard group
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── questions/
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   ├── bank/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── papers/
│   │   │   ├── create/
│   │   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── legal/                    # Legal pages
│   │   ├── terms/
│   │   └── privacy/
│   ├── api/                      # API Routes
│   │   ├── auth/
│   │   │   ├── register/
│   │   │   ├── login/
│   │   │   └── verify/
│   │   ├── questions/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   ├── papers/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       └── export/
│   │   └── ai/                   # Phase 2
│   │       ├── generate/
│   │       └── review/
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── components/
│   ├── ui/                       # ShadCN UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── questions/
│   │   ├── QuestionCard.tsx
│   │   ├── QuestionForm.tsx
│   │   └── QuestionList.tsx
│   └── papers/
│       ├── PaperBuilder.tsx
│       ├── PaperPreview.tsx
│       └── PaperPDF.tsx
├── lib/
│   ├── supabase.ts               # Supabase client
│   ├── types.ts                  # TypeScript types
│   ├── utils.ts                  # Utility functions
│   ├── constants.ts              # Constants
│   └── validations.ts            # Zod schemas
├── hooks/
│   ├── useAuth.ts
│   ├── useQuestions.ts
│   └── usePapers.ts
├── styles/
│   └── globals.css
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── .env.local.example
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── PRD.md                        # Product Requirements Document
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/questioncraft-bd.git
cd questioncraft-bd
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# AI APIs (Phase 2)
ANTHROPIC_API_KEY=your_claude_api_key
OPENAI_API_KEY=your_openai_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Set up Supabase database**

Run the SQL migrations in your Supabase project:

```sql
-- See /supabase/migrations/001_initial_schema.sql
```

Or use the Supabase CLI:
```bash
npx supabase db push
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

6. **Open in browser**
```
http://localhost:3000
```

---

## 📊 Database Schema

### Core Tables

**users**
```sql
- id (UUID, PK)
- email (TEXT, UNIQUE)
- full_name (TEXT)
- institution (TEXT)
- role (TEXT) -- teacher, admin, institution
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

**questions**
```sql
- id (UUID, PK)
- user_id (UUID, FK → users)
- title (TEXT)
- type (TEXT) -- mcq, short, broad
- subject (TEXT)
- topic (TEXT)
- class_level (TEXT)
- difficulty (TEXT) -- easy, medium, hard
- language (TEXT) -- bangla, english, both
- content (JSONB) -- question data
- marks (INTEGER)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

**papers**
```sql
- id (UUID, PK)
- user_id (UUID, FK → users)
- title (TEXT)
- subject (TEXT)
- class_level (TEXT)
- exam_type (TEXT)
- total_marks (INTEGER)
- duration_minutes (INTEGER)
- question_ids (UUID[])
- metadata (JSONB)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

See [PRD.md](PRD.md) for complete schema.

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register       - Register new user
POST   /api/auth/login          - User login
POST   /api/auth/verify-otp     - Verify OTP
POST   /api/auth/logout         - User logout
GET    /api/auth/me             - Get current user
```

### Questions
```
GET    /api/questions           - List questions (with filters)
POST   /api/questions           - Create question
GET    /api/questions/:id       - Get single question
PUT    /api/questions/:id       - Update question
DELETE /api/questions/:id       - Delete question
```

### Papers
```
GET    /api/papers              - List papers
POST   /api/papers              - Create paper
GET    /api/papers/:id          - Get paper
PUT    /api/papers/:id          - Update paper
DELETE /api/papers/:id          - Delete paper
POST   /api/papers/:id/export   - Generate PDF
```

### AI (Phase 2)
```
POST   /api/ai/generate-questions
POST   /api/ai/review-question
POST   /api/ai/generate-answer
```

---

## 🎨 Design System

### Colors
```typescript
Primary: #10B981 (Emerald 500)
Secondary: #FBBF24 (Amber 400)
Background: #F9FAFB (Gray 50)
Dark: #111827 (Gray 900)
```

### Typography
```typescript
Font Family: "Hind Siliguri" (Bangla), sans-serif
Sizes:
  - Heading 1: 48-60px (bold)
  - Heading 2: 36-48px (bold)
  - Body: 16px (regular)
  - Small: 13-14px
```

### Components
- All buttons: `rounded-xl` (16px radius)
- Cards: `rounded-2xl` to `rounded-3xl` (24-32px)
- Shadows: Subtle, never harsh
- Glass-morphism: `backdrop-blur` + semi-transparent white

---

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Type Checking
```bash
npm run type-check
```

---

## 📦 Build & Deploy

### Production Build
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel deploy
```

### Environment Variables (Production)
Set these in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

---

## 🗺️ Roadmap

### ✅ Phase 1: Foundation (Weeks 1-3)
- [x] Project setup
- [x] Authentication
- [x] Basic UI
- [ ] Landing page
- [ ] Registration/Login

### 🚧 Phase 2: Core Features (Weeks 4-8)
- [ ] Question creator
- [ ] Question bank
- [ ] Paper builder
- [ ] PDF export
- [ ] Bangla support

**Target:** MVP Launch (Week 8)

### 🔮 Phase 3: AI Integration (Weeks 9-12)
- [ ] AI question generator
- [ ] NCTB curriculum data
- [ ] Difficulty control
- [ ] AI review system

**Target:** AI Features Live (Week 12)

### 🎯 Phase 4: Scale (Months 4-6+)
- [ ] Institution accounts
- [ ] Subscription system
- [ ] Analytics
- [ ] Government templates
- [ ] Mobile app

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use Prettier for formatting
- Write meaningful commit messages
- Add tests for new features

---

## 🐛 Known Issues

- [ ] PDF export with complex Bangla characters needs optimization
- [ ] Dark mode toggle state not persistent (will fix in Phase 1)
- [ ] Mobile responsiveness on question editor (will fix in Phase 2)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Developed with ❤️ for Bangladesh's Teachers**

- **Project Lead:** [Your Name]
- **Tech Stack:** Next.js + Supabase + AI
- **Design:** Modern, Clean, Professional

---

## 📞 Contact & Support

- **Email:** support@questioncraft.bd
- **Website:** https://questioncraft.bd
- **GitHub:** https://github.com/yourusername/questioncraft-bd
- **Issues:** https://github.com/yourusername/questioncraft-bd/issues

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ShadCN UI](https://ui.shadcn.com/) - Component library
- [Anthropic](https://anthropic.com/) - Claude API (Phase 2)
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📈 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/questioncraft-bd?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/questioncraft-bd?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/questioncraft-bd)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/questioncraft-bd)

---

**Made with 💚 for Teachers of Bangladesh**

*"Empowering educators, one question at a time."* 🇧🇩
