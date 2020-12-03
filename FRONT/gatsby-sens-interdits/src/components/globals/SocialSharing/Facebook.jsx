import React from "react";
import fbIco from "../../../assets/img/facebook.svg";

function Facebook() {
  const url = window.location.href; // alors ca fait une erreur par ce que href c'est nul pour faire du local mais ca marche une fois déployé. vous pouvez tester en changeant la valeur par une url existante
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
        href="#"
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
