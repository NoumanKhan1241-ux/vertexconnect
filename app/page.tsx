import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import FAQAccordion from "@/components/FAQAccordion";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TeamCard from "@/components/TeamCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  clientLogos,
  clientProcess,
  companyStats,
  compareRows,
  faqItems,
  heroStats,
  services,
  teamMembers,
  testimonials,
  whyVertexConnect,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Talk • Connect • Grow"
        title="Turn Every Conversation Into an Opportunity."
        description="Vertex Connect helps businesses around the world connect with customers, generate opportunities, and grow through flexible calling and lead generation solutions."
        primaryCta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
        stats={heroStats}
      />

      {/* Client Logos: Hidden gracefully until real client logos are provided */}
      {clientLogos.length > 0 && (
        <section className="border-y border-white/10 bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Trusted By Global Businesses
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {clientLogos.map((name) => (
                <div
                  key={name}
                  className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-sm font-semibold tracking-[0.18em] text-slate-300 uppercase"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Teaser Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl">
            <div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-500/15 via-slate-900 to-slate-950 p-8">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-sky-400">
                Company Overview
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Vertex Connect
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                A new, globally oriented telemarketing and BPO company based in Rawalpindi, Pakistan, dedicated to professional communication and customer acquisition.
              </p>
              <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Headquartered in Rawalpindi, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Serving B2B and B2C Clients Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>CPL (Cost Per Lead) & CPA (Cost Per Acquisition) Campaigns</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A Dedicated Partner for Customer Acquisition and Support"
              description="Vertex Connect provides inbound calling, outbound calling, lead generation, appointment setting, cold calling, customer support, and sales & telemarketing solutions for businesses around the world."
            />
            <p className="mt-5 text-base leading-8 text-slate-300">
              Vertex Connect is focused on providing professional, flexible, and reliable communication and customer acquisition solutions. We design campaigns directly around your goals, audience, and qualification requirements.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/60 hover:text-white"
              >
                Learn More About Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
              >
                <span>Discuss Your Campaign</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section: All 7 Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-white/10">
        <SectionHeading
          eyebrow="Core Services"
          title="Seven Professional Calling and Acquisition Solutions"
          description="Every service is structured to be flexible, transparent, and tailored to your campaign requirements under CPL or CPA models."
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-7 py-3 text-sm font-semibold text-slate-100 hover:border-sky-400/60 hover:text-white transition"
          >
            Explore All Services & Campaign Models
          </Link>
        </div>
      </section>

      {/* Why Vertex Connect: Genuine Company Principles */}
      <section className="bg-slate-900/50 py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Vertex Connect"
            title="Genuine Operating Principles Built Around Your Campaign"
            description="Our approach is rooted in clear purpose, transparent reporting, and professional quality across every interaction."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whyVertexConnect.map((principle, index) => (
              <div
                key={principle.title}
                className="rounded-3xl border border-white/10 bg-slate-950 p-6 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-xs font-bold text-sky-300">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Process: 7-Step Authentic Journey */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="A Structured 7-Step Campaign Journey"
          description="From initial inquiry to daily reporting, our workflow is built for clarity and consistent execution."
          center
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {clientProcess.map((step) => (
            <div
              key={step.stepNumber}
              className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 flex flex-col justify-between shadow-md transition hover:border-sky-400/40"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  {step.stepNumber}
                </div>
                <div className="mt-2 text-sm font-semibold text-white">{step.title}</div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Non-numerical Brand Highlights */}
      <section className="bg-slate-900/50 py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Company Highlights"
            title="Communication Built Around Your Goals"
            description="Our service framework is designed to give you complete confidence in outreach quality and reporting."
            center
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {companyStats.map((stat) => (
              <StatCard key={stat.value} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Us vs Others"
          title="The Vertex Connect Difference"
          description="How our campaign-first, quality-driven approach compares to conventional call centers."
        />
        <div className="mt-10 overflow-x-auto rounded-3xl border border-white/10 bg-slate-900/90 shadow-xl">
          <table className="min-w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950 text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-6 py-4">Factor</th>
                <th className="px-6 py-4 text-sky-400">Vertex Connect</th>
                <th className="px-6 py-4">Conventional Providers</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.label} className="border-t border-white/10 transition hover:bg-white/5">
                  <td className="px-6 py-5 font-semibold text-white">{row.label}</td>
                  <td className="px-6 py-5 text-slate-200">{row.ours}</td>
                  <td className="px-6 py-5 text-slate-400">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Team Section: Hidden until real team information is provided */}
      {teamMembers.length > 0 && (
        <section className="bg-slate-900/50 py-20 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Leadership"
              title="The People Behind the Process"
              description="Meet the operational leaders driving Vertex Connect campaigns."
              center
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section: Hidden until real client testimonials are provided */}
      {testimonials.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Client Feedback"
            description="Verified feedback from our campaign partners."
            center
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.person} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="bg-slate-900/50 py-20 border-y border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Clear answers about our calling solutions, CPL & CPA campaign models, and reporting."
            center
          />
          <div className="mt-10">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 via-slate-900 to-slate-950 p-8 text-center md:p-14 shadow-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400">
            Start A Conversation
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Turn Every Conversation Into an Opportunity.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Tell us about your campaign goals, target market, and requirements. We will prepare a clear quote and campaign structure tailored to your business.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 shadow-lg shadow-sky-500/20"
            >
              Start a Conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
