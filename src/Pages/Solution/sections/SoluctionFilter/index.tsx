import type React from "react";
import { LuFilter } from "react-icons/lu";
import SelectorOption from "../../../../Components/atom/SelectorOption";
import { useState } from "react";
import type { SoluctionFilterType } from "../../../../types/soluction";

interface SoluctionFilterProps {
  onChange: (value: SoluctionFilterType) => void;
  soluctionLen: number;
}

const SoluctionFilter: React.FC<SoluctionFilterProps> = ({
  onChange,
  soluctionLen,
}) => {
  const [filterOption, setFilterOption] =
    useState<SoluctionFilterType>("community");

  const handleFilterChange = (value: SoluctionFilterType) => {
    setFilterOption(value);
    onChange(value);
  };

  return (
    <div className="h-19.75   border-b-3 border-[#14161A] px-6 py-3 flex items-center gap-3">
      <button
        className="px-3 py-1 font-mono cursor-pointer active:scale-95"
        type="button"
      >
        <LuFilter size={16} />
      </button>

      <SelectorOption
        selected={filterOption === "community"}
        title={"Soluções da comunidade"}
        onClick={() => handleFilterChange("community")}
      />

      <SelectorOption
        selected={filterOption === "my"}
        title={"Minhas soluções"}
        onClick={() => handleFilterChange("my")}
      />

      <span className="ml-auto text-xs font-medium font-mono text-slate-500">
        {soluctionLen} soluções
      </span>
    </div>
  );
};

export default SoluctionFilter;
