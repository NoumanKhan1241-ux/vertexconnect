import Link from "next/link";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/lib/site-data";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Support built around the realities of different sectors and customer journeys."
        description="We design communication workflows that are tailored to the volume, nuance, and service expectations of each industry."
        actions={[
          { label: "Talk to us", href: "/contact" },
          { label: "Explore services", href: "/services", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Flexible support for businesses with different growth demands."
          description="These examples reflect common use cases and can be adapted to a specific business model or client process."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.slug} className="rounded-[2rem] border border-white/10 bg-slate-900 p-6">
              <h3 className="text-2xl font-semibold text-white">{industry.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{industry.problem}</p>
              <div className="mt-6 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-sky-300">How we support</div>
                <p className="mt-3 text-sm leading-7 text-slate-200">{industry.support}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {industry.services.map((service) => (
                  <li key={service}>• {service}</li>
                ))}
              </ul>
              <Link href={`/industries/${industry.slug}`} className="mt-6 inline-flex text-sm font-medium text-sky-300 hover:text-sky-200">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
