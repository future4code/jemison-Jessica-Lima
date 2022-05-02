1- Interpretação
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a- // Ele retorna true ou false. 
b- // Números pares
c- // Números impares

2-
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a- // Para simplicar o código
b- // 2,25
c- // Aparece no console o valor de default, pois sem o break o código continua executando

3-
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a- // Esta fazendo uma pergunta ao usuario
b- // Esse número passou no teste. Aparece que a "mensagem" nao esta definida

1- Escrita

let resposta = prompt("Informe sua idade")
let idade = Number(resposta)

if (idade >= 18) {
    console.log("Você pode dirigir")

} else {
    console.log("Você não pode dirigir")
}

2-
let turnoAula = prompt("Qual o periodo da sua aula? M(matutino), V(vespertino) ou N(noturno)")

if (turnoAula === "M") {
    console.log("Bom dia!")
} else if (turnoAula === "V") {
    console.log("Boa tarde!")
} else (turnoAula === "N") {
    console.log("Boa noite!") 
}

3-
let turnoAula = prompt("Qual o periodo da sua aula? M(matutino), V(vespertino) ou N(noturno)")

switch (turnoAula) {
    case "M":
      console.log("Bom dia!")
    break;
    case "V":
      console.log("Boa tarde!")
    break;
    case "N":
      console.log("Boa noite!")
    break;
}

4-
let cinema = prompt("Qual o genero do filme?")
let ingresso = prompt("Qual o valor do ingresso?")
if (cinema === "fantasia" && ingresso < 15) {
    console.log("Bom filme!")
} else  {
    console.log("Escolha outro filme :(")
}
