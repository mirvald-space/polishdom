import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Sitemap from "./pages/Sitemap";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Компонент для обработки перенаправлений с 404.html
const ErrorHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Проверяем наличие параметра ошибки 404 в URL
    const params = new URLSearchParams(location.search);
    const isError404 = params.get('error') === '404';
    const originalPath = params.get('path');
    
    if (isError404 && originalPath) {
      // Логируем попытку доступа к несуществующему маршруту
      console.error(`404 Error: User attempted to access non-existent route: ${originalPath}`);
      
      // Здесь можно добавить код для отправки события в аналитику
      // например: gtag('event', '404_error', { 'path': originalPath });
    }
  }, [location]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ErrorHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
