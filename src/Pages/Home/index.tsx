import type React from "react";
import Aside from "../../Components/molecule/Aside";

const Home: React.FC = () => {
  return (
    <div className="h-dvh w-dvw flex ">
      <Aside />

      <div
        className="
        flex flex-col
        max-w-200 w-full h-dvh
        border-r-2 border-r-[#14161A]
        "
      >
        {/*Markdown render*/}
      </div>

      <div>
        {/*Code runner*/}
      </div>
    </div>
  );
};

export default Home;
