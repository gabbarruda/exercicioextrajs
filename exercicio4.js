let prompt = require('prompt-sync')()


let idade = prompt("Digite a sua data de nascimento:  ")




if (idade >= 18) {
    console.log("Usuario maior de idade")


} else {
    console.log("Usuario menor de idade")
}