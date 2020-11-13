import React from "react";
import CalendarLarge from "../Calendar/CalendarLarge";
import DisplayTabMenu from "../homepagecomponents/DisplayTabMenu"
import "./festival.css";

export default function festivalPage ()  {

    const festivalMenu =["Programme","Hors-scène","Ecole","Billeterie","Infos pratiques", "Lieux"];

    return (
        <div id ="festival-content"> 
            <div id="festival-calendar">
                <CalendarLarge/>
            </div>
            <div id="festival-description">
                <h3>10 ans déjà</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <nav id="festival-menu">
                <ul id="menu-container">
                    <li >
                        {festivalMenu.map(title=> 
                                <div>
                                    <DisplayTabMenu title={title}/>
                                </div>
                            )
                        }
                    </li>
                    {/* {for (let i=0 ; i<festivalMenu.length ; i++){
                            return (
                                <>
                                    <li>
                                        <DisplayTabMenu title= {festivalMenu.index[i]}
                                    </li>
                                </>
                            )}
                    } */}
                </ul>
            </nav>
        </div>
    )
}


