import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";
import { useState } from "react";

export const HowItWorksHero = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Unified Web3 Platform</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-fade-in" style={{ animationDelay: '0.1s' }}>
            See How It All Works
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From domain to revenue — in one unified platform.
          </p>

          {/* Animated Search Bar Demo */}
          <div className="max-w-2xl mx-auto mb-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative flex items-center gap-3 bg-background border-2 border-border rounded-full p-2 hover:border-primary/50 transition-all duration-300">
                <Search className="h-5 w-5 text-muted-foreground ml-4" />
                <input
                  type="text"
                  placeholder="Try: tech startup, e-commerce, crypto wallet..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3 px-2"
                />
                <Button size="lg" className="btn-gradient rounded-full px-8">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            className="btn-gradient h-14 px-10 text-lg font-semibold hover-scale shadow-xl animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Get Started Free
          </Button>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mt-12 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>5-minute setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
