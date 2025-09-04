import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { EnhancedHeader } from "@/components/ui/enhanced-header";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import Home from "./pages/Home";
import Syllabus from "./pages/Syllabus";
import PYQ from "./pages/PYQ";
import QA from "./pages/QA";
import ExamSession from "./pages/ExamSession";
import Progress from "./pages/Progress";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeader />
      <div className="pt-16"> {/* Account for fixed header */}
        <BreadcrumbNav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/syllabus/:domain" element={<Syllabus />} />
            <Route path="/pyq" element={<PYQ />} />
            <Route path="/qa" element={<QA />} />
            <Route path="/exam" element={<ExamSession />} />
            <Route path="/progress" element={<Progress />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
