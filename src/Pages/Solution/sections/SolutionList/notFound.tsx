import type React from "react";

const SolutionListNotFound: React.FC = () => {
  return (
    <div className="w-full h-full  flex items-center justify-center px-4 py-8">
      <div className="">
        <div className="bg-[#1f2228] rounded-lg border border-[#2d3139] p-8 text-center space-y-4">
          <h1 className="text-xl font-semibold text-white">
            Nenhuma solução encontrada
          </h1>

          <p className="text-sm text-gray-400 leading-relaxed">
            Ainda não há submissões de solução para este problema. Seja o
            primeiro a contribuir com uma solução!
          </p>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          As soluções aparecerão aqui quando forem enviadas
        </p>
      </div>
    </div>
  );
};

export default SolutionListNotFound;
