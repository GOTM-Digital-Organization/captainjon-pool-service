import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { PoolCareArticleContent, poolCarePosts, type PoolCarePost } from "@/components/PoolCareContent";
import usePoolCareSeo from "@/hooks/usePoolCareSeo";

function PublishedArticle({ post }: { post: PoolCarePost }) {
  usePoolCareSeo(post);
  return <div className="min-h-screen"><Navbar /><PoolCareArticleContent post={post} /><Footer /></div>;
}

export default function PoolCareArticlePage({ slug }: { slug: string }) {
  const post = poolCarePosts.find(entry => entry.slug === slug);
  return post ? <PublishedArticle post={post} /> : <NotFound />;
}
