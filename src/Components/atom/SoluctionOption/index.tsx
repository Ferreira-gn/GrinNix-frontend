import type React from "react";

interface SoluctionOptionProps {
  optionId: string;
  title: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  isSelected: boolean;
  onClickOption: (optionId: string) => void;
}

const SoluctionOption: React.FC<SoluctionOptionProps> = ({
  difficulty,
  isSelected,
  onClickOption,
  optionId,
  title,
}) => {
  const difficultyColorMap = {
    EASY: "text-emerald-500",
    MEDIUM: "text-amber-600",
    HARD: "text-rose-500",
  };

  return (
    <li
      className={`
        flex items-center w-full text-left px-4 py-3 gap-3
        active:scale-[0.98]
        transition-all duration-150 cursor-pointer
         hover:bg-[#1C1D25]/60
        ${isSelected ? "bg-[#4cd17c]/18  border-l-emerald-500 border-l-4" : ""}
      `}
      onClick={() => onClickOption(optionId)}
    >
      <div className="flex-1">
        <p className="text-sm  font-medium truncate capitalize w-40">{title}</p>

        <div className="flex items-center gap-2">
          <p
            className={`text-xs  text-[#707D8f]  capitalize ${difficultyColorMap[difficulty]}`}
          >
            {difficulty.toLowerCase()}
          </p>
        </div>
      </div>
    </li>
  );
};

export default SoluctionOption;
