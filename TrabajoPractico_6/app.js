let uno = document.querySelector('#b1')
let dos = document.querySelector('#b2')
let tres = document.querySelector('#b3')
let cuatro = document.querySelector('#b4')
let p = document.querySelector('p')
let ct = document.querySelector('#ct')
let r = document.querySelector('#r')
let siete = document.querySelector('#b7')

uno.onclick = function(){
    //cambiar el color de fondo
    p.style.backgroundColor = 'blue'
}
dos.onclick = function(){
    //cambia el contenido del parrafo
    p.textContent = 'cambio de parrafo'
}
tres.onclick = function(){
    //cambia el color de letra
    p.style.color = 'grey'
}
cuatro.onclick = function(){
    p.style.fontFamily = 'IMPACT'
}
ct.onclick = function(){
    //cambia el tamaño del texto
    p.style.fontSize = '50px'
}
r.onclick = function(){
p.style.color = 'rgb(246, 253, 255)'
p.style.fontFamily = 'Arial'
p.style.backgroundColor = 'rgb(171, 202, 230)'
p.style.fontSize = '25px'
p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae, fugiat at perspiciatis incidunt suscipit eum similique sapiente id repellendus? Molestiae odio qui perferendis quos. Eveniet impedit voluptates officia voluptatum!'
}
siete.onclick = function(){}
