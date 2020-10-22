import React from 'react';
import magnifier from '../../img/loupe.png';
import facebook from '../../img/facebook.svg';
import insta from '../../img/insta.svg';
import twitter from '../../img/twitter.svg';
import share from '../../img/share.svg';
import senslogo from '../../img/logosens.svg';


export default function Header(){
    return(
<header>
      <div class="wrapper-header">
        <div class="header-row1">
          <div class="fr-en fr-en-right">
            <p>F R</p>
            <span> | </span>
            <p>E N</p>
          </div>
          <div class="highlight newsletter-header">NEWSLETTER</div>
          <nav class="fr-en">
            <ul class="nav-bar">
              <li>Accueil</li>
              <li>Festival</li>
              <li>Avec les publics</li>
              <li>Associations</li>
              <li>Actualités</li>
              <li>Archives</li>
              <li>Espace pros</li>
              <li>Contacts</li>
            </ul>
          </nav>
          <div class="search-magnifier">
            <img
              src={magnifier}
              alt="search-magnifier"
              style={{filter: "invert(100%)"}}
              width="40"
            />
          </div>
        </div>
        <div class="header-row2">
          <div class="main-logo">
            <img src={senslogo} alt="logo du festival" />
          </div>
          <div class="next-festival-date">
            <div class="edition">
              <div class="edition-number">7</div>
              <div class="edition-text">
                <p>ème</p>
                <p>édition</p>
              </div>
            </div>
            <div class="edition-date">
              <p>du <span>16</span> au <span>27</span></p>
              <p>Octobre 2021</p>
              <p>LYON METROPOLE</p>
            </div>
  
          </div>
          <div class="billetterie-programme">
            <a href="#" title="billetterie" class="highlight">BILLETTERIE </a>
            <a href="#" title="programme" class="highlight">PROGRAMME</a>
          </div>
  
          <div class="social-network">
            <a href="#" title="link to facebook" target="_blank"
              ><img
                src={facebook}
                alt="facebook"
                width="80"
                style={{filter: "invert(100%)"}}
            /></a>
            <a href="#" title="link to instagram" target="_blank"
              ><img
                src={insta}
                alt="instagram"
                style={{filter: "invert(100%)"}}
                width="80"
            /></a>
            <a href="#" title="link to twitter" target="_blank"
              ><img
                src={twitter}
                alt="twitter"
                style={{filter: "invert(100%)"}}
                width="80"
            /></a>
            <a href="#" title="link to linkedin" target="_blank"
              ><img
                src={share}
                alt="linkedin"
                width="80"
                style={{filter: "invert(100%)"}}
            /></a>
            <a href="#" title="link to share" target="_blank"
              ><img
                src={share}
                alt="share"
                style={{filter: "invert(100%)"}}
                width="80"
            /></a>
          </div>
        </div>
      </div>
      
    </header>
    )
}