import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search domains (e.g., crypto.nft, defi.wallet)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-12 h-14 text-lg glass-card border-border/50 focus:border-primary/50 transition-colors"
      />
    </div>
  );
};
