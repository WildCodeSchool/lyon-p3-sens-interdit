import React from 'react';
import magnifier from '../../../img/loupe.png';


export default function SearchBar(){
    return(
        <div className="search-magnifier">
            <img
              src={magnifier}
              alt="search-magnifier"
              style={{filter: "invert(100%)"}}
              width="40"
            />
        </div>
    )
}