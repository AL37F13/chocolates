// JavaScript Document
$(document).ready(function(e) {  // esperar que el documento este listo
document.addEventListener("deviceready",function(){ // esperar asta que el dispositvo este listo
$('#btnlistado').on('tap',function(){
	$.ajax({
		type:"POST",
		url:"http://192.168.1.162/proyecto/buscartodo.php",
		data:"",
		error: function(){alert("error en conexion");},
		success: function(respuesta){var producto = JSON.parse(respuesta);
		$('#contenido').empty();
		for(var $x=0; $x<producto.libros.length;$x++)
		{$('#contenido').append('        ');}
		
		
		$(':mobile-pagecontainer').pagecontainer('change','#listado',{transition: 'pop'});
			
			
		}
			});//cierra el ajax
			});//cierra el tap
}); //cierra el deviceready
});// cierra el .ready