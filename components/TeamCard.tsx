import type { TeamMember } from "@/lib/site-data";

type TeamCardProps = {
  member: TeamMember;
};

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900 p-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/20 to-slate-700 text-lg font-semibold text-white">
        {member.name.slice(0, 2).toUpperCase()}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{member.name}</h3>
      <p className="mt-1 text-sm text-sky-300">{member.role}</p>
      <p className="mt-4 text-sm leading-7 text-slate-300">{member.bio}</p>
    </article>
  );
}
