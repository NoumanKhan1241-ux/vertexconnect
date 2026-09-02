import type { Testimonial } from "@/lib/site-data";

type TestimonialCardProps = {
  item: Testimonial;
};

export default function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <blockquote className="rounded-3xl border border-white/10 bg-slate-900 p-6">
      <p className="text-lg leading-8 text-slate-100">“{item.quote}”</p>
      <footer className="mt-6 border-t border-white/10 pt-4">
        <div className="font-medium text-white">{item.person}</div>
        <div className="text-sm text-slate-400">{item.title}</div>
      </footer>
    </blockquote>
  );
}
