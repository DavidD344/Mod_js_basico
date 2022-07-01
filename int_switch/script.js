let lightVelocity
let unid
let stringUnid
let permissCalc
let unidConvert
const km = Math.pow(10,12)


lightVelocity = prompt("Velocidade em anos luz")

unid = prompt("Para qual unidade você quer converter?\n\n1- Parsec\n2- Unidade Astronômica\n3- Quilômetros")

switch(unid){
    case "1":
        stringUnid = "Parsec"
        unidConvert = lightVelocity * 0.306601
        break

    case "2":   
        stringUnid = "Unidades astronômicas"
        unidConvert = lightVelocity * 63241.1
        break

    case "3":
        stringUnid = "Quilômetros"
        unidConvert = lightVelocity * 9.5 * km
        break
}

permissCalc = confirm("Você quer converter " + lightVelocity + " anos-luz para " + stringUnid + "?")

if(permissCalc = true){

    alert("Sua converssão está completa!\n\n\n" + lightVelocity + " anos-luz equivalem a :\n\n" + unidConvert + " " + stringUnid)


}else{

    alert("Entradas não validas!!")
}





// switch(unid){

//     case 1:
//         alert("ME MAMA")
//         break
//     case 2:
//         alert("ME MAMA")
//         break
//     case 3:
//         alert("Opção escolhida")
        
//         break
  

// }