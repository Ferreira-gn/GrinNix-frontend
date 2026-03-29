import type { HTMLAttributes, ReactNode } from "react";
import type { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeProps extends HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}

const prismOverride: React.CSSProperties = {
  margin: 0,
  borderRadius: 0,
  background: "transparent",
  fontSize: "13px",
  lineHeight: "1.75",
};

const markdownStyleSystem: Components = {
  h1: ({ children }) => (
    <h1 className="text-[22px] font-bold text-[#eff1f6] mb-4 leading-snug tracking-tight">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-[16px] font-semibold text-[#eff1f6] mt-6 mb-3 pb-2 border-b border-[#3c3c4a]">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="text-[14px] font-semibold text-[#c5ccd8] mt-5 mb-2">
      {children}
    </h3>
  ),

  h4: ({ children }) => (
    <h4 className="text-[13px] font-semibold text-[#9ea9ba] mt-4 mb-2 uppercase tracking-wider">
      {children}
    </h4>
  ),

  p: ({ children }) => (
    <p className="text-[14px] text-[#c5ccd8] leading-[1.8] mb-3">{children}</p>
  ),

  code: ({ className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "";
    const codeString = String(children).replace(/\n$/, "");


    const isInline = !match && !codeString.includes("\n");

    if (isInline) {
      return (
        <code
          className="bg-[rgba(239,71,67,0.1)] text-[#ef4743] px-1.5 py-0.5 rounded text-[0.85em] font-mono"
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <div className="relative my-3 rounded-lg overflow-hidden border border-[#3c3c4a] bg-[#1a1a1a]">
        {language && (
          <span className="absolute top-0 right-0 bg-[#3c3c4a] text-[#8d8d99] text-[10.5px] font-mono px-3 py-1 rounded-bl-md tracking-wide z-10 select-none">
            {language}
          </span>
        )}
        <SyntaxHighlighter
          style={oneDark}
          language={language || "text"}
          customStyle={prismOverride}
          showLineNumbers={codeString.split("\n").length > 4}
          lineNumberStyle={{
            color: "#4a4a5a",
            fontSize: "11px",
            minWidth: "2.2em",
            paddingRight: "12px",
            userSelect: "none",
          }}
          wrapLines
          PreTag="div"
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  },

  strong: ({ children }) => (
    <strong className="font-semibold text-[#eff1f6]">{children}</strong>
  ),

  em: ({ children }) => <em className="italic text-[#c5ccd8]">{children}</em>,

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#58a6ff] hover:underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-l-[3px] border-[#ffa116] bg-[rgba(255,161,22,0.06)] rounded-r-md my-4 px-4 py-3 text-[#9ea9ba] text-[13.5px] leading-relaxed">
      {children}
    </blockquote>
  ),

  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-6 my-2 mb-3 text-[#c5ccd8] text-[14px] space-y-1">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-6 my-2 mb-3 text-[#c5ccd8] text-[14px] space-y-1">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="leading-[1.7] text-[#c5ccd8]">{children}</li>
  ),

  hr: () => <hr className="border-none border-t border-[#3c3c4a] my-5" />,

  table: ({ children }) => (
    <div className="overflow-x-auto my-4 rounded-lg border border-[#3c3c4a]">
      <table className="w-full border-collapse text-[13.5px]">{children}</table>
    </div>
  ),

  thead: ({ children }) => <thead className="bg-[#2e2e3a]">{children}</thead>,

  tbody: ({ children }) => <tbody>{children}</tbody>,

  th: ({ children }) => (
    <th className="px-4 py-2.25 text-left font-semibold text-[11.5px] text-[#eff1f6] uppercase tracking-[0.6px] border-b border-[#3c3c4a]">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="px-4 py-2.25 text-[#c5ccd8] border-b border-[#2e2e3a] last-of-type:border-b-0 group-last:border-b-0">
      {children}
    </td>
  ),

  tr: ({ children }) => (
    <tr className="hover:bg-[rgba(255,255,255,0.02)] transition-colors">
      {children}
    </tr>
  ),

  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="max-w-full rounded-lg border border-[#3c3c4a] my-3"
    />
  ),
};

export default markdownStyleSystem;
