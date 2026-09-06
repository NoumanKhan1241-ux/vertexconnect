import { notFound } from "next/navigation";

import JobApplicationForm from "@/components/JobApplicationForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { jobs } from "@/lib/site-data";

export function generateStaticParams() {
  return jobs.map((job) => ({ job: job.slug }));
}

type Props = {
  params: Promise<{ job: string }>;
};

export default async function JobApplyPage({ params }: Props) {
  const { job: jobSlug } = await params;
  const job = jobs.find((item) => item.slug === jobSlug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Application"
        title={`Apply for ${job.title}`}
        description="Submit your details below and our team will review your application."
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start">
          <div>
            <SectionHeading
              eyebrow="Position Overview"
              title={job.title}
              description={job.summary}
            />
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-5 text-sm text-slate-300 space-y-2">
              <div><span className="font-semibold text-white">Department:</span> {job.department}</div>
              <div><span className="font-semibold text-white">Location:</span> {job.location}</div>
              <div><span className="font-semibold text-white">Type:</span> {job.employmentType}</div>
            </div>
          </div>

          <JobApplicationForm defaultPosition={job.title} />
        </div>
      </section>
    </>
  );
}
