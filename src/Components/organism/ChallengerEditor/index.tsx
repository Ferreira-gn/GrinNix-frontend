import CodeEditor from "../../atom/CodeEditor";
import ChallengerEditorHeader from "../../molecule/ChallengerEditorHeader";
import TestCases from "../../molecule/TestCases";

interface ChallengerEditorProps {
  challengerAssignature?: string;
}

const ChallengerEditor: React.FC<ChallengerEditorProps> = () => {
  const mockTestCases = [
    {
      expected: "42",
      input: "6 * 7",
      passed: true,
    },
    {
      expected: "Hello, World!",
      input: "console.log('Hello, World!')",
      passed: true,
    },
    {
      expected: "Error: Division by zero",
      input: "10 / 0",
      passed: false,
    },
    {
      expected: "true",
      input: "isPalindrome('racecar')",
      passed: true,
    },
    {
      expected: "false",
      input: "isPalindrome('hello')",
      passed: false,
    },
  ];

  return (
    <div
      className="
        flex flex-1 flex-col
        w-full h-full max-h-dvh
        border-r-2 border-r-[#14161A]
      "
    >
      <ChallengerEditorHeader />
      <CodeEditor code="" onChange={() => ""} suportedLanguages="go" />
      <TestCases testCases={mockTestCases} />
    </div>
  );
};

export default ChallengerEditor;
