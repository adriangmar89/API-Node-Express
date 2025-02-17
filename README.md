# API Node.js Express con MySQL

Esta es una API RESTful construida con Node.js, Express y MySQL. El objetivo de esta API es gestionar usuarios y países, con protección mediante autenticación de token para algunas rutas.

## Comandos configurados

- **`npm install`**: Instala las dependencias necesarias para el proyecto.
- **`npm audit fix`**: Revisa y corrige vulnerabilidades de seguridad en las dependencias.
- **`node app.js`**: Ejecuta la aplicación en modo producción.
- **`npm run start`**: Ejecuta la aplicación en modo desarrollo.

## Rutas de la API

### Rutas de usuarios

- **POST /register**: Registra un nuevo usuario.
- **POST /login**: Inicia sesión con un usuario registrado y obtiene un token JWT.

### Rutas de países (Protegidas)

- **GET /paises**: Obtiene una lista de países almacenados en la base de datos.
- **POST /paises**: Crea un nuevo país en la base de datos. (Requiere autenticación)
- **PUT /paises/:id**: Actualiza un país existente. (Requiere autenticación)
- **DELETE /paises/:id**: Elimina un país de la base de datos. (Requiere autenticación)

### Ruta raíz

- **GET /**: Muestra un mensaje de bienvenida a la API.

## Requisitos

- **Node.js**: Asegúrate de tener Node.js instalado en tu máquina.
- **MySQL**: Necesitarás tener MySQL configurado para ejecutar la base de datos. Puedes crear la base de datos utilizando el archivo `bbdd_api.sql`.

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone <url_del_repositorio>
    cd <nombre_del_proyecto>
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Configura tu base de datos utilizando el archivo `bbdd_api.sql`.

4. Configura las variables de entorno en el archivo `.env`. Asegúrate de incluir al menos la clave secreta para JWT y las credenciales de MySQL.

5. Inicia el servidor en modo desarrollo:

    ```bash
    npm run start
    ```

## Uso

Una vez que el servidor esté en ejecución, puedes interactuar con la API utilizando herramientas como **Postman** o **cURL** para hacer peticiones HTTP.

## Contribución

Las contribuciones son bienvenidas. Si tienes alguna mejora o corrección, por favor abre un *pull request*.
