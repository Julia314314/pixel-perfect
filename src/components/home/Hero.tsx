import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const badges = ["#學生視角", "#AI", "#工業工程", "#趨勢整理", "#可讀可學"];

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative p-6 rounded-2xl bg-gradient-to-b from-card to-background border border-border shadow-warm overflow-hidden hero-glow"
    >
      <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-3 leading-tight relative z-10">
        把科技新知，寫成你看得懂、做得到的版本
      </h1>
      <p className="text-muted-foreground mb-5 max-w-3xl relative z-10">
        <strong className="text-foreground">女性 × 偏鄉 × 科技：</strong>我把分散、艱澀、難取得的科技與競賽資源，整理成更容易理解、也更容易開始的版本，
        讓更多女性與偏鄉學生能看見更大的世界。
        <br />
        同時維持三大固定內容：<strong className="text-foreground">AI × 工程專題解析</strong>、
        <strong className="text-foreground">費城科技週觀察</strong>、
        <strong className="text-foreground">每月科技趨勢摘要</strong>。
      </p>
      
      <div className="flex flex-wrap gap-2.5 mb-4 relative z-10">
        <Button variant="hero" asChild>
          <Link to="/subscribe">立即訂閱</Link>
        </Button>
        <Button variant="hero-secondary" asChild>
          <Link to="/monthly-trends">看本月趨勢</Link>
        </Button>
        <Button variant="hero-ghost" asChild>
          <Link to="/ai-engineering">看 AI × 工程案例</Link>
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 relative z-10">
        {badges.map((badge, index) => (
          <motion.span
            key={badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-card/65 text-muted-foreground"
          >
            {badge}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};
