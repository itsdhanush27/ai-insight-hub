import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SocialMedia from "./pages/SocialMedia";
import VideoServices from "./pages/VideoServices";
import WebsitesFunnels from "./pages/WebsitesFunnels";
import LeadGeneration from "./pages/LeadGeneration";
import AppsChatbots from "./pages/AppsChatbots";
import AIConsulting from "./pages/AIConsulting";
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
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/video-services" element={<VideoServices />} />
          <Route path="/websites-funnels" element={<WebsitesFunnels />} />
          <Route path="/lead-generation" element={<LeadGeneration />} />
          <Route path="/apps-chatbots" element={<AppsChatbots />} />
          <Route path="/ai-consulting" element={<AIConsulting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
