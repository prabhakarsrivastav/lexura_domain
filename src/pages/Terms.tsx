import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 gradient-text">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: January 2025</p>

        <div className="space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Lexura Domains, you agree to be bound by these Terms of Service and all 
              applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Marketplace Rules</h2>
            <p>
              All domain listings must be legitimate and owned by the seller. We reserve the right to remove 
              fraudulent or misleading listings and suspend accounts that violate our policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Transaction Terms</h2>
            <p>
              All sales are final once confirmed on the blockchain. Escrow services are provided to ensure 
              secure transfers. Users are responsible for verifying domain ownership before purchase.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">4. Liability Limitations</h2>
            <p>
              Lexura Domains acts as a marketplace platform. We are not liable for disputes between buyers and 
              sellers, domain valuation accuracy, or blockchain transaction issues.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
