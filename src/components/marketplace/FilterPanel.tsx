import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import filterIconImg from "../../assets/icons/filter-search.png";



export const FilterPanel = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedTLDs, setSelectedTLDs] = useState<string[]>([]);

  const tlds = [".nft", ".crypto", ".wallet", ".blockchain", ".dao", ".x"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-14 px-6 rounded-xl text-lg hover:bg-white hover:text-black">
          <img src={filterIconImg} alt="Filters" className="mr-3 w-6 h-6" />
          Filters
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium mb-3 block">Top-Level Domain</Label>
            <div className="space-y-2">
              {tlds.map((tld) => (
                <div key={tld} className="flex items-center gap-2">
                  <Checkbox
                    id={tld}
                    checked={selectedTLDs.includes(tld)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedTLDs([...selectedTLDs, tld]);
                      } else {
                        setSelectedTLDs(selectedTLDs.filter((t) => t !== tld));
                      }
                    }}
                  />
                  <Label htmlFor={tld} className="cursor-pointer">
                    {tld}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-xs font-medium mb-2 block">Price Range (ETH)</Label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={10000}
              step={100}
              className="mb-1 h-1"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{priceRange[0]} ETH</span>
              <span>{priceRange[1]} ETH</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Checkbox id="verified" />
              <Label htmlFor="verified" className="cursor-pointer">
                Verified Only
              </Label>
            </div>
          </div>

          <Button variant="outline" className="w-full" onClick={() => {
            setPriceRange([0, 10000]);
            setSelectedTLDs([]);
          }}>
            Reset Filters
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
