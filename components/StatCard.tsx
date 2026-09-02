export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-center">
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="mt-3 text-sm text-slate-300">{label}</div>
    </div>
  );
}
