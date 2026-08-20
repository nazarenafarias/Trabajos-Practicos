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

//ACT 2 y ACT 3

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
b4.onclick = function () {
 let edad = 18
 if ((edad >= 6) || (edad <= 11 )){
      P2.textContent = "sos un niño"
 } else if ((edad >= 12) || (edad <= 18)){
        P2.textContent = "sos un adolecente"
 } else if ((edad >= 19) || (edad <= 26)) {
        P2.textContent = "sos un joven"
 } else if ((edad >= 27) || (edad <= 59)){
        P2.textContent = "sos un adulto"
 } else if (edad >= 60)
        P2.textContent = "anciano"
}
//ACT 6
b6.onclick = function () {
    let dia = 'hola'
    if ((dia == 'lunes') || (dia == 'martes') || (dia == 'miercoles') || (dia == 'jueves') || (dia == 'viernes')) {
     P2.textContent = "es un dia laborable"
    }else if ((dia == 'sabado') || (dia == 'domingo')){
     P2.textContent = "es fin de semana"
    }else{
     P2.textContent = "no es un dia"
    }
}
let contrasenia = 'secreto'
b7.onclick = function () {
 if (contrasenia == 'secreto') {
   P2.textContent = "acceso concedido"
 }else{
     P2.textContent = "acceso denegado"
 }
 }