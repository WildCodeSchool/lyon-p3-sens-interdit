import React, { useEffect, useState } from "react";
import fbIco from "../../../assets/img/facebook.svg";

function Facebook(props) {
  const [url,setURL]= useState("http://www.sensinterdits.org/")
  
  useEffect(() => {
    if (location) {
      setURL(location.href);
    }
    
  }, [location,url]);

  function share_fb(event) {
    event.preventDefault();
    console.log("url", url);
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + url,
      "facebook-share-dialog",
      "width=626, height=436"
    );
    return false;
  }

  return (
    <div className="fbwrapper" style={{ cursor: "pointer" }}>
      <a
        role="button"
        className="share-button"
        onClick={share_fb}
        rel="nofollow"
        share_url={url}
      >
        <img src={fbIco} alt="facebook" />
      </a>
    </div>
  );
}
export default Facebook;
