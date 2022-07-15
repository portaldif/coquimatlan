document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

	document.getElementById("move-content").classList.toggle('move-container-all');
	document.getElementById("show-menu").classList.toggle('show-lateral');
}

// Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

	var currentScroll = document.documentElement.scrollTop;

	if (currentScroll > 0){
		window.scrollTo (0, 0);
		buttonUp.style.transform = "scale(0)";

	}

}

buttonUp = document.getElementById("button-up");

window.onscroll = function() {

	var scroll = document.documentElement.scrollTop;

	if (scroll > 600) {
		buttonUp.style.transform = "scale(1)";

	}else if(scroll < 600){
		buttonUp.style.transform = "scale(0)";
	}
}











//------------------ Buscador de contenido ------------------//


// Ejecutando las funciones //
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

// ---------- Declarando las variables ---------- //
bars_search =      document.getElementById("ctn-bars-search"); /*contenedor de barra de busqueda*/
cover_ctn_search = document.getElementById("cover-ctn-search"); /*contenido del buscador sobre el cover*/
inputSearch =      document.getElementById("inputSearch"); /*guardar en variable el input*/
box_search =       document.getElementById("box-search"); /*caja de resultados*/


// ---------- Función para mostrar el buscador ---------- //
function mostrar_buscador() {

	bars_search.style.top = "80px";
	cover_ctn_search.style.display = "block";
	inputSearch.focus();

	if (inputSearch.value === ""){
		box_search.style.display = "none";
	}
}

// ---------- Función para ocultar el buscador ---------- //
function ocultar_buscador(){

	bars_search.style.top = "-10px";
	cover_ctn_search.style.display = "none";
	inputSearch.value = "";
	box_search.style.display = "none";

}

// ---------- Creando filtrado de busqueda ---------- //

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {

	filter = inputSearch.value.toUpperCase();
	li = box_search.getElementsByTagName("li");

	// Recorriendo elementos a filtrar mediante los "li" //
	for (i = 0; i < li.length; i++){

		a = li[i].getElementsByTagName("a")[0];
		textValue = a.textContent || a.innerText; /*almacena el valor del texto*/

		if(textValue.toUpperCase().indexOf(filter) > -1) {

			li[i].style.display = "";
			box_search.style.display = "block";

			if (inputSearch.value === ""){
				box_search.style.display = "none";
			}


		}else{
			li[i].style.display = "none";
		}
	} 
}

// ------------------------ Modo noche ----------------------------- //
let modo=document.getElementById("modo");
let body=document.body;

modo.addEventListener("click", function(){
    let val=body.classList.toggle("dark")
    localStorage.setItem("modo",val)
})

let valor=localStorage.getItem("modo")

if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}
