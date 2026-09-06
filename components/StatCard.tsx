export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-center shadow-md">
      <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{value}</div>
      <div className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{label}</div>
    </div>
  );
}
