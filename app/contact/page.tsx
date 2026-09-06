import { Calendar, Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { company } from "@/lib/site-data";

export default function ContactPage() {
  const hasPhone = Boolean(company.phone);
  const hasEmail = Boolean(company.email);
  const hasWhatsapp = Boolean(company.whatsapp);
  const hasBooking = Boolean(company.bookingUrl);

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Start a Conversation with Vertex Connect"
        description="Tell us about your campaign goals, target audience, and operational requirements. We will review your project and prepare a tailored quote under our CPL or CPA models."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
          <div className="space-y-8">
            <div>
              <SectionHeading
                eyebrow="Direct Inquiry"
                title="Discuss Your Campaign"
                description="We work with businesses globally to build disciplined, performance-aligned calling and lead generation campaigns."
              />
            </div>

            <div className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-900/80 p-7 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {company.location}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Headquarters</div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-white/10 pt-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Service Reach
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    Worldwide Availability
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Supporting B2B and B2C campaigns globally
                  </div>
                </div>
              </div>

              {hasPhone && (
                <div className="flex items-start gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phone
                    </div>
                    <a
                      href={`tel:${company.phone}`}
                      className="mt-1 block text-sm font-semibold text-white hover:text-sky-300 transition"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>
              )}

              {hasEmail && (
                <div className="flex items-start gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </div>
                    <a
                      href={`mailto:${company.email}`}
                      className="mt-1 block text-sm font-semibold text-white hover:text-sky-300 transition"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              )}

              {hasWhatsapp && (
                <div className="flex items-start gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      WhatsApp
                    </div>
                    <a
                      href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              )}

              {hasBooking && (
                <div className="flex items-start gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Schedule
                    </div>
                    <a
                      href={company.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex text-sm font-semibold text-sky-300 hover:text-sky-200 transition"
                    >
                      Book a Meeting →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Commercial Models
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Vertex Connect operates with performance-aligned CPL (Cost Per Lead) and CPA (Cost Per Acquisition) campaign structures. Pricing is customized around your campaign parameters and criteria.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
