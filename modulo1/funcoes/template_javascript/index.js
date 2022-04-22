1- Interpretação 
a- function minhaFuncao(variavel) {
   return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50

b- // Não aparece nada no console, pois nao dei a ordem, porém a resposta esta guardada.

2-
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) 

a- // toLowerCase transforma todo o texto inserido pelo usuario minusculo, e includes retorna false ou true se for encontrado o caracter.

b- 
i. // retorna true, eu gosto de cenoura
ii. // retorna true, cenoura é bom pra vista 
iii. // retorna false, cenouras crescem na terra

1- Escrita 
a- 
function sobreMim () {
   let nome = "Jessica"
   let idade = 22 
   let cidade = "Sao Paulo"
   let profissao = "estudante"
   console.log("Eu sou", nome, ",", "tenho", idade, "anos, moro em ", cidade, "e sou", profissao, ".")
}

sobreMim()

b-
function sobreMim2 (nome, idade, cidade, profissao) { 
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao} .`)
}

sobreMim2 ('Jessica', 22, 'Sao Paulo', "estudante")

2- 
a-
function somaNumeros (num1, num2) {
    const soma = num1 + num2
    console.log(soma)
}

somaNumeros (12, 36) // 48

b-
function comparacaoNumeros (num1, num2) {
    let comparacao = num1 >= num2
    console.log(comparacao)
}

comparacaoNumeros (23, 16) // true

c-
function seForPar (numero) {
    let numPar = numero % 2 == 0  
    console.log(numPar)
}
seForPar (62) // true

d-
function mensagem (frase) {
    console.log(`${frase.toUpperCase()}`)
}

mensagem ('A vida é muito curta para não aproveitar') // A VIDA É MUITO CURTA PARA NÃO APROVEITAR

3-
function somaPrompt () {
    let primeiroNum = Number(prompt("Insira o primeiro numero"))
    let segundoNum = Number(prompt("Insira o segundo numero"))
    let soma = primeiroNum + segundoNum
    console.log(`A soma dos dois numeros é: ${soma}`)
}
function subtracaoPrompt () {
    let primeiroNum = Number(prompt("Insira o primeiro numero"))
    let segundoNum = Number(prompt("Insira o segundo numero"))
    let subtracao = primeiroNum - segundoNum
    console.log(`A subtracao dos dois numeros é: ${subtracao}`)
}

function multiplicacaoPrompt () {
    let primeiroNum = Number(prompt("Insira o primeiro numero"))
    let segundoNum = Number(prompt("Insira o segundo numero"))
    let multiplicacao = primeiroNum * segundoNum
    console.log(`A multiplicacao dos dois numeros é: ${multiplicacao}`)
}

function divisaoPrompt () {
    let primeiroNum = Number(prompt("Insira o primeiro numero"))
    let segundoNum = Number(prompt("Insira o segundo numero"))
    let divisao = primeiroNum / segundoNum
    console.log(`A divisao dos dois numeros é: ${divisao}`)
}

somaPrompt() // 66

subtracaoPrompt() // 54

multiplicacaoPrompt() // 360

divisaoPrompt() // 10

