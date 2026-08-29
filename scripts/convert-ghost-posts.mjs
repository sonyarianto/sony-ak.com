import fs from "fs";
import path from "path";
import TurndownService from "turndown";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

// Handle images
turndown.addRule("images", {
  filter: "img",
  replacement: (content, node) => {
    const src = node.getAttribute("src") || "";
    const alt = node.getAttribute("alt") || "";
    return `![${alt}](${src})`;
  },
});

// Handle Ghost embeds - convert to placeholder
turndown.addRule("ghost-embeds", {
  filter: (node) => {
    return (
      node.nodeName === "FIGURE" &&
      node.className &&
      node.className.includes("kg-")
    );
  },
  replacement: (content) => content,
});

// Handle iframes
turndown.addRule("iframes", {
  filter: "iframe",
  replacement: (content, node) => {
    const src = node.getAttribute("src") || "";
    return `[Embedded Content](${src})`;
  },
});

// Handle script tags (remove them)
turndown.addRule("scripts", {
  filter: "script",
  replacement: () => "",
});

// Handle style tags (remove them)
turndown.addRule("styles", {
  filter: "style",
  replacement: () => "",
});

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

// Clean up HTML before conversion
function cleanHtml(html) {
  if (!html) return "";
  let cleaned = html
    // Remove Ghost card wrappers but keep content
    .replace(/<figure class="kg-card[^"]*">/g, "")
    .replace(/<\/figure>/g, "")
    .replace(/<figcaption[^>]*>.*?<\/figcaption>/gs, "")
    // Remove buy me a coffee / support buttons
    .replace(/<script[^>]*buymeacoffee[^>]*>.*?<\/script>/gs, "")
    .replace(/<!--kg-card-begin: html-->[\s\S]*?<!--kg-card-end: html-->/g, "")
    // Clean up empty paragraphs
    .replace(/<p><br><\/p>/g, "")
    .replace(/<p><\/p>/g, "")
    // Remove support us sections at the end
    .replace(/<h3 id="support-us">.*$/s, "");
  return cleaned.trim();
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
      ? new Date(published_at).toISOString()
      : new Date().toISOString();

    const description = custom_excerpt || generateDescription(html);

    // Clean and convert HTML to markdown
    const cleanedHtml = cleanHtml(html);
    let markdown;
    try {
      markdown = turndown.turndown(cleanedHtml);
    } catch (e) {
      // If turndown fails, keep the cleaned HTML
      markdown = cleanedHtml;
    }

    // Clean up excessive newlines
    markdown = markdown
      .replace(/\n{4,}/g, "\n\n\n")
      .trim();

    // Create MDX content
    const mdxContent = `---
title: "${escapeYaml(title)}"
date: "${date}"
description: "${escapeYaml(description)}"
---

${markdown}
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
