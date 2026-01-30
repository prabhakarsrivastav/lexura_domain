import { useState } from "react";
import { AIToolsHero } from "@/components/hero/AIToolsHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2, CheckCircle2, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AINameGenerator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [keywords, setKeywords] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Array<{
    name: string;
    available: boolean;
    price: number;
    tld: string;
  }>>([]);

  const generateDomains = () => {
    setLoading(true);
    // Mock AI generation
    setTimeout(() => {
      const mockSuggestions = [
        { name: `${keywords}hub`, available: true, price: 2.5, tld: ".crypto" },
        { name: `${keywords}zone`, available: true, price: 1.8, tld: ".nft" },
        { name: `${keywords}pro`, available: false, price: 0, tld: ".wallet" },
        { name: `get${keywords}`, available: true, price: 3.2, tld: ".blockchain" },
        { name: `${keywords}x`, available: true, price: 4.5, tld: ".x" },
        { name: `${keywords}dao`, available: true, price: 2.1, tld: ".dao" },
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
      <AIToolsHero />

      {/* Generator Tool */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hero-card">
            <div className="space-y-6">
              <div>
                <Label htmlFor="keywords" className="text-base font-semibold">Keywords</Label>
                <Input
                  id="keywords"
                  placeholder="e.g., crypto, defi, nft"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="mt-2 h-12 text-lg"
                />
              </div>
              <div>
                <Label htmlFor="category" className="text-base font-semibold">Category (Optional)</Label>
                <Input
                  id="category"
                  placeholder="e.g., finance, gaming, metaverse"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-2 h-12 text-lg"
                />
              </div>
              <Button
                size="lg"
                className="w-full btn-gradient h-14 text-lg"
                onClick={generateDomains}
                disabled={!keywords || loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Domain Names
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Results */}
          {suggestions.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Suggested Domains</h3>
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

export default AINameGenerator;
