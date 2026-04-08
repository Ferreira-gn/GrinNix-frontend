import type React from "react";
import { useState } from "react";
import type { Solution } from "../../../../types/soluction";
import SolutionItem from "../../../../Components/atom/SolutionItem";
import SoluctionListSkeleton from "./skeleton";
import SoluctionListNotFound from "./notFound";

type Props = {
  solutions: Solution[];
  isLoading: boolean;
};

const SolutionList: React.FC<Props> = ({ solutions, isLoading }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  if (isLoading) {
    return <SoluctionListSkeleton />;
  }

  if (!solutions.length) {
    return <SoluctionListNotFound />;
  }

  return (
    <div className="flex flex-col gap-3 px-6 ">
      {solutions.map((solution) => (
        <SolutionItem
          key={solution.id}
          soluctions={solution}
          isOpen={openId === solution.id}
          onClick={() => handleToggle(solution.id)}
        />
      ))}
    </div>
  );
};

export default SolutionList;
