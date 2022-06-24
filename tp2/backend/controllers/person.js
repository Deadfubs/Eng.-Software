const db = require("../mysql");
const { error } = require("console");

const GetByID = async (id) => {
  return await db.query(`SELECT * FROM person WHERE ID = '${id}'`);
};

const GetByEmail = async (email) => {
  return await db.query(`SELECT * FROM person WHERE email = '${email}'`);
};

const Create = async (body) => {
  const { name, email, password, phone } = body;
  const existingUser = await GetByEmail(email);

  if (existingUser.length > 0) {
    throw error("user already exists");
  }
  const query = `INSERT INTO person (name, email, password, phone) values ('${name}', '${email}', '${password}', '${phone}')`;
  const result = await db.query(query);
  return {
    id: result.insertId,
  };
};

const Update = async (body) => {
  const { id, name, email, password, phone } = body;
  const query = `UPDATE person
	SET name='${name}', email='${email}', password='${password}', phone='${phone}'
	WHERE ID='${id}'`;
  return await db.query(query);
};

const Delete = async (id) => {
  const query = `DELETE FROM person WHERE ID='${id}'`;
  return await db.query(query);
};

module.exports = {
  Create,
  GetByID,
  GetByEmail,
  Update,
  Delete,
};
