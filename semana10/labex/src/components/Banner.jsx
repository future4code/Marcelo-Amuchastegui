import React from 'react'   
import styled from 'styled-components'
import AntiGrav from '../../src/image/antiGrav.jpg'


export default function Banner() {

    const Banner = styled.div`
    display: flex;
    display: inline;
    justify-content: center;
    align-items: center;
    position: relative; 
    max-height:450px;
    max-width: 930px;
    grid-row: 1;     
    `;

    const Call = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 27vw;
    height: 250px;
    color: white;
    /* margin-top: -70vh; */
    margin-left: 4vw;
    text-align: left;
    box-shadow: 1 2 3 0.6 black; 
    `;
    

    return (
        <div>
            <img src={AntiGrav} />
            <Call><h1>Gravidade zero. Experiência inesquecível !!!!</h1> </Call>
            <Banner></Banner>
            
        </div>
    )
}