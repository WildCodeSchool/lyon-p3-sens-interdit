import React from 'react';
import senslogo from '../../../img/logosens.svg';


export default function Logo(){
    return(
        <div class="main-logo">
            <a href="https://www.sensinterdits.org" title="site sens-interdits">
                <img src={senslogo} alt="logo du festival" />
            </a>
        </div>
    )
}