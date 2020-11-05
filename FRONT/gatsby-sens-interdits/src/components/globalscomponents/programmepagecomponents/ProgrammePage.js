import React from 'react';
import './ProgrammePage.css'
import photoTest from '../../../img/img-sens-interdit.jpg'



export default function ProgrammePage(){
    return(
        <div class="global-programmepage">
            <div className="slider">
                <img src={photoTest} alt="sens"/>
            </div>
            <div className="content-programmepage">
                <div>calendar component</div>
                <div>filter component</div>
                <div>display spectacle component</div>
            </div>
        </div>
    )
}