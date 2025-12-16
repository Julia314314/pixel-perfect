import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border glass-effect">
      <div className="container py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-black text-foreground">科技新知小站</div>
            <div className="text-xs text-muted-light">© {currentYear} • 以學生視角解釋全球科技發展</div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/subscribe">訂閱電子報</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/archive">電子報存檔</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
