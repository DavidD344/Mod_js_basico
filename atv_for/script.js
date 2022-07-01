
let newName = ""



const nome = prompt("Qual o nome da sua nave?")
const letterStart = prompt("Qual letra você quer tirar?")
const letterEnd = prompt("Qual letra você quer colocar?")



for (let i = 0; i < nome.length; i++) {
    
    if(nome[i] == letterStart){

        newName += letterEnd

    }else{
    newName += nome[i];
}
}

alert(newName)