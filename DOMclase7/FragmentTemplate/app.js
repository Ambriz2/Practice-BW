
//working with Fragment and Template
const ulLista = document.querySelector("#ulLista");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const countryArrays = ["Peru", "Belize", "Maldivia", "Bali", "Sudan"]

const clickPais = (e) => console.log("You Clicked me!", e.target);

countryArrays.forEach((pais) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector("span").textContent = pais;

    clone.addEventListener("click", clickPais);

    fragment.appendChild(clone);
});

ulLista.appendChild(fragment);
