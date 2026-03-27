import MarkdownRenderer from "../../atom/MarkdownRenderer";

interface ChallengerDescriptionProps {
  title: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
}

const ChallengerDescription: React.FC<ChallengerDescriptionProps> = ({
  title,
  description,
  difficulty,
}) => {
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
        <p className="relative -top-2 text-[14px] font-medium text-emerald-500">
          {difficulty}
        </p>
      </div>

      <MarkdownRenderer content={description} />
    </div>
  );
};

export default ChallengerDescription;
