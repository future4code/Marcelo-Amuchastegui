import React, { useState } from 'react'   
import styled from 'styled-components'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


    const ContCadastro = styled.div`
     display: flex;
     justify-content: center;
     position: relative; 
     height: 65vh;
     width: 100vw;
     color: #aaa6a6;
     background-color:#465775;
     `; 
    const FormArea = styled.form`  
    display: flex;
    flex-direction: column;
    margin: auto;      
    width: 45vw;
    height: 56vh;
    font-size: 12px;
    font-weight: 400; 
    border: solid 0.4px #706f6f;
    border-radius: 5px;
    text-align: center;
    color:#5a5959;
    background-color:#f6F6F6;
     `; 
    const Campos = styled.input`   
    width:29vw;
    height:4vh;
    margin: 2vh auto;
    font-size: 11px;
    `;
    const Titulo = styled.div`  
    width:29vw;
    height:2vh;
    margin: auto;    
    font-size: 12px;
    font-weight:500;
    color:#000;
    text-align:left;
    `;
    const Branco = styled.div`  
    width: 38vw;
    height: 2vh;
    margin:left;
    `;
    const Boton = styled.button`   
    width:8vw;
    height:5vh;
    margin: 5vh auto;
    background-color: #272F3F;
    color:#fff;
    justify-content: center;
    `
    const Lp = styled.p`  
    color:#af0606;
    font-weight:500;
    `;

export default function Login() {  
     
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const History = useHistory()

    
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    } 

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    } 
    
    const onSubmitForm = (event) => {
      event.preventDefault();
      const body = {
        email: email,
        password: password
      };
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo/login", body, {

    }).then((response) => {
        console.log(response.data)
        History.push('/Reservas')
    }).catch((error) => {
        console.log(error.message)
    })
    };
     
         
    return (        
        <div>
            <Header/>
            <ContCadastro>                 
                <FormArea onSubmit={onSubmitForm}><h2>LOGIN</h2><Lp>Para ver sua reserva, precisa finalizar seu <b>Login</b>.</Lp> 
                    <Titulo>E-mail</Titulo> 
                    <Campos  name="email" value={email} placeholder="Digite aqui seu e-mail" onChange={onChangeEmail}></Campos>
                    <Titulo>Senha </Titulo> 
                    <Campos  name="password" value={password} placeholder="Crie e digite uma senha" onChange={onChangePassword}></Campos>
                    <Boton>Enviar</Boton>
                    <Branco/>
                </FormArea>
            </ContCadastro>
            <Footer/>
        </div>
        
    )
}