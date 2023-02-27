const botones = document.querySelectorAll(".abrir,.cerrar,.brackets");
const navegacion = document.querySelector(".hamb");
const secciones = document.querySelectorAll("section");

/*
for(var i = 0; i < botones.length; i++){
	botones[i].addEventListener("click", function(){
	navegacion.classList.toggle("desplegado");
});
}*/

botones.forEach((boton, indice) => {
	boton.addEventListener("click", function(){
		navegacion.classList.toggle("desplegado");
	});
});