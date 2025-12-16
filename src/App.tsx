import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PostPage from "./pages/PostPage";
import AIEngineering from "./pages/AIEngineering";
import PhillyWeek from "./pages/PhillyWeek";
import MonthlyTrends from "./pages/MonthlyTrends";
import Portfolio from "./pages/Portfolio";
import Events from "./pages/Events";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import Archive from "./pages/Archive";
import NewsletterPage from "./pages/NewsletterPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/post/:slug" element={<PostPage />} />
          <Route path="/ai-engineering" element={<AIEngineering />} />
          <Route path="/philly-week" element={<PhillyWeek />} />
          <Route path="/monthly-trends" element={<MonthlyTrends />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/newsletter/:slug" element={<NewsletterPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
