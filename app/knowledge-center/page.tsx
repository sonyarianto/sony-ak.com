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
      <h1 className="mb-8 text-3xl font-bold">Knowledge Center</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
