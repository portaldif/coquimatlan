<?php

include('conexion.php');

if(isset($_POST['submit'])){
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contrasena = $_POST['contrasena'];
    $hashed_password = password_hash($contrasena, PASSWORD_DEFAULT); // hash de la contraseña
    
    // Conexión a la base de datos
    $conexion = mysqli_connect("localhost", "root", "", "mi_base_de_datos");

    // Verificar si el email ya existe
    $query = "SELECT * FROM usuarios WHERE email = '$email'";
    $resultado = mysqli_query($conexion, $query);
    if(mysqli_num_rows($resultado) > 0){
        echo "Este email ya ha sido registrado. Por favor ingresa otro.";
    }else{
        // Insertar los datos del usuario en la tabla de usuarios
        $query = "INSERT INTO usuarios (nombre, email, contrasena, fecha_registro) VALUES ('$nombre', '$email', '$hashed_password', NOW())";
        mysqli_query($conexion, $query);
        echo "Registro exitoso!";
    }
}
?>
