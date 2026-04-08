import type React from "react";
import ChallengerDescription from "../../Components/organism/ChallengerDescription";
import ChallengerEditor from "../../Components/organism/ChallengerEditor";
import ChallengerAside from "../../Components/organism/ChallengerAside";

const Home: React.FC = () => {
  return (
    <div className="h-dvh w-dvw flex ">
      <ChallengerAside />
      <ChallengerDescription />
      <ChallengerEditor />
    </div>
  );
};

export default Home;
