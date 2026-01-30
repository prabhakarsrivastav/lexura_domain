import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronDown, ChevronRight } from "lucide-react";

export interface FiltersState {
  selectedTLDs: string[];
  priceRange: [number, number];
  verifiedOnly: boolean;
  category: string; // All | New | .com | DNS | Web3 | Top-rated
  search: string;
}

interface FiltersSidebarProps {
  availableTLDs: string[];
  value: FiltersState;
  onChange: (next: FiltersState) => void;
  onReset?: () => void;
}

export const FiltersSidebar = ({ availableTLDs: _availableTLDs, value, onChange, onReset }: FiltersSidebarProps) => {
  const toggleTld = (tld: string, checked: boolean | string) => {
    const isChecked = checked === true;
    const next = isChecked
      ? [...value.selectedTLDs, tld]
      : value.selectedTLDs.filter((x) => x !== tld);
    onChange({ ...value, selectedTLDs: next });
  };

  const categoryOptions = ["All","New",".com","DNS","Web3","Top-rated"];
  // Ordered lists exactly as in the reference images
  // Two explicit columns as requested
  const leftColBaseTlds: string[] = [
    ".x",".hi",".ltc",".go",".nft",".ai4",".wif",".tea",".ath",".xec",".fun",".xyo",".bch",".npc",".rwa",".pog",".hub",".defi",
    ".caw",".clay",".cgai",".bobi",".witg",".raiin",".tball",".pokt",".ohm",".tribe",".wrkx",".miku",".doga",".mery",".sonic",".web3",
    ".south",".stepn",".bunni",".moon",".donut",".wallet",".anime",".goblin",".pudgy",".crypto",".mumu",".collect",".kryptic",".pendle",".chomp",
    ".privacy",".swamp"
  ];
  const leftColMoreTlds: string[] = [
    ".altimist",".calicoin",".retardio",".basengi",
    ".digibyte",".imtoken",".smobler",".undeads",".mooncat",".quantum",".presearch",".housecoin",".bitscrunch",".supernova",".blockchain"
  ];
  const rightColBaseTlds: string[] = [
    ".u",".zil",".og",".lfg",".sol",".agi",".dfz",".eth",".her",".ask",".rad",".wifi",".bay",".nibi",".dao",".888",".ubu",".xmr",
    ".troll",".dsci",".chip",".pilot",".bald",".hodl",".twin",".emir",".pack",".zano",".pbdx",".grow",".learn",".lunar",".robot",".dejay",
    ".pundi",".depin",".brave",".derad",".bitget",".austin",".secret",".gotchi",".pastor",".pengu",".dream",".bitcoin",".demos",".carbon",".manga",
    ".satoshi",".arculus"
  ];
  const rightColMoreTlds: string[] = [
    ".anyone",".boomer",".podcast",".onchain",".polygon",".ministry",".mycircle",".kingdom",".hegecoin",".ethermail",".tigershark",".propykeys",".metaverse",".metropolis",".unstoppable"
  ];
  const [showMore, setShowMore] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const leftVisible = showMore ? [...leftColBaseTlds, ...leftColMoreTlds] : leftColBaseTlds; // left extends when showMore
  const rightVisible = showMore ? [...rightColBaseTlds, ...rightColMoreTlds] : rightColBaseTlds; // right extends when showMore

  return (
    <Card className="p-3 md:p-4 space-y-1 filters-sidebar">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold cursor-pointer flex items-center gap-0.5" onClick={() => setIsExpanded(!isExpanded)}>
          Filters {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </h3>
        <Button
          className="text-sm px-0"
          style={{ backgroundColor: 'white', color: 'red' }}
          onClick={() => {
            if (onReset) { onReset(); return; }
            onChange({ selectedTLDs: [], priceRange: [0, 100], verifiedOnly: false, category: "All", search: "" });
          }}
        >Reset</Button>
      </div>

      {/* Category (Radio) */}
      {isExpanded && (
        <div className="space-y-2">
          <RadioGroup
            value={value.category}
            onValueChange={(val) => onChange({ ...value, category: val })}
            className="space-y-1"
          >
            {categoryOptions.map((c) => (
              <div key={c} className="flex items-center gap-2">
                <RadioGroupItem value={c} id={`cat-${c}`} className="" style={{ backgroundColor: 'white' }} />
                <Label htmlFor={`cat-${c}`} className="text-xs cursor-pointer">{c}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}

      {/* TLD Multi-select in two explicit columns */}
      <div className="space-y-9">
        <Label className="text-xs gap-4 pb-7 font-medium"></Label>
        <div className="grid grid-cols-2 gap-4 pr-1">
          {/* Left column */}
          <div className="space-y-2">
            {leftVisible.map((tld) => (
              <div key={tld} className="flex items-center gap-2">
                <Checkbox
                  id={`tld-${tld}`}
                  checked={value.selectedTLDs.includes(tld)}
                  onCheckedChange={(c) => toggleTld(tld, c)}
                  className="h-4 w-4"
                  style={{ backgroundColor: 'white' }}
                />
                <Label htmlFor={`tld-${tld}`} className="text-sm md:text-base cursor-pointer truncate">
                  {tld}
                </Label>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div className="space-y-2">
            {rightVisible.map((tld) => (
              <div key={tld} className="flex items-center gap-2">
                <Checkbox
                  id={`tld-${tld}`}
                  checked={value.selectedTLDs.includes(tld)}
                  onCheckedChange={(c) => toggleTld(tld, c)}
                  className="h-4 w-4"
                  style={{ backgroundColor: 'white' }}
                />
                <Label htmlFor={`tld-${tld}`} className="text-sm md:text-base cursor-pointer truncate">
                  {tld}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2">
          {!showMore ? (
            <button type="button" className="text-xs text-black bg-white" onClick={() => setShowMore(true)}>Show More &gt;&gt;</button>
          ) : (
            <button type="button" className="text-xs text-black bg-white" onClick={() => setShowMore(false)}>Show Less &gt;&gt;</button>
          )}
        </div>
      </div>

      {/* Price Range */}
      {/* <div className="space-y-2">
        <Label className="text-xs font-medium">Price Range (ETH)</Label>
        <Slider
          value={[value.priceRange[0], value.priceRange[1]]}
          onValueChange={(v) => onChange({ ...value, priceRange: [v[0] ?? 0, v[1] ?? value.priceRange[1]] })}
          max={100}
          step={0.5}
          className="h-1"
        />
        <div className="flex justify-between text-[11px] text-muted-foreground">
          <span>{value.priceRange[0].toFixed(1)} ETH</span>
          <span>{value.priceRange[1].toFixed(1)} ETH</span>
        </div>
      </div> */}

      {/* Verified Only */}
      {/* <div className="flex items-center gap-2">
        <Checkbox
          id="verified-only"
          checked={value.verifiedOnly}
          onCheckedChange={(c) => onChange({ ...value, verifiedOnly: c === true })}
          className="h-3 w-3"
          style={{ backgroundColor: 'white' }}
        />
        <Label htmlFor="verified-only" className="text-[11px] cursor-pointer">Verified Only</Label>
      </div> */}
    </Card>
  );
};
