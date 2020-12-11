import React, { useEffect, useState } from "react";
import fbIco from "../../../assets/img/facebook.svg";

function Facebook(props) {
  const [url,setURL]= useState("http://www.sensinterdits.org/")

  useEffect(() => {
    if (props.location) {
      setURL(props.location.href);
    }

  }, [props.location,url]);

  function share_fb(event) {
    event.preventDefault();
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
