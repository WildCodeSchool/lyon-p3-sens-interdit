import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function AddressList() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="footer-list-link">
      <ul>
        <li className="arrow">
          Association Sens Interdits 14, rue Basse Combalot 69007 Lyon, France
        </li>
        <li className="arrow">{language === "fr" ? "Tél :" : "Phone"} +33 (0)9 67 02 00 85</li>
        <li className="arrow">Mail : festivalsensinterdits@gmail.com</li>
      </ul>
    </div>
  );
}
