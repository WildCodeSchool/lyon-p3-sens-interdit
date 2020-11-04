import React from 'react';
import Footer from './footercomponents/Footer';
import Header from './headercomponents/Header';
import '../styles/header-footer.css'


export default function Layout({children}){
    return(
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}