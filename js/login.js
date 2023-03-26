function iniciarSesion() {
	// Obtener los valores de usuario y contraseña ingresados por el usuario
	var usuario = document.getElementById("usuario").value;
	var contrasena = document.getElementById("contrasena").value;

	// Verificar si el usuario y la contraseña son correctos (por ejemplo, si están almacenados en una base de datos)
	// Si son correctos, mostrar el contenido y ocultar el formulario de inicio de sesión
	// Si no son correctos, mostrar un mensaje de error al usuario
	if (usuario == "usuario" && contrasena == "contrasena") {
		document.getElementById("login").style.display = "none";
		document.getElementById("crearCuenta").style.display = "none";
		document.getElementById("contenido").style.display = "block";
	} else {
		alert("Usuario ha sido reconocido");
	}

	function crearCuenta() {
	// Obtener los valores de nombre, email y contraseña ingresados por el usuario
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var nuevaContrasena = document.getElementById("nuevaContrasena").value;

	// Verificar si el nombre de usuario y el email están disponibles (por ejemplo, si no están ya registrados en una base de datos)
	// Si están disponibles, crear una cuenta para el usuario y mostrar el contenido
	// Si no están disponibles, mostrar un mensaje de error al usuario
	if (nombre == "" || email == "" || nuevaContrasena == "") {
		alert("Por favor complete todos los campos");
	} else {
		document.getElementById("login").style.display = "none";
		document.getElementById("crearCuenta").style.display = "none";
		document.getElementById("contenido").style.display = "block";
	}

	}
	function cerrarSesion() {
	// Ocultar el contenido y mostrar el formulario de inicio de sesión
	document.getElementById("contenido").style.display = "none";
	document.getElementById("login").style.display = "block";
	document.getElementById("crearCuenta").style.display = "block";

	}
	function cerrarSesion() {
	// Ocultar el contenido y mostrar el formulario de inicio de sesión
	document.getElementById("contenido").style.display = "none";
	document.getElementById("login").style.display = "block";
	document.getElementById("crearCuenta").style.display = "block";
}

