import React, { useState, useEffect } from "react";
import LanguageContext from "./LanguageContext";
import { useCookies } from "react-cookie";

export default props => {
  const [hasMounted, setHasMounted] = useState(false);
  const [language, setLanguage] = useState("fr");
  const [LANG, setLANG] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["language"]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    setCookie("language", language, "sameSite=true");
    if (!hasMounted) {
      setLanguage(cookies.language);
    }
    language === "en" ? setLANG("_en") : setLANG("");
  }, [language]);

  const toggleLanguage = () => {
    language === "fr" ? setLanguage("en") : setLanguage("fr");
  };

  return (
    <LanguageContext.Provider value={{ language, LANG, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
