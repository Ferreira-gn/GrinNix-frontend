import axios from "axios";
import type { SolutionResponse } from "../types/soluction";

const getSoluctions = async (): Promise<SolutionResponse[]> => {
  try {
    const response = await axios.get(
      `http://localhost:4050/api/v1/submissions`,
    );

    if (!response.data) {
      return [];
    }

    return response.data as SolutionResponse[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const createSoluctions = async (
  ProblemId: string,
  languageId: string,
  userId: string,
): Promise<boolean> => {
  try {
    const response = await axios.post(
      `http://localhost:4050/api/v1/submissions/users/${userId}/problems/${ProblemId}/language/${languageId}`,
    );

    if (response.status === 200) {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { getSoluctions, createSoluctions };
