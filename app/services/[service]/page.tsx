import Link from "next/link";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export default function ServiceDetailPage({ params }: { params: { service: string } }) {
  const serviceSlug = params.service;
  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    return <div className="mx-auto max-w-7xl px-4 py-20">Service not found.</div>;
  }

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
        actions={[
          { label: "Talk to us", href: "/contact" },
          { label: "All services", href: "/services", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The challenge"
              title="Where this service creates value."
            />
            <p className="mt-5 text-base leading-8 text-slate-300">{service.problem}</p>
          </div>
          <div>
            <SectionHeading
              eyebrow="The approach"
              title="A structured response to the problem."
            />
            <p className="mt-5 text-base leading-8 text-slate-300">{service.solution}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Delivery" title="What this service includes." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {service.delivery.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                <div className="text-sm text-slate-200">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Benefits" title="Why teams choose this support." />
            <ul className="mt-5 space-y-3 text-slate-300">
              {service.benefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="FAQ" title="Common questions." />
            <div className="mt-5 space-y-4">
              {service.qa.map((item) => (
                <div key={item.question} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <div className="font-medium text-white">{item.question}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold text-white">Need this approach for your business?</h2>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400">
              Get started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
