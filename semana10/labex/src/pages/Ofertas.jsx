import React from 'react'   
import styled from 'styled-components'
import Footer from '../../src/components/Footer'
import Header from '../../src/components/Header'
import AviaoZero from '../../src/image/aviaoZero.jpg'
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
     background-image: url(${AviaoZero});
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
                    <Text><h2> Oferta imperdível !</h2>Em homenagem a todas as mulheres e em comemoração ao dia Internacional delas, <b>LABE-x</b> esta oferecendo<b> 50% de desconto na experiência Gravidade Zero </b>a todas as mulheres que façam suas reservas até 08 de março de 2021. Clique no botão e faça já seu cadastro e inscrição. </Text><Botone onClick = {() => history.push('/Cadastro')}>Ir para cadastro</Botone>
                </Big>       
            </Inter>
            <Footer/>
        </div>
    )
}