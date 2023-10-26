# api_rest
<p>
  Repositorio con ejercicios de API REST para el curso de Talentos Digitales
</p>
<p>
  La aplicación permite obtener la información de los libros de una biblioteca almacenado en una base de datos Biblioteca en la tabla Libros. Se emplea Xampp para trabajar con Apache y MySql, NodeJS y Express para crear el servidor y los métodos necesarios para acceder a la API, y se emplea Postman para enviar las peticiones y comprobar los resultados. La API dará los siguientes servicios: 
</p>
<ul>
  <li>
    <p>
      getAll: permite obtener todos los datos de los libros en formato json. No requiere argumentos.
    </p>
    <p>
      Ruta: http://localhost:3000/api/libros/getAll
    </p>
  </li>
   <li>
    <p>
      getOne: permite obtener los datos de un solo libro mediante el id del mismo.
    </p>
    <p>
      Ruta:http://localhost:3000/api/libros/getOne/{valor_id}
    </p>
    <p>
      Parámetros: Un parámetro en la url que identifica el id del libro buscado
    </p>
  </li>
<li>
    <p>
      addLibro: permite agregar un nuevo libro pasando en el cuerpo del requerimiento en formato json el nombre del autor, el nombre del libro, la categoría del libro, la fecha de publicación y el ISBN. Todos los datos deben estar presentes, excepto el id del libro que se genera automáticamente. La fecha debe ser colocada en el formato dd/mm/aaaa.
    </p>
    <p>
      Ruta:http://localhost:3000/api/libros/addLibro
    </p>
    <p>
      Parámetros: En el cuerpo de Postman debe enviarse un dato de tipo raw y json, cuyo par clave-valor estará formado por los campos: "nombre", "autor", "categoria", "anio_publicacion", "ISBN" y los valores serán aquellos requeridos por cada campo. La fecha debe estar en formato dd/mm/aaaa. El ISBN debe ser único.
    </p>
  </li>
<li>
    <p>
      updateLibro: permite actualizar los datos de un libro mediante el id del mismo. Los datos pasados deben ser los mismos que para addLibro, pero no se requiere que sean pasados todos a la vez, ya que la API puede modificar sólo algunos campos del libro. Es obligatorio pasar el id del libro para la actualización.
      El método empleado para implementarlo fue PATCH
    </p>
    <p>
      Ruta:http://localhost:3000/api/libros/updateLibro
    </p>
    <p>
     Parámetros: En el cuerpo de Postman debe enviarse un dato de tipo raw y json, cuyo par clave-valor estará formado por los campos: "nombre", "autor", "categoria", "anio_publicacion", "ISBN" y los valores serán aquellos requeridos por cada campo. La fecha debe estar en formato dd/mm/aaaa. El ISBN debe ser único.
	    No requiere todos los pares clave-valor, ya que la API puede actualizar uno o varios de los campos válidos, pero requiere que se pase el id del libro que se desea actualizar.
    </p>
  </li>
<li>
    <p>
      deleteLibro: permite eliminar un libro de la base de datos pasando como dato el ISBN del libro
    </p>
    <p>
      Ruta:http://localhost:3000/api/libros/deleteLibro
    </p>
    <p>
     Parámetros: En el cuerpo de Postman debe enviarse un dato de tipo raw y json, cuyo par clave-valor estará formado por la clave "ISBN" y el valor será el valor del ISBN del libro que deseamos eliminar. Sólo se permite como dato un ISBN válido.
    </p>
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
