

Manual para Manejo de Proyectos Node.js

1. Instalación de Dependencias - npm install

Este comando se utiliza para instalar todas las dependencias necesarias que están especificadas en el archivo package.json de tu proyecto. Esto asegura que tu entorno esté listo para ejecutar la aplicación y que todas las bibliotecas necesarias estén presentes.

Uso:
npm install

¿Qué hace?
- Descarga e instala las dependencias (paquetes) listadas en el archivo package.json.
- Crea una carpeta llamada node_modules donde se almacenarán todas las dependencias instaladas.

Cuando usarlo:
- Siempre que clones un proyecto nuevo o cuando agregues nuevas dependencias a tu package.json (como cuando ejecutas npm install <package-name>).

---

2. Auditoría de Seguridad - npm audit fix

Este comando se usa para revisar la seguridad de las dependencias instaladas y corregir posibles vulnerabilidades encontradas en ellas. npm audit muestra las vulnerabilidades conocidas, y npm audit fix intenta resolverlas automáticamente.

Uso:
npm audit fix

¿Qué hace?
- Analiza las dependencias instaladas en tu proyecto.
- Identifica y arregla (cuando es posible) las vulnerabilidades de seguridad en esas dependencias.

Cuando usarlo:
- Después de ejecutar npm install para asegurar que todas las dependencias estén actualizadas y sean seguras.
- Si ves vulnerabilidades reportadas al ejecutar npm install o npm audit.

---

3. Modo Producción - node app.js

Este comando se usa para ejecutar la aplicación en un entorno de producción. En general, este modo ejecuta la aplicación Node.js sin las configuraciones o herramientas de desarrollo activas.

Uso:
node app.js

¿Qué hace?
- Inicia la aplicación Node.js directamente usando el archivo app.js (o el archivo de entrada especificado).
- Ejecuta el código de la aplicación en el entorno de producción, sin herramientas de desarrollo como el hot-reloading.

Cuando usarlo:
- Cuando estés listo para ejecutar tu aplicación en un entorno de producción, por ejemplo, en un servidor o en un entorno de despliegue.

---

4. Modo Desarrollo - npm run start

Este comando se usa para iniciar la aplicación en modo de desarrollo. Generalmente, el comando npm run start se configura en el archivo package.json para iniciar la aplicación con características adicionales como hot-reloading, debuggers y otras herramientas de desarrollo.

Uso:
npm run start

¿Qué hace?
- Ejecuta el script definido en el archivo package.json bajo la sección "scripts". Por lo general, se configura para iniciar el servidor con herramientas como nodemon, que reinicia automáticamente el servidor cuando detecta cambios en el código fuente.
- Utiliza configuraciones especiales de desarrollo como la carga dinámica de módulos o el monitoreo de archivos.

Cuando usarlo:
- Durante el desarrollo activo de tu aplicación. Esto facilita la prueba de cambios sin tener que reiniciar manualmente el servidor.

---

Resumen de Comandos

| Comando                | Descripción                                        |
|------------------------|----------------------------------------------------|
| npm install            | Instala las dependencias del proyecto.             |
| npm audit fix          | Revisa y corrige vulnerabilidades de seguridad.    |
| node app.js            | Ejecuta la aplicación en modo producción.          |
| npm run start          | Ejecuta la aplicación en modo desarrollo.          |

---

Consejos adicionales:
- Entorno de desarrollo: Asegúrate de usar herramientas como nodemon o webpack para facilitar el desarrollo en modo local.
- Entorno de producción: Siempre que vayas a desplegar una aplicación, asegúrate de haber ejecutado npm install --production para instalar solo las dependencias necesarias en producción (sin herramientas de desarrollo).

Si tienes alguna otra pregunta o necesitas ayuda adicional, no dudes en preguntar. ¡Buena suerte con tu proyecto!
