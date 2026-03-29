import type React from "react";
import ChallengerOption from "../../atom/ChallengerOption";
import { LuBookOpen } from "react-icons/lu";

const ChallengerAside: React.FC = () => {
  return (
    <aside
      className={`
        flex flex-col
        border-r-2 border-r-[#14161A]
        h-dvh max-w-63 w-full
      `}
    >
      <div className="flex flex-col p-4 items-start border-b-2 border-b-[#1C1D25]">
        <h2 className="text-[16px] font-bold tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Grannix
        </h2>
        <p className="text-[14px] text-[#707D8f] font-medium ">
          Desáfios Tecnicos
        </p>
      </div>

      <ul className="flex-1 overflow-y-auto scrollbar-thin py-2">
        <ChallengerOption
          optionId="01"
          title="Two Sum"
          difficulty="EASY"
          isSelected={true}
          onClickOption={(id) => alert(id)}
        />
        <ChallengerOption
          optionId="02"
          title="Two Sum"
          difficulty="HARD"
          isSelected={false}
          onClickOption={(id) => alert(id)}
        />
        <ChallengerOption
          optionId="03"
          title="Two Sum"
          difficulty="MEDIUM"
          isSelected={false}
          onClickOption={(id) => alert(id)}
        />
      </ul>

      <div className=" flex items-center p-5 border-t-[#1C1D25] border-t-2">
        <a
          href="/soluctions"
          className="flex items-center gap-3 text-[#707D8f] font-medium"
        >
          <LuBookOpen />
          Ver Soluções
        </a>
      </div>
    </aside>
  );
};

export default ChallengerAside;
