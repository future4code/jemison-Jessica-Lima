// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

retornaTamanhoArray ([3,6,7,9,0,8])


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

retornaArrayInvertido ([12,34,56,78,90])


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort()
}

retornaArrayOrdenado ([9,5,8,4,6,1])

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(pares % 2 == 0)

}

retornaNumerosPares([1,2,3,4,5,6,7,8,9.0])

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for(let i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
    }
    console.log(maior)
}

retornaMaiorNumero([1,3,5,7,9,0])

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {   
    let cinema = {
    nome:
    ano:
    diretor: 
    atores: 
}
console.log(`Venha assistir ao filme ${cinema.nome}, de ${cinema.ano}, dirigido por ${cinema.diretor} e estrelado por ${cinema.atores}.`)
}

retornaChamadaDeFilme ({"nome":"O Diabo Veste Prada","ano":2006,"diretor":"David Frankel","atores":["Meryl Streep","Anne Hathaway","Emily Blunt","Stanley Tucci"]})

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}


