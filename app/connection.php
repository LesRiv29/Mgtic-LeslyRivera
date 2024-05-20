<?php

$serverName="localhost";

$userName="lesly";

$password="root@19"; // "" "root"  "1234"

$dbName="registro_escolar";

 

$conn = new mysqli($serverName,$userName,$password,$dbName);

 

if($conn->connect_error){

    die("Error de conexión:". $conn->connect_error);

 

}

?>