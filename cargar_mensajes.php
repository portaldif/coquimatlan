<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "mi_base_de_datos");

// Obtener los mensajes de la base de datos
$query = "SELECT * FROM mensajes";
$resultado = mysqli_query($conexion, $query);
$mensajes = array();
while($fila = mysqli_fetch_assoc($resultado)){
    $mensajes[] = $fila['mensaje'];
}

// Devolver los mensajes como un array JSON
echo json_encode($mensajes);
?>
