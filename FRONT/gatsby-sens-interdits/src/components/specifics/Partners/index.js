import React from "react";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
// import { graphql, useStaticQuery } from "gatsby";
import "./index.css";

import PartnerBlock from "./PartnerBlock";
import RepFrLogo from "./../../../assets/img/partners/rep-fr.jpg";
import RegionLogo from "./../../../assets/img/partners/régio.jpg";
import GrandLyon from "./../../../assets/img/partners/grand-lyon.jpg";
import VilleLyon from "./../../../assets/img/partners/ville-lyon.jpg";
import Letes from "./../../../assets/img/partners/letes.png";
import JCDecaux from "./../../../assets/img/partners/JCDecaux.png";
import Casino from "./../../../assets/img/partners/casinoPharaon.png";
import Nova from "./../../../assets/img/partners/nova.png";
import Femmes from "./../../../assets/img/partners/femmes.png";

export default function PartnersPage() {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       allStrapiPartner {
  //         nodes {
  //           description
  //           id
  //           carousel {
  //             id
  //             image {
  //               image {
  //                 url
  //                 name
  //               }
  //               id
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `);

  //   const partner = data.allStrapiPartner.nodes[0];

  //   const imageArray =
  //     partner.carousel !== null
  //       ? partner.carousel.image.map(image => image.image)
  //       : false;

  const dataPartnerBlocks = [
    {
      title: "Partenaires institutionnels",
      logoList: [RepFrLogo, RegionLogo, GrandLyon, VilleLyon],
    },
    { title: "Partenaires & Mécènes", logoList: [Letes, JCDecaux] },
    { title: "Grand Partenaire", logoList: [Casino] },
    { title: "Partenaires Medias", logoList: [Nova, Femmes] },
    { title: "Théatre & Lieux Partenaires", logoList: [] },
  ];

  return (
    <>
      <ImageCarousel />
      <div className="global-margin">
        <div className="red-arrow"></div>
        <div className="partner-content">
          <h1>Les partenaires du festival</h1>
          {/* <p>{partner.description}</p>  Query*/}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {dataPartnerBlocks.map((partnerBlock, index) => (
          <PartnerBlock
            key={index}
            title={partnerBlock.title}
            img={partnerBlock.logoList}
          />
        ))}
      </div>
    </>
  );
}
