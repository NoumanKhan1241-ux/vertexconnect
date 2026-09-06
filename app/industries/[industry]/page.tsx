import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/lib/site-data";

export function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }));
}

type Props = {
  params: Promise<{ industry: string }>;
};

export default async function IndustryDetailPage({ params }: Props) {
  const { industry: industrySlug } = await params;
  const industry = industries.find((item) => item.slug === industrySlug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Industry Use Case"
        title={industry.name}
        description={industry.support}
        actions={[
          { label: "Start a Conversation", href: "/contact" },
          { label: "All Industries", href: "/industries", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-300">
              Common Challenge
            </div>
            <h2 className="mt-3 text-2xl font-bold text-white">The Operational Challenge</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{industry.problem}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Potential Support
            </div>
            <h2 className="mt-3 text-2xl font-bold text-white">How Vertex Connect Can Support</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{industry.support}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Applicable Capabilities"
            title="Relevant Calling & Support Solutions"
            description="Our calling, lead generation, and customer support solutions can be configured specifically for campaigns in this sector."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.services.map((serviceName) => (
              <div
                key={serviceName}
                className="rounded-2xl border border-white/10 bg-slate-950 p-6 flex items-center justify-between shadow-md"
              >
                <span className="text-base font-semibold text-white">{serviceName}</span>
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-8 text-center md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-white">Discuss Your Campaign Requirements</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Tell us about your campaign goals, audience, and qualification criteria. We will prepare a transparent quote based on CPL or CPA models.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 shadow-lg shadow-sky-500/20"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
