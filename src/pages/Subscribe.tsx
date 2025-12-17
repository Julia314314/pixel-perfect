import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/common/SectionHeader";
import { motion } from "framer-motion";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xanrrvyg";

// （可選）本機記錄：只用來「避免同一個人一直按」與顯示數字，不當作正式名單
const LS_KEY = "subscribers_v1";

type LocalSubscriber = { name?: string; email: string; at: string };

function isValidEmail(v: string) {
  // 比 includes("@") 更嚴謹一點點，但不會太嚴格
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

async function postToFormspree(payload: {
  name?: string;
  email: string;
  source: string;
  page: string;
  ts: string;
  // honeypot anti-bot:
  website?: string;
}) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.error || "訂閱失敗，請稍後再試");
  }
}

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);

  const localSubs: LocalSubscriber[] = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY) || "[]");
    } catch {
      return [];
    }
  }, []);

  const subscriberCount = localSubs.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      toast.error("請輸入有效的 Email");
      return;
    }

    // Honeypot：正常人看不到/不會填，機器人常會填
    if (website.trim()) {
      toast.error("送出失敗，請稍後再試");
      return;
    }

    // （可選）避免重複按：只針對同一台裝置
    try {
      const subs: LocalSubscriber[] = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
      const exists = subs.some((s) => s.email === cleanEmail);
      if (exists) {
        toast.info("你已經訂閱過了！");
        return;
      }
    } catch {
      // ignore
    }

    try {
      setLoading(true);

      await postToFormspree({
        name: cleanName || undefined,
        email: cleanEmail,
        source: "pixel-perfect site",
        page: "/subscribe",
        ts: new Date().toISOString(),
        website, // honeypot
      });

      // 本機記錄（可選，不是正式名單）
      try {
        const subs: LocalSubscriber[] = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
        subs.push({ name: cleanName || undefined, email: cleanEmail, at: new Date().toISOString() });
        localStorage.setItem(LS_KEY, JSON.stringify(subs));
      } catch {
        // ignore
      }

      toast.success("訂閱成功！我已收到你的 Email 🎉");
      setName("");
      setEmail("");
      setWebsite("");
    } catch (err: any) {
      toast.error(err?.message || "訂閱失敗，請稍後再試");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader title="Email 訂閱" hint="每季寄出科技摘要電子報（已接上真實訂閱收集）" />

        <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-card border border-border shadow-card mb-6">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="name">姓名（可選）</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例如：Peng-Hsuan"
                className="rounded-xl"
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email（必填）</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="rounded-xl"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Honeypot: 不要刪，這是防機器人；用 aria-hidden + tabIndex -1 隱藏 */}
          <div className="sr-only" aria-hidden="true">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Leave blank"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Button type="submit" disabled={loading}>
              {loading ? "送出中…" : "加入訂閱"}
            </Button>

            <Button variant="outline" asChild disabled={loading}>
              <Link to="/archive">看看電子報存檔</Link>
            </Button>
          </div>

          <p className="text-xs text-muted-light mt-4">
            （非正式名單）本機曾訂閱的次數：<strong>{subscriberCount}</strong>（只用於避免重複按，不代表後台名單）
          </p>
        </form>

        <SectionHeader title="你會收到什麼？" hint="固定模板，讓內容穩定又好讀" />

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "本季 3 大趨勢", desc: "每個趨勢包含：一句話重點、可能影響、推薦延伸閱讀。" },
            { title: "我最推薦的 1 個工具", desc: "用學生也能上手的角度，整理上手步驟與適用情境。" },
            { title: "下季預告", desc: "公開我接下來想深挖的主題，讓讀者也能一起追。" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              className="p-4 rounded-2xl bg-card border border-border shadow-card"
            >
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Subscribe;
