/*
//LEYENDO Y ESCRIBIENDO HTML DESDE JAVASCRIPT 

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1, 
    p,
    parrafito,
    pid,
    input
});

h1.innerText = "Hola! Que tal, modificamos el titulos con JS";

//console.log(h1.getAttribute('titulo'));
//h1.setAttribute('titulo', 'atributo_nuevo');

h1.classList.add('rojo');
h1.classList.add('verde');
h1.classList.remove('verde');

//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = "Hola!";

//Mostrar imagenes en el html
const img = document.createElement('img');

img.setAttribute('src', 'https://static.platzi.com/media/user_upload/P1%20C3-f2d1507f-38e7-472b-93db-bc083c06bb16.jpg');
console.log(img);

pid.parentNode.replaceChild(img, pid);
*/

//EVENTOS EN JAVASCRIPT
const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const resultado = document.querySelector('#resultado');
const btn = document.querySelector('#btnCalcular');

function sumaValores() {
    let suma = Number(calculo1.value) + Number(calculo2.value);
    resultado.innerHTML = "El resultado de la suma es: " + suma;
};

btn.addEventListener('click', sumaValores);