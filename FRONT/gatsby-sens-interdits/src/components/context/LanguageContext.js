import React, { createContext } from "react";

const LanguageContext = createContext({
  language: "fr",
  LANG: "",
  toggleLanguage: () => {},
});

export default LanguageContext;
