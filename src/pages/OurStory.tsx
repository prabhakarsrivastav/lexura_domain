import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, Users, CheckCircle2, TrendingUp, Lock, ArrowRight } from "lucide-react";
import heroGlobe from "@/assets/hero-globe-domains.jpg";
import storyHandshake from "@/assets/story-handshake-hologram.jpg";
import problemChain from "@/assets/problem-broken-chain.jpg";
import solutionWorkflow from "@/assets/solution-workflow.jpg";
import visionCity from "@/assets/vision-2030-city.jpg";
import commitmentLock from "@/assets/commitment-lock.jpg";
import ctaHorizon from "@/assets/cta-horizon-path.jpg";

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Own Your Identity.<br />
                Power the Decentralized Future.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Lexura Domains is your trusted gateway to Web3 domain trading, hosting, and consulting services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => navigate("/")}
                >
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
                  onClick={() => navigate("/auth")}
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroGlobe}
                alt="Futuristic globe with domain tags"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src={storyHandshake}
                alt="Abstract handshake between human and digital domain"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Redefining Digital Ownership
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on transparency, security, and innovation, we provide a secure marketplace
                for Web3 domains and tools that empower the decentralized economy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in a future where individuals, not corporations, control their digital identity.
                Where ownership is verifiable, transferable, and truly yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground animate-fade-in">
              The Web3 Challenge
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Trust Gaps</h3>
                <p className="text-muted-foreground">
                  Fraud risks and lack of verification make domain trading unsafe for buyers and sellers alike.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Fragmented Tools</h3>
                <p className="text-muted-foreground">
                  Scattered ecosystem with disconnected platforms slows adoption and frustrates users.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">High Barriers</h3>
                <p className="text-muted-foreground">
                  Technical complexity and steep learning curves block newcomers from entering Web3.
                </p>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <img
                src={problemChain}
                alt="Broken chains and scattered icons"
                className="w-full max-w-3xl mx-auto h-auto rounded-2xl opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground animate-fade-in">
              One Platform. Endless Possibilities.
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="text-left space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Verified Marketplace</h3>
                <p className="text-muted-foreground">
                  Secure escrow system and ownership verification for every transaction.
                </p>
              </div>

              <div className="text-left space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">AI-Powered Valuation</h3>
                <p className="text-muted-foreground">
                  Real-time domain pricing and market insights powered by advanced AI.
                </p>
              </div>

              <div className="text-left space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Cloud Hosting</h3>
                <p className="text-muted-foreground">
                  Reliable, scalable hosting solutions for your Web3 domains and sites.
                </p>
              </div>

              <div className="text-left space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Consulting & Outreach</h3>
                <p className="text-muted-foreground">
                  Expert guidance and automated campaigns to grow your Web3 presence.
                </p>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <img
                src={solutionWorkflow}
                alt="Digital workflow diagram"
                className="w-full max-w-4xl mx-auto h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision for 2030 */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground animate-fade-in">
              Where We're Headed
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 animate-fade-in">
                <p className="text-6xl md:text-7xl font-bold text-primary mb-4">$2.5B</p>
                <p className="text-xl text-muted-foreground">Valuation Target</p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <p className="text-6xl md:text-7xl font-bold text-primary mb-4">10M+</p>
                <p className="text-xl text-muted-foreground">Domains Traded</p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-6xl md:text-7xl font-bold text-primary mb-4">1M+</p>
                <p className="text-xl text-muted-foreground">Businesses Onboarded</p>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <img
                src={visionCity}
                alt="Futuristic city with domain blocks"
                className="w-full max-w-5xl mx-auto h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Built for Trust.<br />Designed for the Future.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We empower creators, businesses, and investors to take control of their digital
                assets and shape an open, decentralized future.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every feature we build, every partnership we forge, and every decision we make
                is guided by our commitment to transparency, security, and user empowerment.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Lock className="w-12 h-12 text-primary" />
                <div>
                  <p className="font-bold text-foreground">Security First</p>
                  <p className="text-sm text-muted-foreground">End-to-end encryption & verification</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={commitmentLock}
                alt="Glowing lock with decentralized web pattern"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in">
              Start Building Your<br />Decentralized Identity Today
            </h2>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Button
                size="lg"
                className="rounded-full px-10 text-lg shadow-xl hover:shadow-2xl transition-all"
                onClick={() => navigate("/auth")}
              >
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 text-lg"
                onClick={() => navigate("/")}
              >
                Explore Marketplace
              </Button>
            </div>
            <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={ctaHorizon}
                alt="Glowing path to decentralized future"
                className="w-full max-w-4xl mx-auto h-auto rounded-2xl shadow-2xl opacity-80"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
