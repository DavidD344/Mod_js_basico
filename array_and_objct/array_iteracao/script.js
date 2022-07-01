// map = mapeia o array e vai atualizando todo ele pela função
// filter = filtra os arrays e adiciona aqueles que voltarem com o valor de verdadeiro 
// find = volta o primeiro elemento que satisfazer a condição dela (parece ocm o filter a estrutura)

let listNames = ["David", "Marcos", "Nath", "Tata"]





let bigNames = listNames.find(element =>{return element.length>=5})


alert(bigNames)


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
