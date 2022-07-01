function doubleVelocity(velocity,printer){

    alert("Entrei em double velocity")

    let newVelocity = velocity * 2

    printer(newVelocity)

    return newVelocity
}

// let printVelocity = velocity =>{

//     alert("Nova velocidade é de " + velocity)
// }

// let newVelocity = doubleVelocity(40, printVelocity)

// alert(newVelocity)


let anotherVelocity = doubleVelocity(50, (velocity) => {

    alert("Nova velocidade é de " + velocity)
})