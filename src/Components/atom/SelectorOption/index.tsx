import type React from "react";

interface SelectorOptionProps {
  selected: boolean;
  title: string;
  onClick: () => void;
}

const SelectorOption: React.FC<SelectorOptionProps> = ({
  selected,
  title,
  onClick,
}) => {
  const variants = {
    default: `px-3.5 py-1.5 text-sm font-mono rounded transition-all
       duration-0 active:scale-95 cursor-pointer`,
    base: "text-slate-500 hover:text-slate-200/80 ",
    selected: `bg-emerald-500/15 text-emerald-500 border-[1px]
      border-emerald-500/30`,
  };

  return (
    <button
      className={` ${variants.default} ${selected ? variants.selected : variants.base}`}
      onClick={onClick}
      type="button"
    >
      {title}
    </button>
  );
};

export default SelectorOption;
