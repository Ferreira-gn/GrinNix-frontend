import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

interface TestCaseOptionProps {
  input: string;
  expected: string;
  passed?: boolean;
  number: number;
}

const TestCaseOption: React.FC<TestCaseOptionProps> = ({
  input,
  expected,
  passed,
  number,
}) => {
  return (
    <div
      className={`flex items-start gap-3 p-3 rounded border transition-all duration-200 ${
        passed === undefined
          ? "border-gray-700 bg-transparent"
          : passed
            ? "border-emerald-800 bg-emerald-500/5"
            : "border-rose-800 bg-rose-500/5"
      }`}
    >
      <div className="mt-0.5">
        {passed === undefined ? null : passed ? (
          <AiOutlineCheck className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <AiOutlineClose className="w-3.5 h-3.5 text-rose-400" />
        )}
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-xs font-mono text-gray-400 font-medium">Case {number}</p>
        <p className="text-xs font-mono">
          <span className="text-gray-400 font-medium">Input : </span>
          <span className="text-white">{input}</span>
        </p>
        {expected !== undefined && (
          <p className="text-xs font-mono">
            <span className="text-gray-400 font-medium">Expected: </span>
            <span className="text-emerald-400">{expected}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default TestCaseOption;
