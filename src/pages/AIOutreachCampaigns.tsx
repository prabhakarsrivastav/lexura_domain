import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Mail, MessageSquare, Target, TrendingUp, Zap, Check, ArrowRight, Shield, BarChart3, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIOutreachCampaigns = () => {
  const navigate = useNavigate();

  const whyChooseUs = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Hyper-Personalized Messages",
      description: "AI crafts unique messages for each prospect"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Faster Lead Response",
      description: "Instant AI replies keep conversations alive"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Unified Dashboard",
      description: "All channels tracked in one place"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Proven Playbooks",
      description: "Battle-tested strategies from top performers"
    }
  ];

  const howItWorks = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Connect Your CRM",
      description: "Seamlessly integrate with your existing tools"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Train the AI Agent",
      description: "Customize messaging to match your brand voice"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Launch Campaigns",
      description: "Deploy across multiple channels instantly"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Track & Improve",
      description: "Real-time analytics and continuous optimization"
    }
  ];

  const caseStudies = [
    {
      title: "NFT Marketplace Growth",
      stats: "3× higher qualified leads in 60 days",
      description: "AI-powered outreach helped expand their collector base",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "DeFi Platform Expansion",
      stats: "Reduced CAC by 42%",
      description: "Hyper-personalized campaigns increased conversion rates",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Web3 SaaS Launch Campaign",
      stats: "30% reply rate achieved",
      description: "Automated AI messaging drove early adoption",
      gradient: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 text-sm px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Outreach
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
              Outreach That Works While You Sleep
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AI-powered campaigns that find, engage, and convert your best leads
            </p>
            <Button size="lg" className="btn-gradient text-lg px-8 py-6 h-auto" onClick={() => navigate("/consultancy")}>
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="p-6 text-center card-hover border-2 border-transparent hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Package</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scale your outreach with plans designed for growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Package */}
          <Card className="p-8 card-hover rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">Starter</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold">$499</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground">Perfect for testing outreach strategies</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">3,000 emails + LinkedIn + SMS per month</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Pre-built campaign templates</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Basic lead scoring & AI auto-replies</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Weekly performance reports</span>
              </div>
            </div>
            
            <Button className="w-full rounded-full" size="lg" onClick={() => navigate("/consultancy")}>
              Start Small, Move Fast
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          {/* Growth Package */}
          <Card className="p-8 card-hover rounded-3xl border-4 border-primary relative shadow-2xl scale-105 transition-all duration-300 hover:shadow-[0_0_60px_rgba(var(--primary),0.3)] hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">Growth</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold">$1,200</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground">Scale outreach with advanced AI</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">12,000 outreach credits across channels</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Custom AI-trained copy for your industry</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Smart follow-ups & response classification</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">A/B testing & real-time optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Dedicated campaign manager</span>
              </div>
            </div>
            
            <Button className="w-full btn-gradient rounded-full" size="lg" onClick={() => navigate("/consultancy")}>
              Scale Outreach
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          {/* Enterprise Package */}
          <Card className="p-8 card-hover rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold">Custom Pricing</span>
              </div>
              <p className="text-muted-foreground">Enterprise-grade outreach solutions</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Unlimited outreach credits</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Custom integrations (CRM, dialer, WhatsApp API)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Multi-user role management & dashboards</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Priority AI support & compliance safeguards</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">Quarterly strategy review with experts</span>
              </div>
            </div>
            
            <Button className="w-full rounded-full" size="lg" variant="outline" onClick={() => navigate("/consultancy")}>
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {howItWorks.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 card-hover text-center border-2 border-transparent hover:border-primary/50 transition-all duration-300" style={{ backgroundColor: '#fafafa' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 text-primary mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
              {index < howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Results in the Web3 World</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses scaled outreach with our AI-driven campaigns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className={`p-8 card-hover rounded-3xl bg-gradient-to-br ${study.gradient} border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
              <div className="mb-6">
                <Badge className="mb-4">Case Study</Badge>
                <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
              </div>
              <div className="p-4 rounded-xl bg-background/80 backdrop-blur-sm border-2 border-primary/20">
                <p className="text-2xl font-bold text-primary">{study.stats}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full" onClick={() => navigate("/consultancy")}>
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Proof & Trust */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-purple-600/5 border-2">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 italic">
              "We cut outreach time by 80% and booked 4× more meetings in 6 weeks."
            </blockquote>
            <p className="text-lg text-muted-foreground mb-8">
              — Growth Head, SaaS Startup
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 items-center mt-12 pt-12 border-t">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">CAN-SPAM Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">SOC 2 Type II</span>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-purple-600 to-primary py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Let AI Drive Your Outreach
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses automating their outreach and scaling faster
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-12 py-6 h-auto rounded-full hover-scale"
            onClick={() => navigate("/consultancy")}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIOutreachCampaigns;
