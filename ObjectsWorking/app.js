const form = document.getElementById("form");
const studentCards = document.getElementById("studentCards");
const studentTemplate = document.getElementById("studentTemplate").content
const instructorTemplate = document.getElementById("instructorTemplate").content

const studentsArray = [];

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    static showPersonUI(person, type){
        if(type === "student"){
            studentCards.textContent = "";
            const fragment = document.createDocumentFragment();
            
            person.forEach(item => {
                fragment.appendChild(item.addStudent());
                
            });
            
            studentCards.appendChild(fragment);
        };
    };
};

class Student extends Person{
    #estado = false;
    #estudiante = "Estudiante"
    set setEstado(estado){
        this.#estado = estado
    }
    
    get getEstudiante(){
        return this.#estudiante
    }
    
    addStudent(){
        const clone = studentTemplate.cloneNode(true);
        clone.querySelector('h5 .text-primary').textContent = this.name
        return clone
    }
};


class Instructor extends Person{};

form.addEventListener('submit', e =>{
    e.preventDefault()

    const info = new FormData(form);
    const [name, age, option] = [...info.values()];

    if(option === "student"){
        const newStudent = new Student(name, age)
        studentsArray.push(newStudent)
        Person.showPersonUI(studentsArray, option)
      
    }
    if(option === "instructor"){
        console.log("intructor")
    }

    console.log(name,age,option)
    console.log(studentsArray)
});