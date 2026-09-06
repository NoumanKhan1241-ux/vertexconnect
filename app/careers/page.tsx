import Link from "next/link";
import { Users } from "lucide-react";

import JobApplicationForm from "@/components/JobApplicationForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { careersEmptyState, jobs } from "@/lib/site-data";

export default function CareersPage() {
  const hasOpenings = jobs.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Careers at Vertex Connect"
        title="Build Your Career in Global Communication"
        description="We are creating a supportive, high-standard environment for individuals who take pride in professional communication, sales, and customer care."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Current Openings"
          title="Career Opportunities"
          description="Explore current roles or submit a general application for future opportunities."
        />

        {hasOpenings ? (
          <div className="mt-10 space-y-6">
            {jobs.map((job) => (
              <article
                key={job.slug}
                className="rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-md"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
                    <div className="mt-2 text-sm text-slate-400">
                      {job.department} • {job.location} • {job.employmentType}
                    </div>
                  </div>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-white"
                  >
                    View Role
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-8 sm:p-12 text-center shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-400/20 text-sky-400">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white">
              {careersEmptyState.heading}
            </h3>
            <p className="mt-2 text-base font-medium text-sky-300">
              {careersEmptyState.subheading}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
              {careersEmptyState.description}
            </p>
          </div>
        )}
      </section>

      {/* General Application Section */}
      <section className="bg-slate-900/50 py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
            <div>
              <SectionHeading
                eyebrow="Join Our Team"
                title="Submit a General Application"
                description="We keep all applications on file and review them as Vertex Connect expands its operational teams."
              />
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                  <div className="font-semibold text-white">Quality-Focused Culture</div>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    We emphasize professional standards, active listening, and continuous coaching.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                  <div className="font-semibold text-white">Global Reach</div>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Work on campaigns communicating with businesses and consumers worldwide.
                  </p>
                </div>
              </div>
            </div>

            <JobApplicationForm defaultPosition="General Application" />
          </div>
        </div>
      </section>
    </>
  );
}
