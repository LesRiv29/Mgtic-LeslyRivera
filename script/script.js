//variables
var studentName = "Samantha";
let age = 99.67;
const isStudent = false;

console.log(studentName);
console.log(age);
console.log(isStudent);
// arreglos
let students = ["Samantha", "Roberto", "Fabiola", "Sergio", "Rafael"];
console.log(students);

students.push("Fernanda", "Adrian");//agrega item al arreglo 
students[2] = "Fabi";

students.pop(); //quita items del arreglo
students.splice(1, 1); // quita item especifico
console.log(Students);

//object literal

let student1 = {
    name:"Samantha",
    age: 99,
    isStudent: false
}
let student2 = {
    name:"Roberto",
    age: 97,
    isStudent: false
}
console.log(student1, student2);

//object consturctor
function Students(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
}
let student3 = new Students("Fabiola", 97, false);
let student4 = new Students("Sergio", 96, true);
let student5 = new Students("Fernanda", 95, true);
console.log(student3, student4, student5);

//function
function saludar() {
    alert("Welcome");
}
function sumar(a, b) {
    let total = a + b;
    return total;
}
function calcularTaxes(ingreso, egresos) {
    let subtotal = ingreso - egresos;
    let total = subtotal * .02;
    document.write(`
    <p class= "conteiner"> Tus taxes son: $${total}<p> 
    `);
}
calcularTaxes(sumar(100, 200), sumar(10, 8));
calcularTaxes(sumar(200, 300), sumar(50, 30));