/*const check = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(check(100, 0));
console.log(check(0, 100));
console.log(check(10, 0));
console.log(check(0, 10,));
console.log(check(50,50));
console.log(check(20,80));

function checkEqual(a, b){
    if (a === 100){
        return true
    } else {
        return a + b;
    }
    };

console.log(checkEqual(100, 0));
console.log(checkEqual(0, 100));
console.log(checkEqual(10, 0));
console.log(checkEqual(0, 10,));
console.log(checkEqual(50,50));
console.log(checkEqual(20,80));

let stringUsuario = prompt('escriba "js"')
if (stringUsuario === 'js'){
    console.log('correcto')
}
else{
    console.log('falso')
}

let numUsuario = prompt('Ingrese numero del 1 al 10');
console.log(numUsuario + " Es: " + typeof numUsuario);
console.log(parseInt(numUsuario));

if (parseInt(numUsuario) <= 10) {
    console.log("Genial!!");
} else {
    console.log("Super mal!!");
}

let opcionUsuario = prompt(`
Elija una opcion:
1: libros
2: peliculas
3: Juegos
`)
console.log(opcionUsuario)

switch(opcionUsuario){
    case '1':
        console.log('principito')
    break;
    case '2':
        console.log('matrix')
    break;
    case '3':
        console.log('call duty')
    break;
    default:
        console.log('opcion no valida')
    break;
}

let numero = 1

while(numero <= 10){
 console.log(numero)
 //numero = numero + 1
 numero ++
}
console.log('fin numero ' + numero) 

let numeroRandom = Math.floor(Math.random() * (10 - 1) + 1);
console.log(numeroRandom);

let vidas = 3;
let numeroUsuario = parseInt(prompt('Adivina numero de 1 a 10'));
 while (numeroRandom !== numeroUsuario && vidas > 1){
     let message = (numeroRandom > numeroUsuario) ? 'Escribe un numero mas grande' : 
     'escribe un numero mas chico'
     console.log('Equivocacion! ' + message + vidas);
     numeroUsuario = parseInt(prompt('Adivina numero de 1 a 10'));
     vidas --;
 }
 if(numeroRandom === numeroUsuario){
     console.log('Ganaste')
    }
     else {
         console.log('perdedor')
     }
 
let frutas = ["platano", "pera", "naranja", "manzana", "durazno", "mango", 10];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[1]);
console.log(frutas[5]);
  for(let i = 0; i <= frutas.length; i ++){
      console.log(frutas[i])
    }

 for(let fruta of frutas){
     console.log(fruta);
 }   
// iterates through string
 let nuserName = "Panchito";
 for(let letra of nuserName){
     console.log(letra)
 }

function saludos (name) {
    return('bienvenido! ' + name)
}

console.log(saludos("chole"));



function sumar (a, b){
    return parseInt(a) + parseInt(b);
}
let num1 = prompt("Ingrese primer numero");
let num2 = prompt("Ingrese segundo numero");
console.log(sumar(num1, num2));


let nombreDUsuario = "tecate";
//reasinga la variable
nombreDUsuario = "chancho"
let estado = true;
console.log("\n Welcome " + nombreDUsuario);
console.log(`welcome ${nombreDUsuario.toUpperCase()} loco`)
    console.log(`${nombreDUsuario} ${estado ? 'online' : 'offline'} `)

 
 
 
    if(estado){
        console.log("Entro al if");
    }
    console.log(estado)
//local scope i only exist inside if statement
for( let i = 0; i < 10; i++){
    console.log(i)
}
//global scope throws error i doesnt exist in global
 //   console.log(i)

 const estado = true;
 if(estado){
      const  estado = false;
     console.log(estado);
 }
 console.log(estado);

 

 const frutas1 = ["peach", "apple", "orange"]
 //push agrega a el ultimo del array
 frutas1.push("grape");
 console.log(frutas1);
 //unshift agrega al comienzo
 frutas1.unshift("mango");
 console.log(frutas1);
 // pop elimina el last item del array
 const eliminaFruta = frutas1.pop();
 console.log(eliminaFruta);
 //shift elimina el primer item y modifica la longitud
 frutas1.shift();
 console.log(frutas1);

const frutas2 = []

const fruta = prompt('Que fruta deseas?');
console.log("compraste: ");
frutas2.push(fruta);

while(confirm('Would you like to add another fruit?')){
    let fruta = prompt('Que fruta deseas comprar?')
    frutas2.push(fruta);
}
for(let fruta of frutas2){
    console.log(fruta)
} 
// declarative function
function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max-min)) + min
}

console.log(numeroAleatorio(22,55))


//expression function

const numAzar = function(min, max){
    return Math.floor(Math.random() * (max-min)) + min
};

console.log(numAzar(22, 55));

//arrow functions

const funcionFlecha = (min, max) => Math.floor(Math.random() * (max-min)) + min;

//cuando solo tienes un parametro
//const funcionFlecha = (min, max = 100) => Math.floor(Math.random() * (max-min)) + min;


console.log(funcionFlecha(35, 24));
// omitir el primer parametro con null o undefined
//console.log(funcionFlecha(null, 24));


const funcionFlecha2 =  max => Math.floor(Math.random() * (max +    2)) + 2;

console.log(funcionFlecha2(24));


// forEach
const frutas3 = ["apple", "peach", "pear", "grape"]
frutas3.forEach( frutaa => console.log(frutaa))
frutas3.forEach((frutaa, index) => console.log(`${index}: ${frutaa}`))
frutas3.forEach((frutaa, index, array) => console.log(array))
    ////////////////////////////
//Objetos
  const gato ={
      nombre: "chuyito",
      edad: 10,
      vivo: true,
      enemigos: ["perro", "leon", "niños", "agua"],
      //puede tener otro objeto dentro
      otrosDatos: {
        amigos: ["gatos", "pescados"],
        comida: ["tuna", "carne", "salmon" ],
            colores: {
                deDia: ["blanco", "azul"],
                deNOche: ["negro", "cafe"]
            }
      }
  };

  
  console.log(gato);
  console.log(gato.otrosDatos.amigos[0]);
  console.log(gato.nombre);

  if(gato.hasOwnProperty("edad")){
      gato.edad = 5
  }

  console.log(gato)

  
  //optional chaining with ? enables you to read the value of a property
  // located deep within a chain of connected objects without having to check that each reference in the chain is valid.
  
  console.log(gato.otrosDatos1?.comida[0]);

  const amigosGato = ["gatos", "pescados"]
  amigosGato.push("pantera")
  console.log(amigosGato)
  //////////////////////////////////
  // iterate through an object with for in,, for of is for arrays.
  
 // iterate through an object with for in
  //metodo funcion dentro de un objeto

  const perro = {
      nombre: "chincho",
      color: "negro",
      edad: 5,
      enemigos: ["gato", "humanos", "hot dogs"],
      personalidad: function(){
          console.log('enojon')
      },
      personalidades(a){
          console.log('chistoso ' + a )
          console.log(`${this.nombre} es un ${a}`)
      },
      //arrow function se pueden utilizar dentro de un metodo pero no como metodo.
      personalidades2(){
          this.enemigos.forEach((item) => console.log(item))
        }
    };

      perro.personalidad(); 
      perro.personalidades("perrito");
      perro.personalidades2();
        ///////////////////////
      //destructuring
    const nombre = "chido"
      const leon ={
          //nombre: "chango",
          edad: 2,
          color: "cafe"
      }
      console.log(leon)
      const leon1 = leon.nombre;
      // use of alias for reasign nombre
     // const { nombre : leoncito, edad, color } = leon;
      // en caso que no exista nombre se le asigna 
      const { nombre : leoncito = "juanito", edad, color } = leon;
      console.log(leoncito, edad, color)
      console.log(leon1);
      console.log(nombre)
      ////////
      */

      const perico ={
        nombre: "chuyito",
        edad: 10,
        vivo: true,
        enemigos: ["perro", "leon", "niños", "agua"],
        otrosDatos: {},
    //getter no recibe parametros
      get nombreMayuscula (){
        return this.nombre.toUpperCase()
    },
    //setter must have one parameter
        set agregarAmigo(newFriend){
            this.enemigos.push(newFriend)
        }
    };
        perico.agregarAmigo = "aguila"
    console.log(perico.agregarAmigo)
    console.log(perico)
