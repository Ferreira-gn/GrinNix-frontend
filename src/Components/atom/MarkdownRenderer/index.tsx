import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import markdownStyleSystem from "./markdownStyleSystem";
import Markdown from "react-markdown";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  return (
    <div className={`${className}`}>
      <Markdown
        remarkPlugins={[remarkGfm, remarkBreaks, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={markdownStyleSystem}
      >
        {content}
      </Markdown>
    </div>
  );
}

export default MarkdownRenderer;
