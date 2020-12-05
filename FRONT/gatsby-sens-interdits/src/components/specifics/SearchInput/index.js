import React, {useState, useEffect} from "react";
import { navigate } from "gatsby"
import "./index.css";
import magnifier from '../../../assets/img/loupe.png';

export default function SearchInput({showSearchInput, setShowSearchInput}) {
    const [search, setSearch] = useState('');
    let searchInput = null;
    const handleClose = (e) => {
        e.stopPropagation();
        setShowSearchInput(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/search/?s='+search);
    }

    useEffect(() => {
        if (showSearchInput) {
            searchInput.focus();
        }
    }, [showSearchInput]);

    return (
        <div className={'overlay '+(!showSearchInput ? 'hidden':'')} id="overlay-search" onClick={handleClose}>
            <form onSubmit={handleSubmit}>
                <input ref={(input) => { searchInput = input; }} placeholder="Rechercher" onClick={(e) => {e.stopPropagation()}} type="text" value={search} onChange={(e) => setSearch(e.target.value)} required />
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
