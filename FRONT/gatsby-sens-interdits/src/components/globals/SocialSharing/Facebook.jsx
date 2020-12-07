import React from "react";
import fbIco from "../../../assets/img/facebook.svg";

function Facebook({ location }) {
  const url = location ? location.href : "";
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
    <div className="fbwrapper">
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
