let students = [];



//constructor

function Student(name, age, mail,password,signature1, signature2, signature3, campus) {

    this.name = name;
    this.age = age;
    this.mail = mail;
    this.password = password;
    this.signature1 = signature1;
    this.signature2 = signature2;
    this.signature3 = signature3;
    this.campus = campus;
}



//validación

function isValid(unAlumno) {

    let validacion = true;



    if (unAlumno.name == "") {

        validacion = false;

    }

    if (unAlumno.age == "") {

        validacion = false;

    }
    if (unAlumno.mail == "") {

        validacion = false;

    }
    if (unAlumno.password == "") {

        validacion = false;

    }
    if (unAlumno.signature1 == "") {

        validacion = false;

    }
    if (unAlumno.signature2 == "") {

        validacion = false;

    }
    if (unAlumno.signature3 == "") {

        validacion = false;

    }
    if (unAlumno.campus == "") {

        validacion = false;

    }




    return validacion;

}

//registrar

function registrar() {

    let inputNombre = document.getElementById("txtNombre").value;

    let inputEdad = document.getElementById("txtEdad").value;
    let inputCorreo = document.getElementById("txtCorreo").value;
    let inputPassword = document.getElementById("txtPassword").value;
    let inputMateria1 = document.getElementById("txtMateria1").value;
    let inputMateria2 = document.getElementById("txtMateria2").value;
    let inputMateria3 = document.getElementById("txtMateria3").value;
    let inputFacultad = document.getElementById("txtFacultad").value;

    let nuevoAlumno = new Student(inputNombre, inputEdad,inputCorreo, inputPassword, inputMateria1,inputMateria2, inputMateria3, inputFacultad);

    if (isValid(nuevoAlumno)) {

        students.push(nuevoAlumno);
        displayCards();

        //console.log(students);

    } else {

        alert("Por favor completa los campos");

    }

}



 function init() {
    let student1 = new Student("Samuel", 99);
     students.push(student1);
     displayCards();

 }

window.onload = init;// espera a rendirizar el HTML

