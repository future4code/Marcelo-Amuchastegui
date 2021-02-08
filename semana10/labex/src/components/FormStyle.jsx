import styled from 'styled-components'     

const Button = styled.button`  
width:100vw;
height: 100vh;
background-color:${props=>props.bgCor || 'blue'};
background-image:url(${props=>props.foto});
font-size:${props=>props.ftamanho};
color:${props=>props.fCor};

`;


export default function Batata() {
    return (
        <div>
            <Button
                bgCor="#FF0000" 
                fCor="white">
            </Button>
            <Button pequena="30px">2</Button>
        </div>
    )

}