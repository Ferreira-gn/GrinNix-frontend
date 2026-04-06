import type React from "react";

type Props = {
  code: string;
};

const CodeViewer: React.FC<Props> = ({ code }) => {
  return (
    <pre className="bg-[#020617] text-white text-sm p-4 rounded-lg overflow-x-auto font-mono leading-relaxed">
      <code>{code}</code>
    </pre>
  );
};

export default CodeViewer;
