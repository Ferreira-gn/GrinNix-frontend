import type React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  code: string;
  language: string;
};

const prismOverride: React.CSSProperties = {
  margin: 0,
  borderRadius: 0,
  fontSize: "13px",
  lineHeight: "1.75",
  
};

const CodeViewer: React.FC<Props> = ({ code, language = 'typescript'}) => {
  return (
    <pre className="flex-1">
      <SyntaxHighlighter
        style={oneDark}
        language={language}
        customStyle={prismOverride}
        showLineNumbers={code.split("\n").length > 4}
        lineNumberStyle={{
          fontSize: "11px",
          minWidth: "2.2em",
          paddingRight: "12px",
          userSelect: "none",
        }}
        wrapLines
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>
    </pre>
  );
};

export default CodeViewer;
