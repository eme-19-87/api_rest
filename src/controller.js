import {pool} from "./database.js";
import {controlarDatosNuevo} from "./excepciones.js";
import {controlarEliminacion} from "./excepciones.js";
import {controlarActualizacion} from "./excepciones.js";
import {armarQueryActualizacion} from "./auxiliares.js";
import {obtenerFecha} from "./auxiliares.js";


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
				//const arregloAnio=libro.anio.split("/");
				//Creo el objeto fecha
				controlarDatosNuevo(libro);
				const fecha_publicacion=obtenerFecha(libro.anio_publicacion);
				//Inserto el nuevo registro
				const [result]= await pool.query(`Insert into libros(nombre,autor,categoria,anio_publicacion,ISBN)
					values(?,?,?,?,?)`,[libro.nombre,libro.autor,libro.categoria,fecha_publicacion,libro.ISBN]);
					//convierto el resultado en un json
					res.json({"Id insertado": result.insertId});
				
				
		} catch(e) {
			// statements
			return res.send(e);
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
					
					throw (`No existe un libro con el id:${id_libro}`);

				}
		} catch(e) {
			// statements
			res.send(e);
		}
		
		
	}



	async update(req,res){
		try {
				//recupero los datos del cuerpo del requerimiento
				const libro=req.body;
				//controlo que los datos sean correctos
				controlarActualizacion(libro);
				//si lo son, recupero el id y lo convierto a entero
				const id=parseInt(libro.id);
				//armo la query según los campos que estén presentes
				const query=armarQueryActualizacion(libro)+` where id=(?)`;
				//recupero los valores ya sea si existen o no
                let valores=[libro.nombre,libro.autor,libro.categoria,libro.anio_publicacion];
                //dejo a la fecha última, si se tiene algo, la transformo en un objeto Date
                if(valores[valores.length-1]!=undefined){
                	valores[valores.length-1]=obtenerFecha(valores[valores.length-1]);
                };
                //filtro los valores que no son undefined
                valores=valores.filter((dato)=>{
                	if(dato!=undefined) return dato;
                });
                
                //inserto el id en la última posición
                valores.push(id);
                //console.log(query);
                //console.log(valores);
				//console.log(datos);
				//Inserto el nuevo registro
				
				const [result]= await pool.query(query,valores);
				//reviso si una o más filas fueron afectas, sino, emito el error
				if(result.affectedRows>0){
					res.json({"Registros Actualizados": result.affectedRows});
				}else{
					throw "No se pudo actualizar el libro. Controle que el id sea válido";
				}
				
				
		} catch(e) {
			// statements
			console.log(e);
			res.json({"Error": e});
		}
	}

	async delete(req,res){
		try {
			const libro=req.body;
			controlarEliminacion(libro);

		} catch(e) {
			// statements
			console.log(e);
		}
	}

	
}


//exportamos una instancia de LibrosController
export const libros=new LibrosController();