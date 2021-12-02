
/*//paso por valor
let a = 'hola';
let b = 'hello';
let c = a;
a = 'Bye';
console.log(c)

//cambio por referencia

let myArray1 = ["hola", "ciao", "perro"];
let x = myArray1;
x.push("enano");
console.log(x);

let y = {nombre: 'chido'};
let z = y;

y.nombre = "Viva"

console.log(y);

//// tambien lista tiene reflow es mejor usar Fragment
const lista = document.querySelector('#lista')
const countryArray = ["brazil", "Sweden", "Afghanistan", "Morocco"]
countryArray.forEach(pais => {
    const li = document.createElement("li")
    li.textContent = pais;
    lista.appendChild(li);
})
////reflow innerHTML remplaza todo el elemento y tiene problemas de seguridad
countryArray.forEach(pais =>{
    lista.innerHTML = `<li>${pais}</li>`

})
console.log(countryArray)
const li = document.createElement("li");
li.textContent = "que onda chivalo";
lista.appendChild(li);

console.log(li);
console.log(li);    

//////////////////
const lista2 = document.querySelector('#lista2');

const countryArray2 = ["Mexico", "Babilona", "Perron", "Morocco"];

const fragment = document.createDocumentFragment();

countryArray2.forEach(pais => {
    const li = document.createElement("li")
    li.textContent = pais;
    fragment.appendChild(li);
})

lista2.appendChild(fragment);

console.log(lista2)
///////////////
const lista3 = document.querySelector('#lista3');

const countryArray3 = ["Mexico", "Lebanon", "Jordania", "Morocco"];

const fragment2 = document.createDocumentFragment();

countryArray3.forEach(pais => {
    const li = document.createElement("li")
    li.textContent = pais;
    fragment2.appendChild(li);
})

lista3.appendChild(fragment2);

console.log(lista3)

////////////////////////// reversed array
const lista4 = document.querySelector('#lista4');

const countryArray4 = ["Uruguay", "Jamaica", "Jordan", "Spain"];

const fragment4 = document.createDocumentFragment();

countryArray4.forEach(pais => {
    const newNode = document.createElement("li");
    newNode.textContent = pais;
    
    const referenceNode = fragment4.firstChild;
    
    fragment4.insertBefore(newNode, referenceNode);
})

lista4.appendChild(fragment4);

console.log(lista4);


////////// fragment es para qaue no tenga reflow
//no esta completo no aparece en console.
const lista5 = document.querySelector('#lista5');

const countryArray5 = ["Chile", "Argentina", "Iran", "Canada"];

const fragment5 = new DocumentFragment();

countryArray5.forEach((pais) => {
    const li = document.createElement('li');
    li.className = 'list66'; 
    console.log(li)

    const b = document.createElement('b');
    b.textContent = "Pais: ";
    console.log(b)
    const span = document.createElement('span');
    span.className = "text-primary";
    span.textContent = pais;
    console.log(span)

    li.appendChild(b)
    li.appendChild(span)

    fragment5.appendChild(li);
});

console.log(lista5);

///////////

const lista6 = document.querySelector('#lista6');

const countryArray6 = ["Haiti", "Argentina", "Iran", "Canada"];

const fragment6 = new DocumentFragment();

countryArray6.forEach(pais => {
    lista6.innerHTML += `<li class="listaLi">
    <b>Pais: </b>
    <span class="text-primary">${pais}</span> 
</li>`;
});

console.log(lista6)

/// con template 
const lista7 = document.querySelector('#lista7');

const countryArray7 = ["USA", "Argentina", "Itlay", "Congo"];

const fragment7 = new DocumentFragment();

let template ="";
countryArray7.forEach(pais => {
    template += `<li class="listaLi">
    <b>Pais: </b>
    <span class="text-primary">${pais}</span> 
</li>`;
});
 
lista7.innerHTML = template
console.log(lista7)
//////
/// 

const lista8 = document.querySelector('#lista8');

//const countryArray7 = ["Australia", "Argentina", "Itlay", "Egypt"];

//const fragment8 = new DocumentFragment();

const template2 = document.getElementById('template2');
const clone = template2.content.cloneNode(true);

clone.querySelector('.text-primary').textContent = 'writing in a template';
lista8.appendChild(clone);
console.log(clone);

///////////

const lista9 = document.querySelector('#lista9');
const fragment9 = new DocumentFragment();
const template9 = document.querySelector('#template9');

const countryArray9 = ["France", "Nicaragua", "Tazmania", "Bolivia"];
const clickPaises = () => console.log('you cliked me')

countryArray9.forEach(pais => {
    const clone = template9.content.cloneNode(true);
    clone.querySelector('span').textContent = pais;
    
    fragment9.appendChild(clone)
});
    lista9.appendChild(fragment9)

  console.log(lista9)  

  ///
const lista11 = document.querySelector('#lista11');
const template11 = document.querySelector('#template11');
const countryArray11 = ["France", "Nicaragua", "Tazmania", "Bolivia"];
const clone = template11.content.cloneNode(true);

clone.querySelector("text-prymary").textContent = 
"added through a template";

lista11.appendChild(clone);*/