import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-24 h-24 rounded-full bg-primary/10 grid place-items-center mb-6">
          <span className="text-4xl">🔍</span>
        </div>
        <h1 className="text-3xl font-black text-foreground mb-3">
          404 - 找不到頁面
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          這個頁面可能已被移除、更改名稱，或暫時無法使用。
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild>
            <Link to="/" className="gap-2">
              <Home className="w-4 h-4" /> 返回首頁
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" /> 返回上一頁
          </Button>
        </div>
      </motion.div>
    </Layout>
  );
};

export default NotFound;
