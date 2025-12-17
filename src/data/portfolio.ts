export type Lang = "zh" | "en";

export interface PortfolioText {
  title: string;
  role: string;
  highlights: string[];
  outcomes: string[];
}

export interface PortfolioItem {
  key: string;
  zh: PortfolioText;
  en: PortfolioText;
  tags: string[];
  link: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    key: "physics-measurement",
    zh: {
      title: "全國量測物理競賽",
      role: "研究與數據分析／實驗設計",
      highlights: [
        "以量測與誤差分析為核心，建立可重複驗證的實驗流程。",
        "將原始資料整理、圖表化與推論，強化以證據支持結論的能力。",
        "在時間壓力下完成方案迭代，訓練問題定位與快速修正能力。"
      ],
      outcomes: [
        "完成競賽作品與完整實驗紀錄",
        "培養資料分析、誤差控制、科學寫作與口頭表達能力"
      ]
    },
    en: {
      title: "National Physics Measurement Competition",
      role: "Research & Data Analysis / Experimental Design",
      highlights: [
        "Built a reproducible experimental workflow with a strong focus on measurement and error analysis.",
        "Processed raw data into visualized results and evidence-based conclusions.",
        "Iterated solutions under time constraints, strengthening rapid problem diagnosis."
      ],
      outcomes: [
        "Completed a competition project with full experimental documentation",
        "Developed skills in data analysis, uncertainty control, and scientific communication"
      ]
    },
    tags: ["Physics Measurement", "Error Analysis", "Scientific Inquiry"],
    link: "https://www.canva.com/design/DAG7uuDykeo/3GmfhVynGU8u3XvJvDuJkg/edit"
  },

  {
    key: "mary-curie-camp",
    zh: {
      title: "瑪莉居禮科學營",
      role: "跨域學習者／小組專題參與",
      highlights: [
        "在密集課程中接觸前沿科學與 AI 議題，建立跨領域理解。",
        "以小組合作完成任務，將抽象概念轉化為具體成果。",
        "透過反思與筆記，培養可輸出的學習能力。"
      ],
      outcomes: [
        "完成營隊專題與簡報成果",
        "強化跨域整合、團隊協作與表達能力"
      ]
    },
    en: {
      title: "Mary Curie Science Camp",
      role: "Interdisciplinary Learner / Team Project Contributor",
      highlights: [
        "Explored frontier science topics and AI through an intensive interdisciplinary program.",
        "Collaborated in teams to transform abstract ideas into tangible outcomes.",
        "Developed output-oriented learning through structured reflection and documentation."
      ],
      outcomes: [
        "Delivered a team project and presentation",
        "Strengthened interdisciplinary thinking and teamwork skills"
      ]
    },
    tags: ["Interdisciplinary", "AI", "Team Project"],
    link: "https://www.canva.com/design/DAG7upvCSbs/4yBCS948nCv-UFIiDi2pVg/edit"
  },

  {
    key: "nthu-innovation",
    zh: {
      title: "清華大學科學創新暑期營",
      role: "專題實作／團隊協作",
      highlights: [
        "以專題式學習從需求出發，進行問題定義與任務拆解。",
        "運用工程思維完成原型與成果展示。",
        "反思可行性與使用者需求，提升解法實用性。"
      ],
      outcomes: [
        "完成專題原型與展示資料",
        "培養問題拆解、專案管理與簡報能力"
      ]
    },
    en: {
      title: "Tsing Hua University Science & Innovation Summer Program",
      role: "Project Implementation / Team Collaboration",
      highlights: [
        "Applied project-based learning starting from real needs and problem definition.",
        "Built prototypes using engineering thinking and presented results effectively.",
        "Reflected on feasibility and user needs to improve solution adoption."
      ],
      outcomes: [
        "Completed a project prototype and presentation materials",
        "Developed skills in project planning, presentation, and visualization"
      ]
    },
    tags: ["Innovation", "Project-Based Learning", "Engineering"],
    link: "https://www.canva.com/design/DAG7utUE7ZM/VIWVxrgeg2cgnPpQnArsbA/edit"
  },

  {
    key: "mun",
    zh: {
      title: "模擬聯合國（MUN）",
      role: "代表／文件撰寫／協商談判",
      highlights: [
        "在全英文議事環境中進行政策辯論與立場論證。",
        "撰寫決議草案，透過協商將分歧轉化為共識。",
        "培養跨文化溝通與公共議題視角。"
      ],
      outcomes: [
        "完成立場文件、決議草案與演講稿",
        "強化英文表達、談判協作與政策思維"
      ]
    },
    en: {
      title: "Model United Nations (MUN)",
      role: "Delegate / Drafting / Negotiation",
      highlights: [
        "Debated policies and defended national positions in an English-only parliamentary environment.",
        "Drafted resolutions and negotiated to transform disagreements into consensus.",
        "Strengthened cross-cultural communication and global issue awareness."
      ],
      outcomes: [
        "Produced position papers, draft resolutions, and speeches",
        "Enhanced skills in English communication, negotiation, and policy analysis"
      ]
    },
    tags: ["MUN", "International Affairs", "Negotiation"],
    link: "https://www.canva.com/design/DAGhCO-MY_c/tF8O9sVG_TrLRfLjrUi3QQ/edit"
  }
];
