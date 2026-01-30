import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, X } from "lucide-react";

interface NFTFiltersProps {
  onFilterChange?: (filters: FilterState) => void;
}

export interface FilterState {
  priceRange: [number, number];
  collection: string;
  sortBy: string;
}

export const NFTFilters = ({ onFilterChange }: NFTFiltersProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [collection, setCollection] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReset = () => {
    setPriceRange([0, 100]);
    setCollection("all");
    setSortBy("popular");
    onFilterChange?.({ priceRange: [0, 100], collection: "all", sortBy: "popular" });
  };

  const handleApply = () => {
    onFilterChange?.({ priceRange, collection, sortBy });
  };

  return (
    <div className="glass-card rounded-xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Filters</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Price Range (ETH)</Label>
          <Slider
            min={0}
            max={100}
            step={1}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{priceRange[0]} ETH</span>
            <span>{priceRange[1]} ETH</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Collection</Label>
          <Select value={collection} onValueChange={setCollection}>
            <SelectTrigger>
              <SelectValue placeholder="Select collection" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Collections</SelectItem>
              <SelectItem value="crypto-punks">CryptoPunks</SelectItem>
              <SelectItem value="bored-apes">Bored Apes</SelectItem>
              <SelectItem value="art-blocks">Art Blocks</SelectItem>
              <SelectItem value="azuki">Azuki</SelectItem>
              <SelectItem value="doodles">Doodles</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Sort By</Label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="recent">Recently Listed</SelectItem>
              <SelectItem value="ending">Ending Soon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className="w-full btn-gradient" 
          onClick={handleApply}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};
