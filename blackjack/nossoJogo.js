/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
  
 */
let pontos = 0
let primeiraCartaCliente = comprarCarta();
let segundaCartaCliente = comprarCarta();
let primeiraCartaComputador = comprarCarta();
let segundaCartaComputador = comprarCarta();

console.log("Bemvindo ao jogo de BlackJack");

if(confirm("Quer comprar uma nova carta?")) {
   primeiraCartaCliente.texto;
   pontos = primeiraCartaCliente.valor;
   segundaCartaCliente.texto;
   pontos += segundaCartaCliente.valor;
   let pontosCliente = pontos;
   pontos = 0;
    
   primeiraCartaComputador.texto;
   pontos = primeiraCartaComputador.valor;
   segundaCartaComputador.texto;
   pontos +=segundaCartaComputador.valor;
   let pontosComputador = pontos; 

   if(pontosCliente <= 21 && pontosComputador <= 21) {
      console.log(`Computador - Cartas ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - Pontuação: ${pontosComputador}`);
      console.log(`Cliente - Cartas ${primeiraCartaCliente.texto} ${segundaCartaCliente.texto} - Pontuação: ${pontosCliente}`);
   }

   if(pontosCliente === pontosComputador) {
      console.log("Deu empate!");
   }else if(pontosCliente > pontosComputador) {
      console.log("Cliente ganhou");
   }else {
      console.log("Computador ganhou");
   }
}
if(confirm("Quer comprar uma nova carta?")) {
   primeiraCartaCliente.texto;
   pontos = primeiraCartaCliente.valor;
   segundaCartaCliente.texto;
   pontos += segundaCartaCliente.valor;
   let pontosCliente = pontos;
   pontos = 0;
    
   primeiraCartaComputador.texto;
   pontos = primeiraCartaComputador.valor;
   segundaCartaComputador.texto;
   pontos +=segundaCartaComputador.valor;
   let pontosComputador = pontos; 

   if(pontosCliente <= 21 && pontosComputador <= 21) {
      console.log(`Computador - Cartas ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - Pontuação: ${pontosComputador}`);
      console.log(`Cliente - Cartas ${primeiraCartaCliente.texto} ${segundaCartaCliente.texto} - Pontuação: ${pontosCliente}`);
   }

   if(pontosCliente === pontosComputador) {
      console.log("Deu empate!");
   }else if(pontosCliente > pontosComputador) {
      console.log("Cliente ganhou");
   }else {
      console.log("Computador ganhou");
   }   

}else {
   //console.log("O jogo acabou");
}
alert("O jogo acabou. Quer reiniciar?")
