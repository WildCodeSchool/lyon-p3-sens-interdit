import React from 'react';

import Logo from '../headercomponents/Logo';
import SocialNetwork from '../headercomponents/SocialNetwork';
import AdressList from './AdressList';
import ListLink from './ListLink';
import Newsletter from './Newsletter';


export default function Footer(){
    return(
<footer>
      <div class="wrapper-footer">
        <div class="footer-column1">
          <Logo/>
          <div class="footer-column1-socialnetwork">
            <p>Suivez-nous !</p>
            <SocialNetwork />
          </div>
          <ListLink />
        </div>
        <div class="footer-column2">
        <Newsletter />
        <AdressList />
        </div>
      </div>
    </footer>
    )
}