import useProblem from "../../../hooks/useProblem";
import ChallengeDescriptionSkeleton from "../../atom/ChallengerDescriptionSkeleton";
import MarkdownRenderer from "../../atom/MarkdownRenderer";

const ChallengerDescription: React.FC = () => {
  const { description, title, difficulty, isLoading } = useProblem();

  const DifficultyMap = {
    EASY: "text-emerald-500",
    MEDIUM: "text-amber-600",
    HARD: "text-rose-500",
  };

  if (isLoading) {
    return <ChallengeDescriptionSkeleton />;
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
          className={`relative -top-2 text-[14px] font-medium ${DifficultyMap[difficulty]}`}
        >
          {difficulty}
        </p>
      </div>

      <MarkdownRenderer content={description} />
    </div>
  );
};

export default ChallengerDescription;
