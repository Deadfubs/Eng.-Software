const db = require("../mysql");
const workerController = require("./worker");

const GetByID = async (id) => {
  const query = `SELECT * FROM doctor d
	INNER JOIN worker w
	INNER JOIN person p
	WHERE p.ID = '${id}'
	AND w.ID = '${id}'
	AND d.ID = '${id}';`;
  return await db.query(query);
};
const GetByEmail = async (email) => {
  const query = `SELECT * FROM doctor INNER JOIN worker INNER JOIN person p where p.email = '${email}';`;
  return await db.query(query);
};

const Create = async (body) => {
  const result = await workerController.Create(body);
  const { specialty, crm } = body;
  const q = `INSERT INTO doctor (ID, specialty, crm) values('${result.id}','${specialty}','${crm}');`;
  await db.query(q);
  return result;
};

const Update = async (body) => {
  await workerController.Update(body);
  const { id, specialty, crm } = body;
  const q = `UPDATE doctor
	SET specialty='${specialty}', crm='${crm}'
	WHERE ID='${id}'`;
  return await db.query(q);
};

const Delete = async function (id) {
  const query = `DELETE FROM doctor WHERE ID='${id}'`;
  await db.query(query);
  return await workerController.Delete(id);
};

module.exports = {
  GetByID,
  GetByEmail,
  Create,
  Update,
  Delete,
};
