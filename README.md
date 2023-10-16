# api_rest
<p>
  Repositorio con ejercicios de API REST para el curso de Talentos Digitales
</p>
<p>
  La aplicación permite obtener la información de los libros de una biblioteca almacenado en una base de datos Biblioteca en la tabla Libros. Se emplea Xampp para trabajar con Apache y MySql, NodeJS y Express para crear el servidor y los métodos necesarios para acceder a la API, y se emplea Postman para enviar las peticiones y comprobar los resultados. La API dará dos servicios: 
</p>
<ul>
  <li>
    getAll: permite obtener todos los datos de los libros en formato json. No requiere argumentos
  </li>
   <li>
    getOne: permite obtener los datos de un solo libro mediante el id del mismo. Si se utiliza Postman para el envío de peticiones, requiere que en body de la petición se envíe un texto raw de tipo json donde el par clave-valor enviado tendrá en su clave "id" y el valor será el id del número buscado. En caso de existir, retornará la información del libro. Si no existe un libro con el id indicado, retornará un mensaje de error en formato json.
  </li>
</ul>
<p>
  La estructura de la tabla Libros de la consigna es de la siguiente manera
  
</p>
<code>create table Libros(
  	id integer primary key auto_increment,
  	nombre varchar(30),
  	autor varchar(30),
  	categoria varchar(30),
  	anio_publicacion date,
  	ISBN varchar(15)
	);</code><br>

<p>
 <strong> Nota: El atributo "nombre" se cambio a varchar(60) para aceptar nombres de libros más largos. Además, se modificó el atributo ISBN para agregarle un constraint de valor único.
 </strong>
</p>