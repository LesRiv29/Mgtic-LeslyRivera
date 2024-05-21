<?php
// Permitir solicitudes desde cualquier origen

header("Access-Control-Allow-Origin: *");

// Permitir métodos HTTP GET, POST, y OPTIONS

header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS

header('Content-Type: application/json');

header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    //VERIFICAR LA CONEXION DE LA BASE DE DATOS 
    if ($conn->connect_error) {
        die("Error de conexion de la base de datods" . $conn->connect_error);
    }
    $query = "SELECT * FROM estudiantes";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = array(
                "id" => $row["id"],
                "name" => $row["nombre"],
                "age" => $row["edad"],
                "mail" => $row["correo"],
                "password" => $row["password"],
                "signature1" => $row["materia_1"],
                "signature2" => $row["materia_2"],
                "signature3" => $row["materia_3"],
                "campus" => $row["facultad"],
            );
        }
        echo json_encode(array("success" => true, "data" => $data));
    } else {
        echo json_encode(array("success" => false, "error" => "no se encontraron lo datos"));
    }
    $stmt->close();

} else {
    echo json_encode(array("success" => false, "error" => "No se encontraron los datos"));

}