import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Languages } from "lucide-react";

type Lang = "zh" | "en";

type Competition = {
  id: string;
  level: "highschool" | "college";
  category: "math" | "science" | "cs" | "entrepreneurship" | "language";
  title: { zh: string; en: string };
  date: { zh: string; en: string };
  location: { zh: string; en: string };
  description: { zh: string; en: string };
  learn: { zh: string[]; en: string[] };
  link: string;
  tags: { zh: string[]; en: string[] };
};

const competitions: Competition[] = [
  // High school - Math
  {
    id: "imo",
    level: "highschool",
    category: "math",
    title: { zh: "International Mathematical Olympiad（IMO）", en: "International Mathematical Olympiad (IMO)" },
    date: { zh: "每年 7 月（各國選拔時間不同）", en: "Annually in July (national selection dates vary)" },
    location: { zh: "每年主辦國不同（國際賽）", en: "Host country varies (international event)" },
    description: {
      zh: "全球最具代表性的高中數學競賽，重視邏輯推理與嚴謹證明。題目常需要創造性思考與完整推導，適合想衝刺數學實力與競賽深度的學生。",
      en: "The world’s most prestigious math Olympiad for high school students, emphasizing rigorous proofs and creative reasoning rather than routine calculations."
    },
    learn: {
      zh: ["高階證明與推理能力", "難題拆解與策略", "國際學術競賽視野"],
      en: ["Proof writing & rigorous reasoning", "Strategy for hard problems", "Global academic competition exposure"]
    },
    link: "https://www.imo-official.org/",
    tags: { zh: ["數學奧賽", "證明", "國際"], en: ["Olympiad", "Proofs", "International"] }
  },
  {
    id: "kangaroo",
    level: "highschool",
    category: "math",
    title: { zh: "Mathematical Kangaroo（數學袋鼠）", en: "Mathematical Kangaroo" },
    date: { zh: "每年 3 月（多國同步）", en: "Every March (worldwide)" },
    location: { zh: "多國舉辦（依各地考場）", en: "Many countries (local test centers)" },
    description: {
      zh: "以趣味與啟發式題型聞名的全球大型數學活動，適合競賽入門到中階學生培養思維與解題直覺。",
      en: "A widely participated international math contest known for fun, thought-provoking problems—great for building intuition and confidence."
    },
    learn: {
      zh: ["邏輯推理與數學直覺", "快速判讀題意", "建立競賽節奏與穩定度"],
      en: ["Logical thinking & intuition", "Fast reading and interpreting problems", "Competition rhythm and consistency"]
    },
    link: "https://mathkangaroo.org/",
    tags: { zh: ["入門友善", "邏輯", "全球"], en: ["Beginner-friendly", "Logic", "Global"] }
  },
  {
    id: "immc",
    level: "highschool",
    category: "math",
    title: { zh: "International Mathematical Modeling Challenge（IMMC）", en: "International Mathematical Modeling Challenge (IMMC)" },
    date: { zh: "每年一季（依年度公告）", en: "Seasonal (check annual announcement)" },
    location: { zh: "線上提交（依各國/地區規則）", en: "Online submission (varies by region)" },
    description: {
      zh: "高中數學建模競賽，強調把真實世界問題轉成模型、做假設、驗證與撰寫完整報告，非常適合想做跨領域專題與研究型作品集的學生。",
      en: "A high-school modeling competition focused on translating real-world problems into mathematical models, validating assumptions, and writing a full report."
    },
    learn: {
      zh: ["數學建模與資料分析", "英文研究報告寫作", "團隊分工與專題管理"],
      en: ["Modeling & data analysis", "English research writing", "Teamwork & project management"]
    },
    link: "https://www.immchallenge.org/",
    tags: { zh: ["建模", "研究報告", "跨域"], en: ["Modeling", "Research paper", "Interdisciplinary"] }
  },

  // High school - Science
  {
    id: "isef",
    level: "highschool",
    category: "science",
    title: { zh: "Regeneron ISEF（國際科學與工程大展）", en: "Regeneron ISEF (International Science and Engineering Fair)" },
    date: { zh: "每年 5 月（需先通過地區/國家賽）", en: "Annually in May (qualification via regional/national fairs)" },
    location: { zh: "美國（決賽地點依年度）", en: "United States (finals location varies)" },
    description: {
      zh: "全球最大規模高中科研競賽之一，涵蓋科學、工程、AI、生醫等領域。重點是「原創研究」與「研究溝通」，很適合想走研究/理工申請的學生。",
      en: "One of the largest global research competitions for high school students across science, engineering, AI, and biomedicine—highly valued for original research and communication."
    },
    learn: {
      zh: ["研究問題設定與方法設計", "數據分析與結論論證", "海報/簡報與評審問答"],
      en: ["Research design & methodology", "Data analysis & argumentation", "Poster/pitch and Q&A with judges"]
    },
    link: "https://www.societyforscience.org/isef/",
    tags: { zh: ["科研", "工程", "國際舞台"], en: ["Research", "Engineering", "Global stage"] }
  },
  {
    id: "genius",
    level: "highschool",
    category: "science",
    title: { zh: "GENIUS Olympiad（永續主題國際競賽）", en: "GENIUS Olympiad (Sustainability-focused)" },
    date: { zh: "每年春季（依年度公告）", en: "Every spring (check annual announcement)" },
    location: { zh: "美國紐約州（常見主辦地）", en: "New York State, USA (commonly hosted)" },
    description: {
      zh: "以環境永續為核心，涵蓋科學、工程、寫作、藝術與商業提案。適合想把科技能力連結到 SDGs、環境與社會影響的學生。",
      en: "A sustainability-centered international competition spanning science, engineering, writing, arts, and business—great for linking STEM to SDGs and real impact."
    },
    learn: {
      zh: ["永續議題研究與解決方案設計", "跨領域作品表達", "國際評審溝通與敘事能力"],
      en: ["Sustainability research & solution design", "Interdisciplinary expression", "Storytelling and pitching to international judges"]
    },
    link: "https://geniusolympiad.org/",
    tags: { zh: ["永續", "跨域", "作品集"], en: ["Sustainability", "Interdisciplinary", "Portfolio"] }
  },

  // High school - CS
  {
    id: "usaco",
    level: "highschool",
    category: "cs",
    title: { zh: "USACO（美國資訊奧賽訓練與競賽）", en: "USACO (USA Computing Olympiad)" },
    date: { zh: "每年多場次（通常冬季到春季）", en: "Multiple rounds yearly (typically winter–spring)" },
    location: { zh: "線上", en: "Online" },
    description: {
      zh: "以演算法與資料結構為核心的程式競賽體系，適合從入門一路練到進階。對申請資工、AI、資料科學很加分。",
      en: "An algorithm-and-data-structures focused contest system with multiple levels—excellent for building CS fundamentals and strengthening applications in CS/AI/data."
    },
    learn: {
      zh: ["演算法與資料結構", "程式效率與除錯能力", "競賽解題流程與思維"],
      en: ["Algorithms & data structures", "Efficiency and debugging", "Competitive problem-solving workflow"]
    },
    link: "https://usaco.org/",
    tags: { zh: ["演算法", "資料結構", "線上"], en: ["Algorithms", "Data structures", "Online"] }
  },

  // High school - Language/Writing
  {
    id: "nyt",
    level: "highschool",
    category: "language",
    title: { zh: "The New York Times 學生寫作競賽", en: "The New York Times Student Contests" },
    date: { zh: "全年多場次（依各項競賽公告）", en: "Multiple contests throughout the year" },
    location: { zh: "線上", en: "Online" },
    description: {
      zh: "以英文寫作培養觀點、論證與國際議題理解的優質資源。非常適合想把科技、社會、國際觀結合成文字作品的學生。",
      en: "A strong platform for building English writing, argumentation, and global issue awareness—great for turning your ideas into publishable work."
    },
    learn: {
      zh: ["英文論述與批判思考", "選題研究與資料引用", "寫作結構與語感提升"],
      en: ["Argumentation & critical thinking", "Research and evidence use", "Structure and writing fluency"]
    },
    link: "https://www.nytimes.com/spotlight/learning-contests",
    tags: { zh: ["英文寫作", "觀點", "國際議題"], en: ["English writing", "Opinion", "Global issues"] }
  },

  // College - Math
  {
    id: "imc",
    level: "college",
    category: "math",
    title: { zh: "IMC（國際大學生數學競賽）", en: "IMC (International Mathematics Competition for University Students)" },
    date: { zh: "每年夏季（依年度公告）", en: "Annually in summer (check updates)" },
    location: { zh: "歐洲（歷年多在保加利亞舉辦）", en: "Europe (often hosted in Bulgaria historically)" },
    description: {
      zh: "面向大學生的高難度數學競賽，題目通常具理論深度，適合想挑戰高等數學與研究導向思維的同學。",
      en: "A challenging university-level competition featuring deeper theoretical problems—ideal for students aiming to sharpen advanced math and research-style thinking."
    },
    learn: {
      zh: ["高等數學綜合能力", "嚴謹推導與解題深度", "國際學術交流"],
      en: ["Advanced math breadth", "Rigorous reasoning depth", "International academic exposure"]
    },
    link: "https://www.imc-math.org.uk/",
    tags: { zh: ["大學數學", "理論", "挑戰"], en: ["University math", "Theory", "Challenge"] }
  },

  // College - CS
  {
    id: "icpc",
    level: "college",
    category: "cs",
    title: { zh: "ICPC（國際大學生程式競賽）", en: "ICPC (International Collegiate Programming Contest)" },
    date: { zh: "每年：區域賽 → 世界總決賽", en: "Yearly: regional contests → world finals" },
    location: { zh: "全球各區域", en: "Worldwide (regional sites)" },
    description: {
      zh: "全球最大型的大學生團隊程式競賽，三人一隊解題，極度強調團隊默契、策略與演算法能力，是資工圈非常有指標性的競賽。",
      en: "The world’s largest team-based collegiate programming contest. Teams of three solve algorithmic problems under time pressure—highly regarded in CS communities."
    },
    learn: {
      zh: ["團隊協作與分工", "演算法策略與實戰解題", "高壓溝通與穩定輸出"],
      en: ["Team collaboration", "Algorithmic strategy in practice", "Communication under pressure"]
    },
    link: "https://icpc.global/",
    tags: { zh: ["團隊賽", "演算法", "國際"], en: ["Team contest", "Algorithms", "International"] }
  },

  // College - Entrepreneurship
  {
    id: "comp_sci_list",
    level: "college",
    category: "entrepreneurship",
    title: { zh: "國際創業/商業提案競賽（查詢入口）", en: "Global Entrepreneurship / Pitch Competitions (Directory)" },
    date: { zh: "全年不定期（依各賽事公告）", en: "Year-round (varies by competition)" },
    location: { zh: "依主辦單位（線上/線下皆有）", en: "Organizer-dependent (online/offline)" },
    description: {
      zh: "創業賽常要求團隊提出商業模式、產品雛型、影響力與市場策略。若你想把 AI/工程作品轉成「可落地的解決方案」，創業競賽很適合。",
      en: "Pitch competitions typically require business models, prototypes, impact, and go-to-market strategy—great for turning engineering/AI projects into real-world solutions."
    },
    learn: {
      zh: ["商業模式與市場驗證", "簡報與提案敘事", "產品思維與團隊合作"],
      en: ["Business modeling & validation", "Pitch storytelling", "Product thinking & teamwork"]
    },
    link: "https://www.competitionsciences.org/competitions",
    tags: { zh: ["創業", "提案", "產品"], en: ["Entrepreneurship", "Pitch", "Product"] }
  },

  // Search platform - Bhuntr (both levels)
  {
    id: "bhuntr",
    level: "college",
    category: "language",
    title: { zh: "賞金獵人 Bhuntr（競賽/徵件搜尋平台）", en: "Bhuntr (Competition & Calls Directory)" },
    date: { zh: "隨時可查（依公告更新）", en: "Always available (updates by postings)" },
    location: { zh: "線上", en: "Online" },
    description: {
      zh: "如果你想找「近期」可報名的比賽（含台灣與國際），建議用關鍵字（數學/科學/寫作/創業/程式）快速篩選，直接追截止日。",
      en: "Great for finding currently open opportunities (Taiwan + global). Search by keywords (math/science/writing/startup/coding) and track deadlines."
    },
    learn: {
      zh: ["建立你的競賽雷達（追截止日）", "快速比對資格與主題", "累積作品集與實戰經歷"],
      en: ["Build your opportunity radar", "Match eligibility & themes quickly", "Grow portfolio with real submissions"]
    },
    link: "https://bhuntr.com/",
    tags: { zh: ["搜尋平台", "截止日", "徵件"], en: ["Directory", "Deadlines", "Calls"] }
  }
];

const Events = () => {
  const [lang, setLang] = useState<Lang>("zh");
  const [level, setLevel] = useState<"all" | "highschool" | "college">("all");

  const ui = useMemo(() => {
    if (lang === "zh") {
      return {
        title: "競賽資訊",
        hint: "整理高中生與大學生可參加的數學、科學、資訊、創業與語文競賽（含國際與台灣資源）",
        zh: "中文",
        en: "English",
        all: "全部",
        hs: "高中生",
        uni: "大學生",
        recommend: "想推薦競賽？",
        recommendHint: "如果你知道近期值得參加的競賽/徵件，也歡迎透過訂閱頁面與我分享（我會整理更新在這裡）。",
        subscribe: "前往訂閱頁面",
        open: "開啟連結"
      };
    }
    return {
      title: "Competitions",
      hint: "A curated list of competitions for high school & college students (math, science, CS, entrepreneurship, and writing).",
      zh: "中文",
      en: "English",
      all: "All",
      hs: "High School",
      uni: "College",
      recommend: "Recommend a competition?",
      recommendHint:
        "If you know a good competition or an open call worth sharing, send it via the subscription page—I'll curate and update this list.",
      subscribe: "Go to Subscribe",
      open: "Open link"
    };
  }, [lang]);

  const levelLabel = useMemo(() => {
    if (lang === "zh") return { highschool: "高中生", college: "大學生" };
    return { highschool: "High School", college: "College" };
  }, [lang]);

  const categoryLabel = useMemo(() => {
    if (lang === "zh") {
      return {
        math: "數理",
        science: "科學",
        cs: "資訊",
        entrepreneurship: "創業",
        language: "語文"
      };
    }
    return {
      math: "Math",
      science: "Science",
      cs: "Computing",
      entrepreneurship: "Entrepreneurship",
      language: "Language/Writing"
    };
  }, [lang]);

  const list = useMemo(() => {
    const filtered =
      level === "all" ? competitions : competitions.filter((c) => c.level === level);
    // 讓 Bhuntr 永遠顯示在最下方
    const pinned = filtered.filter((c) => c.id === "bhuntr");
    const rest = filtered.filter((c) => c.id !== "bhuntr");
    return [...rest, ...pinned];
  }, [level]);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <SectionHeader title={ui.title} hint={ui.hint} />

          {/* Language toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={lang === "zh" ? "default" : "outline"}
              onClick={() => setLang("zh")}
              className="gap-2"
            >
              <Languages className="w-4 h-4" />
              {ui.zh}
            </Button>
            <Button
              variant={lang === "en" ? "default" : "outline"}
              onClick={() => setLang("en")}
              className="gap-2"
            >
              <Languages className="w-4 h-4" />
              {ui.en}
            </Button>
          </div>
        </div>

        {/* Level filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Button variant={level === "all" ? "default" : "outline"} onClick={() => setLevel("all")}>
            {ui.all}
          </Button>
          <Button
            variant={level === "highschool" ? "default" : "outline"}
            onClick={() => setLevel("highschool")}
          >
            {ui.hs}
          </Button>
          <Button
            variant={level === "college" ? "default" : "outline"}
            onClick={() => setLevel("college")}
          >
            {ui.uni}
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {list.map((c, index) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              className="p-5 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-bold text-foreground mb-2">{c.title[lang]}</h3>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {c.date[lang]}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {c.location[lang]}
                    </span>
                  </div>
                </div>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0"
                  aria-label={ui.open}
                  title={ui.open}
                >
                  <Button variant="outline" className="gap-2">
                    {ui.open} <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{c.description[lang]}</p>

              <div className="mb-4">
                <div className="text-sm font-semibold text-foreground mb-2">
                  {lang === "zh" ? "你可以學到什麼" : "What You Will Learn"}
                </div>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {c.learn[lang].map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full border border-border bg-primary/10 text-muted-foreground">
                  {levelLabel[c.level]}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-border bg-primary/10 text-muted-foreground">
                  {categoryLabel[c.category]}
                </span>
                {c.tags[lang].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-border bg-primary/10 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-xs text-muted-foreground break-all">
                {lang === "zh" ? "相關連結：" : "Link: "} {c.link}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="p-5 mt-6 rounded-2xl bg-primary-soft border border-primary/20">
          <h3 className="font-bold text-foreground mb-2">{ui.recommend}</h3>
          <p className="text-sm text-muted-foreground mb-4">{ui.recommendHint}</p>
          <Button asChild>
            <Link to="/subscribe" className="gap-2">
              {ui.subscribe} <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Events;

