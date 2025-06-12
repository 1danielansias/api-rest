/* * Configuración de la conexión a la base de datos MySQL.
 * Utilizamos el paquete mysql2 para conectar con la base de datos.
 */
const mysql = require("mysql2");

require("dotenv").config(); // obtener datos del fichero de entorno

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

module.exports = pool.promise();