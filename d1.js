// declaração de variáveis
let nomeHeroi = "lhiu"
let xp = 100000000000
let nivel

// verificando o nível com base no xp
if (xp <= 1000){nivel = "Ferro"}
if (xp > 1000 && xp <= 2000){nivel = "de Bronze"}
if (xp > 2000 && xp <= 5000){nivel = "de Prata"}
if (xp > 5000 && xp <= 7000){nivel = "de Ouro"}
if (xp > 7000 && xp <= 8000){nivel = "de Platina"}
if (xp > 8000 && xp <= 9000){nivel = "Ascendente"}
if (xp > 9000 && xp <= 10000){nivel = "Imortal"}
if (xp > 10000){nivel = "Radiante"}

// saída
console.log ("O herói de nome", nomeHeroi, "está no nível", nivel + ".")