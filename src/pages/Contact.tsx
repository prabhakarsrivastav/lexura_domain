import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 gradient-text text-center">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Have questions? We're here to help you with all your Web3 domain needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 hero-card text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Email Us</h3>
            <p className="text-muted-foreground mb-4">
              Get in touch with our support team
            </p>
            <p className="text-primary font-medium">support@uddomainhub.com</p>
          </Card>

          <Card className="p-8 hero-card text-center">
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Live Chat</h3>
            <p className="text-muted-foreground mb-4">
              Chat with us in real-time
            </p>
            <Button className="btn-gradient">Start Chat</Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
