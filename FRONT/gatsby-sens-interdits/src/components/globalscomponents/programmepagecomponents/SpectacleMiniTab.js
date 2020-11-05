import React from 'react';
import pictoPlus from '../../../img/picto+.svg'

export default function SpectacleMiniTab(props){
    return(
        <div>
            <div>
                <img src={props.affiche} alt="image du spectacle"/>
                <div>
                    <p>{props.date}</p>
                    <p>{props.country}</p>
                </div>
                <img src={pictoPlus} alt="pictoPlus" width="20"/>
            </div>
            <div>
                <p>{props.title}</p>
                <p>{props.team}</p>
            </div>
        </div>
    )
}