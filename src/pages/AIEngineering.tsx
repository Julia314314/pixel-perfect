import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PostList } from "@/components/posts/PostList";
import { getPostsByCategory } from "@/data/posts";
import { motion } from "framer-motion";

const AIEngineering = () => {
  const posts = getPostsByCategory("ai-engineering");

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader 
          title="AI × 工程專題解析" 
          hint="用「背景 → 核心概念 → 案例 → 影響」拆解科技如何落地" 
        />
        <PostList posts={posts} />
      </motion.div>
    </Layout>
  );
};

export default AIEngineering;
