let prompt = require('prompt-sync')()


let data = prompt("Digite o dia da semana ")


switch (data) {
    case '1':
        console.log("Segunda-feira")
        break;
    case '2':
        console.log("Terça-feira")
        break;
    case '3':
        console.log("Quarta-feira")
        break;
    case '4':
        console.log("Quinta-feira")
        break;
    case '5':
        console.log("Sexta-feira")
        break;
    case '6':
        console.log("Sábado")
        break;
    case '7':
        console.log("Sábado")
        break;
    default:
        console.log("Não faz parte de dia da semana")
        break;




}