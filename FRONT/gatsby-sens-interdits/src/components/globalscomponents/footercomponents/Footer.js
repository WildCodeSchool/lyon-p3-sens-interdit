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
            <img src={senslogo} width="250" alt="logo partner2" />
          </div>
          <div class="footer-column1-partners">
            <p>Nos Partenaires</p>
            <ul>
              <li>
                <img
                  src={celestins}
                  alt="logo partner theater les celestins"
                  width="80"
                />
              </li>
              <li>
                <img src={logolyon} alt="logo partner lyon city" />
              </li>
              <li>
                <img
                  src={logonova}
                  alt="logo partner nova radio"
                  style={{filter: "invert(100%)"}}
                  width="130"
                />
              </li>
              <li>
                <img
                  src={logofemmes}
                  alt="logo partner les femmes ici et ailleurs"
                  width="100"
                />
              </li>
              <li>
                <img
                  src={logoara}
                  alt="logo partner ARA region"
                  style={{filter: "invert(100%)"}}
                  width="180"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-column2">
          <div class="footer-column2-newsletter">
            <p>
              Sens interdits est une association et un Festival de théâtre
              international
            </p>
            <div class="newsletter-container">
              <div>
                <h3 style={{margin: "0"}}>NEWSLETTER</h3>
                <p style={{margin: "0"}}>Recevez nos actualités</p>
              </div>
              <input type="text" />
            </div>
          </div>
          <div class="footer-column2-socialnetwork">
            <p>Suivez-nous !</p>
            <SocialNetwork />
          </div>
          <div class="footer-column2-listlink">
            <div>
              <p>Vous informer</p>
              <ul>
                <li><a>Programmation</a></li>
                <li><a>Billetterie</a></li>
                <li><a>Sens interdits</a></li>
                <li><a>Partenaires</a></li>
                <li><a>Archives</a></li>
              </ul>
            </div>
            <div>
              <p>Presse</p>
              <ul>
                <li><a>Dossier de presse</a></li>
                <li><a>Kit presse</a></li>
                <li><a>Revue de presse</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <div>
              <p>Sens interdit</p>
              <ul>
                <li><a>Le festival</a></li>
                <li><a>L'association</a></li>
                <li><a>L'équipe</a></li>
                <li><a>Soutenez-nous</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
    )
}