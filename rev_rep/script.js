const nome = prompt("Qual palavra deseja inverter (!e)?")
let endName = ""



for (let i = nome.length - 1; i >= 0; i = i-1) {

    if(nome[i] == "e"){

         break

    }else{

        endName += nome[i]
       
    }

    
}

alert("Nome original: " + nome + "\nNome invertido: " + endName)

console.log(endName)