'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router(); 


//Rutas de Prueba
router.post('/datoscurso', ArticleController.datosCurso);
router.get('/testcontroller',ArticleController.test);

//Rutas útiles



//Exportando este modulo(archivo actual)
module.exports = router;