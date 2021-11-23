const form = document.getElementById('formInputs');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const formSent = document.getElementById('formSent');
const nameAlert = document.getElementById('nameAlert');
const emailAlert = document.getElementById('emailAlert');

//const userName = document.querySelector("input[name='userName']");
//const userEmail = document.querySelector("input[name='userEmail']");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const showSentMessage = () => {
    formSent.classList.remove('d-none');
    formSent.textContent = "Sent successfully"
    setTimeout(deleteSentMessage, 4000)
 }

const deleteSentMessage = () => {
    formSent.classList.add('d-none');
}

const showErrorMessage = (errors) => {
    errors.forEach(item => {
        item.type.classList.remove('d-none');
        item.type.textContent = item.message;
        
        
    });
};

form.addEventListener('submit', e => {
    e.preventDefault();
   // console.log('form form')
    //console.log(userEmail.value);
    //.log(userName.value);
    //console.log(regUserName.test(userName.value))
    formSent.classList.add('d-none');

    const errors = [];
    //console.log(!userName.value.trim());
    if(!regUserName.test(userName.value) || !userName.value.trim()) {
        //console.log('not valid')
        userName.classList.add('is-invalid');
        errors.push({
            type: nameAlert,
            message: 'Format not valid only letters and spaces allowed',
        });
    } else {
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
        nameAlert.classList.add('d-none');

    };

    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()){ 
        userEmail.classList.add('is-invalid');

        errors.push({
            type: emailAlert,
            message: 'Not a valid e-mail'
    });
    } else {
        userEmail.classList.remove('is-invalid');
        userEmail.classList.add('is-valid');
        emailAlert.classList.add('d-none');

    };

    if(errors.length !== 0){
        showErrorMessage(errors);
        return;
    }
    //console.log('form sent') 
    showSentMessage();
    
});

/* using formData.get() 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");

    const inputs = new FormData(formulario);
    console.log(inputs.get("userName"));
    console.log(inputs.get("userEmail"));

    for (let campo of inputs.values()) {
        console.log(campo);
    }

    for (let campo of inputs.entries()) {
        console.log(campo);
    }
});*/