import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/lib/site-data";

export function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }));
}

export default function IndustryDetailPage({ params }: { params: { industry: string } }) {
  const industrySlug = params.industry;
  const industry = industries.find((item) => item.slug === industrySlug);

  if (!industry) {
    return <div className="mx-auto max-w-7xl px-4 py-20">Industry not found.</div>;
  }

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.name}
        description={industry.support}
        actions={[
          { label: "Talk to us", href: "/contact" },
          { label: "All industries", href: "/industries", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Challenge" title="The common operational issue." />
            <p className="mt-5 text-base leading-8 text-slate-300">{industry.problem}</p>
          </div>
          <div>
            <SectionHeading eyebrow="Support" title="How our model fits this sector." />
            <p className="mt-5 text-base leading-8 text-slate-300">{industry.support}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Focus areas" title="Typical service coverage for this industry." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industry.services.map((service) => (
              <div key={service} className="rounded-2xl border border-white/10 bg-slate-950 p-5 text-sm text-slate-200">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
