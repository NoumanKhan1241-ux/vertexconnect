import Link from "next/link";
import {
  PhoneOutgoing,
  PhoneIncoming,
  Target,
  CalendarCheck,
  PhoneCall,
  Headset,
  TrendingUp,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import type { Service } from "@/lib/site-data";

type ServiceCardProps = {
  service: Service;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PhoneOutgoing,
  PhoneIncoming,
  Target,
  CalendarCheck,
  PhoneCall,
  Headset,
  TrendingUp,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || HelpCircle;

  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/90 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900 shadow-lg shadow-black/20">
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10 text-sky-300 transition group-hover:bg-sky-500/20 group-hover:scale-105">
          <IconComponent className="h-6 w-6" />
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
          Core Solution
        </div>
        <h3 className="mt-3 text-xl font-bold text-white group-hover:text-sky-200 transition">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {service.shortDescription}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 transition group-hover:text-sky-300"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
