import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PostList } from "@/components/posts/PostList";
import { getPostsByCategory } from "@/data/posts";
import { motion } from "framer-motion";

const PhillyWeek = () => {
  const posts = getPostsByCategory("philly-week");

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader 
          title="費城科技週觀察" 
          hint="把講座、活動、Demo 變成可複習的筆記與反思" 
        />
        <PostList posts={posts} />
      </motion.div>
    </Layout>
  );
};

export default PhillyWeek;
