import type React from "react";
import { BiSolidChalkboard } from "react-icons/bi";
import SoluctionOption from "../../atom/SoluctionOption";
import type { Problem } from "../../../types/problems";
import { useCallback, useEffect, useState } from "react";
import { getProblem } from "../../../service/problems";
import useProblem from "../../../hooks/useProblem";

const SolutionAside: React.FC = () => {
  const { problemId, changeProblem } = useProblem();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProblems = useCallback(async () => {
    try {
      setIsLoading(true);
      const problem = await getProblem();
      setProblems(problem);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProblems();
  }, [getProblems]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <aside
      className="
      flex flex-col
      border-r-2 border-r-[#14161A]
      h-full max-w-63 w-full
      "
    >
      <div className="flex flex-col p-4 items-start border-b-2 border-b-[#1C1D25]">
        <h2 className="text-[16px] font-bold tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Grannix
        </h2>
        <p className="text-[14px] text-[#707D8f] font-medium ">
          Soluções dos desafios
        </p>
      </div>

      <ul className="flex-1 overflow-y-auto scrollbar-thin py-2">
        {problems.map((item) => (
          <SoluctionOption
            key={item.id}
            optionId={item.id}
            title={item.title}
            difficulty={item.difficulty}
            isSelected={item.id === problemId}
            onClickOption={(id) => {
              if (problemId === item.id) {
                return;
              }

              changeProblem(id);
            }}
          />
        ))}
      </ul>

      <div className=" flex items-center  p-5 border-t-[#1C1D25] border-t-2">
        <a
          href="/challenges"
          className="flex items-center  gap-3 text-[#707D8f] font-medium"
        >
          <BiSolidChalkboard />
          Ver Desafios
        </a>
      </div>
    </aside>
  );
};

export default SolutionAside;
