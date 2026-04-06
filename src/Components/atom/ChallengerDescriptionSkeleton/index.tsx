import type React from "react";

const ChallengeDescriptionSkeleton: React.FC = () => {
  return (
    <div
      className="
      flex flex-col
      max-w-200 w-full h-full max-h-dvh
      border-r-2 border-r-[#14161A]
      overflow-y-auto px-6 pt-10 pb-8
      animate-pulse
      "
    >
      <div className="flex items-center gap-3 mb-10">
        <div className="h-10 w-48 bg-[#1f2228] rounded"></div>
        <div className="h-6 w-18 bg-[#1f2228] rounded relative -top-2"></div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="h-5 w-full bg-[#1f2228] rounded"></div>
        <div className="h-5 w-5/6 bg-[#1f2228] rounded"></div>
        <div className="h-5 w-4/6 bg-[#1f2228] rounded"></div>

        <div className="h-5 w-full bg-[#1f2228] rounded mt-4"></div>
        <div className="h-5 w-3/4 bg-[#1f2228] rounded"></div>
      </div>

      <div className="h-44 w-full my-10  bg-[#1f2228] rounded"></div>

      <div className="flex flex-col gap-4">
        <div className="h-5 w-5/6 bg-[#1f2228] rounded"></div>
        <div className="h-5 w-4/6 bg-[#1f2228] rounded"></div>

        <div className="h-5 w-full bg-[#1f2228] rounded mt-4"></div>
        <div className="h-5 w-3/4 bg-[#1f2228] rounded"></div>
      </div>

      <div className="h-44 w-full my-10  bg-[#1f2228] rounded"></div>
    </div>
  );
};

export default ChallengeDescriptionSkeleton;
