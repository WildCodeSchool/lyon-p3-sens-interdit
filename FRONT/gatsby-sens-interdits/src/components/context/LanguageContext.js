import React, { createContext } from "react";

const LanguageContext = createContext({
  language: "fr",
  toggleLanguage: () => {},
});

export default LanguageContext;
