// JavaScript Document
$(document).ready(function(e) {  // esperar que el documento este listo
document.addEventListener("deviceready",function(){ // esperar asta que el dispositvo este listo
$('#btnlistado').on('tap',function(){
	$.ajax({
		type:"POST",
		url:"http://192.168.1.189/proyecto/buscartodo.php",
		data:"",
		error: function(){alert("error en conexion");},
		success: function(respuesta){var producto = JSON.parse(respuesta);
		alert(respuesta);
		$('#contenido').empty();
		for(var $x=0; $x<producto.chocolates.length;$x++)
		{$('#contenido').append('<div><div align="center" style="border:3px solid #963;"><div style=" display:inline-block;"><h1>'+ producto.chocolates[$x].claveChocolate +'</h1></div><div style=" display:inline-block;"><h1>'+ producto.chocolates[$x].nombreChocolate +'</h1></div><div style=" display:inline-block;"><img src="http://192.168.1.162/proyecto/recursos/imagenes/fotos/chocolate'+producto.chocolates[$x].claveChocolate+'.jpg"></div></div><div align="center" style="border:3px solid #963;"><div><h1>'+ producto.chocolates[$x].tipoChocolate +'</h1></div><div style=" display:inline-block;"><h1>'+ producto.chocolates[$x].saborChocolate +'</h1></div><div style=" display:inline-block;"><h1>'+ producto.chocolates[$x].marcaChocolate +'</h1></div><div style=" display:inline-block;"><h1>'+ producto.chocolates[$x].descripcionChocolate +'</h1></div></div></div>');}
		
		
		$(':mobile-pagecontainer').pagecontainer('change','#lista',{transition: 'pop'});
			
			
		}
			});//cierra el ajax
			});//cierra el tap
			
			
			$('#btnbuscar').on('tap',function(){
	$.ajax({
		type:"POST",
		url:"http://192.168.1.189/proyecto/buscar.php",
		data:"nombre=" + $('#txtbuscar').val(),
		error: function(){alert("error en conexion");},
		success: function(respuesta){var producto = JSON.parse(respuesta);
		alert(respuesta);
		$('#contenido').empty();
		for(var $x=0; $x<producto.chocolates.length;$x++)
		{$('#contenido').append('<div><div align="center" style="border:3px solid #963;"><div style=" display:inline-block;"><h1>'+ producto.chocolates[$x].claveChocolate +'</h1></div><div style=" display:inline-block;"><h1>'+ producto.chocolates[$x].nombreChocolate +'</h1></div><div style=" display:inline-block;"><img src="http://192.168.1.162/proyecto/recursos/imagenes/fotos/chocolate'+producto.chocolates[$x].claveChocolate+'.jpg"></div></div><div align="center" style="border:3px solid #963;"><div><h1>'+ producto.chocolates[$x].tipoChocolate +'</h1></div><div style=" display:inline-block;"><h1>'+ producto.chocolates[$x].saborChocolate +'</h1></div><div style=" display:inline-block;"><h1>'+ producto.chocolates[$x].marcaChocolate +'</h1></div><div style=" display:inline-block;"><h1>'+ producto.chocolates[$x].descripcionChocolate +'</h1></div></div></div>');}
		
		
		$(':mobile-pagecontainer').pagecontainer('change','#lista',{transition: 'pop'});
			
			
		}
			});//cierra el ajax
			});//cierra el tap
}); //cierra el deviceready
});// cierra el .ready