import Link from "next/link";

import type { Service } from "@/lib/site-data";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900/80">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10 text-sky-300">
        0{Math.floor(Math.random() * 9) + 1}
      </div>
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">Telemarketing</div>
      <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{service.shortDescription}</p>
      <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center text-sm font-medium text-sky-300 transition hover:text-sky-200">
        Learn more →
      </Link>
    </article>
  );
}
