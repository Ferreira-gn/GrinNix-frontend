import { createContext } from "react";
import type { ProblemDifficulty } from "../../types/problemDifficulty";

interface ProblemContextType {
  problemId: string | null;
  title: string;
  description: string;
  difficulty: ProblemDifficulty;
  isLoading: boolean;
  changeProblem: React.Dispatch<React.SetStateAction<string>>;
}

const ProblemContextInit: ProblemContextType = {
  problemId: "",
  title: "",
  description: "",
  difficulty: "EASY",
  isLoading: true,
  changeProblem: async () => {},
};

export const ProblemContext =
  createContext<ProblemContextType>(ProblemContextInit);
