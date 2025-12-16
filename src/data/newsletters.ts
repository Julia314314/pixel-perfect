export interface Newsletter {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  contentHtml: string;
}

export const newsletters: Newsletter[] = [
  {
    slug: "newsletter-2025-q4",
    title: "科技新知小站｜季度電子報（2025 Q4）",
    excerpt: "本季 3 大趨勢＋我最推薦的 1 個工具＋下季預告（示範稿）。",
    date: "2025-12-01",
    contentHtml: `
      <h2>本季 3 大趨勢</h2>
      <ul>
        <li><b>AI Agent 工作流：</b>從聊天走向任務完成。</li>
        <li><b>先進封裝與系統整合：</b>跨領域人才更吃香。</li>
        <li><b>原型文化擴散：</b>Demo 與可驗證成果更被重視。</li>
      </ul>

      <h2>我最推薦的 1 個工具</h2>
      <p>用來整理知識與輸出內容的工具（你可改成 Notion/Obsidian/任何你想推薦的）。</p>

      <h2>下季預告</h2>
      <p>我會深挖：AI 在工業工程的落地案例，以及如何把專題做成可被看懂的作品集。</p>
    `
  }
];

export const getNewsletterBySlug = (slug: string): Newsletter | undefined => {
  return newsletters.find(n => n.slug === slug);
};
