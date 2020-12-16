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
            <div className="global-sitemap container">
                <div className="red-arrow"></div>
                <h1 className="to-uppercase">Sitemap</h1>
                <div className="sitemap-list">
                    <ul>
                        <Link to="/" title="vers la page d'accueil">
                            <h1>{checkEnContext(
                                "Accueil",
                                "Home"
                            )}</h1>
                        </Link>
                    </ul>
                    <ul>
                        <li><Link
                            to={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}`} title="vers la page du festival sens-interdits">
                            <h1>{checkEnContext(
                                "Festival",
                                "Festival"
                            )}</h1>
                        </Link></li>
                        <li><Link to="/programme" title="vers la page du programme en cours">{checkEnContext(
                            "Programme",
                            "Program"
                        )}</Link></li>
                        <li><Link to="/hors-scene" title="vers la page des évènements hors-scène">{checkEnContext(
                            "Hors-scène",
                            "Off scene"
                        )}</Link></li>
                        <li><Link to="/ecole" title="vers la page des écoles">{checkEnContext(
                            "Ecole",
                            "Academic"
                        )}</Link></li>
                        <li><Link to="https://sensinterdits.mapado.com/" title="vers la billetterie du festival">{checkEnContext(
                            "Billetterie",
                            "Ticket infos"
                        )}</Link></li>
                        <li><Link
                            to={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}/infos`} title="vers les informations pratiques">
                            {checkEnContext(
                                "Informations Pratiques",
                                "Informations"
                            )}
                        </Link></li>
                        <li><Link
                            to={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}/lieux`} title="vers les lieux de représentations des spectacles">
                            {checkEnContext(
                                "Lieux",
                                "Places"
                            )}
                        </Link></li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/diffusion-production" title="vers les diffusions et les productions"><h1>
                                {checkEnContext(
                                    "Diffusion-Production",
                                    "Production"
                                )}
                            </h1>
                            </Link>
                        </li>
                        <li><Link to="/ecole" title="vers les écoles">{checkEnContext(
                            "Ecole",
                            "Academic"
                        )}</Link></li>
                        <li><Link to="/programme-tour" title="vers le programme des spectacles en tournée">{checkEnContext(
                            "Spectacles en tournée",
                            "On tour"
                        )}</Link></li>

                    </ul>

                    <ul>
                        <li><Link to="/transmissions" title="vers la page transmissions"><h1>
                            {checkEnContext(
                                "Ateliers-Transmission",
                                "Transmission"
                            )}
                        </h1>

                        </Link></li>
                        <li><h2>Avec les publics</h2></li>
                        <li><Link to="/webradio" title="vers les webradios">Webradio</Link></li>
                        <li><Link to="/parole" title="vers la page des paroles d'exiles">{checkEnContext(
                            "Paroles d'exil",
                            "Exile words"
                        )}</Link></li>
                        <li><Link to="/scolaires" title="vers la page des scolaires">{checkEnContext(
                            "Scolaires",
                            "School"
                        )}</Link></li>
                        <li><h2>Avec les professionnels</h2></li>
                        <li><Link to="/ecole" title="vers la page des écoles">{checkEnContext(
                            "Ecole",
                            "Academic"
                        )}</Link></li>
                        <li><Link to="/seminaires" title="vers la page des séminaires">{checkEnContext(
                            "Séminaire",
                            "Seminar"
                        )}</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/association" title="vers la page de l'assocation"><h1>
                            {checkEnContext(
                                "Association",
                                "Association"
                            )}
                        </h1>
                        </Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/actualites" title="vers l'actualité de l'association">
                            <h1>{checkEnContext(
                                "Actualités",
                                "News"
                            )}</h1>

                        </Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/archives" title="vers les archives"><h1>
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
