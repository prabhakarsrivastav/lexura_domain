import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const MintNFT = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState<"upload" | "minting" | "success">("upload");
  const [progress, setProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    file: null as File | null,
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, file: e.dataTransfer.files[0] });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleMint = () => {
    if (!formData.name || !formData.price || !formData.file) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setStep("minting");
    setProgress(0);

    // Simulate minting progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStep("success");
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 text-foreground tracking-tight">
            Create your NFT.
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Three simple steps. That's all it takes.
          </p>
        </div>

        {step === "upload" && (
          <div className="space-y-8">
            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-muted" />
              <div className="w-2 h-2 rounded-full bg-muted" />
            </div>

            {/* Upload Section */}
            <Card className="p-8 border-2">
              <div className="space-y-8">
                {/* File Upload */}
                <div>
                  <Label className="text-lg font-medium mb-4 block">Upload your artwork</Label>
                  <div
                    className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                      dragActive 
                        ? "border-primary bg-primary/5 scale-[1.02]" 
                        : "border-border hover:border-primary/50"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    {formData.file ? (
                      <div className="space-y-4">
                        {formData.file.type.startsWith("image/") && (
                          <img
                            src={URL.createObjectURL(formData.file)}
                            alt="Preview"
                            className="max-h-80 mx-auto rounded-xl shadow-lg"
                          />
                        )}
                        <div>
                          <p className="font-medium text-lg mb-2">{formData.file.name}</p>
                          <Button
                            variant="outline"
                            onClick={() => setFormData({ ...formData, file: null })}
                          >
                            Choose different file
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                          <Upload className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-lg mb-2">
                            Drop your file here
                          </p>
                          <p className="text-muted-foreground mb-4">
                            JPG, PNG, GIF, or MP4 • Max 100MB
                          </p>
                        </div>
                        <input
                          type="file"
                          id="file-upload"
                          className="hidden"
                          accept="image/*,video/*"
                          onChange={handleFileChange}
                        />
                        <Button
                          size="lg"
                          onClick={() => document.getElementById("file-upload")?.click()}
                        >
                          Choose file
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <Label htmlFor="name" className="text-lg font-medium mb-3 block">
                    Name your NFT
                  </Label>
                  <Input
                    id="name"
                    placeholder="Cosmic Dreams"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 text-lg"
                  />
                </div>

                {/* Price Input */}
                <div>
                  <Label htmlFor="price" className="text-lg font-medium mb-3 block">
                    Set your price
                  </Label>
                  <div className="relative">
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="h-14 text-lg pr-16"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                      ETH
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  size="lg"
                  className="w-full h-14 text-lg font-medium"
                  onClick={handleMint}
                  disabled={!formData.file || !formData.name || !formData.price}
                >
                  Create NFT
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <Card className="p-4 text-center bg-muted/30">
                <div className="text-2xl font-bold text-primary mb-1">2.5%</div>
                <div className="text-sm text-muted-foreground">Platform Fee</div>
              </Card>
              <Card className="p-4 text-center bg-muted/30">
                <div className="text-2xl font-bold text-success mb-1">Instant</div>
                <div className="text-sm text-muted-foreground">Minting</div>
              </Card>
              <Card className="p-4 text-center bg-muted/30">
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">You Own It</div>
              </Card>
            </div>
          </div>
        )}

        {step === "minting" && (
          <Card className="p-12 text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-10 w-10 text-primary animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Creating your NFT...</h2>
                <p className="text-muted-foreground">
                  This will only take a moment
                </p>
              </div>
              <div className="max-w-md mx-auto">
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-muted-foreground mt-3">{progress}% complete</p>
              </div>
            </div>
          </Card>
        )}

        {step === "success" && (
          <div className="text-center space-y-8">
            <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-12 w-12 text-success" />
            </div>
            <div>
              <h2 className="text-4xl font-semibold mb-4">You're all set.</h2>
              <p className="text-xl text-muted-foreground font-light mb-2">
                Your NFT is now live on the blockchain
              </p>
              <p className="text-lg font-semibold text-foreground">{formData.name}</p>
            </div>
            
            <Card className="p-8 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-semibold text-lg">{formData.price} ETH</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-success font-medium">Listed</span>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-12"
                onClick={() => navigate("/my-nfts")}
              >
                View my NFTs
              </Button>
              <Button
                size="lg"
                className="flex-1 h-12"
                onClick={() => navigate("/nft-gallery")}
              >
                Browse marketplace
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MintNFT;
