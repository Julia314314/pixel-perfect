import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/data/posts";
import { formatDate } from "@/components/posts/PostItem";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <Layout>
        <div className="p-8 text-center rounded-2xl bg-card border border-border shadow-card">
          <h1 className="text-xl font-bold text-foreground mb-4">找不到文章</h1>
          <p className="text-muted-foreground mb-6">這篇文章可能已被移除或網址有誤。</p>
          <Button asChild>
            <Link to="/">返回首頁</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-card border border-border shadow-warm"
      >
        <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-2 leading-tight">
          {post.title}
        </h1>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-3 text-sm text-muted-light mb-6">
          <span>分類：{post.category}</span>
          <span>日期：{formatDate(post.date)}</span>
          <span>字數：約 {post.wordCount}</span>
        </div>

        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
          <Button variant="outline" asChild>
            <Link to="/" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> 返回首頁
            </Link>
          </Button>
          <Button asChild>
            <Link to="/subscribe">訂閱電子報</Link>
          </Button>
        </div>
      </motion.article>
    </Layout>
  );
};

export default PostPage;
