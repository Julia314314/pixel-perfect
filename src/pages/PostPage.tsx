import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/data/posts";
import { formatDate } from "@/components/posts/PostItem";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Lang = "zh" | "en";
const LANG_KEY = "pp_lang";

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = (localStorage.getItem(LANG_KEY) as Lang | null) ?? "zh";
    if (saved === "zh" || saved === "en") setLang(saved);
  }, []);

  const langClass = useMemo(() => (lang === "en" ? "lang-en" : "lang-zh"), [lang]);

  const onSetLang = (next: Lang) => {
    setLang(next);
    localStorage.setItem(LANG_KEY, next);
  };

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
      {/* ✅ 只靠 class 切換顯示語言，不動你原本的 contentHtml 結構 */}
      <style>{`
        .lang-zh [data-lang="en"] { display: none; }
        .lang-en [data-lang="zh"] { display: none; }
      `}</style>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-card border border-border shadow-warm"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-2 leading-tight">
              {post.title}
            </h1>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
          </div>

          {/* ✅ Toggle */}
          <div className="flex shrink-0 gap-2">
            <Button
              size="sm"
              variant={lang === "zh" ? "default" : "outline"}
              onClick={() => onSetLang("zh")}
            >
              中文
            </Button>
            <Button
              size="sm"
              variant={lang === "en" ? "default" : "outline"}
              onClick={() => onSetLang("en")}
            >
              EN
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-muted-light mb-6">
          <span>分類：{post.category}</span>
          <span>日期：{formatDate(post.date)}</span>
          <span>字數：約 {post.wordCount}</span>
        </div>

        <div
          className={`article-content ${langClass}`}
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

