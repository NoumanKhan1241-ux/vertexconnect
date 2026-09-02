import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { type Stat } from "@/lib/site-data";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: Stat[];
};

export default function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_40%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="relative z-10">
          {eyebrow && (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{description}</p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
                >
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-white"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {stats && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/3 p-4">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="w-full max-w-xl rounded-[32px] border border-slate-700/80 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/50">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Campaign overview</div>
                <div className="mt-2 text-xl font-medium text-white">Operations dashboard</div>
              </div>
              <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Live
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950/80 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Qualified leads</div>
                <div className="mt-3 text-3xl font-semibold text-white">1,240</div>
                <div className="mt-2 text-sm text-emerald-300">+12.4% this month</div>
              </div>
              <div className="rounded-2xl bg-slate-950/80 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Conversion rate</div>
                <div className="mt-3 text-3xl font-semibold text-white">XX%</div>
                <div className="mt-2 text-sm text-sky-300">Placeholder metric</div>
              </div>
              <div className="rounded-2xl bg-slate-950/80 p-4 sm:col-span-2">
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span>Pipeline status</span>
                  <span>Q2</span>
                </div>
                <div className="space-y-3">
                  {[82, 66, 90, 58].map((value, index) => (
                    <div key={value}>
                      <div className="mb-1 flex justify-between text-xs text-slate-300">
                        <span>Channel {index + 1}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
