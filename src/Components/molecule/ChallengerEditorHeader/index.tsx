import type React from "react";
import ButtonDefault from "../../atom/ButtonDefautl";
import { LuPlay, LuSend } from "react-icons/lu";
import LanguageSelector from "../LanguageSelector";
import type { Language } from "../../../types/language";

interface ChallengerEditorHeaderProps {
  onRun: () => void;
  onSubmit: () => Promise<void>;
  languages: Language[];
  onLanguageChange: (languageId: string) => void;
}

const ChallengerEditorHeader: React.FC<ChallengerEditorHeaderProps> = ({
  onRun,
  onSubmit,
  languages,
  onLanguageChange,
}) => {
  
  return (
    <div className="flex justify-between items-center py-2.5 px-3.5 border-b-3 border-b-[#14161A]">
      <LanguageSelector languages={languages} onLanguageChange={onLanguageChange} />

      <div className="flex gap-2">
        <ButtonDefault variant="outline" size="md" onClick={() => onRun()}>
          <LuPlay size={16} />
          Rodar
        </ButtonDefault>
        <ButtonDefault size="md" onClick={() => onSubmit()}>
          <LuSend size={18} />
          Enviar
        </ButtonDefault>
      </div>
    </div>
  );
};

export default ChallengerEditorHeader;
