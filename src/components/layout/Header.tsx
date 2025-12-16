import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/ai-engineering", label: "AI × 工程專題解析" },
  { href: "/philly-week", label: "費城科技週觀察" },
  { href: "/monthly-trends", label: "每月科技趨勢摘要" },
  { href: "/portfolio", label: "作品集" },
  { href: "/events", label: "活動資訊" },
  { href: "/about", label: "關於我" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-card border border-border shadow-warm grid place-items-center group-hover:shadow-glow transition-shadow duration-300">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-black text-foreground tracking-tight leading-none">科技新知小站</span>
              <span className="text-xs text-muted-light leading-none">AI × 工程 × 趨勢（學生視角）</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm px-3 py-2 rounded-xl transition-all duration-200 ${
                  location.pathname === link.href
                    ? "bg-primary/15 text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "關閉選單" : "開啟選單"}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden pb-4 overflow-hidden"
            >
              <div className="flex flex-col gap-1 p-3 rounded-2xl bg-card border border-border shadow-card">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm px-4 py-3 rounded-xl transition-all duration-200 ${
                      location.pathname === link.href
                        ? "bg-primary/15 text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
