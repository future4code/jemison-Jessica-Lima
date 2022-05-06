1- Interpretação

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) 

2-

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

3-

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

1- Escrita 

let bichinhos = prompt("Quantos bichinhos você tem?")

while (bichinhos > 0){
   let primeiroNome = prompt("Qual o nome do primeiro bichinho?")
   let segundoNome = prompt("Qual o nome do segundo bichinho?")
   let terceiroNome = prompt("Qual o nome do terceiro bichinho?")
   arrayPets = [primeiroNome, segundoNome, terceiroNome]
   console.log(arrayPets)

 if (bichinhos === 0) {
   console.log("Que pena! Você pode adotar um pet!")
 }
}
