function displayCards() {
    // let card = "";
    let row = "";
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        // card += `
        // <div class='student'>
        //     <h4> Nombre: ${student.name}</h4>
        //     <p>Edad:${student.age}</p>
        //     <p>Correo:${student.mail}</p>
        //     <p>Pass:${student.password}</p>
        //     <p>Materia1:${student.signature1}</p>
        //     <p>Materia2:${student.signature2}</p>
        //     <p>Materia3:${student.signature3}</p>
        //     <p>Facultad:${student.campus}</p>
        //     <button>Eliminar</button>
            
        // </div>
        // `;
        row += `<tr><td> ${student.name}</td>
        <td>${student.age}</td>
        <td>${student.mail}</td>
        <td>${student.password}</td>
        <td>${student.signature1}</td>
        <td>${student.signature2}</td>
        <td>${student.signature3}</td>
        <td>${student.campus}</td>
      </tr>`; 

    }
    // document.getElementById("studentList").innerHTML = card;
    document.getElementById("bodyTable").innerHTML = row;
}
