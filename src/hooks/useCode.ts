import type { TestCase } from "../types/problems";
import { getLanguage } from "../service/language";
import type { CurrentLanguage, Language } from "../types/language";
import { useEffect, useState } from "react";
import { getSignature } from "../service/problems";

const useCode = (problemId: string | null) => {
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [userCode, setUserCode] = useState<string>("");
  const [languages, setLanguages] = useState<Language[]>([]);
  const [currentLanguage, setCurrentLanguage] =
    useState<CurrentLanguage | null>(null);

  const selectCurrentLanguage = (languageId: string) => {
    const languageFinded = languages.find((lang) => lang.id === languageId);

    if (!languageFinded) return;

    switch (languageFinded.name) {
      case "typescript":
        setCurrentLanguage({ id: languageFinded.id, name: "ts" });
        break;
      case "java":
        setCurrentLanguage({ id: languageFinded.id, name: "ja" });
        break;
      case "python":
        setCurrentLanguage({ id: languageFinded.id, name: "py" });
        break;
      case "golang":
        setCurrentLanguage({ id: languageFinded.id, name: "go" });
        break;
      default:
        setCurrentLanguage({ id: languageFinded.id, name: "ts" });
    }
  };

  const getTestCases = (problemId: string) => {};
  const handleRunCode = () => {};
  const handleSubmitCode = () => { };
  
  
  

  useEffect(() => {
    const getLanguages = async () => {
      const language = await getLanguage();
      setLanguages(language);
    };

    getLanguages();
  }, []);

  useEffect(() => {
    if (!problemId || !currentLanguage) return;

    const getSignatureOfProblem = async (
      problemId: string,
      language_id: string,
    ) => {
      if (!problemId || !language_id) return;

      const signature = await getSignature(problemId, language_id);

      if (signature == null) {
        setUserCode(`\n\nSem assinatura para essa linguagem no momento\n\n`);
        return;
      }

      setUserCode(`\n${signature.signature}\n`);
    };

    getSignatureOfProblem(problemId, currentLanguage.id);
  }, [problemId, currentLanguage]);

  return {
    currentLanguage,
    userCode,
    testCases,
    languages,

    setUserCode,
    selectCurrentLanguage,

    handleRunCode,
    handleSubmitCode,
  };
};

export default useCode;
