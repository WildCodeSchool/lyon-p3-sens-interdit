import React from "react";

function Hamburger({ setShowOverlay }) {
    function handleClick(e) {
        e.preventDefault();
        setShowOverlay(true);
    }
    return (
        <div id="hamburger" onClick={handleClick}><span /> <span /> <span /></div>
    );
}

export default Hamburger;
