import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface DomainItem {
  domain: string;
  price: number;
  verified: boolean;
  custody: "escrow" | "self-custody";
  bgColor?: string;
  accentColor?: string;
}

interface DomainTableSectionProps {
  title: string;
  items: DomainItem[];
  emptyMessage?: string;
  className?: string;
}

export const DomainTableSection = ({ title, items, emptyMessage, className }: DomainTableSectionProps) => {
  return (
    <div className={cn("mb-8 rounded-md border border-border/60 overflow-hidden bg-card", className)}>
      <div className="bg-slate-800 text-white px-4 py-2 text-sm font-semibold">
        {title}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-b border-border/60 bg-muted/40 text-left text-sm">
              <th className="w-32 px-4 py-3 font-medium">Domain Type</th>
              <th className="px-4 py-3 font-medium">Domain Name</th>
              <th className="w-36 px-4 py-3 font-medium">Domain Price</th>
              <th className="w-40 px-4 py-3 font-medium">Add to Favorites</th>
              <th className="w-32 px-4 py-3 font-medium">Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-sm text-muted-foreground">
                  {emptyMessage ?? "No domains found."}
                </td>
              </tr>
            )}
            {items.map((d) => {
              const tld = d.domain.split(".").pop()?.toLowerCase() ?? "";
              const domainType = ["crypto","wallet","x","nft","blockchain","dao"].includes(tld) ? "Web3" : "DNS";
              return (
                <tr key={d.domain} className="border-t border-border/50">
                  <td className="px-4 py-3 text-sm">{domainType}</td>
                  <td className="px-4 py-3 text-sm font-medium">{d.domain}</td>
                  <td className="px-4 py-3 text-sm">${d.price.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <Button variant="ghost" size="sm" className="text-primary">Add to Favorites</Button>
                  </td>
                  <td className="px-4 py-3">
                    <Button size="sm" className="btn-gradient w-full">Add to Cart</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
