import React from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import styled from 'styled-components'
import AntiGrav from '../../src/image/antiGrav.jpg'
import Marte from '../../src/image/marte.jpg'
import Estacao from '../../src/image/estacao.jpg'
import Rocket from '../../src/image/rocket.jpg'
import Planetas from '../../src/image/planetas.jpg'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
     display: flex;
     flex-direction:row;
     justify-content: center;
     position: relative; 
     max-height: 82vh;
     max-width: 100vw;
     color: white;
     background-image: url(${AntiGrav});
     background-repeat: no-repeat;
     `;

    const Call = styled.div`  
    display: flex;
    flex-direction: column;
    margin-right: 60vw;
    margin-top: 20vh;
    align-self: left;   
    width: 32vw;
    height: 80vh;
    font-size: 36px;
    font-weight: 800;
    text-shadow: 2px 1px 3px #460303;
    color:white;
     `;
     
     const Boton = styled.div` 
     margin-top: 3vh;
     width: 25vw;
     height: 7vh;
     background-color: #fff;
     border-radius: 15px;
     color: #b60707;
     font-size: 18px;
     font-weight: 900;
     text-shadow: none;
     text-align: center;
     justify-content: center;
     `;

     const Spacer = styled.div` 
     width: 75vw;
     height: 28vh;
     font-size: 36px;
     font-weight: 600;
     text-align:center;
     justify-content: center;
     margin: 6vh auto;
     `;

     const Espaco = styled.div`  
     width: 98vw;
     height: 4vh;
     `;

    const Inter = styled.div` 
    width: 98vw;
    height: 60vh;
    display: flex;
    border: solid 5px #fff;
    `;
   
     const Small = styled.div`
     width: 43vw;
     height: 60vh;
     display: flex; 
     background-color:#272F3F;
     `;

      const Big = styled.div`
      width: 55vw;
      height: 60vh;
      display: flex; 
      background-image: url(${Marte});
      background-repeat: no-repeat;
      text-align: center;
      `;
      const BigA = styled.div`
      width: 55vw;
      height: 60vh;
      display: flex; 
      background-image: url(${Estacao});
      background-repeat: no-repeat;
      text-align: center;
      `;
      const BigB = styled.div`
      width: 55vw;
      height: 60vh;
      display: flex; 
      background-image: url(${Planetas});
      background-repeat: no-repeat;
      text-align: center;
      `;
      const BigC = styled.div`
      width: 55vw;
      height: 60vh;
      display: flex; 
      background-image: url(${Rocket});
      background-repeat: no-repeat;
      text-align: center;
      `;
      const Explain = styled.div`
      width: 35vw;
      height: 50vh; 
      margin:auto;  
      text-align: center;
      color: #fff;
      `;
      const Botone = styled.button`  
       margin-top: 4vh;
       border-radius: 5px;
       font-weight: 600;
       font-size: 15px;
      `;

export default function Home() {
 
    const history = useHistory()
    return (
        
        <div>
            <Header/>
            <Container>
                <Call>Gravidade Zero, uma experiência inesquecível!
                    <Boton onClick = {() => history.push('/Cadastro')}>Faça já sua reserva</Boton>
                </Call>           
            </Container>
            <Spacer>LABE-x agência especializada em viagens espaciais e interplanetárias.</Spacer>
            <Inter>
                <Big> </Big>
                <Small><Explain> <h2>Viagem à marte</h2> São 482 dias de muito aprendizado, paisagens indescritíveis, em meio à calmaria do espaço sideral, sensação de paz e relaxamento, quando poderá por sua leitura em dia. <Botone onClick = {() => history.push('/Interplanetary')}>Mais informações</Botone></Explain>
                </Small>
            </Inter>
            <Espaco/>
            <Inter>
                <Small><Explain><h2>Caminhada no espaço</h2>Este ano é comemorado o aniversário de 50 anos da primeira caminhada no espaço e Labe-x está oferecendo pacote sensacional com 30% de desconto. Não percam !<Botone onClick = {() => history.push('/Interplanetary')}>Mais informações</Botone></Explain>
            </Small>
                <BigA></BigA>                
            </Inter>
            <Espaco/>
            <Inter>
                <BigB></BigB>
                <Small><Explain><h2>Qual é seu planeta preferido.</h2> Nosso limite é o infinito. Com a aquisição de novas e  modernas naves, reduzimos o tempo das viagens. Antes íamos à Netuno em 4 anos.  Agora em somente 2,5 anos !<Botone onClick = {() => history.push('/Interplanetary')}>Mais informações</Botone></Explain>
                </Small>
            </Inter>
            <Espaco/>
            <Inter>
                <Small><Explain><h2>Não deixe o "bondi" passar.</h2> Faça parte das primeiras expedições que habitarão outros planetas. Em nossas naves não embarcam políticos corruptos nem parentes deles. Venha viver no paraíso. <Botone onClick = {() => history.push('/Interplanetary')}>Mais informações</Botone></Explain>   
                </Small>
                <BigC></BigC>                
            </Inter>
            <Espaco/>
            <Footer />
        </div>
       )

}