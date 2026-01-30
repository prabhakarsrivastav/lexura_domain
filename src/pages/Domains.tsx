import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiltersSidebar, type FiltersState } from "@/components/marketplace/FiltersSidebar";
import { DomainTableSection } from "@/components/marketplace/DomainTableSection";
import { Web3AnimatedSearch } from "@/components/marketplace/Web3AnimatedSearch";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Loader2, Globe, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ITEMS_PER_PAGE = 12;

// Mock Web3 domains from Unstoppable
const web3Domains = [
  { domain: "crypto.blockchain", price: 15.2, verified: true, custody: "self-custody" as const },
  { domain: "defi.crypto", price: 12.8, verified: true, custody: "self-custody" as const },
  { domain: "nft.wallet", price: 8.5, verified: true, custody: "self-custody" as const },
  { domain: "metaverse.x", price: 18.9, verified: true, custody: "self-custody" as const },
  { domain: "bitcoin.crypto", price: 25.2, verified: true, custody: "self-custody" as const },
  { domain: "ethereum.wallet", price: 22.7, verified: true, custody: "self-custody" as const },
  { domain: "dao.nft", price: 14.3, verified: true, custody: "self-custody" as const },
  { domain: "web3.blockchain", price: 19.6, verified: true, custody: "self-custody" as const },
  { domain: "token.crypto", price: 11.4, verified: true, custody: "self-custody" as const },
  { domain: "smart.wallet", price: 16.8, verified: true, custody: "self-custody" as const },
  { domain: "dapp.x", price: 13.2, verified: true, custody: "self-custody" as const },
  { domain: "blockchain.nft", price: 17.5, verified: true, custody: "self-custody" as const },
  { domain: "mint.crypto", price: 9.8, verified: true, custody: "self-custody" as const },
  { domain: "staking.wallet", price: 12.1, verified: true, custody: "self-custody" as const },
  { domain: "yield.blockchain", price: 14.9, verified: true, custody: "self-custody" as const },
];

// Mock Web2 domains
const web2Domains = [
  { domain: "cryptotrader.com", price: 5.2, verified: true, custody: "escrow" as const },
  { domain: "nftmarket.net", price: 3.8, verified: true, custody: "escrow" as const },
  { domain: "blockchain-tech.io", price: 7.5, verified: false, custody: "escrow" as const },
  { domain: "web3-solutions.com", price: 4.9, verified: true, custody: "escrow" as const },
  { domain: "decentralized.app", price: 6.2, verified: true, custody: "escrow" as const },
  { domain: "smartcontracts.dev", price: 8.7, verified: true, custody: "escrow" as const },
  { domain: "tokenomics.io", price: 5.4, verified: false, custody: "escrow" as const },
  { domain: "metaverse-hub.com", price: 9.1, verified: true, custody: "escrow" as const },
  { domain: "dappstore.net", price: 6.8, verified: true, custody: "escrow" as const },
  { domain: "cryptowallet.app", price: 7.3, verified: true, custody: "escrow" as const },
  { domain: "nftgallery.io", price: 4.6, verified: false, custody: "escrow" as const },
  { domain: "defi-platform.com", price: 8.2, verified: true, custody: "escrow" as const },
];

const Domains = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("web3");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [web3DomainsData, setWeb3DomainsData] = useState(web3Domains);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState<FiltersState>({
    selectedTLDs: [],
    priceRange: [0, 100],
    verifiedOnly: false,
    category: "All",
    search: "",
  });
  const [sortBy, setSortBy] = useState<"relevance" | "price-asc" | "price-desc">("relevance");
  
  const searchQuery = searchParams.get("search") || "";

  // Simulate API fetch for Web3 domains (would integrate with Unstoppable Domains API)
  useEffect(() => {
    if (activeTab === "web3") {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        // In production, this would be: fetchUnstoppableDomains(searchQuery)
        setWeb3DomainsData(web3Domains);
        setIsLoading(false);
        
        if (searchQuery) {
          toast({
            title: "Search Complete",
            description: `Found ${web3Domains.length} Web3 domains matching "${searchQuery}"`,
          });
        }
      }, 800);
    }
  }, [activeTab, searchQuery, toast]);

  // Keep sidebar search in sync with URL query (if present)
  useEffect(() => {
    setFilters((prev) => ({ ...prev, search: searchQuery }));
  }, [searchQuery]);

  const currentDomains = activeTab === "web3" ? web3DomainsData : web2Domains;

  // Derive available TLDs dynamically from current dataset
  const availableTLDs = Array.from(
    new Set(
      currentDomains
        .map((d) => d.domain.split(".").pop())
        .filter(Boolean)
        .map((t) => `.${String(t).toLowerCase()}`)
    )
  ).sort();

  // Apply filters
  const filteredDomains = currentDomains.filter((d) => {
    const tld = `.${d.domain.split(".").pop()?.toLowerCase()}`;
    const tldOk = filters.selectedTLDs.length === 0 || filters.selectedTLDs.includes(tld);
    const priceOk = d.price >= filters.priceRange[0] && d.price <= filters.priceRange[1];
    const verifiedOk = !filters.verifiedOnly || d.verified;
    const searchOk = !filters.search || d.domain.toLowerCase().includes(filters.search.toLowerCase());
    // Category logic (simplified mapping)
    const categoryOk = (() => {
      switch (filters.category) {
        case "All": return true;
        case "New": return d.price < 10; // placeholder heuristic
        case ".com": return d.domain.endsWith(".com");
        case "DNS": return ![".crypto",".wallet",".x",".nft",".blockchain",".dao"].some(ext => d.domain.endsWith(ext));
        case "Web3": return [".crypto",".wallet",".x",".nft",".blockchain",".dao"].some(ext => d.domain.endsWith(ext));
        case "Top-rated": return d.verified; // placeholder
        default: return true;
      }
    })();
    return tldOk && priceOk && verifiedOk && searchOk && categoryOk;
  });

  // Sorting
  const sortedDomains = [...filteredDomains].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0; // relevance (default ordering)
  });

  const totalPages = Math.ceil(sortedDomains.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedDomains = sortedDomains.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 ">
        {/* <div className="text-center mb-10 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="h-10 w-10 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Domain Collections
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our complete collection of Web3 blockchain domains and traditional Web2 domains
          </p>
          
          {searchQuery && (
            <Badge variant="secondary" className="text-base px-4 py-2">
              Searching for: {searchQuery}
            </Badge>
          )}
        </div> */}
{/* 
        <div className="mb-8">
          <Web3AnimatedSearch />
        </div> */}

        {/* Stats Bar */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <Card className="p-4 text-center hero-card">
            <div className="text-2xl font-bold text-primary mb-1">{web3Domains.length}</div>
            <div className="text-xs text-muted-foreground">Web3 Domains</div>
          </Card>
          <Card className="p-4 text-center hero-card">
            <div className="text-2xl font-bold text-accent mb-1">{web2Domains.length}</div>
            <div className="text-xs text-muted-foreground">Web2 Domains</div>
          </Card>
          <Card className="p-4 text-center hero-card">
            <div className="text-2xl font-bold text-success mb-1">Real-time</div>
            <div className="text-xs text-muted-foreground">Availability</div>
          </Card>
          <Card className="p-4 text-center hero-card">
            <div className="text-2xl font-bold text-warning mb-1">Instant</div>
            <div className="text-xs text-muted-foreground">Transfer</div>
          </Card>
        </div> */}
      </section>

      {/* Tabs Section with Sidebar Layout */}
      <section className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); setCurrentPage(1); }} className="w-full">
          <div className="flex justify-center mb-8">
            {/* <TabsList className="grid w-full max-w-md grid-cols-2 h-12 bg-muted/50 p-1">
              <TabsTrigger value="web3" className="text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Sparkles className="mr-2 h-4 w-4" />
                WEB3
              </TabsTrigger>
              <TabsTrigger value="originals" className="text-base font-semibold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                <Globe className="mr-2 h-4 w-4" />
                ORIGINALS
              </TabsTrigger>
            </TabsList> */}
          </div>

          <TabsContent value="web3" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-3">
                {/* Mobile toggle */}
                <div className="lg:hidden mb-2">
                  <Button variant="outline" onClick={() => setShowMobileFilters((s) => !s)}>
                    {showMobileFilters ? "Hide Filters" : "Show Filters"}
                  </Button>
                </div>
                <div className={`${showMobileFilters ? "block" : "hidden"} lg:block`}>
                  <FiltersSidebar
                    availableTLDs={availableTLDs}
                    value={filters}
                    onChange={(v) => { setFilters(v); setCurrentPage(1); }}
                    onReset={() => { setFilters({ selectedTLDs: [], priceRange: [0, 100], verifiedOnly: false }); setCurrentPage(1); }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-9">
                {/* Table Sections */}
                {isLoading ? (
                  <div className="flex items-center justify-center py-32">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                  </div>
                ) : (
                  <>
                    {/* Conditional Search Results section */}
                    {(filters.search || filters.selectedTLDs.length || filters.verifiedOnly || filters.category !== "All") && (
                      <DomainTableSection
                        title="Search Result(s):"
                        items={displayedDomains}
                        emptyMessage="No matching domains. Adjust filters."
                      />
                    )}
                    {/* Static sections (show regardless; in real impl might have distinct datasets) */}
                    <DomainTableSection
                      title="Suggested Domains:"
                      items={sortedDomains.slice(0, 5)}
                      emptyMessage="No suggestions available."
                    />
                    <DomainTableSection
                      title="Top-rated Domains:"
                      items={sortedDomains.filter(d=>d.verified).slice(0,5)}
                      emptyMessage="No top-rated domains yet."
                    />
                    <DomainTableSection
                      title="New & Innovative Domains:"
                      items={sortedDomains.filter(d=>d.price < 15).slice(0,5)}
                      emptyMessage="No innovative domains yet."
                    />
                    <DomainTableSection
                      title="All Domains: Refine"
                      items={displayedDomains}
                      emptyMessage="No domains found."
                    />
                    {/* Pagination for the last block only */}
                    {totalPages > 1 && (
                      <div className="mt-6">
                        <Pagination>
                          <PaginationContent>
                            <PaginationItem>
                              <PaginationPrevious
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                              />
                            </PaginationItem>
                            {[...Array(totalPages)].map((_, i) => (
                              <PaginationItem key={i}>
                                <PaginationLink
                                  onClick={() => setCurrentPage(i + 1)}
                                  isActive={currentPage === i + 1}
                                  className="cursor-pointer"
                                >
                                  {i + 1}
                                </PaginationLink>
                              </PaginationItem>
                            ))}
                            <PaginationItem>
                              <PaginationNext
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                              />
                            </PaginationItem>
                          </PaginationContent>
                        </Pagination>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="originals" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-3">
                {/* Mobile toggle */}
                <div className="lg:hidden mb-2">
                  <Button variant="outline" onClick={() => setShowMobileFilters((s) => !s)}>
                    {showMobileFilters ? "Hide Filters" : "Show Filters"}
                  </Button>
                </div>
                <div className={`${showMobileFilters ? "block" : "hidden"} lg:block`}>
                  <FiltersSidebar
                    availableTLDs={availableTLDs}
                    value={filters}
                    onChange={(v) => { setFilters(v); setCurrentPage(1); }}
                    onReset={() => { setFilters({ selectedTLDs: [], priceRange: [0, 100], verifiedOnly: false }); setCurrentPage(1); }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-9">
                {isLoading ? (
                  <div className="flex items-center justify-center py-32">
                    <Loader2 className="h-10 w-10 animate-spin text-accent" />
                  </div>
                ) : (
                  <>
                    {(filters.search || filters.selectedTLDs.length || filters.verifiedOnly || filters.category !== "All") && (
                      <DomainTableSection
                        title="Search Result(s):"
                        items={displayedDomains}
                        emptyMessage="No matching domains. Adjust filters."
                      />
                    )}
                    <DomainTableSection
                      title="Suggested Domains:"
                      items={sortedDomains.slice(0, 5)}
                      emptyMessage="No suggestions available."
                    />
                    <DomainTableSection
                      title="Top-rated Domains:"
                      items={sortedDomains.filter(d=>d.verified).slice(0,5)}
                      emptyMessage="No top-rated domains yet."
                    />
                    <DomainTableSection
                      title="New & Innovative Domains:"
                      items={sortedDomains.filter(d=>d.price < 15).slice(0,5)}
                      emptyMessage="No innovative domains yet."
                    />
                    <DomainTableSection
                      title="All Domains: Refine"
                      items={displayedDomains}
                      emptyMessage="No domains found."
                    />
                    {totalPages > 1 && (
                      <div className="mt-6">
                        <Pagination>
                          <PaginationContent>
                            <PaginationItem>
                              <PaginationPrevious
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                              />
                            </PaginationItem>
                            {[...Array(totalPages)].map((_, i) => (
                              <PaginationItem key={i}>
                                <PaginationLink
                                  onClick={() => setCurrentPage(i + 1)}
                                  isActive={currentPage === i + 1}
                                  className="cursor-pointer"
                                >
                                  {i + 1}
                                </PaginationLink>
                              </PaginationItem>
                            ))}
                            <PaginationItem>
                              <PaginationNext
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                              />
                            </PaginationItem>
                          </PaginationContent>
                        </Pagination>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Domains;
