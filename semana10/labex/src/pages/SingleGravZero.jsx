import React from 'react'   
import styled from 'styled-components'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import ZeroGrav from '../../src/image/zeroGrav.jpg'
import { useHistory } from 'react-router-dom'

const Inter = styled.div` 
    width: 98vw;
    height: 66vh;
    display: flex;
    border: solid 5px #fff;
    `;
   
     const Small = styled.div`
     width: 42vw;
     height: 66vh;
     display: flex; 
     background-color:#272F3F;
     background-image: url(${ZeroGrav});
     background-repeat: no-repeat;
     `;

      const Big = styled.div`
      width: 61vw;
      height: 66vh;
      display: flex; 
      flex-direction: column;      
      text-align: center;
      `;
      const Text = styled.div` 
      width: 40 vw;
      height: 60 vh;
      margin: auto;
      `;
      const Botone = styled.button`  
      margin: auto;
      border: solid 0.2px color #95cff0;
      background-color: #2b406b;
      color:#fff;
      width: 20vw;
      height: 8vh;
      border-radius: 8px;
      font-weight: 600;
      font-size: 15px;
     `;

export default function SingleGravZero() {
    
    const history = useHistory()
    return (        
        <div>
            <Header/>
            <Inter>
                <Small></Small>
                <Big>
                    <Text><h2>Parabéns por escolher "Gravidade Zero"</h2> Esta é a proposta da <b>LABE-x</b> quem criou uma experiência de voo sem qualquer gravidade. Ao longo da viagem, que tem duração de uma hora e meia, você experimentará 15 vezes a <b>gravidade zero</b>, com duração de 20 a 30 segundos cada. Para fazer sua reserva clique no botão embaixo e será direcionada à área de cadastro. </Text><Botone onClick = {() => history.push('/Cadastro')}>Ir para cadastro</Botone>
                </Big>
            </Inter>
            <Footer/>
        </div>
    )
}