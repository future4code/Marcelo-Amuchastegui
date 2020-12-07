//a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas
// informações sobre você, como: 
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
//Lembrando que a função não possui entradas, apenas imprimir essa mensagem.
/*let info = ["Marcelo", 70, "São Paulo", "estudante"]
function descricao(info) {
    for(i = 0; i < info.length; i++) {
        console.log(i);
    }
}*/

//EXERCICIO 4
//b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
// o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não.
// Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

function descricao(a, b, c, d) {
    if(d === true){
        return "sou"
    }else {
        return "não sou"
    console.log(`Eu sou ${a}, tenho ${b} anos, moro em ${c} e ${d} estudante`)  
    }
}
descricao("Marcelo", 70, "São Paulo - SP", true)


//EXERCICIO 5
/*Escreva as funções explicadas abaixo:
a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas
 e retorne o resultado. Invoque a função e imprima no console o resultado.
b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual**
 ao segundo.
c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes.
 (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)*/

function somar(num1, num2){
        return num1 + num2
}
console.log(somar(2,5));

//////////////////////////////

function compare(a, b){
    if(a >= b){
        return true
    }else{
        return false
    }
}
console.log(compare(7,5))

///////////////////////////////////
function escrever(string){
    for(i=1; i<= 10; i++){
        console.log(`[i] ${string} precisas estudar`);  
    }
}
escrever("Marcelo")

/////////////////////
//EXERCICIO 6
//Para os itens a seguir, considere o seguinte array para os seus testes:
//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
//b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
//c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele
//d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

function quantidade(array) {
    return array
}
console.log(quantidade(10, 23, 45, 78, 90, 52, 35, 67, 84, 22));

function boleano(a) {
    if(a % 2 === 0) {
        return true
    }else {
        return false
    }
}
console.log(boleano(21));