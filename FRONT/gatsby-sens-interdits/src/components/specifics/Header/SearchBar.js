import React from 'react';
import magnifier from '../../../assets/img/loupe.png';


export default function SearchBar({setShowSearchInput}) {
    function handleClick() {
        setShowSearchInput(true);
    }
    return (
        <div className="search-magnifier" onClick={handleClick}>
            <img
                src={magnifier}
                alt="search-magnifier"
                className="filter-invert"
            />
        </div>
    )
}
