import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
import { StatsCard } from "@/components/admin/StatsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Activity, Zap, AlertTriangle, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OpsMonitoring = () => {
  const navigate = useNavigate();

  const recentTransfers = [
    { domain: "crypto.nft", status: "success", time: "1m 45s", block: "18,234,567" },
    { domain: "defi.wallet", status: "pending", time: "-", block: "-" },
    { domain: "nft.dao", status: "success", time: "2m 12s", block: "18,234,512" },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold gradient-text mb-8">Operations & Monitoring</h1>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Avg Settlement Time"
            value="1m 52s"
            icon={Activity}
            trend={{ value: 15, isPositive: true }}
          />
          <StatsCard
            title="Success Rate"
            value="99.2%"
            icon={TrendingUp}
            trend={{ value: 0.5, isPositive: true }}
          />
          <StatsCard
            title="Webhook Delivery"
            value="100%"
            icon={Zap}
          />
          <StatsCard
            title="Failed Ops (24h)"
            value="2"
            icon={AlertTriangle}
          />
        </div>

        {/* Auto-Transfer Log */}
        <div className="glass-card rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Recent Auto-Transfers</h2>
          <div className="space-y-3">
            {recentTransfers.map((transfer, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Badge
                    variant={transfer.status === "success" ? "default" : "secondary"}
                    className={
                      transfer.status === "success"
                        ? "bg-success/10 text-success"
                        : "bg-warning/10 text-warning"
                    }
                  >
                    {transfer.status}
                  </Badge>
                  <div>
                    <p className="font-bold">{transfer.domain}</p>
                    <p className="text-sm text-muted-foreground">
                      Block: {transfer.block}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{transfer.time}</p>
                  <p className="text-xs text-muted-foreground">Settlement Time</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Webhook Delivery Tracker */}
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Webhook Delivery Status</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 glass-card rounded-lg">
              <div>
                <p className="font-medium">payment.completed</p>
                <p className="text-xs text-muted-foreground">crypto.nft purchase</p>
              </div>
              <Badge className="bg-success/10 text-success">Delivered</Badge>
            </div>
            <div className="flex items-center justify-between p-3 glass-card rounded-lg">
              <div>
                <p className="font-medium">transfer.initiated</p>
                <p className="text-xs text-muted-foreground">defi.wallet transfer</p>
              </div>
              <Badge className="bg-warning/10 text-warning">Pending</Badge>
            </div>
            <div className="flex items-center justify-between p-3 glass-card rounded-lg">
              <div>
                <p className="font-medium">listing.approved</p>
                <p className="text-xs text-muted-foreground">dao.crypto listing</p>
              </div>
              <Badge className="bg-success/10 text-success">Delivered</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpsMonitoring;
