import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
import { TransactionStatus } from "@/components/common/TransactionStatus";
import { NFTCard } from "@/components/nft/NFTCard";
import { ArrowLeft, ExternalLink, Heart, Share2, BarChart3, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const NFTDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [liked, setLiked] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [txStatus, setTxStatus] = useState<"idle" | "pending" | "success" | "failed">("idle");
  const [progress, setProgress] = useState(0);

  // Mock NFT data
  const nft = {
    id: id || "1",
    name: "Cosmic Dreams #142",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200",
    price: 2.5,
    collection: "Cosmic Dreams",
    creator: {
      name: "ArtistDAO",
      address: "0x742d35Cc6634C0532925a3b844Bc9e7595f5b45f3",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
    },
    owner: {
      name: "CryptoCollector",
      address: "0x892a12bcF3d8B0CcDa1234567890abcdef123456"
    },
    description: "A mesmerizing piece from the Cosmic Dreams collection, featuring swirling galaxies and ethereal nebulae. This unique NFT represents the convergence of art and technology in the digital age.",
    royalties: 10,
    chain: "Ethereum",
    contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
    tokenId: "142",
    metadata: {
      attributes: [
        { trait: "Background", value: "Deep Space" },
        { trait: "Colors", value: "Purple & Blue" },
        { trait: "Rarity", value: "Legendary" },
        { trait: "Edition", value: "1 of 1" }
      ]
    }
  };

  const relatedNFTs = [
    { id: "2", name: "Cosmic Dreams #143", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800", price: 2.3, collection: "Cosmic Dreams", creator: "ArtistDAO" },
    { id: "3", name: "Cosmic Dreams #144", image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800", price: 2.7, collection: "Cosmic Dreams", creator: "ArtistDAO" },
    { id: "4", name: "Cosmic Dreams #145", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800", price: 2.4, collection: "Cosmic Dreams", creator: "ArtistDAO" },
  ];

  const handleBuyNow = () => {
    setShowBuyModal(true);
  };

  const handleConfirmPurchase = () => {
    setTxStatus("pending");
    setProgress(0);

    // Simulate transaction progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTxStatus("success");
          toast({
            title: "Purchase Successful!",
            description: `You now own ${nft.name}`,
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "NFT link copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/20 to-background">
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/nft-gallery")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Gallery
        </Button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="aspect-square relative">
                <img 
                  src={nft.image} 
                  alt={nft.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Metadata */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Attributes
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {nft.metadata.attributes.map((attr, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">{attr.trait}</p>
                    <p className="font-semibold text-foreground">{attr.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="secondary" className="mb-2">{nft.collection}</Badge>
                  <h1 className="text-3xl font-bold gradient-text mb-2">{nft.name}</h1>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setLiked(!liked)}
                  >
                    <Heart className={`h-4 w-4 ${liked ? 'fill-primary text-primary' : ''}`} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Creator & Owner */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Creator</p>
                    <div className="flex items-center gap-2">
                      <img src={nft.creator.avatar} alt="creator" className="w-6 h-6 rounded-full" />
                      <span className="font-medium text-sm">{nft.creator.name}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">Royalties</p>
                    <p className="font-medium text-sm">{nft.royalties}%</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{nft.description}</p>

              {/* Price & CTA */}
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Current Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">{nft.price}</span>
                    <span className="text-xl text-muted-foreground">ETH</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Price in ETH</p>
                </div>

                <Button 
                  className="w-full btn-gradient h-12 text-base font-semibold"
                  size="lg"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="lg">
                    Make Offer
                  </Button>
                  <Button variant="outline" size="lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on Chain
                  </Button>
                </div>
              </div>
            </div>

            {/* Contract Details */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Contract Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Blockchain</span>
                  <span className="font-medium">{nft.chain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Token ID</span>
                  <span className="font-medium font-mono">{nft.tokenId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contract</span>
                  <span className="font-medium font-mono text-xs">
                    {nft.contractAddress.slice(0, 6)}...{nft.contractAddress.slice(-4)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related NFTs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">More from this Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedNFTs.map((relatedNFT) => (
              <NFTCard key={relatedNFT.id} {...relatedNFT} />
            ))}
          </div>
        </section>
      </main>

      {/* Buy Modal */}
      <Dialog open={showBuyModal} onOpenChange={setShowBuyModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Purchase</DialogTitle>
            <DialogDescription>
              Connect your wallet to complete the transaction
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {txStatus === "idle" && (
              <>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Item Price</span>
                    <span className="font-medium">{nft.price} ETH</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Platform Fee (2.5%)</span>
                    <span className="font-medium">{(nft.price * 0.025).toFixed(3)} ETH</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Creator Royalty ({nft.royalties}%)</span>
                    <span className="font-medium">{(nft.price * nft.royalties / 100).toFixed(3)} ETH</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{(nft.price * 1.125).toFixed(3)} ETH</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <WalletConnectButton />
                  <Button 
                    className="w-full btn-gradient" 
                    size="lg"
                    onClick={handleConfirmPurchase}
                  >
                    Confirm Purchase
                  </Button>
                </div>
              </>
            )}

            {txStatus === "pending" && (
              <div className="space-y-4">
                <TransactionStatus 
                  status="pending" 
                  message="Processing your transaction..." 
                />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Transaction Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} />
                </div>
              </div>
            )}

            {txStatus === "success" && (
              <div className="space-y-4">
                <TransactionStatus 
                  status="success" 
                  message="NFT successfully purchased!" 
                />
                <Button 
                  className="w-full btn-gradient"
                  onClick={() => navigate("/my-nfts")}
                >
                  View in My Collection
                </Button>
              </div>
            )}

            {txStatus === "failed" && (
              <div className="space-y-4">
                <TransactionStatus 
                  status="failed" 
                  message="Transaction failed. Please try again." 
                />
                <Button 
                  className="w-full"
                  variant="outline"
                  onClick={() => setTxStatus("idle")}
                >
                  Try Again
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NFTDetail;
