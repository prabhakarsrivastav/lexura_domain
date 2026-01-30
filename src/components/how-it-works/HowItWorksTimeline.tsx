import { ShoppingBag, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Pick Your Service",
    description: "Choose from domains, hosting, NFT marketplace, or AI tools to kickstart your Web3 journey.",
    color: "from-primary/20 to-primary/5"
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Launch with Smart Tools",
    description: "Use AI valuation, roadmap generators, and analytics to make data-driven decisions.",
    color: "from-accent/20 to-accent/5"
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Optimize with Consultancy",
    description: "Get expert guidance on GTM strategy, growth optimization, and technical architecture.",
    color: "from-success/20 to-success/5"
  },
  {
    number: "04",
    icon: Zap,
    title: "Scale with Automations",
    description: "Connect workflows, integrate tools, and automate operations for maximum efficiency.",
    color: "from-warning/20 to-warning/5"
  }
];

export const HowItWorksTimeline = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Your Path to Success
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Four simple steps from idea to profitable Web3 business
        </p>
      </div>

      {/* Desktop: Horizontal Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-success" />
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className={`p-6 hero-card hover:border-primary transition-all duration-300 bg-gradient-to-br ${step.color}`}>
                  {/* Step Number Circle */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg border-4 border-background shadow-lg">
                    {step.number}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-background mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Vertical Timeline */}
      <div className="lg:hidden space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex gap-6">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-primary to-accent mx-auto mt-2" />
                )}
              </div>

              {/* Content Card */}
              <Card className={`flex-1 p-6 hero-card bg-gradient-to-br ${step.color}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
