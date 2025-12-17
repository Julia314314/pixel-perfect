import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-warm-gradient">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
