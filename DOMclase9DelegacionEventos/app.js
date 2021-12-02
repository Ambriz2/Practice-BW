//event propagation(bubbling)
/*const primary = document.querySelector('.border-primary');
const secondary = document.querySelector('.border-secondary');
const last = document.querySelector('.border-danger');


primary.addEventListener('click', ()=>{
    console.log('You Clicked me primary')
},true);// false por defecto

secondary.addEventListener('click', ()=>{
    console.log('You Clicked me secondary')
});

last.addEventListener('click', ()=>{
    console.log('You Clicked me last')
});


////stop propagation
const box = document.querySelectorAll('.border');
box.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Box clicked');
    });
}); */

//form preventDefault();
const form = document.querySelector('form');

form.addEventListener('submit', e =>{
    console.log('clicked')
    e.preventDefault();
})

const container = document.querySelector('container')
 