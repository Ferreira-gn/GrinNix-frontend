import { LuChevronRight } from "react-icons/lu";

interface ChallengerOptionProps {
  optionId: string;
  title: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  isSelected: boolean;
  onClickOption: (optionId: string) => void;
}

const ChallengerOption: React.FC<ChallengerOptionProps> = ({
  optionId,
  title,
  difficulty,
  isSelected,
  onClickOption,
}) => {
  let difficultyColor = "";

  switch (difficulty) {
    case "EASY":
      difficultyColor = "bg-emerald-500";
      break;
    case "MEDIUM":
      difficultyColor = "bg-amber-600";
      break;
    case "HARD":
      difficultyColor = "bg-rose-500";
      break;
    default:
      difficultyColor = "bg-white-500";
  }

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
      <div className={`w-2 h-2 rounded-full ${difficultyColor}`} />

      <div className="flex-1">
        <p className="text-sm  font-medium truncate capitalize w-40">{title}</p>
        <p className="text-xs  text-[#707D8f]  capitalize">
          {difficulty.toLowerCase()}
        </p>
      </div>

      {isSelected && <LuChevronRight className="text-emerald-400" />}
    </li>
  );
};

export default ChallengerOption;
