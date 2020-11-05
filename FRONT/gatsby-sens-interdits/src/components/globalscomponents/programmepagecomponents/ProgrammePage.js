import React from 'react';
import './ProgrammePage.css'
import photoTest from '../../../img/img-sens-interdit.jpg'
import SpectacleMiniTab from './SpectacleMiniTab';



export default function ProgrammePage(){
    return(
        <div class="global-programmepage">
            <div className="slider">
                <img src={photoTest} alt="sens"/>
            </div>
            <div className="content-programmepage">
                <div>calendar component</div>
                <div>filter component</div>
                <div>
                    <SpectacleMiniTab />
                    <SpectacleMiniTab />
                    <SpectacleMiniTab />
                    <SpectacleMiniTab />
                    <SpectacleMiniTab />
                    <SpectacleMiniTab />
                    <SpectacleMiniTab />
                    <SpectacleMiniTab />
                    <SpectacleMiniTab />
                </div>
            </div>
        </div>
    )
}