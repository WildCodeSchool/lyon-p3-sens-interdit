import React from "react";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import TabSystemHorsScene from "../../globals/TabSystems/TabSystemHorsScene";
import "./Association.css";
import { graphql, useStaticQuery } from "gatsby";


export default function AssociationPage() {
    const { strapiAssopage } = useStaticQuery(graphql`
    query MyQueryAsso {
      strapiAssopage {
        title
        content
      }
    }`)
    return (
        <>
            <ImageCarousel />
            <div className="global-margin">
                <div className="red-arrow"></div>
                <div className="association-content">
                    <h1 className="to-uppercase">{strapiAssopage.title}</h1>
                    <p>
                        {strapiAssopage.content}
                    </p>
                </div>
                <div>
                    <TabSystemHorsScene />
                </div>
            </div>
        </>
    );
}