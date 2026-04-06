import type { ProblemDifficulty } from "./problemDifficulty";

export interface Language {
  id: string;
  name: string;
  version: string;
  isActive: boolean;
}

export interface Signature {
  id: string;
  signature: string;
  language: Language;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: ProblemDifficulty;
  signature: Signature;
}

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  isHidden: boolean;
  testCaseExemple: string;
  passed?: boolean;
}

export interface SignatureResponse {
  id: string;
  signature: string;
  language: Language;
  problem: Problem;
}

export type ProblemsResponse = Problem[];
