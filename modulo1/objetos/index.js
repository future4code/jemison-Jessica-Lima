1- Interpretação
a- 
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // Globo, 14h

2-
a-
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // Juca, 3, SRD
console.log(gato) // Juba, 3, SRD
console.log(tartaruga) // Jubo, 3, SRD

b- // ... Essa sintaxe é chamada de espelhamento, ele copia um objeto (ou array) inteiro.

3-
a-
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

b- 
console.log(minhaFuncao(pessoa, "backender")) // false, propriedade definida
console.log(minhaFuncao(pessoa, "altura")) // undefined, propriedade indefinida, não tem chave "altura".

1- Escrita
a-
const pessoa = {
    nome: "Ana Laura", 
    apelidos: ["Analu", "Laurinha", "Aninha"]
 }
 
 function apelidosPessoa () {
   console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

 }

apelidosPessoa()




