import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Lang = "zh" | "en";

type TrendItem = {
  id: string;
  month: "2025-10" | "2025-11";
  title: { zh: string; en: string };
  learning: { zh: string; en: string };
  perspective: { zh: string; en: string };
  takeaways: { zh: string[]; en: string[] };
  links: { label: string; url: string }[];
  tags: string[];
};

const MonthlyTrends = () => {
  const [lang, setLang] = useState<Lang>("zh");

  const ui = useMemo(() => {
    if (lang === "zh") {
      return {
        pageTitle: "每月科技趨勢摘要",
        hint: "每月精選趨勢：學習內容 × 我的見解 × 高中/大學學習重點 × 延伸閱讀（全球視角）",
        zh: "中文",
        en: "English",
        monthOct: "2025 年 10 月",
        monthNov: "2025 年 11 月",
        topic: "主題",
        learning: "學習內容",
        perspective: "我的見解",
        takeaways: "🎓 學習重點摘要（高中生／大學生）",
        refs: "相關連結",
        open: "開啟",
      };
    }
    return {
      pageTitle: "Monthly Technology Trends Digest",
      hint: "Monthly picks: learning content × my perspective × key takeaways (HS/College) × references (global view)",
      zh: "中文",
      en: "English",
      monthOct: "October 2025",
      monthNov: "November 2025",
      topic: "Topic",
      learning: "Learning Content",
      perspective: "My Perspective",
      takeaways: "🎓 Key Takeaways (High School / College)",
      refs: "References",
      open: "Open",
    };
  }, [lang]);

  const items: TrendItem[] = useMemo(
    () => [
      // =========================
      // 2025-10 (3 topics)
      // =========================
      {
        id: "2025-10-01",
        month: "2025-10",
        title: {
          zh: "端側 AI 時代全面展開：裝置算力成為 AI 體驗的核心",
          en: "The Rise of On-Device AI: Computing Power Defines AI Experience",
        },
        learning: {
          zh:
            "2025 年後，全球科技從「雲端 AI」逐步走向「端側（on-device）AI + 端雲協同」。各大晶片平台把 AI 加速單元（NPU）做得更強，讓語言模型、多模態推論能在手機、筆電、穿戴裝置上更即時地運行。\n\n" +
            "對學習者來說，AI 不再只是演算法或 Prompt；你需要理解「模型如何被壓縮與部署」、「功耗/溫度限制如何影響效能」、「端與雲如何分工」——因為這些因素會直接決定產品體驗（延遲、隱私、離線可用性、成本）。",
          en:
            "Since 2025, the industry has been shifting from cloud-only AI toward on-device AI with cloud collaboration. Stronger NPUs enable real-time inference for LLMs and multimodal models on phones, laptops, and wearables.\n\n" +
            "For learners, AI is no longer just algorithms or prompts. You should understand model compression/deployment, power/thermal constraints, and the division of work between device and cloud—because these factors directly shape user experience (latency, privacy, offline capability, and cost).",
        },
        perspective: {
          zh:
            "我把端側 AI 視為「系統重新分工」。原本集中在雲端的計算與決策開始往終端移動，這會改寫產品的成本結構（雲端成本 vs 裝置成本），也讓工程更像在做跨層級最佳化。\n\n" +
            "從工業與系統工程角度看，真正的競爭點不是單點算力，而是能否把端、雲、資料、使用者情境整合成一個穩定可迭代的系統。",
          en:
            "I see on-device AI as a redistribution of system responsibilities. Computation and decision-making move closer to users, reshaping cost structures (cloud cost vs device cost) and turning engineering into a cross-layer optimization problem.\n\n" +
            "From a systems/industrial engineering perspective, the real advantage isn’t raw compute alone—it’s whether you can integrate device, cloud, data, and user context into a reliable, iterative system.",
        },
        takeaways: {
          zh: [
            "搞懂端側 AI（on-device）與雲端 AI 的差別：延遲、隱私、離線能力",
            "了解 NPU/GPU 是什麼、為何會影響 AI 體驗",
            "知道「模型壓縮/量化/部署」為何是產品落地關鍵",
            "用系統思維看 AI：端雲分工、成本、效能與體驗一起優化",
          ],
          en: [
            "Understand on-device vs cloud AI: latency, privacy, offline capability",
            "Know what NPUs/GPUs do and why they affect AI experience",
            "Learn why compression/quantization/deployment matters for real products",
            "Think in systems: optimize device-cloud roles, cost, performance, and UX together",
          ],
        },
        links: [
          { label: "Apple Silicon", url: "https://www.apple.com/silicon/" },
          { label: "NVIDIA Edge AI", url: "https://www.nvidia.com/en-us/edge-ai/" },
          { label: "Qualcomm AI", url: "https://www.qualcomm.com/research/artificial-intelligence" },
        ],
        tags: ["On-device AI", "Chips", "Systems"],
      },
      {
        id: "2025-10-02",
        month: "2025-10",
        title: {
          zh: "全球 AI 治理進入實作期：從原則宣示到制度落地",
          en: "AI Governance in Action: From Principles to Enforceable Rules",
        },
        learning: {
          zh:
            "AI 治理正在從「倡議」走向「制度化」。全球主要框架（例如歐盟 AI Act、OECD/UNESCO 的指引）使企業必須面對：模型風險分級、透明度要求、資料治理、與使用後的責任歸屬。\n\n" +
            "這表示：AI 的競爭不只在模型能力，也在「合規能力」。你需要理解什麼是風險、如何做稽核、如何建立可追溯的流程與證據。",
          en:
            "AI governance is shifting from principles to enforcement. Major frameworks (e.g., the EU AI Act and OECD/UNESCO guidance) push organizations to handle risk tiers, transparency, data governance, and accountability.\n\n" +
            "This means AI competition is not only about model capability—but also compliance capability. Learners should understand risk management, audits, and how to build traceable processes and evidence.",
        },
        perspective: {
          zh:
            "我認為 AI 治理不是在「阻止創新」，而是在「篩選成熟的創新」。未來能長期落地的 AI 系統，一定要可被解釋、可被稽核、可被監控。\n\n" +
            "這跟品質管理很像：不是出事了才補救，而是把規範、測試、監控設計進開發流程。懂流程的人，會更有優勢。",
          en:
            "Governance doesn’t stop innovation—it filters for mature innovation. Long-term AI systems must be explainable, auditable, and monitorable.\n\n" +
            "This resembles quality management: don’t fix after failure; design standards, testing, and monitoring into the lifecycle. Process-minded builders will have an edge.",
        },
        takeaways: {
          zh: [
            "理解 AI 風險分級與「責任歸屬」在產品落地的重要性",
            "知道資料治理（來源、授權、保存、刪除）為何是核心",
            "學會用「可稽核」角度看 AI：流程、證據、監控指標",
            "跨領域思維：科技 × 法律 × 社會影響",
          ],
          en: [
            "Understand AI risk tiers and accountability for real-world deployment",
            "Learn why data governance (source, rights, retention, deletion) is central",
            "Adopt an audit mindset: processes, evidence, monitoring metrics",
            "Build cross-disciplinary thinking: tech × law × societal impact",
          ],
        },
        links: [
          { label: "EU AI Act", url: "https://artificialintelligenceact.eu/" },
          { label: "OECD AI Observatory", url: "https://oecd.ai/" },
          { label: "UNESCO AI Ethics Recommendation", url: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" },
        ],
        tags: ["AI Policy", "Governance", "Risk"],
      },
      {
        id: "2025-10-03",
        month: "2025-10",
        title: {
          zh: "企業 AI 落地瓶頸浮現：問題不在模型，而在系統與流程",
          en: "Why AI Projects Stall: The Bottleneck Is Systems, Not Models",
        },
        learning: {
          zh:
            "越來越多企業發現，AI 專案卡住往往不是因為模型不夠強，而是因為資料不乾淨、流程不標準、部門協作不足，導致輸入輸出不可控，成效也無法衡量。\n\n" +
            "因此 AI 落地更像一個組織工程：要先定義問題、建立可量化的流程與指標，再導入模型，才會真的產生可持續的效益。",
          en:
            "Many organizations find AI projects stall not because models are weak, but because data is messy, workflows are unstandardized, and cross-team coordination fails—making outcomes hard to control and measure.\n\n" +
            "AI deployment is increasingly an organizational engineering task: define the problem, establish measurable workflows and metrics, then integrate models for sustainable impact.",
        },
        perspective: {
          zh:
            "我覺得 AI 是放大器：流程混亂就放大混亂，流程清楚就放大效率。也因此工業工程的工具（流程分析、瓶頸管理、KPI 設計、標準化）在 AI 時代反而更重要。\n\n" +
            "把 AI 做成「可重複、可監控、可迭代」的系統，才是從 Demo 走到真正價值的關鍵。",
          en:
            "AI is an amplifier: it amplifies chaos in messy systems and boosts efficiency in well-designed ones. That’s why industrial engineering tools—process mapping, bottleneck analysis, KPI design, standardization—matter even more in the AI era.\n\n" +
            "Turning AI into a repeatable, monitorable, iterative system is the difference between a demo and real value.",
        },
        takeaways: {
          zh: [
            "先問「流程與資料是否可用」，再問「模型有多強」",
            "建立 KPI：要能衡量改善幅度（效率、錯誤率、成本、滿意度）",
            "學會做流程圖與瓶頸分析：AI 落地前置必備",
            "把 AI 當成系統工程：持續監控 + 迭代更新",
          ],
          en: [
            "Ask if data/workflows are ready before chasing stronger models",
            "Define KPIs to measure impact (efficiency, errors, cost, satisfaction)",
            "Learn process mapping and bottleneck analysis as AI prerequisites",
            "Treat AI as systems engineering: monitoring + iteration",
          ],
        },
        links: [
          { label: "McKinsey — QuantumBlack Insights", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights" },
          { label: "MIT Sloan Review — AI", url: "https://sloanreview.mit.edu/tag/artificial-intelligence/" },
        ],
        tags: ["AI Ops", "Process", "IE"],
      },

      // =========================
      // 2025-11 (3 topics)
      // =========================
      {
        id: "2025-11-01",
        month: "2025-11",
        title: {
          zh: "大型語言模型產品化：AI 成為可客製的學習與工作系統",
          en: "From Models to Products: AI as a Personalized Learning & Work System",
        },
        learning: {
          zh:
            "大型語言模型正在從「展示能力」走向「產品化」。AI 不再只是聊天，而是能被設定成不同角色、語氣與任務流程，協助寫作、整理、規劃、程式、研究與反思，逐步成為個人化的工作系統。\n\n" +
            "學習者應該關注：如何設計自己的工作流、如何把 AI 變成可靠的助手、以及如何用提示、模板與流程來讓輸出更穩定。",
          en:
            "LLMs are moving from capability demos to productized systems. AI is no longer just chatting—it can be configured into roles, tone, and workflows to support writing, summarizing, planning, coding, research, and reflection.\n\n" +
            "Learners should focus on building workflows: how to make AI reliable via prompts, templates, and repeatable processes.",
        },
        perspective: {
          zh:
            "我把這視為「學習方式的改寫」。未來不只是記住知識，而是建立一個能持續整理、提問、回顧的系統。AI 最強的地方不是幫你做完，而是幫你把思考變得更有結構、更可追溯。\n\n" +
            "如果把 AI 當成『學習與工作系統』來設計，長期累積會非常驚人。",
          en:
            "I see this as a rewrite of how we learn. The future is less about memorizing and more about building a system that continuously organizes, questions, and reviews. AI’s real power isn’t finishing tasks for you—it’s making your thinking structured and traceable.\n\n" +
            "If you design AI as a learning/work system, the compounding effect is huge.",
        },
        takeaways: {
          zh: [
            "把 AI 當成工作流：輸入規格、模板、檢查清單",
            "Prompt 不只是提問，而是『讓流程可重複』的方法",
            "建立你的個人知識系統：整理—反思—改進",
            "學會驗證輸出：來源、邏輯、數據一致性",
          ],
          en: [
            "Treat AI as a workflow: specs, templates, checklists",
            "Prompts are about repeatability, not just questions",
            "Build a personal knowledge system: organize—reflect—improve",
            "Verify outputs: sources, logic, data consistency",
          ],
        },
        links: [
          { label: "OpenAI Blog", url: "https://openai.com/blog" },
          { label: "Stanford HAI", url: "https://hai.stanford.edu/" },
        ],
        tags: ["LLM", "Product", "Workflow"],
      },
      {
        id: "2025-11-02",
        month: "2025-11",
        title: {
          zh: "多模態與語音 AI 普及：人機互動進入自然互動介面",
          en: "Multimodal & Voice AI: Toward Natural Human–AI Interfaces",
        },
        learning: {
          zh:
            "語音、影像與文字的融合，讓 AI 不再侷限於打字聊天，而能在更多日常情境中自然使用（通勤、走路、實驗、會議前準備）。多模態也使無障礙與跨語言使用更普及。\n\n" +
            "學習者可以從「人機互動（HCI）」角度理解：介面如何影響行為、效率與學習方式，以及 AI 如何被設計成更貼近人的互動模式。",
          en:
            "By combining voice, vision, and text, AI moves beyond typed chat into everyday contexts (commuting, walking, labs, pre-meeting prep). Multimodal AI also improves accessibility and cross-language usability.\n\n" +
            "Learners can study this through HCI: how interfaces shape behavior, productivity, and learning—and how AI is designed for more human-like interaction.",
        },
        perspective: {
          zh:
            "我覺得語音/多模態不是「更方便」而已，而是打開了新的學習場域：你可以把 AI 當成隨身助教，讓碎片時間也能進行整理、複習、提問與規劃。\n\n" +
            "真正的重點是：如何用更自然的互動，把學習與工作變成可持續的日常習慣。",
          en:
            "Voice/multimodal isn’t just “more convenient”—it creates new learning spaces. AI can become a portable tutor, turning small moments into structured review, Q&A, and planning.\n\n" +
            "The key is designing natural interactions that make learning and work sustainable daily habits.",
        },
        takeaways: {
          zh: [
            "理解多模態：文字＋語音＋影像如何協作",
            "用 HCI 思維看 AI：介面會改變行為與效率",
            "語音互動的優勢：低摩擦、可融入生活情境",
            "注意限制：噪音環境、隱私、誤辨識與驗證",
          ],
          en: [
            "Understand multimodality: how text + voice + vision work together",
            "Use HCI thinking: interfaces change behavior and efficiency",
            "Voice benefits: low friction, fits real-life contexts",
            "Know limits: noise, privacy, errors, and the need to verify",
          ],
        },
        links: [
          { label: "Google — Multimodal AI", url: "https://ai.google/discover/multimodal/" },
          { label: "Azure Speech Services", url: "https://azure.microsoft.com/en-us/products/ai-services/speech-services/" },
        ],
        tags: ["Multimodal", "Voice", "HCI"],
      },
      {
        id: "2025-11-03",
        month: "2025-11",
        title: {
          zh: "AI 成為國家級基礎建設：科技、供應鏈與地緣政治交織",
          en: "AI as National Infrastructure: Tech, Supply Chains, and Geopolitics",
        },
        learning: {
          zh:
            "AI 的競爭正在上升到國家層級：半導體供應、雲端/資料中心、能源與人才流動，逐步變成國家安全與經濟戰略的一部分。\n\n" +
            "理解 AI 不能只看模型，也要看供應鏈（晶片、設備、材料）、算力基礎建設（資料中心、網路、電力）與政策規則（出口管制、合作協議）。",
          en:
            "AI competition is increasingly national-scale. Semiconductor supply, cloud/data centers, energy, and talent flows are becoming strategic assets.\n\n" +
            "To understand AI, look beyond models to supply chains (chips/equipment/materials), compute infrastructure (data centers/network/power), and policy rules (export controls/partnerships).",
        },
        perspective: {
          zh:
            "這讓我更確定：科技人才需要國際觀。當 AI 成為基礎建設，評估就不只是 ROI，而包含風險、韌性與供應穩定。\n\n" +
            "我也覺得這是一個很適合系統工程/工業工程切入的議題：把「技術—政策—供應鏈」視為一個整體系統來分析與優化。",
          en:
            "This reinforces that tech builders need a global perspective. When AI becomes infrastructure, evaluation goes beyond ROI to include risk, resilience, and supply stability.\n\n" +
            "It’s also a strong entry point for systems/industrial engineering: analyzing and optimizing the tech–policy–supply chain as one integrated system.",
        },
        takeaways: {
          zh: [
            "理解 AI 產業鏈：晶片 → 雲端/資料中心 → 應用",
            "看懂關鍵字：韌性（resilience）、供應穩定、出口管制",
            "用系統觀學科技：技術 × 政策 × 國際合作",
            "延伸到自身：如何培養跨領域與全球溝通能力",
          ],
          en: [
            "Understand the AI stack: chips → cloud/data centers → applications",
            "Learn key terms: resilience, supply stability, export controls",
            "Study tech with a systems lens: technology × policy × partnerships",
            "Make it personal: build cross-domain and global communication skills",
          ],
        },
        links: [
          { label: "World Economic Forum — AI", url: "https://www.weforum.org/topics/artificial-intelligence/" },
          { label: "U.S. Department of State — AI", url: "https://www.state.gov/ai/" },
        ],
        tags: ["Geopolitics", "Supply Chain", "Infrastructure"],
      },
    ],
    []
  );

  const grouped = useMemo(() => {
    return {
      "2025-10": items.filter((x) => x.month === "2025-10"),
      "2025-11": items.filter((x) => x.month === "2025-11"),
    };
  }, [items]);

  const MonthBlock = ({
    monthLabel,
    monthKey,
  }: {
    monthLabel: string;
    monthKey: "2025-10" | "2025-11";
  }) => {
    const list = grouped[monthKey];
    return (
      <section className="mt-8">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            {monthLabel}
          </h2>
          <Badge variant="secondary">{list.length} Topics</Badge>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {lang === "zh"
            ? "每個主題包含：學習內容、我的見解、學習重點摘要、完整延伸連結。"
            : "Each topic includes learning content, my perspective, key takeaways, and full reference links."}
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 md:gap-6">
          {list.map((t, idx) => (
            <Card key={t.id} className="overflow-hidden">
              <CardHeader className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{monthKey}</Badge>
                  <Badge variant="outline">
                    {lang === "zh" ? `主題 ${idx + 1}` : `Topic ${idx + 1}`}
                  </Badge>
                  {t.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg md:text-xl leading-snug">
                  {lang === "zh" ? t.title.zh : t.title.en}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Learning */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold">{ui.learning}</div>
                  <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                    {lang === "zh" ? t.learning.zh : t.learning.en}
                  </p>
                </div>

                <Separator />

                {/* Perspective */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold">{ui.perspective}</div>
                  <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                    {lang === "zh" ? t.perspective.zh : t.perspective.en}
                  </p>
                </div>

                <Separator />

                {/* Takeaways */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold">{ui.takeaways}</div>
                  <ul className="grid gap-2">
                    {(lang === "zh" ? t.takeaways.zh : t.takeaways.en).map(
                      (s, i) => (
                        <li key={i} className="text-sm leading-relaxed">
                          <span className="mr-2 text-muted-foreground">•</span>
                          {s}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <Separator />

                {/* Links */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold">{ui.refs}</div>
                  <div className="grid gap-2">
                    {t.links.map((l) => (
                      <div
                        key={l.url}
                        className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2"
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-medium truncate">
                            {l.label}
                          </div>
                          <div className="text-xs text-muted-foreground break-all">
                            {l.url}
                          </div>
                        </div>
                        <Button asChild size="sm" variant="secondary">
                          <a
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${ui.open}: ${l.label}`}
                          >
                            {ui.open}
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto w-full max-w-5xl px-4 md:px-6"
      >
        <div className="flex items-start justify-between gap-4">
          <SectionHeader title={ui.pageTitle} hint={ui.hint} />
          <div className="flex items-center gap-2 pt-1">
            <Button
              variant={lang === "zh" ? "default" : "secondary"}
              size="sm"
              onClick={() => setLang("zh")}
            >
              {ui.zh}
            </Button>
            <Button
              variant={lang === "en" ? "default" : "secondary"}
              size="sm"
              onClick={() => setLang("en")}
            >
              {ui.en}
            </Button>
          </div>
        </div>

        <MonthBlock monthLabel={ui.monthOct} monthKey="2025-10" />
        <MonthBlock monthLabel={ui.monthNov} monthKey="2025-11" />
        <div className="h-10" />
      </motion.div>
    </Layout>
  );
};

export default MonthlyTrends;

