1- Interpretação
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // booleano

2- // Percebi que a escrita do código está errada. Será impresso no console o tipo em string.

3- let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero 
console.log(soma)

1- Escrita
a- let suaIdade = prompt("Informe sua idade!") // 22
b- let idadeAmigo = prompt("Qual a idade do seu melhor amigo?") // 28

c- let resultado = suaIdade > idadeAmigo
console.log("Sua idade é maior que a do seu melhor amigo?", resultado) // false

d- resultado = suaIdade - idadeAmigo
console.log("a diferença de idade é:", resultado) // -6

2- 
a- let valor1 = prompt("Insira um número par!")
b- let valor2 = 2

let resultado = valor1 & valor2
console.log("O resto da divisão é:", resultado)

c- // Qualquer número par dividido por dois, não tem resto da divisão. O resultado sempre será zero.

d- // Qualquer número ímpar dividido por dois, sempre terá resto da divisão.

3-
let idadeAnos = Number(prompt("Insira sua idade em anos")) // 37

let resultado = idadeAnos * 12
console.log("A idade do usuário em meses é:", resultado) // 444 meses

resultado = idadeAnos * 365
console.log("A idade do usuário em dias é:", resultado) // 13505 dias

resultado = (idadeAnos * 365) * 24
console.log("A idade do usuário em horas é?", resultado) // 324120 horas

4-
let primeiroNumero = prompt("Informe o primeiro numero!")
let segundoNumero = prompt("Informe o segundo numero!")

let comparacao = primeiroNumero > segundoNumero
console.log("O primeiro numero é maior que o segundo?", comparacao) // true

comparacao = primeiroNumero === segundoNumero
console.log("O primeiro numero é igual ao segundo?", comparacao) // false

comparacao = (primeiroNumero % segundoNumero) === 0
console.log("O primeiro numero é divisível pelo segundo?", comparacao) // true

comparacao = (segundoNumero & primeiroNumero) === 0
console.log("O segundo numero é divisível pelo primeiro?", comparacao) // false










