import React from 'react'

export default function Newsletter(){
    return(
        <div class="footer-column2-newsletter">
            <div class="newsletter-container">
              <div>
                <h3 style={{margin: "0"}}>NEWSLETTER</h3>
                <p style={{margin: "0"}}>Recevez nos actualités</p>
              </div>
              <input type="text" className="input-newsletter"/>
              <input type="submit" value="ok" className="submit-newsletter"/>
            </div>
        </div>
    )
}