import React from 'react';
import './index.css'

export default function SitemapPage() {
    return (
        <div>
            <div className='global-sitemap'>
                <div className="red-arrow"></div>
                <h1 className='to-uppercase'>Sitemap</h1>
                <div className='sitemap-list'>
                    <ul>
                        <li><a href='http://localhost:8000' title="lien vers la page d'accueil"><h1>Accueil</h1></a></li>
                        <li><a></a></li>
                    </ul>
                    <ul>
                        <li><a href='http://localhost:8000/festival' title='lien vers la page festival'><h1>Festival</h1></a></li>
                        <li><a href='http://localhost:8000/programme' title="lien vers le programme du festival">Programme</a></li>
                        <li><a href='http://localhost:8000/hors-scene' title="lien vers la page hors-scene">Hors-scène</a></li>
                        <li><a href='http://localhost:8000/ecole' title="lien vers la page ecole">Ecole</a></li>
                        <li><a href="https://sensinterdits.mapado.com/" title="lien vers la billetterie">Billetterie</a></li>
                        <li><a href='http://localhost:8000/infos' title="lien vers la page infos pratiques">Infos pratiques</a></li>
                        <li><a href='http://localhost:8000/lieux' title="lien vers la page lieux">Lieux</a></li>
                    </ul>
                    <ul>
                        <li><a href='http://localhost:8000/transmission'><h1>Ateliers-transmission</h1></a></li>
                        <li><h2>Avec les publics</h2></li>
                        <li><a href='http://localhost:8000/webradio' title="lien vers la page webradio">Webradio</a></li>
                        <li><a href='http://localhost:8000/parole' title="lien vers la page paroles-d'exil">Paroles d'exil</a></li>
                        <li><a href='http://localhost:8000/scolaires' title="lien vers la page scolaires">Scolaires</a></li>
                        <li><h2>Avec les professionnels</h2></li>
                        <li><a href='http://localhost:8000/ecole' title="lien vers la page ecole">Ecole</a></li>
                        <li><a href='http://localhost:8000/seminaires' title="lien vers la page séminaires">Séminaires</a></li>
                    </ul>
                    <ul>
                        <li><a href='http://localhost:8000/association'><h1>Association</h1></a></li>
                    </ul>
                    <ul>
                        <li><a href='http://localhost:8000/actualites'><h1>Actualités</h1></a></li>
                    </ul>
                    <ul>
                        <li><a href='http://localhost:8000/Archives'><h1>Archives</h1></a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}