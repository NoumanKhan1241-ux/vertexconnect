import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry Insights"
        title="Perspectives on Calling, Lead Gen & Operations"
        description="Articles and operational notes exploring telemarketing best practices, purpose-driven outreach, and scalable customer support."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest Articles"
          title="Practical Guides for Growth & Communication"
          description="Explore insights written to help businesses structure better conversations and more accountable campaigns."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-slate-900/80 p-7 shadow-lg transition hover:border-sky-400/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-sky-500/10 border border-sky-400/20 px-3 py-1 text-xs font-semibold text-sky-300">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-white leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">{post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-8 text-center md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-white">Ready to Put These Strategies to Work?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Vertex Connect designs and executes outbound, inbound, and lead generation campaigns tailored to your business goals.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 shadow-lg shadow-sky-500/20"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
