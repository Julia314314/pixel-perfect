import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/common/SectionHeader";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("請輸入有效的 Email");
      return;
    }

    // Demo: save to localStorage
    const subs = JSON.parse(localStorage.getItem("subscribers") || "[]");
    const exists = subs.some((s: { email: string }) => s.email.toLowerCase() === email.toLowerCase());
    
    if (exists) {
      toast.info("你已經訂閱過了！");
      return;
    }

    subs.push({ name, email: email.toLowerCase(), at: new Date().toISOString() });
    localStorage.setItem("subscribers", JSON.stringify(subs));
    
    toast.success("已加入訂閱！（示範版：儲存在你的瀏覽器）");
    setName("");
    setEmail("");
  };

  const subscriberCount = JSON.parse(localStorage.getItem("subscribers") || "[]").length;

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader 
          title="Email 訂閱" 
          hint="每季寄出科技摘要電子報（此頁為前端示範版）" 
        />
        
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
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button type="submit">加入訂閱</Button>
            <Button variant="outline" asChild>
              <Link to="/archive">看看電子報存檔</Link>
            </Button>
          </div>

          <p className="text-xs text-muted-light mt-4">
            目前已儲存的本機訂閱者數：<strong>{subscriberCount}</strong>（只存在你的瀏覽器 localStorage）
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
