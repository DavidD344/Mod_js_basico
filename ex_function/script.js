const nome = prompt("Qual o nome da nave?");

let velocity = 0;


function acelleration(fVelocity){

    fVelocity += 5;
    return fVelocity
}


function desAcelleration(fVelocity){

    if(fVelocity > 0){

        fVelocity -= 5;
        
    }
    return fVelocity;
}


function task(nome, fVelocity){

    alert("A nave " + nome + "está estavel.\n\n" + "Velocidade atual: " + fVelocity + "anos-luz.")
}

// MENU

for(z = 0; z == 0; z = z){
    
    let i = prompt("Qual a próxima ação capitão?" + "\n\n1-Acelerar\n2-Desacelerar\n3-Imprimir dados de bordo\n4-Sair")
   
    switch (i) {

        case "1":
           
            velocity = acelleration(velocity);
            task(nome, velocity)

            break;
        case "2":
           
            velocity = desAcelleration(velocity);
            task(nome, velocity)

            break;
        case "3":
           
            task(nome, velocity)

            break;
        case "4":

            z = 1;
           
            break;

        default:
            break;
    }

}






// receber o nome da nave
// a velocidade vai ser inicialmente 0

// menu apresnetando 4 opções
// 1-acelerar a nave em 5km/s
// 2-desacelerar a nave em 5km/s ( não pode passar de 0)
// 3- imprimir dados de bordo( nome da nave com a velocidade  atual
// 4- sair do programa

// regras:

// 1-função que valide o menu e exiba a função
// 2-função para acelerar desacelerar e imprimir
// 3- encerrar app somente quando digitar para sair

// usar swith case para o menu
// usar return para sair
