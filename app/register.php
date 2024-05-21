<?php
// Permitir solicitudes desde cualquier origen

header("Access-Control-Allow-Origin: *");

// Permitir métodos HTTP GET, POST, y OPTIONS

header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS

header('Content-Type: application/json');

header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST ["nombre"], $_POST["edad"])) {
        $smtm_insert_usario = $conn->prepare("INSERT INTO estudiantes (nombre, edad, correo, password, materia_1, materia_2, materia_3,facultad) VALUE(?,?,?,?,?,?,?,?)");
        $smtm_insert_usario->bind_param('sdssssss',$_POST["nombre"], $_POST["edad"], $_POST["correo"], $_POST["password"], $_POST["materia1"], $_POST["materia2"], $_POST["materia3"], $_POST["facultad"]);
        $smtm_insert_usario->execute();
    }
    $conn->close();
}
exit();
?>
