import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImage from "@/assets/me.jpg";

const About = () => {
  return (
    <Layout>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-card border border-border shadow-warm"
      >
        <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-2 leading-tight">
          關於我
        </h1>
        <p className="text-muted-foreground mb-6">
          以女性視角出發，用科技縮短資訊落差，讓更多女性與偏鄉學生看見更大的世界。
        </p>

        {/* Profile Photo */}
        <div className="flex justify-center my-8">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src={profileImage}
            alt="我的個人照片"
            className="w-44 h-44 object-cover rounded-full border-[6px] border-primary-soft shadow-warm"
          />
        </div>

        <div className="article-content">
          <h2>自我介紹</h2>
          <p>
            我是一位對 AI、工程與跨領域學習充滿熱情的女性學生。
            我相信「資訊」會影響一個人能看見的選項，而看見選項，才有機會改變人生。
            因此我希望用自己的學習、整理與輸出能力，
            把原本分散、艱澀、難以取得的科技與競賽資源，
            轉化成更容易理解、也更容易開始的版本，
            讓更多女性與偏鄉學生能往更大的世界前進。
          </p>

          <h2>我的學習經歷</h2>
          <ul>
            <li><strong>理工實作與研究：</strong>從實驗設計、量測分析到作品整理。</li>
            <li><strong>跨領域輸出：</strong>把活動與專題轉成文章、筆記與教學內容。</li>
            <li><strong>國際與公共議題：</strong>透過模擬聯合國培養全球視角。</li>
          </ul>

          <h2>創辦網站的宗旨</h2>
          <p>
            這個網站的核心任務是「幫助女性與偏鄉，減少資訊落差」。
            我會持續更新 AI × 工程解析、科技趨勢與活動資訊，
            讓資源更容易被取得、理解與使用。
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
          <Button asChild>
            <Link to="/portfolio">看我的作品集</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/events">看活動資訊</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/subscribe">訂閱電子報</Link>
          </Button>
        </div>
      </motion.article>
    </Layout>
  );
};

export default About;
