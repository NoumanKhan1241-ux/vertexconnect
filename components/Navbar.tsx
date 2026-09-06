"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { company, navigation } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3.5 group" aria-label="Vertex Connect Home">
          <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-slate-900/90 p-1.5 shadow-sm transition group-hover:border-sky-400/40">
            <Image
              src="/VC_Logo.png"
              alt="Vertex Connect Logo"
              width={44}
              height={44}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div>
            <div className="text-base font-bold tracking-tight text-white group-hover:text-sky-300 transition">
              {company.name}
            </div>
            <div className="text-[11px] font-medium tracking-wide text-sky-400">
              {company.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${isActive ? "text-sky-400" : "text-slate-300 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {company.phone && (
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-medium text-slate-200 hover:border-sky-400/60 hover:text-white transition"
              aria-label="Call Vertex Connect"
            >
              <Phone className="h-3.5 w-3.5 text-sky-400" />
              <span>{company.phone}</span>
            </a>
          )}

          {company.whatsapp && (
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition"
              aria-label="Chat with Vertex Connect on WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/10 transition hover:bg-sky-400 hover:shadow-sky-400/20"
          >
            Start a Conversation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-200 transition hover:border-slate-500 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((state) => !state)}
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-3.5 py-2.5 text-sm font-medium ${isActive ? "bg-sky-500/10 text-sky-400 font-semibold" : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-white/10">
              {company.phone && (
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm text-slate-300 hover:bg-slate-900"
                >
                  <Phone className="h-4 w-4 text-sky-400" />
                  <span>{company.phone}</span>
                </a>
              )}
              {company.whatsapp && (
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm text-emerald-300 hover:bg-slate-900"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Start a Conversation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
