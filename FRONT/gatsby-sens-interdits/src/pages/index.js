import React from "react"
import Footer from "../components/globalscomponents/footercomponents/Footer"
import Header from "../components/globalscomponents/headercomponents/Header"
import '../styles/global.css'

export default function Home() {
  return <div className="body">
    <Header />
    <Footer />
  </div>
}
