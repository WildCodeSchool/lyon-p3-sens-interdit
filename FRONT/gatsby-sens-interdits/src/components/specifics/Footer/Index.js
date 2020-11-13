import React from 'react';
import './Footer.css'
import Logo from '../Header/Logo';
import SocialNetwork from '../Header/SocialNetwork';
import AdressList from './AdressList';
import ListLink from './ListLink';
import Newsletter from './Newsletter';


export default function Footer() {
  return (
    <footer>
      <div className="wrapper-footer">
        <div className="footer-column1">
          <Logo />
          <div className="footer-column1-socialnetwork">
            <p className="to-uppercase">Suivez-nous !</p>
            <SocialNetwork />
          </div>
          <ListLink />
        </div>
        <div className="footer-column2">
          <Newsletter />
          <AdressList />
        </div>
      </div>
    </footer>
  )
}