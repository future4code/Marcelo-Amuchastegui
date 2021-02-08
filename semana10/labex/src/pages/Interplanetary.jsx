import React from 'react'   
import styled from 'styled-components'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Mir from '../../src/image/mir.jpg'
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
     background-image: url(${Mir});
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
                    <Text><h2>Reservas esgotadas até 2025 </h2>Mas não fique triste, ainda temos vagas disponíveis na experiência <b>Gravidade Zero</b>. .... vamos fazer sua reserva agora com<b> desconto especial para todas as mulheres?</b>.  Clique no botão embaixo e siga o roteiro indicado em cada uma das páginas.  </Text><Botone onClick = {() => history.push('/Ofertas')}>Ir para ofertas</Botone>
                </Big>       
            </Inter>
            <Footer/>
        </div>
    )
}