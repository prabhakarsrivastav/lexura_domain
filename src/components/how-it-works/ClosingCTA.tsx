import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";

export const ClosingCTA = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Ready to Begin?</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">Launch. Grow. Scale.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of entrepreneurs building the future of Web3. 
            Start your journey today with our all-in-one platform.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="btn-gradient h-16 px-12 text-xl font-semibold hover-scale shadow-2xl animate-scale-in group"
            style={{ animationDelay: '0.3s' }}
          >
            Start Free Demo
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-12 border-t border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Domains Traded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2M+ ETH</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
