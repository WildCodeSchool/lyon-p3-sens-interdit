import React from 'react';

import senslogo from '../../../img/logosens.svg';
import celestins from '../../../img/logo_celestins.png';
import logolyon from '../../../img/logo_lyon.png';
import logonova from '../../../img/logo_nova.jpeg';
import logofemmes from '../../../img/logo_femmes.png';
import logoara from '../../../img/logo_ARA.png'
import SocialNetwork from '../headercomponents/SocialNetwork';


export default function Footer(){
    return(
<footer>
      <div class="wrapper-footer">
        <div class="footer-column1">
          <div class="footer-column1-title">
            <img src={senslogo} width="300" alt="logo partner2" />
          </div>
          <div class="footer-column1-socialnetwork">
            <p>Suivez-nous !</p>
            <SocialNetwork />
          </div>
          <div class="footer-column1-listlink">
            <ul>
              <li><a>Contacts</a></li>
              <li><a>Mentions Légales</a></li>
              <li><a>Plan du site</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-column2">
          <div class="footer-column2-newsletter">
            <div class="newsletter-container">
              <div>
                <h3 style={{margin: "0"}}>NEWSLETTER</h3>
                <p style={{margin: "0"}}>Recevez nos actualités</p>
              </div>
              <input type="text" />
            </div>
          </div>
          <div class="footer-column1-listlink">
            <ul>
              <li>Association Sens Interdits 14, rue Basse Combalot 69007 Lyon, France</li>
              <li>Tél : +33 (0)9 67 02 00 85</li>
              <li>Mail : festivalsensinterdits@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
    )
}