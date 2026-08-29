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
    <div className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <img
        src="https://play.tailwindcss.com/img/beams.jpg"
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Content with white overlay */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-purple-600 hover:text-purple-800"
        >
          ← Home
        </Link>
        <h1 className="mb-8 text-3xl font-bold">Knowledge Center</h1>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}
