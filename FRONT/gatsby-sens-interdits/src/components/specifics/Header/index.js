import React from "react";
import "./Header.css";
import Navbar from './Navbar';
import SocialNetwork from "./SocialNetwork";
import Ticketing from "./Ticketing";
// import Edition from "./Edition";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NewsletterBtn from "./NewsletterBtn";
// import FrEn from './FrEn'

export default function Header() {
  return (
    <header>
      <div className="wrapper-header-row1">
        <div className="header-row1">
          {/* Option not functionnal yet
          <FrEn /> 
          */}
          <NewsletterBtn />
          <Navbar />
          <Ticketing />
          <SearchBar />
        </div>
      </div>

      <div className="wrapper-header">

        <div className="header-row2">
          <Logo />
          {/* We don't use it anymore because this is a logo part
          <Edition /> 
          */}
          <SocialNetwork />
        </div>
      </div>
    </header>
  );
}
