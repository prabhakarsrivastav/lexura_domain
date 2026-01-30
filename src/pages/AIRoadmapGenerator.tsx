import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Loader2, TrendingUp, Calendar, Lock, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

interface RoadmapMonth {
  month: number;
  revenue: number;
  profit: number;
  actions: {
    marketing: string[];
    sales: string[];
    product: string[];
    operations: string[];
  };
}

interface DomainSuggestion {
  name: string;
  extension: string;
  available: boolean;
  price: number;
}

interface HostingSuggestion {
  name: string;
  type: string;
  price: string;
  features: string[];
  recommended: boolean;
}

const AIRoadmapGenerator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [currentStage, setCurrentStage] = useState("");
  const [targetRevenue, setTargetRevenue] = useState("");
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<RoadmapMonth[]>([]);
  const [showPaywall, setShowPaywall] = useState(false);
  const [domainSuggestions, setDomainSuggestions] = useState<DomainSuggestion[]>([]);
  const [hostingSuggestions, setHostingSuggestions] = useState<HostingSuggestion[]>([]);

  const generateRoadmap = async () => {
    if (!industry || !budget || !currentStage || !targetRevenue) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate your roadmap.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Mock AI generation - replace with actual Lovable AI integration
    setTimeout(() => {
      const mockRoadmap: RoadmapMonth[] = Array.from({ length: 12 }, (_, i) => ({
        month: i + 1,
        revenue: Math.round(parseInt(targetRevenue) * ((i + 1) / 12) * (0.7 + Math.random() * 0.6)),
        profit: Math.round(parseInt(targetRevenue) * ((i + 1) / 12) * (0.2 + Math.random() * 0.3)),
        actions: {
          marketing: [
            `Launch targeted ${industry} campaigns`,
            "Optimize conversion funnel",
            "Scale top-performing channels"
          ],
          sales: [
            "Build outbound pipeline",
            "Implement CRM system",
            "Train sales team on objection handling"
          ],
          product: [
            "Ship core features for ${industry}",
            "Gather user feedback",
            "Iterate based on analytics"
          ],
          operations: [
            "Set up automation workflows",
            "Hire key team members",
            "Optimize operational costs"
          ]
        }
      }));
      
      setRoadmap(mockRoadmap);
      
      // Generate domain suggestions based on industry
      const industryKeyword = industry.toLowerCase();
      const mockDomains: DomainSuggestion[] = [
        { name: `${industryKeyword}hub`, extension: '.crypto', available: true, price: 2.5 },
        { name: `${industryKeyword}pro`, extension: '.blockchain', available: true, price: 3.2 },
        { name: `my${industryKeyword}`, extension: '.wallet', available: true, price: 2.8 },
        { name: `${industryKeyword}platform`, extension: '.nft', available: false, price: 4.5 },
      ];
      setDomainSuggestions(mockDomains);
      
      // Generate hosting suggestions based on industry and budget
      const budgetNum = parseInt(budget);
      const mockHosting: HostingSuggestion[] = [
        {
          name: 'Starter Hosting',
          type: 'Shared Web3 Hosting',
          price: '0.03 ETH/month',
          features: ['5GB Storage', 'Free SSL', 'Web3 Domain Integration', '99.9% Uptime'],
          recommended: budgetNum < 5000
        },
        {
          name: 'Professional Hosting',
          type: 'VPS Web3 Hosting',
          price: '0.08 ETH/month',
          features: ['50GB Storage', 'Free SSL', 'IPFS Integration', 'CDN Included', 'Priority Support'],
          recommended: budgetNum >= 5000 && budgetNum < 20000
        },
        {
          name: 'Enterprise Hosting',
          type: 'Dedicated Web3 Infrastructure',
          price: '0.3 ETH/month',
          features: ['Unlimited Storage', 'Advanced Security', 'Multi-region IPFS', 'Custom Smart Contracts', '24/7 Support'],
          recommended: budgetNum >= 20000
        },
      ];
      setHostingSuggestions(mockHosting);
      
      setShowPaywall(true);
      setLoading(false);
    }, 2000);
  };

  const handleUnlockFullRoadmap = () => {
    toast({
      title: "Coming Soon",
      description: "Stripe integration for premium roadmap access will be available soon.",
    });
  };

  const handleBookConsultation = () => {
    navigate("/consultancy");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Banner */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
            <TrendingUp className="h-10 w-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text font-inter">
            Reach Profitability in 12 Months
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            AI-powered business roadmap with month-by-month action steps to hit your revenue goals.
          </p>
        </div>
      </section>

      {/* Input Form */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 glass-card">
            <h3 className="text-2xl font-bold mb-6">Generate Your Roadmap</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS / Software</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="consulting">Consulting / Agency</SelectItem>
                    <SelectItem value="marketplace">Marketplace</SelectItem>
                    <SelectItem value="fintech">Fintech</SelectItem>
                    <SelectItem value="healthtech">Healthtech</SelectItem>
                    <SelectItem value="edtech">Edtech</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Monthly Budget (ETH) *</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="e.g., 10000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="stage">Current Stage *</Label>
                <Select value={currentStage} onValueChange={setCurrentStage}>
                  <SelectTrigger id="stage">
                    <SelectValue placeholder="Select your stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">Idea / Pre-launch</SelectItem>
                    <SelectItem value="mvp">MVP / Beta</SelectItem>
                    <SelectItem value="early-revenue">Early Revenue (0.001-0.01 ETH MRR)</SelectItem>
                    <SelectItem value="growth">Growth Stage (0.01+ ETH MRR)</SelectItem>
                    <SelectItem value="scale">Scaling (0.1+ ETH MRR)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="target">Target Monthly Revenue (ETH) *</Label>
                <Input
                  id="target"
                  type="number"
                  placeholder="e.g., 100000"
                  value={targetRevenue}
                  onChange={(e) => setTargetRevenue(e.target.value)}
                />
              </div>
            </div>

            <Button
              size="lg"
              className="w-full btn-gradient h-14 text-lg"
              onClick={generateRoadmap}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Your Roadmap...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate 12-Month Roadmap
                </>
              )}
            </Button>
          </Card>

          {/* AI Output Section */}
          {roadmap.length > 0 && (
            <div className="mt-12">
              {/* Business Summary Section */}
              <Card className="p-8 glass-card mb-8">
                <h3 className="text-2xl font-bold mb-6">Your Business Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-sm text-muted-foreground mb-1">Industry</div>
                    <div className="text-lg font-semibold capitalize">{industry.replace('-', ' ')}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-sm text-muted-foreground mb-1">Monthly Budget</div>
                    <div className="text-lg font-semibold">${parseInt(budget).toLocaleString()}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-sm text-muted-foreground mb-1">Current Stage</div>
                    <div className="text-lg font-semibold capitalize">{currentStage.replace('-', ' ')}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-sm text-muted-foreground mb-1">Target Monthly Revenue</div>
                    <div className="text-lg font-semibold">${parseInt(targetRevenue).toLocaleString()}</div>
                  </div>
                </div>
                <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-primary/20">
                  <h4 className="font-semibold mb-3 text-lg">AI Business Analysis</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Based on your {industry} business with a ${parseInt(budget).toLocaleString()} monthly budget, 
                    our AI has crafted a strategic roadmap to help you reach ${parseInt(targetRevenue).toLocaleString()} 
                    in monthly revenue within 12 months. Starting from the {currentStage.replace('-', ' ')} stage, 
                    this plan focuses on balanced growth across marketing, sales, product development, and operations 
                    to ensure sustainable profitability.
                  </p>
                </div>
              </Card>

              {/* Domain & Hosting Recommendations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Domain Suggestions */}
                <Card className="p-8 glass-card">
                  <h3 className="text-2xl font-bold mb-6">Suggested Domain Names</h3>
                  <p className="text-muted-foreground mb-6">
                    Perfect Web3 domains for your {industry} business
                  </p>
                  <div className="space-y-4">
                    {domainSuggestions.map((domain, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg border ${
                          domain.available
                            ? 'bg-success/5 border-success/20'
                            : 'bg-muted/50 border-muted opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-lg">
                            {domain.name}
                            <span className="text-primary">{domain.extension}</span>
                          </div>
                          <div className="text-lg font-bold text-primary">
                            {domain.price} ETH
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-sm ${domain.available ? 'text-success' : 'text-muted-foreground'}`}>
                            {domain.available ? '✓ Available' : '✗ Unavailable'}
                          </span>
                          {domain.available && (
                            <Button size="sm" variant="outline" onClick={() => navigate('/marketplace')}>
                              View Domain
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-6 btn-gradient"
                    onClick={() => navigate('/ai-domain-generator')}
                  >
                    Generate More Domains
                  </Button>
                </Card>

                {/* Hosting Recommendations */}
                <Card className="p-8 glass-card">
                  <h3 className="text-2xl font-bold mb-6">Recommended Hosting</h3>
                  <p className="text-muted-foreground mb-6">
                    Web3 hosting solutions for your budget and scale
                  </p>
                  <div className="space-y-4">
                    {hostingSuggestions.map((hosting, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg border ${
                          hosting.recommended
                            ? 'bg-primary/5 border-primary/20 ring-2 ring-primary/20'
                            : 'bg-muted/50 border-muted'
                        }`}
                      >
                        {hosting.recommended && (
                          <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold bg-primary text-primary-foreground rounded">
                            Recommended for You
                          </div>
                        )}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-semibold text-lg">{hosting.name}</div>
                            <div className="text-sm text-muted-foreground">{hosting.type}</div>
                          </div>
                          <div className="text-lg font-bold text-primary">
                            {hosting.price}
                          </div>
                        </div>
                        <ul className="space-y-1 mb-3">
                          {hosting.features.map((feature, fIdx) => (
                            <li key={fIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="text-success">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-6 btn-gradient"
                    onClick={() => navigate('/cloud-hosting')}
                  >
                    Explore Hosting Plans
                  </Button>
                </Card>
              </div>

              {/* Profitability Dashboard */}
              <Card className="p-8 glass-card mb-8">
                <h3 className="text-2xl font-bold mb-6">Profitability Forecast</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${roadmap[11]?.revenue.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Month 12 Revenue</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-success/10">
                    <div className="text-3xl font-bold text-success mb-2">
                      ${roadmap[11]?.profit.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Month 12 Profit</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/10">
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {Math.round((roadmap[11]?.profit / roadmap[11]?.revenue) * 100)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Profit Margin</div>
                  </div>
                </div>

                {/* Simple Chart Visualization */}
                <div className="space-y-4">
                  {roadmap.slice(0, 3).map((month) => (
                    <div key={month.month}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Month {month.month}</span>
                        <span className="text-muted-foreground">${month.revenue.toLocaleString()}</span>
                      </div>
                      <Progress value={(month.revenue / parseInt(targetRevenue)) * 100} />
                    </div>
                  ))}
                </div>
              </Card>

              {/* Month-by-Month Roadmap */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Your 12-Month Action Plan</h3>
                
                {/* Show first 3 months for free preview */}
                {roadmap.slice(0, 3).map((month) => (
                  <Card key={month.month} className="p-6 glass-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                        {month.month}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Month {month.month}</h4>
                        <p className="text-sm text-muted-foreground">
                          Target: ${month.revenue.toLocaleString()} revenue
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2 text-primary">📈 Marketing</h5>
                        <ul className="space-y-1 text-sm">
                          {month.actions.marketing.map((action, idx) => (
                            <li key={idx} className="text-muted-foreground">• {action}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 text-primary">💰 Sales</h5>
                        <ul className="space-y-1 text-sm">
                          {month.actions.sales.map((action, idx) => (
                            <li key={idx} className="text-muted-foreground">• {action}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 text-primary">🚀 Product</h5>
                        <ul className="space-y-1 text-sm">
                          {month.actions.product.map((action, idx) => (
                            <li key={idx} className="text-muted-foreground">• {action}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 text-primary">⚙️ Operations</h5>
                        <ul className="space-y-1 text-sm">
                          {month.actions.operations.map((action, idx) => (
                            <li key={idx} className="text-muted-foreground">• {action}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Premium Paywall */}
                {showPaywall && (
                  <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-2 border-primary/20 relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <Lock className="h-12 w-12 text-primary/20" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold mb-4 gradient-text">
                        Unlock Full 12-Month Roadmap
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Get access to all 12 months of detailed action steps, financial projections, and downloadable resources.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <div className="font-semibold">Complete Roadmap</div>
                            <div className="text-sm text-muted-foreground">All 12 months unlocked</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <div className="font-semibold">Financial Models</div>
                            <div className="text-sm text-muted-foreground">Revenue & profit projections</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Video className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <div className="font-semibold">Expert Support</div>
                            <div className="text-sm text-muted-foreground">1-on-1 consultation included</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          size="lg" 
                          className="btn-gradient h-14 px-8 text-lg font-semibold flex-1"
                          onClick={handleUnlockFullRoadmap}
                        >
                          <Lock className="mr-2 h-5 w-5" />
                          Unlock Full Roadmap - 0.3 ETH
                        </Button>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="h-14 px-8 text-lg font-semibold border-2"
                          onClick={handleBookConsultation}
                        >
                          <Video className="mr-2 h-5 w-5" />
                          Book Consultation
                        </Button>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          )}

          {/* Benefits Section */}
          {roadmap.length === 0 && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hero-card text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Revenue Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Clear path to your revenue goals with monthly milestones
                </p>
              </Card>
              <Card className="p-6 hero-card text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Actionable Steps</h4>
                <p className="text-sm text-muted-foreground">
                  Specific actions for marketing, sales, product, and ops
                </p>
              </Card>
              <Card className="p-6 hero-card text-center">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">AI-Powered</h4>
                <p className="text-sm text-muted-foreground">
                  Personalized roadmap based on your industry and goals
                </p>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AIRoadmapGenerator;
