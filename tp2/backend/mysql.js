const mysql = require("mysql2/promise");

var config = {
  connectionLimit: 8000,
  user: "root",
  password: "admin",
  database: "virtual-med-db",
  host: "localhost",
  port: "3306",
};

const query = async (q, params) => {
  const connection = await mysql.createConnection(config);
  const [results] = await connection.execute(q, params);

  return results;
};

module.exports = {
  query,
};
