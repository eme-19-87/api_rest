
//Controla que el id exista
function controlarID(id){
	if (id===undefined) throw ("Por favor, coloque el campo id");
	if(id==="") throw ("El campo ID no puede estar vacío");
}

//Controla que el ISBN exista y que tenga el tamaño requerido
function controlarISBN(isbn){

		if (isbn===undefined) throw ("Por favor, coloque el campo ISBN");
		if(isbn==="") throw ("El campo ISBN no puede estar vacío");
		if (isbn.length<10 || isbn.length>15) throw (`El ISBN debe tener entre 10 y 15 caracteres. Caracteres en el ISBN: ${isbn.length}`);
}


//controla que el nombre exista
function controlarNombre(nombre){
	if(nombre===undefined) throw ("Por favor, agregue el dato del nombre del libro");
	if(nombre==="") throw ("El campo nombre no puede estar vacío");
}

//controla que al autor exista
function controlarAutor(autor){
	if (autor===undefined) throw ("Por favor, agregue el dato del autor del libro");
	if(autor==="") throw ("El campo autor no puede estar vacío");

}

//Controla que la categoría exista
function controlarCategoria(categoria){
	if(categoria===undefined) throw ("Por favor, agregue el dato de la categoría del libro");
	if(categoria==="") throw ("El campo nombre no puede estar vacío");
}


//Controla que los campos enviados en el json del requerimiento sean los campos de la tabla
function controlarCampos(libro){
	/*
		Obtenido de:
		https://www.etnassoft.com/2016/11/11/comprobar-si-un-elemento-existe-dentro-de-un-array-en-javascript-sintaxis-es7-includes/

	*/
	const campos_validos=["id","nombre", "categoria","autor","anio_publicacion","ISBN"];
	
	const campos_invalidos=Object.keys(libro).filter((valor)=>{

		if(!campos_validos.includes(valor)) return valor;});

	if (campos_validos.length>0) throw(`Los siguiente campos son inválidos: ${campos_invalidos}`);
}


//Los controles necesarios para la actualización
export function controlarActualizacion(libro){
	controlarID(libro.id);
	controlarCampos(libro);
}


//Los controles para los datos nuevos
export function controlarDatosNuevo(libro){
	
	controlarCampos(libro);
	controlarISBN(libro.ISBN);
	controlarNombre(libro.nombre);
	controlarAutor(libro.autor);
	controlarCategoria(libro.categoria);
}

//Los controles para la eliminación
export function controlarEliminacion(libro){
	controlarISBN(libro.ISBN);
}

