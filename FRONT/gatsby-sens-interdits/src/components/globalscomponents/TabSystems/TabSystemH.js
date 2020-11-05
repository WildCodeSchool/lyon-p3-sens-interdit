//US : TabsystemGATSBY#65

import React from "react";
import {useState} from "react";
//design imports
import picto from "../../../img/picto.svg";
import "./tabsystem.css";



function TabSystemH (){

    const [contentTab,setContentTab]= useState ('about');
    const [activeClass,setActiveClass]= useState('about');
    console.log("active class", activeClass)
    console.log("content tab", contentTab)

    function handleOnClick(e){
        setContentTab(e.target.id);
        setActiveClass(e.target.id);
    };

    function displayContentTab (){
        console.log ('content tab in function display', contentTab);
        if (contentTab==="about"){
            return(
                <div>
                    <p>Content = affiche le contenu about </p>
                </div>
            )
        }else if (contentTab==="biography") {
            return (
                <div>
                    <p>Content = affiche le contenu biography</p>
                </div>
            )
        }else if (contentTab==="distribution") {
            return (
                <div>
                    <p>Content = affiche le contenu distribution</p>
                </div>
            )
        }else if (contentTab==="press") {
            return (
                <div> 
                    <p>Content = affiche le contenu press</p>
                </div>
                )
        }else if (contentTab==="picturial") {
            return (
                <div>
                    <p>Content = affiche le contenu picturial</p>
                </div>
                )
        }else if (contentTab==="withPublic") {
            return (
                <div>
                    <p>Content = affiche le contenu with publics </p>
                </div>
                )
        }else {
            return <p>Error</p>
        }
    }

    return (
        <div className="tab-module">
            <ul>
                <li>
                    <a href="#" title="" className={"tab-link" + " " + (activeClass === 'about' ? 'active' : '')} id="about" onClick={handleOnClick} >
                    <img src={picto} alt="pictogramme cliquable" weight="30" height='30' />À propos</a>
                </li>
                <li>
                    <a href="#" title="" className={"tab-link" + " " + (activeClass === 'biography' ? 'active' : '')} id="biography" onClick={handleOnClick}>
                    <img src={picto} alt="pictogramme cliquable" weight="30" height='30' />Biographie</a>
                </li>
                <li>
                    <a href="#" title="" className={"tab-link" + " " + (activeClass === 'distribution' ? 'active' : '')} id="distribution" onClick={handleOnClick}>
                    <img src={picto} alt="pictogramme cliquable" weight="30" height='30' />Distribution</a>
                </li>
                <li>
                    <a href="#" title="" className={"tab-link" + " " + (activeClass === 'press' ? 'active' : '')} id="press" onClick={handleOnClick}>
                    <img src={picto} alt="pictogramme cliquable" weight="30" height='30' />Dans la press</a>
                </li>
                <li>
                    <a href="#" title="" className={"tab-link" + " " + (activeClass === 'picturial' ? 'active' : '')} id="picturial" onClick={handleOnClick}>
                    <img src={picto} alt="pictogramme cliquable" weight="30" height='30' />En image</a>
                </li>
                <li>
                    <a href="#" title="" className={"tab-link" + " " + (activeClass === 'withPublic' ? 'active' : '')} id="withPublic" onClick={handleOnClick}>
                    <img src={picto} alt="pictogramme cliquable" weight="30" height='30' />Avec les publics</a>
                </li>
            </ul>

            <div>
            {displayContentTab(contentTab)}
            </div> 
        </div>
    )
}

export default TabSystemH; 


