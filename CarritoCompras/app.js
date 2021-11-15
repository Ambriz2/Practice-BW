const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const botones = document.querySelectorAll(".card button");


//console.log(carrito);
//store fruits as an object
const frutasEnCarrito ={};

const agregarAlCarrito = (e) => {
    //console.log(e.target.dataset.fruit)
    const producto ={
        titulo: e.target.dataset.fruit,
        id: e.target.dataset.fruit,
        cantidad: 1,
    };
    if (frutasEnCarrito.hasOwnProperty(producto.id)){
        producto.cantidad = frutasEnCarrito[producto.id].cantidad + 1;
    }
    frutasEnCarrito[producto.id] = producto;
    console.log(frutasEnCarrito)
    pintarCarrito();
};

const pintarCarrito = (producto) => {
    carrito.textContent = "";

    Object.values(frutasEnCarrito).forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
}
console.log(pintarCarrito);
botones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito))