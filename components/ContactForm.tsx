"use client";

import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit, reset] = useForm("xoeqbybr");

  return (
    <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
      {state.succeeded ? (
        <div className="py-12 text-center space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out</h3>
          <p className="max-w-md mx-auto text-sm leading-relaxed text-slate-300">
            We have received your campaign inquiry. A Vertex Connect specialist will review your requirements and follow up promptly.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-6 py-2.5 text-xs font-semibold text-slate-200 hover:border-sky-400/60 hover:text-white transition"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Full Name <span className="text-sky-400">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
                placeholder="Your full name"
              />
              <ValidationError prefix="Name" field="fullName" errors={state.errors} className="mt-1.5 text-xs text-rose-400" />
            </div>

            <div>
              <label htmlFor="companyName" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
                placeholder="Company / Organization"
              />
              <ValidationError prefix="Company" field="companyName" errors={state.errors} className="mt-1.5 text-xs text-rose-400" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Email Address <span className="text-sky-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
                placeholder="you@company.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1.5 text-xs text-rose-400" />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
                placeholder="+1 (555) 000-0000"
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1.5 text-xs text-rose-400" />
            </div>

            <div>
              <label htmlFor="country" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
                placeholder="e.g. United States, UK"
              />
              <ValidationError prefix="Country" field="country" errors={state.errors} className="mt-1.5 text-xs text-rose-400" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="serviceRequired" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Service Required <span className="text-sky-400">*</span>
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-sky-400 transition"
              >
                <option value="" disabled className="bg-slate-950 text-slate-400">Select a service</option>
                <option value="Outbound Calling" className="bg-slate-950 text-slate-100">Outbound Calling</option>
                <option value="Inbound Calling" className="bg-slate-950 text-slate-100">Inbound Calling</option>
                <option value="Lead Generation" className="bg-slate-950 text-slate-100">Lead Generation</option>
                <option value="Appointment Setting" className="bg-slate-950 text-slate-100">Appointment Setting</option>
                <option value="Cold Calling" className="bg-slate-950 text-slate-100">Cold Calling</option>
                <option value="Customer Support" className="bg-slate-950 text-slate-100">Customer Support</option>
                <option value="Sales & Telemarketing" className="bg-slate-950 text-slate-100">Sales & Telemarketing</option>
                <option value="Other" className="bg-slate-950 text-slate-100">Other</option>
              </select>
              <ValidationError prefix="Service" field="serviceRequired" errors={state.errors} className="mt-1.5 text-xs text-rose-400" />
            </div>

            <div>
              <label htmlFor="campaignType" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Campaign Model <span className="text-sky-400">*</span>
              </label>
              <select
                id="campaignType"
                name="campaignType"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-sky-400 transition"
              >
                <option value="" disabled className="bg-slate-950 text-slate-400">Select campaign model</option>
                <option value="CPL" className="bg-slate-950 text-slate-100">CPL — Cost Per Lead</option>
                <option value="CPA" className="bg-slate-950 text-slate-100">CPA — Cost Per Acquisition</option>
                <option value="Not Sure Yet" className="bg-slate-950 text-slate-100">Not Sure Yet</option>
              </select>
              <ValidationError prefix="Campaign Model" field="campaignType" errors={state.errors} className="mt-1.5 text-xs text-rose-400" />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Campaign & Project Details <span className="text-sky-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400 transition"
              placeholder="Tell us about your audience, campaign goals, expected volume, or questions..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1.5 text-xs text-rose-400" />
          </div>

          <ValidationError
            errors={state.errors}
            className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2.5 text-xs font-medium text-rose-300"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:opacity-50 shadow-lg shadow-sky-500/20"
          >
            <Send className="h-4 w-4" />
            <span>{state.submitting ? "Submitting Inquiry..." : "Start a Conversation"}</span>
          </button>
        </form>
      )}
    </div>
  );
}
