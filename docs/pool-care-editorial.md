# Pool Care Tips editorial publishing workflow

## Scope and approval

Tom approved the first article, its generated Captain Jon photo, and publication to the website on November 20, 2026. Future Sunday packages require Tom's explicit approval before website publication. Google Business Profile and Facebook are never posted by Manus under this workflow: deliver their text in clearly separated copy-and-paste blocks for Tom to publish manually.

Prepare week two on Sunday, November 22, 2026 at 1 p.m. America/New_York, then advance one topic every Sunday. Weekly research and image generation continue even if an earlier draft awaits approval; do not publish pending drafts or recycle them as new articles.

Promote only full-service once-weekly residential pool cleaning, chiefly Parrish and Lakewood Ranch. No chemical delivery, leak detection, real-estate inspections, winterizing, freezing, or pool closing content. Use current authoritative sources; weekly care supplements homeowner checks and cannot promise germ-free water, lifespan extensions, or guaranteed savings.

## Content architecture

- Published posts live in `client/src/content/pool-care-posts.json`.
- Only approved posts belong in this file: it is rendered publicly and included in the sitemap.
- `PoolCareContent.tsx` provides the article, index, homepage feature, and full-service CTA.
- Routes are `/pool-care-tips` and `/pool-care-tips/:slug`.
- `scripts/prerender-pool-care.tsx` generates full HTML, page-specific canonical and OG/Twitter metadata, BlogPosting/CollectionPage and breadcrumb schema, sitemap.xml, and robots.txt during `pnpm build`.
- Approved article body HTML is generated from reviewed Markdown, with accessible inline source links and a sources list. Never accept untrusted user HTML in this field.
- Use actual publication dates, accurate image dimensions, useful alt text, and a visible AI-promotional-image disclosure. Generated scenes are not real customer job evidence.
- Upload approved photos to a public CDN using `manus-upload-file`, and use the returned absolute HTTPS URL; a `/manus-storage/` URL alone does not resolve on the external Netlify site. Keep originals outside the project. Verify image HTTP status and content type.

## Release procedure after approval

1. Preserve the existing repository and site: `GOTM-Digital-Organization/captainjon-pool-service`, Netlify `captainjonspoolservice`, production `https://captainjonspoolcleaning.com`. Do not create a replacement repo, site, or DNS.
2. Restore the `github` remote if missing, then `git fetch github main && git merge --ff-only github/main` before editing. Preserve unrelated work.
3. Add the approved article data and approved photo. Keep previous articles intact.
4. Run `pnpm check` and `pnpm build`; inspect the new generated HTML for full body, one H1, correct canonical, image, sources, schema, and CTA links. Preview mobile and desktop.
5. Save a Manus webdev checkpoint, then push `github main` to use the existing automatic Netlify deployment.
6. Verify the LIVE article and image before saying published. Do not confuse a successful push or local preview with production publication. Check that the new URL returns the article HTML, not the SPA homepage fallback.
7. Provide Tom the live article URL, photo download, and separate plain copy-and-paste GBP and Facebook posts. Use the article URL for their educational destination. GBP uses Update with Learn more, no phone in its post body. Facebook may include (941) 704-3699 and 2–3 local hashtags.
8. Update the editorial log: article approved/published to website; social text delivered for manual posting, not claimed posted.

All call links use `tel:+19417043699`. Quote destination is `https://captainjonspoolcleaning.com/#contact`. No unapproved prices, promotions, credentials, testimonials, or local measurements.
