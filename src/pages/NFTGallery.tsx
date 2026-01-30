import { useState } from "react";
import { NFTCard } from "@/components/nft/NFTCard";
import { NFTFilters, FilterState } from "@/components/nft/NFTFilters";
import { NFTCarousel } from "@/components/nft/NFTCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data
const featuredNFTs = [
  { id: "1", name: "Cosmic Dreams #142", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800", price: 2.5, collection: "Cosmic Dreams", isFeatured: true },
  { id: "2", name: "Digital Punk #7890", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800", price: 15.8, collection: "Digital Punks", isFeatured: true },
  { id: "3", name: "Abstract Mind #456", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800", price: 4.2, collection: "Abstract Minds", isFeatured: true },
];

const mockNFTs = [
  { id: "4", name: "Neon City #234", image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800", price: 1.2, collection: "Neon Cities", creator: "0x742d...45f3" },
  { id: "5", name: "Quantum Art #89", image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800", price: 3.5, collection: "Quantum Arts", creator: "0x892a...12bc" },
  { id: "6", name: "Pixel Dreams #567", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800", price: 0.8, collection: "Pixel Dreams", creator: "0x123b...89de", isVideo: true },
  { id: "7", name: "Crystal Vision #123", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800", price: 5.6, collection: "Crystal Visions", creator: "0x456c...34fe" },
  { id: "8", name: "Meta World #999", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800", price: 7.2, collection: "Meta Worlds", creator: "0x789d...56ab" },
  { id: "9", name: "Cyber Ape #442", image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800", price: 2.1, collection: "Cyber Apes", creator: "0x234e...78cd" },
];

const NFTGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 100],
    collection: "all",
    sortBy: "popular"
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/20 to-background">
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-4 animate-fade-in">
            <Badge variant="secondary" className="px-3 py-1.5">
              <TrendingUp className="w-3 h-3 mr-1.5" />
              Trending Collections
            </Badge>
            <Badge variant="secondary" className="px-3 py-1.5">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Verified Creators
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text animate-fade-in">
            Discover Exclusive NFTs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Buy, sell, and trade unique digital assets on the blockchain
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search NFTs, collections, or creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 glass-card"
              />
            </div>
          </div>
        </section>

        {/* Featured NFTs Carousel */}
        <section className="mb-12">
          <NFTCarousel nfts={featuredNFTs} />
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <NFTFilters onFilterChange={setFilters} />
            </div>
          </aside>

          {/* NFT Grid */}
          <section className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                All NFTs ({mockNFTs.length})
              </h2>
              <Button variant="outline" size="sm">
                View Grid
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockNFTs.map((nft) => (
                <NFTCard key={nft.id} {...nft} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" className="hover-scale">
                Load More NFTs
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default NFTGallery;
