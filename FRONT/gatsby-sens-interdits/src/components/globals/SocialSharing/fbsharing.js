import React from "react";
import fbIco from "./ico/PICTO SI FB.svg";

function Facebook() {
  const url = window.location.href; // alors ca fait une erreur par ce que href c'est nul pour faire du local mais ca marche une fois déployé. vous pouvez tester en changeant la valeur par une url existante
  function share_fb(url) {
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
        onclick={share_fb(url)}
        rel="nofollow"
        share_url={url}
        target="_blank"
      >
        <img src={fbIco} alt="twitter" width="50px" height="50px" />
      </a>
    </div>
  );
}
export default Facebook;
