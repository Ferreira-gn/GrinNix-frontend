import type React from "react";

const SoluctionListSkeleton: React.FC = () => {
  return (
    <div
      className="
      flex flex-col
      w-full h-full max-h-dvh
      overflow-y-auto px-6  pb-8
      animate-pulse
      gap-4
      "
    >
      <div className="w-full rounded  h-24 bg-[#1f2228]" />
      <div className="w-full rounded  h-24 bg-[#1f2228]" />
      <div className="w-full rounded  h-24 bg-[#1f2228]" />
      <div className="w-full rounded  h-24 bg-[#1f2228]" />
      <div className="w-full rounded  h-24 bg-[#1f2228]" />
    </div>
  );
};

export default SoluctionListSkeleton;
