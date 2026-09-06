import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, HelpCircle, LineChart } from "lucide-react";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

type Props = {
  params: Promise<{ service: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Core Service"
        title={service.title}
        description={service.description}
        actions={[
          { label: "Start a Conversation", href: "/contact" },
          { label: "All Services", href: "/services", variant: "secondary" },
        ]}
      />

      {/* Business Problem & How Vertex Connect Helps */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-8 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-rose-300">
              The Operational Challenge
            </div>
            <h2 className="mt-3 text-2xl font-bold text-white">The Business Problem</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{service.problem}</p>
          </div>

          <div className="rounded-3xl border border-sky-500/20 bg-sky-500/5 p-8 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
              The Vertex Connect Solution
            </div>
            <h2 className="mt-3 text-2xl font-bold text-white">How Vertex Connect Helps</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{service.solution}</p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-slate-900/50 py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Strategy"
            title="Our Approach"
            description="How we structure and prepare this service to ensure consistent, high-standard execution."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950 p-6 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    Phase 0{index + 1}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Execution" title="Campaign Process" />
            <div className="mt-8 space-y-4">
              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 flex items-start gap-4 shadow-sm"
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-xs font-bold text-sky-300 border border-sky-400/20">
                    0{index + 1}
                  </div>
                  <div className="text-sm font-medium text-slate-200">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Value" title="Key Business Benefits" />
            <div className="mt-8 space-y-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 flex items-start gap-3.5 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                  <div className="text-sm text-slate-200 leading-relaxed">{benefit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Reporting & Campaign Accountability */}
      <section className="bg-slate-900/50 py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Accountability"
            title="Transparent Reporting"
            description="Clear daily or weekly reporting so you always have full visibility into outreach activity and outcomes."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.reporting.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950 p-6 flex flex-col justify-between shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 mb-4">
                  <LineChart className="h-4 w-4" />
                </div>
                <div className="text-sm text-slate-200 leading-relaxed">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title={`Frequently Asked About ${service.title}`}
          center
        />
        <div className="mt-10 space-y-4">
          {service.qa.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-white flex items-center gap-2.5">
                <HelpCircle className="h-4 w-4 text-sky-400 flex-shrink-0" />
                <span>{item.question}</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 pl-6.5">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-8 text-center md:p-14 shadow-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400">
            Campaign Setup
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to Discuss {service.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Tell us about your audience and goals. We will provide a campaign structure and quote under our flexible CPL or CPA models.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 shadow-lg shadow-sky-500/20"
            >
              Start a Conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-white"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
