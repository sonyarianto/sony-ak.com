import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/knowledge-center"
        className="mb-8 inline-flex items-center text-purple-600 hover:text-purple-800"
      >
        ← Back to Articles
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-sm text-gray-500">
            {new Date(article.date).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{article.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-gray-200 px-2 py-0.5 text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg prose-purple max-w-none">
          <MDXRemote source={article.content} />
        </div>
      </article>
    </div>
  );
}
