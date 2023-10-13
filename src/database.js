//importo la biblioteca necesaria para la conexión
import mysqlConnection from 'mysql2/promise';

//creo las propiedades de la conexión
const properties={
	host: 'localhost',
	user: 'root',
	password:'',
	//database:'rest-api'
	database:'Biblioteca'
}

//exporto la conexión con las propiedades establecidas
export const pool=mysqlConnection.createPool(properties);
