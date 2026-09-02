import Link from "next/link";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { jobs } from "@/lib/site-data";

export function generateStaticParams() {
  return jobs.map((job) => ({ job: job.slug }));
}

export default function JobDetailPage({ params }: { params: { job: string } }) {
  const jobSlug = params.job;
  const job = jobs.find((item) => item.slug === jobSlug);

  if (!job) {
    return <div className="mx-auto max-w-7xl px-4 py-20">Job not found.</div>;
  }

  return (
    <>
      <PageHero
        eyebrow={job.department}
        title={job.title}
        description={job.summary}
        actions={[
          { label: "Apply now", href: `/careers/${job.slug}/apply` },
          { label: "All jobs", href: "/careers", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Responsibilities" title="What you’ll do." />
            <ul className="mt-5 space-y-3 text-slate-300">
              {job.responsibilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Requirements" title="What we’re looking for." />
            <ul className="mt-5 space-y-3 text-slate-300">
              {job.requirements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Nice to have" title="Helpful experience and strengths." />
              <ul className="mt-5 space-y-3 text-slate-300">
                {job.niceToHave.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Benefits" title="What’s included." />
              <ul className="mt-5 space-y-3 text-slate-300">
                {job.benefits.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold text-white">Ready to apply?</h2>
          <div className="mt-8 flex justify-center">
            <Link href={`/careers/${job.slug}/apply`} className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400">
              Submit application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
