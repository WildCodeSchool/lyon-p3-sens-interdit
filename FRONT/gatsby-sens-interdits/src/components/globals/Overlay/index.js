import React from "react";
import Navbar from "../../specifics/Header/Navbar";

function Overlay({ showOverlay, setShowOverlay }) {
    function handleClick(e) {
        e.stopPropagation();
        setShowOverlay(false);
        document.body.classList.remove('prevent-scroll');
    }
    return (
        <div id="overlay-menu" className={'overlay ' + (showOverlay ? '':'hidden')} onClick={handleClick}>
            <Navbar isMobile={true} />
        </div>
    );
}

export default Overlay;
