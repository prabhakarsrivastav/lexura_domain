import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import "boxicons-react/styles";
import DropdownCaret from './DropdownCaret';

import metamaskLogo from '@/assets/icons/metamask-logo.png';
import web3Image from "../../assets/logo2/lestsection/weeeeb3.png";

import { VisaLogo, MastercardLogo, AmexLogo, DiscoverLogo, PayPalLogo, ApplePayLogo, StripeLogo, BitcoinLogo, EthereumLogo, CoinbaseLogo } from './PaymentLogos';



// Function to get icon for social media name
const getIcon = (name: string) => {
  const iconMap: { [key: string]: string } = {
    'Facebook': 'facebook.png',
    'YouTube': 'youtube.png',
    'WhatsApp': 'whatsapp.png',
    'Instagram': 'instagram.png',
    'TikTok': 'tiktok.png',
    'WeChat': 'wechat.png',
    'Telegram': 'telegram.png',
    'Messenger': 'messenger.png',
    'Snapchat': 'snapchat.png',
    'Reddit': 'reddit.png',
    'Pinterest': 'pinterest.png',
    'X (Twitter)': 'x-twitter.png',
    'Teams': 'teams.png',
    'LinkedIn': 'linkedin.png',
    'Vimeo': 'vimeo.png',
    'Twitch': 'twitch.png',
    'Discord': 'discord.png',
    'Tumblr': 'tumblr.png',
    'Skype': 'skype.png',
    'Vkontakte': 'vkontakte.png',
    'Medium': 'medium.png',
    'Blogger': 'blogger.png',
    'Dribbble': 'dribbble.png', // Assuming dribbble might exist or fallback
    'Weibo': 'weibo.png', // Assuming weibo might exist or fallback
    'Quora': 'quora.png',
    'Threads': 'threads.png',
    'Line': 'line.png',
    'Rumble': 'rumble.png',
    'Meituan-Dianping': 'meituan-dianping.png', // Check if this exists later
    'Badoo': 'badoo.png', // Check if exists
    'Bilibili': 'bilibili.png', // Check if exists
    'Douban': 'douban.png', // Check if exists
    'Baidu Tieba': 'baidu-tieba.png', // Check if exists
    'Xiaohongshu (Little Red Book)': 'xiaohongshu-little-red-book.png', // Likely not exact match
    'Zhihu': 'zhihu.png', // Check if exists
    'Meetup': 'meetup.png', // Check if exists
    'Nextdoor': 'nextdoor.png', // Check if exists
    'Renren': 'renren.png', // Check if exists
    'Xing': 'xing.png', // Check if exists
    'Mastodon': 'mastodon.png',
    'Kuaishou': 'kuaishou.png', // Check if exists
    'Bluesky': 'bluesky.png', // Check if exists
    'Live Journal': 'live-journal.png', // Check if exists
    'Viber': 'viber.png', // Check if exists
    'Tinder': 'tinder.png', // Check if exists
    'Clubhouse': 'clubhouse.png', // Check if exists
    'Behance': 'behance.png',
    'MySpace': 'myspace.png',
    'DeepSeek': 'deepseek.png'
  };

  const fileName = iconMap[name];

  if (fileName) {
    return <img src={`/images/socials/${fileName}`} alt={name} className="w-[35px] h-[45px] object-contain" onError={(e) => {
      // Fallback to text if image fails to load
      e.currentTarget.style.display = 'none';
      e.currentTarget.parentElement?.appendChild(document.createTextNode(name));
    }} />;
  }

  return <span className="text-blue-600 text-xs">{name}</span>;
};



// --- Helpers for Section 1 (Light Multi-Column Footer) ---



const MultiColumnLink = ({ to, children, className = "" }: {

  to: string;

  children: React.ReactNode;

  className?: string;

}) => (

  <Link to={to} className={`text-[#888a98] hover:text-[#888a98] hover:underline text-xs sm:text-sm mb-1 whitespace-nowrap ${className}`} style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>

    {children}

  </Link>

);



const MultiColumnTitle = ({ children }: { children: React.ReactNode }) => (

  <h3 className="text-white font-bold text-base mb-2 whitespace-nowrap">

    {children}

  </h3>

);



const MultiColumnSubTitle = ({ children }: { children: React.ReactNode }) => (

  <h4 className="text-white  font-semibold text-sm mt-4 mb-2">

    {children}

  </h4>

);



const MultiColumnText = ({ children }: { children: React.ReactNode }) => (

  <p className="text-[#888a98] text-[15px] mb-1 mt-4">

    {children}

  </p>

);



// --- Helpers for Section 2 (Dark Row-Based Footer) ---



const RowLink = ({ to, children }: { to: string, children: React.ReactNode }) => (

  <Link to={to} className="text-[#a1a4a8] hover:text-gray-300 hover:underline whitespace-nowrap">

    {children}

  </Link>

);





// --- Main Combined Footer Component ---



export const Footer = () => {

  const [memberDropdown, setMemberDropdown] = useState(false);

  const [collectionDropdown, setCollectionDropdown] = useState(false);

  const footerSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!footerSectionRef.current) return;
    const container = footerSectionRef.current;

    const updateSeparators = () => {
      const rows = container.querySelectorAll<HTMLElement>("[data-footer-row]");

      rows.forEach((row) => {
        const wrapper = row.querySelector('.flex.flex-wrap');
        if (!wrapper) return;

        const items = Array.from(wrapper.querySelectorAll<HTMLElement>('span.flex.items-center'));

        // Reset all separators before recalculating
        items.forEach((item) => {
          const sep = item.querySelector<HTMLElement>('.footer-sep');
          if (sep) sep.style.display = "";
        });

        // Group items by line using their top positions
        const groups: HTMLElement[][] = [];
        items.forEach((item) => {
          const y = Math.round(item.getBoundingClientRect().top);
          const group = groups.find((g) => Math.abs(y - Math.round(g[0].getBoundingClientRect().top)) < 5);
          if (group) group.push(item);
          else groups.push([item]);
        });

        // Fix left-side separators per line
        const wrapperRect = wrapper.getBoundingClientRect();
        const contentLeft = wrapperRect.left;
        const EDGE_TOL = Math.max(6, Math.round(wrapperRect.width * 0.008));

        groups.forEach((line) => {
          if (line.length === 0) return;

          // FIRST ITEM: always hide left separator
          const first = line[0];
          const firstSep = first.querySelector<HTMLElement>('.footer-sep');
          if (firstSep) firstSep.style.display = "none";

          // Check each separator so extreme-left and extreme-right are hidden
          line.forEach((item) => {
            const sep = item.querySelector<HTMLElement>('.footer-sep');
            if (!sep) return;

            const r = sep.getBoundingClientRect();
            const center = (r.left + r.right) / 2;

            if (
              r.left <= contentLeft + EDGE_TOL ||
              center <= contentLeft + EDGE_TOL
            ) {
              sep.style.display = "none";
            }
          });
        });
      });
    };

    updateSeparators();
    setTimeout(() => updateSeparators(), 120);

    const onResize = () => requestAnimationFrame(updateSeparators);
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    const obs = new MutationObserver(() => requestAnimationFrame(updateSeparators));
    obs.observe(container, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      obs.disconnect();
    };
  }, []);



  // --- Data for Section 2 ---

  const connectLinks = [

    { name: "Facebook", path: "/" },

    { name: "YouTube", path: "/" },

    { name: "WhatsApp", path: "/" },

    { name: "Instagram", path: "/" },

    { name: "TikTok", path: "/" },

    { name: "WeChat", path: "/" },

    { name: "Telegram", path: "/" },

    { name: "Messenger", path: "/" },

    { name: "Snapchat", path: "/" },

    { name: "Reddit", path: "/" },

    { name: "Pinterest", path: "/" },

    { name: "X (Twitter)", path: "/" },

    { name: "Quora", path: "/" },

    { name: "Teams", path: "/" },

    { name: "LinkedIn", path: "/" },

    { name: "Vimeo", path: "/" },

    { name: "Threads", path: "/" },

    { name: "Twitch", path: "/" },

    { name: "Discord", path: "/" },

    { name: "Line", path: "/" },

    { name: "Tumblr", path: "/" },

    { name: "DeepSeek", path: "/" },

    { name: "Vkontakte", path: "/" },

    { name: "Rumble", path: "/" },

    { name: "Medium", path: "/" },

    { name: "Behance", path: "/" },

    { name: "Blogger", path: "/" },

    { name: "Mastodon", path: "/" },

    { name: "MySpace", path: "/" },

    { name: "Skype", path: "/" }

  ];



  // Split into two balanced rows

  const half = Math.ceil(connectLinks.length / 2);

  const connectLinksRow1 = connectLinks.slice(0, half);

  const connectLinksRow2 = connectLinks.slice(half);



  const businessLinks = [

    { name: "Rushcape, Inc®", path: "/" }, { name: "RushTube, Inc®", path: "/" },

    { name: "Lexura, Inc®", path: "/" }

  ];



  const regionalLinks = [

    { name: "Africa", path: "/" }, { name: "Americas", path: "/" }, { name: "Asia", path: "/" },

    { name: "Caribbean", path: "/" }, { name: "Central America", path: "/" }, { name: "Europe", path: "/" },

    { name: "Latin America", path: "/" }, { name: "Mediterranean", path: "/" }, { name: "Middle East", path: "/" },

    { name: "North America", path: "/" }, { name: "Oceania", path: "/" }, { name: "Pacific Rim", path: "/" },

    { name: "Polar Regions", path: "/" }, { name: "South America", path: "/" }, { name: "UK", path: "/" },

    { name: "USA", path: "/" }, { name: "UAE", path: "/" }, { name: "Canada", path: "/" }, { name: "India", path: "/" },

    { name: "China", path: "/" }, { name: "Russia", path: "/" }, { name: "Japan", path: "/" }, { name: "Italy", path: "/" },

    { name: "Germany", path: "/" }, { name: "Spain", path: "/" }, { name: "France", path: "/" },

    { name: "Portugal", path: "/" }, { name: "Greece", path: "/" }, { name: "Hungary", path: "/" },

    { name: "Turkey", path: "/" }, { name: "Poland", path: "/" }, { name: "Ukraine", path: "/" },

    { name: "Austria", path: "/" }, { name: "Belgium", path: "/" }, { name: "Sweden", path: "/" },

    { name: "Denmark", path: "/" }, { name: "Finland", path: "/" }, { name: "Switzerland", path: "/" },

    { name: "Australia", path: "/" }, { name: "Mexico", path: "/" }, { name: "Brazil", path: "/" },

    { name: "Venezuela", path: "/" }, { name: "Argentina", path: "/" }, { name: "Columbia", path: "/" },

    { name: "Bangladesh", path: "/" }, { name: "Indonesia", path: "/" }, { name: "Malaysia", path: "/" },

    { name: "Thailand", path: "/" }, { name: "Philippines", path: "/" }, { name: "Vietnam", path: "/" },

    { name: "South Korea", path: "/" }, { name: "North Korea", path: "/" }, { name: "Iran", path: "/" },

    { name: "Iraq", path: "/" }, { name: "Afghanistan", path: "/" }, { name: "Pakistan", path: "/" },

    { name: "Saudi Arabia", path: "/" }, { name: "Egypt", path: "/" }, { name: "Ethiopia", path: "/" },

    { name: "South Africa", path: "/" }

  ];



  const worldLinks = [

    { name: "English", path: "/" }, { name: "Français", path: "/" }, { name: "Español", path: "/" },

    { name: "Português", path: "/" }, { name: "Deutsch", path: "/" }, { name: "Italiano", path: "/" },

    { name: "Català", path: "/" }, { name: "Русский", path: "/" }, { name: "Polski", path: "/" },

    { name: "Čeština", path: "/" }, { name: "Slovenian", path: "/" }, { name: "Dutch", path: "/" },

    { name: "Ελληνικά", path: "/" }, { name: "Türkçe", path: "/" }, { name: "Български", path: "/" },

    { name: "Magyar", path: "/" }, { name: "فارسی", path: "/" }, { name: "Hrvatski", path: "/" },

    { name: "Română", path: "/" }, { name: "Українська", path: "/" }, { name: "Dansk", path: "/" },

    // --- THIS WAS THE LINE WITH THE ERROR ---

    { name: "Suomi", path: "/" }, { name: "Gaeilge", path: "/" }, { name: "Íslenska", path: "/" },

    { name: "中文", path: "/" }, { name: "日本語", path: "/" }, { name: "한국어", path: "/" },

    { name: "Tiếng Việt", path: "/" }, { name: "ภาษาไทย", path: "/" }, { name: "Filipino", path: "/" },

    { name: "Tagalog", path: "/" }, { name: "Indonesian", path: "/" }, { name: "Afrikaans", path: "/" },

    { name: "العربية", path: "/" }, { name: "עברית", path: "/" }, { name: "اردو", path: "/" },

    { name: "हिन्दी", path: "/" }, { name: "தமிழ்", path: "/" }, { name: "తెలుగు", path: "/" },

    { name: "বাংলা", path: "/" }, { name: "ਪੰਜਾਬੀ", path: "/" }, { name: "ગુજરાતી", path: "/" },

    { name: "Melayu", path: "/" }, { name: "മലയാളം", path: "/" }, { name: "සිංհල", path: "/" }

  ];



  const paymentIcons = [

    <VisaLogo />,

    <MastercardLogo />,

    <AmexLogo />,

    <DiscoverLogo />,

    <PayPalLogo />,

    <ApplePayLogo />,

    <StripeLogo />,

    <BitcoinLogo />,

    <EthereumLogo />,

    <CoinbaseLogo />

  ];

  // UNIVERSAL FLEX-WRAP SAFE SEPARATOR ROW (span-based implementation)
  const SeparatorRow = ({
    title,
    links,
    smallText = [],
    separatorChar = '|',
    separatorGapRem = '0.6rem',
    rowMarginBottom = '0.9rem',
    titleMinWidth = 'min-w-[4rem]',
    separatorClassName = ''
  }: {
    title: string;
    links: { name: string; path: string }[];
    smallText?: string[];
    separatorChar?: string;
    separatorGapRem?: string;
    rowMarginBottom?: string;
    titleMinWidth?: string;
    separatorClassName?: string;
  }) => (
    <div data-footer-row className="text-[15px] leading-tight" style={{ marginBottom: rowMarginBottom }}>
      <div className="flex flex-wrap items-center">

        {/* Title */}
        <span className={`font-semibold text-[15px] text-[#D7D7D7] whitespace-nowrap ${title === "Businesses:" || title === "Regional:" || title === "World:" ? "mr-2" : "mr-0"} ${titleMinWidth}`}>
          {title}
        </span>        {/* Items */}
        {links.map((link, index) => (
          <span key={index} className="flex items-center whitespace-nowrap">

            {/* Separator */}
            {index > 0 && (
              <span className={`footer-sep text-gray-400 text-xs opacity-60 ${separatorClassName}`}
                style={{ margin: `0 ${separatorGapRem}` }}>
                {separatorChar}
              </span>
            )}

            <span className={smallText.includes(link.name) ? "text-[13px]" : ""}>
              <RowLink to={link.path}>{link.name}</RowLink>
            </span>
          </span>
        ))}

        {/* RIGHT separator (optional but you kept it) */}
        <span className={`footer-sep text-gray-400 text-xs opacity-60 ${separatorClassName}`}
          style={{ margin: `0 ${separatorGapRem}` }}>
          {separatorChar}
        </span>

        {/* MORE >> */}
        <span className="text-[#C00000] inline-flex items-center whitespace-nowrap">
          More <span className="ml-1">&gt;&gt;</span>
        </span>

      </div>
    </div>
  );





  return (

    <footer className="mt-0 relative z-0">

      {/* SECTION 1: Multi-Column Footer (FIXED: Light Theme) */}

      <section className="relative bg-[#1C1C1C] pt-6 sm:pt-8 pb-2 sm:pb-4 border-t border-gray-200">

        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-5 sm:gap-y-6">



            {/* Column 1: Company */}

            <div>

              <h4 className="font-bold text-[10px] sm:text-[12px] mb-1 whitespace-nowrap text-white" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>COMPANY</h4>

              <ul>

                <li><MultiColumnLink to="/">About Us</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Press Releases</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Jobs & Careers</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Executive Team</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Ethics and Values</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Investor Relations</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Business Locations</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Hours of Operation</MultiColumnLink></li>

              </ul>

            </div>



            {/* Column 2: Our Services */}

            <div>

              <h4 className="font-bold text-[10px] sm:text-[12px] mb-1 whitespace-nowrap text-white" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>OUR SERVICES</h4>

              <ul>

                <li><MultiColumnLink to="/">Cloud Web3 Hosting</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Tokenomics Advisory</MultiColumnLink></li>

                <li><MultiColumnLink to="/">API & White-Label Solutions</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Web3 App & SaaS Consultancy</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Web3 Compliance & Legal Pack</MultiColumnLink></li>

              </ul>

            </div>



            {/* Column 3: LD Marketplace */}

            <div>

              <h4 className="font-bold text-[10px] sm:text-[12px] mb-1 whitespace-nowrap text-white" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>LD MARKETPLACE</h4>

              <ul>

                <li><MultiColumnLink to="/">Domain Leasing</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Browse Domains</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Sell Your Domain</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Premium Listings</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Seller Dashboard</MultiColumnLink></li>

                <li><MultiColumnLink to="/">AI Domain Generator</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Admin Console Dashboard</MultiColumnLink></li>

                <li><MultiColumnLink to="/">AI Business Name Generator</MultiColumnLink></li>

              </ul>

              <h5 className="font-semibold text-[10px] sm:text-[12px] mt-3 sm:mt-5 mb-1 text-white" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>PARTNER WITH LD</h5>

              <ul>

                <li><MultiColumnLink to="/">Advertise with Us</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Affiliate / Reseller</MultiColumnLink></li>

                <li><MultiColumnLink to="/">International Reseller</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Become a LD Member</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Submission Guidelines</MultiColumnLink></li>

              </ul>

            </div>



            {/* Column 4: My LD (with "ditto" layout) */}

            <div>

              <h4 className="font-bold text-[10px] sm:text-[12px] mb-1 whitespace-nowrap text-white" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>MY LD</h4>

              <ul>

                <li><MultiColumnLink to="/">My Wallet</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Profile</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Account</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Reviews</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Domains</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Favorites</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Switch Account</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Permissions</MultiColumnLink></li>

                <li><MultiColumnLink to="/">RushTube's App</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Membership</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Notifications</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Subscriptions</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Payment Methods</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Credit Balance</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Order Cancellations</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Account Security</MultiColumnLink></li>

                <li><MultiColumnLink to="/">My Browsing History</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Coupons & Discounts</MultiColumnLink></li>

                <li>
                  <div className="flex items-center cursor-pointer" onClick={() => setMemberDropdown(!memberDropdown)}>
                    <span className="text-[#888a98] text-xs sm:text-sm mb-1 whitespace-nowrap leading-none" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>Member's Exclusives</span>
                    <DropdownCaret className="w-3 h-3 -ml-0.5 text-[#888a98]" />
                  </div>

                  {memberDropdown && <ul className="ml-4">

                    <li className="flex items-center mb-1">

                      <span className="text-white text-sm">•</span>

                      <MultiColumnLink to="/" className="ml-2">Lexura Family</MultiColumnLink>

                    </li>

                    <li className="flex items-center mb-1">

                      <span className="text-white text-sm">•</span>

                      <MultiColumnLink to="/" className="ml-2">RushTube Family</MultiColumnLink>

                    </li>

                    <li className="flex items-center mb-1">

                      <span className="text-white text-sm">•</span>

                      <MultiColumnLink to="/" className="ml-2">RushTube Family</MultiColumnLink>

                    </li>

                  </ul>

                  }

                </li>

                <li>
                  <div className="flex items-center cursor-pointer" onClick={() => setCollectionDropdown(!collectionDropdown)}>
                    <span className="text-[#888a98] text-xs sm:text-sm mb-1 whitespace-nowrap leading-none" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>LD Curated Collections</span>
                    <DropdownCaret className="w-3 h-3 -ml-0.5 text-[#888a98]" />
                  </div>

                  {collectionDropdown && <ul className="ml-4">

                    <li className="flex items-center mb-1">

                      <span className="text-white text-sm">•</span>

                      <MultiColumnLink to="/" className="ml-2">DNS Collections</MultiColumnLink>

                    </li>

                    <li className="flex items-center mb-1">

                      <span className="text-white text-sm">•</span>

                      <MultiColumnLink to="/" className="ml-2">Web3 Collections</MultiColumnLink>

                    </li>

                  </ul>

                  }

                </li>

              </ul>

            </div>



            {/* Column 5: Support */}

            <div>

              <h4 className="font-bold text-[10px] sm:text-[12px] mb-1 whitespace-nowrap text-white" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>SUPPORT</h4>

              <ul>

                <li><MultiColumnLink to="/">Live Chat</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Help Desk</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Contact Us</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Report A Bug/Spam</MultiColumnLink></li>

              </ul>

              <h5 className="font-semibold text-[10px] sm:text-[12px] mt-3 sm:mt-5 mb-1 text-white" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>COMMUNITY</h5>

              <ul>

                <li><MultiColumnLink to="/">Blogs</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Forums</MultiColumnLink></li>

                <li><MultiColumnLink to="/">RushVoice</MultiColumnLink></li>

              </ul>

              <h5 className="font-semibold text-[10px] sm:text-[12px] mt-3 sm:mt-5 mb-1 text-white" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>RESOURCES</h5>

              <ul>

                <li><MultiColumnLink to="/">FAQs</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Media</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Guides</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Articles</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Tutorials</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Reference</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Knowledgebase</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Helpful Weblinks</MultiColumnLink></li>

                <li><MultiColumnLink to="/">News and Events</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Media Listing Policy</MultiColumnLink></li>

              </ul>

            </div>



            {/* Column 6: Legal */}

            <div>

              <h4 className="font-bold text-[10px] sm:text-[12px] mb-1 whitespace-nowrap text-white" style={{ fontFamily: '"Satoshi Variable Medium", sans-serif' }}>LEGAL</h4>

              <ul>

                <li><MultiColumnLink to="/">Enquiry</MultiColumnLink></li>

                <li><MultiColumnLink to="/">API Policy</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Terms of Use</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Privacy Policy</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Cookie Notice</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Copyright Policy</MultiColumnLink></li>

                <li><MultiColumnLink to="/">License Summary</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Interest-Based Ads</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Media Listing Policy</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Domain Listing Policy</MultiColumnLink></li>

                <li><MultiColumnLink to="/">User Information Legal</MultiColumnLink></li>

                <li><MultiColumnLink to="/">Intellectual Property Rights</MultiColumnLink></li>

              </ul>

            </div>

          </div>

        </div>

        {/* Web3 Logo at Bottom Left Corner */}
        <div className="absolute bottom-4 left-4 flex-shrink-0">
          <img
            src={web3Image}
            alt="Web 3.0"
            className="h-[14.5rem] sm:h-[17.1rem] md:h-[19.7rem] lg:h-[22.3rem] w-auto rounded-md opacity-100 hover:opacity-100 transition-opacity cursor-pointer"
          />
        </div>

        {/* MetaMask Logo at Bottom Right Corner */}
        <div className="absolute bottom-2 right-4 flex-shrink-0">
          <img
            src={metamaskLogo}
            alt="MetaMask"
            className="h-12 sm:h-16 w-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
          />
        </div>

      </section>



      {/* SECTION 2: Row-Based Footer (Dark Theme) */}

      {/* SECTION 2: Row-Based Footer (Dark Theme) */}
      <section id="footer-rows" className="relative bg-[#202224] text-white border-t border-gray-700">
        <div ref={footerSectionRef as any} className="container mx-auto px-4 py-4">

          {/* Connect */}
          <div data-footer-row="connect" style={{ marginBottom: '0.65rem' }}>
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              <span className="font-semibold text-[15px] text-[#D7D7D7] whitespace-nowrap mr-2 min-w-[3rem]">Connect with Us:</span>
              <div className="flex gap-3 items-center">
                {connectLinks.map((link, index) => (
                  <RowLink to={link.path} key={index}>{getIcon(link.name)}</RowLink>
                ))}
              </div>
            </div>
          </div>

          {/* Businesses */}
          <div data-footer-row="businesses">
            <SeparatorRow title="Businesses:" links={businessLinks} smallText={[]} separatorChar={'—'} separatorGapRem={'0.6rem'} rowMarginBottom={'0.9rem'} separatorClassName={'text-base'} />
          </div>

          {/* Regional */}
          <div data-footer-row="regional">
            <SeparatorRow title="Regional:" links={regionalLinks} smallText={["UK", "USA", "UAE"]} separatorGapRem={'0.6rem'} rowMarginBottom={'0.9rem'} />
          </div>

          {/* World */}
          <div data-footer-row="world">
            <SeparatorRow title="World:" links={worldLinks} smallText={[]} separatorGapRem={'0.6rem'} rowMarginBottom={'0.9rem'} titleMinWidth={'min-w-[3rem]'} />
          </div>

          {/* Thin divider just below the World submenu (very small, subtle) */}
          <div className="w-full" aria-hidden="true">
            <div className="mx-0 my-2 h-[1px] w-full" style={{ background: '#2f3438', opacity: 0.9 }} />
          </div>

          {/* Payment */}
          {/* increased top margin by ~50% to add more breathing room below the World section */}
          <div className="mt-10  flex justify-end items-center gap-2 text-sm text-white">
            <span className="font-bold">We Accept:</span>
            <div className="flex items-center gap-1.5">
              {paymentIcons.map((icon, i) => <div key={i}>{icon}</div>)}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="bg-[#29333B] text-white py-2 border-t border-[#333B47]
        [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        [background-size:3px_3px]">

          <div className="container mx-auto px-4 flex items-center justify-center text-[15px]">
            <div>
              <span>Copyright © 2023, Lexura Domains - A Division of Lexura, Inc®.</span>
              <span className="ml-1">All rights reserved.</span>
            </div>
          </div>
        </div>
      </section>





      {/* SECTION 2: Row-Based Footer (Dark Theme) */}

    </footer>

  );

};
