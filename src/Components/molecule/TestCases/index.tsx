import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import TestCaseOption from "../../atom/TestCaseOption";
import type { TestCase } from "../../../utils/testCases/testCases";

interface TestCasesProps {
  testCases: TestCase[];
}

const TestCases: React.FC<TestCasesProps> = ({ testCases }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-transparent   max-h-113 overflow-y-hidden ">
      <div
        className="flex p-4 justify-between items-center cursor-pointer "
        onClick={toggleOpen}
      >
        <span className="text-sm font-medium text-gray-400">TEST CASES</span>
        {isOpen ? (
          <LuChevronDown className="text-gray-400 w-5 h-5" />
        ) : (
          <LuChevronUp className="text-gray-400 w-5 h-5" />
        )}
      </div>

      {isOpen && (
        <div className="max-h-100 pb-5 px-4 space-y-4 overflow-y-auto">
          {testCases.map((testCase, index) => (
            <TestCaseOption
              key={index}
              number={index + 1}
              expected={testCase.expected}
              input={testCase.input}
              passed={testCase.passed}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestCases;
