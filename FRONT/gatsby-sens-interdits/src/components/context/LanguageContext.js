import React, { createContext } from "react";

const LanguageContext = createContext({
  english: false,
  toggleEnglish: () => {},
});

export default LanguageContext;
