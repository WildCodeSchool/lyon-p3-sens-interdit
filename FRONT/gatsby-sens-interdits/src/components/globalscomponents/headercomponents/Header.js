import React from 'react';
import Navbar from './Navbar';
import SocialNetwork from './SocialNetwork';
import Ticketing from './Ticketing';
import Edition from './Edition';
import Logo from './Logo';
import SearchBar from './SearchBar';
import FrEn from './FrEn'
import NewsletterBtn from './NewsletterBtn';


export default function Header(){
    return(
<header>
      <div className="wrapper-header">
        <div className="header-row1">
          <FrEn />
          <NewsletterBtn />
          <Navbar />
          <Ticketing />
          <SearchBar />
        </div>
        <div className="header-row2">
          <Logo />
          <Edition />

          <SocialNetwork />
        </div>
      </div>
    </header>
    )
}