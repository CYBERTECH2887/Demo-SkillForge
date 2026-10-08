import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Briefcase, Zap } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillForge | Earn While You Learn",
  description: "Verify your skills and solve real company tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        {/* Modern Glassmorphic Navbar */}
        <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter text-slate-900 group">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                  <Zap size={20} fill="currentColor" />
                </div>
                SkillForge
              </Link>
              
              <div className="hidden md:flex space-x-8 items-center font-medium text-sm">
                <Link href="/assessment" className="text-slate-600 hover:text-orange-500 transition-colors">Skill Check</Link>
                <Link href="/tasks" className="text-slate-600 hover:text-orange-500 transition-colors">Marketplace</Link>
                <Link href="/passport" className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-orange-500 transition-all shadow-md hover:shadow-orange-500/30">
                  My Passport
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16 min-h-screen">{children}</main>
      </body>
    </html>
  );
}