// declaração da função
function atacar(tipo){
    if (tipo === "mago"){
        console.log("O", tipo, "atacou usando magia.")
    } else if (tipo === "inventor"){
        console.log("O", tipo, "atacou usando engenhocas.")
    } else if (tipo === "guerreiro"){
        console.log("O", tipo, "atacou usando a espada.")
    } else {
        console.log("O", tipo, "atacou usando artes marciais")
    }
}

// declaração da estrutura de dados
let hero = [
    {"nome": "Nádal", "idade": 130, "tipo": "mago"},
    {"nome": "Warin", "idade": 400, "tipo": "inventor"},
    {"nome": "Tarev", "idade": 840, "tipo": "guerreiro"},
    {"nome": "Ossu", "idade": 32}
];
h1 = hero[0]
h2 = hero[1]
h3 = hero[2]
h4 = hero[3]
h4.tipo = "caçador"

// chamando a função
atacar(h4.tipo)