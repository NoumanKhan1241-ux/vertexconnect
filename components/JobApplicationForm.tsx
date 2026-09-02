"use client";

import { useState } from "react";

export default function JobApplicationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = (form.get("name") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const cv = (form.get("cv") as File | null)?.name;

    if (!name || !email || !cv) {
      setStatus("error");
      return;
    }

    setStatus("success");
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-900 p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="cv" className="mb-2 block text-sm font-medium text-slate-200">
          Upload CV
        </label>
        <input
          id="cv"
          name="cv"
          type="file"
          className="block w-full rounded-2xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-slate-200 file:mr-4 file:rounded-full file:border-0 file:bg-sky-500 file:px-4 file:py-2 file:text-sm file:font-medium file:text-slate-950"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-rose-300">Please provide your name, email, and CV before submitting.</p>
      )}

      {status === "success" && (
        <p className="text-sm text-emerald-300">Application received. We&apos;ll review it and get back to you shortly.</p>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
      >
        Submit application
      </button>
    </form>
  );
}
