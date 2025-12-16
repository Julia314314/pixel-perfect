import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const events = [
  {
    title: "瑪莉居禮科學營",
    date: "2025 夏季",
    location: "台灣",
    description: "針對女性學生的科學與 AI 主題營隊，培養跨領域能力。",
    tags: ["女性科技", "AI", "營隊"]
  },
  {
    title: "費城科技週 (Philly Tech Week)",
    date: "2025 年 5 月",
    location: "美國費城",
    description: "創新生態、Demo Day 與科技社群交流。",
    tags: ["國際", "創新", "Demo"]
  },
  {
    title: "YIF 高中科技人才培育計畫",
    date: "常年招募",
    location: "線上+線下",
    description: "科技趨勢學習與產業視角培養。",
    tags: ["科技人才", "趨勢", "培育"]
  }
];

const Events = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader 
          title="活動資訊" 
          hint="整理對女性與偏鄉學生友善的科技活動與資源" 
        />
        
        <div className="flex flex-col gap-4">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-5 rounded-2xl bg-card border border-border shadow-card"
            >
              <h3 className="font-bold text-foreground mb-2">{event.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag) => (
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

        <div className="p-5 mt-6 rounded-2xl bg-primary-soft border border-primary/20">
          <h3 className="font-bold text-foreground mb-2">想推薦活動？</h3>
          <p className="text-sm text-muted-foreground mb-4">
            如果你知道適合女性或偏鄉學生的科技活動，歡迎透過電子報訂閱頁面與我聯繫！
          </p>
          <Button asChild>
            <Link to="/subscribe" className="gap-2">
              前往訂閱頁面 <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Events;
