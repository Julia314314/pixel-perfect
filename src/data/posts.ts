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
    excerpt:
      "醫療 AI 的關鍵不只在模型準確率，而在臨床需求、資料品質、流程整合與倫理治理；工程要能落地，必須被醫療現場理解與信任。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2023-05-10",
    tags: ["AI", "Healthcare", "Clinical", "Ethics", "Data Governance"],
    wordCount: 980,
    contentHtml: `
      <h1>AI × 醫療科技：從研究室到臨床應用</h1>
      <p><b>AI in Healthcare: From Research Labs to Clinical Practice</b></p>

      <h2>學習內容</h2>
      <p>在 2023 年費城科技週的脈絡下，人工智慧（AI）在醫療科技的應用被視為下一代醫療體系的重要支柱。從醫學影像輔助診斷、疾病風險預測，到臨床決策支援與精準醫療，AI 正逐步進入實際醫療流程。費城結合頂尖醫學院與研究機構的優勢，使工程師能更貼近臨床情境，理解醫師在診療過程中真正需要的「可用性、可追溯性與可驗證性」。這也提醒學習者：醫療 AI 不只是演算法能力的競賽，更是一項結合資料工程、醫療專業、法規與倫理的系統工程問題。</p>
      <p><i>At Philadelphia Tech Week 2023, AI-driven healthcare was highlighted as a cornerstone of future medical systems. Applications ranged from medical imaging and disease risk prediction to clinical decision support and precision medicine. Philadelphia’s strong integration of hospitals and research institutions shows that healthcare AI is not only about algorithms, but a systems engineering challenge that depends on data integrity, workflow integration, regulation, and ethics.</i></p>

      <h2>學習重點</h2>
      <ul>
        <li>AI 在醫療場域的實際應用情境（影像、預測、臨床支援）</li>
        <li>工程與臨床流程整合能力：可用、可驗證、可追溯</li>
        <li>資料治理、倫理與責任歸屬：隱私、偏誤與安全性</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>我最深刻的感受是：醫療 AI 的成功關鍵，常常不在模型是否「最複雜」，而在於是否真正理解臨床需求、並且能被現場信任與採用。當工程師不了解醫師的工作節奏、資料生成方式與決策風險時，再高的準確率也可能無法落地。這也讓我重新定位工程學習的方向：工程能力不只是解題與開發，而是跨專業溝通、把技術嵌入流程、並願意為結果負責的系統性能力。</p>
      <p><i>The most successful healthcare AI projects are often not the most complex, but those that best understand clinical needs and earn real-world trust. Without respecting medical workflows and decision risk, even strong models may fail to deploy. This reshaped my view of engineering: value lies in cross-disciplinary communication, workflow integration, and accountability.</i></p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://www.pennmedicine.org/research" target="_blank" rel="noreferrer">Penn Medicine Research</a></li>
        <li><a href="https://www.phillytechweek.com/" target="_blank" rel="noreferrer">Philadelphia Tech Week（官方）</a></li>
      </ul>
    `
  },

  {
    slug: "philly-tech-week-2023-university-startup-ecosystem",
    title: "費城科技週觀察（2023）：大學 × 新創生態系——學術如何轉化為影響力",
    excerpt:
      "從費城的大學新創生態，看研究如何被轉化為產品與社會影響：育成、商轉、原型驗證與城市資源如何串起來。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2023-05-11",
    tags: ["University", "Startup", "Innovation", "Tech Transfer", "Ecosystem"],
    wordCount: 960,
    contentHtml: `
      <h1>大學 × 新創生態系：學術如何轉化為影響力</h1>
      <p><b>Universities & Startup Ecosystems: Turning Research into Impact</b></p>

      <h2>學習內容</h2>
      <p>在 2023 年的觀察中，費城的大學不只是教育機構，更是城市創新的「加速器」。透過創業育成中心、研究商轉機制與學生創新資源，學術研究能夠從校園走向產業，形成一個可持續運作的新創生態系。這些機制讓學生在仍處於學習階段時，就能接觸市場需求、產品驗證與跨領域合作，理解「研究成果如何變成可用的解決方案」。對工程與科技學習者而言，這也是一種把專業能力轉成影響力的方法：不是只做出技術，而是建立能被使用、能被迭代的系統。</p>
      <p><i>In 2023, Philadelphia’s universities stood out as innovation accelerators for the city. Through incubators, technology transfer, and student entrepreneurship support, academic research can move beyond campus and become real products and services. For learners, the key is understanding how prototypes, validation, and cross-functional collaboration turn knowledge into impact.</i></p>

      <h2>學習重點</h2>
      <ul>
        <li>大學作為創新引擎：資源、導師、合作網絡如何運作</li>
        <li>研究商轉與原型驗證：從想法 → 原型 → 使用者回饋 → 迭代</li>
        <li>學生參與新創途徑：團隊協作、社群連結、實作證據累積</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>這些案例讓我重新思考「學習成果」的定義。學習不該只停留在報告或成績，而是能否把所學轉化為能被驗證、被使用、被持續改進的解決方案。對工程學生而言，越早接觸真實需求與使用者回饋，就越能培養系統思維與產品化能力。我也因此更想在自己的學習歷程中，強調可展示的產出（作品、原型、流程與反思），讓學習變得更可被理解與信任。</p>
      <p><i>These discussions reframed “learning outcomes” for me. Education should not end at reports or grades—it should produce solutions that can be tested, used, and iterated. Early exposure to real needs and user feedback builds systems thinking and productization skills, which I now aim to reflect in my own portfolio.</i></p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://www.pennovation.upenn.edu/" target="_blank" rel="noreferrer">Pennovation Works</a></li>
        <li><a href="https://sciencecenter.org/" target="_blank" rel="noreferrer">University City Science Center</a></li>
        <li><a href="https://www.phillytechweek.com/" target="_blank" rel="noreferrer">Philadelphia Tech Week（官方）</a></li>
      </ul>
    `
  },

  {
    slug: "philly-tech-week-2023-biomedical-human-centered",
    title: "費城科技週觀察（2023）：生醫工程整合——以人為本的科技設計",
    excerpt:
      "生醫工程的核心不是炫技，而是安全、可用性與真實使用情境：可靠、可追溯、可被信任，才能真正改善醫療品質。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2023-05-12",
    tags: ["Biomedical", "Human-Centered", "Engineering", "Safety", "Validation"],
    wordCount: 920,
    contentHtml: `
      <h1>生醫工程整合：以人為本的科技設計</h1>
      <p><b>Biomedical Engineering Integration: Human-Centered Technology</b></p>

      <h2>學習內容</h2>
      <p>從 2023 年的費城科技週觀察延伸，費城在生醫工程與製藥科技上展現高度整合的產業優勢。許多案例共同指向一個核心：在醫療領域，工程決策直接影響病患安全與醫療品質，因此「可用性、可靠性與可驗證性」比炫目的效能更重要。生醫產品往往要同時面對多方使用者（病患、醫護、管理端），也要符合嚴格的法規與品質系統。這使得生醫工程成為典型的系統工程：必須把技術、流程、使用情境與風險控管一起設計。</p>
      <p><i>Philadelphia’s strength in biomedical engineering and life sciences highlights a key lesson: in healthcare, engineering choices directly affect safety and quality. Therefore, usability, reliability, and validation often matter more than raw performance. Biomedical innovation is systems engineering—integrating technology, workflow, user context, and risk management.</i></p>

      <h2>學習重點</h2>
      <ul>
        <li>生醫產品的系統性設計：需求、風險、驗證與品質管理</li>
        <li>使用者（病患／醫護）導向思維：情境、負擔、可理解性</li>
        <li>可驗證、可追溯的重要性：安全性、法規與信任</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>我對生醫工程最強烈的感受是「工程在這裡代表責任」。在醫療場域，技術不是越快越好，而是必須可靠、可用、能被信任，並能在長期維護與人員更替下持續運作。這也讓我在看待工程作品時，更願意把「流程、驗證、風險與反思」納入成果的一部分，因為這些往往比單次展示的效果更能證明工程能力。</p>
      <p><i>Biomedical engineering reminded me that engineering is responsibility. Success is not about speed alone, but trustworthiness, usability, and long-term maintainability. I now value workflows, validation, risk thinking, and reflection as essential parts of an engineering outcome.</i></p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://www.selectgreaterphl.com/industries/life-sciences/" target="_blank" rel="noreferrer">Philadelphia Life Sciences</a></li>
        <li><a href="https://www.phillytechweek.com/" target="_blank" rel="noreferrer">Philadelphia Tech Week（官方）</a></li>
      </ul>
    `
  },

  /* =========================
     2024｜費城科技週觀察
     ========================= */

  {
    slug: "philly-tech-week-2024-generative-ai",
    title: "費城科技週觀察（2024）：Generative AI——工程與創意的轉折點",
    excerpt:
      "生成式 AI 不再只是工具，而是協作夥伴；重點從模型能力轉向工作流設計、風險控管、評估方法與責任邊界。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2024-05-10",
    tags: ["Generative AI", "Workflow", "Evaluation", "Accountability", "Human-AI"],
    wordCount: 980,
    contentHtml: `
      <h1>Generative AI：工程與創意的轉折點</h1>
      <p><b>Generative AI: A Turning Point for Engineering and Creativity</b></p>

      <h2>學習內容</h2>
      <p>在 2024 年的費城科技週觀察中，生成式 AI 成為最具代表性的趨勢之一。與過去主要扮演輔助角色的 AI 不同，生成式模型已開始參與內容創作、程式撰寫、產品設計與初步決策流程。這代表 AI 不再只是工具，而逐步成為「協作夥伴」。因此焦點也從模型能力本身，轉向如何設計工作流（workflow）、如何建立可重複的評估方法、以及如何進行風險控管與責任界定。對學習者而言，理解「人如何與 AI 協作」變得與理解模型同樣重要。</p>
      <p><i>At Philadelphia Tech Week 2024, Generative AI stood out as a defining trend. As models contribute to creation, coding, and design, the focus shifts from model capability to workflow design, repeatable evaluation, risk management, and accountability boundaries—making human–AI collaboration a core learning objective.</i></p>

      <h2>學習重點</h2>
      <ul>
        <li>AI 與人類的協作關係：分工、驗證與回饋迴圈</li>
        <li>評估與責任機制：可重複的標準、風險控管與版本追蹤</li>
        <li>工程師角色轉變：從執行者 → 提問者／整合者／決策者</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>生成式 AI 的快速發展，讓我更確定「問對問題」會變成工程師的核心能力。當 AI 能快速產出答案時，人類的價值反而集中在：是否能定義問題、判斷結果、理解限制、並願意承擔後果。這也提醒我在學習時要更重視方法論：如何設計評估、如何建立可追溯的流程、以及如何把倫理與責任納入技術決策，而不只是追求更快的輸出。</p>
      <p><i>Generative AI convinced me that asking the right questions will be a core engineering skill. As AI generates outputs quickly, human value lies in problem framing, evaluation, understanding limitations, and taking responsibility. It pushes me to focus more on methodology—evaluation design, traceable workflows, and ethical decision-making.</i></p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://openai.com/" target="_blank" rel="noreferrer">OpenAI</a></li>
      </ul>
    `
  },

  {
    slug: "philly-tech-week-2024-sustainable-cities",
    title: "費城科技週觀察（2024）：工程 × 永續城市——系統思維的實踐",
    excerpt:
      "智慧城市的核心不是單點技術，而是整體系統設計：效率、公平、維護與政策協作必須一起被考慮。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2024-05-11",
    tags: ["Smart City", "Sustainability", "Systems Thinking", "Policy", "Equity"],
    wordCount: 940,
    contentHtml: `
      <h1>工程 × 永續城市：系統思維的實踐</h1>
      <p><b>Engineering & Sustainable Cities: Applying Systems Thinking</b></p>

      <h2>學習內容</h2>
      <p>2024 年的城市科技討論，讓我更清楚看到「城市本身就是一個超大型系統」。費城的案例顯示，工程不只解決效率問題，也必須把公平性、可維護性與長期治理一併納入設計。交通、能源與公共資源的優化往往牽涉多方利害關係人與政策框架，因此技術方案需要能與制度協作，並考慮長期成本與維護能力。對工程與系統思維學習者而言，這是一堂很實際的課：真正的永續，不只是一個環保口號，而是「能長期運作、能被管理、能被維修」的可持續系統。</p>
      <p><i>Smart city discussions in 2024 reinforced that a city is a massive system. Philadelphia examples show engineering must consider equity, maintainability, and governance—not just efficiency. Sustainable solutions require policy integration, stakeholder alignment, and lifecycle thinking, where “sustainability” means systems that can operate, be managed, and be maintained long-term.</i></p>

      <h2>學習重點</h2>
      <ul>
        <li>系統工程在城市治理中的角色：跨部門、跨資料源的整合</li>
        <li>工程與公共政策的連結：制度協作、利害關係人溝通</li>
        <li>永續的工程定義：長期維護、資源配置與可擴展性</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>城市系統會放大工程決策的影響：一個設計選擇可能影響成千上萬人的生活品質。這讓我更意識到工程設計背後的公共責任——工程師不只是做出功能，而是要把風險、資源與公平一起放進設計。對我而言，系統思維不只是課堂概念，而是面對真實社會問題時，必須具備的基本能力。</p>
      <p><i>Urban systems amplify the impact of engineering decisions—one design choice can affect thousands of lives. This strengthened my awareness of public responsibility: engineering is not only about functionality, but also risk, resources, and equity. Systems thinking is not optional; it’s essential for real-world problem-solving.</i></p>

      <h2>相關資料連結</h2>
      <ul>
        <li><a href="https://www.phila.gov/programs/innovation/" target="_blank" rel="noreferrer">City of Philadelphia – Innovation</a></li>
      </ul>
    `
  },

  {
    slug: "philly-tech-week-2024-women-tech-leadership",
    title: "費城科技週觀察（2024）：女性 × 科技 × 領導力——多元視角驅動創新",
    excerpt:
      "多元不是口號，而是創新品質與決策深度的來源；女性帶來新的問題定義方式，讓科技更全面、更貼近真實需求。",
    categoryKey: "philly-week",
    category: "費城科技週觀察",
    date: "2024-05-12",
    tags: ["Women in Tech", "Leadership", "Diversity", "Inclusion", "Innovation"],
    wordCount: 960,
    contentHtml: `
      <h1>女性 × 科技 × 領導力：多元視角驅動創新</h1>
      <p><b>Women × Technology × Leadership: Diversity as a Driver of Innovation</b></p>

      <h2>學習內容</h2>
      <p>在 2024 年費城科技週的脈絡中，「多元與包容」不再只是社會倡議，而被更務實地討論為創新能力的一部分。當團隊背景更不同、經驗更多元，問題往往能被更準確地定義，決策也更具深度與風險意識。女性在科技領域的能見度提升，也讓「技術專業」與「領導力」之間的連結更明顯：領導不是離開技術，而是在技術與人之間建立共同語言、推動資源配置與讓成果真正落地。對學習者而言，這提醒我們：創新不只來自技術突破，也來自視角的擴張。</p>
      <p><i>In 2024, diversity and inclusion were discussed not only as values, but as practical drivers of innovation. Diverse teams tend to define problems more accurately and make deeper decisions with stronger risk awareness. The growing visibility of women in tech also highlights how leadership connects technical expertise with communication, resource alignment, and real-world execution.</i></p>

      <h2>學習重點</h2>
      <ul>
        <li>多元視角提升問題定義品質：更貼近使用者與現實情境</li>
        <li>女性科技人才的成長路徑：專業深耕＋跨域影響力</li>
        <li>技術與領導力整合：把想法變成可落地的協作成果</li>
      </ul>

      <h2>我的觀察與反思</h2>
      <p>我逐漸理解，女性在科技領域的價值不只是「證明自己做得到」，而是帶來不同的觀察方式與提問角度，進而改變問題被定義的方式。當科技解法要回應更廣泛的社會需求時，多元視角其實是提高品質的必要條件。這也讓我更堅定：持續走在工程與科技路上，不是為了成為例外，而是讓「女性投入科技」變成更正常、更可見、也更能推動更好決策的常態。</p>
      <p><i>I’ve come to see that women in tech add value not only by proving capability, but by bringing distinct perspectives that reshape how problems are defined. For technology that serves broader social needs, diversity is a quality requirement. Continuing my path in engineering is not about being an exception—it’s about making inclusion normal, visible, and impactful.</i></p>

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
  return [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count);
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(p => p.slug === slug);
};
