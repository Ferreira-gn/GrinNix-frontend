import useCode from "../../../hooks/useCode";
import useProblem from "../../../hooks/useProblem";
import CodeEditor from "../../atom/CodeEditor";
import ChallengerEditorHeader from "../../molecule/ChallengerEditorHeader";
import TestCases from "../../molecule/TestCases";

interface ChallengerEditorProps {
  challengerAssignature?: string;
}

const ChallengerEditor: React.FC<ChallengerEditorProps> = () => {
  const { problemId } = useProblem();
  const {
    currentLanguage,
    languages,
    userCode,
    setUserCode,
    handleRunCode,
    handleSubmitCode,
    selectCurrentLanguage,
  } = useCode(problemId);



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
        onSubmit={handleSubmitCode}
      />
      <CodeEditor
        code={userCode}
        onChange={setUserCode}
        suportedLanguages={currentLanguage?.name ?? "ts"}
      />
      <TestCases testCases={[]} />
    </div>
  );
};

export default ChallengerEditor;
