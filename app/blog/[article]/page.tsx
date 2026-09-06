import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";

import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ article: post.slug }));
}

type Props = {
  params: Promise<{ article: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { article: articleSlug } = await params;
  const article = blogPosts.find((post) => post.slug === articleSlug);

  if (!article) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== article.slug);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-center gap-6 border-b border-white/10 pb-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-sky-400" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-sky-400" />
            <span>Published {article.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-sky-400" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="space-y-6 text-base leading-8 text-slate-300">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-sky-500/20 bg-sky-500/5 p-8">
          <h3 className="text-xl font-bold text-white">The Vertex Connect Approach</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Every campaign is built around your specific audience, qualification criteria, and business objectives. With transparent CPL & CPA campaign models, we ensure every interaction is accountable.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
            >
              <span>Discuss Your Campaign with Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 border-t border-white/10 pt-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedPosts.slice(0, 2).map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-sky-400/40 block"
                >
                  <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <div className="mt-2 text-sm font-bold text-white">{rel.title}</div>
                  <div className="mt-3 text-xs text-slate-400 flex items-center gap-1">
                    <span>Read more</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 pt-6 border-t border-white/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to all articles</span>
          </Link>
        </div>
      </article>
    </>
  );
}
