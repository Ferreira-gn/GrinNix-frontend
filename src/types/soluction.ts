import type { ProblemDifficulty } from "./problemDifficulty";

export type SolutionResponse = {
  id: string;
  code: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
  problem: {
    id: string;
    title: string;
    description: string;
    difficulty: ProblemDifficulty;
  };
  status: string;
  runtimeMs: 0;
  isPublic: true;
  submittedAt: string;
};

export type Solution = {
  id: string;
  problemId: string;
  userId: string;
  problemName: string;
  language: string;
  code: string;
  author: string;
  submittedAt: string;
  runtimeMs: number;
};

export type SoluctionFilterType = "community" | "my";