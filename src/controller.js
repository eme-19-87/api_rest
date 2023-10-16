import {pool} from "./database.js";

class LibrosController{

	/*
		req: la solicitud enviada del lado del cliente
		res: respuesta recibida desde el lado del servidor

		Con async volvemos al método asíncrono. Podrá recibir varias solicitudes y las irá encolando, en
		lugar de quedarse "trabado" hasta terminar una solicitud
	*/
	async getAll(req, res){
		//Con wait especificamos que la aplicación no se quede en "stand by" hasta que se complete
		//la consulta.
		try {
				const [result]= await pool.query("Select * from Libros");
				//convierto el resultado en un json
				res.json(result);
		} catch(e) {
			// statements
			console.log(e);
		}
		
	}

	async add(req, res){
		try {
				const libro=req.body;
				// El formato de la fecha de publicación es dia/mes/año
				//Creo un arreglo con el día,mes y anio usando la '/' como punto de separación
				//El indice 0 es el mes, el índice 1 es el día, y el índice 2 es el año
				const arregloAnio=libro.anio.split("/");
				//Creo el objeto fecha
				const fecha_publicacion=new Date(arregloAnio[1],arregloAnio[0],arregloAnio[2]);
				//Inserto el nuevo registro
				const [result]= await pool.query(`Insert into libros(nombre,autor,categoria,anio_publicacion,ISBN)
					values(?,?,?,?,?)`,[libro.nombre,libro.autor,libro.categoria,fecha_publicacion,libro.ISBN]);
				//convierto el resultado en un json
				res.json({"Id insetado": result.insertId});
		} catch(e) {
			// statements
			console.log(e);
		}
		
	}

	async getOne(req, res){
		try {
				const libro=req.body;
				const id_libro=parseInt(libro.id);
				const [result]= await pool.query(`select * from libros where id=?`,
					[id_libro]);
				//convierto el resultado en un json. Si existe el atributo id, entonces no será nulo
				//en caso contrario, si lo será. Si no es nulo, retorno el resultado, sino, retorno
				//el mensaje de error.
				if (result[0]!=undefined){
					res.json(result);
				}else{
					res.json({"Error": "No se ha encontrado un libro con el id especificado"});
				}
		} catch(e) {
			// statements
			console.log(e);
		}
		
		
	}
}

//exportamos una instancia de LibrosController
export const libros=new LibrosController();