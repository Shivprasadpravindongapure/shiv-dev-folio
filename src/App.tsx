import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import LoadingScreen from '@/components/LoadingScreen';

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingScreen isLoading={isLoading} onComplete={() => setIsLoading(false)} />
        
        <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.8s ease-in-out', pointerEvents: isLoading ? 'none' : 'auto' }}>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
export default App;
