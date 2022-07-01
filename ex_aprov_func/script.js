function bordVelocity(velocity, printer){

    let newVelocity = velocity - 20

    printer(newVelocity)

    return newVelocity
}


let startVelocity = 150

for (let i = 0; i == 0 ; i = i) {


   let anotherVelocity = bordVelocity(startVelocity, (velocity) => {alert(" A velocidade atual da nave é de " + velocity)})
    // another ja retorna o new velocity

   startVelocity = anotherVelocity
 


   if (startVelocity <=0){
    alert(i)
        alert("A nave esta pronta para o desembarque e as comportas ja podem ser abertas")
        i = 5
        break
     
   }

}
































// let anotherVelocity = bordVelocity(150, (velocity) => {

//     alert(" A velocidade atual da nave é de " + velocity)
// })



// let newVelocity = (velocity, printer) => {  velocity -= 20}

// let compbordo = velocity


// function desacelerate(velocity){

//     velocity -= 20
//     return velocity
// }


// (velocity) => {

//     alert("Nova velocidade é de " + velocity)
// }



// let anotherVelocity = doubleVelocity(50, (velocity) => {

//     alert("Nova velocidade é de " + velocity)
// })

// let newVelocity = function desacelerate(velocity){

//     velocity -= 20
//     return velocity
// }






// function doubleVelocity(velocity,printer){

//     alert("Entrei em double velocity")

//     let newVelocity = velocity * 2

//     printer(newVelocity)

//     return newVelocity
// }

// let printVelocity = velocity =>{

//      alert("Nova velocidade é de " + velocity)
// }

//let newVelocity = doubleVelocity(40, printVelocity)

// alert(newVelocity)


// let anotherVelocity = doubleVelocity(50, (velocity) => {

//     alert("Nova velocidade é de " + velocity)
// })