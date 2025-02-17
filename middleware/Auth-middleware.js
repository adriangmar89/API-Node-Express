const jwt = require('jsonwebtoken');

// Middleware para proteger rutas
const authenticateToken = (req, res, next) => {
    // Obtener el token del encabezado de autorizacion
    const authHeader = req.headers['authorization'];
    // Extrae el token despues de "Bearer"
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send('Acceso no autorizado.');
    }
    // Verificar el token usando el secreto JWT
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            // En caso de error (token invalido o expirado)
            return res.status(403).send('Token no válido o expirado.');
        }
        // Si el token es valido, se adjunta la informacion del usuario al objeto 'req'
        req.user = user;
        // Llamamos a la siguiente funcion middleware
        next();
    });
};

module.exports = authenticateToken;
