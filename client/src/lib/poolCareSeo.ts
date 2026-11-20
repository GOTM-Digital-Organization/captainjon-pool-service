import { articlePath, poolCarePosts, siteUrl, type PoolCarePost } from "../components/PoolCareContent";

export function poolCareSeo(post?: PoolCarePost) {
  const path = post ? articlePath(post) : "/pool-care-tips";
  const url = `${siteUrl}${path}`;
  const title = post?.seoTitle ?? "Pool Care Tips for Parrish & Lakewood Ranch | Captain Jon";
  const description = post?.description ?? "Explore practical Florida pool-care guides for Parrish and Lakewood Ranch homeowners: weekly cleaning, water chemistry, filter care and equipment maintenance.";
  const image = post?.image ?? poolCarePosts[0]?.image;
  const schema = post ? [
    {
      "@context": "https://schema.org", "@type": "BlogPosting", "@id": `${url}#article`,
      headline: post.title, description, url, mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: { "@type": "ImageObject", url: image, width: post.imageWidth, height: post.imageHeight },
      datePublished: post.publishedDate, dateModified: post.publishedDate,
      author: { "@type": "Organization", name: "Captain Jon's Pool Service", url: siteUrl },
      publisher: { "@type": "Organization", name: "Captain Jon's Pool Service", url: siteUrl },
      articleSection: post.category, inLanguage: "en-US"
    },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Pool Care Tips", item: `${siteUrl}/pool-care-tips` },
      { "@type": "ListItem", position: 3, name: post.title, item: url }
    ] }
  ] : [{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Pool Care Tips", description, url, inLanguage: "en-US", mainEntity: { "@type": "ItemList", itemListElement: poolCarePosts.map((entry, index) => ({ "@type": "ListItem", position: index + 1, name: entry.title, url: `${siteUrl}${articlePath(entry)}` })) } }];
  return { url, title, description, image, schema, type: post ? "article" : "website", imageAlt: post?.imageAlt ?? "Captain Jon cleaning a screened Southwest Florida pool; AI-generated promotional image." };
}
