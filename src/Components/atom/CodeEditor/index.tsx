import { Suspense, lazy } from "react";
const LazyEditor = lazy(() => import("./LazyEditor"));

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  suportedLanguages: "ts" | "go" | "py" | "ja";
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
