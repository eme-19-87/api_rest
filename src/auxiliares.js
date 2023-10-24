/*
    Funciones auxiliares para trabajar con los datos

*/


/*
Permite armar la query según los datos enviados en el cuerpo de formato json en Postman
*/
export function armarQueryActualizacion(libro){
	const claves=(Object.keys(libro));
	let query=`update libros set`;
    let query_base=query;
	if(claves.includes("nombre")) query+=` nombre=(?),`;
	if(claves.includes("autor")) query+=` autor=(?),`;
	if(claves.includes("categoria")) query+=` categoria=(?),`;
    if(claves.includes("ISBN")) query+=` ISBN=(?),`;
	if(claves.includes("anio_publicacion")) query+=` anio_publicacion=(?),`;
    if(query===query_base){
        throw ("Por favor, coloque alguno de los campos válidos para realizar la actualización");
    }
	return query.substring(0, query.length-1);

}


/*
    Permite obtener un objeto de tipo Date cuando se le pasa un string con formato dd/mm/aaaa.
    Lanzará diversas excepciones dependiendo si no se cumple el formato válido para una fecha

*/
export function obtenerFecha(fecha){

	/*
	Obtenido de:
	https://es.stackoverflow.com/questions/59516/validar-una-fecha-dd-mm-aaaa-con-expresiones-regulares

	*/
	
	let partes = /^(\d{1,2})[/](\d{1,2})[/](\d{3,4})$/.exec(fecha);
    
    if (!partes) throw ("La fecha no tiene el formato dd/mm/aaaa"); //no coincide el regex

    //Obtener las partes
    let d = parseInt(partes[1], 10),
        m = parseInt(partes[2], 10),
        a = parseInt(partes[3], 10);

    //Validar manualmente
    if (!a || !m || m > 12 || !d) throw ("Comprueba que el día, mes y año sean correctos");

    let diasPorMes = [31,28,31,30,31,30,31,31,30,31,30,31 ];

    //Si es bisiesto, febrero tiene 29
    if (m == 2 && (a % 4 == 0 && a % 100 != 0) || a % 400 == 0)
        diasPorMes[1] = 29;

    //Que no tenga más días de los permitidos en el mes
    if (d > diasPorMes[m - 1]) throw ("Hay más días de los permitidos en el mes");
    
    //Fecha válida
    return new Date(a,m-1,d);
    
}

