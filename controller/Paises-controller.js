// Requerimos la conexion con la base de datos
const conexion = require('../database/BBDD.js');

// Metodo get de paises
exports.getPaises = async (req, res)=>{
    // Ejecutamos la consulta sql.
    conexion.query('SELECT * FROM paises', (err, rows)=>{
        // Comprobamos que no de error la consulta.
        if(err) return res.send(err);
        // Devolvemos la respuesta en formato json.
        res.json(rows);
    });
}

// Metodo post de paises
exports.postPaises = async (req, res)=>{
    const { nombre, poblacion } = req.body;
    // Validación de datos
    if (!nombre || nombre.trim() === '') {
        return res.status(400).send('El nombre del país es obligatorio.');
    }
    if (!poblacion || isNaN(poblacion) || poblacion <= 0) {
        return res.status(400).send('La población debe ser un número válido mayor a 0.');
    }
    // Ejecutamos la instrucion sql de insercion de datos.
    conexion.query('INSERT INTO paises SET ?', [req.body], (err, rows)=>{
        // Comprobamos que no de error la insercion de datos.
        if(err) return res.send(err);
        // Devolvemos un mensaje de confirmacion.
        res.send('Pais insertado.');
    });
}

// Metodo put de paises
exports.putPaises = async (req, res)=>{
    const { nombre, poblacion } = req.body;
    const { id } = req.params;
    // Validación de datos
    if (!id || isNaN(id) || id <= 0) {
        return res.status(400).send('El ID del país es inválido.');
    }
    if (nombre && nombre.trim() === '') {
        return res.status(400).send('El nombre del país no puede estar vacío.');
    }
    if (poblacion && (isNaN(poblacion) || poblacion <= 0)) {
        return res.status(400).send('La población debe ser un número válido mayor a 0.');
    }
    // Ejecutamos la instrucion sql de actualizacion de los datos.
    // Es muy inportante el orden de los parametros que se le pasan.
    conexion.query('UPDATE paises SET ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
        // Comprobamos que no de error la actualizacion de los datos.
        if(err) return res.send(err);
        // Devolvemos un mensaje de confirmacion.
        res.send('Pais actualizado.');
    });
}

// Metodo delete de paises
exports.deletePaises = async (req, res)=>{
    const { id } = req.params;
    // Validación de datos
    if (!id || isNaN(id) || id <= 0) {
        return res.status(400).send('El ID del país es inválido.');
    }
    // Ejecutamos la instrucion sql de rorrado de datos.
    conexion.query('DELETE FROM paises WHERE id = ?', [req.params.id], (err, rows)=>{
        // Comprobamos que no de error el borrado de los datos.
        if(err) return res.send(err);
        // Devolvemos un mensaje de confirmacion.
        res.send('Pais borrado.');
    });
}
