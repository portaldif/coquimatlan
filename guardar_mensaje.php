<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "mi_base_de_datos");

// Insertar mensaje en la base de datos
if(isset($_POST['mensaje'])){
    $mensaje_encriptado = $_POST['mensaje'];
    $query = "INSERT INTO mensajes (mensaje) VALUES ('$mensaje_encriptado')";
    mysqli_query($conexion, $query);
}
?>
