// Comandos utilizados:
// Comando para inicializar el proyecto de node: npm init -y
// Comando para instalar express: npm i express
// Comando para instalar dotenv: npm i dotenv
// Comando para instalar mysql: npm i mysql
// Comando para instalar nodemon en modo de developer: npm i -D nodemon
// Comando para optener todas las rutas de la api: npm install express-list-endpoints

// Comandos para iniciar el proyecto:
// En modo produccion: node app.js
// En modo developer: npm run start

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
