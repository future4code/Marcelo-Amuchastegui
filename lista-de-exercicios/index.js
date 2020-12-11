
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/* let i = 0;
 while(i <= lista.length) {
     console.log(i);
     i++
 }

 for(i = 0; i <= lista.length; i++) {
     console.log(lista[i]);
 }

 for(let numero of lista) {
     console.log(numero);
 }

 LOGICA DE PROGRAMAÇÃO - EXERCICIO 3
 Você tem que escrever um código que, dado um número N, ele imprima (no console) os N primeiros números pares 
 (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve imprimir 0, 2, 4, 6 e 8). 
 
let num = 7+1
let i = 0;
while(i <= num) {
    if(i % 2 === 0) {
        console.log(i);
    };
    i++
}

//4. Vocês lembram de trigonometria? O exercício é simples, mas mexe com isso. Veja bem: quando nos ensinam 
//triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho de seus lados. 
//Se um triângulo possuir os **três lados iguais**, ele é chamado de "Equilátero". Se possuir, **dois (e somente 2)
// lados iguais**, diz-se que ele é "Isósceles". Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". 
//Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: `a, b, c`  e retorne se ele é
// equilátero, isósceles ou escaleno.
function tipoTriangulo(a, b, c){
    if ( a === b && b === c){
        console.log("Triângulo Equilátero");      
    }else if((a !== b && b !== c && a === c) || (a !== b && b === c && a !== c) || (a === b && b !== c && a !== c) ) {
        console.log("Triângulo Escaleno!"); 
    }else{
        console.log("Triângulo Isósceles");
    }
}
tipoTriangulo(1, 4, 4);


EXERCICIO 5 
function numMaior(num1, num2) {
    if(num1 > num2) {
        console.log(`O maior número é : ${num1}`);
    }else {
        console.log(`O maior número é : ${num2}`);
    }
}
console.log(numMaior(87, 5));

function numDiv(num1, num2) {
    if((num1 /num2) % 2 === 0) {
        console.log("Os números são divisíveis");
    }else{
        console.log("os números são indivisíveis");
    }
}
console.log(numDiv(40, 20))

function numMaior(num1, num2) {
    if(num1 > num2) {
        console.log(`O maior número é : ${num1}`);
    }else {
        console.log(`O maior número é : ${num2}`);
    }
}
console.log(numMaior(87, 5));

function numDiv(num1, num2) {
    if((num1 /num2) % 2 === 0) {
        console.log("Os números são divisíveis");
    }else{
        console.log("os números são indivisíveis");
    }
}
console.log(numDiv(40, 20))
*/
//EXERCICIO FUNÇÕES
//1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número.
// Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)
//2. Escreva uma **função não nomeada** que faça um `alert("Hello Labenu!");`. Em seguida, invoque essa função.
