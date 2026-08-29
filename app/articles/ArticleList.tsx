"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";

interface ArticleListProps {
  articles: Article[];
}

const ARTICLES_PER_PAGE = 5;

export default function ArticleList({ articles }: ArticleListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach((article) => article.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag =
        selectedTag === null || article.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [articles, searchQuery, selectedTag]);

  // Reset to page 1 when filters change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE
  );

  return (
    <>
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Tag Filter */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => handleTagChange(null)}
          className={`rounded-full px-3 py-1 text-sm ${
            selectedTag === null
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagChange(selectedTag === tag ? null : tag)}
            className={`rounded-full px-3 py-1 text-sm ${
              selectedTag === tag
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Articles List */}
      <div className="space-y-6">
        {paginatedArticles.length === 0 ? (
          <p className="text-center text-gray-500">No articles found.</p>
        ) : (
          paginatedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <article>
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
                <h2 className="mt-2 text-xl font-semibold text-gray-900">
                  {article.title}
                </h2>
                <p className="mt-2 text-gray-600">{article.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            ← Previous
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`rounded-lg px-3 py-2 text-sm ${
                  currentPage === page
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}

      {/* Page Info */}
      {filteredArticles.length > 0 && (
        <p className="mt-4 text-center text-sm text-gray-500">
          Showing {startIndex + 1}–
          {Math.min(startIndex + ARTICLES_PER_PAGE, filteredArticles.length)} of{" "}
          {filteredArticles.length} articles
        </p>
      )}
    </>
  );
}
