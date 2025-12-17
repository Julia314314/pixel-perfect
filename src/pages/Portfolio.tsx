import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { portfolioItems, type Lang } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const Portfolio = () => {
  const [lang, setLang] = useState<Lang>("zh");

  const header = useMemo(() => {
    if (lang === "zh") {
      return {
        title: "作品集 / 學習歷程",
        hint: "把學習歷程轉化成可被看懂的成果與能力證明",
        highlights: "重點",
        outcomes: "成果與能力對應",
        view: "查看作品（Canva）",
      };
    }
    return {
      title: "Learning Portfolio",
      hint: "Turning learning experiences into clear, reviewable evidence of outcomes and skills.",
      highlights: "Highlights",
      outcomes: "Outcomes & Skills",
      view: "View Project (Canva)",
    };
  }, [lang]);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start justify-between gap-3">
          <SectionHeader title={header.title} hint={header.hint} />

          {/* Language toggle */}
          <div className="shrink-0 mt-1 inline-flex rounded-xl border border-border bg-card p-1">
            <button
              className={`rounded-lg px-3 py-1.5 text-sm transition ${
                lang === "zh"
                  ? "bg-muted font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setLang("zh")}
              type="button"
            >
              中文
            </button>
            <button
              className={`rounded-lg px-3 py-1.5 text-sm transition ${
                lang === "en"
                  ? "bg-muted font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setLang("en")}
              type="button"
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {portfolioItems.map((item, index) => {
            const d = item[lang]; // ✅ 使用 zh/en
            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="p-5 rounded-2xl bg-card border border-border shadow-card"
              >
                {/* Title + role (NO (a)(b) key label) */}
                <div className="mb-3">
                  <h3 className="font-bold text-foreground">{d.title}</h3>
                  <p className="text-sm text-muted-light">{d.role}</p>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {header.highlights}
                  </h4>
                  <ul className="space-y-1">
                    {d.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {header.outcomes}
                  </h4>
                  <ul className="space-y-1">
                    {d.outcomes.map((o, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-border bg-primary/10 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project button */}
                {item.link ? (
                  <div className="mt-4">
                    <Button asChild variant="outline">
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {header.view} ↗
                      </a>
                    </Button>
                  </div>
                ) : null}
              </motion.article>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          <Button asChild>
            <Link to="/about">{lang === "zh" ? "關於我" : "About"}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/subscribe">{lang === "zh" ? "訂閱電子報" : "Subscribe"}</Link>
          </Button>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Portfolio;
