const Sequelize = require("sequelize");
//insert DB NAME HERE
const db = new Sequelize("postgres://localhost:5432/DBNAMEHERE", {
  logging: false
});

module.exports = db;
