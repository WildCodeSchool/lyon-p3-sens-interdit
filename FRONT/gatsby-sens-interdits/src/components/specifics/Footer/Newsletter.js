import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const handleSubmit = async (email) => {
    const result = await addToMailchimp(email)
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }
  return (
    <div className="footer-column2-newsletter">
      <div className="newsletter-container">
        <div className="newsletter-title">
          <h3 className="to-uppercase">Newsletter</h3>
          <p>Recevez nos actualités</p>
        </div>
        <form onSubmit={handleSubmit(email)} >
          <input type="text" className="input-newsletter" id="newsletter" />
          <input type="submit" value={(e) => { setEmail(e.target.value) }} className="submit-newsletter" />
        </form>
      </div>
    </div>
  )
}