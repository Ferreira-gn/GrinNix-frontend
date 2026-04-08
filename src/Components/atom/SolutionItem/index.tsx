import type React from "react";
import CodeViewer from "../CodeViewer";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { IoMdCalendar, IoMdTime } from "react-icons/io";
import { LuAlignEndHorizontal } from "react-icons/lu";
import type { Solution } from "../../../../types/soluction";

type Props = {
  soluctions: Solution;
  isOpen: boolean;
  onClick: () => void;
};

const SolutionItem: React.FC<Props> = ({ soluctions, isOpen, onClick }) => {
  const solutionLanguageColorMap: Record<string, string> = {
    Typescript: "text-sky-500",
    Go: "text-sky-500",
    Java: "text-rose-600",
    Python: "text-amber-500",
  };

  return (
    <div
      className="
        bg-[#14161A] hover:bg-[#1C1D25]/70 border rounded border-neutral-800
        shadow-md hover:shadow-lg transition-all duration-300
      "
    >
      <div
        onClick={onClick}
        className="flex justify-between items-center px-5 py-4 cursor-pointer transition"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-base">
              {soluctions.problemName}
            </span>

            <span
              className={`text-xs px-2 py-1 ${solutionLanguageColorMap[soluctions.language]}`}
            >
              {soluctions.language}
            </span>
          </div>

          <div className="text-xs text-gray-400 flex gap-4">
            <span className="flex items-center gap-1.5">
              <IoMdCalendar /> {soluctions.submittedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <LuAlignEndHorizontal />
              O(n)
            </span>
            <span className="flex items-center gap-1.5">
              <IoMdTime />
              {soluctions.runtimeMs}ms
            </span>
            <span className="flex items-center gap-1.5">
              por {soluctions.author}
            </span>
          </div>
        </div>

        <div className="text-gray-400 text-sm">
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-neutral-800 bg-[#020617] rounded-b-2xl">
          <CodeViewer code={soluctions.code} language={soluctions.language} />
        </div>
      )}
    </div>
  );
};

export default SolutionItem;
