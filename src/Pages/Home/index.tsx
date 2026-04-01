import type React from "react";
import ChallengerDescription from "../../Components/organism/ChallengerDescription";
import ChallengerEditor from "../../Components/organism/ChallengerEditor";
import ProblemProvider from "../../context/providers/QuestionProvider";
import ChallengerAside from "../../Components/organism/ChallengerAside";

const Home: React.FC = () => {
  return (
    <ProblemProvider>
      <div className="h-dvh w-dvw flex ">
        <ChallengerAside />
        <ChallengerDescription />
        <ChallengerEditor />
      </div>
    </ProblemProvider>
  );
};

export default Home;
