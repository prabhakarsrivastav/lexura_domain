import React, { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const currencies = [
    { code: "USD", label: "USD" },
    { code: "CAD", label: "CAD" },
    { code: "INR", label: "INR" },
  ];

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    // Here you can add logic to update the app's currency context or localStorage
    localStorage.setItem("selectedCurrency", currency);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-0.5 text-xs font-medium text-[#3d3d3d] outline-none hover:text-gray-500">
        Canada$ {selectedCurrency}
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="nav-panel-dark">
        {currencies.map((currency) => (
          <DropdownMenuItem
            key={currency.code}
            onSelect={() => handleCurrencyChange(currency.code)}
            className="cursor-pointer hover:bg-white/10 focus:bg-white/10 hover:text-white text-xs"
          >
            {currency.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencySelector;