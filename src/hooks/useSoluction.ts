import { useEffect, useState } from "react";
import type { SoluctionFilterType, Solution } from "../types/soluction";
import { getSoluctions } from "../service/soluctions";
import { mapSolutionResponseToSolution } from "../utils/mapSolutionResponseToSoluction/mapSolutionResponseToSoluction";

interface UseSolutionParams {
  filterType: SoluctionFilterType;
  problemId: string | null;
  userId?: string | null;
}

interface UseSolutionReturn {
  filteredSolutions: Solution[];
  loading: boolean;
}

const useSolution = ({
  filterType,
  problemId,
  userId,
}: UseSolutionParams): UseSolutionReturn => {
  const [filteredSolutions, setFilteredSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!problemId) return;

    const fetchAndFilter = async () => {
      setLoading(true);
      try {
        const solutions = await getSoluctions();
        const mapped = mapSolutionResponseToSolution(solutions);

        const filtered = mapped.filter((solution) => {
          const matchesProblem = solution.problemId === problemId;

          if (filterType === "community") {
            return matchesProblem;
          }

          if (filterType === "my" && userId) {
            return matchesProblem && solution.userId === userId;
          }

          return false;
        });

        setFilteredSolutions(filtered);
      } finally {
        setLoading(false);
      }
    };

    fetchAndFilter();
  }, [problemId, filterType, userId]);

  return { filteredSolutions, loading };
};

export default useSolution;
