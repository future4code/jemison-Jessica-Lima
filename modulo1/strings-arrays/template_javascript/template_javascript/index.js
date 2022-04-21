1- Interpretação
let array 
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d.', array[i]) // 3

array[i+1] = 19
console.log('e.', array) // 3,19,5,6,7...

const valor = array[i+6]
console.log('f. ', valor) // 9

2- 
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A, I"), frase.length) // SUBI NUM ÔNIBUS EM MARROCOS 27
 
1- Escrita
let nome = prompt("Informe seu nome")
let email = prompt("Informe seu email")
console.log("O email", email, "foi cadastrado com sucesso.Seja bem-vinda(o),", nome) // O email carlosmarques@outlook.com foi cadastrado com sucesso.Seja bem-vinda(o), Carlos Marques

2-
let arrayComidas = [
    "Strogonoff", 
    "Parmegiana", 
    "Batata Frita", 
    "Chocolate", 
    "Sorvete",
]
a- console.log(arrayComidas)
b- console.log("Essas são as minhas comidas preferidas:", arrayComidas)
c- let i = 0
console.log(arrayComidas[i])

let comidaUsuario = prompt("Informe sua comida preferida")

arrayComidas[i+1] = comidaUsuario
console.log(arrayComidas)

3-
a- arrayListaDeTarefas = []

b- 
let tarefa1 = prompt("Qual a sua primeira tarefa do dia?")
let tarefa2 = prompt("Qual a sua segunda tarefa do dia?")
let tarefa3 = prompt("Qual a sua terceira tarefa do dia?")

arrayListaDeTarefas = [tarefa1, tarefa2, tarefa3]

c- console.log(arrayListaDeTarefas)

d- let indice = prompt("Qual tarefa já realizou?")

e- arrayListaDeTarefas.splice(0, 1)

f- console.log(arrayListaDeTarefas)