// Requerimos el módulo bcrypt para encriptar contraseñas
const bcrypt = require('bcrypt');
// Requerimos el módulo jsonwebtoken para generar tokens JWT
const jwt = require('jsonwebtoken');
// Requerimos la conexión a la base de datos
const conexion = require('../database/BBDD.js');

// Método para registrar un nuevo usuario
exports.register = async (req, res) => {
    // El compo de roll tiene que tener uno de estol valores (admin o user). Por defecto si no le pasas nada es user
    const { nombre, apellidos, email, password, rol } = req.body;
    // Validaciones de entrada
    if (!nombre || !apellidos || !email || !password) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insertar el nuevo usuario en la base de datos
    const query = 'INSERT INTO usuarios (nombre, apellidos, email, password, rol) VALUES (?, ?, ?, ?, ?)';
    conexion.query(query, [nombre, apellidos, email, hashedPassword, rol], (err, result) => {
        if (err) {
            return res.status(500).send('Error al registrar el usuario.');
        }
        res.status(201).send('Usuario registrado correctamente.');
    });
};

// Método para iniciar sesión (login)
exports.login = async (req, res) => {
    const { email, password } = req.body;
    // Validación de entrada
    if (!email || !password) {
        return res.status(400).send('Email y contraseña son obligatorios.');
    }
    // Buscar al usuario en la base de datos por email
    const query = 'SELECT * FROM usuarios WHERE email = ?';
    conexion.query(query, [email], async (err, rows) => {
        if (err) {
            return res.status(500).send('Error al verificar el usuario.');
        }
        if (rows.length === 0) {
            return res.status(400).send('Email o contraseña incorrectos.');
        }
        const user = rows[0];
        // Comparar la contraseña ingresada con la almacenada (encriptada)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Email o contraseña incorrectos.');
        }
        // Crear un token JWT con los datos del usuario
        const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Devolver el token al cliente
        res.json({ token });
    });
};
