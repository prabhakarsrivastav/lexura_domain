import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { FloatingSupport } from "./components/common/FloatingSupport";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { ScrollToTop } from "./components/common/ScrollToTop";

// Eager load critical routes
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { FloatingSidebar } from "./components/common/FloatingSidebar";

// Lazy load non-critical routes for better performance
const Auth = lazy(() => import("./pages/Auth"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const UserConsole = lazy(() => import("./pages/UserConsole"));
const SellerDashboard = lazy(() => import("./pages/SellerDashboard"));
const DomainDetail = lazy(() => import("./pages/DomainDetail"));
const Checkout = lazy(() => import("./pages/Checkout"));
const AdminConsole = lazy(() => import("./pages/AdminConsole"));
const OpsMonitoring = lazy(() => import("./pages/OpsMonitoring"));
const AINameGenerator = lazy(() => import("./pages/AINameGenerator"));
const AIBusinessNameGenerator = lazy(() => import("./pages/AIBusinessNameGenerator"));
const AIRoadmapGenerator = lazy(() => import("./pages/AIRoadmapGenerator"));
const AIBusinessPlanAnalyzer = lazy(() => import("./pages/AIBusinessPlanAnalyzer"));
const CloudHosting = lazy(() => import("./pages/CloudHosting"));
const Consultancy = lazy(() => import("./pages/Consultancy"));
const AIOutreachCampaigns = lazy(() => import("./pages/AIOutreachCampaigns"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const OurStory = lazy(() => import("./pages/OurStory"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Careers = lazy(() => import("./pages/Careers"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const NFTGallery = lazy(() => import("./pages/NFTGallery"));
const NFTLaunchpad = lazy(() => import("./pages/NFTLaunchpad"));
const NFTDetail = lazy(() => import("./pages/NFTDetail"));
const MyNFTs = lazy(() => import("./pages/MyNFTs"));
const MintNFT = lazy(() => import("./pages/MintNFT"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const Domains = lazy(() => import("./pages/Domains"));
const ServicesOverview = lazy(() => import("./pages/ServicesOverview"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-primary text-lg">Loading...</div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <FloatingSupport />
          <FloatingSidebar />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/domains" element={<Domains />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/magic-login/:token" element={<VerifyEmail />} />
              <Route path="/user-console" element={<UserConsole />} />
              <Route path="/seller" element={<SellerDashboard />} />
              <Route path="/domain/:domain" element={<DomainDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin-console" element={<AdminConsole />} />
              <Route path="/ops" element={<OpsMonitoring />} />
              <Route path="/ai-domain-generator" element={<AINameGenerator />} />
              <Route path="/ai-business-name-generator" element={<AIBusinessNameGenerator />} />
              <Route path="/ai-roadmap-generator" element={<AIRoadmapGenerator />} />
              <Route path="/ai-business-plan-analyzer" element={<AIBusinessPlanAnalyzer />} />
              <Route path="/cloud-hosting" element={<CloudHosting />} />
              <Route path="/consultancy" element={<Consultancy />} />
              <Route path="/ai-outreach-campaigns" element={<AIOutreachCampaigns />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/nft-gallery" element={<NFTGallery />} />
              <Route path="/nft-launchpad" element={<NFTLaunchpad />} />
              <Route path="/nft/:id" element={<NFTDetail />} />
              <Route path="/my-nfts" element={<MyNFTs />} />
              <Route path="/mint-nft" element={<MintNFT />} />
              <Route path="/services" element={<ServicesOverview />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
