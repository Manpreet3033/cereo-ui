import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "../buttons/copy-button";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="relative rounded-md overflow-hidden border dark:border-gray-800 border-gray-200">
      <div className="relative">
        <SyntaxHighlighter
          language={language}
          style={coldarkDark}
          customStyle={{
            width: "100%",
            padding: "16px",
            fontSize: "0.9rem",
            lineHeight: "1.5rem",
            fontFamily: '"JetBrains Mono", monospace',
            whiteSpace: "pre-wrap",
            margin: 0,
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
