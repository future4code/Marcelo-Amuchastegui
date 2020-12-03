//EXERCICIO 3
//Imprima cada um dos valores do array original.
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);

//Imprima cada um dos valores do array original divididos por 10
for(i=0; i<numeros.length; i++) {
    console.log(`${i}) ${numeros[i]} / 10 = ${numeros[i]/10}`);
}

//Crie um novo array contendo, somente, os números pares do array original.
let pares = []
for(i=0; i<numeros.length; i++) {
    if(numeros[i]% 2 === 0)
    pares.push(numeros[i])
}
console.log(pares);

//Crie um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
//Imprima** este novo array
let novoArray = [ ]
for(i=0; i<numeros.length; i++) {
    novoArray.push(`O elemento de index ${i} é: ${numeros[i]}`)
}
console.log(novoArray);
    
//e. Escreva um programa que imprima no console o maior e o menor números contidos no array original
const arrayDeNumeros = [11, 15, 18, 14, 12, 13];
let maior = 0;
let menor = 20;
for(let num of arrayDeNumeros) {
    if(num > maior) {
        maior = num
    }
}

for(let num of arrayDeNumeros) {
    if(num < menor) {
        menor = num
    }
}

console.log(maior, menor);