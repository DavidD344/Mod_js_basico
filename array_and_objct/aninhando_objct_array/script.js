
// let nave ={
//     nome:"Galaxia",
//     type:"war",
//     crew: ["david","nath","marco","clara"]

// }

// nave.crew.push("fernando")

// alert(nave.crew)
let lista = "Todas as naves: "
let crewTotal = 0
let naves = [
    {nome:"elemental", crewQuantity:12},
    {nome:"colossus", crewQuantity: 9},
    {nome:"galaxy", crewQuantity: 7}
]

// alert(naves[1].nome)
// alert(naves[2].crewQuantity)

naves.forEach(nave =>{

    crewTotal += nave.crewQuantity
    lista += nave.nome + ", "
    alert(nave.nome + " tem " + nave.crewQuantity + " tripulantes.")
})

alert(lista)
alert(crewTotal)