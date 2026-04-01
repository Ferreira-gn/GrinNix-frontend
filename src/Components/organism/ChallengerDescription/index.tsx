import useProblem from "../../../hooks/useProblem";
import MarkdownRenderer from "../../atom/MarkdownRenderer";

const ChallengerDescription: React.FC = () => {
  const { description, title, difficulty, isLoading } = useProblem();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let difficultyColor = "";

  switch (difficulty) {
    case "EASY":
      difficultyColor = "text-emerald-500";
      break;
    case "MEDIUM":
      difficultyColor = "text-amber-600";
      break;
    case "HARD":
      difficultyColor = "text-rose-500";
      break;
    default:
      difficultyColor = "text-white-500";
  }

  return (
    <div
      className="
      flex flex-col
      max-w-200 w-full h-full max-h-dvh
      border-r-2 border-r-[#14161A]
      overflow-y-auto px-6 pt-10 pb-8
      "
    >
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-2xl font-bold relative">{title}</h2>
        <p
          className={`relative -top-2 text-[14px] font-medium ${difficultyColor}`}
        >
          {difficulty}
        </p>
      </div>

      <MarkdownRenderer content={description} />
    </div>
  );
};

export default ChallengerDescription;
