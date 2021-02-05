import React from 'react'   
import styled from 'styled-components'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Under from '../../src/image/underConstruction.jpg'


export default function Cadastro() {

    const ContCadastro = styled.div`
     display: flex;
     flex-direction:row;
     justify-content: center;
     position: relative; 
     height: 82vh;
     width: 100vw;
     color: white;
     background-image: url(${Under});
     `; 
    const Call = styled.div`  
    display: flex;
    flex-direction: column;
    margin-right: 45vw;
    margin-top: 28vh;
    align-self: left;   
    width: 42vw;
    height: 60vh;
    font-size: 36px;
    font-weight: 700; 
     `; 
     
    return (        
        <div>
            <Header/>
            <ContCadastro> <small>Cadastro</small>
                <Call>Página em construção</Call>
            </ContCadastro>
            <Footer/>
        </div>
    )
}