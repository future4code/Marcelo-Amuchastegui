import React from 'react'   
import styled from 'styled-components'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import ZeroGrav from '../../src/image/zeroGrav.jpg'
import { useHistory } from 'react-router-dom'


export default function SingleGravZero() {

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
     
     const history = useHistory()
    return (        
        <div>
            <Header/>
            <Inter>
                <Small></Small>
                <Big>
                    <Text><h2>Parabéns por escolher "Gravidade Zero"</h2> Viajar é fonte de inspiração para muitas pessoas e uma das provas disso são as milhares de frases de viagem criadas por pessoas do mundo todo e em todos os tempos. Se liga então nessa lista linda de frases de viagem criadas por Filósofos, Escritores, Poetas, Cantores, Líderes Religiosos e desconhecidos.  </Text><Botone >Ir para cadastro</Botone>
                </Big>
            </Inter>
            <Footer/>
        </div>
    )
}