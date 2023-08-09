require("dotenv").config();
const path = require("path");

module.exports = {
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
};
// module.exports = {
//   client: "pg",
//   connection: {
//     user: "r4iko17",
//     password: "W5XucYDe6bFQ",
//     host: "ep-holy-breeze-31505336.us-east-2.aws.neon.tech",
//     port: 5432,
//     database: "danidb23",
//     ssl: {
//       rejectUnauthorized: true, // Configuración opcional para certificados autofirmados
//     },
//   },
//   migrations: {
//     directory: path.join(__dirname, "database", "migrations"),
//   },

//   // ...
// };
