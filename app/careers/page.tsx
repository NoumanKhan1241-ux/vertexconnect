import Link from "next/link";

import JobApplicationForm from "@/components/JobApplicationForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { jobs } from "@/lib/site-data";

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build stronger communication operations with a team that cares about quality."
        description="We’re creating a supportive environment for people who enjoy structured work, customer conversations, and professional growth."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open roles"
          title="Current opportunities."
          description="Placeholder job postings are ready to be replaced with authentic hiring details once approved."
        />
        <div className="mt-10 space-y-6">
          {jobs.map((job) => (
            <article key={job.slug} className="rounded-[2rem] border border-white/10 bg-slate-900 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
                  <div className="mt-2 text-sm text-slate-400">
                    {job.department} • {job.location} • {job.employmentType}
                  </div>
                </div>
                <Link href={`/careers/${job.slug}`} className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-white">
                  View role
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Join us"
                title="A work culture built around communication, accountability, and growth."
                description="This section is a placeholder for real hiring information, culture details, and onboarding expectations."
              />
            </div>
            <JobApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
