import React from "react";

export default function Filters({filtersList, language, setFilters, filters}) {
    function handleChangeFilter(e) {
        e.preventDefault();
        let type = e.target.getAttribute('data-type');
        if (type === 'reset') {
            return setFilters({});
        }

        let value = e.target.value;
        let tmpFilters = {...filters};
        tmpFilters[type] = value;
        setFilters(tmpFilters);
    }

    return (
        <div className="my-filters global-Filter-tab">
            <h4 className="to-uppercase">
                {language === "fr" ? "Filtrer par :" : "Filter"}
            </h4>
                <div className="select-flex-wrapper">
                {filtersList.countries !== undefined && filtersList.countries.length > 0 ?
                    <div className="filter-col">

                        <select className="countrySelect" id="countrySelect" data-type="country" onChange={handleChangeFilter} value={filters.country === undefined ? '': filters.country}>
                            <option value=""> {language === "fr" ? "TOUS LES PAYS" : "ALL COUNTRIES"}</option>
                            {filtersList.countries.map((country, i) => (
                                <option key={i}>{country}</option>
                            ))}
                        </select>
                        {/*<label htmlFor="countrySelect">{filters.country}</label>*/}
                    </div> : null}
                {filtersList.directors !== undefined && filtersList.directors.length > 0 ?
                    <div className="filter-col">
                        <select className="directorSelect" id="directorSelect" data-type="director" onChange={handleChangeFilter} value={filters.director === undefined ? '': filters.director}>
                            <option value="">{language === "fr" ? "TOUS LES METTEUR EN SCÈNE" : "ALL DIRECTORS"}</option>
                            {filtersList.directors.map((director, i) => (
                                <option key={i}>{director}</option>
                            ))}
                        </select>
                        {/*<label htmlFor="directorSelect">{filters.director}</label>*/}
                    </div> : null}
                    {console.log(filtersList.locations)}
                {filtersList.locations !== undefined && filtersList.locations.length > 0 ?
                    <div className="filter-col">
                        <select className="locationSelect" id="locationSelect" data-type="location" onChange={handleChangeFilter} value={filters.location === undefined ? '': filters.location}>
                            <option value="">{language === "fr" ? "TOUS LES LIEUX" : "ALL LOCATIONS"}</option>
                            {filtersList.locations.map((location, i) => (
                                <option key={i}>{location}</option>
                            ))}
                        </select>
                        {/*<label htmlFor="location">{filters.location}</label>*/}
                    </div> : null}
                {filtersList.years !== undefined && filtersList.years.length > 0 ?
                    <div className="filter-col">
                        <select className="yearSelect" id="yearSelect" data-type="year" onChange={handleChangeFilter}  value={filters.year === undefined ? '': filters.year}>
                            <option value="">{language === "fr" ? "TOUTES LES ANNÉES" : "ALL YEARS"}</option>
                            {filtersList.years.map((year, i) => (
                                <option key={i}>{year}</option>
                            ))}
                        </select>
                        {/*<label htmlFor="yearSelect">{filters.year}</label>*/}
                    </div> : null}
                <button onClick={handleChangeFilter} data-type="reset">↺</button>
            </div>
        </div>
    );
}
