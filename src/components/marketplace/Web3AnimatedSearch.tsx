import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import smartSearchIcon from "../../assets/icons/smart-search.png";

export const Web3AnimatedSearch = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        navigate(`/domains?search=${encodeURIComponent(query)}`);
        setIsSearching(false);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Animated Web3 Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-success/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>



      {/* Main Search Bar */}
      <div className="rounded-lg bg-[#F6F6F6] p-1.5 transition-all duration-300">
        <div className="flex items-center gap-0">
          <div className="relative flex-1">
            {/* Left search icon - replace this with your AI icon by swapping the element below */}
            <img src={smartSearchIcon} alt="Search" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 opacity-40" />
            <Input
              type="text"
              placeholder="Search Web3 domains (e.g., crypto.blockchain, myname.wallet)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pl-12 h-11 text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-sm text-gray-800 placeholder:text-gray-500"
            />
          </div>
          <Button
            onClick={handleSearch}
            disabled={isSearching || !query.trim()}
            variant="light"
            className="h-11 px-6 rounded-md font-semibold text-white search-web3-button no-global-button"
            style={{ background: '#838D9F' }}
          >
            {isSearching ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 text-white animate-spin" />
                Searching...
              </>
            ) : (
              <>
                {/* Right search icon - replace this with your AI icon by swapping the element below */}
                <img src={smartSearchIcon} alt="Search" className="mr-2 h-5 w-5" />
                <span className="text-white ">Search Web3</span>
              </>
            )}
          </Button>


        </div>
      </div>

      {/* Animated Connection Lines */}
      <div className="absolute -bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
};
