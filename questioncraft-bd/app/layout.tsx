import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "sonner";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
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
  title: "QuestionCraft BD | AI-চালিত স্মার্ট প্রশ্নপত্র তৈরির প্ল্যাটফর্ম",
  description:
    "বাংলাদেশের শিক্ষকদের জন্য তৈরি QuestionCraft BD এখন NCTB-সামঞ্জস্যপূর্ণ প্রশ্নপত্র, মূল্যায়ন কাঠামো এবং দ্রুত PDF এক্সপোর্টকে এক জায়গায় আনে।",
  keywords: ["প্রশ্নপত্র", "Bangladesh", "Education", "AI", "NCTB", "শিক্ষক"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className={`${hindSiliguri.className} antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster
            position="top-right"
            richColors
            toastOptions={{
              style: {
                fontFamily: "'Hind Siliguri', 'Inter', sans-serif",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
