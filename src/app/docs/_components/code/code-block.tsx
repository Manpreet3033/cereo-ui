"use client";
import React from "react";
// @ts-expect-error ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-expect-error ignore
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "../buttons/copy-button";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="relative rounded-lg overflow-hidden mb-4">
      <div className="relative">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            width: "100%",
            padding: "16px",
            fontSize: "0.9rem",
            lineHeight: "1.5rem",
            fontFamily: '"JetBrains Mono", monospace',
            whiteSpace: "pre-wrap",
          }}
          showLineNumbers={false}
        >
          {code}
        </SyntaxHighlighter>
        <div className="absolute top-4 right-4">
          <CopyButton text={code} />
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
