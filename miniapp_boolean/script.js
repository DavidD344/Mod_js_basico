let entryDateStart = prompt("digite a data de partida da nave (Formata DD/MM/YYYY)")

let dateStart = moment(entryDateStart, "DD/MM/YYYY")

let today = moment();
alert(today)

let dateDiff = today - dateStart


let chosenOpition = prompt("Escolha como deseja definir o tempo de partida\n1 - Segundos\n2- Minutos\n3- Horas\n4- Dias")



if(chosenOpition == "1"){

    let secondStart = Math.round(dateDiff / 1000)
    alert("Tempo de vôo " + secondStart + " segundos")

} else if (chosenOpition == "2"){

    let minutesStart = Math.round(dateDiff / 60000)
    alert("Tempo de vôo " + minutesStart + " minutos")

   

} else if (chosenOpition == "3"){

    let hourStart = Math.round(dateDiff / 3600000)
    alert("Tempo de vôo " + hourStart + " horas")

} else if (chosenOpition == "4"){

    let daysStart = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo " + daysStart + " dias")

} else {

    alert("Opção inválida!!!")
}