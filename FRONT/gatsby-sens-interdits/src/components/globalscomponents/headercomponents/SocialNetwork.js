import React from 'react';
import facebook from '../../../img/facebook.svg';
import insta from '../../../img/insta.svg';
import twitter from '../../../img/twitter.svg';
import share from '../../../img/share.svg';

export default function SocialNetwork(){
    return(
        <ul class="social-network">
            <li><a href="#" title="link to facebook" target="_blank"
              ><img
                src={facebook}
                alt="facebook"
                width="80"
                style={{filter: "invert(100%)"}}
            /></a></li>
            <li><a href="#" title="link to instagram" target="_blank"
              ><img
                src={insta}
                alt="instagram"
                style={{filter: "invert(100%)"}}
                width="80"
            /></a></li>
            <li><a href="#" title="link to twitter" target="_blank"
              ><img
                src={twitter}
                alt="twitter"
                style={{filter: "invert(100%)"}}
                width="80"
            /></a></li>
            <li><a href="#" title="link to linkedin" target="_blank"
              ><img
                src={share}
                alt="linkedin"
                width="80"
                style={{filter: "invert(100%)"}}
            /></a></li>
            <li><a href="#" title="link to share" target="_blank"
              ><img
                src={share}
                alt="share"
                style={{filter: "invert(100%)"}}
                width="80"
            /></a></li>
          </ul>
    )
}