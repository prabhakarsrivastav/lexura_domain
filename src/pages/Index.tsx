import { HomeHero } from "@/components/hero/HomeHero";
import { FilterPanel } from "@/components/marketplace/FilterPanel";
import { DomainCard } from "@/components/marketplace/DomainCard";
import { Web3AnimatedSearch } from "@/components/marketplace/Web3AnimatedSearch";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, Video, MessageCircle, Calendar, Users, Target, Zap, BarChart3, Rocket, Globe, Cloud, Image as ImageIcon, Bot, Workflow, DollarSign, ArrowRight, Check, Shield, Bell, Mail, Monitor } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ShufflingNFTPreview } from "@/components/nft/ShufflingNFTPreview";
import { FAQ } from "@/components/common/FAQ";
import roadmapIllustration from "@/assets/roadmap-illustration.jpg";
import bellIcon from "@/assets/logo2/lestsection/belliconlogo-Photoroom.png";
import messageIcon from "@/assets/logo2/lestsection/messageboxlogo-Photoroom.png";
import monitorIcon from "@/assets/logo2/lestsection/webminer-Photoroom.png";
import { AIBusinessPlanSection } from "@/components/hero/AIBusinessPlanSection";
import { motion } from "framer-motion";

// Import custom icons
import aiOptimizedIcon from "@/assets/icons/ai-optimized.png";
import intelligentOutreachIcon from "@/assets/icons/intelligent-outreach.png";
import seamlessHostingIcon from "@/assets/icons/seamless-hosting.png";
import web3DomainsIcon from "@/assets/icons/web3-domains.png";
import web3HostingIcon from "@/assets/icons/web3-hosting.png";
import nftMarketplaceIcon from "@/assets/icons/nft-marketplace.png";
import aiToolsIcon from "@/assets/icons/ai-tools.png";
import expertConsultancyIcon from "@/assets/icons/expert-consultancy.png";
import workflowBuilderIcon from "@/assets/icons/workflow-builder.png";
import twelveMonthPlanIcon from "@/assets/icons/12-month-plan.png";
import revenueForecastIcon from "@/assets/icons/revenue-forecast.png";
import fourKeyAreasIcon from "@/assets/icons/four-key-areas.png";
const Index = () => {
  const navigate = useNavigate();
  const featuredDomains = [{
    domain: "crypto.nft",
    price: 5.2,
    verified: true,
    custody: "escrow" as const,
    bgColor: '#fafafa',
    accentColor: '#154f64',
    buttonColor: 'rgb(13, 70, 84)'
  }, {
    domain: "defi.wallet",
    price: 3.8,
    verified: true,
    custody: "self-custody" as const,
    bgColor: '#fafafa',
    accentColor: '#154f64',
    buttonColor: 'rgb(13, 70, 84)'
  }, {
    domain: "nft.dao",
    price: 2.5,
    verified: false,
    custody: "escrow" as const,
    bgColor: '#fafafa',
    accentColor: '#154f64',
    buttonColor: 'rgb(13, 70, 84)'
  }, {
    domain: "meta.x",
    price: 8.9,
    verified: true,
    custody: "escrow" as const,
    bgColor: '#fafafa',
    accentColor: '#154f64',
    buttonColor: 'rgb(13, 70, 84)'
  }, {
    domain: "web3.blockchain",
    price: 4.2,
    verified: true,
    custody: "self-custody" as const,
    bgColor: '#fafafa',
    accentColor: '#154f64',
    buttonColor: 'rgb(13, 70, 84)'
  }, {
    domain: "dao.crypto",
    price: 6.7,
    verified: true,
    custody: "escrow" as const,
    bgColor: '#fafafa',
    accentColor: '#154f64',
    buttonColor: 'rgb(13, 70, 84)'
  }];
  return <main className="min-h-screen overflow-x-hidden">
    <HomeHero />

    {/* Products & Services Section - GoDaddy Style */}
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Everything you need to succeed online
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            From domains to hosting, AI tools to expert consultancy — get all the essentials in one place
          </motion.p>
        </motion.div>

        {/* Main Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Domain Marketplace Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-primary/50 h-full !rounded-md" style={{ backgroundColor: '#fafafa' }}>
              <motion.div
                className="flex items-start justify-between mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={web3DomainsIcon} alt="Web3 Domains" className="h-full w-full object-cover" />
                </motion.div>
                <Shield className="h-4 w-4 text-success" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Web3 Domains</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Own your digital identity with verified blockchain domains. Secure, permanent, and yours forever.
              </p>
              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2 text-xs">
                  <Check className="h-3 w-3 text-success" />
                  <span>Instant verification</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check className="h-3 w-3 text-success" />
                  <span>Secure escrow included</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check className="h-3 w-3 text-success" />
                  <span>AI valuation tools</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold">0.0029 ETH</span>
                <span className="text-sm text-muted-foreground">starting at</span>
              </div>
              <Button className="w-full h-10" variant="noHover" style={{ backgroundColor: 'rgb(13, 70, 84)' }} onClick={() => navigate("/marketplace")}>
                Browse Domains
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </motion.div>

          {/* Cloud Hosting Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary/50 h-full !rounded-md" style={{ backgroundColor: '#fafafa' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center overflow-hidden">
                  <img src={web3HostingIcon} alt="Web3 Hosting" className="h-full w-full object-cover" />
                </div>
                <Shield className="h-5 w-5 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Web3 Hosting</h3>
              <p className="text-muted-foreground mb-6">
                Deploy and scale your dApps with enterprise-grade infrastructure. 99.9% uptime guaranteed.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>One-click deployment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>Global CDN included</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>24/7 monitoring</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold">0.0066 ETH</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              <Button className="w-full h-12 text-lg rounded-md" variant="noHover" style={{ backgroundColor: 'rgb(13, 70, 84)' }} onClick={() => navigate("/hosting")}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </motion.div>

          {/* NFT Marketplace Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary/50 h-full !rounded-md" style={{ backgroundColor: '#fafafa' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center overflow-hidden">
                  <img src={nftMarketplaceIcon} alt="NFT Marketplace" className="h-full w-full object-cover" />
                </div>
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">NFT Marketplace</h3>
              <p className="text-muted-foreground mb-6">
                Create, trade, and earn from digital assets. Join the future of digital ownership.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>Easy minting tools</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>Low transaction fees</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>Royalty management</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold">2.5%</span>
                <span className="text-muted-foreground">fees only</span>
              </div>
              <Button className="w-full h-12 text-lg" variant="noHover" style={{ backgroundColor: 'rgb(13, 70, 84)' }} onClick={() => navigate("/nft-gallery")}>
                Explore NFTs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </motion.div>

          {/* AI Business Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary/50 h-full rounded-md" style={{ backgroundColor: '#fafafa' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center overflow-hidden">
                  <img src={aiToolsIcon} alt="AI Business Tools" className="h-full w-full object-cover" />
                </div>
                <Sparkles className="h-5 w-5 text-warning" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Business Tools</h3>
              <p className="text-muted-foreground mb-6">
                Generate names, roadmaps, and growth strategies powered by advanced AI technology.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>Name generator</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>Roadmap planner</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>Revenue forecasting</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold">Free</span>
                <span className="text-muted-foreground">to start</span>
              </div>
              <Button className="w-full h-12 text-lg" variant="outline" style={{ backgroundColor: 'rgb(13, 70, 84)', color: 'white' }} onClick={() => navigate("/ai-name-generator")}>
                Try AI Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </motion.div>

          {/* Consultancy Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary/50 rounded-md" style={{ backgroundColor: '#fafafa' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img src={expertConsultancyIcon} alt="Expert Consultancy" className="h-full w-full object-cover" />
                </div>
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Expert Consultancy</h3>
              <p className="text-muted-foreground mb-6">
                Get personalized guidance from Web3 experts on strategy, growth, and technical architecture.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>GTM strategy sessions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>Growth optimization</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>Tech advisory</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold">0.15 ETH</span>
                <span className="text-muted-foreground">/ session</span>
              </div>
              <Button className="w-full h-12 text-lg" variant="noHover" style={{ backgroundColor: 'rgb(13, 70, 84)' }} onClick={() => navigate("/consultancy")}>
                Book Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </motion.div>

          {/* Workflow Automation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary/50 rounded-md" style={{ backgroundColor: '#fafafa' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center overflow-hidden">
                  <img src={workflowBuilderIcon} alt="Workflow Builder" className="h-full w-full object-cover" />
                </div>
                <Zap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Workflow Builder</h3>
              <p className="text-muted-foreground mb-6">
                Automate your business operations with no-code integrations and smart workflows.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>No-code automation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>100+ integrations</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span>Real-time monitoring</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold">0.066 ETH</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              <Button className="w-full h-12 text-lg" variant="noHover" style={{ backgroundColor: 'rgb(13, 70, 84)', color: 'white', borderColor: 'rgb(13, 70, 84)' }} onClick={() => navigate("/workflow")}>
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </motion.div>
        </div>

        {/* Featured Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="p-8 md:p-12 bg-gray-100 border-primary/20 rounded-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  New to Web3? Start here.
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Get a free consultation and roadmap for your Web3 business. Our experts will help you choose the right tools and strategy.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="h-14 px-8" style={{ backgroundColor: 'rgb(13, 70, 84)' }}>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Free Consultation
                  </Button>
                </motion.div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "10K+", label: "Active Users", color: "text-primary", delay: 0.3 },
                  { value: "50M+ ETH", label: "Total Volume", color: "text-success", delay: 0.4 },
                  { value: "99.9%", label: "Uptime", color: "text-accent", delay: 0.5 },
                  { value: "24/7", label: "Support", color: "text-warning", delay: 0.6 }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: stat.delay }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <Card className="p-6 text-center bg-background rounded-md">
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>

    {/* Featured Domains Showcase */}
    <section className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Premium domains available now
          </motion.h2>
          <motion.p
            className="text-base text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hand-picked Web3 domains with verified ownership
          </motion.p>
        </motion.div>

        {/* Web3 Animation Search */}
        <motion.div
          className="mb-10 flex gap-2 items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 max-w-4xl">
            <Web3AnimatedSearch />
          </div>
          <FilterPanel />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDomains.map((domain, idx) => (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <DomainCard {...domain} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="h-12 px-8" style={{ backgroundColor: 'rgb(13, 70, 84)', color: 'white' }} onClick={() => navigate("/domains?tab=web3")}>
              View All Domains
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Profitable Business Roadmap Section */}
    <section className="container mx-auto px-4 py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Left: Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Get Your Profitable Business Roadmap
            </h2>
            <p className="text-xl text-muted-foreground">
              AI-powered 12-month plan with revenue projections and growth strategies
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[{
              icon: twelveMonthPlanIcon,
              label: "12-Month Plan",
              color: "text-primary"
            }, {
              icon: revenueForecastIcon,
              label: "Revenue Forecast",
              color: "text-success"
            }, {
              icon: fourKeyAreasIcon,
              label: "4 Key Areas",
              color: "text-accent"
            }, {
              icon: aiOptimizedIcon,
              label: "AI-Optimized",
              color: "text-warning"
            }].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="p-4 hero-card hover:border-primary transition-all rounded-md" style={{ backgroundColor: '#fafafa' }}>
                  <img src={item.icon} alt={item.label} className="h-8 w-8 mb-2 object-contain" />
                  <p className="font-semibold text-sm">{item.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span>Data-driven insights</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Rocket className="h-4 w-4 text-success" />
              <span>Proven frameworks</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" onClick={() => navigate("/ai-roadmap-generator")} className="w-full md:w-auto h-14 px-8 text-lg" style={{ backgroundColor: 'rgb(13, 70, 84)' }}>
              <Sparkles className="mr-2 h-5 w-5" />
              Generate Your Roadmap
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img src={roadmapIllustration} alt="Business Roadmap Generator Interface" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Card className="absolute -top-6 -right-6 p-4 hero-card shadow-xl backdrop-blur-sm bg-background/90 rounded-md">
              <div className="text-2xl font-bold text-success">+156%</div>
              <div className="text-sm text-muted-foreground">Growth Rate</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Card className="absolute -bottom-6 -left-6 p-4 hero-card shadow-xl backdrop-blur-sm bg-background/90 rounded-md">
              <div className="text-2xl font-bold text-primary">94%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* AI Business Plan Analyzer Section */}
    <AIBusinessPlanSection />

    {/* NFT Marketplace Section - OpenSea Style */}
    <section className="bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        {/* Header with Stats */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
                Explore NFTs
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover, collect, and sell extraordinary NFTs
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { value: "2.4M+", label: "Total Items" },
                { value: "180K+", label: "Owners" },
                { value: "45M ETH", label: "Volume" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Category Tabs */}
          <motion.div
            className="flex gap-3 overflow-x-auto pb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {['Trending', 'Art', 'Gaming', 'Photography', 'Music', 'Collectibles'].map((category, idx) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant={idx === 0 ? "default" : "outline"} className={`whitespace-nowrap ${idx === 0 ? '' : 'hover:bg-muted'}`} style={{ backgroundColor: 'rgb(13, 70, 84)', color: 'white' }}>
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Collection Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="p-8 md:p-10 mb-12 bg-gray-100 border-primary/20 overflow-hidden relative rounded-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4">
                  FEATURED COLLECTION
                </div>
                <h3 className="text-3xl font-bold mb-4">Trending Collections</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Explore the most popular NFT collections from verified creators. Discover unique digital art, exclusive collectibles, and rare items.
                </p>
                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" onClick={() => navigate("/nft-gallery")} className="h-11 px-6" style={{ backgroundColor: 'rgb(13, 70, 84)' }}>
                      Explore All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" onClick={() => navigate("/mint-nft")} className="h-11 px-6" style={{ backgroundColor: 'rgb(13, 70, 84)', color: 'white' }}>
                      Create NFT
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, value: "+127%", label: "Floor Price Growth", color: "text-success", delay: 0.3 },
                  { icon: Users, value: "45K", label: "Active Traders", color: "text-primary", delay: 0.4 },
                  { icon: Zap, value: "2.4K", label: "24h Sales", color: "text-accent", delay: 0.5 },
                  { icon: DollarSign, value: "8.2 ETH", label: "Avg. Sale Price", color: "text-success", delay: 0.6 }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: stat.delay }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                      <Card className="p-6 bg-background/80 backdrop-blur-sm rounded-md">
                        <Icon className={`h-8 w-8 ${stat.color} mb-3`} />
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* NFT Grid */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Notable Drops</h3>
            <motion.div whileHover={{ x: 5 }}>
              <Button variant="link" className="text-primary" onClick={() => navigate("/nft-gallery")}>
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <ShufflingNFTPreview />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-3">Ready to start your collection?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the largest NFT marketplace. Buy, sell, and discover exclusive digital items.
          </p>
          <div className="flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" onClick={() => navigate("/nft-gallery")} className="h-12 px-8" style={{ backgroundColor: 'rgb(13, 70, 84)' }}>
                Browse Marketplace
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" onClick={() => navigate("/mint-nft")} className="h-12 px-8" style={{ backgroundColor: 'rgb(13, 70, 84)', color: 'white' }}>
                Create Your NFT
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services Section - Apple Style */}
    <section className="bg-background ">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Everything you need.<br />All in one place.
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Powerful tools. Effortless growth. Incredible results.
          </motion.p>
        </motion.div>

        {/* Services Grid - Modern Card Layout */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Consultancy Card */}
          <motion.div
            className="group relative bg-gray-50 rounded-md p-6 border border-border hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="mb-6">
              <motion.div
                className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <img src={expertConsultancyIcon} alt="Expert Guidance" className="h-full w-full object-cover" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Expert Guidance
              </h3>
            </div>

            <div className="space-y-3 mb-6 text-sm text-muted-foreground leading-relaxed">
              <p>Work one-on-one with industry veterans who've scaled successful Web3 projects from zero to millions.</p>
              <p>Get personalized strategies for growth, technical architecture, and go-to-market execution.</p>
              <p>Walk away with actionable insights and a clear roadmap to achieve your goals faster.</p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">
                Starting at <span className="text-2xl font-bold text-foreground">0.15 ETH</span> per session
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full transition-all"
                  style={{ backgroundColor: 'rgb(13, 70, 84)', color: 'white' }}
                  onClick={() => navigate("/consultancy")}
                >
                  Book a session
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* AI Outreach Card */}
          <motion.div
            className="group relative bg-gray-50 rounded-md p-10 border border-border hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="mb-8">
              <motion.div
                className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-6 overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <img src={intelligentOutreachIcon} alt="Intelligent Outreach" className="h-full w-full object-cover" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Intelligent Outreach
              </h3>
            </div>

            <div className="space-y-4 mb-8 text-muted-foreground leading-relaxed">
              <p>Reach domain sellers and buyers with AI-powered personalization that feels genuinely human.</p>
              <p>Scale your outreach to thousands while maintaining authenticity and high response rates.</p>
              <p>Track performance in real-time with advanced analytics and automated follow-up sequences.</p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">
                Average <span className="text-xl font-bold text-foreground">42%</span> open rate, <span className="text-xl font-bold text-foreground">18%</span> response
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full transition-all"
                  style={{ backgroundColor: 'rgb(13, 70, 84)', color: 'white' }}
                  onClick={() => navigate("/ai-outreach")}
                >
                  Launch campaign
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Cloud Hosting Card */}
          <motion.div
            className="group relative bg-gray-50 rounded-md p-10 border border-border hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="mb-8">
              <motion.div
                className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-6 overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <img src={seamlessHostingIcon} alt="Seamless Hosting" className="h-full w-full object-cover" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Seamless Hosting
              </h3>
            </div>

            <div className="space-y-4 mb-8 text-muted-foreground leading-relaxed">
              <p>Deploy your Web3 applications globally with one click. No DevOps expertise required.</p>
              <p>Enterprise-grade infrastructure with automatic scaling, DDoS protection, and 99.9% uptime SLA.</p>
              <p>Built-in CDN, SSL certificates, and real-time monitoring ensure peak performance 24/7.</p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">
                From <span className="text-2xl font-bold text-foreground">0.01 ETH/mo</span> with 14-day trial
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-md transition-all"
                  style={{ backgroundColor: 'rgb(13, 70, 84)', color: 'white' }}
                  onClick={() => navigate("/hosting")}
                >
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}

      </div>
    </section>

    {/* FAQ Section (keep original FAQ component) */}
    <FAQ />

    {/* Stay Informed Section - placed after FAQ */}
    <section className="pb-4 pt-0">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#154f64' }}>Stay Informed!</h2>
        <p className="text-sm mb-4" style={{ color: '#154f64' }}>Get unlimited free access to the best ideas for IT Engineers</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="h-[7.25rem] w-[7.25rem] rounded-full flex flex-col items-center justify-center mb-3 shadow-lg translate-y-2" style={{ backgroundColor: '#154f64' }}>
              <img src={bellIcon} alt="alerts" className="h-[2.4rem] w-[2.4rem] mb-1 object-contain" />
              <div className="text-sm text-[#eaf6f6] font-semibold text-center leading-tight">
                <span className="text-base">Get</span>
                <br />
                <span className="text-xs -mt-1">Product Alerts</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-[7.25rem] w-[7.25rem] rounded-full flex flex-col items-center justify-center mb-3 shadow-lg translate-y-2" style={{ backgroundColor: '#154f64' }}>
              <img src={messageIcon} alt="newsletters" className="h-[2.4rem] w-[2.4rem] mb-1 object-contain" />
              <div className="text-sm text-[#eaf6f6] font-semibold text-center leading-tight">
                <span className="text-base">Subscribe</span>
                <br />
                <span className="text-xs -mt-1">to Newsletters</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-[7.25rem] w-[7.25rem] rounded-full flex flex-col items-center justify-center mb-3 shadow-lg translate-y-2" style={{ backgroundColor: '#154f64' }}>
              <img src={monitorIcon} alt="webinars" className="h-[2.48rem] w-[2.48rem] mb-1 object-contain" />
              <div className="text-sm text-[#eaf6f6] font-semibold text-center leading-tight">
                <span className="text-base">View</span>
                <br />
                <span className="text-xs -mt-1">All Webinars</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>;
};
export default Index;