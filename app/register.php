<?php
// Permitir solicitudes desde cualquier origen

header("Access-Control-Allow-Origin: *");

// Permitir métodos HTTP GET, POST, y OPTIONS

header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS

header('Content-Type: application/json');

header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if($_SERVER["REQUEST_METHOD"]== "POST"){

    if(isset($_POST ["name"],$_POST["age"])){
        $nombre = $_POST["name"];
        $edad = $_POST["age"];

        $smtm_insert_usario =$conn->prepare("INSERT INTO estudiante (name,age) VALUE(?,?)");
        $smtm_insert_usario->bin_param("si", $nombre,$edad);
        $smtm_insert_usario->execute();
    }
    $conn->close();
    exit();
}
?>