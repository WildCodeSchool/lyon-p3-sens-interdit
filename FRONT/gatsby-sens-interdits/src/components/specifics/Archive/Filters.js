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
                {filtersList.countries.length > 0 ?
                <select className="countrySelect" data-type="country" onChange={handleChangeFilter}>
                    <option value="">{language === "fr" ? "PAYS" : "COUNTRY"}</option>
                    {filtersList.countries.map((country, i) => (
                        <option key={i}>{country}</option>
                    ))}
                </select> : null}
                {filtersList.directors.length > 0 ?
                <select className="directorSelect"  data-type="director" onChange={handleChangeFilter}>
                    <option value="">{language === "fr" ? "METTEUR EN SCÈNE" : "DIRECTOR"}</option>
                    {filtersList.directors.map((director, i) => (
                        <option key={i}>{director}</option>
                    ))}
                </select> : null}
                {filtersList.locations.length > 0 ?
                <select className="locationSelect"  data-type="location" onChange={handleChangeFilter}>
                    <option value="">{language === "fr" ? "LIEUX" : "LOCATION"}</option>
                    {filtersList.locations.map((location, i) => (
                        <option key={i}>{location}</option>
                    ))}
                </select> : null}
                {filtersList.years.length > 0 ?
                <select className="yearSelect"  data-type="year" onChange={handleChangeFilter}>
                    <option value="">{language === "fr" ? "ANNÉE" : "YEAR"}</option>
                    {filtersList.years.map((year, i) => (
                        <option key={i}>{year}</option>
                    ))}
                </select> : null}
                <button onClick={handleChangeFilter} data-type="reset">↺</button>
            </div>
        </div>
    );
}
