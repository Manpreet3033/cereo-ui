"use client";
import React from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="text-gray-400 dark:hover:text-white"
    >
      {copied ? (
        <Check className="h-5 w-5 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
};

export default CopyButton;
