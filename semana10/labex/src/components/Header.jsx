import React from 'react'   
import styled from 'styled-components'
import Foto from '../../src/image/logo.png'
import { useHistory } from 'react-router-dom'


const Container = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    background-color: #272F3F; 
    position: relative; 
    max-height: 12vw;
    width: 100vw;
    font-size:14px;
    color: white;
    `

    const Logo = styled.div`
    margin-left: 10vw;
    background-image: url(${Foto});
    width: 70px;
    height: 70px;
    `

    const Nav = styled.div` 
    display: flex;
    flex-direction: row;
    margin: auto;
    height: 60px;
    width: 40vw;
    margin-right: 5vw;
    `

    const Boto = styled.button`
    width: 8vw;
    height: 4vh;
    margin:  7vh auto ;
    margin-right: 2vw;
    border-color:#82c2f7;
    border-width: 0.5px;
    border-radius: 6px;
    font-size:10px;
    color: white;
    background-color:  #272F3F;
    `
    const Text = styled.div`  
    width: 10vw;
    height: 6vh;
    margin: auto;
    font-size: 24px;
    font-weight: 800;
    color: #d14914
    ` 


export default function Header() {

    const history = useHistory()

    return (          
        <Container>
            <Logo />
            <Text>LABE-x</Text>
            <Nav>
                <Boto onClick = {() => history.push('/')} >HOME</Boto>
                <Boto onClick = {() => history.push('/SingleGravZero')}>RESERVAS</Boto>
                <Boto onClick = {() => history.push('/Cadastro')}>CADASTRO</Boto>
                <Boto onClick = {() => history.push('/Login')}>LOGIN</Boto>
            </Nav>                                   
        </Container>                   
    )
};