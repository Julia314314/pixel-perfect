import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { newsletters, Newsletter } from "@/data/newsletters";
import { formatDate } from "@/components/posts/PostItem";
import { motion } from "framer-motion";

const Archive = () => {
  const sortedNewsletters = [...newsletters].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader 
          title="季度電子報存檔" 
          hint="你可以把每季的摘要寄出後，也同步放在網站上" 
        />
        
        <div className="flex flex-col gap-3">
          {sortedNewsletters.map((newsletter, index) => (
            <motion.article
              key={newsletter.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-4 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="font-mono text-xs text-muted-light mb-1">
                電子報 • {formatDate(newsletter.date)}
              </div>
              <h3 className="font-bold text-foreground mb-1">
                <Link to={`/newsletter/${newsletter.slug}`} className="hover:text-primary transition-colors">
                  {newsletter.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{newsletter.excerpt}</p>
              <Button variant="ghost" size="sm" asChild>
                <Link to={`/newsletter/${newsletter.slug}`}>閱讀</Link>
              </Button>
            </motion.article>
          ))}
        </div>

        {sortedNewsletters.length === 0 && (
          <div className="p-8 text-center text-muted-foreground rounded-2xl bg-card border border-border">
            目前沒有電子報存檔。
          </div>
        )}
      </motion.div>
    </Layout>
  );
};

export default Archive;
