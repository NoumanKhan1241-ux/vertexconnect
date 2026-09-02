import JobApplicationForm from "@/components/JobApplicationForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { jobs } from "@/lib/site-data";

export function generateStaticParams() {
  return jobs.map((job) => ({ job: job.slug }));
}

export default function JobApplyPage({ params }: { params: { job: string } }) {
  const jobSlug = params.job;
  const job = jobs.find((item) => item.slug === jobSlug);

  if (!job) {
    return <div className="mx-auto max-w-7xl px-4 py-20">Job not found.</div>;
  }

  return (
    <>
      <PageHero
        eyebrow="Apply"
        title={`Apply for ${job.title}`}
        description="Tell us a bit about yourself and we’ll review your application for this role."
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Role summary"
              title={job.title}
              description={job.summary}
            />
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-5 text-sm text-slate-300">
              <div>{job.department}</div>
              <div className="mt-2">{job.location}</div>
              <div className="mt-2">{job.employmentType}</div>
            </div>
          </div>

          <JobApplicationForm />
        </div>
      </section>
    </>
  );
}
