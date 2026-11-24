import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { Router } from "wouter";
import Navbar from "../client/src/components/Navbar";
import Footer from "../client/src/components/Footer";
import { PoolCareArticleContent, PoolCareTipsContent, poolCarePosts, articlePath, siteUrl, type PoolCarePost } from "../client/src/components/PoolCareContent";
import { poolCareSeo } from "../client/src/lib/poolCareSeo";

const output = resolve("dist/public");
const template = await readFile(resolve(output, "index.html"), "utf8");
const escape = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);

async function renderPage(path: string, post?: PoolCarePost) {
  const seo = poolCareSeo(post);
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\b[^>]*(?:name=["'](?:description|keywords|twitter:[^"']+)["']|property=["']og:[^"']+["'])[^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "");
  const tags = `<title>${escape(seo.title)}</title>
<meta name="description" content="${escape(seo.description)}" />
<link rel="canonical" href="${escape(seo.url)}" />
<meta property="og:type" content="${seo.type}" />
<meta property="og:site_name" content="Captain Jon's Pool Service" />
<meta property="og:locale" content="en_US" />
<meta property="og:url" content="${seo.url}" />
<meta property="og:title" content="${escape(seo.title)}" />
<meta property="og:description" content="${escape(seo.description)}" />
<meta property="og:image" content="${seo.image}" />
<meta property="og:image:secure_url" content="${seo.image}" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="${post?.imageWidth ?? 2304}" />
<meta property="og:image:height" content="${post?.imageHeight ?? 1536}" />
<meta property="og:image:alt" content="${escape(seo.imageAlt)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="${seo.url}" />
<meta name="twitter:title" content="${escape(seo.title)}" />
<meta name="twitter:description" content="${escape(seo.description)}" />
<meta name="twitter:image" content="${seo.image}" />
<meta name="twitter:image:alt" content="${escape(seo.imageAlt)}" />
${post ? `<meta property="article:published_time" content="${post.publishedDate}" />` : ""}
<script id="pool-care-schema" type="application/ld+json">${JSON.stringify(seo.schema).replace(/</g, "\\u003c")}</script>`;
  html = html.replace("</head>", `${tags}\n</head>`);
  const content = renderToStaticMarkup(<Router ssrPath={path}><div className="min-h-screen"><Navbar />{post ? <PoolCareArticleContent post={post} /> : <PoolCareTipsContent />}<Footer /></div></Router>);
  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  const directory = resolve(output, path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), html);
  console.log(`Prerendered ${path}`);
}

await renderPage("/pool-care-tips");
for (const post of poolCarePosts) await renderPage(articlePath(post), post);
const routes = ["/", "/pool-leak-detection", "/anniversary-offer", "/pool-care-tips", ...poolCarePosts.map(articlePath)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(path => { const post = poolCarePosts.find(entry => articlePath(entry) === path); return `<url><loc>${siteUrl}${path}</loc>${post ? `<lastmod>${post.publishedDate}</lastmod>` : ""}</url>`; }).join("\n")}\n</urlset>\n`;
await writeFile(resolve(output, "sitemap.xml"), sitemap);
await writeFile(resolve(output, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Generated sitemap with ${routes.length} routes.`);
