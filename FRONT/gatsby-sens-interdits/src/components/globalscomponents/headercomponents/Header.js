import React from 'react';
import magnifier from '../../../img/loupe.png';

import senslogo from '../../../img/logosens.svg';
import Navbar from './Navbar';
import SocialNetwork from './SocialNetwork';


export default function Header(){
    return(
<header>
      <div class="wrapper-header">
        <div class="header-row1">
          <div class="fr-en">
            <p>F R</p>
            <span> | </span>
            <p>E N</p>
          </div>
          <div class="highlight newsletter-header">NEWSLETTER</div>
          <Navbar />
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
          <SocialNetwork />
          
        </div>
      </div>
      
    </header>
    )
}