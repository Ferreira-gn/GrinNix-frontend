import { useContext } from "react";
import { ProblemContext } from "../context/models/ProblemModel";

const useProblem = () => {
  const { ...context } = useContext(ProblemContext);

  return {
    ...context,
  };
};

export default useProblem;
