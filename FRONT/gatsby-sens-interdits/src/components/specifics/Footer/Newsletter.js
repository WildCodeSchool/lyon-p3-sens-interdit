import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [popError, setPopError] = useState(false)
  const [popSuccess, setPopSuccess] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    if (result.result === "error") {
      setPopError(true);
      setTimeout(function () {
        setPopError(false);
      }, 3000);
    } else if (result.result === "success") {
      setPopSuccess(true);
      setTimeout(function () {
        setPopSuccess(false);
      }, 3000);
    }

    // I recommend setting `result` to React state
    // but you can do whatever you want
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="footer-column2-newsletter">
      <div className="newsletter-container">
        {popError ?
          <div className="pop">Hey, Tu as déjà souscrit à la newsletter</div>
          : null
        }
        {popSuccess ?
          <div className="pop">Souscription faite, tu n'as plus qu'à aller valider le mail de confirmation</div>
          : null
        }
        <div className="newsletter-title">
          <h3 className="to-uppercase">Newsletter</h3>
          <p>Recevez nos actualités</p>
        </div>
        <form onSubmit={handleSubmit} >
          <input onKeyUp={handleChangeEmail} type="email" className="input-newsletter" id="newsletter" required />
          <input type="submit" value='ok' className="submit-newsletter" />
        </form>


      </div>
    </div >
  )
}