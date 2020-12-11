import React, { useEffect, useState } from "react";
import shareIco from "../../../assets/img/share.svg";

function GenericSharing(props) {
  const [url,setURL]= useState("Festival Sens Interdits - http://www.sensinterdits.org/")
  useEffect(() => {
    if (location) {
     setURL(location.href);
    }
    
  }, [location,url]);

  return (
    <div className="sharewrapper">
      <a
        href={`mailto:info@example.com?&subject=&body=${url}`}
        className="share-button"
      >
        <img src={shareIco} alt="share" />
      </a>
    </div>
  );
}
export default GenericSharing;
