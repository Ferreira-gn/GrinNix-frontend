import type React from "react";
import { useState } from "react";
import SelectorOption from "../../atom/SelectorOption";
import type { Language } from "../../../types/language";

interface LanguageSelectorProps {
  languages: Language[];
  onLanguageChange: (languageId: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  onLanguageChange,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleLanguageChange = (languageId: string) => {
    setSelectedLanguage(languageId);
    onLanguageChange(languageId);
  };

  return (
    <div className="flex gap-2">
      {languages.map((value) => (
        <SelectorOption
          key={value.id}
          selected={value.id === selectedLanguage}
          title={value.name}
          onClick={() => handleLanguageChange(value.id)}
        />
      ))}
    </div>
  );
};

export default LanguageSelector;
