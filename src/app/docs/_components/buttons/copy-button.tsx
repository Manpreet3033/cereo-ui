"use client";
import React from "react";
import { Copy } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <button
      onClick={handleCopy}
      className="dark:text-gray-400 text-black dark:hover:text-white hover:text-gray-500"
    >
      <Copy className="h-4 w-4" />
    </button>
  );
};

export default CopyButton;
