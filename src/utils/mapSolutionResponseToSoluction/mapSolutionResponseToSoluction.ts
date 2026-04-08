import type { Solution, SolutionResponse } from "../../types/soluction";
import formatDate from "../formatDate/formatDate";

export const mapSolutionResponseToSolution = (
  data: SolutionResponse[],
): Solution[] => {
  return data.map((item) => ({
    id: item.id,
    userId: item.user.id,
    problemId: item.problem.id,
    problemName: item.problem.title,
    language: "Typescript",
    code: item.code,
    author: item.user.username,
    submittedAt: formatDate(item.submittedAt),
    runtimeMs: item.runtimeMs,
  }));
};
