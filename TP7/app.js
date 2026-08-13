let ejs1 = document.querySelector('#ejs1')
let B1 = document.querySelector('#B1')
let edad = 18
//act 1
B1.onclick = function () {
    if (edad >= 18) {
        ejs1.textContent = ('sos mayor de edad')
    } else {
        ejs1.textContent = ('sos menor de edad')
    }
}

//ACT 2

let nombreUsuario = document.querySelector('input')
let b2 = document.querySelector ("#B2")
let P2 = document.querySelector('#p2')
let P1 = document.querySelector('#P1')
b2.onclick = function (){
    if ((nombreUsuario.value == 'Nahuel') || (nombreUsuario.value == 'Marcos')){
        P2.textContent =  "Bienvenido " + nombreUsuario.value + " ¿cómo estás?"
    } else {
        P2.textContent = "Bienvenido " + nombreUsuario.value + " ¿como estas?"
    } 
}
//ACT 4
b3.onclick = function () {
 let numero = 0
 if (numero < 0) {
    P2.textContent =  "el numero es negativo" 
 }else if(numero > 0){
    P2.textContent = "el numero es positivo"
 } else {
    P2.textContent = "el numero 0"
 }
}
//ATC 5

