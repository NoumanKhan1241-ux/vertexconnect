import Link from "next/link";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas, process notes, and practical guidance for better operations."
        description="This blog section is meant to host relevant articles focused on telemarketing, BPO operations, customer experience, and scalable growth."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest articles"
          title="Thoughtful content for teams improving communication and service quality."
          description="Placeholder content is ready to be replaced with real brand insights and business expertise."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-[2rem] border border-white/10 bg-slate-900 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">{post.category}</div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt}</p>
              <div className="mt-5 text-xs text-slate-400">
                {post.date} • {post.readTime}
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-medium text-sky-300 hover:text-sky-200">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
