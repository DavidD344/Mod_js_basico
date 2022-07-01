let nome
let quant = 0
let enter
let dobr = true

nome = prompt("Qual o nome da sua nave?")

enter = confirm("Deseja fazer uma dobra espacial?")

if(enter == true){
   
    while(dobr == true ){
      
   
        dobr = confirm("Deseja entrar na próxima dobra?")
        
      
        quant++
    }


}


alert("A nave " + nome + " fez " + quant + " dobras.")

 


// while(velocity<=100){

//     console.log(velocity)
//     velocity += acceleration

// }

// while(pos < widthName){

//     if(nome[pos] == "A" || nome[pos] == "a"){

//         console.log(pos)
       

//     }

//     pos++

// }