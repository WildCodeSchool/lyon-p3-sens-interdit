import React, { useContext } from "react";
import "./Footer.css";
import Logo from "../Header/Logo";
import SocialNetwork from "../Header/SocialNetwork";
import AddressList from "./AddressList";
import ListLink from "./ListLink";
import Newsletter from "./Newsletter";
import LanguageContext from "../../context/LanguageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  return (
    <footer>
      <div className="wrapper-footer">
        <div className="footer-column1">
          <Logo />
          <div className="footer-column1-socialnetwork">
            <p className="to-uppercase">
              {language === "fr" ? "Suivez-nous !" : "Follow us !"}
            </p>
            <SocialNetwork />
          </div>
          <ListLink />
        </div>
        <div className="footer-column2">
          <Newsletter />
          <AddressList />
        </div>
      </div>
    </footer>
  );
}
