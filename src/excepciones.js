
//Controla que el id exista
function controlarID(id){
	/*Obtenido de:
		https://www.manualweb.net/javascript/comprobar-numeros-javascript/
	*/
	if (id===undefined) throw ("Por favor, coloque el campo id");
	if (!Number.isInteger(id)) throw("Por favor, un entero positivo para el id");
}

//Controla que el ISBN exista y que tenga el tamaño requerido
function controlarISBN(isbn){

		if (isbn===undefined) throw ("Por favor, coloque el campo ISBN");
		if (isbn.length<10 || isbn.length>15) throw (`El ISBN debe tener entre 10 y 15 caracteres. Caracteres en el ISBN: ${isbn.length}`);
}


//controla que el nombre exista
function controlarNombre(nombre){
	if(nombre===undefined) throw ("Por favor, agregue el dato del nombre del libro");
	
}

//controla que al autor exista
function controlarAutor(autor){
	if (autor===undefined) throw ("Por favor, agregue el dato del autor del libro");

}

//Controla que la categoría exista
function controlarCategoria(categoria){
	if(categoria===undefined) throw ("Por favor, agregue el dato de la categoría del libro");
}

function controlarBlancos(libro){
	/*
		Obtenido de: 
		https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values
	*/
	const valores=Object.values(libro);
	const valido=valores.reduce((resultado,valor)=>{
		return resultado && valor!=="";
	},true);
	if(!valido) throw("Existen claves con valores en blanco");
}


//Controla que los campos enviados en el json del requerimiento sean los campos de la tabla
function controlarCampos(libro,campos_validos){
	/*
		Obtenido de:
		https://www.etnassoft.com/2016/11/11/comprobar-si-un-elemento-existe-dentro-de-un-array-en-javascript-sintaxis-es7-includes/

	*/
	
	const campos_invalidos=Object.keys(libro).filter((valor)=>{

		if(!campos_validos.includes(valor)) return valor;});

	if (campos_invalidos.length>0) throw(`Campos Válidos: ${campos_validos}. Campos Inválidos: ${campos_invalidos}`);
}


//Los controles necesarios para la actualización
export function controlarActualizacion(libro){
	const campos_validos=["id","nombre", "categoria","autor","anio_publicacion","ISBN"];
	controlarID(libro.id);
	controlarCampos(libro,campos_validos);
	controlarBlancos(libro);
}


//Los controles para los datos nuevos
export function controlarDatosNuevo(libro){
	const campos_validos=["nombre", "categoria","autor","anio_publicacion","ISBN"];
	controlarCampos(libro,campos_validos);
	controlarISBN(libro.ISBN);
	controlarNombre(libro.nombre);
	controlarAutor(libro.autor);
	controlarCategoria(libro.categoria);
	controlarBlancos(libro);
}

//Los controles para la eliminación
export function controlarEliminacion(libro){
	const campos_validos=["ISBN"];
	controlarCampos(libro,campos_validos);
	controlarISBN(libro.ISBN);
	controlarBlancos(libro);
}

export function controlarObtenerUno(libro){
	const campos_validos=["id"];
	controlarID(libro.id);
	controlarCampos(libro,campos_validos);
	
}

