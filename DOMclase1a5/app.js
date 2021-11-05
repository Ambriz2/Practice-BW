/*console.log(document);
console.log(document.head)
console.log(document.title)
console.log(document.body)
console.log(document.domain)
console.log(document.getElementById('primerId'));
console.log(document.getElementById('primerId').textContent);
console.log(document.getElementById('primerId').innerHTML);
    //**cuando el script esta dentro de <Head>    
document.addEventListener("DOMContentLoaded", () => {
    console.log(document.querySelector("h1"));
    console.log(document.getElementById('primerId'));
    console.log(document.getElementById('primerId').textContent);
    console.log(document.getElementById('primerId').innerHTML);
});
 //// queryselector se puede seleccionar id #  . clases y tags
console.log(document.querySelector('#primerId'));
console.log(document.querySelectorAll('.container .text-primary'));
console.log(document.querySelectorAll('.text-primary'));

const h1 = document.getElementById('primerId')
console.log(h1.className);
console.log(h1.id);

h1.textContent = 'Dominando el DOM'
h1.style.backgroundColor = 'blue'
h1.style.color = 'white'

const boton = document.querySelector('.btn-primary')
boton.addEventListener('click', () =>{
    boton.style.color = 'red'
    boton.textContent = 'otro color'
    h1.textContent = 'Aprediendo el DOM'
});*/

const barraColor = document.getElementById('colorInput');
const boton = document.getElementById('btnVisual');
const card = document.getElementById('card-color');
const parrafo = document.getElementById('parrafo');

boton.addEventListener('click', () =>{
    console.log("click click")
    parrafo.textContent = barraColor.value;
    card.style.backgroundColor = barraColor.value;
})


   
