"use client";

import { useState } from "react";
import { CheckCircle2, UploadCloud } from "lucide-react";

type JobApplicationFormProps = {
  defaultPosition?: string;
};

export default function JobApplicationForm({ defaultPosition = "General Application" }: JobApplicationFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const fullName = (form.get("fullName") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const phone = (form.get("phone") as string)?.trim();
    const position = (form.get("position") as string)?.trim();

    if (!fullName || !email || !phone || !position) {
      setStatus("error");
      setErrorMessage("Please fill out your full name, email, phone, and position.");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setErrorMessage("");
    }, 400);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
      {status === "success" ? (
        <div className="py-10 text-center space-y-3">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold text-white">Application Received</h3>
          <p className="max-w-md mx-auto text-sm leading-relaxed text-slate-300">
            Thank you for your interest in Vertex Connect. We will keep your details on file and reach out when matching positions open.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFileName(null);
            }}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-5 py-2 text-xs font-semibold text-slate-200 hover:border-sky-400/60 hover:text-white transition"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Full Name <span className="text-sky-400">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="position" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Position Applied For <span className="text-sky-400">*</span>
              </label>
              <input
                id="position"
                name="position"
                type="text"
                defaultValue={defaultPosition}
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
                placeholder="e.g. Sales Agent, Support Specialist"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="jobEmail" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Email Address <span className="text-sky-400">*</span>
              </label>
              <input
                id="jobEmail"
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="jobPhone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Phone Number <span className="text-sky-400">*</span>
              </label>
              <input
                id="jobPhone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="linkedin" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
              LinkedIn Profile
            </label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div>
            <label htmlFor="resume" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Resume / CV (PDF or Word)
            </label>
            <div className="relative">
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setFileName(file ? file.name : null);
                }}
                className="block w-full rounded-2xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300 file:mr-3 file:rounded-full file:border-0 file:bg-sky-500 file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-slate-950 hover:file:bg-sky-400"
              />
            </div>
            {fileName && <p className="mt-1 text-xs text-sky-300">Selected file: {fileName}</p>}
          </div>

          <div>
            <label htmlFor="relevantExperience" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Relevant Experience
            </label>
            <textarea
              id="relevantExperience"
              name="relevantExperience"
              rows={2}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
              placeholder="Briefly describe your calling, sales, or customer support background..."
            />
          </div>

          <div>
            <label htmlFor="coverLetter" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows={3}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
              placeholder="Share why you'd like to join the Vertex Connect team..."
            />
          </div>

          {status === "error" && (
            <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-xs text-rose-300">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:opacity-50"
          >
            <UploadCloud className="h-4 w-4" />
            <span>{status === "submitting" ? "Submitting Application..." : "Submit Application"}</span>
          </button>
        </form>
      )}
    </div>
  );
}
