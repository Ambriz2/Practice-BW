

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});// carga el DOM y despues obtiene la informacion

const fetchData = async () => {
    console.log('fetch')
    try{
        loadingData(true);
        /// fetch usa dos await
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json();
        showCard(data)
        console.log(data)
    } catch (error){
        console.log(error)
    } finally{
        loadingData(false);
    }
};

const showCard = data => {
    const cards = document.querySelector('#dynamic-cards');
    const cardTemplate = document.querySelector('#templateId').content;
    cards.textContent = "";
    const fragment = document.createDocumentFragment();
    //console.log(data)
    data.results.forEach(item => {
        const clone = cardTemplate.cloneNode(true);
        clone.querySelector('h5').textContent = item.name;  
        clone.querySelector('p').textContent = item.species;
        clone.querySelector('.card-img-top').setAttribute("src", item.image);
        
        fragment.appendChild(clone);
    });
    showPagination(data.info)
    cards.appendChild(fragment)
};

const showPagination = data => {
    console.log(data)
    const pagination = document.querySelector('#pagination');
    const btnTemplate = document.querySelector('#btnTemplate').content;
   // const prevBtn = document.querySelector('#prevBtn');
    //const nextBtn = document.querySelector('#nextBtn');
    pagination.textContent = "";
    
    const clone = btnTemplate.cloneNode(true);
    if(data.prev){
        clone.querySelector('#prevBtn')
    }else{
        clone.querySelector('#prevBtn').disabled = true;
    }
    if(data.next){
        clone.querySelector('#nextBtn').disabled = false;
    }else{
        clone.querySelector('#nextBtn').disabled = true;
    }
    
    pagination.addEventListener('click', (e) => {
        if(e.target.matches('#prevBtn')){
            console.log('prev btn working')
            fetchData(data.prev)
            
        } if (e.target.matches('#nextBtn')){
            console.log('next btn working')
            fetchData(data.next)
        }
    })
    pagination.appendChild(clone)
};


const loadingData = estado => {
    const loading = document.querySelector('#loading');
    if (estado) {
        loading.classList.remove('d-none')  
    } else {
        loading.classList.add('d-none')
    }
};

