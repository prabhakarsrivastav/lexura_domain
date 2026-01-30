import { useState } from "react";
import { NFTCard } from "@/components/nft/NFTCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
import { Package, TrendingUp, Send, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyNFTs = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false); // Mock state

  // Mock owned NFTs
  const ownedNFTs = [
    { id: "1", name: "Cosmic Dreams #142", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800", price: 2.5, collection: "Cosmic Dreams", creator: "ArtistDAO" },
    { id: "2", name: "Digital Punk #7890", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800", price: 15.8, collection: "Digital Punks", creator: "CryptoPunks" },
    { id: "3", name: "Abstract Mind #456", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800", price: 4.2, collection: "Abstract Minds", creator: "MindDAO" },
  ];

  const listedNFTs = [
    { id: "4", name: "Neon City #234", image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800", price: 1.2, collection: "Neon Cities", creator: "0x742d...45f3" },
  ];

  if (!isConnected) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/20 to-background">
        <main className="flex-1 container mx-auto px-4 py-16 mt-16">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="glass-card rounded-2xl p-12">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold gradient-text mb-4">
                Connect Your Wallet
              </h1>
              <p className="text-muted-foreground mb-8">
                Connect your wallet to view and manage your NFT collection
              </p>
              <WalletConnectButton />
              <p className="text-sm text-muted-foreground mt-6">
                Don't have a wallet? <a href="#" className="text-primary hover:underline">Learn more</a>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/20 to-background">
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">My Collection</h1>
              <p className="text-muted-foreground">Manage your NFTs and listings</p>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => navigate("/mint-nft")} className="btn-gradient">
                <Package className="mr-2 h-4 w-4" />
                Mint NFT
              </Button>
              <WalletConnectButton />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total NFTs</p>
                  <p className="text-2xl font-bold">{ownedNFTs.length}</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Listed</p>
                  <p className="text-2xl font-bold">{listedNFTs.length}</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Send className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold">
                    {(ownedNFTs.reduce((sum, nft) => sum + nft.price, 0)).toFixed(1)} ETH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="owned" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="owned">Owned ({ownedNFTs.length})</TabsTrigger>
            <TabsTrigger value="listed">Listed ({listedNFTs.length})</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="owned">
            {ownedNFTs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {ownedNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No NFTs Yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start building your collection by browsing the marketplace
                </p>
                <Button onClick={() => navigate("/nft-gallery")} className="btn-gradient">
                  Browse NFTs
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="listed">
            {listedNFTs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {listedNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Listed NFTs</h3>
                <p className="text-muted-foreground">
                  List your NFTs to start selling them
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="activity">
            <div className="glass-card rounded-xl p-8 text-center">
              <p className="text-muted-foreground">No activity yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MyNFTs;
