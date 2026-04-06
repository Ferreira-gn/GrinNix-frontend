import axios from "axios";
import type {
  Problem,
  ProblemsResponse,
  SignatureResponse,
} from "../types/problems";

const getProblem = async (): Promise<ProblemsResponse> => {
  try {
    const response = await axios.get(`http://localhost:4050/api/v1/problems`);

    if (!response.data) {
      return [];
    }

    return response.data as ProblemsResponse;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getProblemById = async (problemId: string): Promise<Problem | null> => {
  try {
    const response = await axios.get(
      `http://localhost:4050/api/v1/problems/${problemId}`,
    );

    if (!response.data) {
      return null;
    }

    return response.data as Problem;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getTestCasesByProblemId = async (
  problemId: string,
): Promise<ProblemsResponse> => {
  // try {
  //   const response = await axios.get(`http://localhost:4050/api/v1/problems`);
  //   console.log(response.data);
  //   if (!response.data) {
  //     return [];
  //   }
  //   return response.data as ProblemsResponse;
  // } catch (error) {
  //   console.error(error);
  //   return [];
  // }
};

const getSignature = async (
  problemId: string,
  languageId: string,
): Promise<SignatureResponse | null> => {
  try {
    const response = await axios.get(
      `http://localhost:4050/api/v1/signatures/languages/${languageId}/problems/${problemId}`,
    );

    if (!response.data) {
      return null;
    }

    return response.data as SignatureResponse;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getProblem, getProblemById, getTestCasesByProblemId, getSignature };
