const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment(); 
const footer = document.getElementById('footer');
const footerTemplate = document.getElementById('footerTemplate');

document.addEventListener('click', e =>{
    //console.log(e.target.matches('.card .btn-outline-success'))
    
    if(e.target.matches('.card .btn-outline-success')){
       //console.log('btn is working')
        agregarAlCarrito(e)
    }
    if(e.target.matches('.list-group-item .btn-success')){
        addBtn(e)
    }
    if(e.target.matches('.list-group-item .btn-danger')){
        removeBtn(e)
    }
    //console.log(e.target.matches('.list-group-item .btn-success'))
});

//console.log(carrito);
//store fruits as array
let frutasEnCarrito =[];

const agregarAlCarrito = (e) => {
    
    const producto ={
        title: e.target.dataset.fruit,
        id: e.target.dataset.fruit,
        quantity: 1,
        price: parseInt(e.target.dataset.price)
    };
        // buscamos el indice
    const indice = frutasEnCarrito.findIndex((item) => item.id === producto.id)
    //console.log(indice);
        // si no existe empujamos el nuevo elemento
     if(indice === -1){
        frutasEnCarrito.push(producto);
    } else {
            // en caso contrario aumentamos su cantidad
        frutasEnCarrito[indice].quantity++;
        //frutasEnCarrito[indice].price = frutasEnCarrito[indice].quantity * producto.price
    };

    //console.log(frutasEnCarrito);
    pintarCarrito();
};

const pintarCarrito = () => {
    carrito.textContent = "";
            // recorremos el carrito y pintamos elementos:
    frutasEnCarrito.forEach((item) => {
        const clone = template.content.cloneNode(true);
            clone.querySelector(".lead").textContent = item.title;
            clone.querySelector(".rounded-pill").textContent = item.quantity;
            clone.querySelector("div .lead span").textContent = item.price * item.quantity;
            clone.getElementById("btnAdd").dataset.id = item.id;
            clone.getElementById("btnRemove").dataset.id = item.id;
            
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
    showFooter();
};
const showFooter = () => {
    footer.textContent = "";

    const total = frutasEnCarrito.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
    );

    // console.log(total);

    const clone = footerTemplate.content.cloneNode(true);
    clone.querySelector("p span").textContent = total;

    
    footer.appendChild(clone);
};
const addBtn = (e) => {
    console.log('addBtn', e.target.dataset.id)
    frutasEnCarrito = frutasEnCarrito.map(item => {
        if(item.id === e.target.dataset.id){
            item.quantity ++
        }    
        return item
    });    
    pintarCarrito()
};    

const removeBtn = (e) => {
    frutasEnCarrito = frutasEnCarrito.filter(item => {
        if(item.id === e.target.dataset.id){
            if(item.quantity > 0){
                item.quantity --
                if(item.quantity === 0) return
                return item 
            }    
        } return item    
    })    
    pintarCarrito()
};    

//console.log(pintarCarrito);

