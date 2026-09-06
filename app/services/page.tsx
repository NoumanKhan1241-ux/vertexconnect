import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { clientProcess, services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Seven Core Calling & Customer Acquisition Solutions"
        description="Vertex Connect provides flexible, purpose-driven communication services designed around your campaign goals, audience, and qualification criteria."
        actions={[
          { label: "Start a Conversation", href: "/contact" },
          { label: "Explore Industries", href: "/industries", variant: "secondary" },
        ]}
      />

      {/* Services Grid: All 7 Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comprehensive Solutions"
          title="Equally Available Across B2B and B2C Campaigns"
          description="All seven services are maintained as core capabilities. Each campaign is structured individually to match your audience and conversion objectives."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Pricing Models Section: CPL & CPA Explained */}
      <section className="bg-slate-900/50 py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                eyebrow="Commercial Framework"
                title="Performance-Aligned Campaign Models"
                description="Vertex Connect operates primarily using CPL (Cost Per Lead) and CPA (Cost Per Acquisition) campaign structures."
              />
              <p className="mt-5 text-base leading-8 text-slate-300">
                We do not use generic, fixed-price packages because every business has different qualification requirements, customer segments, and campaign complexity. Instead, we structure quotes based directly on the parameters of your campaign.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition shadow-md shadow-sky-500/20"
                >
                  <span>Request a Campaign Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-sky-400/20 bg-slate-950 p-8 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Model 01</span>
                  <span className="rounded-full bg-sky-500/10 border border-sky-400/30 px-3 py-1 text-xs font-semibold text-sky-300">
                    CPL
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">Cost Per Lead</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  You only pay for prospects that meet your pre-agreed qualification criteria (decision-maker status, specific operational need, verified contact information, and confirmed buying intent).
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Ideal for pipeline building and lead generation campaigns</span>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-500/20 bg-slate-950 p-8 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Model 02</span>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-300">
                    CPA
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">Cost Per Acquisition</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Compensation is aligned with verified customer acquisitions, closed transactions, or agreed conversion milestones, establishing direct commercial alignment.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Ideal for direct sales, telemarketing, and customer acquisition campaigns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Campaign Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Execution Process"
          title="From Inquiry to Ongoing Reporting"
          description="A consistent 7-step process designed to ensure campaign clarity and high-standard execution."
          center
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {clientProcess.map((step) => (
            <div
              key={step.stepNumber}
              className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  {step.stepNumber}
                </div>
                <div className="mt-2 text-sm font-semibold text-white">{step.title}</div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tailored Campaign CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-8 text-center md:p-14 shadow-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400">Let&apos;s Talk</div>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Discuss Your Campaign Requirements
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Tell us about your target market, outreach goals, or support needs. We will design a campaign structure tailored to your business.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 shadow-lg shadow-sky-500/20"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
