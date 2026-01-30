import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 gradient-text">Blog & Resources</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Stay updated with the latest Web3 trends, domain insights, and industry news.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hero-card">
            <h3 className="text-2xl font-bold mb-3">Getting Started with Web3 Domains</h3>
            <p className="text-muted-foreground mb-4">
              Learn how to purchase, manage, and monetize your Web3 domains effectively.
            </p>
            <p className="text-sm text-muted-foreground">Coming Soon</p>
          </Card>

          <Card className="p-6 hero-card">
            <h3 className="text-2xl font-bold mb-3">Domain Valuation Guide</h3>
            <p className="text-muted-foreground mb-4">
              Understand how to value Web3 domains and identify premium opportunities.
            </p>
            <p className="text-sm text-muted-foreground">Coming Soon</p>
          </Card>

          <Card className="p-6 hero-card">
            <h3 className="text-2xl font-bold mb-3">Web3 Hosting Best Practices</h3>
            <p className="text-muted-foreground mb-4">
              Deploy your dApps with confidence using our hosting infrastructure.
            </p>
            <p className="text-sm text-muted-foreground">Coming Soon</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
