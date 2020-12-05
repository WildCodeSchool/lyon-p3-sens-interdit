import React, {useState} from "react";
import Footer from "../../specifics/Footer";
import Header from "../../specifics/Header";
import SearchInput from "../../specifics/SearchInput";
import "../../../assets/styles/global.css";
import SharingBox from "./../SocialSharing/SharingBox";
import LanguageProvider from "../../context/LanguageProvider";

export default function Index({ children }) {
    const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <>
      <LanguageProvider>
        <Header setShowSearchInput={setShowSearchInput} />
        <SharingBox />
        <main>{children}</main>
        <Footer />
        <SearchInput showSearchInput={showSearchInput} setShowSearchInput={setShowSearchInput}/>
      </LanguageProvider>
    </>
  );
}
