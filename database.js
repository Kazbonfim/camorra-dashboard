// database.js
module.exports = {
  default: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "3207",
    database: "camorra",
    "migrations-dir": "./migrations",
    "create-db": false
    }
};

// Para usar: npx node-pg-migrate up, ou down
// up: fará a criação dos dados do db
// down: fará a exclusão de todos os dados do db