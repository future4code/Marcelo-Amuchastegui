import React from 'react'   
import styled from 'styled-components'
//import Header from '../components/Header'
import Banner from '../components/Banner'
import Separator from '../components/Separator'
import HalfBanner from '../components/HalfBanner'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Home() {

    const Home = styled.div`
    box-sizing: border-box;
    width:100vw;
    
    `;

    return (
        <div>
            {/* <Header></Header> */}
            <Banner></Banner>
            <Separator></Separator>
            <Banner></Banner>
            <HalfBanner></HalfBanner>
            <Footer></Footer>
        </div>
    )
}