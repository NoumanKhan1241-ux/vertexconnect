import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { company, companyStats, qualityPillars, teamMembers } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built around honest communication, reliable delivery, and measurable growth."
        description="We partner with businesses that want a structured, professional, and scalable way to improve outreach, customer experience, and sales performance."
        actions={[
          { label: "Talk to us", href: "/contact" },
          { label: "View services", href: "/services", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8">
            <div className="h-80 rounded-[1.5rem] bg-gradient-to-br from-sky-500/20 via-slate-800 to-slate-950" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Professional operations support for communication-heavy business growth."
              description="Our approach blends campaign planning, process design, workforce support, and quality control so businesses can keep conversations consistent and conversion-focused."
            />
            <p className="mt-5 text-base leading-8 text-slate-300">{company.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {companyStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What drives us"
            title="A clear operating model that keeps work consistent and scalable."
            description="The work is designed to be dependable, measurable, and aligned with the needs of growing businesses."
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
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind the process."
          description="Placeholder profiles intended to be replaced with real leadership and operational team details once available."
          center
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
