import React from "react";

function Hamburger({ setShowOverlay }) {
    function handleClick(e) {
        e.preventDefault();
        setShowOverlay(true);
        document.body.classList.add('prevent-scroll');
    }
    return (
        <div id="hamburger" onClick={handleClick}><span /> <span /> <span /></div>
    );
}

export default Hamburger;
