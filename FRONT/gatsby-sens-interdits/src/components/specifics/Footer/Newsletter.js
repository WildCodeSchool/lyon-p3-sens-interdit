import React, { useState, useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import addToMailchimp from "gatsby-plugin-mailchimp";

export default function Newsletter() {
  const { language } = useContext(LanguageContext);

  const [email, setEmail] = useState("");
  const [popError, setPopError] = useState(false);
  const [popSuccess, setPopSuccess] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    if (result.result === "error") {
      setPopError(true);
      setTimeout(function () {
        setPopError(false);
      }, 3000);
    } else if (result.result === "success") {
      setPopSuccess(true);
      setTimeout(function () {
        setPopSuccess(false);
      }, 5000);
    }

    // I recommend setting `result` to React state
    // but you can do whatever you want
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  return (
    <div className="footer-column2-newsletter">
      <div className="newsletter-container">
        {popError ? (
          <div className="pop">
            {language === "fr"
              ? "Vous avez déjà souscrit à la newsletter"
              : "You already subscribed to the newsletter"}
          </div>
        ) : null}
        {popSuccess ? (
          <div className="pop">
            {language === "fr"
              ? "Souscription réussie: un mail de confirmation vous a été envoyé."
              : "Successfully subscribed: a confirmation email was just sent."}
          </div>
        ) : null}
        <div className="newsletter-title">
          <h3 className="to-uppercase">Newsletter</h3>
          <p>{language === "fr" ? "Recevez nos actualités" : "Receive our actualities"}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onKeyUp={handleChangeEmail}
            type="email"
            className="input-newsletter"
            id="newsletter"
            placeholder={language === "fr" ? "Votre email..." : "Your e-mail"}
            required
          />
          <input type="submit" value="OK" className="submit-newsletter" />
        </form>
      </div>
    </div>
  );
}
