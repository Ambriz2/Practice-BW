const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const botones = document.querySelectorAll(".card button");


//console.log(carrito);
//store fruits as array
const frutasEnCarrito =[];

const agregarAlCarrito = (e) => {
    //console.log(e.target.dataset.fruit)
    const producto ={
        titulo: e.target.dataset.fruit,
        id: e.target.dataset.fruit,
        cantidad: 1,
    };
    const indice = frutasEnCarrito.findIndex((item) => item.id === producto.id)
    console.log(indice);

    if(indice === -1){
        frutasEnCarrito.push(producto)
    } else {
        frutasEnCarrito[indice].cantidad++
    };

    console.log(frutasEnCarrito);
    //pintarCarrito();
};

const pintarCarrito = (array) => {
    carrito.textContent = "";

    array.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
}
console.log(pintarCarrito);
botones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito))


