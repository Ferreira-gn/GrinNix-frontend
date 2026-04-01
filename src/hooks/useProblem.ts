import { useContext, useState } from "react";
import { ProblemContext } from "../context/models/ProblemModel";
import type { SupportedLanguage } from "../types/suportedLenguage";
import type { TestCase } from "../types/problems";

const useProblem = () => {
  const { ...context } = useContext(ProblemContext);
  const [language, setLanguage] = useState<SupportedLanguage>("ts");
  const [signature, setSignature] = useState<string>();
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [userCode, setUserCode] = useState<string>("");

  const getSignature = (problemId: string, language_id: string) => {};
  const getTestCases = (problemId: string) => {};
  const handleRunCode = () => {};
  const handleSubmitCode = () => {};

  return {
    ...context,

    userCode,
    language,
    testCases,
    
    
    setLanguage,
    setUserCode,
    
    getSignature,
    getTestCases,
    handleRunCode,
    handleSubmitCode,
  };
};

export default useProblem;
