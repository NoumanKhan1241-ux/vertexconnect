import PageHero from "@/components/PageHero";
import { company } from "@/lib/site-data";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Vertex Connect handles, protects, and respects client and prospect information."
      />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-8 text-slate-300">
          <p>
            At {company.name}, we are committed to protecting the privacy of our website visitors, clients, and prospective campaign contacts. This Privacy Policy describes how we collect, use, and safeguard personal and business data.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Information We Collect</h2>
          <p>
            We collect information voluntarily submitted through our inquiry forms, job applications, or direct communications, including full name, company name, email address, phone number, and campaign details.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Use of Information</h2>
          <p>
            Information provided to {company.name} is utilized solely for communicating with you regarding your campaign inquiry, assessing business fit, providing tailored quotes, and delivering agreed communication services.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Data Security & Retention</h2>
          <p>
            We employ industry-standard organizational and technical measures to protect submitted information against unauthorized access, disclosure, or misuse. Data is retained only as long as necessary to fulfill agreed business arrangements.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Contact Us</h2>
          <p>
            For any questions regarding this Privacy Policy or data handling practices, please submit an inquiry via our contact form. {company.name} is headquartered in {company.location}.
          </p>
        </div>
      </section>
    </>
  );
}
