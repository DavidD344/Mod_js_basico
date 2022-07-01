let criarVazio = {}
let criarVazio2 = new Object()
// da pra criar vazio

let naves = { // da pra criar vazio

    nome: "david",
    tripQuant: 7,
    type: "batalha"
}
//formas de chamar
console.log(naves)
console.log(naves.type)
console.log(naves["nome"])

//formas de adicionar
naves.engate = false
naves["shielLevel"] = 80

//alterar
naves.nome = "marco"

console.log(naves)

// não por nem numero nem espaço nos parametros e sempre usar camelCase


