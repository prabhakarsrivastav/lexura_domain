import { useState } from "react";
import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Clock, CheckCircle2, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const SellerDashboard = () => {
  const navigate = useNavigate();
  const [listings] = useState([
    { domain: "crypto.nft", status: "live", price: 5.2, views: 234 },
    { domain: "defi.wallet", status: "pending", price: 3.8, views: 0 },
    { domain: "nft.dao", status: "sold", price: 2.5, views: 456 },
  ]);

  const statusConfig = {
    pending: { icon: Clock, className: "text-warning bg-warning/10" },
    live: { icon: CheckCircle2, className: "text-success bg-success/10" },
    sold: { icon: DollarSign, className: "text-primary bg-primary/10" },
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">Seller Dashboard</h1>
            <p className="text-muted-foreground">Manage your domain listings</p>
          </div>
          <Button className="btn-gradient" onClick={() => navigate("/seller/new")}>
            <Plus className="mr-2 h-4 w-4" />
            List New Domain
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Listings</p>
            <p className="text-3xl font-bold gradient-text">{listings.length}</p>
          </Card>
          <Card className="glass-card p-6">
            <p className="text-sm text-muted-foreground mb-2">Active Listings</p>
            <p className="text-3xl font-bold gradient-text">
              {listings.filter(l => l.status === "live").length}
            </p>
          </Card>
          <Card className="glass-card p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Sales</p>
            <p className="text-3xl font-bold gradient-text">
              {listings.filter(l => l.status === "sold").length}
            </p>
          </Card>
        </div>

        {/* Listings Table */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6">My Listings</h2>
          <div className="space-y-4">
            {listings.map((listing) => {
              const config = statusConfig[listing.status as keyof typeof statusConfig];
              const Icon = config.icon;

              return (
                <div
                  key={listing.domain}
                  className="glass-card p-4 rounded-lg flex items-center justify-between card-hover"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${config.className}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{listing.domain}</p>
                      <p className="text-sm text-muted-foreground">{listing.views} views</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-bold text-lg">{listing.price} ETH</p>
                      <Badge variant="secondary" className="capitalize">
                        {listing.status}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
