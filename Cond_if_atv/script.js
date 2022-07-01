let nome
let newVelocity
let permiss
let i = 0
alert("Ola putinha preenche os campo ai!!!!(ɔ◔‿◔)ɔ ♥")

nome = prompt("Nome do tripulante!")
newVelocity = prompt("Qual velocidade você quer?")
permiss = confirm("A nave vai acelerar para a velocidade "+ newVelocity + " ok?")


if(permiss == true){

    
    alert("acelerando");
    
    if(newVelocity > 0){ i++}
    if(newVelocity > 40){ i++}
    if(newVelocity > 80){ i++}
    if(newVelocity > 100){ i++}
   

    if(i == 0){ alert("nave parada")}
    if(i == 1){ alert("nave devagar")}
    if(i == 2){ alert("manter velocidade")}
    if(i == 3){alert("velocidade alta")}
    if(i == 4){ alert("Velocidade perigosa. Controle automático ativado")}

ou

// if e else if para n precisar do swotch case da deepweb

    alert("Comandante " + nome + " a velocidade atual é de " + newVelocity)

}else{

    alert("cancelando missão")
}



// =0 nave parada
// <40 nave devagar
// >=40manter velocidade

// >=80 velocidade alta

// >=´100Velocidade perigosa. Controle automático ativado








// alert("Hello World")
// confirm("vc e vacilao")
// prompt("qual seu nome")