import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    console.log(result)
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="footer-column2-newsletter">
      <div className="newsletter-container">
        <div className="newsletter-title">
          <h3 className="to-uppercase">Newsletter</h3>
          <p>Recevez nos actualités</p>
        </div>
        <form onSubmit={handleSubmit} >
          <input onKeyUp={handleChangeEmail} type="email" className="input-newsletter" id="newsletter" required />
          <input type="submit" value='ok' className="submit-newsletter" />
        </form>
      </div>
    </div>
  )
}