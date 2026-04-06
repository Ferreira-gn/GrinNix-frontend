import { useCallback, useEffect, useMemo, useState } from "react";
import type { ProblemDifficulty } from "../../types/problemDifficulty";
import { ProblemContext } from "../models/ProblemModel";
import { getProblem, getProblemById } from "../../service/problems";

interface ProblemProviderProps {
  children: React.ReactNode;
}

const ProblemProvider: React.FC<ProblemProviderProps> = ({ children }) => {
  const [problemId, setProblemId] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<ProblemDifficulty>("EASY");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadInitialProblem = useCallback(async () => {
    try {
      setIsLoading(true);
      const problem = await getProblem();
      setDescription(problem[0].description);
      setTitle(problem[0].title);
      setDifficulty(problem[0].difficulty);
      setProblemId(problem[0].id);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const changeProblem = useCallback(async (newProblemId: string) => {
    try {
      setIsLoading(true);

      const problem = await getProblemById(newProblemId);

      if (!problem) {
        console.error("Problem not found");
        return;
      }

      setDescription(problem.description);
      setTitle(problem.title);
      setDifficulty(problem.difficulty);
      setProblemId(problem.id);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitialProblem();
  }, [loadInitialProblem]);

  const contextData = useMemo(
    () => ({
      description,
      difficulty,
      title,
      problemId,
      changeProblem,
      isLoading,
    }),
    [description, changeProblem, title, difficulty, problemId, isLoading],
  );

  return (
    <ProblemContext.Provider value={contextData}>
      {children}
    </ProblemContext.Provider>
  );
};

export default ProblemProvider;
