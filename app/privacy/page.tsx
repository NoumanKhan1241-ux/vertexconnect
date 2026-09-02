import PageHero from "@/components/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="This page is a placeholder for the company’s official privacy policy and legal wording."
      />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-8 text-slate-300">
          <p>We collect and process information only when necessary to support business communication, service delivery, and client inquiries.</p>
          <p>Any personal data handled by the business should be stored securely, used for agreed business purposes, and retained only as long as required.</p>
          <p>When real legal language is ready, this page should be replaced with the official policy approved by the company and counsel.</p>
        </div>
      </section>
    </>
  );
}
