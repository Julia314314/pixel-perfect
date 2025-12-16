import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { CategoryCards } from "@/components/home/CategoryCards";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PostList } from "@/components/posts/PostList";
import { getLatestPosts } from "@/data/posts";

const Index = () => {
  const latestPosts = getLatestPosts(5);

  return (
    <Layout>
      <Hero />
      <CategoryCards />
      
      <div className="mt-8">
        <SectionHeader title="最新文章" hint="（示範內容，你可直接改成自己的文章）" />
        <PostList posts={latestPosts} />
      </div>
    </Layout>
  );
};

export default Index;
