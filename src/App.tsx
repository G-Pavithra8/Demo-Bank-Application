import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import Transactions from "./pages/Transactions";
import PersonalBanking from "./pages/PersonalBanking";
import BusinessBanking from "./pages/BusinessBanking";
import Loans from "./pages/Loans";
import CreditCards from "./pages/CreditCards";
import HelpCenter from "./pages/HelpCenter";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/personal-banking" element={<PersonalBanking />} />
            <Route path="/business-banking" element={<BusinessBanking />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
