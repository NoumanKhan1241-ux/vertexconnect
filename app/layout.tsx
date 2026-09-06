import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { company } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: company.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body
        className="min-h-full bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-slate-950"
        style={{ backgroundColor: "#020617", color: "#f8fafc" }}
      >
        <Navbar />
        <main className="flex-1 bg-slate-950 text-slate-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
