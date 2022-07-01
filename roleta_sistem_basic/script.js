let select
let list = []
let adcElement
let caseNum
let apresList = " " 
let sair = false
let clocktrash
let randomElement
let trash  

while (sair==false) {
  
    caseNum = prompt("O que deseja realizar?\n\n1-Adicionar elemento\n2-Retirar elemento\n3-Sortear\n4-Apagar todos os elementos\n5-Sair\n\nAtual lista:\n\n" + apresList)
 
  
    switch (caseNum) {
        case "1":
            adcElement = prompt("Qual elemento")

            adElement(adcElement, list)//adiciona no array certo     
            apresList = atualList(apresList,list)//formata e atualiza o texto para a lista e retorna o resultado
            
            break;
        case "2":

            clocktrash = prompt("Qual elemento você quer eliminar?(numero)")
            clocktrash =  Number(clocktrash)-1//não coloquei em função para ficar mais simples
            list = delElement(clocktrash,list)
            apresList = atualList(apresList,list)//formata e atualiza o texto para a lista e retorna o resultado
            
            break;
        case "3":
            
            randomElement = toSpin(list)// retorno serve para elminar os elementos sorteados

        
            break;
        case "4":
            
            trash  = trashElements(apresList ,list)//retornar dois valores atraves de uma matriz 2x1

            apresList = trash[0]
            list = trash[1]
            
            break;
        case "5":  

            sair = true
            alert("Encerrando...")
            break;
    
        default:
            break;
    }    
}


function adElement(element,list){

    list.push(element)
}


function atualList(formtList,list){

    formtList = "1- " + list[0] + "\n"
            
    for (let i = 1; i < list.length; i++) {
    
        formtList += (i+1) + "- " + list[i] + "\n"      
        
    }
    alert(formtList)
    return formtList 
}


function delElement(index,list){
    //usar splice e retornar para avisar qual saiu

   
    list.splice(index, 1,);

    return list

    //remove 1 elementos a partir do índice index.
}

function toSpin(list){

    let random = Math.floor(Math.random()* list.length)

    let textRandom = (random + 1) + "-" + list[random] // resultado aleatório

    alert(textRandom)// mostara resultado
    return random // retorno do indice do sorteio

}


function trashElements(atualList,list){

    atualList = " " //zerar os dois unicos parametros que armazenam a lista
    list = []
    return [atualList, list]; //dois retornos
}

// function getValues() {
//     return [getFirstValue(), getSecondValue()];
// }

// Então você pode acessá-los assim:

// var values = getValues();
// var first = values[0];
// var second = values[1];



//.push = adiciona nmovo elemento no array
//pop = remove o ultimo parametro e retorna o elemento removido
//shift = remove o elemento da primeira posição e retorna ela
//unshift = adiciona um novo elemento no começo do array
//indexOf = retorna a posição do array especificado


// let listNames = ["David","João","Gustavo"]


// alert(listNames)


// let extractNames = listNames.slice(1,3)

//splice = substitui ou retira elementos de array e retorna eles
//slice =  retorna todos os elementos de array entre os paarametros especificados


/////////////////////////////////////////////////////////////////////////////////////
// Menu aparente frequente em um alerta em um while com saida de z

// features{
// adicionar elemento
// retirar elemento
// sortear
// apagar todos elementos
// a mais:editar elementos
// remover elemento que foi sorteado
// }

// menu
// 1-Adicionar elemento
// 2-Retirar elemento
// 3-sortear
// 4-Apagar todos os elementos
// 5-Sair


// elementos vao ficando numerados na ordem
// usar .join(" e ") para mandar dados