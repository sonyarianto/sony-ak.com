"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";

interface ArticleListProps {
  articles: Article[];
}

const INITIAL_COUNT = 10;
const LOAD_MORE_COUNT = 10;

export default function ArticleList({ articles }: ArticleListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

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

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(INITIAL_COUNT);
  };

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <>
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search knowledge..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Tag Filter */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => handleTagChange(null)}
          className={`shrink-0 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
            selectedTag === null
              ? "border-gray-900 bg-gray-900 text-white"              : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagChange(selectedTag === tag ? null : tag)}
            className={`shrink-0 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
              selectedTag === tag
                ? "border-gray-900 bg-gray-900 text-white"
              : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
          }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Articles List */}
      <div className="space-y-6">
        {visibleArticles.length === 0 ? (
          <p className="text-center text-gray-500">No articles found.</p>
        ) : (
          visibleArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/knowledge-center/${article.slug}`}
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
              </article>
            </Link>
          ))
        )}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisibleCount(visibleCount + LOAD_MORE_COUNT)}
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50"
          >
            Load More ({filteredArticles.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {/* Show count */}
      {filteredArticles.length > 0 && (
        <p className="mt-4 text-center text-sm text-gray-500">
          Showing {visibleArticles.length} of {filteredArticles.length} articles
        </p>
      )}
    </>
  );
}
