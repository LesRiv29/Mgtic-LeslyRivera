<?php
// Permitir solicitudes desde cualquier origen

header("Access-Control-Allow-Origin: *");

// Permitir métodos HTTP GET, POST, y OPTIONS

header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS

header('Content-Type: application/json');

header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    if (isset($_REQUEST ["id"])) {
        $id = intval($_REQUEST['id']);
        $smtm_insert_usario = $conn->prepare("DELETE FROM estudiantes WHERE id = $id");
        $smtm_insert_usario->execute();
        if ($smtm_insert_usario->affected_rows > 0) {
            echo json_encode(array("success" => true));
        } else {
            echo json_encode(array("success" => true));
        }
    }
    $conn->close();
}
exit();
?>
