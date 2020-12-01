import React from "react";
import Footer from "../../specifics/Footer";
import Header from "../../specifics/Header";
import LanguageProvider from "../../context/LanguageProvider";
import "../../../assets/styles/global.css";

export default function Index({ children }) {
  return (
    <>
      <LanguageProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </LanguageProvider>
    </>
  );
}
