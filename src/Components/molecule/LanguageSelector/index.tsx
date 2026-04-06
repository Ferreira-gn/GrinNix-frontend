import type React from "react";
import { useState } from "react";
import LanguageOption from "../../atom/LanguageOption";
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
        <LanguageOption
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
