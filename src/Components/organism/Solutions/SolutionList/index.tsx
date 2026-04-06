import type React from "react";
import { useState } from "react";
import SolutionItem from "../SolutionItem";

type Solution = {
  id: number;
  title: string;
  language: string;
  code: string;
  author: string;
  date: string;
};

type Props = {
  solutions: Solution[];
};

const SolutionList: React.FC<Props> = ({ solutions }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-3">
      {solutions.map((solution) => (
        <SolutionItem
          key={solution.id}
          data={solution}
          isOpen={openId === solution.id}
          onClick={() => handleToggle(solution.id)}
        />
      ))}
    </div>
  );
};

export default SolutionList;