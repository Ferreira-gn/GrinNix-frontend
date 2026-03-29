import { EditorView } from "@codemirror/view";

const codeEditorTheme = EditorView.theme({
  "&": {
    fontFamily: '"Fira Code", "Cascadia Code", monospace',
    fontSize: "14px",
  },
  ".cm-content": {
    fontFamily: '"Fira Code", "Cascadia Code", monospace',
    fontSize: "14px",
    lineHeight: "1.6",
    padding: "16px 0",
  },
  ".cm-gutters": {
    background: "#1F212A",
    border: "none",
    color: "#4a4a5a",
    fontSize: "11px",
    minWidth: "2.5em",
  },
  ".cm-line": {
    padding: "0 16px",
  },
  ".cm-focused": {
    outline: "none",
  },
  "&.cm-editor": {
    background: "#1F212A",
    minHeight: "200px",
    height: "100%",
  },
  ".cm-scroller": {
    overflow: "auto",
    height: "100%",
  },
});

export default codeEditorTheme;
