import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Rocket, Wrench, Users, ShoppingBag, HeadphonesIcon } from "lucide-react";

// Import custom icons
import faqsIcon from "@/assets/icons/faqs-icon.png";

const faqData = [
  {
    category: "Getting Started",
    icon: Rocket,
    questions: [
      {
        q: "Do I need any technical skills to use the platform?",
        a: "No. Everything is designed for founders and teams without coding experience. You can start with a business idea, and the tools handle the rest."
      },
      {
        q: "Can I use my existing domains or only buy new ones?",
        a: "You can do both. Connect your existing domains or buy new ones from the marketplace."
      },
      {
        q: "Is the platform suitable for traditional Web2 businesses?",
        a: "Yes. You can launch Web2 websites and later extend into Web3 features like NFT galleries or tokenized memberships."
      }
    ]
  },
  {
    category: "Services",
    icon: Wrench,
    questions: [
      {
        q: "What's included in the AI Business Name & Roadmap Generator?",
        a: "It suggests unique names, checks domain availability, and generates a 12-month profitability roadmap."
      },
      {
        q: "How does the Profitability Calculator work?",
        a: "It uses real-time market data and your inputs (budget, niche, traffic goals) to project revenue scenarios."
      },
      {
        q: "Can I integrate other tools or CRMs with the platform?",
        a: "Yes. Our workflow builder supports integrations with popular CRMs, email, and ad platforms."
      }
    ]
  },
  {
    category: "Consultancy",
    icon: Users,
    questions: [
      {
        q: "What do consultancy packages cover?",
        a: "You can choose between Startup Kick-Off, GTM Strategy, Tech Advisory, and Growth Optimization — each led by experienced consultants."
      },
      {
        q: "Is consultancy mandatory?",
        a: "No. All tools are self-service. Consultancy is optional for teams that need expert guidance."
      },
      {
        q: "How do I book a consultant?",
        a: "From your dashboard, pick a category, choose an expert, and book a slot. Payments are processed securely within the platform."
      }
    ]
  },
  {
    category: "Marketplace & Transactions",
    icon: ShoppingBag,
    questions: [
      {
        q: "How safe are domain and NFT transactions?",
        a: "Payments use smart-contract escrow for Web3 assets and trusted payment gateways for Web2, ensuring transparency and buyer protection."
      },
      {
        q: "Can I resell domains or NFTs bought on the platform?",
        a: "Yes. You can list them back on the marketplace, set your own prices, and even earn royalties on future resales."
      }
    ]
  },
  {
    category: "Pricing & Support",
    icon: HeadphonesIcon,
    questions: [
      {
        q: "Is there a free plan to try the platform?",
        a: "Yes. You can explore core tools and run basic searches for free. Premium tools and consultancy require a subscription or one-time payment."
      },
      {
        q: "What kind of support is available?",
        a: "24/7 live chat for technical queries, email support for billing and consultancy, and an extensive knowledge base for self-help."
      },
      {
        q: "Do you offer refunds?",
        a: "Refunds are available for unused consultancy sessions and marketplace disputes, as per our fair-use policy."
      }
    ]
  }
];

export const FAQ = () => {
  return (
    <section className=" md:py-16 pb-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 overflow-hidden">
            <img src={faqsIcon} alt="FAQs" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our platform and services
          </p>
        </div>

        {/* FAQ Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {faqData.map((section, sectionIdx) => {
            const IconComponent = section.icon;
            return (
              <div
                key={sectionIdx}
                className="animate-fade-in"
                style={{ animationDelay: `${sectionIdx * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {section.category}
                  </h3>
                </div>

                {/* Questions */}
                <Accordion type="single" collapsible className="space-y-3">
                  {section.questions.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`item-${sectionIdx}-${idx}`}
                      className="border-none"
                    >
                      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 border-border/50 bg-card/50 backdrop-blur-sm">
                        <AccordionTrigger className="text-left px-5 py-4 hover:no-underline text-sm font-medium group-hover:text-primary transition-colors [&[data-state=open]]:text-primary [&[data-state=open]]:bg-primary/5">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-4 pt-1">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.a}
                          </p>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>

        {/* CTA Footer */}
        <div className="mt-8 text-center animate-fade-in p-8 rounded-2xl bg-muted/30 border border-border/50">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <p className="text-sm text-muted-foreground">
            Contact our support team 24/7 via live chat or email
          </p>
        </div>
      </div>
    </section>
  );
};
