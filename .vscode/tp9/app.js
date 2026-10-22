function mayor (numero1, numero2){
    let numeroMa
    if (numero1 > numero2) {
       numeroMa = numero1
    } else {
       numeroMa = numero2 
    }


    return numeroMa
}


function menor (numero3, numero4){
    let numeroMe 
    if (numero3 < numero4) {
        numeroMe = numero3
    } else {
        numeroMe = numero4
    }
    return numeroMe
}
function iguales (numero5, numero6){
    let resultado
    if (numero5 == numero6) {
        resutado = "son iguales"
    } else {
        resultado = "son distintos"
    }
    return resultado
}
function porcentaje(numero7){
    let compra
    compra = numero7 * 0.21
    return compra
}
function modoOscuro(){
    let body = document.querySelector('body')
    body.style.backgroundColor = "black"
    body.style.color ="white"
}


function modoClaro (){
    let body = document.querySelector('body')
    body.style.backgroundColor = "white"
    body.style.color ="black"
}
