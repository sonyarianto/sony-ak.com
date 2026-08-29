import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import ArticleList from "./ArticleList";

export const metadata = {
  title: "Knowledge Center",
  description: "AI assisted posts on software engineering.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-purple-600 hover:text-purple-800"
      >
        ← Home
      </Link>
      <h1 className="mb-8 text-3xl font-bold">Knowledge Center</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
