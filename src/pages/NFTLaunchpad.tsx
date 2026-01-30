import { useState } from "react";
import { NFTCard } from "@/components/nft/NFTCard";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Sparkles, Clock, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Import NFT images
import nft1 from "@/assets/nft-1.jpg";
import nft2 from "@/assets/nft-2.jpg";
import nft3 from "@/assets/nft-3.jpg";
import nft4 from "@/assets/nft-4.jpg";
import nft5 from "@/assets/nft-5.jpg";
import nft6 from "@/assets/nft-6.jpg";
import nft7 from "@/assets/nft-7.jpg";
import nft8 from "@/assets/nft-8.jpg";
import nft9 from "@/assets/nft-9.jpg";
import nft10 from "@/assets/nft-10.jpg";
import nft11 from "@/assets/nft-11.jpg";
import nft12 from "@/assets/nft-12.jpg";
import nft13 from "@/assets/nft-13.jpg";
import nft14 from "@/assets/nft-14.jpg";
import nft15 from "@/assets/nft-15.jpg";

// Mock NFT data for trending 2025 projects
const trendingNFTs = [
  { id: "1", name: "CryptoVerse Genesis #142", image: nft1, price: 2.5, collection: "CryptoVerse", creator: "0x742d...45f3" },
  { id: "2", name: "MetaPunks Elite #7890", image: nft2, price: 15.8, collection: "MetaPunks", creator: "0x892a...12bc" },
  { id: "3", name: "Quantum Dreams #456", image: nft3, price: 4.2, collection: "Quantum Dreams", creator: "0x123b...89de" },
  { id: "4", name: "Neon Warriors #234", image: nft4, price: 1.2, collection: "Neon Warriors", creator: "0x456c...34fe" },
  { id: "5", name: "Digital Realm #89", image: nft5, price: 3.5, collection: "Digital Realm", creator: "0x789d...56ab" },
  { id: "6", name: "Cyber Chronicles #567", image: nft6, price: 0.8, collection: "Cyber Chronicles", creator: "0x234e...78cd" },
  { id: "7", name: "Astro Legends #123", image: nft7, price: 5.6, collection: "Astro Legends", creator: "0x567f...90ef" },
  { id: "8", name: "Pixel Universe #999", image: nft8, price: 7.2, collection: "Pixel Universe", creator: "0x890g...12gh" },
  { id: "9", name: "NFT Odyssey #442", image: nft9, price: 2.1, collection: "NFT Odyssey", creator: "0x123h...45ij" },
  { id: "10", name: "Blockchain Beasts #321", image: nft10, price: 4.8, collection: "Blockchain Beasts", creator: "0x456i...78jk" },
  { id: "11", name: "Future Apes #888", image: nft11, price: 9.3, collection: "Future Apes", creator: "0x789j...01kl" },
  { id: "12", name: "Cosmic Legends #555", image: nft12, price: 6.7, collection: "Cosmic Legends", creator: "0x012k...34lm" },
  { id: "13", name: "Meta Kingdoms #777", image: nft13, price: 3.9, collection: "Meta Kingdoms", creator: "0x345l...67mn" },
  { id: "14", name: "Quantum Shift #666", image: nft14, price: 8.1, collection: "Quantum Shift", creator: "0x678m...90no" },
  { id: "15", name: "Digital Phoenix #444", image: nft15, price: 5.4, collection: "Digital Phoenix", creator: "0x901n...23op" },
];

const NFTLaunchpad = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("trending");

  const filters = [
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "latest", label: "Latest", icon: Sparkles },
    { id: "upcoming", label: "Upcoming", icon: Clock },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-primary/5 to-background">
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        {/* Hero Section */}
        <section className="mb-12 text-center relative overflow-hidden">
          {/* Animated particles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-[float_4s_ease-in-out_infinite]" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-[float_5s_ease-in-out_infinite_1s]" />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-[float_6s_ease-in-out_infinite_2s]" />
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-fade-in">
              Fuel the Future of NFT Creators
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              Explore the latest and trending NFT projects of 2025
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search NFT projects, collections, or creators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 glass-card text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 glass-card p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Filters</h3>
              </div>

              <div className="space-y-3">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    className="w-full justify-start gap-2"
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    <filter.icon className="w-4 h-4" />
                    {filter.label}
                  </Button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Price Range</h4>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                    0 - 1 ETH
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                    1 - 5 ETH
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                    5 - 10 ETH
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                    10+ ETH
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* NFT Gallery */}
          <section className="lg:col-span-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Latest & Trending NFTs 2025
                </h2>
                <p className="text-muted-foreground">
                  Discover {trendingNFTs.length} exclusive projects
                </p>
              </div>
              <Badge variant="secondary" className="px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingNFTs.map((nft) => (
                <NFTCard key={nft.id} {...nft} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button size="lg" className="hover-scale px-8">
                Load More Projects
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default NFTLaunchpad;
