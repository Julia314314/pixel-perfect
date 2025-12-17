export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  categoryKey: string;
  category: string;
  date: string;
  tags: string[];
  wordCount: number;
  contentHtml: string;
}

export const posts: Post[] = [
  /* =========================
     2023｜費城科技週觀察
     ========================= */

  {
    slug: "philly-tech-week-2023-ai-healthcare",
    title: "費城科技週觀察（2023）：AI × 醫療科技——從研究室到臨床應用",
    excerpt: "醫療 AI 的關鍵不只在模型準確率，而在臨床需求、資料品質、流程整合與倫理治理。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2023-05-10",
    tags: ["AI", "Healthcare", "Clinical", "Ethics"],
    wordCount: 780,
    contentHtml: `
      <h1>AI × 醫療科技：從研究室到臨床應用</h1>
      <p><b>AI in Healthcare: From Research Labs to Clinical Practice</b></p>

      <h2>學習內容</h2>
      <p>2023 年費城科技週中，人工智慧在醫療科技的應用成為核心議題。費城結合頂尖醫學院與研究機構，展示 AI 在醫學影像分析、疾病預測、臨床決策支援與精準醫療上的實際應用，顯示醫療 AI 本質上是一項跨領域的系統工程。</p>

      <h2>學習重點</h2>
      <ul>
        <li>AI 在醫療場域的實際應用情境</li>
        <li>工程與臨床流程的整合能力</li>
        <li>資料治理、倫理與責任歸屬</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>真正成功的醫療 AI 專案，往往不是技術最複雜的，而是最理解臨床需求的。工程師的價值，在於讓技術能被正確使用、被驗證，也能被負責。</p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://www.pennmedicine.org/research" target="_blank" rel="noreferrer">Penn Medicine Research</a></li>
        <li><a href="https://techlifescience.com/philadelphia-tech-week/" target="_blank" rel="noreferrer">Philadelphia Tech Week</a></li>
      </ul>
    `
  },

  {
    slug: "philly-tech-week-2023-university-startup-ecosystem",
    title: "費城科技週觀察（2023）：大學 × 新創生態系——學術如何轉化為影響力",
    excerpt: "從費城的大學新創環境，看研究如何被轉化為產品與社會影響。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2023-05-11",
    tags: ["University", "Startup", "Innovation"],
    wordCount: 760,
    contentHtml: `
      <h1>大學 × 新創生態系：學術如何轉化為影響力</h1>
      <p><b>Universities & Startup Ecosystems: Turning Research into Impact</b></p>

      <h2>學習內容</h2>
      <p>費城的大學透過創業育成、研究商轉與學生創新資源，讓學術研究能夠從校園走向產業，形成完整的新創生態系。</p>

      <h2>學習重點</h2>
      <ul>
        <li>大學作為創新引擎的角色</li>
        <li>研究商轉與原型驗證機制</li>
        <li>學生參與新創的實際途徑</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>這些案例讓我理解，工程學習不該只停留在報告，而是能被驗證、被使用、被持續改進的解決方案。</p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://www.pennovation.upenn.edu/" target="_blank" rel="noreferrer">Pennovation Works</a></li>
        <li><a href="https://sciencecenter.org/" target="_blank" rel="noreferrer">University City Science Center</a></li>
      </ul>
    `
  },

  {
    slug: "philly-tech-week-2023-biomedical-human-centered",
    title: "費城科技週觀察（2023）：生醫工程整合——以人為本的科技設計",
    excerpt: "生醫工程的核心不是炫技，而是安全、可用性與真實使用情境。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2023-05-12",
    tags: ["Biomedical", "Human-Centered", "Engineering"],
    wordCount: 700,
    contentHtml: `
      <h1>生醫工程整合：以人為本的科技設計</h1>
      <p><b>Biomedical Engineering Integration: Human-Centered Technology</b></p>

      <h2>學習內容</h2>
      <p>費城在生醫工程與製藥科技領域具有高度整合的產業優勢，工程決策直接影響病患安全與醫療品質。</p>

      <h2>學習重點</h2>
      <ul>
        <li>生醫產品的系統性設計</li>
        <li>使用者（病患／醫護）導向思維</li>
        <li>可驗證、可追溯的重要性</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>工程在醫療領域代表的是責任。比起追求極致效能，更重要的是可靠、可用、能被信任。</p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://www.selectgreaterphl.com/industries/life-sciences/" target="_blank" rel="noreferrer">Philadelphia Life Sciences</a></li>
      </ul>
    `
  },

  /* =========================
     2024｜費城科技週觀察
     ========================= */

  {
    slug: "philly-tech-week-2024-generative-ai",
    title: "費城科技週觀察（2024）：Generative AI——工程與創意的轉折點",
    excerpt: "生成式 AI 讓工程師的角色從執行者轉向提問者與決策者。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2024-05-10",
    tags: ["Generative AI", "Workflow", "Evaluation"],
    wordCount: 740,
    contentHtml: `
      <h1>Generative AI：工程與創意的轉折點</h1>
      <p><b>Generative AI: A Turning Point for Engineering and Creativity</b></p>

      <h2>學習內容</h2>
      <p>生成式 AI 開始參與創作、開發與決策流程，焦點從模型能力轉向工作流設計與風險控管。</p>

      <h2>學習重點</h2>
      <ul>
        <li>AI 與人類的協作關係</li>
        <li>評估與責任機制的重要性</li>
        <li>工程師角色的轉變</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>未來工程師的價值，不在於做得多快，而在於能否問對問題、判斷結果並承擔後果。</p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://openai.com/" target="_blank" rel="noreferrer">OpenAI</a></li>
      </ul>
    `
  },

  {
    slug: "philly-tech-week-2024-sustainable-cities",
    title: "費城科技週觀察（2024）：工程 × 永續城市——系統思維的實踐",
    excerpt: "智慧城市的核心不是單點技術，而是整體系統設計。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2024-05-11",
    tags: ["Smart City", "Sustainability", "Systems Thinking"],
    wordCount: 720,
    contentHtml: `
      <h1>工程 × 永續城市：系統思維的實踐</h1>
      <p><b>Engineering & Sustainable Cities: Applying Systems Thinking</b></p>

      <h2>學習內容</h2>
      <p>費城的城市科技案例顯示，工程不只解決效率問題，也必須考慮公平性與長期維護。</p>

      <h2>學習重點</h2>
      <ul>
        <li>系統工程在城市治理中的角色</li>
        <li>工程與公共政策的連結</li>
        <li>永續不只是環保，而是可維持</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>城市系統會放大工程決策的影響，這讓我更意識到工程設計背後的公共責任。</p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://www.phila.gov/programs/innovation/" target="_blank" rel="noreferrer">City of Philadelphia Innovation</a></li>
      </ul>
    `
  },

  {
    slug: "philly-tech-week-2024-women-tech-leadership",
    title: "費城科技週觀察（2024）：女性 × 科技 × 領導力——多元視角驅動創新",
    excerpt: "多元不是口號，而是創新品質與決策深度的來源。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2024-05-12",
    tags: ["Women in Tech", "Leadership", "Diversity"],
    wordCount: 740,
    contentHtml: `
      <h1>女性 × 科技 × 領導力：多元視角驅動創新</h1>
      <p><b>Women × Technology × Leadership: Diversity as a Driver of Innovation</b></p>

      <h2>學習內容</h2>
      <p>費城科技週強調多元背景對科技創新的重要性，女性逐漸在技術與領導角色中展現影響力。</p>

      <h2>學習重點</h2>
      <ul>
        <li>多元視角提升問題定義品質</li>
        <li>女性科技人才的成長路徑</li>
        <li>技術與領導力的整合</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>女性在科技領域的價值，不是成為例外，而是帶來新的問題視角，推動更好的決策與創新。</p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://www.womenintechphilly.org/" target="_blank" rel="noreferrer">Women in Tech Philadelphia</a></li>
      </ul>
    `
  }
];

export const getPostsByCategory = (categoryKey: string): Post[] => {
  return posts
    .filter(p => p.categoryKey === categoryKey)
    .sort((a, b) => b.date.localeCompare(a.date));
};

export const getLatestPosts = (count: number = 5): Post[] => {
  return [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(p => p.slug === slug);
};
