import type React from "react";
import ChallengerAside from "../../Components/organism/ChallengerAside";
import ChallengerDescription from "../../Components/organism/ChallengerDescription";

const Home: React.FC = () => {
  const challenge = {
    markdown: `
  ## 📄 Descrição

  Dado um array de inteiros **nums** e um inteiro **target**, retorne os **índices** dos dois números que somam ao valor de \`target\`.

  Você pode assumir que cada entrada possui **exatamente uma solução**, e você **não pode** usar o mesmo elemento duas vezes.

  A resposta pode ser retornada em **qualquer ordem**.

  ---

  ## 💡 Exemplos

  ### Exemplo 1

  \`\`\`
  Input:  nums = [2, 7, 11, 15], target = 9
  Output: [0, 1]
  \`\`\`

  > **Explicação:** \`nums[0] + nums[1] == 9\`, portanto retornamos \`[0, 1]\`.

  ---

  ### Exemplo 2

  \`\`\`
  Input:  nums = [3, 2, 4], target = 6
  Output: [1, 2]
  \`\`\`

  > **Explicação:** \`nums[1] + nums[2] == 6\`, portanto retornamos \`[1, 2]\`.

  ---

  ### Exemplo 3

  \`\`\`
  Input:  nums = [3, 3], target = 6
  Output: [0, 1]
  \`\`\`

  ---

  ## 🔒 Restrições

  | Parâmetro | Limite |
  |-----------|--------|
  | Tamanho do array | \`2 <= nums.length <= 10⁴\` |
  | Valor dos elementos | \`-10⁹ <= nums[i] <= 10⁹\` |
  | Valor do target | \`-10⁹ <= target <= 10⁹\` |
  | Soluções válidas | Exatamente **uma** solução existe |

  ---

  ## 🚀 Solução em Python

  \`\`\`python
  from typing import List

  class Solution:
      def twoSum(self, nums: List[int], target: int) -> List[int]:
          seen = {}
          for i, num in enumerate(nums):
              complement = target - num
              if complement in seen:
                  return [seen[complement], i]
              seen[num] = i
  \`\`\`

  ### Complexidade

  - **Tempo:** \`O(n)\` — percorremos o array uma única vez
  - **Espaço:** \`O(n)\` — armazenamos até \`n\` elementos no dicionário

  ---

  ## 🧪 Casos de Teste Adicionais

  - \`nums = [1, 2, 3, 4, 5], target = 9\` → \`[3, 4]\`
  - \`nums = [-1, -2, -3, -4], target = -6\` → \`[1, 3]\`
  - \`nums = [0, 4, 3, 0], target = 0\` → \`[0, 3]\`

  ---

  > 💬 **Dica:** Tente resolver sem usar um dicionário primeiro — depois otimize!`,
  };

  return (
    <div className="h-dvh w-dvw flex ">
      <ChallengerAside />

      <ChallengerDescription
        title="Easy Challenge"
        description={challenge.markdown}
        difficulty="EASY"
      />
    </div>
  );
};

export default Home;
