import type React from "react";
import Aside from "../../Components/molecule/Aside";
import ChallengerDescription from "../../Components/molecule/ChallengerDescription";
import { useState } from "react";

const Home: React.FC = () => {
  const [markdown] = useState(
    `A paragraph with *emphasis* and **strong importance**.

   > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

   * Lists
   * [ ] todo
   * [x] done

   A table:

   | a | b |
   | - | - |
   | test | Test 2 |
   `,
  );

  return (
    <div className="h-dvh w-dvw flex ">
      <Aside />

      <ChallengerDescription
        title="Easy Challenge"
        description={markdown}
        difficulty="EASY"
      />

      <div>{/*Code runner*/}</div>
    </div>
  );
};

export default Home;
