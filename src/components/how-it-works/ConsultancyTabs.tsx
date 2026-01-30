import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket, Target, Code, TrendingUp, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const consultants = [
  { name: "Sarah Chen", role: "Startup Advisor", avatar: "SC" },
  { name: "Marcus Reid", role: "GTM Strategist", avatar: "MR" },
  { name: "Aisha Kumar", role: "Tech Lead", avatar: "AK" },
  { name: "David Park", role: "Growth Expert", avatar: "DP" }
];

const categories = [
  {
    value: "startup",
    label: "Startup Kick-Off",
    icon: Rocket,
    title: "Launch Your Startup Right",
    description: "Get expert guidance on product-market fit, MVP development, and go-to-market strategy. We'll help you avoid common pitfalls and accelerate your launch.",
    benefits: [
      "Product-market fit analysis",
      "MVP roadmap & timeline",
      "Initial funding strategy",
      "Team structure advice"
    ]
  },
  {
    value: "gtm",
    label: "GTM Planning",
    icon: Target,
    title: "Master Your Go-To-Market",
    description: "Develop a comprehensive strategy to reach your target audience, generate leads, and convert them into paying customers with proven frameworks.",
    benefits: [
      "Customer acquisition strategy",
      "Channel optimization plan",
      "Pricing & positioning",
      "Launch campaign design"
    ]
  },
  {
    value: "tech",
    label: "Tech Advisory",
    icon: Code,
    title: "Build Scalable Architecture",
    description: "Ensure your technology stack is robust, scalable, and future-proof. Get advice on infrastructure, security, and technical best practices.",
    benefits: [
      "Architecture review & design",
      "Security audit & fixes",
      "Performance optimization",
      "Tech stack recommendations"
    ]
  },
  {
    value: "growth",
    label: "Growth Optimization",
    icon: TrendingUp,
    title: "Scale Your Business Fast",
    description: "Optimize every aspect of your growth funnel. From conversion optimization to retention strategies, we'll help you scale efficiently.",
    benefits: [
      "Conversion rate optimization",
      "Retention & engagement tactics",
      "Analytics & metrics setup",
      "Growth experiment design"
    ]
  }
];

export const ConsultancyTabs = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Expert Guidance When You Need It
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with experienced consultants who've built and scaled successful Web3 businesses
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="startup" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto gap-2 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="flex flex-col items-center gap-2 py-4 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
              >
                <category.icon className="h-5 w-5" />
                <span className="text-sm font-semibold">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-0">
              <Card className="overflow-hidden hero-card shadow-xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left: Consultant Avatars */}
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-6 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      {category.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {category.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Consultant Avatars */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex -space-x-3">
                        {consultants.map((consultant, index) => (
                          <div
                            key={index}
                            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center border-2 border-background font-semibold text-sm"
                            title={`${consultant.name} - ${consultant.role}`}
                          >
                            {consultant.avatar}
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {consultants.length}+ experts
                        </span>{" "}
                        available
                      </div>
                    </div>
                  </div>

                  {/* Right: CTA & Details */}
                  <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-background to-muted/10">
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success mb-4">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                        <span className="text-sm font-semibold">Available Today</span>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground">Session Duration</span>
                          <span className="font-semibold text-foreground">60 minutes</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground">Response Time</span>
                          <span className="font-semibold text-foreground">Within 24 hours</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground">Format</span>
                          <span className="font-semibold text-foreground">Video Call</span>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <span className="text-muted-foreground">Follow-up Support</span>
                          <span className="font-semibold text-foreground">7 days included</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="btn-gradient h-14 w-full text-lg font-semibold hover-scale shadow-lg"
                      onClick={() => navigate("/consultancy")}
                    >
                      Book a Consultant
                    </Button>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                      No commitment required • Satisfaction guaranteed
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Sticky Mobile CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t border-border z-50">
          <Button
            size="lg"
            className="btn-gradient h-14 w-full text-lg font-semibold shadow-xl"
            onClick={() => navigate("/consultancy")}
          >
            Book a Consultant
          </Button>
        </div>
      </div>
    </section>
  );
};
