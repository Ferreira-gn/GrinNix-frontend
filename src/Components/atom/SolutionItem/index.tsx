import type React from "react";
import CodeViewer from "../CodeViewer";
import { LuChevronDown, LuChevronUp, LuTrash } from "react-icons/lu";
import { IoMdCalendar, IoMdTime } from "react-icons/io";
import { LuAlignEndHorizontal } from "react-icons/lu";
import type { SoluctionFilterType, Solution } from "../../../types/soluction";
import { deleteSoluction } from "../../../service/soluctions";

type Props = {
  soluctions: Solution;
  isOpen: boolean;
  filteredType: SoluctionFilterType;
  onClick: () => void;
};

const SolutionItem: React.FC<Props> = ({
  soluctions,
  isOpen,
  onClick,
  filteredType,
}) => {
  const solutionLanguageColorMap: Record<string, string> = {
    Typescript: "text-sky-500",
    Go: "text-sky-500",
    Java: "text-rose-600",
    Python: "text-amber-500",
  };

  const handleDelete = async () => {
    const hasDeleted = await deleteSoluction(soluctions.id);

    if (hasDeleted) {
      alert("Solução deletada com sucesso!");
      window.location.reload();
    } else {
      alert("Erro ao deletar a solução!");
    }
  };

  return (
    <div
      className="
        bg-[#14161A] hover:bg-[#1C1D25]/70 border rounded border-neutral-800
        shadow-md hover:shadow-lg transition-all duration-300
      "
    >
      <div className="flex justify-between items-center px-5 py-4 cursor-pointer transition">
        <div className="flex gap-2 items-start">
          {filteredType === "my" && (
            <button
              onClick={handleDelete}
              type="button"
              className="cursor-pointer"
            >
              <LuTrash />
            </button>
          )}

          <div className="flex flex-1 flex-col gap-2">
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
        </div>

        <button
          type="button"
          onClick={onClick}
          className="flex flex-1 h-10 cursor-pointer justify-end text-gray-400 text-sm"
        >
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </button>
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
