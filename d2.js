// declaração de variáveis
let saldoHeroi
let nivel
let saldoVitorias = 15
let saldoDerrotas = 10

// declaração das funções
function calculaSaldo(Vitorias, Derrotas){
    return (Vitorias - Derrotas)
}
function calculaNivel(saldo){
    if (saldo < 10){return "Ferro"}
}

// chamada das funções
saldoHeroi = calculaSaldo(saldoVitorias, saldoDerrotas)
nivel = calculaNivel(saldoHeroi)

//saída
console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`)