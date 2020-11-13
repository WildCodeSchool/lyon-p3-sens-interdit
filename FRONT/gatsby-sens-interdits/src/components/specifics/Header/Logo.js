import React from 'react';
import logosens from '../../../assets/img/logosens.svg';


export default function Logo() {
    return (
        <div className="main-logo">
            <a href="https://www.sensinterdits.org" title="site sens-interdits">
                <img src={logosens} alt="logo du festival sens-interdits" />
            </a>
        </div>
    )
}