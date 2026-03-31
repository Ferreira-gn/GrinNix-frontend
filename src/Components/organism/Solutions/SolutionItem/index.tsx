import type React from "react";
import CodeViewer from "../CodeViewer";

type Solution = {
  id: number;
  title: string;
  language: string;
  code: string;
  author: string;
  date: string;
};

type Props = {
  data: Solution;
  isOpen: boolean;
  onClick: () => void;
};

const SolutionItem: React.FC<Props> = ({ data, isOpen, onClick }) => {
  return (
    <div className="bg-[#0f172a] rounded-2xl border border-neutral-800 shadow-md hover:shadow-lg transition-all duration-300">
      <div
        onClick={onClick}
        className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-[#1e293b] rounded-t-2xl transition"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-base">{data.title}</span>

            <span className="text-xs px-2 py-1 text-yellow-400">
              {data.language}
            </span>
          </div>

          <div className="text-xs text-gray-400 flex gap-4">
            <span>👤 {data.author}</span>
            <span>📅 {data.date}</span>
            <span>⚙️ O(n)</span>
          </div>
        </div>

        <div className="text-gray-400 text-sm">{isOpen ? "▲" : "▼"}</div>
      </div>

      {isOpen && (
        <div className="px-5 pb-5 pt-3 border-t border-neutral-800 bg-[#020617] rounded-b-2xl">
          <CodeViewer code={data.code} />
        </div>
      )}
    </div>
  );
};

export default SolutionItem;
