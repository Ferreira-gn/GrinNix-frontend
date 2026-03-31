import type React from "react";
import ChallengerAside from "../../Components/organism/ChallengerAside";
import SolutionList from "../../Components/organism/Solutions/SolutionList";

const Solution: React.FC = () => {
  // teste - (depois vem do backend)
  const solutions = [
    {
      id: 1,
      title: "Hash Map",
      language: "javascript",
      code: `function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
}`,
      author: "user1",
      date: "2026-03-29",
    },
    {
      id: 2,
      title: "Brute Force",
      language: "python",
      code: `def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]`,
      author: "user2",
      date: "2026-03-28",
    },
  ];

  return (
    <div className="h-dvh w-dvw flex bg-[#020617] text-white">
      <ChallengerAside />

      <div className="flex-1 px-6 py-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Soluções da Comunidade</h1>

        <SolutionList solutions={solutions} />
      </div>
    </div>
  );
};

export default Solution;
