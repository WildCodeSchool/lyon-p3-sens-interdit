import React from 'react';
import './ProgrammePage.css'
import photoTest from '../../../img/img-sens-interdit.jpg'
import SpectacleMiniTab from './SpectacleMiniTab';
import FilterTab from './FilterTab';
import CalendarLarge from './CalendarLarge';



export default function ProgrammePage(){
    return(
        <div class="global-programmepage">
            <div className="slider">
                <img src={photoTest} alt="sens"/>
            </div>
            <div className="content-programmepage">
                <CalendarLarge />
                <FilterTab />
                <div className="display-miniTab">
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                        <SpectacleMiniTab  
                            affiche={photoTest}
                            date="26 Octobre" 
                            country="Russie" 
                            name="Titre du spectacle" 
                            team="Metteur en scène"/>
                </div>
            </div>
        </div>
    )
}