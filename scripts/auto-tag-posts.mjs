import fs from "fs";
import path from "path";

const articlesDir = path.join(process.cwd(), "articles");

// Tag rules: keyword patterns → tag
const TAG_RULES = [
  // Languages & Frameworks
  { patterns: [/\bjavascript\b/i, /\bjs\b/i, /\bnode\.?js\b/i, /\bnodejs\b/i], tag: "javascript" },
  { patterns: [/\btypescript\b/i, /\bts\b/i], tag: "typescript" },
  { patterns: [/\breact\b/i], tag: "react" },
  { patterns: [/\bnext\.?js\b/i, /\bnextjs\b/i], tag: "nextjs" },
  { patterns: [/\bphp\b/i], tag: "php" },
  { patterns: [/\blaravel\b/i], tag: "laravel" },
  { patterns: [/\brust\b/i], tag: "rust" },
  { patterns: [/\bgolang\b/i, /\bgo\s+programming\b/i, /\bgo\s+lang\b/i, /\bgo\s+code\b/i, /\bgo\s+struct\b/i, /\bgo\s+func\b/i, /\bgo\s+goroutine/i, /\bgo\s+channel/i, /\bgoroutine/i, /\bgolang\b/i], tag: "go" },
  { patterns: [/\bpython\b/i], tag: "python" },
  { patterns: [/\bsvelte\b/i], tag: "svelte" },
  { patterns: [/\bvue\.?js\b/i, /\bvue\b/i], tag: "vue" },
  { patterns: [/\bcss\b/i, /\btailwind\b/i], tag: "css" },
  { patterns: [/\bhtml\b/i], tag: "html" },
  { patterns: [/\bsql\b/i, /\bmysql\b/i, /\bpostgresql\b/i, /\bpostgres\b/i, /\bsqlite\b/i], tag: "database" },
  { patterns: [/\bbash\b/i, /\bshell\b/i, /\bterminal\b/i, /\bcommand.?line\b/i], tag: "bash" },

  // DevOps & Infrastructure
  { patterns: [/\bdocker\b/i], tag: "docker" },
  { patterns: [/\baws\b/i, /\bamazon\b/i], tag: "aws" },
  { patterns: [/\bcloudflare\b/i], tag: "cloudflare" },
  { patterns: [/\bnginx\b/i, /\bapache\b/i], tag: "web-server" },
  { patterns: [/\bci\/?cd\b/i, /\bpipeline\b/i, /\bgithub.?actions\b/i], tag: "ci-cd" },
  { patterns: [/\bvercel\b/i, /\bnetlify\b/i], tag: "hosting" },
  { patterns: [/\bubuntu\b/i, /\blinux\b/i], tag: "linux" },
  { patterns: [/\bkubernetes\b/i, /\bk8s\b/i], tag: "kubernetes" },

  // Concepts & Practices
  { patterns: [/\bapi\b/i, /\brest\b/i, /\bgraphql\b/i], tag: "api" },
  { patterns: [/\btesting\b/i, /\btest\b/i, /\bunit.?test\b/i, /\bjest\b/i], tag: "testing" },
  { patterns: [/\bsecurity\b/i, /\bauth\b/i, /\bssl\b/i, /\bhttps\b/i, /\bjwt\b/i, /\boauth\b/i], tag: "security" },
  { patterns: [/\bperformance\b/i, /\boptimization\b/i, /\bcach(e|ing)\b/i], tag: "performance" },
  { patterns: [/\bgit\b/i, /\bversion.?control\b/i], tag: "git" },
  { patterns: [/\bdeployment\b/i, /\bdeploy\b/i, /\bproduction\b/i], tag: "deployment" },
  { patterns: [/\bdesign.?pattern\b/i, /\barchitecture\b/i, /\bmicroservice\b/i], tag: "architecture" },
  { patterns: [/\berror.?handl/i, /\bdebug/i], tag: "debugging" },
  { patterns: [/\bregex\b/i, /\bregexp\b/i], tag: "regex" },
  { patterns: [/\bartificial.?intelligence\b/i, /\bchatgpt\b/i, /\bllm\b/i], tag: "ai" },
  { patterns: [/\bseo\b/i, /\bsearch.?engine\b/i], tag: "seo" },
  { patterns: [/\bopen.?source\b/i, /\bgithub\b/i], tag: "open-source" },
  { patterns: [/\bstartup\b/i, /\bvc\b/i, /\bfundrais/i, /\bunicorn\b/i], tag: "startup" },
  { patterns: [/\bdesign\b/i, /\bui\b/i, /\bux\b/i], tag: "design" },
  { patterns: [/\bcareer\b/i, /\bhiring\b/i, /\binterview\b/i, /\bjob\b/i], tag: "career" },
  { patterns: [/\bproductivity\b/i, /\bworkflow\b/i, /\btool\b/i], tag: "productivity" },
  { patterns: [/\bnpm\b/i, /\bpackage.?manager\b/i, /\bdependency\b/i], tag: "package-manager" },
  { patterns: [/\benv(?:ironment)?.?var/i, /\bdotenv\b/i, /\.env\b/i], tag: "environment" },
  { patterns: [/\bjson\b/i], tag: "json" },
  { patterns: [/\bhttp\b/i, /\bhttps\b/i, /\bstatus.?code\b/i, /\bredirect/i], tag: "http" },
  { patterns: [/\bdomain\b/i, /\bdns\b/i], tag: "dns" },
  { patterns: [/\bemail\b/i, /\bsmtp\b/i], tag: "email" },
  { patterns: [/\bfrontend\b/i, /\bfront.?end\b/i], tag: "frontend" },
  { patterns: [/\bbackend\b/i, /\bback.?end\b/i], tag: "backend" },
  { patterns: [/\bfull.?stack\b/i, /\bfullstack\b/i], tag: "fullstack" },
  { patterns: [/\bdata.?structur/i, /\balgorithm/i], tag: "data-structures" },
  { patterns: [/\bdatabase.?design\b/i, /\bschema\b/i, /\bmigration\b/i], tag: "database-design" },
  { patterns: [/\blog(ging|s)?\b/i, /\bmonitor/i], tag: "logging" },
  { patterns: [/\bwebsocket\b/i, /\breal.?time\b/i, /\bevent.?driven\b/i], tag: "realtime" },
  { patterns: [/\bcli\b/i, /\bcommand.?line/i], tag: "cli" },
  { patterns: [/\bcode.?review\b/i, /\bpull.?request\b/i, /\bpr\b/i], tag: "code-review" },
  { patterns: [/\bclean.?code\b/i, /\bmaintainab/i, /\brefactor/i], tag: "clean-code" },
  { patterns: [/\bdocker.?compose\b/i], tag: "docker-compose" },
  { patterns: [/\bnginx\b/i], tag: "nginx" },
  { patterns: [/\bsymfony\b/i], tag: "symfony" },
  { patterns: [/\bbun\b/i], tag: "bun" },
  { patterns: [/\bdeno\b/i], tag: "deno" },
];

function extractText(content) {
  return content
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function assignTags(title, content) {
  const text = extractText(title + " " + content);
  const tags = new Set();

  for (const rule of TAG_RULES) {
    for (const pattern of rule.patterns) {
      if (pattern.test(text)) {
        tags.add(rule.tag);
        break;
      }
    }
  }

  return Array.from(tags).slice(0, 5);
}

// Process all posts - strip existing tags first, then re-tag
const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".mdx"));
console.log(`Processing ${files.length} posts...`);

let tagged = 0;

for (const file of files) {
  const filepath = path.join(articlesDir, file);
  let content = fs.readFileSync(filepath, "utf8");

  // Parse frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) continue;

  let frontmatter = frontmatterMatch[1];
  const body = frontmatterMatch[2];

  // Remove existing tags line
  frontmatter = frontmatter.replace(/\ntags:\s*\[[^\]]*\]\n?/, "\n");

  // Extract title
  const titleMatch = frontmatter.match(/title:\s*"([^"]*)"/);
  const title = titleMatch ? titleMatch[1] : file.replace(/\.mdx$/, "");

  // Assign tags
  const tags = assignTags(title, body);
  if (tags.length === 0) tags.push("general");

  // Update
  const updatedFrontmatter = frontmatter.trimEnd() + `\ntags: ${JSON.stringify(tags)}`;
  const updatedContent = content.replace(frontmatterMatch[1], updatedFrontmatter);

  fs.writeFileSync(filepath, updatedContent, "utf8");
  tagged++;

  if (tagged % 100 === 0) {
    console.log(`Tagged ${tagged} posts...`);
  }
}

console.log(`\nDone! Tagged: ${tagged}`);

// Show tag distribution
console.log("\nTag distribution:");
const tagCounts = {};
for (const file of files) {
  const content = fs.readFileSync(path.join(articlesDir, file), "utf8");
  const tagsMatch = content.match(/tags:\s*\[([^\]]*)\]/);
  if (tagsMatch) {
    const tags = JSON.parse(`[${tagsMatch[1]}]`);
    for (const tag of tags) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }
  }
}
const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
for (const [tag, count] of sortedTags.slice(0, 25)) {
  console.log(`  ${tag}: ${count}`);
}
