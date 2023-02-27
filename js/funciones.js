const botones = document.querySelectorAll(".abrir,.cerrar");
const navegacion = document.querySelector(".hamb");
const bird = document.querySelector("#bird");

/*
for (var i = 0; i < botones.length; i++) {
	botones[i].addEventListener("click", function() {
	navegacion.classList.toggle("desplegado");
});
}*/

botones.forEach(boton => {
	boton.addEventListener("click", function() {
		navegacion.classList.toggle("desplegado");
		bird.classList.toggle("blur");
	});
});

//botones.length en este caso son 2, abrir, cerrar, pero puede darse que no sepamos cuantos hay / i significa contador//
//toggle es como un switch, encendido/apagado//