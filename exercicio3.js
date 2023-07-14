let prompt = require('prompt-sync')()


let num1 = parseInt(prompt('Digite um numero: '))
let num2 = parseInt(prompt('Digite um numero: '))
let num3 = parseInt(prompt('Digite um numero: '))






if (num1 < num2 && num2 < num3) {
    console.log("A ordem está correta.")


} else {
    console.log("A ordem está errada.")
}