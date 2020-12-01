import React from "react";
import Footer from "../../specifics/Footer";
import Header from "../../specifics/Header";
import "../../../assets/styles/global.css";
import SharingBox from "./../SocialSharing/SharingBox";
import LanguageProvider from "../../context/LanguageProvider";

export default function Index({ children }) {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Header />
        <SharingBox />
        <main>{children}</main>
        <Footer />
      </LanguageProvider>
    </>
  );
}
