<?php

include('conexion.php');

if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $contrasena = $_POST['contrasena'];

    // Conexión a la base de datos
    $conexion = mysqli_connect("localhost", "root", "", "mi_base_de_datos");

    // Verificar si el email y la contraseña son correctos
    $query = "SELECT * FROM usuarios WHERE email = '$email'";
    $resultado = mysqli_query($conexion, $query);
    if(mysqli_num_rows($resultado) > 0){
        $usuario = mysqli_fetch_assoc($resultado);
        if(password_verify($contrasena, $usuario['contrasena'])){
            echo "Inicio de sesión exitoso!";
        }else{
            echo "Contraseña incorrecta. Por favor intenta de nuevo.";
        }
    }else{
        echo "Este email no ha sido registrado. Por favor crea una cuenta.";
    }
}
?>
