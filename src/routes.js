//Este archivo permite crear las rutas para los diferentes tipos de métodos que se irán ejecutando
//Definiremos qué ruta desde nuestro servidor vamos a utilizar para ejecutar los métodos del controller

import express from 'express';
import { libros } from './controller.js';

export const router=express.Router();

router.get('/api/libros/getAll',libros.getAll);
router.post('/api/libros/addLibro',libros.add);
router.get('/api/libros/getOne',libros.getOne);
router.patch('/api/libros/updateLibro',libros.update);
router.delete('/api/libros/deleteLibro',libros.delete);