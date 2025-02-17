// Requerimos en modulo de express
const express = require('express');
// Creamos el objeto del servidor
const app = express();

// Configuramos el servidor para que admita datos enviados por forms
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Configuramos la variables de entorno configurando nuestro fichero de .env
require('dotenv').config({path:'.env'});

// Establecemos las rutas requiriendo el fichero de router
app.use(require('./router/Router.js'));

// Server running
app.listen(process.env.PORT, ()=>{
    console.log('Servidor escuchando por el puerto: ' + process.env.PORT);
});
