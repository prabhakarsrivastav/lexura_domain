import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DomainCardProps {
  domain: string;
  price: number;
  verified: boolean;
  custody: "escrow" | "self-custody";
  bgColor?: string;
  accentColor?: string;
  buttonColor?: string;
}

export const DomainCard = ({ domain, price, verified, custody, bgColor, accentColor, buttonColor }: DomainCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="glass-card rounded-xl p-6 card-hover cursor-pointer transition-all duration-300 hover:scale-[1.02]"
      style={{ backgroundColor: bgColor || undefined }}
      onClick={() => navigate(`/domain/${domain}`)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold gradient-text" style={{ color: accentColor || undefined }}>{domain}</h3>
          {verified && (
            <CheckCircle2 className="h-5 w-5 text-success" />
          )}
        </div>
        <Badge variant="secondary" className="text-xs">
          {custody}
        </Badge>
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground" style={{ color: accentColor || undefined }}>{price}</span>
          <span className="text-sm text-muted-foreground">ETH</span>
        </div>

        <Button
          className="w-full btn-gradient"
          variant={buttonColor ? "noHover" : "default"}
          style={buttonColor ? { backgroundColor: buttonColor } : undefined}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/domain/${domain}`);
          }}
        >
          View Details
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
