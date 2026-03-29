import { Suspense, lazy } from "react";
const LazyEditor = lazy(() => import("./LazyEditor"));
import type { SupportedLanguage } from "../../../types/suportedLenguage";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  suportedLanguages: SupportedLanguage;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  suportedLanguages,
  code,
  onChange,
}) => {
  return (
    <div className="flex-2 flex overflow-hidden">
      <Suspense
        fallback={<div className="text-white p-4">Carregando editor...</div>}
      >
        <LazyEditor
          suportedLanguages={suportedLanguages}
          code={code}
          onChange={onChange}
        />
      </Suspense>
    </div>
  );
};

export default CodeEditor;
