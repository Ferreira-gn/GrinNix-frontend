import { useEffect, useState, useCallback } from "react";
import { createSoluctions, getSoluctions } from "../service/soluctions";
import { mapSolutionResponseToSolution } from "../utils/mapSolutionResponseToSoluction/mapSolutionResponseToSoluction";
import type { CurrentLanguage } from "../types/language";

interface UseProblemCodeReturn {
  userCode: string | undefined;
  setUserCode: (code: string) => void;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  submitCode: () => Promise<void>;
}

const fetchProblemCode = async (problemId: string, userId?: string) => {
  const solutions = await getSoluctions();
  const mapped = mapSolutionResponseToSolution(solutions);

  const filtered = mapped.findLast((solution) => {
    const matchesProblem = solution.problemId === problemId;
    return matchesProblem && solution.userId === userId;
  });

  return filtered;
};

/**
 * Hook para gerenciar código de um problema
 * Busca código submetido ou assinatura padrão
 *
 * @param problemId - ID do problema
 * @param currentLanguage - Linguagem selecionada
 * @returns Estado do código e funções de controle
 *
 * @example
 * const { userCode, setUserCode, loading, isSubmitted } = useProblemCode(
 *   problemId,
 *   currentLanguage
 * );
 */
export const useProblemCode = (
  problemId: string | null,
  userId: string,
  currentLanguage: CurrentLanguage | null,
): UseProblemCodeReturn => {
  const [userCode, setUserCode] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Função para carregar o código
  const loadCode = useCallback(async () => {
    if (!problemId || !currentLanguage) {
      setUserCode("");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await fetchProblemCode(problemId, userId);

      if (!result || !currentLanguage) {
        setUserCode(undefined);
        setError("Erro ao buscar código");
        setLoading(false);
        return;
      }

      setUserCode(result.code);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao buscar código";
      setError(errorMessage);
      setUserCode("\n\nErro ao buscar código. Tente novamente.\n\n");
    } finally {
      setLoading(false);
    }
  }, [problemId, userId, currentLanguage]);

  // Efeito para carregar código quando problema ou linguagem mudam
  useEffect(() => {
    loadCode();
  }, [loadCode]);

  const submitCode = useCallback(async () => {
    if (!problemId || !currentLanguage || !userCode) {
      setError("Erro ao enviar código");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await createSoluctions(
        problemId,
        'a67fa47e-30ba-42e0-9ee9-f6a30fab0eab',
        userId,
        userCode,
      );

      if (!result) {
        setError("Erro ao enviar código");
        alert("Erro ao enviar código");
        setLoading(false);
        return;
      }

      alert("Código enviado com sucesso!");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao enviar código";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [problemId, userId, currentLanguage, userCode]);

  // Função para recarregar manualmente
  const refetch = useCallback(async () => {
    await loadCode();
  }, [loadCode]);

  return {
    userCode,
    submitCode,
    setUserCode,
    loading,
    error,
    refetch,
  };
};

export default useProblemCode;
