import useCode from "../../../hooks/useCode";
import useProblem from "../../../hooks/useProblem";
import useProblemCode from "../../../hooks/useProblemCode";
import CodeEditor from "../../atom/CodeEditor";
import ChallengerEditorHeader from "../../molecule/ChallengerEditorHeader";
import TestCases from "../../molecule/TestCases";

interface ChallengerEditorProps {
  challengerAssignature?: string;
}

const ChallengerEditor: React.FC<ChallengerEditorProps> = () => {
  const userId = "87be0efa-7e2f-4e62-9c99-7079f125567a";

  const { problemId } = useProblem();
  const {
    currentLanguage,
    languages,
    userCode,
    handleRunCode,
    selectCurrentLanguage,
  } = useCode(problemId);
  const {
    userCode: problemUserCode,
    setUserCode,
    submitCode,
  } = useProblemCode(problemId, userId, currentLanguage);

  return (
    <div
      className="
        flex flex-1 flex-col
        w-full h-full max-h-dvh
        border-r-2 border-r-[#14161A]
      "
    >
      <ChallengerEditorHeader
        onLanguageChange={selectCurrentLanguage}
        languages={languages}
        onRun={handleRunCode}
        onSubmit={submitCode}
      />
      <CodeEditor
        code={problemUserCode ? problemUserCode : userCode}
        onChange={setUserCode}
        suportedLanguages={currentLanguage?.name ?? "ts"}
      />
      <TestCases testCases={[]} />
    </div>
  );
};

export default ChallengerEditor;
