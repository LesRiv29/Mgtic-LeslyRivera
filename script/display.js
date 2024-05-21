function displayCards(student) {
  //let card = "";
  //let row = "";
  // for (let i = 0; i < students.length; i++) {
  //   let student = students[i];
  // let card = `
  //   <div class='student'>
  //       <h4> Nombre: ${student.name}</h4>
  //       <p>Edad:${student.age}</p>
  //       <p>Correo:${student.mail}</p>
  //       <p>Pass:${student.password}</p>
  //       <p>Materia1:${student.signature1}</p>
  //       <p>Materia2:${student.signature2}</p>
  //       <p>Materia3:${student.signature3}</p>
  //       <p>Facultad:${student.campus}</p>
  //       <button>Eliminar</button>
  //
  //   </div>
  //   `;
  let card = `
  <div class="col-sm-3">
    <div class="card" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary mb-3">
          <h3 class="card-title">${student.name}</h3>
      </div>
      <div class="card-body">
          <div class="card-text">
          <p><b>Edad</b>: ${student.age}</p>
          <p><b>Correo: </b>${student.mail}</p>
          <p><b>Pass: </b>${student.password}</p>
          <p><b>Materia1: </b>${student.signature1}</p>
          <p><b>Materia2: </b>${student.signature2}</p>
          <p><b>Materia3: </b>${student.signature3}</p>
          <p><b>Facultad: </b>${student.campus}</p>
      </div>
      </div>
    </div>
  </div>
  `;
    // row += `<tr><td> ${student.name}</td>
    //     <td>${student.age}</td>
    //     <td>${student.mail}</td>
    //     <td>${student.password}</td>
    //     <td>${student.signature1}</td>
    //     <td>${student.signature2}</td>
    //     <td>${student.signature3}</td>
    //     <td>${student.campus}</td>
    //   </tr>`;

  // }

document.getElementById("studentList").innerHTML += card;
//document.getElementById("bodyTable").innerHTML = row;
}
function searchToDataBase() {
  $.ajax({
    url: "app/get_student.php",
    type: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
      if (response.success) {
        response.data.forEach(displayCards);
      }else{
        console.log("Error en la respuesta del servidor");
      }
    },
    error: function (xhr, status, error) {
      console.log(error);
    }

  })
}
function int (){
  searchToDataBase();
} 
window.onload=int;





