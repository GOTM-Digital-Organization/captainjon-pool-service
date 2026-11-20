import { useEffect } from "react";
import type { PoolCarePost } from "../components/PoolCareContent";
import { poolCareSeo } from "../lib/poolCareSeo";

export default function usePoolCareSeo(post?: PoolCarePost) {
  useEffect(() => {
    const seo = poolCareSeo(post);
    const previousTitle = document.title;
    const previous: { element: Element; content: string | null; attribute: string; created: boolean }[] = [];
    const set = (selector: string, tag: string, attributes: Record<string, string>, attribute: string, value: string) => {
      let element = document.head.querySelector(selector);
      const created = !element;
      if (!element) { element = document.createElement(tag); Object.entries(attributes).forEach(([key, entry]) => element!.setAttribute(key, entry)); document.head.appendChild(element); }
      previous.push({ element, content: element.getAttribute(attribute), attribute, created });
      element.setAttribute(attribute, value);
    };
    document.title = seo.title;
    set('link[rel="canonical"]', "link", { rel: "canonical" }, "href", seo.url);
    const names = { description: seo.description, "twitter:card": "summary_large_image", "twitter:title": seo.title, "twitter:description": seo.description, "twitter:image": seo.image, "twitter:image:alt": seo.imageAlt, "twitter:url": seo.url };
    Object.entries(names).forEach(([name, value]) => set(`meta[name="${name}"]`, "meta", { name }, "content", value));
    const properties = { "og:type": seo.type, "og:url": seo.url, "og:title": seo.title, "og:description": seo.description, "og:image": seo.image, "og:image:secure_url": seo.image, "og:image:alt": seo.imageAlt, "og:image:width": String(post?.imageWidth ?? 2304), "og:image:height": String(post?.imageHeight ?? 1536) };
    Object.entries(properties).forEach(([property, value]) => set(`meta[property="${property}"]`, "meta", { property }, "content", value));
    let script = document.getElementById("pool-care-schema");
    const createdScript = !script;
    if (!script) { script = document.createElement("script"); script.id = "pool-care-schema"; script.setAttribute("type", "application/ld+json"); document.head.appendChild(script); }
    const oldSchema = script.textContent;
    script.textContent = JSON.stringify(seo.schema);
    return () => { document.title = previousTitle; previous.reverse().forEach(({ element, content, attribute, created }) => { if (created) element.remove(); else if (content === null) element.removeAttribute(attribute); else element.setAttribute(attribute, content); }); if (createdScript) script?.remove(); else if (script) script.textContent = oldSchema; };
  }, [post]);
}
