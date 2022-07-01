const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwth", 15, false]
]

let navePlus = []

for (let i = 0; i < 5; i++) {
    
    if(hitchedSpaceships[i][1]>9){

        navePlus.push(hitchedSpaceships[i][0])

    }

}

let findNaves = hitchedSpaceships.findIndex(function(element){
    return element[2] == false //essa é a condição e não o retorno--nesse caso vai voltar a posição desse array
})

 let uperNaves = hitchedSpaceships.map(element=>{
    return element[0].toUpperCase()
 })


// alert(navePlus.join(", "))

alert("As naves " + navePlus.join(" e ") + " possuem mais de nove tripulantes em sua nave.\nA primeira nave com falta de engate é a de posição " + (findNaves+1) + ".\n E aqui vai todas as naves em caixa alta:\n\n" + uperNaves.join(", ") + ".")
// alert(navePlus)
// alert(findNaves)
// alert(uperNaves)


// let indexEngate = hitchedSpaceships[2].find((element, index, array) =>{return element==false})



// function isPrime(element, index, array) {
//    let teste = element

//    return teste
// }
// // hitchedSpaceships.findIndex(isPrime)

// alert(hitchedSpaceships[0].findIndex(isPrime))










// function isPrime(element, index, array) {
//     var start = 2;

//     while (start <= Math.sqrt(element)) {
//       if (element % start++ < 1) {
//         return false;
//       }
//     }
//     return element > 1;
//   }
  
// function isPrime(element, index, array) {
//      let vdd = true;

//      return index == vdd;
// }
  


//   alert([4, 6, 8, 12].findIndex(isPrime)); // -1, não encontrado
//   alert([4, 6, 7, 12].findIndex(isPrime)); // 2
  











// function isBigEnough(value) {
//     return value >= 9;
//   }
  
// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);


// let filtrado = hitchedSpaceships[1].filter(isBigEnough)
// let filtrado = hitchedSpaceships[1].filter(elemento =>{return elemento>9})
// alert(filtered)
// alert(filtrado)
// alert("çsdfkjn")
// let navesExc = hitchedSpaceships.slice(2,3)
// let bigNames = listNames.find(element =>{return element.length>=5})

// let bigNames = listNames.filter(element =>{return element.length>=5})















// map =   

// filter = filtra os arrays e adiciona aqueles que voltarem com o valor de verdadeiro 
// find = volta o primeiro elemento que satisfazer a condição dela (parece ocm o filter a estrutura)

// let listNames = ["David", "Marcos", "Nath", "Tata"]


 


// let bigNames = listNames.find(element =>{return element.length>=5})


// alert(bigNames)


// let bigNames = listNames.filter(element =>{return element.length>=5})




// let uperCasedName = listNames.map(function(namePessoa, pos){

//     let upCased = namePessoa.toUpperCase()
//     return upCased

// })

// alert(uperCasedName)



// listNames.forEach(function(namePessoa, pos){

//     alert("Aluno: " + namePessoa + "\nPosição: " + (pos+1))

// })



//splice = substitui ou retira elementos de array e retorna eles
//slice =  retorna todos os elementos de array entre os paarametros especificados
