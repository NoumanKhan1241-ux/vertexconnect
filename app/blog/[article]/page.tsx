import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ article: post.slug }));
}

export default function BlogDetailPage({ params }: { params: { article: string } }) {
  const articleSlug = params.article;
  const article = blogPosts.find((post) => post.slug === articleSlug);

  if (!article) {
    return <div className="mx-auto max-w-7xl px-4 py-20">Article not found.</div>;
  }

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-sm text-slate-400">
          {article.date} • {article.author} • {article.readTime}
        </div>
        <div className="space-y-6 text-base leading-8 text-slate-300">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900 p-6">
          <SectionHeading eyebrow="Key takeaway" title="A simple way to keep improving communication operations." />
          <p className="mt-4 text-base leading-8 text-slate-300">
            Stronger outreach, better quality control, and clearer reporting habits are the foundation of more consistent growth.
          </p>
        </div>
      </section>
    </>
  );
}
