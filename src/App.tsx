import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import supabase from "./utils/supabase";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function WaitlistPage() {
  const [waitlistEmails, setWaitlistEmails] = useState([]);

  useEffect(() => {
    async function getWaitlistEmails() {
      const { data: emails, error } = await supabase.from('waitlist').select('*');

      if (error) {
        console.error('Error fetching waitlist:', error);
      } else if (emails && emails.length > 0) {
        setWaitlistEmails(emails);
      }
    }

    getWaitlistEmails();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Waitlist Entries</h1>
      <p>Total entries: {waitlistEmails.length}</p>
      <ul>
        {waitlistEmails.map((entry) => (
          <li key={entry.id}>
            {entry.email} - {new Date(entry.created_at).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
