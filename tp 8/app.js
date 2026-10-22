let edad = 0
let ejercicio1 = document.querySelector('#parrafo1')
let ejecutar1 = document.querySelector("#boton1")
let inputEj1 = document.querySelector('#input1')


ejecutar1.onclick = function () {
    edad = inputEj1.value
    if (edad >= 18) {
        ejercicio1.textContent = " Podes ingresar "
    } else {
        ejercicio1.textContent = " No podes ingresar "
    }
}
let NombreUsuario = "Nahuel"
let ejercicio2 = document.querySelector("#parrafo2")
let ejecutar2 = document.querySelector("#boton2")
let inputEj2 = document.querySelector('#input2')


ejecutar2.onclick = function () {
    NombreUsuario = inputEj2.value
    if (NombreUsuario == "Nahuel") {
        ejercicio2.textContent = "Bienvenido Nahuel"
    } else {
        ejercicio2.textContent = "Bienvenido Usuario"
    }
}
let ejercicio3 = document.querySelector("#parrafo3")
let ejecutar3 = document.querySelector("#boton3")
let inputEj3 = document.querySelector('#input3')


ejecutar3.onclick = function () {
    NombreUsuario = inputEj3.value
    if ((NombreUsuario == "Nahuel") || (NombreUsuario == "Marcos")) {
        ejercicio3.textContent = " bienvenido " + NombreUsuario + " ¿Como estas?"
    } else {
        ejercicio3.textContent = "bienvenido usuario"
    }
}
let numero = 9
let ejecutar4 = document.querySelector("#boton4")
let ejercicio4 = document.querySelector("#parrafo4")
let inputEj4 = document.querySelector('#input4')




ejecutar4.onclick = function () {
    numero = inputEj4.value
    if (numero > 0) {
        ejercicio4.textContent = "El numero es positivo"
    } else if (numero == 0) {
        ejercicio4.textContent = "El numero es cero"
    } else {
        ejercicio4.textContent = "El numero es negativo"
    }
}
let Edad = 7
let ejecutar5 = document.querySelector("#boton5")
let ejercicio5 = document.querySelector("#parrafo5")
let inputEj5 = document.querySelector('#input5')


ejecutar5.onclick = function () {
    numero = inputEj5.value
    if ((Edad >= 6) && (Edad <= 11)) {
        ejercicio5.textContent = "tu edad corresponde a un niño"
    } else if ((Edad >= 12) && (Edad <= 18)) {
        ejercicio5.textContent = " tu edad corresponde a un adolecente"
    } else if ((Edad >= 19) && (Edad <= 26)) {
        ejercicio5.textContent = "tu edad corresponde a un joven"
    } else if ((Edad >= 27) && (Edad <= 59)) {
        ejercicio5.textContent = " tu edad corresponde a un adulto"
    } else if (edad >= 60) {
        ejercicio5.textContent = " tu edad corresponde a un ansiano"
    } else {
        ejercicio5.textContent = " edad no encontrada"
    }
}


let dia = "sabado"
let ejecutar6 = document.querySelector("#boton6")
let ejercicio6 = document.querySelector("#parrafo6")
ejecutar6.onclick = function (){
    if ((dia == "sabado") || (edad == " domingo ")) {
        {ejercicio6.textContent = "es fin de semana"}
    }else if  ((dia == "lunes") || (dia == "martes") || (dia == "miercoles") || (dia == "jueves") || (dia == "viernes")) {
    { ejercicio6.textContent = "es dia laboral"} }
    
}






let ejecutar7 = document.querySelector("#boton7")
let ejercicio7 = document.querySelector("#parrafo7")
let contrasenia = "bdbndgn"


ejecutar7.onclick = function(){
    if (contrasenia == "secreto") {
        ejercicio7.textContent = "acceso consedido"
    } else {
        ejercicio7.textContent = "acceso denegado"
    }
}
