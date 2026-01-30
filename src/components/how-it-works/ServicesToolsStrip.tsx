import { Card } from "@/components/ui/card";
import { Globe, Cloud, Image, Sparkles, Workflow, Calculator } from "lucide-react";
import { useState } from "react";
const services = [{
  icon: Globe,
  title: "Domain Marketplace",
  benefit: "Own your Web3 identity with verified domains",
  gradient: "from-primary/10 to-primary/5"
}, {
  icon: Cloud,
  title: "Cloud Web3 Hosting",
  benefit: "Deploy dApps with 99.9% uptime guarantee",
  gradient: "from-accent/10 to-accent/5"
}, {
  icon: Image,
  title: "NFT Marketplace",
  benefit: "Create, trade & earn from digital assets",
  gradient: "from-success/10 to-success/5"
}, {
  icon: Sparkles,
  title: "AI Name Generator",
  benefit: "Generate perfect brand names in seconds",
  gradient: "from-warning/10 to-warning/5"
}, {
  icon: Workflow,
  title: "Workflow Builder",
  benefit: "Automate tasks with no-code integrations",
  gradient: "from-primary/10 to-primary/5"
}, {
  icon: Calculator,
  title: "Profitability Calculator",
  benefit: "Forecast revenue with AI-powered insights",
  gradient: "from-accent/10 to-accent/5"
}];
export const ServicesToolsStrip = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const handleCardClick = (index: number) => {
    setFlippedCards(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };
  return;
};