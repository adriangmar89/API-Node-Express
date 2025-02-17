// Requerimos el modulo necesario.
const mysql = require('mysql');

// Creamos la conexion con la base de datos.
const conexion = mysql.createConnection({
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE
});

// Conprobamos la conexion a la base de datos.
conexion.connect((error)=>{
    if(error){
        console.log('El error de la conexion es: ' + error);
        return;
    }
    console.log('¡Conectado a la base de datos MySQL!');
});

// Exportamos la conexion a la base de datos.
module.exports = conexion;
