import React from 'react';
import magnifier from '../../../assets/img/loupe.png';


export default function SearchBar() {
    return (
        <div className="search-magnifier">
            <img
                src={magnifier}
                alt="search-magnifier"
                className="filter-invert"
            />
        </div>
    )
}