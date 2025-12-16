import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PostList } from "@/components/posts/PostList";
import { getPostsByCategory } from "@/data/posts";
import { motion } from "framer-motion";

const MonthlyTrends = () => {
  const posts = getPostsByCategory("monthly-trends");

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader 
          title="每月科技趨勢摘要" 
          hint="每月 3–5 個趨勢：一句話重點＋影響面＋延伸閱讀" 
        />
        <PostList posts={posts} />
      </motion.div>
    </Layout>
  );
};

export default MonthlyTrends;
