"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export type Lang = "ko" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextType>({ lang: "ko", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Priority: URL > localStorage > default
    const urlLang = searchParams.get("lang") as Lang | null;
    const savedLang = localStorage.getItem("humor_test_lang") as Lang | null;

    if (urlLang === "en" || urlLang === "ko") {
      setLangState(urlLang);
      localStorage.setItem("humor_test_lang", urlLang);
    } else if (savedLang === "en" || savedLang === "ko") {
      setLangState(savedLang);
    }
  }, [searchParams]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("humor_test_lang", newLang);

    // Update URL with new lang parameter
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
