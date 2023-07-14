let prompt = require('prompt-sync')()


let idade = parseFloat(prompt("Digite o valor de sua compra: R$  "))


if (valor > 100) {
    valor = valor * 1.2
    console.log("O valor de sua compra com desconto é: ")


} else if (valor > 200 && valor <= 100) {
    valor = valor * 1.1
    console.log("O valor de sua compra com desconto é: ")
} else {
    console.log("O valor de sua compra não tem desconto. ")

}