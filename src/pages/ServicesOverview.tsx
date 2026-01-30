import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Blocks, Coins, ArrowLeftRight, Wallet, Building2, TrendingUp, Gamepad2, Brain, Shield, Factory, Image, Landmark, Megaphone, Users, Headphones, GraduationCap, Scale, FileText } from "lucide-react";

const ServicesOverview = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    {
      title: "Core Blockchain Infrastructure",
      icon: Blocks,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "Layer-1 / Layer-2 Blockchain", description: "Custom EVM / Cosmos / Substrate chain, full validator setup, bridge & explorer", price: "$60K – $150K", timeline: "12-20 weeks" },
        { name: "Layer-0 Interoperability Chain", description: "IBC / Rollup hub with multi-chain bridge", price: "$80K – $180K", timeline: "16-24 weeks" },
        { name: "Sidechain / Appchain Development", description: "Business-specific chain with API gateway", price: "$25K – $60K", timeline: "10 weeks" },
        { name: "Blockchain Node Infra", description: "RPC, indexing, archival node clusters", price: "$5K – $15K", timeline: "2-4 weeks" },
        { name: "Blockchain Explorer", description: "Custom BlockScout-style explorer with analytics", price: "$3K – $8K", timeline: "2 weeks" },
        { name: "Cross-Chain Bridge", description: "Secure bridge for EVM ↔ non-EVM", price: "$25K – $60K", timeline: "8-10 weeks" }
      ]
    },
    {
      title: "Token Engineering & On-Chain Assets",
      icon: Coins,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "Fungible Token (ERC-20 / BEP-20 / TRC-20)", description: "Mint, burn, freeze, upgrade logic", price: "$1K – $3.5K" },
        { name: "Security / RWA Token", description: "Asset-backed token with compliance (whitelist, AML, legal hooks)", price: "$5K – $10K" },
        { name: "NFT Contract (ERC-721 / 1155)", description: "Metadata hosting, royalties, mint portal", price: "$2.5K – $6K" },
        { name: "SoulBound Token (SBT)", description: "Non-transferable ID / KYC / proof token", price: "$3K – $5K" },
        { name: "Governance / DAO Token", description: "On-chain voting rights & proposal contracts", price: "$3K – $6K" },
        { name: "Vesting / Airdrop System", description: "Linear & cliff release with claim dApp", price: "$2K – $5K" }
      ]
    },
    {
      title: "Exchange & Trading Solutions",
      icon: ArrowLeftRight,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "Centralized Exchange (CEX)", description: "Spot, margin, futures, admin CMS, wallets", price: "$50K – $90K" },
        { name: "Decentralized Exchange (DEX / AMM)", description: "Liquidity pools, staking, LP farming", price: "$25K – $55K" },
        { name: "Hybrid Exchange", description: "Unified CEX + DEX liquidity engine", price: "$70K – $120K" },
        { name: "Aggregator / Routing Platform", description: "Multi-DEX smart routing", price: "$15K – $35K" },
        { name: "P2P Trading Platform", description: "Escrow, arbitration, dispute engine", price: "$20K – $40K" },
        { name: "OTC Desk / Broker Portal", description: "Manual or algorithmic trade desk", price: "$15K – $30K" }
      ]
    },
    {
      title: "Payments, Custody & On/Off-Ramp",
      icon: Wallet,
      color: "from-orange-500 to-red-500",
      services: [
        { name: "Custody Wallet (Fireblocks / Liminal)", description: "MPC wallets, policy engine, gas tank", price: "$20K – $40K" },
        { name: "Crypto Payment Gateway", description: "ISO-20022 compliant checkout + invoice", price: "$15K – $35K" },
        { name: "Crypto Card Platform (Visa/Mastercard)", description: "Virtual & physical cards via partner banks", price: "$40K – $80K" },
        { name: "On/Off Ramp Integration", description: "PayOnRamp / Transak / Moonpay SDK", price: "$8K – $25K" },
        { name: "Treasury & Multi-Sig System", description: "Enterprise cold + hot wallet segregation", price: "$5K – $10K" },
        { name: "POS & QR Pay Merchant System", description: "Tap-to-pay for SMEs, wallet link", price: "$10K – $25K" }
      ]
    },
    {
      title: "RWA (Real-World Asset) Tokenization",
      icon: Building2,
      color: "from-yellow-500 to-orange-500",
      services: [
        { name: "Real Estate Tokenization", description: "Fractional property ownership & yield", price: "$25K – $75K" },
        { name: "Carbon Credit Platform", description: "Credit issuance, verification & trading", price: "$15K – $40K" },
        { name: "Commodities (Gold/Silver)", description: "Custody-backed tokens + redemption flow", price: "$20K – $50K" },
        { name: "Invoice / Bond Tokenization", description: "SME invoice financing via DeFi", price: "$15K – $40K" },
        { name: "Art & Collectibles", description: "NFT + RWA hybrid ownership", price: "$10K – $25K" },
        { name: "Stock / Equity Wrappers", description: "Tokenized shares (regulated zones)", price: "$25K – $60K" }
      ]
    },
    {
      title: "DeFi & Yield Systems",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500",
      services: [
        { name: "Staking & Farming Platform", description: "Multi-token pools, reward calculator", price: "$10K – $25K" },
        { name: "Lending & Borrowing Protocol", description: "Collateralized loans + liquidation", price: "$30K – $70K" },
        { name: "Launchpad / IDO / INO / IGO", description: "Tiered sale system + investor KYC", price: "$15K – $30K" },
        { name: "DEX Aggregator", description: "Best-price routing across pools", price: "$15K – $30K" },
        { name: "Derivatives Protocol", description: "Perpetuals + options + synthetics", price: "$40K – $80K" }
      ]
    },
    {
      title: "GameFi & Metaverse",
      icon: Gamepad2,
      color: "from-pink-500 to-rose-500",
      services: [
        { name: "GameFi Launchpad / Marketplace", description: "NFT drops + play-to-earn dashboard", price: "$15K – $30K" },
        { name: "In-Game Economy SDK", description: "Unity / Unreal integration, NFT assets", price: "$10K – $25K" },
        { name: "Metaverse Environment (WebGL)", description: "Custom 3D world + token logic", price: "$25K – $60K" },
        { name: "Avatar & Asset Minting System", description: "Metadata + market linkage", price: "$8K – $20K" },
        { name: "Virtual Land Registry (NFT)", description: "ERC-721 + geo-mapping", price: "$12K – $25K" }
      ]
    },
    {
      title: "AI + Data Intelligence",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
      services: [
        { name: "AI Chatbot (Web3 Trained)", description: "Support / Trading assistant", price: "$5K – $15K" },
        { name: "Generative AI Analytics", description: "Market & sentiment prediction", price: "$15K – $35K" },
        { name: "AI AML Engine", description: "Behavior + wallet risk scoring", price: "$10K – $25K" },
        { name: "AI Contract Scanner", description: "Detect vulnerabilities pre-deploy", price: "$5K – $12K" },
        { name: "AI Document Management", description: "OCR + LLM for legal docs", price: "$10K – $25K" }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      services: [
        { name: "Smart Contract Audit (External)", description: "CertiK / Hacken / Quill", price: "$3.5K – $8K" },
        { name: "Pen-Testing & Fuzzing", description: "API + frontend + node tests", price: "$3K – $6K" },
        { name: "SOC 2 / ISO 27001 Setup", description: "Enterprise readiness review", price: "$5K – $10K" },
        { name: "AML / KYC / Travel Rule System", description: "FATF & MiCA compliant", price: "$4K – $12K" },
        { name: "Continuous Security Retainer", description: "Monthly monitoring + alerts", price: "$1.5K – $3K /mo" }
      ]
    },
    {
      title: "Enterprise & Corporate Blockchain",
      icon: Factory,
      color: "from-slate-500 to-gray-500",
      services: [
        { name: "Supply-Chain Blockchain", description: "Track logistics & provenance", price: "$25K – $60K" },
        { name: "Blockchain ERP / CRM", description: "ERP ↔ chain integration", price: "$20K – $50K" },
        { name: "IoT + Blockchain", description: "Sensor + oracle verification", price: "$15K – $30K" },
        { name: "Identity & Credentialing", description: "DID + verifiable credentials", price: "$10K – $25K" },
        { name: "AI + Blockchain Data Lake", description: "Predictive enterprise analytics", price: "$25K – $50K" }
      ]
    },
    {
      title: "NFT & Digital Asset Ecosystem",
      icon: Image,
      color: "from-violet-500 to-purple-500",
      services: [
        { name: "NFT Marketplace (Custom)", description: "Lazy minting, royalty splits, auctions", price: "$15K – $35K" },
        { name: "Cross-Chain NFT Bridge", description: "Transfer NFTs between chains", price: "$10K – $25K" },
        { name: "Dynamic NFT Platform", description: "Metadata updates (on-chain)", price: "$10K – $20K" },
        { name: "NFT Ticketing / Events", description: "On-chain ticketing + QR verify", price: "$8K – $15K" },
        { name: "Music / Creator NFT Platform", description: "Royalty & split-pay contracts", price: "$12K – $25K" }
      ]
    },
    {
      title: "Crypto Banking & FinTech",
      icon: Landmark,
      color: "from-emerald-500 to-teal-500",
      services: [
        { name: "Crypto Bank Dashboard", description: "IBANs, savings, yield", price: "$40K – $80K" },
        { name: "Stablecoin System (USDT-like)", description: "Pegged $1 token + liquidity engine", price: "$25K – $60K" },
        { name: "NeoBank Integration", description: "Custodial wallets + KYC onboarding", price: "$30K – $70K" },
        { name: "Micro-Finance / DAO Loans", description: "Community lending pools", price: "$15K – $30K" }
      ]
    },
    {
      title: "Marketing & Growth Suite",
      icon: Megaphone,
      color: "from-amber-500 to-yellow-500",
      services: [
        { name: "Brand Identity & Guidelines", description: "Logo, deck, visual system", price: "$1.5K – $3.5K" },
        { name: "2D/3D Website + CMS", description: "Animated responsive site", price: "$3K – $8K" },
        { name: "Whitepaper + Pitch Deck", description: "Tokenomics, roadmap", price: "$1K – $3K" },
        { name: "Motion Graphic Video", description: "$400 – $900 / min", price: "1-2 weeks" },
        { name: "Ad / Promo Video", description: "$800 – $2K / min", price: "2-3 weeks" },
        { name: "Explainer / Launch Film", description: "Storyboard + voiceover + 3D", price: "$2K – $4K" },
        { name: "Social Media Management", description: "3-5 platforms + posting + design", price: "$1.5K – $3.5K /mo" },
        { name: "SEO / Growth Marketing", description: "Technical + on-page + analytics", price: "$1K – $2.5K /mo" },
        { name: "Performance Marketing (CEX/DEX)", description: "Paid campaigns, Google & X Ads", price: "$2K – $5K /mo" }
      ]
    },
    {
      title: "PR & KOL Ecosystem",
      icon: Users,
      color: "from-fuchsia-500 to-pink-500",
      services: [
        { name: "Press Release Distribution", description: "100 – 450+ global sites", price: "$6K – $22K" },
        { name: "KOL Campaigns", description: "SEA/India $3K – $7K | EU/US $10K – $25K", price: "Regional" },
        { name: "Influencer Videos / Podcasts", description: "YouTube + Twitter + IG", price: "$1.5K – $5K" },
        { name: "AMA / Spaces / Community Events", description: "Hosted + recorded sessions", price: "$1K – $3K" },
        { name: "Exchange Listing Support", description: "Tier-3 $5K | Tier-2 $25K | Tier-1 $75K+", price: "Region" },
        { name: "CoinMarketCap / Coingecko", description: "Submission + verification", price: "$500 – $1K" }
      ]
    },
    {
      title: "Fundraising & Advisory",
      icon: TrendingUp,
      color: "from-lime-500 to-green-500",
      services: [
        { name: "Tokenomics + Financial Model", description: "Supply + unlock + ROI projections", price: "$1.5K – $3K" },
        { name: "Investor Deck + SAFT / SAFE Docs", description: "Legal + narrative + cap table", price: "$1.5K – $3K" },
        { name: "VC / Angel Outreach", description: "Warm intros + demo setup", price: "$3K – $10K" },
        { name: "IDO / ICO / IEO Management", description: "End-to-end launch", price: "$2K – $6K" }
      ]
    },
    {
      title: "Post-Launch & Operations",
      icon: Headphones,
      color: "from-sky-500 to-blue-500",
      services: [
        { name: "Maintenance & Hotfix SLA", description: "24×7 uptime, bug fixes", price: "$1.5K – $3.5K /mo" },
        { name: "Security & Audit Retainer", description: "Recurring security reviews", price: "$1K – $3K /mo" },
        { name: "Market Making Retainer", description: "Liquidity & volume", price: "$4K – $8K /mo" },
        { name: "Analytics & Admin Dashboard", description: "KPIs, user & revenue stats", price: "$1.5K – $3K" }
      ]
    },
    {
      title: "Education & Community Infrastructure",
      icon: GraduationCap,
      color: "from-teal-500 to-cyan-500",
      services: [
        { name: "Web3 Academy LMS", description: "Courses + certificates", price: "$8K – $20K" },
        { name: "Certificate Builder (NFT)", description: "Verifiable on-chain records", price: "$3K – $8K" },
        { name: "Hackathon & Bounty Portal", description: "Registration, payout, NFTs", price: "$8K – $15K" },
        { name: "Community DAO Tools", description: "Governance & treasury", price: "$5K – $10K" }
      ]
    },
    {
      title: "Compliance & Legal Framework",
      icon: Scale,
      color: "from-rose-500 to-red-500",
      services: [
        { name: "Global Legal Docs Suite", description: "SAFT / SAFE / Token Purchase / ToS", price: "$2K – $5K" },
        { name: "Jurisdictional Structuring", description: "Entity setup + licensing", price: "$3K – $10K" },
        { name: "Audit Trail & Reporting System", description: "AML logs + investigator dashboard", price: "$5K – $12K" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Services</h1>
          <p className="text-muted-foreground text-lg">Comprehensive blockchain & Web3 solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.slice(0, showAll ? categories.length : 8).map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.05 }} 
              className="flex"
            >
              <Card className="w-full flex flex-col group hover:shadow-2xl transition-all duration-300 border border-border hover:border-blue-500 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{category.services.length} services available</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col flex-grow">
                  <ul className="space-y-2 mb-4 flex-grow">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {service.name}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => setSelectedCategory(category)} className="w-full group/btn mt-auto">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {!showAll ? (
            <Button onClick={() => setShowAll(true)} size="lg" className="px-8">
              View All Services
            </Button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Button onClick={() => { setShowAll(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} variant="outline" size="lg" className="px-8">
                View Less
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] max-h-[90vh] p-0 bg-gradient-to-br from-background via-background/95 to-primary/5">
          <DialogHeader className="p-4 sm:p-8 border-b bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="flex items-center gap-3 sm:gap-4">
              {selectedCategory?.icon && (
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${selectedCategory.color} p-2 sm:p-3 shadow-lg`}>
                  <selectedCategory.icon className="w-full h-full text-white" />
                </div>
              )}
              <div>
                <DialogTitle className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {selectedCategory?.title}
                </DialogTitle>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{selectedCategory?.services.length} services available</p>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="h-[calc(90vh-120px)] sm:h-[calc(90vh-140px)] p-4 sm:p-8">
            <div className="grid gap-4">
              {selectedCategory?.services.map((service: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-lg border border-border hover:border-blue-500 bg-gradient-to-br from-background to-background/50 p-4 sm:p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />
                  <div className="relative">
                    <h3 className="font-bold text-lg sm:text-xl group-hover:text-primary transition-colors mb-3">{service.name}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex flex-col gap-2">
                        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {service.price}
                        </span>
                        {service.timeline && (
                          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium w-fit">
                            {service.timeline}
                          </span>
                        )}
                      </div>
                      <Button size="sm" variant="outline" className="w-full sm:w-auto">
                        View Plans
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesOverview;