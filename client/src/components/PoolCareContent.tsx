import { ArrowLeft, ArrowRight, Anchor, CalendarDays, Clock3, Phone, Check } from "lucide-react";
import postsData from "../content/pool-care-posts.json";

export type PoolCarePost = (typeof postsData)[number];
export const poolCarePosts: PoolCarePost[] = [...postsData].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
export const siteUrl = "https://captainjonspoolcleaning.com";
export const articlePath = (post: PoolCarePost) => `/pool-care-tips/${post.slug}`;
const navy = "oklch(0.13 0.04 250)";
const gold = "oklch(0.74 0.155 75)";
const dateLabel = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/New_York" });

export function WeeklyServiceCard() {
  return (
    <aside className="p-6 sm:p-8 text-white" style={{ backgroundColor: navy, borderTop: `4px solid ${gold}` }}>
      <Anchor className="w-7 h-7 mb-5" style={{ color: gold }} />
      <p className="text-xs uppercase tracking-[0.18em] font-bold mb-3" style={{ color: gold }}>A little consistency goes a long way</p>
      <h2 className="text-2xl font-extrabold leading-tight mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Full-service pool care.<br />Every week.</h2>
      <p className="text-sm text-white/80 leading-relaxed mb-5">Professional weekly pool cleaning for homeowners in Parrish and Lakewood Ranch. Cleaning, water testing, chemical balancing, and equipment attention in one routine.</p>
      <ul className="space-y-3 mb-6 text-sm text-white/90">
        {["Skimming, brushing & basket care", "Water testing & balancing", "Chemicals included", "Vacuuming & backwashing as needed"].map(text => <li key={text} className="flex items-start gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: gold }} />{text}</li>)}
      </ul>
      <a href="/#contact" className="btn-gold block text-center">Get a Pool-Service Quote <ArrowRight className="w-4 h-4 inline ml-1" /></a>
      <a href="tel:+19417043699" className="flex justify-center gap-2 items-center mt-4 text-sm font-bold text-white"><Phone className="w-4 h-4" />(941) 704-3699</a>
    </aside>
  );
}

export function PoolCareArticleContent({ post }: { post: PoolCarePost }) {
  return (
    <main className="pool-care-page pb-16" style={{ backgroundColor: "oklch(0.98 0.003 250)", color: "oklch(0.2 0.035 250)" }}>
      <section className="text-white pt-28 sm:pt-36 pb-12 sm:pb-16" style={{ backgroundColor: navy }}>
        <div className="container">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-white/70 mb-8"><a href="/" className="hover:text-white">Home</a><span aria-hidden="true">/</span><a href="/pool-care-tips" className="hover:text-white">Pool Care Tips</a><span aria-hidden="true">/</span><span>{post.category}</span></nav>
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-4" style={{ color: gold }}>{post.localFocus} · {post.category}</p>
            <h1 className="font-black leading-[1.08] text-4xl sm:text-5xl lg:text-6xl mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>{post.title}</h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mb-7">{post.hook}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/70"><span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /><time dateTime={post.publishedDate}>{dateLabel(post.publishedDate)}</time></span><span className="flex items-center gap-2"><Clock3 className="w-4 h-4" />{post.readMinutes} min read</span><span>Captain Jon’s Pool Service</span></div>
          </div>
        </div>
      </section>
      <div className="container pt-9 sm:pt-12">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 lg:gap-12 items-start">
          <article className="min-w-0">
            <figure className="mb-9">
              <img src={post.image} alt={post.imageAlt} width={post.imageWidth} height={post.imageHeight} fetchPriority="high" className="w-full h-auto" style={{ borderBottom: `4px solid ${gold}` }} />
              <figcaption className="text-xs leading-relaxed mt-3 text-slate-500">{post.imageCaption}</figcaption>
            </figure>
            {/* HTML is generated from reviewed, source-controlled editorial content; no user input. */}
            <div className="pool-care-prose" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
            <section aria-labelledby="article-sources" className="mt-10 pt-7 border-t border-slate-200">
              <h2 id="article-sources" className="text-xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Sources & further reading</h2>
              <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                {post.sources.map(source => <li key={source.number}><a href={source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-slate-900">{source.title}</a></li>)}
              </ol>
              <p className="text-xs text-slate-500 mt-5 leading-relaxed">This article offers general pool-care education, not a chemical-dosing recipe. Follow product labels and the instructions for your installed equipment.</p>
            </section>
            <a href="/pool-care-tips" className="inline-flex items-center gap-2 font-bold text-sm mt-9 underline underline-offset-4"><ArrowLeft className="w-4 h-4" />All Pool Care Tips</a>
          </article>
          <div className="lg:sticky lg:top-28"><WeeklyServiceCard /></div>
        </div>
      </div>
    </main>
  );
}

export function PoolCareTipsContent() {
  return (
    <main className="pool-care-page pb-20" style={{ backgroundColor: "oklch(0.98 0.003 250)", color: "oklch(0.2 0.035 250)" }}>
      <section className="text-white pt-32 sm:pt-40 pb-16" style={{ backgroundColor: navy }}><div className="container">
        <p className="text-xs uppercase tracking-[0.18em] font-bold mb-4" style={{ color: gold }}>Practical advice. Local pool care.</p>
        <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Pool Care Tips</h1>
        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">Helpful guides for Parrish and Lakewood Ranch homeowners. Learn how consistent cleaning, measured water chemistry, and attention to equipment support better year-round Florida pool care.</p>
      </div></section>
      <div className="container pt-12">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 lg:gap-12 items-start">
          <div className="space-y-8">
            {poolCarePosts.map(post => <article key={post.slug} className="bg-white border border-slate-200 overflow-hidden">
              <a href={articlePath(post)} className="block"><img src={post.image} alt={post.imageAlt} width={post.imageWidth} height={post.imageHeight} className="w-full h-auto" /></a>
              <div className="p-6 sm:p-8"><p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">{post.category} · <time dateTime={post.publishedDate}>{dateLabel(post.publishedDate)}</time></p><h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}><a href={articlePath(post)}>{post.title}</a></h2><p className="text-slate-600 leading-relaxed mb-5">{post.excerpt}</p><a href={articlePath(post)} className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4">Read the guide <ArrowRight className="w-4 h-4" /></a></div>
            </article>)}
          </div>
          <WeeklyServiceCard />
        </div>
      </div>
    </main>
  );
}

export function PoolCareTipsPreview() {
  const post = poolCarePosts[0];
  if (!post) return null;
  return <section className="py-16 sm:py-20" style={{ backgroundColor: "oklch(0.95 0.005 250)" }}><div className="container"><div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center"><a href={articlePath(post)}><img src={post.image} alt={post.imageAlt} width={post.imageWidth} height={post.imageHeight} loading="lazy" className="w-full h-auto" /></a><div><span className="section-label mb-3">From the Pool Care Journal</span><h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Montserrat', sans-serif", color: navy }}>{post.title}</h2><p className="text-slate-600 leading-relaxed mb-6">{post.excerpt}</p><div className="flex flex-wrap gap-5 items-center"><a href={articlePath(post)} className="btn-gold">Read the Pool Care Guide <ArrowRight className="inline w-4 h-4 ml-1" /></a><a href="/pool-care-tips" className="text-sm font-bold underline underline-offset-4">All Pool Care Tips</a></div></div></div></div></section>;
}
