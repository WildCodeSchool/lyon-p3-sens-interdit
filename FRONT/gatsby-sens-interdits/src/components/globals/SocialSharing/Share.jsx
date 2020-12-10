import React from "react";
import shareIco from "../../../assets/img/share.svg";

function GenericSharing({ location }) {
  const url = location ? location.pathname : "Festival Sens Interdits - http://www.sensinterdits.org/";

  return (
    <div className="sharewrapper">
      <a
        href= {`mailto:info@example.com?&subject=&body=${url}`}
        className="share-button"
      >
        <img src={shareIco} alt="share" />
      </a>
    </div>
  );
}
export default GenericSharing;
