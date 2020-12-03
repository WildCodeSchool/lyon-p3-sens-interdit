import { createContext } from "react";

const FestivalContext = createContext({
  language: "fr",
  toggleLanguage: () => {},
});

export default FestivalContext;
