import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, Shield, ExternalLink } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const DomainDetail = () => {
  const navigate = useNavigate();
  const { domain } = useParams();

  // Mock data - replace with actual data fetching
  const domainData = {
    domain: domain || "crypto.nft",
    price: 5.2,
    verified: true,
    custody: "escrow",
    seller: "0x742d...35Bd",
    listedDate: "2024-01-15",
    description: "Premium Web3 domain perfect for crypto projects and NFT marketplaces.",
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Domain Info */}
          <div>
            <div className="glass-card rounded-xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold gradient-text">{domainData.domain}</h1>
                {domainData.verified && (
                  <CheckCircle2 className="h-8 w-8 text-success" />
                )}
              </div>
              
              <p className="text-muted-foreground mb-6">{domainData.description}</p>
              
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-muted-foreground">Seller</span>
                  <span className="font-medium">{domainData.seller}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-muted-foreground">Listed Date</span>
                  <span className="font-medium">{domainData.listedDate}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/50">
                  <span className="text-muted-foreground">Custody Model</span>
                  <Badge variant="secondary" className="capitalize">
                    {domainData.custody}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Verified Ownership</h3>
                  <p className="text-sm text-muted-foreground">
                    This domain's ownership has been verified on the blockchain. 
                    Automatic transfer upon payment completion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase */}
          <div>
            <div className="glass-card rounded-xl p-8 sticky top-24">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Current Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold gradient-text">{domainData.price}</span>
                  <span className="text-xl text-muted-foreground">ETH</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <Button className="w-full btn-gradient h-12 text-lg" onClick={() => navigate("/checkout")}>
                  Buy Now
                </Button>
                <Button variant="outline" className="w-full h-12">
                  Make Offer
                </Button>
              </div>

              <div className="pt-6 border-t border-border/50 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform Fee (2.5%)</span>
                  <span>{(domainData.price * 0.025).toFixed(3)} ETH</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="gradient-text">{(domainData.price * 1.025).toFixed(3)} ETH</span>
                </div>
              </div>

              <Button variant="ghost" className="w-full mt-6" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View on UD Registry
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainDetail;
