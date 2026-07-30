let ejs1 = document.querySelector('#ejs1')
let B1 = document.querySelector('#B1')
let edad = 15
B1.onclick = function () {
    if (edadCliente >= 18) {
        ejs1.textContent = ('sos mayor de edad')
    } else {
        ejs1.textContent = ('sos menor de edad')
    }
}

