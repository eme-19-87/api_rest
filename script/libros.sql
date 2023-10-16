-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-10-2023 a las 02:32:48
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `categoria` varchar(30) DEFAULT NULL,
  `anio_publicacion` date DEFAULT NULL,
  `ISBN` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `anio_publicacion`, `ISBN`) VALUES
(1, 'El Señor De Los Anillos. La Co', 'J. R. R. Tolkien', 'Fantasía', '2001-02-01', '8439596197'),
(2, 'Canción De Hielo y Fuego. Jueg', 'George R.R. Martin', 'Fantasía', '2000-10-03', '8496208567'),
(3, 'Rebelión En La Granja', 'George Orwell', 'Distopía', '2002-05-08', '8423309223'),
(4, 'Dune', 'Frank Herbert', 'Ciencia Ficción', '2003-05-28', '8423309223'),
(5, 'Los Archivos Dresden. Luna Lle', 'Jim Butcher', 'Fantasía', '2004-04-01', '9788498003420'),
(6, 'El señor de los anillos. El Re', 'J. R. R. Tolkien', 'Fantasia', '2003-08-21', '3456212345'),
(7, '1984 ', 'George Orwell', 'Distopia', '2010-10-05', '3472654389'),
(8, 'Un Mundo Feliz ', 'Aldus Huxley', 'Distopia', '1917-06-22', '3567892314');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
