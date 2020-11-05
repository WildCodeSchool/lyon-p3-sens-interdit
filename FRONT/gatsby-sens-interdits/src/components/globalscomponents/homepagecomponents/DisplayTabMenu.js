import React from 'react';
import photoTest from '../../../img/img-sens-interdit.jpg'
import picto from '../../../img/picto+.svg'

export default function DisplayTabMenu(){
    return(
        <div className="display-tab-sticker">
                    <img src={photoTest} alt="sens" width="100%" height="100%"/>
                    <div className="display-tab-title">
                        <img className="display-tab-logo" src={picto} alt="plus" width="20"/>
                        <p>Le Festival</p>
                    </div>
                </div>
    )
}