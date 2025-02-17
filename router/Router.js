// Requerimos en modulo de express
const express = require('express');
// Requerimos el middleware de autenticacion
const authenticateToken = require('../middleware/Auth-middleware.js');
// Requerimos los controladores
const paisesController = require('../controller/Paises-controller.js');
const userController = require('../controller/User-controller.js');
// Llamamos al metodo router de express para utilizarlo y establecer las rutas
const router = express.Router();

/* Establecemos las distintas rutas del server */

// Rutas de usuarios
router.post('/register', userController.register);
router.post('/login', userController.login);

// Rutas para gestionar la tabla de paises en la base de datos (protegidas)
router.get('/paises', paisesController.getPaises);
router.post('/paises', authenticateToken, paisesController.postPaises);
router.put('/paises/:id', authenticateToken, paisesController.putPaises);
router.delete('/paises/:id', authenticateToken, paisesController.deletePaises);

// Ruta raiz de la API
router.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});

// Exportamos las rutas.
module.exports = router;
