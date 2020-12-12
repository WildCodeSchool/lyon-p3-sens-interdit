import React, {useState} from "react";
import Footer from "../../specifics/Footer";
import Header from "../../specifics/Header";
import Overlay from "../Overlay";
import SearchInput from "../../specifics/SearchInput";
import "../../../assets/styles/global.css";
import SharingBox from "./../SocialSharing/SharingBox";
import LanguageProvider from "../../context/LanguageProvider";

export default function Index({ children }) {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <LanguageProvider test="test">
        <Header setShowSearchInput={setShowSearchInput} setShowOverlay={setShowOverlay} />
        <SharingBox />
        <main>{children}</main>
        <Footer />
        <SearchInput showSearchInput={showSearchInput} setShowSearchInput={setShowSearchInput}/>
        <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}/>
      </LanguageProvider>
    </>
  );
}
