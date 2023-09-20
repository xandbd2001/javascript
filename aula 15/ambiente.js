var num = [5,8,2,9,3]
num [5] = 10
num.push(11)
//num.length (Saber quantos elementos o vetor possui)
// num.sort() Ordem Crescente

console.log(`Nosso Vetor é o: ${num}`)
console.log(`Nosso Vetor Possui ${num.length} Elementos!`)
console.log(`O Primeiro Elemento do Vetor é: ${num[0]}`)
let pos = num.indexOf(15)
if (pos == -1) {
    console.log('O Valor Não foi encontrado')
} else {
    console.log(`O Valor 8 esta na posição ${pos}`)
}
