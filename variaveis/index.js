let a = 10
let b = 10
console.log(b) // aqui será impresso 10
b = 5
console.log(a, b) // aqui será impresso 10  5

////////////////
a = 10
b = 20
c = a
b = c
a = b
console.log(a, b, c)// aqui será impresso 10  10  10*/

let nome 
let idade
console.log(typeof nome); resultado: undefined
console.log(typeof idade); resultado: undefined
//as variaveis existem mas não está definidas (undefined)

let name = "Marcelo";
let age = 70;
console.log(typeof name); resultado: string
console.log(typeof age); resultado: number
// typeof identificou uma string e um número
//console.log(`Olá ${name}, você tem ${age} anos`);

