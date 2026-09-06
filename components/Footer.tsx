import Image from "next/image";
import Link from "next/link";
import { company, navigation, services } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Vertex Connect Home">
              <Image
                src="/Logo.png"
                alt="Vertex Connect Logo"
                width={240}
                height={240}
                className="h-14 w-14 object-contain transition-transform group-hover:scale-105"
              />
              <div>
                <div className="text-base font-bold tracking-tight text-white">
                  {company.name}
                </div>
                <div className="text-[11px] font-medium tracking-wide text-sky-400">
                  {company.tagline}
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Professional calling, lead generation, sales, and customer support solutions for businesses around the world.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Headquartered in {company.location} • Serving Worldwide</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="transition hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Location & Inquiry</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li className="text-slate-200 font-medium">{company.location}</li>
              <li className="text-xs text-slate-400">Worldwide Service Availability</li>
              {company.phone && <li>{company.phone}</li>}
              {company.email && <li>{company.email}</li>}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex text-xs font-semibold text-sky-400 hover:text-sky-300 transition"
                >
                  Discuss Your Campaign →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
