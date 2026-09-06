import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { jobs } from "@/lib/site-data";

export function generateStaticParams() {
  return jobs.map((job) => ({ job: job.slug }));
}

type Props = {
  params: Promise<{ job: string }>;
};

export default async function JobDetailPage({ params }: Props) {
  const { job: jobSlug } = await params;
  const job = jobs.find((item) => item.slug === jobSlug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={job.department}
        title={job.title}
        description={job.summary}
        actions={[
          { label: "Apply Now", href: `/careers/${job.slug}/apply` },
          { label: "All Careers", href: "/careers", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Responsibilities" title="What You'll Do" />
            <ul className="mt-5 space-y-3 text-slate-300">
              {job.responsibilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Requirements" title="What We Look For" />
            <ul className="mt-5 space-y-3 text-slate-300">
              {job.requirements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Preferences" title="Nice to Have" />
              <ul className="mt-5 space-y-3 text-slate-300">
                {job.niceToHave.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Perks" title="Benefits & Environment" />
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
          <h2 className="text-3xl font-semibold text-white">Interested in This Role?</h2>
          <div className="mt-8 flex justify-center">
            <Link
              href={`/careers/${job.slug}/apply`}
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
            >
              Submit Application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
