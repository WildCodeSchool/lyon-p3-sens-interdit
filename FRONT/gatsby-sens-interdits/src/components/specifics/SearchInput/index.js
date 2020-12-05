import React, {useState} from "react";
import "./index.css";
import magnifier from '../../../assets/img/loupe.png';

export default function SearchInput({showSearchInput, setShowSearchInput}) {
    const [search, setSearch] = useState('');
    const handleClose = (e) => {
        e.stopPropagation();
        setShowSearchInput(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        document.location.href = '/search/?s='+search;
    }
    return (
        <div className={'overlay '+(!showSearchInput ? 'hidden':'')} id="overlay-search" onClick={handleClose}>
            <form onSubmit={handleSubmit}>
                <input placeholder="Rechercher" onClick={(e) => {e.stopPropagation()}} type="text" value={search} onChange={(e) => setSearch(e.target.value)} required />
                <button  onClick={(e) => {e.stopPropagation()}}>
                    <img  onClick={(e) => {e.stopPropagation()}}
                        src={magnifier}
                        alt="search-magnifier"
                        className="filter-invert"
                    />
                </button>
            </form>
        </div>
    )
}
