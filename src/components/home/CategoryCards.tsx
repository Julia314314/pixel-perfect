import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    href: "/ai-engineering",
    title: "AI × 工程專題解析",
    description: "用「背景 → 核心概念 → 案例 → 影響」拆解科技如何落地。",
    meta: "適合：作品集、專題靈感、面試/申請的內容證據"
  },
  {
    href: "/philly-week",
    title: "費城科技週觀察",
    description: "把講座、活動、Demo 變成可複習的筆記與反思。",
    meta: "適合：國際視野、創新生態、跨文化觀察"
  },
  {
    href: "/monthly-trends",
    title: "每月科技趨勢摘要",
    description: "每月 3–5 個趨勢：一句話重點＋影響面＋延伸閱讀。",
    meta: "適合：快速掌握、準備簡報、討論題目"
  }
];

export const CategoryCards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5" aria-label="三大主題">
      {categories.map((cat, index) => (
        <motion.article
          key={cat.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          className="p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-warm transition-shadow duration-300 group"
        >
          <h3 className="font-bold text-foreground mb-2">{cat.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{cat.description}</p>
          <div className="text-xs text-muted-light mb-4">{cat.meta}</div>
          <Link
            to={cat.href}
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover transition-colors group-hover:gap-3"
          >
            進入專區 <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.article>
      ))}
    </section>
  );
};
