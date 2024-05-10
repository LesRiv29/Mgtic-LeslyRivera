//constructor
function Facultades(facultad,campus){
    this.facultad=facultad;
    this.campus=campus;
}
//validacion
function isValid(unFacultad){
    let validacion = true;
    if(unFacultad.facultad==""){
        validacion = false;
    }
    if(unFacultad.campus==""){
        validacion = false;
    }
    return validacion;
}

//registro
function register(){
    let inputFacultad= document.getElementById("txtFacultad").value;
    let inputCampus = document.getElementById("txtCampus").value;

    let nuevaFacultad = new Facultades(inputFacultad,inputCampus);
    saveItems(nuevaFacultad);//StoreManager
}
