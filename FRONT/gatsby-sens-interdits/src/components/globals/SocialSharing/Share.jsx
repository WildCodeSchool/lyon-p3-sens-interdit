import React from "react";
import shareIco from "../../../assets/img/share.svg";

function GenericSharing({ location }) {
  return (
    <div className="sharewrapper">
      <a
        href={
          "mailto:info@example.com?&subject=&body=" +
          (location ? location.href : "")
        }
        className="share-button"
      >
        <img src={shareIco} alt="share" />
      </a>
    </div>
  );
}
export default GenericSharing;
