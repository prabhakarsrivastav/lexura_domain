import React from "react";

const DropdownCaret = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 16"
    className={className}
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    style={{ display: "inline-block", verticalAlign: "middle", color: "#ABB0B6" }}
  >
    <path d="M1 3 L7 13 L13 3 Z" />
  </svg>
);

export default DropdownCaret;
