// database.js
module.exports = {
  default: {
    host: "localhost",
    port: 5432,
    user: "postgres", // Coloque seu usuário real aqui
    password: "sua_senha", // Coloque sua senha real aqui
    database: "camorra",
    "migrations-dir": "./migrations",
    "create-db": false
    }
};