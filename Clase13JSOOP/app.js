/*
// constructor function
function Person(name,age,gender){
    this.name = name,
    this.age = age,
    this.gender = gender,
    this.greet = function greet() {
        return `Hello my name is ${this.name} and I'm ${this.age}`
    }
   ///  CAN BE A PROTOTYPE SO ITS NOT HEREDITARY
    // this.language = function language(){
   //     return`Hello my name is ${this.name} and I speak ${this.language}`
   // }
}
    // DOES NOT TRANSFER TO INSTANCES AND 
Person.prototype.language = function (language){
        this.language = language
        return `Hi my name is ${this.name} and I speak ${this.language}`
     };
  // john is an instance   
  const john = new Person('John',22,"male");
  const juanito = new Person('Juanito',88,"male");
console.log(juanito);  
console.log(juanito.greet());
console.log(john);
console.log(john.greet());
console.log(john.language('spanish'));
*/
// IN A CLASS CONSTRUCTOR ALL METHODS WILL BE AS PROTOTYPES
class Person1 {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    /// NO PARAMETERS AND ALWAYS HAS TO RETURN SOMETHING// *private / public
    get getName() {
        return this.name;
    }
    // ONLY ONE PARAMETER 
    set setName(name) {
        this.name = name;
    }
    sayHi() {
        return `${this.name} is ${this.age}`;
    }

    static staticTest(name) {
        return `${name} prueba estatica`
    }

};


const beto = new Person1("beto", 55)
//beto.name = "George"; // NAME REASIGNED
beto.setName = "Jorjais";
console.log(beto, beto.sayHi());
console.log(beto.getName); //NO PARENTHESIS NEEDED,  THEY ARE NOT METHODS

console.log(Person1.staticTest('chido')) //NO INSTANTIATION

//INHERITANCE

class Student extends Person1 {
    constructor(name, age, grade = []) {
        super(name, age);
        this.grade = grade;
        // this.grade = grade || [];
    }

    set setGrade(grades) {
        this.grade.push(grades)
    }

    get getGrade() {
        return this.grade
    }
    sayHi() {
        return `${this.name} is ${this.age} yrs old. Message from Student`;//Polymorfismo
    }
};

const julie = new Student("Julie", 22, "A");
console.log(julie);
console.log(julie.sayHi());
const marcus = new Student("Marcus", 20)
//const marcus = new Student("Marcus", 20, "B");
marcus.setGrade = 'D';
marcus.setGrade = 'F';
marcus.setGrade = 'C';
console.log(marcus.getGrade);
console.log(marcus)

//PRIVATE CLASS
class Estudiantes extends Person1 {
    #grades = [];
    set setGrade(grade) {
        this.#grades.push(grade);
    }

    get getGrade() {
        return this.#grades
    }
};

const paty = new Estudiantes("Paty", 25);
paty.setGrade = 'B';
paty.setGrade = 'A';
paty.setGrade = 'C';
console.log(paty.getGrade)
console.log(paty)