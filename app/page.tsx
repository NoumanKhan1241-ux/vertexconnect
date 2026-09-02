import Link from "next/link";

import FAQAccordion from "@/components/FAQAccordion";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TeamCard from "@/components/TeamCard";
import TestimonialCard from "@/components/TestimonialCard";
import { company, companyStats, faqItems, heroStats, processSteps, qualityPillars, services, teamMembers, testimonials } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Telemarketing • BPO • Growth"
        title="Turning conversations into business growth."
        description="Placeholder copy describing how a professional telemarketing and BPO company helps businesses generate opportunity, improve customer experience, and scale reliable communication."
        primaryCta={{ label: "Get Started", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
        stats={heroStats}
      />

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Trusted By Businesses</div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {['[CLIENT 1]', '[CLIENT 2]', '[CLIENT 3]', '[CLIENT 4]', '[CLIENT 5]'].map((name) => (
              <div key={name} className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-sm font-semibold tracking-[0.18em] text-slate-300 uppercase">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8">
            <div className="h-72 rounded-[1.5rem] bg-gradient-to-br from-sky-500/20 via-slate-800 to-slate-950" />
          </div>
          <div>
            <SectionHeading
              eyebrow="About us"
              title="A professional partner for better conversations and stronger operations."
              description="Placeholder introduction describing the company’s focus on trust, communication, sales expertise, and dependable execution for business growth."
            />
            <p className="mt-5 text-base leading-8 text-slate-300">{company.description}</p>
            <Link href="/about" className="mt-8 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-white">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Flexible support for growth-focused outreach and customer operations."
          description="Placeholder description for the core service portfolio."
          center
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why choose us"
            title="A reliable operating partner for communication-heavy work."
            description="Placeholder summary of the core strengths that help businesses feel confident in their telemarketing and BPO support."
            center
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {qualityPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                <div className="mb-4 h-10 w-10 rounded-2xl border border-sky-400/30 bg-sky-500/10" />
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How we work" title="A structured process designed for consistency and scale." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-slate-900 p-4 text-center">
              <div className="text-xs uppercase tracking-[0.2em] text-sky-300">Step {index + 1}</div>
              <div className="mt-3 text-base font-medium text-white">{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Performance"
            title="Placeholder metrics for future client reporting."
            description="These numbers are examples only and should be replaced with real company information when available."
            center
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {companyStats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why us vs others"
          title="Clearer communication, stronger process, and more accountable delivery."
          description="This comparison uses placeholder language and should be revised with verified business context when the client provides it."
        />
        <div className="mt-10 overflow-x-auto rounded-3xl border border-white/10 bg-slate-900">
          <table className="min-w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950 text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-6 py-4">Factor</th>
                <th className="px-6 py-4">Us</th>
                <th className="px-6 py-4">Others</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Response Time", ours: "Placeholder: structured onboarding and responsive communication", others: "Placeholder: slower coordination or inconsistent updates" },
                { label: "Quality Control", ours: "Placeholder: monitoring, QA, and coaching framework", others: "Placeholder: inconsistent checks or limited review" },
                { label: "Reporting", ours: "Placeholder: clear performance visibility and campaign insight", others: "Placeholder: limited or delayed reporting" },
              ].map((row) => (
                <tr key={row.label} className="border-t border-white/10">
                  <td className="px-6 py-5 font-medium text-white">{row.label}</td>
                  <td className="px-6 py-5">{row.ours}</td>
                  <td className="px-6 py-5">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Team"
            title="The people behind the process."
            description="Placeholder team content that will be replaced with real company leadership and specialist details later."
            center
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Placeholder client feedback."
          description="This section is intentionally sample-only until real testimonials are provided."
          center
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.person} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQs"
            title="Questions clients often ask before getting started."
            description="Placeholder answers to be replaced with real information when available."
            center
          />
          <div className="mt-10">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-8 text-center md:p-12">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">Ready to talk?</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to turn more conversations into customers?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Placeholder final CTA encouraging businesses to start a conversation about campaign design, support operations, and scalable outreach.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400">
              Request a Consultation
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-white">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
