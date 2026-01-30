import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 gradient-text text-center">Join Our Team</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Help us build the future of Web3 domain marketplace and services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 hero-card">
            <h3 className="text-2xl font-bold mb-3">Full Stack Developer</h3>
            <p className="text-muted-foreground mb-4">
              Build and scale our Web3 marketplace platform with React, Node.js, and blockchain technologies.
            </p>
            <p className="text-sm text-muted-foreground mb-4">Remote • Full-time</p>
            <Button className="btn-gradient">Apply Now</Button>
          </Card>

          <Card className="p-8 hero-card">
            <h3 className="text-2xl font-bold mb-3">Web3 Business Development</h3>
            <p className="text-muted-foreground mb-4">
              Drive partnerships and grow our ecosystem of Web3 domain owners and businesses.
            </p>
            <p className="text-sm text-muted-foreground mb-4">Remote • Full-time</p>
            <Button className="btn-gradient">Apply Now</Button>
          </Card>

          <Card className="p-8 hero-card">
            <h3 className="text-2xl font-bold mb-3">AI/ML Engineer</h3>
            <p className="text-muted-foreground mb-4">
              Develop AI-powered tools for domain valuation, name generation, and outreach campaigns.
            </p>
            <p className="text-sm text-muted-foreground mb-4">Remote • Full-time</p>
            <Button className="btn-gradient">Apply Now</Button>
          </Card>

          <Card className="p-8 hero-card">
            <h3 className="text-2xl font-bold mb-3">Customer Success Manager</h3>
            <p className="text-muted-foreground mb-4">
              Help our clients maximize value from our Web3 consulting and hosting services.
            </p>
            <p className="text-sm text-muted-foreground mb-4">Remote • Full-time</p>
            <Button className="btn-gradient">Apply Now</Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
