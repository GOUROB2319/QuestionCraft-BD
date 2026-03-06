# ⚡ QuestionCraft BD — Quick Start Guide
## আজই শুরু করুন (Day 1 Actions)

**তারিখ:** March 5, 2026  
**লক্ষ্য:** প্রথম দিনে Project Setup সম্পন্ন করা

---

## 🎯 আজকের লক্ষ্য (Day 1):

- ✅ Next.js project initialize
- ✅ Supabase setup
- ✅ Database tables create
- ✅ First commit to Git

**Total Time:** 2-3 hours

---

## 📝 Step-by-Step Actions

### Action 1: Codex এ যান

আপনার MCP setup এর কারণে Codex সরাসরি:
- ✅ Stitch designs access করতে পারবে
- ✅ Supabase এ tables তৈরি করতে পারবে  
- ✅ Antigravity orchestrate করবে

**Link:** আপনার Codex interface খুলুন

---

### Action 2: প্রথম Prompt Run করুন

**Codex এ copy-paste করুন:**

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
- sonner (for toast notifications)

Tailwind config update করুন:
- Primary color: #10B981 (emerald)
- Secondary color: #FBBF24 (amber)
- Font: Hind Siliguri for Bengali

package.json এ Hind Siliguri font Google Fonts থেকে import করার জন্য layout.tsx তে configuration দিন।

সম্পূর্ণ folder structure তৈরি করুন:
app/
  ├── (auth)/
  │   ├── login/page.tsx
  │   ├── register/page.tsx
  │   └── verify/page.tsx
  ├── (dashboard)/
  │   ├── dashboard/page.tsx
  │   ├── questions/
  │   │   ├── create/page.tsx
  │   │   └── bank/page.tsx
  │   ├── papers/page.tsx
  │   └── settings/page.tsx
  ├── api/
  │   ├── auth/
  │   ├── questions/
  │   └── papers/
  ├── legal/
  │   ├── terms/page.tsx
  │   └── privacy/page.tsx
  └── page.tsx (Landing)

components/
  ├── ui/ (ShadCN components)
  ├── layout/
  │   ├── Navbar.tsx
  │   ├── Sidebar.tsx
  │   └── Footer.tsx
  ├── questions/
  └── papers/

lib/
  ├── supabase.ts
  ├── types.ts
  └── utils.ts

সব folder এ placeholder page.tsx file তৈরি করুন যাতে folder structure complete হয়।

README.md তৈরি করুন project এর বিবরণ সহ।
```

**Expected Output:**
- ✅ `questioncraft-bd` folder তৈরি হবে
- ✅ All dependencies installed
- ✅ Folder structure ready
- ✅ Can run `npm run dev`

**Verification:**
```bash
cd questioncraft-bd
npm run dev
```
Open: http://localhost:3000 (default Next.js page দেখবেন)

---

### Action 3: Supabase Configure করুন

**Codex Prompt #2:**

```
Supabase configuration সেটআপ করুন QuestionCraft BD এর জন্য।

1. .env.local file তৈরি করুন:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

(আমি পরে values দেব, আপাতত placeholder রাখুন)

2. lib/supabase.ts file তৈরি করুন:
- createClientComponentClient (for client components)
- createServerComponentClient (for server components)
- createRouteHandlerClient (for API routes)

Code example দিন Next.js 14 App Router এর জন্য।

3. middleware.ts তৈরি করুন root এ:
- Protected routes: /dashboard/*, /questions/*, /papers/*, /settings/*
- Public routes: /, /login, /register, /verify, /legal/*
- If not authenticated → redirect to /login
- If authenticated and trying to access /login → redirect to /dashboard

4. lib/types.ts এ TypeScript interfaces define করুন:

interface User {
  id: string;
  email: string;
  full_name: string;
  institution: string;
  role: 'teacher' | 'admin';
  created_at: string;
  updated_at: string;
}

interface Question {
  id: string;
  user_id: string;
  title: string;
  type: 'mcq' | 'short' | 'broad';
  subject: string;
  topic?: string;
  class_level: string;
  difficulty: 'easy' | 'medium' | 'hard';
  language: 'bangla' | 'english' | 'both';
  content: any; // JSONB
  marks: number;
  created_at: string;
  updated_at: string;
}

interface Paper {
  id: string;
  user_id: string;
  title: string;
  subject: string;
  class_level: string;
  exam_type: string;
  total_marks: number;
  duration_minutes: number;
  metadata: any; // JSONB
  created_at: string;
  updated_at: string;
}

Complete code দিন production-ready।
```

**Expected Output:**
- ✅ .env.local file created
- ✅ Supabase client configured
- ✅ Middleware protecting routes
- ✅ TypeScript types defined

---

### Action 4: Supabase Database Setup

এই step এ আপনি manually Supabase dashboard এ যাবেন অথবা Codex কে SQL generate করতে বলবেন।

**Option A: Codex Prompt #3 (Recommended):**

```
আমার Supabase project এ SQL migration run করার জন্য complete SQL script তৈরি করুন।

Tables:

1. users (extends auth.users)
CREATE TABLE public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  institution TEXT,
  role TEXT DEFAULT 'teacher' CHECK (role IN ('teacher', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

2. questions
CREATE TABLE public.questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('mcq', 'short', 'broad')),
  subject TEXT NOT NULL,
  topic TEXT,
  class_level TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  language TEXT NOT NULL CHECK (language IN ('bangla', 'english', 'both')),
  content JSONB NOT NULL,
  marks INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

3. papers
CREATE TABLE public.papers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  class_level TEXT NOT NULL,
  exam_type TEXT,
  total_marks INTEGER NOT NULL,
  duration_minutes INTEGER NOT NULL,
  metadata JSONB,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

4. question_paper_association (junction table)
CREATE TABLE public.question_paper_association (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  paper_id UUID NOT NULL REFERENCES public.papers(id) ON DELETE CASCADE,
  order_index INTEGER NOT NULL,
  section TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(paper_id, question_id)
);

Indexes তৈরি করুন:
- questions(user_id)
- questions(type)
- questions(subject)
- papers(user_id)
- papers(status)
- question_paper_association(paper_id)
- question_paper_association(question_id)

Row Level Security (RLS) policies:

users table:
- Users can SELECT their own row
- Users can UPDATE their own row

questions table:
- Users can INSERT own questions
- Users can SELECT own questions
- Users can UPDATE own questions
- Users can DELETE own questions

papers table:
- Same as questions

question_paper_association table:
- Users can manage associations for their own papers

Complete SQL script দিন যা আমি Supabase SQL Editor এ run করতে পারব।

Script এর শুরুতে:
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

এবং শেষে updated_at trigger functions।
```

**Manual Steps:**
1. Supabase Dashboard → SQL Editor
2. Generated SQL paste করুন
3. Run button click করুন
4. Verify: Tables tab এ 4টি table দেখবেন

**Verification Query:**
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
```

Expected result: users, questions, papers, question_paper_association

---

### Action 5: Environment Variables Setup

1. Supabase Dashboard থেকে API keys copy করুন:
   - Project Settings → API
   - URL copy করুন
   - anon/public key copy করুন
   - service_role key copy করুন (⚠️ secret!)

2. `.env.local` file update করুন:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

3. Server restart করুন:
```bash
npm run dev
```

---

### Action 6: First Git Commit

```bash
cd questioncraft-bd
git init
git add .
git commit -m "feat: Initial QuestionCraft BD setup with Next.js 14, Supabase, and folder structure"
```

**Optional:** GitHub repository তৈরি করুন এবং push করুন
```bash
git remote add origin https://github.com/yourusername/questioncraft-bd.git
git branch -M main
git push -u origin main
```

---

## ✅ Day 1 Completion Checklist

- [ ] Next.js project initialized ✅
- [ ] All dependencies installed ✅
- [ ] Folder structure created ✅
- [ ] Supabase configured ✅
- [ ] Database tables created ✅
- [ ] Environment variables set ✅
- [ ] Middleware protecting routes ✅
- [ ] TypeScript types defined ✅
- [ ] Git repository initialized ✅
- [ ] First commit done ✅

---

## 🚀 What's Next (Day 2)?

**Tomorrow's Focus:** Phase 1 - Authentication Flow

1. Landing Page (Codex Prompt #4)
2. Registration Page (Codex Prompt #5)
3. Login Page (Codex Prompt #6)
4. OTP Verification (Codex Prompt #7)

**Preparation for Day 2:**
- Review Stitch designs for auth pages
- Ensure Supabase Auth is enabled in dashboard
- Configure OAuth providers (Google) if needed

---

## 💡 Pro Tips for Day 1:

1. **Don't rush:** Take time to understand the setup
2. **Test everything:** Run `npm run dev` after each step
3. **Read Codex output:** Don't just copy-paste, understand it
4. **Keep notes:** Document any custom changes
5. **Commit often:** Git commit after each major step

---

## 🚨 Common Day 1 Issues:

### Issue 1: Dependencies not installing
**Solution:** Delete `node_modules` and `package-lock.json`, then `npm install` again

### Issue 2: Supabase connection error
**Solution:** 
- Check `.env.local` file exists
- Check API keys are correct
- Restart dev server

### Issue 3: TypeScript errors
**Solution:** 
- Run `npm run type-check`
- Fix any missing types
- Restart VS Code TypeScript server

### Issue 4: Middleware not working
**Solution:**
- Check `middleware.ts` is in root directory (not inside app/)
- Check matcher patterns
- Console log requests to debug

---

## 📞 Need Help?

**If stuck on Day 1:**

**Codex Debug Prompt:**
```
আমার QuestionCraft BD setup এ এই error আসছে:
[error message]

এই error fix করার জন্য step-by-step guide দিন।
```

**Checklist Debug:**
```
QuestionCraft BD setup verification করুন:
1. npm run dev চলছে কিনা?
2. http://localhost:3000 open হচ্ছে কিনা?
3. .env.local file আছে কিনা?
4. Supabase tables তৈরি হয়েছে কিনা?

প্রতিটি point verify করুন এবং missing থাকলে fix করুন।
```

---

## 🎯 Success Metrics for Day 1:

**You've successfully completed Day 1 if:**

- ✅ `npm run dev` runs without errors
- ✅ http://localhost:3000 shows Next.js default page
- ✅ Supabase dashboard shows 4 tables
- ✅ `.env.local` has all 3 variables
- ✅ Git shows first commit
- ✅ TypeScript has no errors

**Congratulations!** 🎉 You're ready for Day 2!

---

**Total Time Spent Today:** ⏱️ 2-3 hours  
**Tomorrow's Goal:** Build Authentication Flow (4-5 hours)

**Good luck!** আগামীকাল দেখা হবে! 🚀
