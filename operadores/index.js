/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //  false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)  // true

console.log("e. ", typeof resultado)  // boolean 

* * * * * * * * * * * * * * * * *
let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  //  11

let i = 0
console.log('d. ', array[i])  // 3

array[i+1] = 19
console.log('e. ', array) // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)  // 9 */

let idade1 = prompt("qual é sua idade?");
let idade2 = prompt("qual é a idade de seu melho amigo?")
/* Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)*/
console.log("Sua idade é maior que a de seu melhor amigo?: " + Number(idade1) && Number(idade2));