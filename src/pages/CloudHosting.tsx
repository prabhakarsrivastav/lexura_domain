import { useState } from "react";
import { HostingHero } from "@/components/hero/HostingHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Cloud, Zap, Shield, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CloudHosting = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Starter",
      price: "0.1",
      period: "month",
      features: [
        "1 Web3 Domain",
        "10 GB Storage",
        "100 GB Bandwidth",
        "SSL Certificate",
        "Basic DDoS Protection",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "0.3",
      period: "month",
      features: [
        "5 Web3 Domains",
        "50 GB Storage",
        "500 GB Bandwidth",
        "SSL Certificate",
        "Advanced DDoS Protection",
        "Custom DNS",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "0.8",
      period: "month",
      features: [
        "Unlimited Web3 Domains",
        "200 GB Storage",
        "Unlimited Bandwidth",
        "SSL Certificate",
        "Enterprise DDoS Protection",
        "Custom DNS",
        "24/7 Premium Support",
        "Custom CDN",
        "SLA Guarantee",
      ],
      popular: false,
    },
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Global CDN ensures your dApp loads instantly worldwide",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure by Default",
      description: "Enterprise-grade security with automatic SSL and DDoS protection",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web3 Native",
      description: "Seamless integration with your Web3 domain and wallet",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Auto Scaling",
      description: "Scale automatically based on traffic without downtime",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <HostingHero />

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hero-card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="container mx-auto px-4 pb-16">
        <h3 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 hero-card relative ${
                plan.popular ? "border-primary border-2 card-hover" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">ETH/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.popular ? "btn-gradient" : ""}`}
                variant={plan.popular ? "default" : "outline"}
                onClick={() => setSelectedPlan(plan.name)}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-12 hero-card text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Deploy?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect your Web3 domain and deploy your dApp in minutes. No technical expertise required.
          </p>
          <Button size="lg" className="btn-gradient" onClick={() => navigate("/seller")}>
            <Cloud className="mr-2 h-5 w-5" />
            Start Hosting Now
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default CloudHosting;
