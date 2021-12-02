const form = document.getElementById("form");
const studentCards = document.getElementById("studentCards");
const instructorCards = document.getElementById("instructorCards");
const studentTemplate = document.getElementById("studentTemplate").content;
const instructorTemplate = document.getElementById("instructorTemplate").content;
const inputError = document.querySelector(".alert-danger");
//console.log(inputError)
const studentsArray = [];
const instructorsArray = [];

document.addEventListener('click', e =>{
 //   console.log(e.target.dataset.uId);
    if(e.target.dataset.uId){
        //console.log(e.target.matches('.btn-success'))
        if(e.target.matches('.btn-success')){
            studentsArray.map(item => {
                if(item.uId === e.target.dataset.uId){
                    item.setEstado = true;
                }
                return item;
            });
        }
        
        if(e.target.matches('.btn-danger')){
            studentsArray.map(item => {
                if(item.uId === e.target.dataset.uId){
                    item.setEstado = false;
                }
                return item;
            });
        }
        Person.showPersonUI(studentsArray, "student")
    }
});

class Person{
    constructor(name, age){
        this.name = name; 
        this.age = age;
        this.uId = `${Date.now()}`;// as sample . Not to use as id can create twice same id conflicts
    };
    
    static showPersonUI(person, type){
        if(type === "student"){
            studentCards.textContent = "";
            const fragment = document.createDocumentFragment();
            
            person.forEach(item => {
                fragment.appendChild(item.addStudent());
                
            });
            
            studentCards.appendChild(fragment);
        };

        if(type === "instructor"){
            instructorCards.textContent ="";
            const fragment = document.createDocumentFragment();
            person.forEach((item) => {
                fragment.appendChild(item.addInstructor())
            });
            instructorCards.appendChild(fragment);
        }
    };
};

class Student extends Person{
    #estado = false;
    #estudiante = "student";
    
    set setEstado(estado){
        this.#estado = estado;
    };
    
    get getEstudiante(){
        return this.#estudiante;
    };
    
    addStudent(){
        const clone = studentTemplate.cloneNode(true);

        clone.querySelector('h5 .text-primary').textContent = this.name;
        clone.querySelector('h6').textContent = this.getEstudiante;
        clone.querySelector('p').textContent = this.age;

        if (this.#estado) {
            clone.querySelector(".badge").className = "badge bg-success";
            clone.querySelector(".btn-success").disabled = true;
            clone.querySelector(".btn-danger").disabled = false;
        } else {
            clone.querySelector(".badge").className = "badge bg-danger";
            clone.querySelector(".btn-danger").disabled = true;
            clone.querySelector(".btn-success").disabled = false;
        }
        clone.querySelector('.badge').textContent = this.#estado ? "Passed" : "Failed";
        clone.querySelector('.btn-success').dataset.uId= this.uId; //id number goes here
        clone.querySelector('.btn-danger').dataset.uId= this.uId;
        return clone;
    }
};


class Instructor extends Person{
    #instructor = "instructor";

    addInstructor() {
        const clone = instructorTemplate.cloneNode(true);
        clone.querySelector('h6').textContent = this.#instructor;
        clone.querySelector('h5').textContent = this.name;
        clone.querySelector('p').textContent = this.age;
        return clone;
    }
};

form.addEventListener('submit', e =>{
    
    e.preventDefault()
    
    const info = new FormData(form);
    
    const [name, age, option] = [...info.values()];
    
    if(!name.trim() || !age.trim() || !option.trim()) {
        inputError.classList.remove("d-none");
        return;
    }
    
    if(option === "student"){
        const newStudent = new Student(name, age);
        studentsArray.push(newStudent);
        Person.showPersonUI(studentsArray, option);
        
    }
    if(option === "instructor"){
        const instructor = new Instructor(name,age);
        instructorsArray.push(instructor);
        Person.showPersonUI(instructorsArray, option);
    }
    console.log(name,age,option)
    console.log(studentsArray)
});