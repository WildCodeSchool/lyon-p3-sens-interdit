import React from "react"
import Footer from "../../specifics/Footer"
import Header from "../../specifics/Header"
import "../../../assets/styles/global.css"

export default function Index({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
