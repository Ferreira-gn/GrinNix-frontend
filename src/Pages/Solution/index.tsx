import type React from "react";
import SolutionAside from "../../Components/organism/SoulutionAside";
import SolutionList from "./sections/SolutionList";
import SoluctionFilter from "./sections/SoluctionFilter";
import useSoluction from "../../hooks/useSoluction";
import useProblem from "../../hooks/useProblem";
import type { SoluctionFilterType } from "../../types/soluction";
import { useState } from "react";

const Solution: React.FC = () => {
  const [filterType, setFilterType] =
    useState<SoluctionFilterType>("community");
  const userId = "87be0efa-7e2f-4e62-9c99-7079f125567a";
  const { problemId } = useProblem();
  const { filteredSolutions, loading } = useSoluction({
    filterType,
    problemId,
    userId,
  });

  return (
    <div className="h-dvh w-dvw flex flex-col">
      <div className="flex-1 flex">
        <SolutionAside />
        <main className="flex flex-col flex-1 overflow-y-auto scrollbar-thin gap-4">
          <SoluctionFilter
            onChange={(filter) => setFilterType(filter)}
            soluctionLen={filteredSolutions.length}
          />
          <SolutionList solutions={filteredSolutions} isLoading={loading} filteredType={filterType} />
        </main>
      </div>
    </div>
  );
};

export default Solution;
