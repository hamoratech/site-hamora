/* eslint-disable react-refresh/only-export-components */

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang } from "./translations";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>("pt-BR");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("lang") as Lang | null;
      if (stored && translations[stored]) {
        setLangState(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem("lang", next);
    } catch {
      // ignore
    }
  };

  const t = (key: string): string => {
    const current = translations[lang];
    const fallback = translations["en-US"];
    return current[key] ?? fallback[key] ?? key;
  };

  // sem useMemo = sem warning de dependência
  const value: I18nContextValue = {
    lang,
    setLang,
    t,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return ctx;
};
