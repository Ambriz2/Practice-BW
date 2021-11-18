//map method

const fruits = ["pineapple", "orange", "peach", "nectarine","banana"]

const nuevoArray = fruits.map((item) => item)

console.log(nuevoArray)

const users =[
    {name: "Juanito", age: 22},
    {name: "Huan", age: 33},
    {name: "Robert", age: 44}
];

const mappedNames = users.map((user) => user.name);


console.log(users);
console.log(mappedNames);


const numeros = [1,2,3,4,5,6,7,8,9,10,11]

const numerosX2 = numeros .map((num) => num * 2)
console.log(numerosX2)

//filter method

const users1 =[
    {id:1, name: "Juanito", age: 22},
    {id:2, name: "Huan", age: 33},
    {id:3, name: "Robert", age: 44}
];

const mayores = users1.filter((users) => users.age > 30) 
const deleteUser = users1.filter((user) => user.id !== 2)
console.log(mayores)
console.log(deleteUser)

//find method regresa el valor del primer elemento del array que cumle la funcion de prueba proporcionada

const users2 =[
    {id:1, name: "Chuy", age: 22},
    {id:2, name: "Peter", age: 33},
    {id:3, name: "Julia", age: 44}
];
// there is only one id per user. search by ID
const peter = users2.find((item) => item.id === 2)
console.log(peter)
//desctructuring to find object properties values.
const {age} = users2.find((item) => item.id === 2)

console.log(age)

// some method to verify if users exist

const users3 =[
    {id:1, name: "Chuy", age: 22},
    {id:2, name: "Peter", age: 33},
    {id:3, name: "Julia", age: 44}
];

const existUser = users3.some((user) => user.id === 3)
console.log(existUser)

//findIndex igual que find method si no extste regresa -1

const users4 =[
    {id:1, name: "Chuy", age: 22},
    {id:2, name: "Peter", age: 33},
    {id:3, name: "Julia", age: 44}
];

const userIndex = users4.findIndex((user) => user.id === 4)
console.log(userIndex)
const userIndex2 = users4.findIndex((user) => user.id === 2)
console.log(users4[userIndex2])

//slice method devuelve una copia de una parte del array de inicio al fin no lo modifica
const array = ["dog", "mouse", "tiger", "lion"]
const newarray = array.slice(1,3)
console.log(newarray)

// concat methos une dos o mas array

const array1 = ["dog", "cat", "mouse"];
const array2 = ["tiger", "chicken", "fish"];
const array3 = ["lion", "penguin", "zebra"];
const newArray1 = array1.concat(array2, array3);
console.log(newArray1);

const array4 = ["penguin", "chicken", "turtle"];
const array5 = ["bear", "eagle", "owl"];
//usig spread operator
const spreadSyntaxArray = [...array4, "giraffe", ...array5];

console.log(spreadSyntaxArray); 

//reduce method

const numerosx =[1,2,3,4,5,6,7,8,9,10];

const addAllNumbers = numerosx.reduce((preiousValue, currentValue) => preiousValue + currentValue)
console.log(addAllNumbers);

console.log(addAllNumbers + 5)

const numerosY =[[1,2,3],[4,5,6,7],[8,9,10]];
const onlyNumbers = numerosY.reduce((acc, current) => acc.concat(current))
console.log(onlyNumbers)
const newNumbers = [].concat(...numerosY);
console.log(newNumbers);

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));

//split method
const months2 = "January,February,March,April,May,June";
const arrayMonths2 = months2.split(",");
console.log(arrayMonths2);
const joinArray = arrayMonths2.join(' ')
console.log(joinArray);
const months = ["January", "February", "March", "April","May","June"];
