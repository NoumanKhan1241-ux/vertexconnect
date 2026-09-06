import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { industries, industriesIntro } from "@/lib/site-data";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry Examples"
        title="Solutions Adaptable Across Sectors"
        description="Every business has different customers, challenges, and goals. Vertex Connect is built to adapt its communication solutions around the requirements of each campaign."
        actions={[
          { label: "Start a Conversation", href: "/contact" },
          { label: "Explore Services", href: "/services", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Potential Applications"
          title="Examples of Businesses Vertex Connect Can Support"
          description={industriesIntro}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.slug}
              className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-slate-900/80 p-7 shadow-lg transition hover:border-sky-400/40"
            >
              <div>
                <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {industry.problem}
                </p>

                <div className="mt-6 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                    How We Can Support
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200">
                    {industry.support}
                  </p>
                </div>

                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Applicable Services
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-lg bg-slate-950 px-2.5 py-1 text-xs text-slate-300 border border-white/5"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <Link
                  href={`/industries/${industry.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-8 text-center md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-white">Have a Specific Campaign in Mind?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Regardless of your industry, we structure outreach scripts, qualification standards, and reporting to match your exact business requirements.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 shadow-lg shadow-sky-500/20"
            >
              Discuss Your Campaign
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
