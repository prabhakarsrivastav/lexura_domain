import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Lightbulb, Globe, TrendingUp, Calendar } from "lucide-react";
import { useState } from "react";

const demoSteps = [
  { icon: Lightbulb, label: "Idea", color: "text-warning" },
  { icon: Globe, label: "Name", color: "text-primary" },
  { icon: CheckCircle2, label: "Domain", color: "text-success" },
  { icon: TrendingUp, label: "Roadmap", color: "text-accent" },
  { icon: Calendar, label: "Consultant", color: "text-primary" }
];

export const InteractiveDemoWidget = () => {
  const [businessIdea, setBusinessIdea] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleDemo = () => {
    if (!businessIdea) return;
    
    setIsProcessing(true);
    setShowResults(false);
    setCurrentStep(0);

    // Simulate progress through steps
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= demoSteps.length - 1) {
          clearInterval(interval);
          setIsProcessing(false);
          setShowResults(true);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Try It Yourself
          </h2>
          <p className="text-xl text-muted-foreground">
            See how our AI transforms your idea into a profitable business plan
          </p>
        </div>

        <Card className="p-8 md:p-12 hero-card shadow-2xl">
          {/* Input Section */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3 text-foreground">
              Enter Your Business Idea
            </label>
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="e.g., AI-powered fitness app, sustainable fashion marketplace..."
                value={businessIdea}
                onChange={(e) => setBusinessIdea(e.target.value)}
                className="flex-1 h-14 text-lg"
                disabled={isProcessing}
              />
              <Button
                size="lg"
                className="btn-gradient h-14 px-8"
                onClick={handleDemo}
                disabled={!businessIdea || isProcessing}
              >
                {isProcessing ? "Processing..." : "Generate"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Progress Animation */}
          {isProcessing && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {demoSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        index <= currentStep
                          ? "bg-primary text-primary-foreground scale-110"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className={`text-xs font-medium ${index <= currentStep ? step.color : "text-muted-foreground"}`}>
                      {step.label}
                    </span>
                    {index < demoSteps.length - 1 && (
                      <div className="absolute h-0.5 w-full top-6 left-1/2 -z-10">
                        <div
                          className={`h-full transition-all duration-500 ${
                            index < currentStep ? "bg-primary" : "bg-muted"
                          }`}
                          style={{ width: index < currentStep ? "100%" : "0%" }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {showResults && (
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <Globe className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold text-lg mb-2">Suggested Name</h4>
                <p className="text-muted-foreground mb-2">FitGenius</p>
                <p className="text-sm text-success">✓ Domain available</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <TrendingUp className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-bold text-lg mb-2">1-Year Projection</h4>
                <p className="text-muted-foreground mb-2">284K ETH revenue</p>
                <p className="text-sm text-success">+156% growth</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                <Calendar className="h-8 w-8 text-success mb-3" />
                <h4 className="font-bold text-lg mb-2">Next Step</h4>
                <p className="text-muted-foreground mb-2">Book consultant</p>
                <Button variant="outline" size="sm" className="w-full">
                  Schedule Call
                </Button>
              </Card>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};
