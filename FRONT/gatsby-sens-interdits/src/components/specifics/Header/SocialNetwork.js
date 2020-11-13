import React from 'react';
import facebook from '../../../assets/img/facebook.svg';
import insta from '../../../assets/img/insta.svg';
import twitter from '../../../assets/img/twitter.svg';
import radio from '../../../assets/img/radio.svg'
import share from '../../../assets/img/share.svg';

export default function SocialNetwork() {
  return (
    <ul className="social-network">
      <li><a href="https://www.facebook.com/sens.interdits/" title="link to facebook" target="_blank"
      ><img
          src={facebook}
          alt="facebook"
          width="30"
          className="filter-invert"
        /></a></li>
      <li><a href="https://www.instagram.com/sensinterdits/" title="link to instagram" target="_blank"
      ><img
          src={insta}
          alt="instagram"
          className="filter-invert"
          width="30"
        /></a></li>
      <li><a href="https://twitter.com/sens_interdits?lang=fr" title="link to twitter" target="_blank"
      ><img
          src={twitter}
          alt="twitter"
          className="filter-invert"
          width="30"
        /></a></li>
      <li><a href="#" title="link to radio" target="_blank"
      ><img
          src={radio}
          alt="radio"
          width="30"
          className="filter-invert"
        /></a></li>
      <li><a href="#" title="link to share" target="_blank"
      ><img
          src={share}
          alt="share"
          className="filter-invert"
          width="30"
        /></a></li>
    </ul>
  )
}