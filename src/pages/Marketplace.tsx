import { FilterPanel } from "@/components/marketplace/FilterPanel";
import { SearchBar } from "@/components/marketplace/SearchBar";
import { DomainCard } from "@/components/marketplace/DomainCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Marketplace = () => {
  const domains = [
    { domain: "crypto.nft", price: 5.2, verified: true, custody: "escrow" as const },
    { domain: "defi.wallet", price: 3.8, verified: true, custody: "self-custody" as const },
    { domain: "nft.dao", price: 2.5, verified: false, custody: "escrow" as const },
    { domain: "meta.x", price: 8.9, verified: true, custody: "escrow" as const },
    { domain: "web3.blockchain", price: 4.2, verified: true, custody: "self-custody" as const },
    { domain: "dao.crypto", price: 6.7, verified: true, custody: "escrow" as const },
    { domain: "token.eth", price: 12.5, verified: true, custody: "escrow" as const },
    { domain: "blockchain.xyz", price: 7.3, verified: true, custody: "self-custody" as const },
    { domain: "smart.contract", price: 9.1, verified: true, custody: "escrow" as const },
    { domain: "dapp.io", price: 6.4, verified: false, custody: "self-custody" as const },
    { domain: "crypto.exchange", price: 15.8, verified: true, custody: "escrow" as const },
    { domain: "nft.market", price: 4.9, verified: true, custody: "escrow" as const },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text font-inter">
            Web3 Domain Marketplace
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover, buy, and sell premium Web3 domains with secure escrow protection and instant transfers.
          </p>
          <SearchBar />
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center hero-card">
            <div className="text-3xl font-bold text-primary mb-2">2,400+</div>
            <div className="text-sm text-muted-foreground">Domains Listed</div>
          </Card>
          <Card className="p-6 text-center hero-card">
            <div className="text-3xl font-bold text-primary mb-2">2.5M+ ETH</div>
            <div className="text-sm text-muted-foreground">Total Volume</div>
          </Card>
          <Card className="p-6 text-center hero-card">
            <div className="text-3xl font-bold text-primary mb-2">1,800+</div>
            <div className="text-sm text-muted-foreground">Happy Buyers</div>
          </Card>
          <Card className="p-6 text-center hero-card">
            <div className="text-3xl font-bold text-primary mb-2">&lt;2min</div>
            <div className="text-sm text-muted-foreground">Avg. Transfer Time</div>
          </Card>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto px-4 py-8">
        <Card className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-2 border-primary/30 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 animate-scale-in">
                <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-1">Special Marketplace Deal!</h3>
                <p className="text-muted-foreground">Get verified status free with any domain purchase over 5 ETH</p>
              </div>
            </div>
            <Button size="lg" className="btn-gradient hover-scale shadow-lg whitespace-nowrap">
              Learn More
            </Button>
          </div>
        </Card>
      </section>

      {/* Marketplace Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          <div className="lg:col-span-1">
            <FilterPanel />
          </div>

          {/* Domain Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Available Domains</h2>
              <p className="text-muted-foreground">{domains.length} domains</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {domains.map((domain) => (
                <DomainCard key={domain.domain} {...domain} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
