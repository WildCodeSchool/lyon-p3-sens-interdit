import React from "react";
import ThumbnailOldArchive from "../components/globals/ThumbnailOldArchive";
import { graphql,Link } from "gatsby";
import Playicon from "../assets/img/play_icon.png"
import "./archiveFestival.css";

function Programme({ data }) {
    const archive = data.allStrapiFestivalarchive.nodes[0];
    if (archive !== undefined) {
        return (
            <>
                <div className="global-margin archive-global-styling">
                    <div className="image-generique-page">
                        {archive.poster[0] !== undefined && archive.poster[0] ?
                            <img
                                src={
                                    process.env.GATSBY_API_URL +
                                    archive.poster[0].url
                                }
                                alt={archive.title}
                            />
                            : null}
                    </div>
                    <h1 className="to-uppercase">
                        Edition {archive !== undefined ? archive.year : null} -{" "}
                        <span>{archive !== undefined ? archive.title : null}</span>
                        {archive.download[0] !== undefined ?
                            <a href={process.env.GATSBY_API_URL + archive.download[0].url}
                               title="download programme"
                               download>
            <span className="downloadPdf">
                <img src={Playicon} alt="bouton telechargement" width="30"/>Télécharger le programme</span>
                            </a> : null}
                    </h1>
                    <div>{archive !== undefined ? archive.description : null}</div>
                    <div className="archive-transmission-grid-wrapper">
                        {data.allStrapiArchivesOld.nodes.map(elem => (
                            <ThumbnailOldArchive
                                id={elem.strapiId}
                                key={elem.id}
                                country={elem.pays}
                                name={elem.titre}
                                team={elem.credits_2}
                                affiche={`${process.env.GATSBY_IMAGE_URL}` + elem.photo_1}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    } else {
        return(<></>);
    }
}

export default Programme;

export const query = graphql`
  query MyQueryProgramme($annee: Date) {
    allStrapiArchivesOld(filter: { annee: { eq: $annee } }) {
      nodes {
        titre
        strapiId
        id
        credits_2
        pays
        photo_1
        annee
      }
    }
    allStrapiFestivalarchive(filter: { year: { eq: $annee } }) {
      nodes {
        strapiId
        id
        year
        poster {
          url
          id
        }
        title
        title_en
        description
        description_en
        download {
          url
        }
      }
    }
  }
`;
