import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  ArrowRight
} from "lucide-react";

// Import custom icons
import smartScoringEngineIcon from "@/assets/icons/smart-scoring-engine.png";
import visualStrategyMapIcon from "@/assets/icons/visual-strategy-map.png";
import actionReadyIcon from "@/assets/icons/action-ready.png";
import uploadDownloadIcon from "@/assets/icons/upload-download.png";
import exportIcon from "@/assets/icons/export-icon.png";
import sparkleIcon from "@/assets/icons/sparkle-icon.png";

export const AIBusinessPlanSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: smartScoringEngineIcon,
      title: "Smart Scoring Engine",
      description: "AI evaluates your plan across 20+ success metrics — market potential, cost structure, scalability, and ROI."
    },
    {
      icon: visualStrategyMapIcon,
      title: "Visual Strategy Map",
      description: "Generates a diagram that shows your plan's strengths, gaps, and recommended next steps."
    },
    {
      icon: actionReadyIcon,
      title: "Action-Ready Recommendations",
      description: "Tailored advice on funding, marketing funnels, and operational workflows to make your plan investor-ready."
    }
  ];

  const steps = [
    { icon: uploadDownloadIcon, label: "Upload your PDF or Doc" },
    { icon: sparkleIcon, label: "AI analyzes and scores" },
    { icon: visualStrategyMapIcon, label: "View diagram + report" },
    { icon: exportIcon, label: "Export as PDF or share" }
  ];

  return (
    <section className="py-12 px-6 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00B4D8] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0077B6] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#00B4D8]/10 px-6 py-2 rounded-full border border-[#00B4D8]/30 mb-6">
            <FileText className="w-5 h-5 text-[#00B4D8]" />
            <span className="text-[#00B4D8] font-semibold">AI-Powered Analysis</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Turn Your Ideas into Actionable Insights
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Upload your business plan — get instant AI-driven feedback, risk analysis, and a clear execution roadmap.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            return (
              <Card
                key={index}
                className="border hover:bg-accent/5 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00B4D8]/20 group rounded-xl"
                style={{ backgroundColor: '#fafafa' }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors overflow-hidden">
                    <img src={feature.icon} alt={feature.title} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-foreground text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive Demo Strip */}
        <div className="mb-12 backdrop-blur-sm rounded-2xl p-8 border" style={{ backgroundColor: '#fafafa' }}>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">How It Works</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center animate-fade-in hover:scale-110 transition-transform overflow-hidden">
                      <img src={step.icon} alt={step.label} className="w-10 h-10 object-contain" />
                    </div>
                    <p className="text-foreground text-sm font-medium">{step.label}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-accent/50" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => navigate("/ai-business-plan-analyzer")}
            size="lg"
            className="btn-gradient h-12 md:h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Analyze My Plan Now
            <img src={sparkleIcon} alt="AI" className="ml-2 w-5 h-5 object-contain" />
          </Button>

          <Button
            onClick={() => navigate("/ai-business-plan-analyzer")}
            variant="outline"
            size="lg"
            className="bg-background hover:bg-accent/10 text-foreground border font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all hover:scale-105"
          >
            See Sample Report
            <FileText className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};