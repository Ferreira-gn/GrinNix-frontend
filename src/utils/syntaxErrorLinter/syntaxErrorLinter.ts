import { syntaxTree } from "@codemirror/language";
import { linter, type Diagnostic } from "@codemirror/lint";

const syntaxErrorLinter = linter((view) => {
  const diagnostics: Diagnostic[] = [];

  syntaxTree(view.state)
    .cursor()
    .iterate((node) => {
      if (node.type.isError) {
        diagnostics.push({
          from: node.from,
          to: node.to,
          severity: "error",
          message: "Erro de sintaxe",
        });
      }
    });

  return diagnostics;
});

export default syntaxErrorLinter;
