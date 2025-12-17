import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PostList } from "@/components/posts/PostList";
import { getPostsByCategory } from "@/data/posts";
import { motion } from "framer-motion";

const AIEngineering = () => {
  const posts = getPostsByCategory("ai-engineering");

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          title="AI × 工程專題解析"
          hint="用「背景 → 核心概念 → 案例 → 影響」拆解科技如何落地"
        />

        {/* Intro (ZH/EN) */}
        <div className="mx-auto max-w-5xl px-4 pb-6">
          <div className="rounded-2xl border bg-background/60 p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              {/* ZH */}
              <div>
                <h2 className="text-lg font-semibold">這個系列在寫什麼？</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  我把 AI × 工程應用拆成「感測／資料 → 模型 → 決策 → 回饋」的系統流程，
                  用工程視角把技術落地講清楚：為什麼要做、怎麼做、做到哪裡會卡、以及實際能帶來什麼影響。
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• 讀者定位：想用 AI 解工程問題的學習者（高中後段～大學初階）</li>
                  <li>• 文章結構：背景 → 核心概念 → 工程案例 → 影響與限制</li>
                  <li>• 你會得到：可以複用的分析框架 + 可操作的入門路線</li>
                </ul>
              </div>

              {/* EN */}
              <div>
                <h2 className="text-lg font-semibold">What is this series about?</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  This series explains AI-in-engineering as a full system:
                  sensing/data → modeling → decision-making → feedback. I focus on
                  practical engineering logic—why it matters, how it works, where it breaks,
                  and what impact it truly delivers.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Audience: learners who want to apply AI to real engineering problems</li>
                  <li>• Structure: context → core concepts → cases → impact & limits</li>
                  <li>• Outcome: reusable framework + a practical learning roadmap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Topics (ZH/EN) */}
        <div className="mx-auto max-w-5xl px-4 pb-8">
          <div className="grid gap-6">
            {/* Topic 1 */}
            <div className="rounded-2xl border bg-background/60 p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold">
                    專題一｜AI 如何走進工程現場？從感測器到決策系統
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    把 AI 視為「系統工程」而不是「單一模型」：資料怎麼來、怎麼清、模型怎麼用、決策怎麼落地，
                    最後怎麼回饋優化。
                  </p>
                  <div className="mt-4">
                    <div className="text-sm font-medium">學習重點</div>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• 感測層 → 資料層 → 模型層 → 決策層 → 回饋層</li>
                      <li>• 工程案例：智慧製造 / 交通號誌 / 能源尖峰預測</li>
                      <li>• 你要會：畫出資料流程、指出 AI 負責的那一段</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-sm">
                    <div className="font-medium">相關資料</div>
                    <ul className="mt-2 space-y-2 text-muted-foreground">
                      <li>
                        •{" "}
                        <a
                          className="underline underline-offset-4 hover:opacity-80"
                          href="https://developers.google.com/machine-learning"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Google Machine Learning Guides
                        </a>
                      </li>
                      <li>
                        •{" "}
                        <a
                          className="underline underline-offset-4 hover:opacity-80"
                          href="https://ocw.mit.edu"
                          target="_blank"
                          rel="noreferrer"
                        >
                          MIT OpenCourseWare
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold">
                    Topic 1 | How AI lands in engineering: from sensors to decisions
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Treat AI as a system (not a single model): where data comes from,
                    how it’s cleaned, how models are used, and how decisions are deployed
                    with feedback loops.
                  </p>
                  <div className="mt-4">
                    <div className="text-sm font-medium">Key takeaways</div>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• Sensors → data → models → decisions → feedback</li>
                      <li>• Cases: manufacturing, traffic control, energy peak forecasting</li>
                      <li>• Skill: map the pipeline and locate where AI adds value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="rounded-2xl border bg-background/60 p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold">
                    專題二｜AI 在半導體與製造工程：從人眼檢查到智慧製程
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    聚焦「良率、效率、穩定度」三個指標：AI 如何在瑕疵檢測、參數最佳化、預測性維護中，
                    放大工程師的判斷力。
                  </p>
                  <div className="mt-4">
                    <div className="text-sm font-medium">學習重點</div>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• 瑕疵檢測（Computer Vision / CNN）</li>
                      <li>• 製程參數最佳化（降低試誤成本）</li>
                      <li>• 預測性維護（避免整線停工）</li>
                      <li>• 工程師的價值：判斷結果是否符合物理與製程邏輯</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-sm">
                    <div className="font-medium">相關資料</div>
                    <ul className="mt-2 space-y-2 text-muted-foreground">
                      <li>
                        •{" "}
                        <a
                          className="underline underline-offset-4 hover:opacity-80"
                          href="https://www.nvidia.com/en-us/industries/manufacturing/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          NVIDIA | Manufacturing
                        </a>
                      </li>
                      <li>
                        •{" "}
                        <a
                          className="underline underline-offset-4 hover:opacity-80"
                          href="https://www.asml.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          ASML
                        </a>
                      </li>
                      <li>
                        •{" "}
                        <a
                          className="underline underline-offset-4 hover:opacity-80"
                          href="https://www.tsmc.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          TSMC
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold">
                    Topic 2 | AI in semiconductors & manufacturing: from inspection to smart process
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Focus on yield, efficiency, and stability: how AI supports defect detection,
                    process optimization, and predictive maintenance—while engineers ensure the
                    results make physical and process sense.
                  </p>
                  <div className="mt-4">
                    <div className="text-sm font-medium">Key takeaways</div>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• Defect detection with computer vision</li>
                      <li>• Process parameter optimization</li>
                      <li>• Predictive maintenance to prevent downtime</li>
                      <li>• Engineers validate feasibility and interpret results</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="rounded-2xl border bg-background/60 p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold">
                    專題三｜工程學生如何入門 AI？一條不走偏的學習路線圖
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    以「能做出工程應用」為目標安排學習順序：先把資料與評估做扎實，再進到工程情境的實作，
                    不追炫技，追可落地。
                  </p>
                  <div className="mt-4">
                    <div className="text-sm font-medium">學習重點</div>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• 第一階段：線代 / 機率統計 / Python（Numpy、Pandas）</li>
                      <li>• 第二階段：回歸、分類、模型評估（Accuracy / Loss）</li>
                      <li>• 第三階段：感測器資料、時間序列、影像檢測入門</li>
                      <li>• 迷思破解：先會用 AI 解釋工程現象，再談深度學習</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-sm">
                    <div className="font-medium">相關資料</div>
                    <ul className="mt-2 space-y-2 text-muted-foreground">
                      <li>
                        •{" "}
                        <a
                          className="underline underline-offset-4 hover:opacity-80"
                          href="https://www.coursera.org/learn/machine-learning"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Andrew Ng | Machine Learning
                        </a>
                      </li>
                      <li>
                        •{" "}
                        <a
                          className="underline underline-offset-4 hover:opacity-80"
                          href="https://www.kaggle.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Kaggle Datasets
                        </a>
                      </li>
                      <li>
                        •{" "}
                        <a
                          className="underline underline-offset-4 hover:opacity-80"
                          href="https://realpython.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Real Python
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold">
                    Topic 3 | A practical AI roadmap for engineering students
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Learn in the order that supports real applications: build data & evaluation
                    fundamentals first, then implement projects in engineering contexts. Practical
                    beats flashy.
                  </p>
                  <div className="mt-4">
                    <div className="text-sm font-medium">Key takeaways</div>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• Stage 1: math + Python (NumPy / Pandas)</li>
                      <li>• Stage 2: regression, classification, evaluation</li>
                      <li>• Stage 3: sensors, time series, vision basics</li>
                      <li>• Myth: start with engineering intuition before deep learning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Existing Posts */}
        <PostList posts={posts} />
      </motion.div>
    </Layout>
  );
};

export default AIEngineering;

