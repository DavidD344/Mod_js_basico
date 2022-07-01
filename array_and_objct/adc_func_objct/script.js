let nave = {
    nome:"demeter",
    type:"extraction",
    maxCrew: 20,
    turnOn: function(){
        alert("Preparando propulsão")
        alert("Ligando computador de bordo")
        console.log(this.name)
    }

}

nave.velocity = 0
nave.speedUp = function(acel){

    this.velocity += acel 

}

console.log(nave)
nave.speedUp(10)
console.log(nave)