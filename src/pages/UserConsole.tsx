import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User, ShoppingBag, Wallet, HelpCircle, LogOut, Mail, Settings, Copy, ExternalLink } from "lucide-react";

export default function UserConsole() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [walletDetails, setWalletDetails] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      navigate("/auth");
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    
    if (parsedUser.walletAddress) {
      fetchWalletDetails(parsedUser.walletAddress);
    }
    
    setLoading(false);
  }, [navigate]);

  const fetchWalletDetails = async (address: string) => {
    if (!window.ethereum) return;
    
    try {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      });
      
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      
      const networks: any = {
        '0x1': 'Ethereum Mainnet',
        '0x5': 'Goerli Testnet',
        '0x89': 'Polygon Mainnet',
        '0x13881': 'Mumbai Testnet',
        '0xa86a': 'Avalanche C-Chain',
        '0x38': 'BSC Mainnet'
      };
      
      setWalletDetails({
        balance: (parseInt(balance, 16) / 1e18).toFixed(4),
        network: networks[chainId] || 'Unknown Network',
        chainId
      });
    } catch (error) {
      console.error('Failed to fetch wallet details:', error);
    }
  };

  const copyAddress = () => {
    if (user?.walletAddress) {
      navigator.clipboard.writeText(user.walletAddress);
      toast({
        title: "Copied!",
        description: "Wallet address copied to clipboard",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0D11] to-[#1a1f2e]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0D11] to-[#1a1f2e] p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">User Console</h1>
            <p className="text-gray-400">Welcome back, {user?.email}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="bg-[#0B0E11]/90 border-white/10 p-6 hover:shadow-[0_0_30px_rgba(0,230,255,0.3)] transition-all duration-300 hover:scale-105 cursor-pointer group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <Settings className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Profile & Settings</h3>
          <p className="text-gray-400 text-sm">Manage your account information and preferences</p>
        </Card>

        {/* Purchases Card */}
        <Card className="bg-[#0B0E11]/90 border-white/10 p-6 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105 cursor-pointer group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">My Purchases</h3>
          <p className="text-gray-400 text-sm">View and manage your NFTs, domains, courses and e-books</p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-2xl font-bold text-white">0</p>
              <p className="text-xs text-gray-500">NFTs</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">0</p>
              <p className="text-xs text-gray-500">Domains</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">0</p>
              <p className="text-xs text-gray-500">Courses</p>
            </div>
          </div>
        </Card>

        {/* Wallet Card */}
        <Card className="bg-[#0B0E11]/90 border-white/10 p-6 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">Wallet Details</h3>
          {user?.walletAddress ? (
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs mb-1">Address</p>
                <div className="flex items-center gap-2">
                  <p className="text-green-400 text-xs font-mono break-all flex-1">
                    {user.walletAddress}
                  </p>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyAddress}
                    className="h-6 w-6 p-0 hover:bg-white/10"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              {walletDetails && (
                <>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Balance</p>
                    <p className="text-white text-lg font-bold">{walletDetails.balance} ETH</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Network</p>
                    <p className="text-white text-sm">{walletDetails.network}</p>
                  </div>
                </>
              )}
              
              <Button
                size="sm"
                variant="outline"
                className="w-full mt-2 border-green-500/30 text-green-400 hover:bg-green-500/10"
                onClick={() => window.open(`https://etherscan.io/address/${user.walletAddress}`, '_blank')}
              >
                <ExternalLink className="h-3 w-3 mr-2" />
                View on Etherscan
              </Button>
            </div>
          ) : (
            <>
              <p className="text-gray-400 text-sm">No wallet connected</p>
              <p className="text-xs text-muted-foreground mt-2">Connect via header button</p>
            </>
          )}
        </Card>

        {/* Support Card */}
        <Card className="bg-[#0B0E11]/90 border-white/10 p-6 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300 hover:scale-105 cursor-pointer group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Support Tickets</h3>
          <p className="text-gray-400 text-sm">Create and track your support requests</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">Open Tickets</span>
            <span className="text-xl font-bold text-white">0</span>
          </div>
        </Card>

        {/* Email Card */}
        <Card className="bg-[#0B0E11]/90 border-white/10 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
          <p className="text-gray-400 text-sm break-all">{user?.email}</p>
          <p className="text-xs text-green-400 mt-2">✓ Verified</p>
        </Card>

        {/* Quick Actions Card */}
        <Card className="bg-[#0B0E11]/90 border-white/10 p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button 
              className="w-full justify-start bg-white/5 hover:bg-white/10 text-white"
              onClick={() => navigate("/nft-launchpad")}
            >
              Browse NFTs
            </Button>
            <Button 
              className="w-full justify-start bg-white/5 hover:bg-white/10 text-white"
              onClick={() => navigate("/domains")}
            >
              Browse Domains
            </Button>
            <Button 
              className="w-full justify-start bg-white/5 hover:bg-white/10 text-white"
              onClick={() => navigate("/contact")}
            >
              Contact Support
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
