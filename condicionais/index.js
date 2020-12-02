
let idade = Number(prompt("Digite sua idade"));
if(idade >= 18){
    console.log("Você pode dirigir");
}else {
    console.log("Você não pode dirigir");
}

let turno = prompt("digite em qual é seu turno M matutino V vespertino ou N noturno").toUpperCase();
if(turno === "M"){
    console.log("Bom dia!");
}else if(turno === "V") {
    console.log("Boa tarde");
}else if(turno === "N") {
    console.log("Boa noite!");
}else{
    console.log("Você digitou errado, tente novamente");
}

let turnoDeEstudo = prompt('Qual o turno que você estuda? Digite M se for matutino, V para Vespertino e N para Noturno').toUpperCase();
switch(turnoDeEstudo){
  case 'M': 
    console.log('Bom dia')
    break;
  case 'V':
    console.log('Boa tarde !')
    break;
  case 'N':
    console.log('Boa Noite!')
    break
  default:
    console.log('Algo deu errado, favor tente novamente')
}


let filme = prompt('Digite o genero do filme. Filmes de fantasia por R$ 14').toUpperCase()
let valorIngresso = Number(prompt('Digite o valor do Ingresso'))

if(filme === 'FANTASIA' && valorIngresso < 15){
  console.log('Bom Filme')
}else{
  console.log("Escolha outro filme :(")
}