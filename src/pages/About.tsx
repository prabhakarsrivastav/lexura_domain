import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Code } from "lucide-react";
import heroImage from "@/assets/about-hero-3d-card.jpg";
import networkChain from "@/assets/about-network-chain.jpg";
import globeNetwork from "@/assets/about-globe-network.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-12 md:py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground animate-fade-in">
            Own your name. Own your future.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Building the future of decentralized digital identity.
          </p>

          {/* Hero Visual - Floating Domain Card */}
          <div className="mb-10 animate-fade-in max-w-4xl mx-auto" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroImage}
              alt="3D floating domain card with Web3 wallet"
              className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            />
          </div>

          <Button
            size="lg"
            className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all animate-fade-in"
            style={{ animationDelay: "0.3s" }}
            onClick={() => navigate("/")}
          >
            Explore Marketplace
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            About Lexura Domains
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Lexura Domains is your gateway to the decentralized web. We make it simple
              to own, trade, and manage Web3 domains that represent your digital identity.
            </p>
            <p>
              In a world moving toward decentralization, your domain is more than an address—it's
              your identity, your brand, and your future. We provide the tools and marketplace
              to make this transition seamless.
            </p>
            <p>
              From individual creators to enterprises, we're building the infrastructure
              for the next generation of internet identity.
            </p>
          </div>

          {/* Network Illustration */}
          <div className="mt-12 max-w-md mx-auto">
            <img
              src={networkChain}
              alt="Minimal network and identity chain illustration"
              className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Motto Block */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in">
            Own your name. Own your future.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground">
                Decentralized identity as universal as email.
              </p>
              <p className="text-muted-foreground">
                We envision a future where every person, business, and creator owns their
                digital identity—secured by blockchain, controlled by them, and recognized
                across the entire internet.
              </p>
              <p className="text-muted-foreground">
                No intermediaries. No gatekeepers. Just pure ownership.
              </p>
            </div>

            {/* Globe Illustration */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl"></div>
              <img
                src={globeNetwork}
                alt="Globe with network nodes and user-controlled identities"
                className="relative w-full h-auto animate-pulse"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Map */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            Who We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Domain Investors */}
            <div className="group bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Domain Investors</h3>
              <p className="text-muted-foreground">
                Discover premium Web3 domains, track valuations, and build your digital real estate portfolio with confidence.
              </p>
            </div>

            {/* Businesses & Startups */}
            <div className="group bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Businesses & Startups</h3>
              <p className="text-muted-foreground">
                Establish your Web3 brand identity with memorable domains that grow with your business in the decentralized economy.
              </p>
            </div>

            {/* Developers & Creators */}
            <div className="group bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Developers & Creators</h3>
              <p className="text-muted-foreground">
                Build your personal brand with a decentralized identity that you truly own and control across platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2030 Outlook */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            The Future of Domains
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="p-8 bg-muted/30 rounded-2xl border border-border">
              <p className="text-5xl md:text-6xl font-bold text-primary mb-4">500M</p>
              <p className="text-lg text-muted-foreground">Web3 domain owners by 2030</p>
            </div>
            <div className="p-8 bg-muted/30 rounded-2xl border border-border">
              <p className="text-5xl md:text-6xl font-bold text-primary mb-4">40%</p>
              <p className="text-lg text-muted-foreground">Of the global $40B domain market</p>
            </div>
          </div>

          {/* Growth Curve Visualization */}
          <div className="relative h-64 w-full max-w-3xl mx-auto">
            <svg className="w-full h-full" viewBox="0 0 800 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Grid lines */}
              <line x1="50" y1="200" x2="750" y2="200" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
              <line x1="50" y1="150" x2="750" y2="150" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
              <line x1="50" y1="100" x2="750" y2="100" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
              <line x1="50" y1="50" x2="750" y2="50" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

              {/* Growth curve */}
              <path
                d="M 50 200 Q 250 180, 400 120 T 750 40"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                className="animate-fade-in"
                style={{
                  strokeDasharray: "1000",
                  strokeDashoffset: "1000",
                  animation: "drawPath 2s ease-out forwards"
                }}
              />

              {/* Labels */}
              <text x="50" y="230" fill="currentColor" opacity="0.5" fontSize="14">2024</text>
              <text x="700" y="230" fill="currentColor" opacity="0.5" fontSize="14">2030</text>
            </svg>
          </div>

          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
            The shift to Web3 domains is inevitable. Position yourself at the forefront of this transformation.
          </p>
        </div>
      </section>

      {/* Add keyframe for SVG path animation */}
      <style>{`
        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
