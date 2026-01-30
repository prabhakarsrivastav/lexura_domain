import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wand2, Zap, Brain, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-ai-tools.jpg";

interface AIToolsHeroProps {
  page?: 'domain' | 'business';
}

export const AIToolsHero = ({ page = 'domain' }: AIToolsHeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-background to-primary/5 py-8 md:py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <img
                src={heroImage}
                alt="AI-Powered Domain Generation"
                className="rounded-2xl shadow-2xl hover-scale w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Icon & Badge */}
            <div className="flex justify-center lg:justify-start items-center gap-3 mb-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Wand2 className="h-6 w-6" />
              </div>
              <Badge variant="secondary" className="px-3 py-1.5">
                <Brain className="w-3 h-3 mr-1.5" />
                AI-Powered
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text animate-fade-in font-inter" style={{ animationDelay: '0.1s' }}>
              {page === 'business' ? 'Find the Perfect Business Name' : 'Find the Perfect Name in Seconds'}
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {page === 'business'
                ? 'Use our AI-powered generator to discover unique business names with matching Web3 domains instantly.'
                : 'Use our AI-powered generators to discover your ideal domain or brand name instantly.'}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Smart Suggestions</h3>
                  <p className="text-sm text-muted-foreground">{page === 'business' ? 'AI creates brand-ready names' : 'AI analyzes trends & keywords'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Instant Results</h3>
                  <p className="text-sm text-muted-foreground">{page === 'business' ? 'Get business names instantly' : 'Get 100+ names in seconds'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">{page === 'business' ? 'Matching Domains' : 'Availability Check'}</h3>
                  <p className="text-sm text-muted-foreground">{page === 'business' ? 'Web3 domains included' : 'Real-time domain status'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Brain className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Brand-Ready</h3>
                  <p className="text-sm text-muted-foreground">Memorable & unique names</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                className="btn-gradient h-12 px-8 text-base font-semibold hover-scale shadow-lg"
                onClick={() => navigate(page === 'domain' ? "/ai-domain-generator" : "/ai-business-name-generator")}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Try AI Generator
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-semibold border-2 hover-scale"
                onClick={() => navigate(page === 'domain' ? "/ai-business-name-generator" : "/ai-domain-generator")}
              >
                {page === 'domain' ? 'Business Names' : 'Domain Names'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
