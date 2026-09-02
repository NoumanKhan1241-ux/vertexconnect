import Link from "next/link";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { processSteps, services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Flexible support for outreach, customer care, and conversion-focused operations."
        description="We help businesses build communication workflows that are consistent, measurable, and ready to scale as demand grows."
        actions={[
          { label: "Book a consultation", href: "/contact" },
          { label: "See industries", href: "/industries", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Core service areas designed for real-world demand."
          description="Each offering is structured to be easy to adapt to specific client goals, campaign type, and internal processes."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="A process designed for clarity, quality, and performance."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-center">
                <div className="text-xs uppercase tracking-[0.24em] text-sky-300">Step {index + 1}</div>
                <div className="mt-3 text-base font-medium text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-8 text-center md:p-12">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">Need a tailored approach?</div>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Tell us what your operation needs.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            We can adapt workflows, team structure, scripts, and reporting to fit your business model and growth goals.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400">
              Request a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
