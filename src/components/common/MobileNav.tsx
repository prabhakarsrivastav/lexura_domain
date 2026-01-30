import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    domains: false,
    aiTools: false,
    nftLaunchpad: false,
    services: false,
    resources: false,
    aboutUs: false,
    buyersProtection: false,
    community: false,
    support: false,
    connectWithUs: false,
    newInnovative: false,
    topCategories: false,
    explore: false,
  });

  const closeMenu = () => setOpen(false);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-[#0D4654]"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full sm:w-96 h-full max-h-screen overflow-y-auto p-0 bg-[#060D0D] border-r border-gray-800 text-white"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="p-6 border-b border-gray-800">
            <SheetTitle asChild>
              <Link
                to="/"
                onClick={closeMenu}
                className="text-2xl font-bold text-white"
              >
                Lexura Domains
              </Link>
            </SheetTitle>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search domains…"
                className="pl-10"
              />
            </div>
          </SheetHeader>

          {/* Scrollable Navigation */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {/* Domains */}
            <Collapsible
              open={expandedSections.domains}
              onOpenChange={() => toggleSection("domains")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                Domains
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${expandedSections.domains ? "rotate-90" : ""
                    }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1">
                <Link
                  to="/domains?tab=web3"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  WEB3 Domains
                </Link>
                <Link
                  to="/domains?tab=originals"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  Originals (Web2 Domains)
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* AI Tools */}
            <Collapsible
              open={expandedSections.aiTools}
              onOpenChange={() => toggleSection("aiTools")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                AI Tools
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${expandedSections.aiTools ? "rotate-90" : ""
                    }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1">
                <Link
                  to="/ai-domain-generator"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  AI Domain Generator
                </Link>
                <Link
                  to="/ai-roadmap-generator"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  AI Roadmap Generator
                </Link>
                <Link
                  to="/ai-business-plan-analyzer"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  AI Business Plan Analyzer
                </Link>
                <Link
                  to="/ai-business-name-generator"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  AI Business Name Generator
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* NFT Launchpad */}
            <Collapsible
              open={expandedSections.nftLaunchpad}
              onOpenChange={() => toggleSection("nftLaunchpad")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                NFT Launchpad
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${expandedSections.nftLaunchpad ? "rotate-90" : ""
                    }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1">
                <Link
                  to="/nft-launchpad/create"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  Launch New Project
                </Link>
                <Link
                  to="/nft-launchpad"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  My Launches
                </Link>
                <Link
                  to="/nft-launchpad/explore"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  Explore Launchpad
                </Link>
                <Link
                  to="/nft-launchpad/how-it-works"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  How it Works
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Services */}
            <Collapsible
              open={expandedSections.services}
              onOpenChange={() => toggleSection("services")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                Services
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${expandedSections.services ? "rotate-90" : ""
                    }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1">
                <Link
                  to="/services"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  Services Overview
                </Link>
                <Link
                  to="/cloud-hosting"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  Cloud Hosting
                </Link>
                <Link
                  to="/consultancy"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  Consultancy
                </Link>
                <Link
                  to="/ai-outreach-campaigns"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  AI Outreach
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Resources */}
            <Collapsible
              open={expandedSections.resources}
              onOpenChange={() => toggleSection("resources")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                Resources
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${expandedSections.resources ? "rotate-90" : ""
                    }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1">
                <Link
                  to="/blog"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  Blog
                </Link>
                <Link
                  to="/our-story"
                  onClick={closeMenu}
                  className="block py-2 px-4 text-sm text-gray-300  rounded-md"
                >
                  Our Story
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* New & Innovative */}
            <Collapsible
              open={expandedSections.newInnovative}
              onOpenChange={() => toggleSection("newInnovative")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                New & Innovative
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${expandedSections.newInnovative ? "rotate-90" : ""
                    }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1">
                <div className="block py-2 px-4 text-sm text-gray-500">
                  Coming soon...
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Exclusive Discounts */}
            <Link
              to="/discounts"
              onClick={closeMenu}
              className="block py-3 px-4 text-sm font-semibold text-white  rounded-md"
            >
              Exclusive Discounts
            </Link>

            {/* Top-rated Domains */}
            <Link
              to="/top-rated"
              onClick={closeMenu}
              className="block py-3 px-4 text-sm font-semibold text-white  rounded-md"
            >
              Top-rated Domains
            </Link>

            {/* Top Categories */}
            <Collapsible
              open={expandedSections.topCategories}
              onOpenChange={() => toggleSection("topCategories")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                Top Categories
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${expandedSections.topCategories ? "rotate-90" : ""
                    }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1">
                <div className="block py-2 px-4 text-sm text-gray-500">
                  Coming soon...
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Best Sellers */}
            <Link
              to="/best-sellers"
              onClick={closeMenu}
              className="block py-3 px-4 text-sm font-semibold text-white  rounded-md"
            >
              Best Sellers
            </Link>

            {/* What's Trending */}
            <Link
              to="/trending"
              onClick={closeMenu}
              className="flex items-center py-3 px-4 text-sm font-semibold text-white  rounded-md"
            >
              What's Trending
            </Link>

            {/* Explore */}
            <Collapsible
              open={expandedSections.explore}
              onOpenChange={() => toggleSection("explore")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                Explore
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${expandedSections.explore ? "rotate-90" : ""
                    }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1">
                <div className="block py-2 px-4 text-sm text-gray-500">
                  Coming soon...
                </div>
              </CollapsibleContent>
            </Collapsible>

            <div className="border-t my-4" />

            {/* Tier 1 Quick Links */}
            <div className="space-y-2">
              {/* About Us */}
              <Collapsible
                open={expandedSections.aboutUs}
                onOpenChange={() => toggleSection("aboutUs")}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                  About Us
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${expandedSections.aboutUs ? "rotate-90" : ""
                      }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  <div className="block py-2 px-4 text-sm text-gray-500">
                    Coming soon...
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Buyer's Protection */}
              <Collapsible
                open={expandedSections.buyersProtection}
                onOpenChange={() => toggleSection("buyersProtection")}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                  Buyer's Protection
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${expandedSections.buyersProtection ? "rotate-90" : ""
                      }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  <div className="block py-2 px-4 text-sm text-gray-500">
                    Coming soon...
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Community */}
              <Collapsible
                open={expandedSections.community}
                onOpenChange={() => toggleSection("community")}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                  Community
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${expandedSections.community ? "rotate-90" : ""
                      }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  <div className="block py-2 px-4 text-sm text-gray-500">
                    Coming soon...
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Support */}
              <Collapsible
                open={expandedSections.support}
                onOpenChange={() => toggleSection("support")}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                  Support
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${expandedSections.support ? "rotate-90" : ""
                      }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  <div className="block py-2 px-4 text-sm text-gray-500">
                    Coming soon...
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Live Chat */}
              <Link
                to="/live-chat"
                onClick={closeMenu}
                className="block py-3 px-4 text-sm font-semibold text-white  rounded-md"
              >
                Live Chat
              </Link>

              {/* Connect with Us */}
              <Collapsible
                open={expandedSections.connectWithUs}
                onOpenChange={() => toggleSection("connectWithUs")}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-white  rounded-md">
                  Connect with Us
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${expandedSections.connectWithUs ? "rotate-90" : ""
                      }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  <div className="block py-2 px-4 text-sm text-gray-500">
                    Coming soon...
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Sticky Bottom Bar */}
          <div className="border-t p-4 space-y-3">
            <div className="w-full">
              <WalletConnectButton />
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                closeMenu();
                window.location.href = "/auth";
              }}
            >
              Sign In
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                closeMenu();
                window.location.href = "/contact";
              }}
            >
              Support 24×7
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
