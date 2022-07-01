function speedcalc(velocity, acel){

    endVelocity = velocity + acel;
    alert("A sua velocidade atual é de " + velocity);
    return endVelocity;
}

velocity = speedcalc(25, 5);

alert("A sua velocidade atual é de " + velocity);
