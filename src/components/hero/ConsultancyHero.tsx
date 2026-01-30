import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Video, Users, Sparkles, Calendar, CheckCircle2, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-consultancy.jpg";

export const ConsultancyHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-primary/5 py-8 md:py-12">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <img
                src={heroImage}
                alt="Expert Web3 Consultation"
                className="rounded-2xl shadow-2xl hover-scale w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Icon & Badge */}
            <div className="flex justify-center lg:justify-start items-center gap-3 mb-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Video className="h-6 w-6" />
              </div>
              <Badge variant="secondary" className="px-3 py-1.5">
                <Users className="w-3 h-3 mr-1.5" />
                Expert Advisors
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text animate-fade-in font-inter" style={{ animationDelay: '0.1s' }}>
              Get Expert Help for Your Web3 App or SaaS
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our experts guide you in building Web3 apps, SaaS tools, and tokenomics in real time.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Video className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Live Sessions</h3>
                  <p className="text-sm text-muted-foreground">Video consultations</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Target className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Strategy Planning</h3>
                  <p className="text-sm text-muted-foreground">Roadmap & architecture</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Actionable Insights</h3>
                  <p className="text-sm text-muted-foreground">Clear next steps</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Calendar className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">Book at your convenience</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Advised</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Expert Advisors</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="btn-gradient h-12 px-8 text-base font-semibold hover-scale shadow-lg"
                onClick={() => navigate("/consultancy")}
              >
                <Video className="mr-2 h-5 w-5" />
                Book a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-semibold border-2 hover-scale"
                onClick={() => navigate("/services")}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
