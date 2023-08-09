require("dotenv").config();
const path = require("path");

module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST,
      port: process.env.DB_PORT,
      database: process.env.PGDATABASE,
      ssl: {
        rejectUnauthorized: true, // Configuración opcional para certificados autofirmados
      },
    },
    migrations: {
      directory: path.join(__dirname, "database", "migrations"),
    },
  },
  // ...
};
