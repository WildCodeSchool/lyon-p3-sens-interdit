import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import SocialNetwork from "./SocialNetwork";
import Ticketing from "./Ticketing";
// import Edition from "./Edition";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NewsletterBtn from "./NewsletterBtn";
import FrEn from "./FrEn";

export default function Header({setShowSearchInput}) {
  return (
    <header>
      <div className="wrapper-header-row1">
        <div className="header-row1">
          <FrEn />
          <NewsletterBtn />
          <Navbar />
          <Ticketing />
          <SearchBar setShowSearchInput={setShowSearchInput}/>
        </div>
      </div>

      <div className="wrapper-header">
        <div className="header-row2">
          <Logo />
          <SocialNetwork />
        </div>
      </div>
    </header>
  );
}
