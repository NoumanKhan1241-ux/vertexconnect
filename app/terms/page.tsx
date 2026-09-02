import PageHero from "@/components/PageHero";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms & Conditions"
        description="This page is a placeholder for the company’s official website terms and legal conditions."
      />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-8 text-slate-300">
          <p>These placeholder terms outline the need for shared expectations regarding website use, business communication, and service discussions.</p>
          <p>All usage should be governed by the company’s final approved legal wording, policies, and business agreements when the site goes live.</p>
          <p>Replace this content with the final terms once the business has legal approval and finalized service conditions.</p>
        </div>
      </section>
    </>
  );
}
