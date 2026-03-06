# 🎨 Complete Styling & Design Prompt for Antigravity

Copy this entire prompt and paste it into Antigravity/Codex:

---

## TASK: Transform Raw QuestionCraft BD Code into Professional Designed Application

I have a Next.js application that's been generated but it's missing all styling and design. The app currently shows raw unstyled HTML/text. I need you to:

### CRITICAL: Apply Complete Design System

**1. Fix Tailwind CSS Configuration**

Update `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        secondary: {
          DEFAULT: '#FBBF24',
          50: '#FFFBEB',
          100: '#FEF3C7',
          400: '#FBBF24',
          500: '#F59E0B',
        },
        accent: '#059669',
        background: {
          light: '#F9FAFB',
          dark: '#111827',
        }
      },
      fontFamily: {
        sans: ['Hind Siliguri', 'Inter', 'system-ui', 'sans-serif'],
        bengali: ['Hind Siliguri', 'sans-serif'],
        display: ['Hind Siliguri', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
export default config
```

**2. Update `app/globals.css`**

Replace the entire file with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import Fonts */
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Hind Siliguri', 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Bengali Text */
.bengali-text {
  font-family: 'Hind Siliguri', sans-serif;
}

/* Material Symbols */
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { transform: translateX(-10px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}

/* Utility Classes */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Component Base Styles */
@layer components {
  .btn-primary {
    @apply bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-primary/20 active:scale-95;
  }
  
  .btn-secondary {
    @apply bg-white hover:bg-gray-50 text-primary font-semibold py-3 px-6 rounded-xl border-2 border-primary transition-all duration-200;
  }
  
  .card {
    @apply bg-white rounded-2xl shadow-lg border border-gray-100 p-6;
  }
  
  .input-field {
    @apply w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none;
  }
}
```

**3. Update Root Layout (`app/layout.tsx`)**

```typescript
import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuestionCraft BD - AI প্রশ্নপত্র তৈরির প্ল্যাটফর্ম",
  description: "বাংলাদেশের জন্য বিশেষভাবে তৈরি AI-চালিত প্রশ্নপত্র তৈরির প্ল্যাটফর্ম",
  keywords: ["প্রশ্নপত্র", "Bangladesh", "Education", "AI", "NCTB"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${hindSiliguri.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

**4. Create Styled Landing Page (`app/page.tsx`)**

Transform the current raw landing page into this professionally styled version:

```typescript
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                QuestionCraft <span className="text-primary">BD</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-primary font-medium transition-colors">
                ফিচার
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">
                কীভাবে কাজ করে
              </a>
              <a href="#about" className="text-gray-600 hover:text-primary font-medium transition-colors">
                আমাদের সম্পর্কে
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="hidden sm:block text-gray-700 hover:text-primary font-semibold transition-colors"
              >
                লগইন
              </Link>
              <Link
                href="/register"
                className="bg-primary hover:bg-primary-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all active:scale-95"
              >
                শুরু করুন
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <span className="material-symbols-outlined text-lg">auto_awesome</span>
            AI চালিত স্মার্ট প্রশ্নপত্র তৈরির প্ল্যাটফর্ম
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            স্মার্ট প্রশ্নপত্র তৈরি করুন
            <br />
            <span className="text-primary">AI এর সাহায্যে</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in">
            বাংলাদেশী শিক্ষকদের জন্য বিশেষভাবে ডিজাইন করা AI প্রযুক্তি ব্যবহার করে মিনিটেই তৈরি করুন NCTB কারিকুলাম অনুযায়ী প্রশ্নপত্র। সময় বাঁচান, মান বৃদ্ধি করুন।
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">rocket_launch</span>
              এখনই শুরু করুন
            </Link>
            <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-200 transition-all">
              <span className="material-symbols-outlined">play_circle</span>
              ডেমো দেখুন
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'groups', label: 'শিক্ষক ব্যবহারকারী', value: '৯০০০+' },
              { icon: 'description', label: 'প্রশ্নপত্র তৈরি', value: '৫০০০+' },
              { icon: 'menu_book', label: 'বই সংগ্রহ', value: '১০০+' },
              { icon: 'sentiment_satisfied', label: 'সন্তুষ্ট ব্যবহারকারী', value: '৯৮%' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">{stat.icon}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              সহজ প্রক্রিয়া
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              মাত্র ৩টি ধাপে তৈরি করুন
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              আমাদের সহজ প্রক্রিয়া অনুসরণ করে মিনিটেই তৈরি করুন মানসম্মত প্রশ্নপত্র
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '১',
                title: 'শ্রেণী ও বিষয় নির্বাচন',
                description: 'আপনার শ্রেণী এবং বিষয় নির্বাচন করুন। আমাদের সিস্টেম NCTB কারিকুলাম অনুসরণ করে।',
                icon: 'school',
              },
              {
                step: '২',
                title: 'কাস্টমাইজেশন করুন',
                description: 'প্রশ্নের ধরন, সংখ্যা, এবং কঠিনতা নির্ধারণ করুন। AI আপনার জন্য উপযুক্ত প্রশ্ন তৈরি করবে।',
                icon: 'tune',
              },
              {
                step: '৩',
                title: 'তৈরি ও ডাউনলোড',
                description: 'এক ক্লিকে প্রিন্ট-রেডি PDF ডাউনলোড করুন। সম্পাদনা ও শেয়ার করুন যেকোনো সময়।',
                icon: 'download',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 border border-emerald-100 hover:shadow-2xl transition-all group">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">psychology</span>
            </div>
            <span className="text-2xl font-bold">
              QuestionCraft <span className="text-primary">BD</span>
            </span>
          </div>
          <p className="text-gray-400 mb-8">
            শিক্ষার ভবিষ্যৎ এখন আপনার হাতে
          </p>
          <div className="text-sm text-gray-500">
            © ২০২৪ QuestionCraft BD. সকল অধিকার সংরক্ষিত।
          </div>
        </div>
      </footer>
    </div>
  );
}
```

**5. Install Required Packages**

Make sure these are in your `package.json`:

```json
{
  "dependencies": {
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.7",
    "@tailwindcss/typography": "^0.5.10",
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3.4.0",
    "typescript": "^5"
  }
}
```

Run: `npm install`

**6. Update PostCSS Config (`postcss.config.js`)**

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**7. Create Component Library**

Create `components/ui/Button.tsx`:

```typescript
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all active:scale-95 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-600 text-white shadow-lg shadow-primary/20',
    secondary: 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200',
    outline: 'bg-transparent hover:bg-primary/5 text-primary border-2 border-primary',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

---

## EXECUTE THIS PLAN:

1. Update all the files mentioned above
2. Make sure Tailwind CSS is properly configured
3. Import Google Fonts (Hind Siliguri + Material Symbols)
4. Apply the design system colors and styling
5. Transform the raw landing page to the styled version
6. Test in browser at http://localhost:3000

## EXPECTED RESULT:

- Beautiful gradient backgrounds
- Proper Bengali font (Hind Siliguri)
- Emerald green (#10B981) primary color throughout
- Material icons working
- Smooth animations
- Responsive design
- Professional card components
- Hover effects and transitions
- Shadow effects
- Proper spacing and typography

## VERIFICATION:

After implementation, the landing page should have:
✅ Sticky navigation with logo and menu
✅ Hero section with gradient background
✅ Animated badge and headline
✅ Stats cards with icons
✅ "How it Works" section with 3 steps
✅ Footer
✅ All text in Bengali (Hind Siliguri font)
✅ Primary emerald color (#10B981)
✅ Smooth hover effects and animations

Execute this complete styling transformation now!
