import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { company } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your outreach, support, or growth goals."
        description="Share a few details about your business and we’ll help you assess the right communication strategy and support model."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="We’re ready to discuss your next opportunity."
              description="Placeholder contact details are intended to be replaced with the actual business profile and preferred communication channels."
            />
            <div className="mt-8 space-y-5 text-sm text-slate-300">
              <div>
                <div className="font-medium text-white">Phone</div>
                <div className="mt-1">{company.phone}</div>
              </div>
              <div>
                <div className="font-medium text-white">Email</div>
                <div className="mt-1">{company.email}</div>
              </div>
              <div>
                <div className="font-medium text-white">Office</div>
                <div className="mt-1">{company.address}</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
