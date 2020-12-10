import React from "react";
import { Link } from "gatsby";

import "./../Thumbnail/Index.css";
import pictoPlus from "../../../assets/img/picto+.svg";

const { sluggify } = require("../../../utils/Sluggify");

export default function ThumbnailOldArchive(props) {
  const archiveSpectacleSlug = sluggify(props.name);

  return (
    <div className="mini-tab">
      <Link to={`/spectacle/${archiveSpectacleSlug}_${props.id}`}>
        <div className="global-mini-tab">
          <img
            className="img-mini-tab"
            src={props.affiche}
            alt="visuel du spectacle"
            width="fit-content"
          />
          <div className="title-mini-tab">
            <p className="country-mini-tab">{props.country}</p>
          </div>
          <img
            className="pictoPlus"
            src={pictoPlus}
            alt="pictogramme"
            width="20"
          />
        </div>
        <div>
          <p className="name-mini-tab">{props.name}</p>
          <p className="team-mini-tab">{props.team}</p>
        </div>
      </Link>
    </div>
  );
}
