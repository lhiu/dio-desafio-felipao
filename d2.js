// declaração de variáveis
let saldoHeroi
let nivel
let saldoVitorias = 95
let saldoDerrotas = 10

// declaração das funções
function calculaSaldo(Vitorias, Derrotas){
    return (Vitorias - Derrotas)
}
function calculaNivel(saldo){
    if (saldo <= 10){return "de Ferro"}
    if (saldo > 10 && saldo <= 20){return "de Bronze"}
    if (saldo > 20 && saldo <= 50){return "de Prata"}
    if (saldo > 50 && saldo <= 80){return "de Ouro"}
    if (saldo > 80 && saldo <= 90){return "de Diamante"}
    if (saldo > 90 && saldo <= 100){return "Lendário"}
    if (saldo > 100){return "Imortal"}

}

// chamada das funções
saldoHeroi = calculaSaldo(saldoVitorias, saldoDerrotas)
nivel = calculaNivel(saldoHeroi)

//saída
console.log(`O Herói tem saldo de ${saldoHeroi} e está no nível ${nivel}`)