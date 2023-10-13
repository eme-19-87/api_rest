//El archivo index.js es el archivo encargado de inicializar el servicio que se proporcionará en la 
//API REST. Entre otras cosas, se encargará de crear el servidor, definir el puerto en el cual se 
//escuchará y demás cuestiones que servirán para trabajar con la API.


//será el servidor de nuestra aplicación
import express from 'express';

//para ver las solicitudes del cliente
import morgan from 'morgan';

import {router} from './routes.js';

//crea el servidor de la API REST
const app=express();

//establecemos el puerto desde donde se escucharán las solicitudes
app.set('port',3000);

//usamos morgan para ver las solicitudes del cliente
app.use(morgan('dev'));

//Permite que se puedan interpretar los json de las solicitudes enviadas
app.use(express.json());

app.use('/',router);
//El método listen levanta nuestro servidor. Debemos indicar el puerto de donde escuchará con 
//app.get('port'). Ese puerto será el indicado con app.set('port').
//El segundo parámetro es una función callback

app.listen(app.get('port'),()=>{
	console.log(`Server on port ${app.get('port')}`);
})