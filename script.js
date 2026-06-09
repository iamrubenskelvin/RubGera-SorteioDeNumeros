function sortear () {

const numberDe = document.getElementById("entre").value 
const numberAte = document.getElementById("ate").value 

if (numberDe >= numberAte) {
    alert("O número inicial deve ser menor!")

    return
}
 
if (numberDe < 0 || numberAte <0){
    alert("Não pode números negativos!")
}


const resultado =
Math.floor(
    Math.random() * (numberAte - numberDe + 1)
) + Number(numberDe)


document.getElementById("resultado").innerHTML =
`Número sorteado: ${resultado}`

}
