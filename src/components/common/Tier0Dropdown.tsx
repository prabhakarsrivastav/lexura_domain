import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// Use a small inline caret glyph to match header dropdown style

type Props = {
  label: React.ReactNode;
  align?: "start" | "end";
  children?: React.ReactNode;
  className?: string;
};

const Tier0Dropdown = ({ label, align = "start", children, className = "" }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center gap-0 text-xs font-medium text-white outline-none hover:text-[#0D4654] ${className}`}>
        {label}
        <svg viewBox="0 0 14 16" className="h-8 w-2" fill="#ABB0B6" aria-hidden="true" focusable="false">
          <path d="M1 3 L7 13 L13 3 Z" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="nav-panel-dark" align={align}>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Tier0Dropdown;
