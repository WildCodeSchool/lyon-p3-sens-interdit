import React from 'react';
import Navbar from './Navbar';
import SocialNetwork from './SocialNetwork';
import Ticketing from './Ticketing';
import Edition from './Edition';
import Logo from './Logo';
import SearchBar from './SearchBar';
import FrEn from './FrEn'
import NewsletterBtn from './NewsletterBtn';
import './header-footer.css'


export default function Header(){
    return(
<header>
      <div class="wrapper-header">
        <div class="header-row1">
          <FrEn />
          <NewsletterBtn />
          <Navbar />
          <Ticketing />
          <SearchBar />
        </div>
        <div class="header-row2">
          <Logo />
          <Edition />

          <SocialNetwork />
        </div>
      </div>
    </header>
    )
}