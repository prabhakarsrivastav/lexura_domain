import { Link, useNavigate, useLocation } from "react-router-dom";
import { MobileNav } from "./MobileNav";
import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
// import cart from "../../assets/logo2/Gemini_Generated_Image_8kb0op8kb0op8kb0-Photoroom.png";
// import cart from "../../assets/logo2/shoping_cart_new.png"
// import logo from "../../assets/logo2/gptlogo2.png";
import logo from "../../assets/logo/logo_final/lexura opt 1 trans (1).png";
import CartIcon from "../../assets/logo2/gptlogofinalcart.png";
import Tier0Dropdown from "./Tier0Dropdown";
import DropdownCaret from './DropdownCaret';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Globe, Zap, Code, BarChart, Users, BookOpen, FileText, Link2,
  Rocket, LogOut, User as UserIcon, LogIn, Headphones,
  TrendingUp, Mic, Heart
} from "lucide-react";
import searchIconImg from "../../assets/icons/smart-search.png";
import filterIconImg from "../../assets/icons/filter-search.png";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

// Helper component for placeholder dropdown content
const PlaceholderContent = () => (
  <>
    <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">Sample Link 1</DropdownMenuItem>
    <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">Sample Link 2</DropdownMenuItem>
  </>
);

// Helper component for links in Tier 3 (Used for Desktop only now)
const SubNavLink = ({ link }: { link: SubNavLinkItem }) => {
  const commonClasses = "flex items-center gap-0 text-[11px] font-normal text-white outline-none hover:text-[#0D4654] transition-colors";

  if (link.dropdown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={commonClasses}>
          {link.name}
          {link.icon}
          <DropdownCaret className="h-9 w-2" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="nav-panel-dark">
          <PlaceholderContent />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link to={link.path} className={commonClasses}>
      {link.name}
      {link.icon}
    </Link>
  );
};

// Type for Tier 3 links
type SubNavLinkItem = {
  name: string;
  path: string;
  dropdown: boolean;
  icon?: React.ReactNode;
};



// Dropdown caret is shared from `DropdownCaret.tsx`

// const CartIcon = ({ size = 40, color = "#FFFFFF" }) => (
//   <svg 
//     width={size} 
//     height={size} 
//     viewBox="0 0 48 48" 
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     {/* Handle - curved on left */}
//     <path 
//       d="M6 8 L8 8 C9 8 9.5 9 10 10" 
//       stroke={color} 
//       strokeWidth="3.5" 
//       strokeLinecap="round" 
//       fill="none"
//     />

//     {/* Main cart body - trapezoid with all sides */}
//     <path 
//       d="M10 10 L13 32 L38 32 L41 10 Z" 
//       stroke={color} 
//       strokeWidth="3.5" 
//       strokeLinejoin="miter" 
//       fill="none"
//     />

//     {/* Vertical lines inside cart - 4 evenly spaced lines */}
//     <line x1="18" y1="13" x2="16" y2="29" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
//     <line x1="24" y1="13" x2="22" y2="29" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
//     <line x1="30" y1="13" x2="28" y2="29" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
//     <line x1="36" y1="13" x2="34" y2="29" stroke={color} strokeWidth="3.5" strokeLinecap="round" />

//     {/* Left wheel - circle outline */}
//     <circle 
//       cx="18" 
//       cy="38" 
//       r="3" 
//       stroke={color} 
//       strokeWidth="3.5" 
//       fill="none"
//     />

//     {/* Right wheel - circle outline */}
//     <circle 
//       cx="34" 
//       cy="38" 
//       r="3" 
//       stroke={color} 
//       strokeWidth="3.5" 
//       fill="none"
//     />
//   </svg>
// );

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [headerSearch, setHeaderSearch] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUser(userData ? JSON.parse(userData) : null);
  }, [location]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1110);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("walletAddress");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  // Links for Bottom Bar (Main Navigation / Categories)
  const bottomNavLinks: SubNavLinkItem[] = [
    { name: "Domains", path: "/domains", dropdown: true },
    { name: "AI Tools", path: "/ai-tools", dropdown: true },
    { name: "NFT Launchpad", path: "/nft-launchpad", dropdown: true },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Resources", path: "/resources", dropdown: true },
    { name: "New & Innovative", path: "/new", dropdown: true },
    { name: "Exclusive Discounts", path: "/discounts", dropdown: false },
    { name: "Featured Categories", path: "/categories", dropdown: true },

    { name: "Top-rated Domains", path: "/top-rated", dropdown: false },
    { name: "Best Sellers", path: "/best-sellers", dropdown: false },
    { name: "What's Trending", path: "/trending", dropdown: false, icon: <TrendingUp className="h-2.5 w-2.5" /> },
    { name: "Explore", path: "/explore", dropdown: true },
  ];

  // Trigger for Desktop Dropdowns
  const NavDropdownTrigger = ({ children }: { children: React.ReactNode }) => (
    <DropdownMenuTrigger className="flex items-center gap-0 whitespace-nowrap px-1 text-xs font-normal text-white outline-none hover:text-[#0D4654]">
      {children}
      <DropdownCaret className="h-9 w-2" />
    </DropdownMenuTrigger>
  );

  return (
    <header
      className="sticky top-0 z-50 w-full lexura-header-typography"
      style={{
        background: "#060D0D",
        fontSize: '13px',
        fontFamily: "Arial, Helvetica, sans-serif",
        color: '#FFFFFF',
        fontWeight: '400'
      }}
    >
      {/* Scoped override: force Arial/Helvetica 13px across header and descendants
          This uses !important to override Tailwind utility font-size classes (e.g., text-xs)
          so the three header bars render at 13px as requested. */}
      <style>{`.lexura-header-typography, .lexura-header-typography * { font-family: Arial, Helvetica, sans-serif !important; font-size: 13px !important; font-weight: 400 !important; }`}</style>
      {/* Preserve original slogan styling (Monotype Corsiva + smaller responsive sizes) */}
      <style>{`.lexura-slogan { font-family: 'Monotype Corsiva', cursive !important; color: #ffffff !important; letter-spacing: 0.02em !important; position: relative !important; z-index: 10 !important; font-size: 8px !important; }
        @media (min-width: 1024px) { .lexura-slogan { font-size: 9px !important; } }
        @media (min-width: 1280px) { .lexura-slogan { font-size: 10px !important; } }`}</style>


      {/* ============================================================
        DESKTOP HEADER (Multi-Tier Layout)
      ============================================================ */}
      <div className={`${!isMobile ? 'block' : 'hidden'}`}>

        {/* TIER 0: Compact metadata bar (desktop only) */}
        <div className="bg-white" style={{ background: "#060D0D", borderBottom: "1px solid rgba(0,0,0,0.02)", padding: '3px 0', paddingRight: '0' }}>
          <div className="w-full flex h-5 items-center justify-end text-xs font-normal text-white pr-4">
            <nav className="flex items-center gap-0 text-xs font-normal text-white">
              <Tier0Dropdown label={<span className="text-xs font-normal">Canada</span>}>
                <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">USD</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">CAD</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">INR</DropdownMenuItem>
              </Tier0Dropdown>

              <Separator orientation="vertical" className="h-3 bg-gray-500 mx-2" />

              <Tier0Dropdown label={<span className="text-xs font-normal">USD</span>}>
                <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">USD</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">CAD</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">INR</DropdownMenuItem>
              </Tier0Dropdown>

              <Separator orientation="vertical" className="h-3 bg-gray-500 mx-2" />

              <Tier0Dropdown label={<span className="text-xs font-normal">English</span>}>
                <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">English</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">Español</DropdownMenuItem>
              </Tier0Dropdown>

              <Separator orientation="vertical" className="h-3 bg-gray-500 mx-2" />

              <Tier0Dropdown label={<div className="flex items-center gap-1"><Heart className="h-3 w-3 text-red-500 fill-red-500" /><span className="text-xs font-normal">My Favorites</span></div>}>
                <PlaceholderContent />
              </Tier0Dropdown>

              <Separator orientation="vertical" className="h-3 bg-gray-500 mx-2" />

              {/* Inline Lexura Wallet - use centralized WalletConnectButton component */}
              <div className="flex items-center gap-0 text-xs font-normal text-white outline-none hover:text-cyan-300">
                <WalletConnectButton label="Lexura Wallet" showLabel />
              </div>

              <Separator orientation="vertical" className="h-3 bg-gray-500 mx-2" />

              {/* Auth / Account */}
              {user ? (
                <Tier0Dropdown label={user.name || "My Account"} align="end">
                  <DropdownMenuItem onClick={() => navigate(user.role === "admin" ? "/admin-console" : "/user-console")} className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer hover:bg-red-500/20 focus:bg-red-500/20 hover:text-[#0D4654] text-xs">
                    <LogOut className="mr-2 h-3 w-3" />
                    Logout
                  </DropdownMenuItem>
                </Tier0Dropdown>
              ) : (
                <Tier0Dropdown label={<span className="text-xs font-normal">Sign In/Register</span>}>
                  <DropdownMenuItem onSelect={() => navigate("/auth")} className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">
                    Sign In
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => navigate("/auth")} className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs">
                    Register
                  </DropdownMenuItem>
                </Tier0Dropdown>
              )}

              <Separator orientation="vertical" className="h-3 bg-gray-500 mx-2" />

              {/* Inline cart link (no dropdown) */}
              <Link to="/cart" className="inline-block mr-0 hover:opacity-80 transition-opacity">
                <img src={CartIcon} alt="Cart" className="w-[1.7rem] h-[1.4rem] pr-1" />
              </Link>
            </nav>
          </div>
        </div>

        {/* TIER 1: Middle Bar - OPTIMIZED FOR SEARCH BAR SPACE */}
        <div className="bg-white" style={{ background: "#060D0D", borderBottom: "1px solid rgba(0,0,0,0.02)" }}>
          <div className="w-full flex h-9 items-center justify-end gap-1 lg:gap-0 xl:gap-0 pl-1 sm:pl-2 lg:pl-3 xl:pl-4 pr-4">
            {/* Left Side: Logo with Sparkles */}
            <Link to="/" className="transition-transform duration-300 hover:scale-105 flex-shrink-0 flex flex-col items-start mr-1 lg:mr-2 ml-2 relative">

              <img
                src={logo}
                alt="Lexura Domains"
                className="h-[1.9rem] sm:h-[2.15rem] md:h-[2.15rem] lg:h-[3.15rem] xl:h-[3.15rem] w-auto object-contain mt-[-0.6rem] lg:mt-[-0.8rem] xl:mt-[-0.9rem] mr-[0.1rem]"
              />
              <span
                className="lexura-slogan mt-[-0.5rem] lg:mt-[-0.5rem] xl:mt-[-0.5rem] ml-[5rem] lg:ml-[6rem] xl:ml-[7rem] text-[10px] lg:text-[11px] xl:text-[12px] whitespace-nowrap "
                style={{
                  fontFamily: "'Monotype Corsiva', cursive",
                  color: '#ffffff',
                  letterSpacing: '0.02em',
                  zIndex: 10,
                  position: 'relative'
                }}
              >
                The Gateway to Infinite Domains
              </span>
            </Link>


            {/* Center: Search Bar (shifted slightly to the right for tighter layout) */}
            <div className="flex-1 min-w-0 flex items-center justify-end">
              <div className="w-[50%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[90%] flex-shrink-0 flex items-center">
                <div className="flex items-center w-full">
                  {/* Oval-shaped Search Bar with Chathams Blue frame */}
                  <div className="flex items-center w-full">
                    <div className="w-full rounded-full p-1 shadow-xl flex items-center mb-1" style={{ boxShadow: '0 6px 18px rgba(0,0,0,0.12)', background: '#154F64', border: '2px solid #0d3847' }}>
                      {/* White inner track */}
                      <div className="flex-1 flex items-center bg-white rounded-full h-8 md:h-8 lg:h-9 px-3 min-w-0" style={{ boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.06)', border: '1px solid #c0c0c0' }}>
                        <div className="flex items-center flex-shrink-0 text-[#9aa0a6] pl-2 pr-2">
                          <img src={searchIconImg} alt="Search" className="h-5 w-5" />
                          <div className="h-6 w-px bg-gray-300 ml-3 mr-3" />
                        </div>
                        <input
                          aria-label="Search domains"
                          type="text"
                          placeholder="Search..."
                          value={headerSearch}
                          onChange={(e) => setHeaderSearch(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              const value = headerSearch.trim();
                              if (!value) return;
                              navigate(`/domains?search=${encodeURIComponent(value)}`);
                            }
                          }}
                          className="flex-1 min-w-0 bg-transparent outline-none text-[11px] md:text-[12px] text-black placeholder:text-[#9aa0a6]"
                        />
                      </div>

                      {/* Mic on blue area */}
                      <button
                        type="button"
                        aria-label="Voice Search"
                        onClick={() => {
                          // voice search placeholder: currently triggers the same search behavior
                          const value = headerSearch.trim();
                          if (!value) return;
                          navigate(`/domains?search=${encodeURIComponent(value)}`);
                        }}
                        className="ml-2 inline-flex items-center justify-center h-8 w-8 rounded-full text-white" style={{ background: '#0D4654' }}
                      >
                        <Mic className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Filter dropdown next to search bar */}
                  <DropdownMenu>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <DropdownMenuTrigger aria-label="Search Filters" className="flex items-center px-0 py-1 text-xs text-white hover:text-[#0D4654] flex-shrink-0 ml-1 lg:ml-2">
                            <img src={filterIconImg} alt="Filter" className="h-6 w-6 mr-0 transform scale-75" />
                            <DropdownCaret className="h-8 w-2" />
                          </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="text-xs">Search Filters</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <DropdownMenuContent className="bg-white text-black w-20 min-w-0 border border-gray-300">
                      <DropdownMenuItem onSelect={() => setSelectedFilter('All')} className="cursor-pointer hover:bg-gray-100 text-xs">All</DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setSelectedFilter('Crypto')} className="cursor-pointer hover:bg-gray-100 text-xs">Crypto</DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setSelectedFilter('Web2')} className="cursor-pointer hover:bg-gray-100 text-xs">Web2</DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setSelectedFilter('Premium')} className="cursor-pointer hover:bg-gray-100 text-xs">Premium</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>


            {/* Right Side: Quick Links */}
            <nav className="flex items-center justify-end gap-0 font-normal text-white flex-shrink-0 mr-0 pr-0 ml-3 lg:ml-4"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '13px' }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger className="hidden xl:flex items-center gap-0 whitespace-nowrap px-0 text-[10px] lg:text-xs font-normal text-white outline-none hover:text-[#0D4654]">
                  About Us
                  <DropdownCaret className="h-8 lg:h-9 w-2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="nav-panel-dark"><PlaceholderContent /></DropdownMenuContent>
              </DropdownMenu>

              <Separator orientation="vertical" className="hidden xl:block h-3 bg-gray-500 mx-2" />

              <DropdownMenu>
                <DropdownMenuTrigger className="hidden xl:flex items-center gap-0 whitespace-nowrap px-0 text-[10px] lg:text-xs font-normal text-white outline-none hover:text-[#0D4654]">
                  Buyer's Protection
                  <DropdownCaret className="h-8 lg:h-9 w-2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="nav-panel-dark"><PlaceholderContent /></DropdownMenuContent>
              </DropdownMenu>

              <Separator orientation="vertical" className="hidden xl:block h-3 bg-gray-500 mx-2" />

              <DropdownMenu>
                <DropdownMenuTrigger className="hidden lg:flex items-center gap-0 whitespace-nowrap px-0 text-[10px] lg:text-xs font-normal text-white outline-none hover:text-[#0D4654]">
                  Community
                  <DropdownCaret className="h-8 lg:h-9 w-2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="nav-panel-dark"><PlaceholderContent /></DropdownMenuContent>
              </DropdownMenu>

              <Separator orientation="vertical" className="hidden lg:block h-3 bg-gray-500 mx-2" />

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-0 whitespace-nowrap px-0 text-[10px] lg:text-xs font-normal text-white outline-none hover:text-[#0D4654]">
                  Support
                  <DropdownCaret className="h-8 lg:h-9 w-2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="nav-panel-dark"><PlaceholderContent /></DropdownMenuContent>
              </DropdownMenu>

              <Separator orientation="vertical" className="hidden md:block h-3 bg-gray-500 mx-2" />

              <Link to="/live-chat" className="hidden md:block hover:text-[#0D4654] text-white font-normal text-[10px] lg:text-xs px-0 whitespace-nowrap">Live chat</Link>

              <Separator orientation="vertical" className="hidden md:block h-3 bg-gray-500 mx-2" />

              <DropdownMenu>
                <DropdownMenuTrigger className="hidden md:flex items-center gap-0 whitespace-nowrap px-0 text-[10px] lg:text-xs font-normal text-white outline-none hover:text-[#0D4654] -space-x-1">
                  Connect with Us
                  <DropdownCaret className="h-8 lg:h-9 w-2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="nav-panel-dark"><PlaceholderContent /></DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        </div>

        {/* TIER 2: Bottom Bar (Main Navigation / Categories) */}
        <div
          className="bg-white"
          style={{
            background: "#060D0D",
            borderBottom: "1px solid rgba(0,0,0,0.02)",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.06)"
          }}
        >
          <div className="w-full flex h-8 items-center text-xs font-normal text-white"
            style={{ marginTop: '6px' }}>
            <div className="flex w-full items-center justify-end text-xs pr-4 ">
              {bottomNavLinks.map((link, index) => {
                let content;

                // NFT Launchpad: dropdown
                if (link.name === "NFT Launchpad") {
                  content = (
                    <div key={link.name} className="flex justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-xs font-normal whitespace-nowrap text-white hover:text-[#0D4654]">
                          NFT Launchpad
                          <DropdownCaret className="inline h-9 w-2" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="nav-panel-dark nav-content">
                          <ul className="grid w-[420px] gap-2 p-3">
                            <li>
                              <Link to="/nft-launchpad/create" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-normal leading-none text-white">
                                  <Rocket className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  Launch New Project
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Start a new NFT drop or fundraising launch
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/nft-launchpad" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-normal leading-none text-white">
                                  <Users className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  My Launches
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Manage your active and past launches
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/nft-launchpad/explore" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-normal leading-none text-white">
                                  <TrendingUp className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  Explore Launchpad
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Discover featured and upcoming launches
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/nft-launchpad/how-it-works" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-normal leading-none text-white">
                                  <BookOpen className="h-3 w-3" />
                                  How it Works
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Guide to launching and participating in drops
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  );
                }

                // Domains: dropdown
                if (link.name === "Domains") {
                  content = (
                    <div key={link.name} className="flex justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-xs font-semibold whitespace-nowrap text-white hover:text-[#0D4654]">
                          Domains
                          <DropdownCaret className="inline h-9 w-2" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="nav-panel-dark nav-content">
                          <ul className="grid w-[400px] gap-2 p-3">
                            <li>
                              <Link
                                to="/domains?tab=web3"
                                className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10"
                              >
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <Link2 className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  WEB3 Domains
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Blockchain domains like .crypto, .eth
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/domains?tab=originals"
                                className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10"
                              >
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <Globe className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  Originals (Web2 Domains)
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Traditional .com, .net domains
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  );
                }

                // AI Tools: dropdown with multiple tools
                if (link.name === "AI Tools") {
                  content = (
                    <div key={link.name} className="flex justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-xs font-semibold px-0 text-white hover:text-[#0D4654]">
                          AI Tools
                          <DropdownCaret className="inline h-9 w-2" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="nav-panel-dark nav-content">
                          <ul className="grid w-[500px] gap-2 p-3 md:grid-cols-2">
                            <li>
                              <Link to="/ai-domain-generator" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <Zap className="h-3 w-3 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                                  AI Domain Generator
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Generate unique domain names with AI
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/ai-roadmap-generator" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <Code className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  AI Roadmap Generator
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Get a 12-month roadmap to profitability
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/ai-business-plan-analyzer" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <BarChart className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  AI Business Plan Analyzer
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Evaluate, score & visualize your plan
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/ai-business-name-generator" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <Zap className="h-3 w-3 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                                  AI Business Name Generator
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Create unique business names with AI
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  );
                }

                // Services: dropdown
                if (link.name === "Services") {
                  content = (
                    <div key={link.name} className="flex justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-xs font-semibold px-0 text-white hover:text-[#0D4654]">
                          Services
                          <DropdownCaret className="inline h-9 w-2" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="nav-panel-dark nav-content">
                          <ul className="grid w-[400px] gap-2 p-3">
                            <li>
                              <Link to="/services" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <BarChart className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  Services Overview
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Complete overview of all our services
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/cloud-hosting" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <Globe className="h-3 w-3 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                                  Cloud Hosting
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Reliable Web3 domain hosting solutions
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/consultancy" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <Users className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  Consultancy
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Expert guidance for your Web3 journey
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/ai-outreach-campaigns" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <Zap className="h-3 w-3 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                                  AI Outreach
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Automated outreach campaigns
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  );
                }

                // Resources: dropdown
                if (link.name === "Resources") {
                  content = (
                    <div key={link.name} className="flex justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-xs font-semibold px-0 text-white hover:text-[#0D4654]">
                          Resources
                          <DropdownCaret className="inline h-9 w-2" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="nav-panel-dark nav-content">
                          <ul className="grid w-[400px] gap-2 p-3">
                            <li>
                              <Link to="/blog" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <BookOpen className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  Blog
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Latest insights and updates
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/our-story" className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-[#0D4654] focus:bg-white/10">
                                <div className="flex items-center gap-2 text-xs font-semibold leading-none text-white">
                                  <Heart className="h-3 w-3 transition-transform group-hover:scale-110" />
                                  Our Story
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                  Learn about our journey
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  );
                }

                // All other links
                if (!content) {
                  content = (
                    <div key={link.name} className="flex justify-center">
                      {link.dropdown ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger className="flex items-center gap-0 whitespace-nowrap px-0 text-xs font-semibold text-white hover:text-[#0D4654]">
                            {link.name}
                            {link.icon}
                            <DropdownCaret className="inline h-9 w-2" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="nav-panel-dark nav-content">
                            <PlaceholderContent />
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link to={link.path} className="flex items-center whitespace-nowrap px-0 text-xs font-semibold text-white hover:text-[#0D4654]">
                          {link.name}
                          {link.icon}
                        </Link>
                      )}
                    </div>
                  );
                }

                return (
                  <React.Fragment key={link.name}>
                    <div className="flex justify-center items-center">
                      {content}
                    </div>
                    {index < bottomNavLinks.length - 1 && <Separator orientation="vertical" className="h-3 bg-gray-500 mx-2" />}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
        MOBILE VIEW (Logo + Hamburger Icon -> triggers MobileNav sidebar)
      ============================================================ */}
      <div className={`${isMobile ? 'flex' : 'hidden'} container h-16 items-center justify-between px-4 relative`}
        style={{
          background: "#29333B",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.06)"
        }}
      >
        {/* Mobile Logo with Sparkles */}
        <Link to="/" className="transition-transform duration-300 hover:scale-105 flex-shrink-0 flex flex-col items-start mr-1 lg:mr-2 -ml-3 relative">
          {/* Tiny star sparkles for mobile */}
          <span className="absolute top-[-0.3rem] left-[2rem] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 2px #fff', animationDuration: '2s' }}></span>
          <span className="absolute top-[0.4rem] left-[0.5rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.5s', animationDelay: '0.5s' }}></span>
          <span className="absolute top-[-0.2rem] right-[3rem] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 2px #fff', animationDuration: '3s', animationDelay: '1s' }}></span>
          <span className="absolute top-[1rem] left-[5rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.2s', animationDelay: '0.3s' }}></span>
          <span className="absolute top-[0.2rem] right-[0.8rem] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 2px #fff', animationDuration: '2.8s', animationDelay: '0.7s' }}></span>
          <span className="absolute top-[0.6rem] left-[1.5rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.3s', animationDelay: '0.2s' }}></span>
          <span className="absolute top-[-0.4rem] left-[3.5rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.7s', animationDelay: '0.9s' }}></span>
          <span className="absolute top-[0.3rem] right-[1.8rem] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 2px #fff', animationDuration: '2.4s', animationDelay: '0.4s' }}></span>
          <span className="absolute top-[0.8rem] left-[3rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.6s', animationDelay: '0.6s' }}></span>
          <span className="absolute top-[-0.1rem] left-[4.5rem] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 2px #fff', animationDuration: '2.9s', animationDelay: '0.8s' }}></span>
          <span className="absolute top-[-0.5rem] left-[1rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.1s', animationDelay: '0.1s' }}></span>
          <span className="absolute top-[0.1rem] left-[2.8rem] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 2px #fff', animationDuration: '2.6s', animationDelay: '0.4s' }}></span>
          <span className="absolute top-[0.9rem] left-[0.3rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.8s', animationDelay: '0.6s' }}></span>
          <span className="absolute top-[-0.3rem] right-[1.2rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.4s', animationDelay: '0.8s' }}></span>
          <span className="absolute top-[0.5rem] right-[2.5rem] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 2px #fff', animationDuration: '2.7s', animationDelay: '0.3s' }}></span>
          <span className="absolute top-[1.1rem] left-[2.2rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.5s', animationDelay: '0.7s' }}></span>
          <span className="absolute top-[-0.2rem] left-[5.5rem] w-[2px] h-[2px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 2px #fff', animationDuration: '2.3s', animationDelay: '0.5s' }}></span>
          <span className="absolute top-[0.7rem] left-[4rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.9s', animationDelay: '0.2s' }}></span>
          <span className="absolute top-[0.4rem] right-[0.2rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.2s', animationDelay: '0.9s' }}></span>
          <span className="absolute top-[-0.4rem] left-[6rem] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse" style={{ boxShadow: '0 0 1px #fff', animationDuration: '2.6s', animationDelay: '0.4s' }}></span>

          <img
            src={logo}
            alt="Lexura Domains"
            className="h-[1.15rem] sm:h-[1.4rem] md:h-[1.9rem] lg:h-[2.4rem] xl:h-[2.9rem] w-auto object-contain mt-[-0.6rem] lg:mt-[-0.8rem] xl:mt-[-0.9rem] mr-[0.1rem]"
          />
          <span
            className="lexura-slogan mt-[-0.9rem] lg:mt-[-1rem] xl:mt-[-1.1rem] ml-[7rem] lg:ml-[8rem] xl:ml-[9rem] text-[9px] lg:text-[10px] xl:text-[11px] whitespace-nowrap"
            style={{
              fontFamily: "'Monotype Corsiva', cursive",
              color: '#ffffff',
              letterSpacing: '0.02em',
              zIndex: 10,
              position: 'relative'
            }}
          >
            The Gateway to Infinite Domains
          </span>
        </Link>
        {/* MobileNav component - Renders the hamburger icon and handles the sidebar */}
        <MobileNav />
      </div>
    </header >
  );
};
