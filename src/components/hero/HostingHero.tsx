import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, Lock, Zap, Shield, Globe, Server } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-hosting.jpg";

export const HostingHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background py-8 md:py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Icon Group & Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Cloud className="h-5 w-5" />
              </div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Lock className="h-5 w-5" />
              </div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <Badge variant="secondary" className="px-3 py-1.5 ml-2">
                <Shield className="w-3 h-3 mr-1.5" />
                Enterprise-Grade
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text animate-fade-in font-inter" style={{ animationDelay: '0.1s' }}>
              Host Your Web3 Site in Minutes
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Fast, secure, and decentralized hosting made simple. Deploy your dApp with confidence.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">Global CDN coverage</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Shield className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Enterprise Security</h3>
                  <p className="text-sm text-muted-foreground">SSL & DDoS protection</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Globe className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Web3 Native</h3>
                  <p className="text-sm text-muted-foreground">Seamless integration</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Server className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Auto Scaling</h3>
                  <p className="text-sm text-muted-foreground">Handle any traffic</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                className="btn-gradient h-12 px-8 text-base font-semibold hover-scale shadow-lg"
                onClick={() => navigate("/cloud-hosting")}
              >
                <Cloud className="mr-2 h-5 w-5" />
                Launch Hosting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-semibold border-2 hover-scale"
              >
                View Pricing
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="animate-fade-in hidden lg:block" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Cloud Web3 Hosting Infrastructure"
                className="rounded-2xl shadow-2xl hover-scale w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
