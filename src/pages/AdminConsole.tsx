import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  FileText,
  LogOut,
  Shield,
  Bell,
  Activity
} from "lucide-react";

export default function AdminConsole() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
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
    
    if (parsedUser.role !== 'admin') {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }
    
    setUser(parsedUser);
    setLoading(false);
  }, [navigate, toast]);

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
        <div className="text-white">Verifying admin access...</div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0D11] to-[#1a1f2e]">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-[#0B0E11] border-r border-white/10 p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            Admin
          </h2>
        </div>

        <nav className="space-y-2">
          <Button className="w-full justify-start bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 text-white hover:from-blue-600/30 hover:to-cyan-600/30">
            <Activity className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5">
            <Users className="mr-2 h-4 w-4" />
            Users
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Listings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5">
            <TrendingUp className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5">
            <FileText className="mr-2 h-4 w-4" />
            Transactions
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5">
            <Bell className="mr-2 h-4 w-4" />
            Announcements
          </Button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Welcome back, {user?.email}</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-cyan-500/30 p-6 hover:shadow-[0_0_30px_rgba(0,230,255,0.3)] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-400">Total Users</h3>
              <Users className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-3xl font-bold text-white">0</p>
            <p className="text-xs text-green-400 mt-1">+0% from last month</p>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 p-6 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-400">Active Listings</h3>
              <ShoppingCart className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-white">0</p>
            <p className="text-xs text-green-400 mt-1">+0% from last month</p>
          </Card>

          <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30 p-6 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-400">Total Revenue</h3>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-white">$0</p>
            <p className="text-xs text-green-400 mt-1">+0% from last month</p>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600/20 to-yellow-600/20 border-orange-500/30 p-6 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-400">Transactions</h3>
              <FileText className="w-5 h-5 text-orange-400" />
            </div>
            <p className="text-3xl font-bold text-white">0</p>
            <p className="text-xs text-green-400 mt-1">+0% from last month</p>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-[#0B0E11]/90 border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="text-center text-gray-400 py-8">
            No recent activity to display
          </div>
        </Card>
      </div>
    </div>
  );
}
