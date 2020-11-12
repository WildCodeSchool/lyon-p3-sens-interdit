import React from 'react'
import "./Homepage.css"
import photoTest from '../../../img/img-sens-interdit.jpg'
import DisplayTabMenu from './DisplayTabMenu'

export default function Homepage(){
    return(
        <div className="global-homepage">
            <div className="slider">
                <img src={photoTest} alt="sens"/>
            </div>
            <div className="content-homepage">
                <DisplayTabMenu />
                <DisplayTabMenu />
                <DisplayTabMenu />
                <DisplayTabMenu />
            </div>
          </div>
    )
}