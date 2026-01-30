import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Zap, Award } from "lucide-react";

export const MarketplaceHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted/30 to-background py-10 md:py-14">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in">
            <Badge variant="secondary" className="px-3 py-1.5 text-xs">
              <ShieldCheck className="w-3 h-3 mr-1.5" />
              Verified Sellers
            </Badge>
            <Badge variant="secondary" className="px-3 py-1.5 text-xs">
              <Zap className="w-3 h-3 mr-1.5" />
              Instant Transfers
            </Badge>
            <Badge variant="secondary" className="px-3 py-1.5 text-xs">
              <Award className="w-3 h-3 mr-1.5" />
              Safe & Secure
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text animate-fade-in font-inter" style={{ animationDelay: '0.1s' }}>
            Discover Premium Web3 Domains
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Verified sellers. Instant transfers. Safe and secure.
          </p>

          {/* CTA */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="btn-gradient h-12 px-8 text-base font-semibold hover-scale shadow-lg"
            >
              Start Browsing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
