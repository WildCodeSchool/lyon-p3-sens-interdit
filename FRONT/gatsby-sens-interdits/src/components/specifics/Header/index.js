import React, {useEffect, useState, useRef} from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import SocialNetwork from "./SocialNetwork";
import Ticketing from "./Ticketing";
// import Edition from "./Edition";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NewsletterBtn from "./NewsletterBtn";
import FrEn from "./FrEn";

export default function Header({setShowSearchInput, setShowOverlay}) {
    const [headerFixed, setHeaderFixed] = useState(false);
    const [isMobile, _setIsMobile] = useState(false);
    const [logoHeight, _setLogoHeight] = useState(0);

    const isMobileRef = useRef(isMobile);
    const logoHeightRef = useRef(logoHeight);

    const setIsMobile = data => {
        isMobileRef.current = data;
        _setIsMobile(data);
    }

    const setLogoHeight = data => {
        logoHeightRef.current = data;
        _setLogoHeight(data);
    }

    useEffect(() => {
        setIsMobile(window.innerWidth <= 960);
        setLogoHeight(document.getElementsByClassName('wrapper-header ')[0].clientHeight);
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    function onScroll() {
        if (window.scrollY > logoHeightRef.current + 6 && isMobileRef.current) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    }
    return (
        <header className={headerFixed ? 'fixed' : ''}>
            <div className="wrapper-header-row1">
                <div className="header-row1">
                    <FrEn/>
                    <NewsletterBtn/>
                    <Navbar/>
                    <Ticketing/>
                    <SearchBar setShowSearchInput={setShowSearchInput}/>
                    <Hamburger setShowOverlay={setShowOverlay}/>
                </div>
            </div>

            <div className={"wrapper-header " + (headerFixed ? 'hidden' : '')}>
                <div className="header-row2">
                    <Logo/>
                    <SocialNetwork/>
                </div>
            </div>
        </header>
    );
}
