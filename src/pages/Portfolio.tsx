import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { portfolioItems } from "@/data/portfolio";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader 
          title="作品集 / 學習歷程" 
          hint="把學習歷程轉化成可被看懂的成果與能力證明" 
        />
        
        <div className="flex flex-col gap-4">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-5 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="font-mono text-sm text-primary font-bold shrink-0">{item.key}</span>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-light">{item.role}</p>
                </div>
              </div>

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-foreground mb-2">重點</h4>
                <ul className="space-y-1">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-muted-foreground">• {h}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-foreground mb-2">成果與能力對應</h4>
                <ul className="space-y-1">
                  {item.outcomes.map((o, i) => (
                    <li key={i} className="text-sm text-muted-foreground">• {o}</li>
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
            </motion.article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          <Button asChild>
            <Link to="/about">關於我</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/subscribe">訂閱電子報</Link>
          </Button>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Portfolio;
