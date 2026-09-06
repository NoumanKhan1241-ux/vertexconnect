import PageHero from "@/components/PageHero";
import { company } from "@/lib/site-data";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="General terms governing the use of the Vertex Connect website and initial inquiry discussions."
      />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-8 text-slate-300">
          <p>
            Welcome to {company.name}. By browsing or using this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Service Discussions & Quotations</h2>
          <p>
            Information provided on this website is for general informational purposes. All formal campaign scopes, deliverables, qualification criteria, and pricing (under CPL or CPA arrangements) are governed by specific written agreements between {company.name} and the client.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Intellectual Property</h2>
          <p>
            All content, brand assets, logos, and materials on this website are the property of {company.name} and are protected by applicable intellectual property and copyright laws.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Limitation of Liability</h2>
          <p>
            While {company.name} strives to keep the website information accurate and up-to-date, we make no warranties of any kind regarding the completeness, accuracy, or suitability of information for any particular purpose.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Jurisdiction</h2>
          <p>
            {company.name} operates from {company.location} and serves clients worldwide. Any disputes relating to website usage shall be handled in accordance with applicable legal provisions.
          </p>
        </div>
      </section>
    </>
  );
}
