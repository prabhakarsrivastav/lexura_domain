import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBuilding, FaTasks, FaShoppingCart, FaUser, FaHeadset, FaGavel, FaUsers, FaDatabase } from 'react-icons/fa'; // Icons for buttons and sections
import DropdownCaret from './DropdownCaret';

// Import custom menu icon
import menuIcon from "@/assets/icons/menu-icon.png";
import { Radius } from "lucide-react";

// --- Helper components moved from Footer ---

const MultiColumnLink = ({ to, children, className = "" }: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link to={to} className={`block text-white hover:text-white hover:underline text-xs py-1 px-3 ${className}`}>
    {children}
  </Link>
);

// --- Main Sidebar Component ---

export const FloatingSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [bottomOffset, setBottomOffset] = useState<number>(24);
  const [expandedSubs, setExpandedSubs] = useState({
    partner: false,
  });


  const handleSectionClick = (sectionName: string) => {
    setActiveSection(prev => (prev === sectionName ? null : sectionName));
  };

  const sections = [
    { name: 'company', label: 'COMPANY', icon: FaBuilding, color: 'text-cyan-300' },
    { name: 'services', label: 'OUR SERVICES', icon: FaTasks, color: 'text-blue-300' },
    { name: 'marketplace', label: 'LD MARKETPLACE', icon: FaShoppingCart, color: 'text-green-300' },
    { name: 'myld', label: 'MY LD', icon: FaUser, color: 'text-purple-300' },
    { name: 'support', label: 'SUPPORT', icon: FaHeadset, color: 'text-yellow-300' },
    { name: 'community', label: 'COMMUNITY', icon: FaUsers, color: 'text-orange-300' },
    { name: 'resources', label: 'RESOURCES', icon: FaDatabase, color: 'text-emerald-300' },
    { name: 'legal', label: 'LEGAL', icon: FaGavel, color: 'text-red-300' },
  ];

  const getSectionContent = (sectionName: string) => {
    switch (sectionName) {
      case 'company':
        return (
          <ul className="rounded-lg mt-2 p-3 space-y-2 animate-fadeIn" style={{ background: '#29333B', border: '1px solid rgba(255,255,255,0.08)' }}>
            <li><MultiColumnLink to="/">About Us</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Press Releases</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Jobs & Careers</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Executive Team</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Ethics and Values</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Investor Relations</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Business Locations</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Hours of Operation</MultiColumnLink></li>
          </ul>
        );
      case 'services':
        return (
          <ul className="rounded-lg mt-2 p-3 space-y-2 animate-fadeIn" style={{ background: '#29333B', border: '1px solid rgba(255,255,255,0.08)' }}>
            <li><MultiColumnLink to="/">Cloud Web3 Hosting</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Tokenomics Advisory</MultiColumnLink></li>
            <li><MultiColumnLink to="/">API & White-Label Solutions</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Web3 App & SaaS Consultancy</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Web3 Compliance & Legal Pack</MultiColumnLink></li>
          </ul>
        );
      case 'marketplace':
        return (
          <div className="rounded-lg mt-2 p-3 animate-fadeIn" style={{ background: '#29333B', border: '1px solid rgba(255,255,255,0.08)' }}>
            <ul className="space-y-2">
              <li><MultiColumnLink to="/">Domain Leasing</MultiColumnLink></li>
              <li><MultiColumnLink to="/">Browse Domains</MultiColumnLink></li>
              <li><MultiColumnLink to="/">Sell Your Domain</MultiColumnLink></li>
              <li><MultiColumnLink to="/">Premium Listings</MultiColumnLink></li>
              <li><MultiColumnLink to="/">Seller Dashboard</MultiColumnLink></li>
              <li><MultiColumnLink to="/">AI Domain Generator</MultiColumnLink></li>
              <li><MultiColumnLink to="/">Admin Console Dashboard</MultiColumnLink></li>
              <li><MultiColumnLink to="/">AI Business Name Generator</MultiColumnLink></li>
            </ul>
            <button
              onClick={() => setExpandedSubs(prev => ({ ...prev, partner: !prev.partner }))}
              className="w-full flex justify-between items-center font-semibold text-xs p-2 mt-3 rounded-lg cursor-pointer bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
            >
              <span>PATTERN WITH LD</span>
              {expandedSubs.partner ? <DropdownCaret className="w-3 h-3 transform rotate-180" /> : <DropdownCaret className="w-3 h-3" />}
            </button>
            {expandedSubs.partner && (
              <ul className="pl-4 mt-2 space-y-1 animate-slideDown">
                <li><MultiColumnLink to="/">Advertise with Us</MultiColumnLink></li>
                <li><MultiColumnLink to="/">Affiliate / Reseller</MultiColumnLink></li>
                <li><MultiColumnLink to="/">International Reseller</MultiColumnLink></li>
                <li><MultiColumnLink to="/">Become a LD Member</MultiColumnLink></li>
                <li><MultiColumnLink to="/">Submission Guidelines</MultiColumnLink></li>
              </ul>
            )}
          </div>
        );
      case 'myld':
        return (
          <div className="rounded-lg mt-2 p-3 animate-fadeIn" style={{ background: '#29333B', border: '1px solid rgba(255,255,255,0.08)' }}>
            <ul className="space-y-2">
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
              <li><p className="text-white text-sm py-2 px-4">Coupons & Discounts</p></li>
            </ul>
            <div className="mt-3">
              <h5 className="font-semibold pl-4 text-xs text-white mb-2">Member's Exclusives</h5>
              <ul className="pl-4 space-y-1">
                <li> <MultiColumnLink to="/">• Lexura Family</MultiColumnLink></li>
                <li> <MultiColumnLink to="/">• Rushcape Family</MultiColumnLink></li>
                <li><MultiColumnLink to="/">• RushTube Family</MultiColumnLink></li>
              </ul>
            </div>
            <div className="mt-3">
              <h5 className="font-semibold text-xs pl-4 text-white mb-2">LD Curated Collections</h5>
              <ul className="pl-4 space-y-1">
                <li> <MultiColumnLink to="/">• DNS Collections</MultiColumnLink></li>
                <li> <MultiColumnLink to="/"> • Web3 Collections</MultiColumnLink></li>
              </ul>
            </div>

          </div>
        );
      case 'support':
        return (
          <ul className="rounded-lg mt-2 p-3 space-y-2 animate-fadeIn" style={{ background: '#29333B', border: '1px solid rgba(255,255,255,0.08)' }}>
            <li><MultiColumnLink to="/">Live Chat</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Help Desk</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Contact Us</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Report A Bug/Spam</MultiColumnLink></li>
          </ul>
        );
      case 'community':
        return (
          <ul className="rounded-lg mt-2 p-3 space-y-2 animate-fadeIn" style={{ background: '#29333B', border: '1px solid rgba(255,255,255,0.08)' }}>
            <li><MultiColumnLink to="/">Blogs</MultiColumnLink></li>
            <li><MultiColumnLink to="/">Forums</MultiColumnLink></li>
            <li><MultiColumnLink to="/">RushVoice</MultiColumnLink></li>
          </ul>
        );
      case 'resources':
        return (
          <ul className="rounded-lg mt-2 p-3 space-y-2 animate-fadeIn" style={{ background: '#29333B', border: '1px solid rgba(255,255,255,0.08)' }}>
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
        );
      case 'legal':
        return (
          <ul className="rounded-lg mt-2 p-3 space-y-2 animate-fadeIn" style={{ background: '#29333B', border: '1px solid rgba(255,255,255,0.08)' }}>
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
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const compute = () => {
      const footer = document.getElementById('footer-rows');
      if (!footer) { setBottomOffset(24); return; }
      const rect = footer.getBoundingClientRect();
      // distance from bottom of viewport to top of footer
      const distance = Math.round(window.innerHeight - rect.top);
      const offset = Math.max(16, distance + 8); // leave a little space above the line
      setBottomOffset(offset);
    };

    compute();
    window.addEventListener('resize', compute);
    window.addEventListener('scroll', compute);
    return () => {
      window.removeEventListener('resize', compute);
      window.removeEventListener('scroll', compute);
    };
  }, []);

  return (
    <>
      {/* --- Enhanced Floating Action Button --- */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-40 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500
             hover:from-cyan-600 hover:via-teal-600 hover:to-blue-600
             text-white rounded-md shadow-2xl
             transition-all duration-300 ease-in-out hover:shadow-3xl
             flex items-center justify-center"
        style={{
          bottom: `${bottomOffset}px`,
          left: '1rem',
          width: '50px',
          height: '50px'
        }}
        aria-label="Open menu"
      >
        <img
          src={menuIcon}
          alt="Menu"
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'contain',
            borderRadius: '19%'
          }}
        />
      </button>


      {/* --- Enhanced Backdrop Overlay --- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent backdrop-blur-sm z-40 transition-all duration-500"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* --- Beautiful Sidebar with Glassmorphism --- */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 backdrop-blur-md text-white border-r border-cyan-400/20 p-6 overflow-y-auto z-50 shadow-2xl transition-all duration-500 ease-out ${isOpen ? 'translate-x-0 shadow-cyan-500/20' : '-translate-x-full'
          }`}
        style={{ background: '#29333B' }}
      >
        {/* --- Sidebar Header with Close Button --- */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-cyan-300"
            aria-label="Close menu"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* --- Beautiful Accordion Menu with Icons --- */}
        <nav className="flex flex-col gap-3">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div key={section.name} className="group">
                <button
                  onClick={() => handleSectionClick(section.name)}
                  className="w-full flex items-center justify-between p-4 rounded-md backdrop-blur-sm border border-gray-600/20 hover:border-cyan-400/40 transition-all duration-300 group"
                  style={{ background: '#141B2D' }}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className={`${section.color} w-4 h-4 transition-colors duration-300 group-hover:scale-110`} />
                    <span className="font-semibold text-gray-100 group-hover:text-white transition-colors duration-300 text-xs">{section.label}</span>
                  </div>
                  <div className="flex items-center">
                    {activeSection === section.name ? <DropdownCaret className="w-4 h-4 transform rotate-180" /> : <DropdownCaret className="w-4 h-4" />}
                  </div>
                </button>

                {activeSection === section.name && (
                  <div className="mt-3 ml-4 animate-slideDown">
                    {getSectionContent(section.name)}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* --- Decorative Bottom Section --- */}
        <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-blue-900/20 rounded-xl border border-purple-500/10">
          <p className="text-xs text-gray-400 text-center">Powered by Web3 Technology</p>
        </div>


      </aside>
    </>
  );
};
