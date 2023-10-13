//Este archivo permite crear las rutas para los diferentes tipos de métodos que se irán ejecutando
//Definiremos qué ruta desde nuestro servidor vamos a utilizar para ejecutar los métodos del controller

import express from 'express';
import { libros } from './controller.js';

export const router=express.Router();

router.get('/getAll',libros.getAll);
router.post('/addLibro',libros.add);
router.get('/getOne',libros.getOne);