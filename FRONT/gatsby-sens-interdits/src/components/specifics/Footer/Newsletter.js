import React from 'react'

export default function Newsletter() {
  return (
    <div className="footer-column2-newsletter">
      <div className="newsletter-container">
        <div className="newsletter-title">
          <h3 className="to-uppercase">Newsletter</h3>
          <p>Recevez nos actualités</p>
        </div>
        <input type="text" className="input-newsletter" id="newsletter" />
        <input type="submit" value="ok" className="submit-newsletter" />
      </div>
    </div>
  )
}