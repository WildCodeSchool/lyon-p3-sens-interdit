import React from "react"
import Footer from "../../specifics/Footer"
import Header from "../../specifics/Header"
import "../../../assets/styles/global.css"
import SharingBox from "./../SocialSharing/SharingBox";

export default function Index({ children }) {
  return (
    <>
      <Header />
      <SharingBox />
      <main>{children}</main>
      <Footer />
    </>
  )
}
