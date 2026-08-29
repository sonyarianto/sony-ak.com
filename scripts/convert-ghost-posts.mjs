import fs from "fs";
import path from "path";

const postsPath = path.join("/tmp/ghost-posts/posts.json");
const outputDir = path.join(process.cwd(), "articles");

// Read and parse posts
const rawData = JSON.parse(fs.readFileSync(postsPath, "utf8"));
const posts = rawData[2].data;

console.log(`Found ${posts.length} posts`);

// Generate description from content
function generateDescription(html) {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.substring(0, 160) + (text.length > 160 ? "..." : "");
}

// Escape for YAML frontmatter
function escapeYaml(str) {
  if (!str) return "";
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, " ");
}

// Process each post
let converted = 0;
let skipped = 0;

for (const post of posts) {
  try {
    const { title, slug, html, published_at, custom_excerpt } = post;

    if (!html || html.length < 100) {
      console.log(`Skipping (too short): ${title}`);
      skipped++;
      continue;
    }

    const date = published_at
      ? new Date(published_at).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0];

    const description = custom_excerpt || generateDescription(html);

    // Create frontmatter file with HTML content
    const mdxContent = `---
title: "${escapeYaml(title)}"
date: "${date}"
description: "${escapeYaml(description)}"
---

${html}
`;

    const filename = `${slug}.mdx`;
    const filepath = path.join(outputDir, filename);
    fs.writeFileSync(filepath, mdxContent, "utf8");

    converted++;
    if (converted % 100 === 0) {
      console.log(`Converted ${converted} posts...`);
    }
  } catch (error) {
    console.error(`Error converting "${post.title}":`, error.message);
    skipped++;
  }
}

console.log(`\nDone! Converted: ${converted}, Skipped: ${skipped}`);
