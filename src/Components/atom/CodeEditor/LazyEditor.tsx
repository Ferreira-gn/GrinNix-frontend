import CodeMirror, { type Extension } from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { lintGutter } from "@codemirror/lint";
import codeEditorTheme from "./codeEditorTheme";

import { javascript } from "@codemirror/lang-javascript";
import { go } from "@codemirror/lang-go";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";

import syntaxErrorLinter from "../../../utils/syntaxErrorLinter/syntaxErrorLinter";
import type { SupportedLanguage } from "../../../types/suportedLenguage";

interface LazyEditorProps {
  code: string;
  onChange: (code: string) => void;
  suportedLanguages: SupportedLanguage;
}

const LazyEditor: React.FC<LazyEditorProps> = ({
  code,
  suportedLanguages,
  onChange,
}) => {
  const languageMap: Record<SupportedLanguage, Extension> = {
    ts: javascript({ typescript: true, jsx: true }),
    go: go(),
    py: python(),
    ja: java(),
  };

  const codeExtension = [
    languageMap[suportedLanguages],
    codeEditorTheme,
    lintGutter(),
    syntaxErrorLinter,
  ];

  return (
    <CodeMirror
      value={code}
      onChange={onChange}
      extensions={codeExtension}
      theme={oneDark}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLine: true,
        highlightActiveLineGutter: true,
        foldGutter: true,
        autocompletion: true,
        indentOnInput: true,
        bracketMatching: true,
        lintKeymap: true,
      }}
      height="100%"
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    />
  );
};

export default LazyEditor;
