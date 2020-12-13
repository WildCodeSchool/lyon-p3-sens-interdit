import React, { useContext } from 'react';
import LanguageContext from "../../context/LanguageContext";

import { FestivalContext } from "../../context/FestivalContext";
import { Link } from "gatsby";

import './index.css'

export default function SitemapPage() {
    const { checkEnContext } = useContext(LanguageContext);
    const { currentFestivalStrapiId, currentFestivalTitle } = useContext(
        FestivalContext
    );
    return (
        <div>
            <div className='global-sitemap'>
                <div className="red-arrow"></div>
                <h1 className='to-uppercase'>Sitemap</h1>
                <div className='sitemap-list'>
                    <ul>
                        <Link to="/">
                            <h1>{checkEnContext(
                                "Accueil",
                                "Home"
                            )}</h1>
                        </Link>
                    </ul>
                    <ul>
                        <li><Link
                            to={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}`}>
                            <h1>{checkEnContext(
                                "Festival",
                                "Festival"
                            )}</h1>
                        </Link></li>
                        <li><Link to='/programme'>{checkEnContext(
                            "Programme",
                            "Program"
                        )}</Link></li>
                        <li><Link to='/hors-scene'>{checkEnContext(
                            "Hors-scène",
                            "Off scene"
                        )}</Link></li>
                        <li><Link to='/ecole'>{checkEnContext(
                            "Ecole",
                            "Academic"
                        )}</Link></li>
                        <li><Link to="https://sensinterdits.mapado.com/">{checkEnContext(
                            "Billetterie",
                            "Ticket infos"
                        )}</Link></li>
                        <li><Link
                            to={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}/infos`}>
                            {checkEnContext(
                                "Informations Pratiques",
                                "Informations"
                            )}
                        </Link></li>
                        <li><Link
                            to={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}/lieux`}>
                            {checkEnContext(
                                "Lieux",
                                "Places"
                            )}
                        </Link></li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/diffusion-production" ><h1>
                                {checkEnContext(
                                    "Diffusion-Production",
                                    "Production"
                                )}
                            </h1>
                            </Link>
                        </li>
                        <li><Link to='/ecole'>{checkEnContext(
                            "Ecole",
                            "Academic"
                        )}</Link></li>
                        <li><Link to='/programme-tour'>{checkEnContext(
                            "Spectacles en tournée",
                            "On tour"
                        )}</Link></li>

                    </ul>

                    <ul>
                        <li><Link to="/transmissions"><h1>
                            {checkEnContext(
                                "Ateliers-Transmission",
                                "Transmission"
                            )}
                        </h1>

                        </Link></li>
                        <li><h2>Avec les publics</h2></li>
                        <li><Link to='/webradio'>Webradio</Link></li>
                        <li><Link to='/parole'>{checkEnContext(
                            "Paroles d'exil",
                            "Exile words"
                        )}</Link></li>
                        <li><Link to='/scolaires'>{checkEnContext(
                            "Scolaires",
                            "School"
                        )}</Link></li>
                        <li><h2>Avec les professionnels</h2></li>
                        <li><Link to='/ecole'>{checkEnContext(
                            "Ecole",
                            "Academic"
                        )}</Link></li>
                        <li><Link to='/seminaires'>{checkEnContext(
                            "Séminaire",
                            "Seminar"
                        )}</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/association"><h1>
                            {checkEnContext(
                                "Association",
                                "Association"
                            )}
                        </h1>
                        </Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/actualites">
                            <h1>{checkEnContext(
                                "Actualités",
                                "News"
                            )}</h1>

                        </Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/archives"><h1>
                            {checkEnContext(
                                "Archives",
                                "Archives"
                            )}
                        </h1>
                        </Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}