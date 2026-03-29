import type React from "react";
import type { SupportedLanguage } from "../../../types/suportedLenguage";
import { useState } from "react";
import LanguageOption from "../../atom/LanguageOption";

interface LanguageSelectorProps {
  onLanguageChange: (language: SupportedLanguage) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
}) => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<SupportedLanguage>("ts");

  const handleLanguageChange = (language: SupportedLanguage) => {
    setSelectedLanguage(language);
    onLanguageChange(language);
  };

  const languagesOptions: Record<SupportedLanguage, string> = {
    ts: "TypeScript",
    ja: "java",
    go: "Go",
    py: "Python",
  };

  return (
    <div className="flex gap-2">
      {Object.entries(languagesOptions).map(([key, value]) => (
        <LanguageOption
          key={key}
          selected={key === selectedLanguage}
          title={value}
          onClick={() => handleLanguageChange(key as SupportedLanguage)}
        />
      ))}
    </div>
  );
};

export default LanguageSelector;
