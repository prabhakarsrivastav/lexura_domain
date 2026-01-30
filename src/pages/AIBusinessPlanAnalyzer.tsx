import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Upload, 
  FileText, 
  TrendingUp, 
  AlertCircle, 
  Download, 
  Share2,
  Target,
  Users,
  DollarSign,
  Shield,
  Zap,
  BarChart3
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";

interface CategoryScore {
  score: number;
  insight: string;
}

interface Analysis {
  overallScore: number;
  verdict: "Promising" | "Needs Work" | "High Risk";
  categories: {
    marketFit: CategoryScore;
    productScalability: CategoryScore;
    financialHealth: CategoryScore;
    teamStrength: CategoryScore;
    riskMitigation: CategoryScore;
    executionReadiness: CategoryScore;
  };
  weaknesses: string[];
  recommendations: string[];
  growthStage: {
    seed: number;
    early: number;
    growth: number;
    mature: number;
  };
  riskReward: {
    risk: number;
    reward: number;
  };
}

export default function AIBusinessPlanAnalyzer() {
  const [businessPlan, setBusinessPlan] = useState("");
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaying, setIsPaying] = useState(false);
  const { toast } = useToast();

  const verifyPaymentAndAnalyze = useCallback(async (sessionId: string) => {
    try {
      setIsAnalyzing(true);
      setProgress(10);

      const { data: verifyData, error: verifyError } = await supabase.functions.invoke(
        'verify-business-plan-payment',
        { body: { sessionId } }
      );

      if (verifyError) throw verifyError;

      if (!verifyData.paid) {
        throw new Error('Payment not completed');
      }

      setProgress(30);

      // Get business plan from sessionStorage
      const savedPlan = sessionStorage.getItem('businessPlan');
      if (!savedPlan) {
        throw new Error('Business plan not found. Please try again.');
      }

      setBusinessPlan(savedPlan);
      sessionStorage.removeItem('businessPlan');

      // Analyze the business plan
      await performAnalysis(savedPlan);
    } catch (error) {
      console.error('Payment verification error:', error);
      toast({
        title: "Payment verification failed",
        description: error instanceof Error ? error.message : "Please contact support",
        variant: "destructive",
      });
      setIsAnalyzing(false);
      setProgress(0);
    }
  }, [toast]);

  const performAnalysis = useCallback(async (planText: string) => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 5;
      });
    }, 500);

    try {
      const { data, error } = await supabase.functions.invoke('analyze-business-plan', {
        body: { businessPlan: planText },
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (error) throw error;

      setAnalysis(data.analysis);
      toast({
        title: "Analysis complete",
        description: "Your business plan has been evaluated",
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
      setTimeout(() => setProgress(0), 1000);
    }
  }, [toast]);

  // Check for payment success on page load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    
    if (sessionId) {
      verifyPaymentAndAnalyze(sessionId);
      // Clean URL
      window.history.replaceState({}, '', '/ai-business-plan-analyzer');
    }
  }, [verifyPaymentAndAnalyze]);

  const extractTextFromPDF = async (file: File): Promise<string> => {
    const pdfjsLib = await import('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs';
    
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join(' ');
      fullText += pageText + '\n\n';
    }
    
    return fullText;
  };

  const extractTextFromDOCX = async (file: File): Promise<string> => {
    const mammoth = await import('mammoth');
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  };

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 20MB",
        variant: "destructive",
      });
      return;
    }

    try {
      let text = '';
      
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        toast({
          title: "Processing PDF",
          description: "Extracting text from PDF...",
        });
        text = await extractTextFromPDF(file);
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.name.endsWith('.docx')) {
        toast({
          title: "Processing DOCX",
          description: "Extracting text from Word document...",
        });
        text = await extractTextFromDOCX(file);
      } else if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        await new Promise((resolve) => {
          reader.onload = (e) => {
            text = e.target?.result as string;
            resolve(null);
          };
          reader.readAsText(file);
        });
      } else {
        throw new Error('Unsupported file type. Please upload PDF, DOCX, or TXT files.');
      }
      
      text = text.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').replace(/[ \t]+/g, ' ').trim();
      
      setBusinessPlan(text);
      toast({
        title: "File uploaded",
        description: "Your business plan has been loaded",
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Please try copying and pasting your text instead",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleAnalyze = async () => {
    if (!businessPlan || businessPlan.trim().length < 100) {
      toast({
        title: "Invalid input",
        description: "Please provide at least 100 characters of your business plan",
        variant: "destructive",
      });
      return;
    }

    setIsPaying(true);

    try {
      // Save business plan to sessionStorage for after payment
      sessionStorage.setItem('businessPlan', businessPlan);

      // Create Stripe checkout session
      const { data, error } = await supabase.functions.invoke('create-business-plan-checkout', {
        body: { businessPlanLength: businessPlan.length },
      });

      if (error) throw error;

      // Redirect to Stripe checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout failed",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
      setIsPaying(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#2ECC71";
    if (score >= 50) return "#F1C40F";
    return "#E74C3C";
  };

  const getVerdictColor = (verdict: string) => {
    if (verdict === "Promising") return "text-[#2ECC71]";
    if (verdict === "Needs Work") return "text-[#F1C40F]";
    return "text-[#E74C3C]";
  };

  const radarData = analysis ? [
    { category: "Market Fit", score: analysis.categories.marketFit.score },
    { category: "Product", score: analysis.categories.productScalability.score },
    { category: "Financial", score: analysis.categories.financialHealth.score },
    { category: "Team", score: analysis.categories.teamStrength.score },
    { category: "Risk", score: analysis.categories.riskMitigation.score },
    { category: "Execution", score: analysis.categories.executionReadiness.score },
  ] : [];

  const growthStageData = analysis ? [
    { stage: "Seed", value: analysis.growthStage.seed },
    { stage: "Early", value: analysis.growthStage.early },
    { stage: "Growth", value: analysis.growthStage.growth },
    { stage: "Mature", value: analysis.growthStage.mature },
  ] : [];

  const riskRewardData = analysis ? [
    { type: "Risk", value: analysis.riskReward.risk },
    { type: "Reward", value: analysis.riskReward.reward },
  ] : [];

  const categoryIcons: Record<string, any> = {
    marketFit: Target,
    productScalability: Zap,
    financialHealth: DollarSign,
    teamStrength: Users,
    riskMitigation: Shield,
    executionReadiness: BarChart3,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#3d3d3d]/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#3d3d3d]" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-[#3d3d3d]">
            Turn Your Ideas into Actionable Insights
          </h1>
          <p className="text-xl text-[#3d3d3d]/80 mb-2">
            Upload your business plan — get instant AI-driven feedback, risk
            analysis, and a clear execution roadmap.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 pb-20">
        {/* Upload & Input Section */}
        <Card className="mb-8 border-[#3d3d3d]/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Your Business Plan
            </CardTitle>
            <CardDescription>
              Upload a file (PDF, DOCX, TXT) or paste your business plan text below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="flex-1">
                <div className="border-2 border-dashed border-border hover:border-primary/50 transition-colors p-8 text-center cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-[#3d3d3d]/70">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-[#3d3d3d]/70 mt-1">
                    PDF, DOCX, TXT (max 20MB)
                  </p>
                </div>
                <input
                  type="file"
                  accept=".pdf,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <div className="relative">
              <Textarea
                placeholder="Paste your business plan or pitch deck link here..."
                value={businessPlan}
                onChange={(e) => setBusinessPlan(e.target.value)}
                className="min-h-[200px] text-sm leading-relaxed whitespace-pre-wrap"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              />
              <div className="absolute bottom-2 right-2 text-xs text-[#3d3d3d]/70 bg-white/80 px-2 py-1 rounded">
                {businessPlan.length} characters
              </div>
            </div>

            {isAnalyzing && (
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-[#3d3d3d]/70 text-center">
                  Analyzing your business plan... {progress}%
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Button
                onClick={handleAnalyze}
                disabled={isAnalyzing || isPaying || !businessPlan}
                className="w-full h-14 text-lg bg-[#3d3d3d] hover:bg-[#2d2d2d] text-white"
                size="lg"
              >
                {isPaying ? "Redirecting to payment..." : isAnalyzing ? "Analyzing..." : "Pay $9 & Analyze My Plan"}
              </Button>
              <p className="text-xs text-center text-[#3d3d3d]/70">
                Secure payment via Stripe • One-time charge of $9 USD per report
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {analysis && (
          <>
            {/* Overall Score Card */}
            <Card className="mb-8 bg-gradient-to-br from-[#3d3d3d]/5 to-[#3d3d3d]/10 border-[#3d3d3d]/20">
              <CardContent className="pt-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-40 h-40 border-8 mb-6" 
                       style={{ borderColor: getScoreColor(analysis.overallScore) }}>
                    <div>
                      <div className="text-5xl font-bold">{analysis.overallScore}</div>
                      <div className="text-sm text-[#3d3d3d]/70">/ 100</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#3d3d3d]">Overall Business Viability</h3>
                  <p className={`text-xl font-semibold ${getVerdictColor(analysis.verdict)}`}>
                    {analysis.verdict}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Category Breakdown */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Section-wise Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(analysis.categories).map(([key, value]) => {
                    const Icon = categoryIcons[key];
                    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    
                    return (
                      <div key={key} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon className="w-5 h-5 text-primary" />
                            <span className="font-medium">{label}</span>
                          </div>
                          <span className="font-bold" style={{ color: getScoreColor(value.score) }}>
                            {value.score}/100
                          </span>
                        </div>
                        <Progress value={value.score} className="h-2" />
                        <p className="text-sm text-[#3d3d3d]/70">{value.insight}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Visual Diagrams */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Score Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#333" />
                      <PolarAngleAxis dataKey="category" tick={{ fill: '#3d3d3d', fontSize: 12 }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#3d3d3d' }} />
                      <Radar name="Score" dataKey="score" stroke="#3d3d3d" fill="#3d3d3d" fillOpacity={0.6} />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Stage Readiness</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={growthStageData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="stage" tick={{ fill: '#3d3d3d' }} />
                      <YAxis tick={{ fill: '#3d3d3d' }} />
                      <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #3d3d3d' }} />
                      <Bar dataKey="value" fill="#3d3d3d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Risk vs Reward Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={riskRewardData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis type="number" domain={[0, 100]} tick={{ fill: '#3d3d3d' }} />
                      <YAxis dataKey="type" type="category" tick={{ fill: '#3d3d3d' }} />
                      <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #3d3d3d' }} />
                      <Bar dataKey="value">
                        {riskRewardData.map((entry, index) => (
                          <Cell key={index} fill={entry.type === 'Risk' ? '#E74C3C' : '#2ECC71'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recommendations */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Recommendations & Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-[#E74C3C]">Top 3 Weaknesses</h4>
                  <ul className="space-y-2">
                    {analysis.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#E74C3C] mt-1">•</span>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-[#2ECC71]">Actionable Suggestions</h4>
                  <ul className="space-y-2">
                    {analysis.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-[#2ECC71] mt-1" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Export & Share */}
            <Card>
              <CardHeader>
                <CardTitle>Export & Share</CardTitle>
                <CardDescription className="text-[#3d3d3d]/70">
                  Analysis stored securely for 7 days
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download PNG
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Link
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}