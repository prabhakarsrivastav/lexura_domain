import { DollarSign, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Affiliate = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 gradient-text text-center">Affiliate Program</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Earn commissions by referring businesses to our Web3 services and marketplace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 hero-card text-center">
            <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">20% Commission</h3>
            <p className="text-muted-foreground">
              Earn 20% recurring commission on all services sold through your referral link
            </p>
          </Card>

          <Card className="p-8 hero-card text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Lifetime Referrals</h3>
            <p className="text-muted-foreground">
              Get credit for all future purchases made by your referred customers
            </p>
          </Card>

          <Card className="p-8 hero-card text-center">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Monthly Payouts</h3>
            <p className="text-muted-foreground">
              Receive your earnings monthly via cryptocurrency or bank transfer
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-gradient h-14 px-8 text-lg">
            Join Affiliate Program
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;
