import type { SupportedLanguage } from "./suportedLenguage";

interface Language {
  id: string;
  name: string;
  version: string;
  isActive: boolean;
}

interface CurrentLanguage {
  id: string;
  name: SupportedLanguage;
}

type LanguagesResponse = Language[];

export type { Language, CurrentLanguage, LanguagesResponse };
