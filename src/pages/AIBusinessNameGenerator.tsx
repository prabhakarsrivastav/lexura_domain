import { useState } from "react";
import { AIToolsHero } from "@/components/hero/AIToolsHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Loader2, CheckCircle2, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AIBusinessNameGenerator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [industry, setIndustry] = useState("");
  const [tone, setTone] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Array<{
    name: string;
    available: boolean;
    price: number;
    tld: string;
  }>>([]);

  const generateNames = () => {
    setLoading(true);
    // Mock AI generation
    setTimeout(() => {
      const mockSuggestions = [
        { name: `${industry}vault`, available: true, price: 3.5, tld: ".crypto" },
        { name: `${industry}labs`, available: true, price: 4.2, tld: ".blockchain" },
        { name: `${industry}pro`, available: false, price: 0, tld: ".nft" },
        { name: `get${industry}`, available: true, price: 2.8, tld: ".wallet" },
        { name: `${industry}hub`, available: true, price: 3.1, tld: ".x" },
        { name: `${industry}dao`, available: true, price: 2.5, tld: ".dao" },
      ];
      setSuggestions(mockSuggestions);
      setLoading(false);
    }, 1500);
  };

  const handleAddToCart = (domain: string) => {
    toast({
      title: "Added to Cart",
      description: `${domain} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <AIToolsHero page="business" />

      {/* Generator Tool */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hero-card">
            <div className="space-y-6">
              <div>
                <Label htmlFor="industry" className="text-base font-semibold">Industry</Label>
                <Input
                  id="industry"
                  placeholder="e.g., crypto, defi, nft"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="mt-2 h-12 text-lg"
                />
              </div>
              <div>
                <Label htmlFor="tone" className="text-base font-semibold">Brand Tone (Optional)</Label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger className="mt-2 h-12 text-lg">
                    <SelectValue placeholder="Select brand tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="playful">Playful</SelectItem>
                    <SelectItem value="bold">Bold</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                size="lg"
                className="w-full btn-gradient h-14 text-lg"
                onClick={generateNames}
                disabled={!industry || loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Business Names
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Results */}
          {suggestions.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Suggested Business Names</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestions.map((suggestion, index) => (
                  <Card
                    key={index}
                    className={`p-6 hero-card ${suggestion.available ? 'card-hover' : 'opacity-60'}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">
                          {suggestion.name}{suggestion.tld}
                        </h4>
                        {suggestion.available ? (
                          <Badge variant="default" className="mt-2 bg-success">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            Available
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="mt-2">
                            Taken
                          </Badge>
                        )}
                      </div>
                      {suggestion.available && (
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{suggestion.price} ETH</p>
                        </div>
                      )}
                    </div>
                    {suggestion.available && (
                      <Button
                        className="w-full btn-gradient"
                        onClick={() => handleAddToCart(`${suggestion.name}${suggestion.tld}`)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AIBusinessNameGenerator;
