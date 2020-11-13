import React from 'react';

import Logo from '../headercomponents/Logo';
import SocialNetwork from '../headercomponents/SocialNetwork';
import AdressList from './AdressList';
import ListLink from './ListLink';
import Newsletter from './Newsletter';


export default function Footer(){
    return(
<footer>
      <div className="wrapper-footer">
        <div className="footer-column1">
          <Logo/>
          <div className="footer-column1-socialnetwork">
            <p>Suivez-nous !</p>
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