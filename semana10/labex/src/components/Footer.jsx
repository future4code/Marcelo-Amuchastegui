import React from 'react'   
import styled from 'styled-components'



export default function Footer() {

    const Container = styled.div`
     display: flex;
     flex-direction:row;
     justify-content: center;
     align-items: center;
     background-color: #272F3F; 
     position: relative; 
     height: 15vh;
     width: 100vw;
     color: white;
     `;
     const Text = styled.p`
     display: flex;     
     font-size:10px;
     justify-content: center;
     text-align: center;
     
     `
     const Nav = styled.p` 
     text-align: center;   
     height: 40px;
     width: 96vw;
     `;
 
    
 
     return (          
         <Container>
             
             <Nav>
                <Text> Marcelo Amuchástegui - All rights reserved </Text>
             </Nav>
                                                   
         </Container>                   
     )
 };