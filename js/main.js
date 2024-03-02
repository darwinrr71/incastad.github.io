$(document).ready(main);

var contador = 1;

function main () {
	$('.main_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.sub_main').click(function(){
		$(this).children('.children').slideToggle();
	});
}

function cambiarcont(pagina) {
    $(".contenido").load(pagina);
}

function cambiarcontpriser(paginapriser) {
    $(".load-content-priser").load(paginapriser);
}
	  
function cargaformulario(formulario) {
	$(".load-content-priser").load(formulario);
}

function cambiarcontomoss(paginaomoss) {
    $(".load-content-omoss").load(paginaomoss);
}	