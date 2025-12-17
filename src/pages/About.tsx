import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImage from "@/assets/me.jpg";
import { useMemo, useState } from "react";

type Lang = "zh" | "en";

const About = () => {
  const [lang, setLang] = useState<Lang>("zh");

  const t = useMemo(() => {
    if (lang === "zh") {
      return {
        title: "關於我",
        subtitle:
          "以女性視角出發，用工業工程與系統思考整理科技新知，縮短資訊落差，陪伴更多女性與偏鄉學生往更大的世界前進。",
        photoAlt: "我的個人照片",

        switchLabel: "語言",
        zh: "中文",
        en: "English",

        hIntro: "自我介紹",
        intro: (
          <>
            大家好，我是陳芃妡，目前就讀於中原大學工業與系統工程學系。走在科技與工程這條路上，
            我很早就意識到，這並不是一條對女性來說理所當然、也不總是被鼓勵的選擇。
            <br />
            <br />
            從高中開始接觸科技與工程，我參與過科技競賽、AI 與工程實作專案，也走進各種跨領域營隊與國際議題活動。
            過程中，我不只是在學習技術，更在學習如何在一個男性比例較高的環境中，找到自己的位置。
            有時候，我也會懷疑自己是否真的「夠適合」走這條路，但每一次完成專案、解決問題的經驗，
            都讓我更確定，女性同樣可以在科技領域中發揮影響力。
            <br />
            <br />
            在學習的過程中，我發現許多女性學生其實很有能力，卻因為缺乏榜樣、資源或清楚的指引，
            而在關鍵時刻選擇退後。這樣的情況，讓我想起自己曾經站在選擇路口的迷惘。
            因此，在 2025 年，我創辦了「科技新知小站」，
            希望用工業工程與系統思考的方式，把複雜的科技知識、學習經驗與升學資源，
            整理成清楚、可跟著前進的路徑，陪伴更多女性在科技學習的路上，不再那麼孤單。
            <br />
            <br />
            同時，我也是一名基督徒，長期在教會擔任志工，陪伴偏鄉學生學習。
            在那些陪伴孩子寫作業、聊天與分享夢想的時刻，我看見許多女孩其實對科技充滿好奇，
            卻因為資訊落差與缺乏支持，而慢慢失去信心。這些經驗讓我更加確定，
            我想結合科技、教育與陪伴的力量，讓更多女性能相信自己、走進科技領域，
            並拓展屬於自己的未來。
          </>
        ),

        hMission: "創辦宗旨",
        missionBullets: [
          {
            k: "以工程與系統思維整理科技新知",
            v: "將零散的科技資訊轉化為有邏輯、可理解、可實踐的學習內容。",
          },
          {
            k: "降低學習與升學的資訊落差",
            v: "協助 108 課綱高中生與大學生取得清楚、實用且可參考的資源。",
          },
          {
            k: "支持女性進入科技與工程領域",
            v: "分享女性視角的真實學習與成長經驗，建立更友善的科技學習環境。",
          },
          {
            k: "連結科技學習與社會回饋",
            v: "讓科技不只是一項技能，而能成為改善教育與社會的力量。",
          },
          {
            k: "培養自主學習與長期成長能力",
            v: "不只提供答案，更重視思考方式、學習規劃與持續精進。",
          },
        ],

        ctaPortfolio: "看我的作品集",
        ctaEvents: "看活動資訊",
        ctaSubscribe: "訂閱電子報",
      };
    }

    return {
      title: "About Me",
      subtitle:
        "From a female perspective, I use industrial engineering and systems thinking to structure tech knowledge, reduce information gaps, and support women and rural students in moving forward.",
      photoAlt: "My profile photo",

      switchLabel: "Language",
      zh: "中文",
      en: "English",

      hIntro: "About Me | For International Readers",
      intro: (
        <>
          Hello, my name is Peng-Xin (Julia) Chen, and I am currently an undergraduate student in Industrial and Systems Engineering at Chung Yuan Christian University.
          Walking the path of technology and engineering, I realized early on that this is not always a field where women are naturally encouraged or expected to belong.
          <br />
          <br />
          Since high school, I have actively participated in technology competitions, AI and engineering projects, as well as interdisciplinary camps and international programs.
          Through these experiences, I was not only learning technical skills, but also learning how to find my place in environments where women are often underrepresented.
          There were moments when I questioned whether I was truly “fit” for this path, yet every completed project and every problem I solved reinforced my belief that women can create meaningful impact in the field of technology.
          <br />
          <br />
          Throughout my learning journey, I noticed that many capable female students step back not because they lack ability, but because they lack role models, resources, or clear guidance.
          I saw my own past hesitation reflected in them. This realization led me to found Tech Insight Hub (科技新知小站) in 2025.
          Through the lens of industrial engineering and systems thinking, I aim to organize complex technological knowledge, learning experiences, and educational pathways into clear, practical steps—so that more women can move forward in technology without feeling alone.
          <br />
          <br />
          I am also a Christian and have long been involved in volunteer work through my church, supporting students in underprivileged and rural communities.
          While accompanying them with homework, conversations, and shared dreams, I witnessed many young girls who were genuinely curious about technology gradually lose confidence due to information gaps and a lack of support.
          These moments strengthened my conviction to combine technology, education, and mentorship, helping more women believe in themselves, step into the world of technology, and shape futures they truly own.
        </>
      ),

      hMission: "Our Mission",
      missionBullets: [
        {
          k: "Organize technology knowledge through engineering thinking",
          v: "Transform complex information into structured, practical learning content.",
        },
        {
          k: "Reduce information gaps in learning and education",
          v: "Provide clear and accessible resources for high school and university students.",
        },
        {
          k: "Encourage women to pursue technology and engineering",
          v: "Share real experiences from a female perspective to inspire confidence and action.",
        },
        {
          k: "Connect technology with social impact",
          v: "Use technology as a tool to promote educational equity and social good.",
        },
        {
          k: "Foster independent learning and long-term growth",
          v: "Focus on mindset, problem-solving, and sustainable learning pathways.",
        },
      ],

      ctaPortfolio: "View My Portfolio",
      ctaEvents: "Explore Events",
      ctaSubscribe: "Subscribe",
    };
  }, [lang]);

  return (
    <Layout>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-card border border-border shadow-warm"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-2 leading-tight">
              {t.title}
            </h1>
            <p className="text-muted-foreground mb-6">{t.subtitle}</p>
          </div>

          {/* Language Toggle */}
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {t.switchLabel}
            </span>
            <div className="inline-flex rounded-full border border-border bg-background p-1">
              <button
                type="button"
                onClick={() => setLang("zh")}
                className={[
                  "px-3 py-1 text-sm rounded-full transition",
                  lang === "zh"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
                aria-pressed={lang === "zh"}
              >
                {t.zh}
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={[
                  "px-3 py-1 text-sm rounded-full transition",
                  lang === "en"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
                aria-pressed={lang === "en"}
              >
                {t.en}
              </button>
            </div>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center my-8">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src={profileImage}
            alt={t.photoAlt}
            className="w-44 h-44 object-cover rounded-full border-[6px] border-primary-soft shadow-warm"
          />
        </div>

        <div className="article-content">
          <h2>{t.hIntro}</h2>
          <p>{t.intro}</p>

          <h2>{t.hMission}</h2>
          <ul>
            {t.missionBullets.map((item) => (
              <li key={item.k}>
                <strong>{item.k}：</strong>
                {item.v}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
          <Button asChild>
            <Link to="/portfolio">{t.ctaPortfolio}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/events">{t.ctaEvents}</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/subscribe">{t.ctaSubscribe}</Link>
          </Button>
        </div>
      </motion.article>
    </Layout>
  );
};

export default About;
