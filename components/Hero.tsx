import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, Layers, LineChart } from "lucide-react";
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_45%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="relative z-10 flex flex-col justify-center">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                {eyebrow}
              </p>
            </div>
          )}
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 shadow-lg shadow-sky-500/20"
                >
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-white"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {stats && (
            <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.value} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-base font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="w-full max-w-xl rounded-[32px] border border-slate-700/80 bg-slate-900/90 p-6 sm:p-8 shadow-2xl shadow-slate-950/60 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Campaign Architecture
                </div>
                <div className="mt-1.5 text-lg font-semibold text-white">
                  Vertex Connect Operating Model
                </div>
              </div>
              <div className="rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
                Worldwide
              </div>
            </div>

            <div className="mt-6 space-y-3.5">
              <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300 border border-sky-400/20">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Pricing Framework</div>
                  <div className="text-sm font-medium text-white mt-0.5">Performance Models: CPL & CPA</div>
                  <div className="text-xs text-slate-300 mt-1">Cost Per Lead & Cost Per Acquisition aligned with defined campaign objectives.</div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  <Globe2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Service Coverage</div>
                  <div className="text-sm font-medium text-white mt-0.5">7 Core Calling & Support Solutions</div>
                  <div className="text-xs text-slate-300 mt-1">Inbound, outbound, lead gen, appointment setting, cold calling, sales, & customer support.</div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                  <LineChart className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Transparent Accountability</div>
                  <div className="text-sm font-medium text-white mt-0.5">Daily or Weekly Reporting</div>
                  <div className="text-xs text-slate-300 mt-1">Clear call logs, disposition tracking, and transparent performance visibility.</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Conversations with Purpose
              </span>
              <span>Rawalpindi, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
