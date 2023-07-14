let prompt = require('prompt-sync')()


let login = (prompt("Digite seu email "));
let senha = (prompt("Digite a sua senha: "));




if (login == "admin" && senha == "senha123") {
    console.log("Usuario logado no site.")




} else {
    console("Usuario não está cadastrado")
}