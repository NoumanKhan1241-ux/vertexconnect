import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { company, companyStats, teamMembers, whyVertexConnect } from "@/lib/site-data";
import { CheckCircle2, Globe2, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vertex Connect"
        title="Talk. Connect. Grow."
        description="A new, globally oriented telemarketing and BPO company based in Rawalpindi, Pakistan, dedicated to turning every conversation into an opportunity."
        actions={[
          { label: "Start a Conversation", href: "/contact" },
          { label: "Explore Services", href: "/services", variant: "secondary" },
        ]}
      />

      {/* Who We Are Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl">
            <div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-500/15 via-slate-900 to-slate-950 p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                <Globe2 className="h-3.5 w-3.5" />
                <span>Headquartered in Rawalpindi, Pakistan</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Global B2B & B2C Communication
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Vertex Connect is built from the ground up to partner with businesses around the world. We offer purpose-driven calling, transparent performance metrics, and adaptable campaign structures.
              </p>
              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Core Commitments</div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Zero invented claims — honest, transparent execution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Commercial alignment through CPL & CPA campaign models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Daily and weekly reporting for full visibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A Dedicated Global Telemarketing & BPO Partner"
              description="Vertex Connect is a new, globally oriented telemarketing and BPO company based in Rawalpindi, Pakistan."
            />
            <p className="mt-5 text-base leading-8 text-slate-300">
              We provide businesses with professional calling, lead generation, sales, appointment setting, and customer support solutions designed around their individual campaign requirements.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Rather than forcing businesses into rigid pre-packaged retainers or generic calling scripts, we focus on understanding your audience, your sales criteria, and your goals so every interaction represents your brand with distinction.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {companyStats.map((stat) => (
                <div key={stat.value} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <div className="text-base font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-slate-900/50 py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10 text-sky-400 mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">Our Mission</div>
              <h3 className="mt-3 text-2xl font-bold text-white">Stronger Customer Connections</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {company.mission}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-400">Our Vision</div>
              <h3 className="mt-3 text-2xl font-bold text-white">A Trusted Global Partner</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {company.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Values"
          title="The Standards That Guide Every Campaign"
          description="Every engagement is held to these fundamental core values."
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {company.values.map((val) => (
            <div
              key={val.title}
              className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-md"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400">Core Value</div>
              <h3 className="mt-2 text-xl font-bold text-white">{val.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Genuine Principles */}
      <section className="bg-slate-900/50 py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Genuine Principles"
            title="Why Choose Vertex Connect"
            description="Our commitment to purposeful conversations and quality-focused execution."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whyVertexConnect.map((pillar, idx) => (
              <div key={pillar.title} className="rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-md">
                <div className="mb-4 text-xs font-bold uppercase tracking-wider text-sky-400">
                  Principle 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section: Hidden gracefully until real team info provided */}
      {teamMembers.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="The People Behind the Process"
            description="Our team of dedicated communication and campaign specialists."
            center
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
