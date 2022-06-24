const db = require("../mysql");
const personController = require("./person");

const GetByID = async (id) => {
  const query = `SELECT * FROM worker w
	INNER JOIN person p
	WHERE p.ID = '${id}' and w.ID='${id}';`;
  return await db.query(query);
};

const GetByEmail = async (email) => {
  const query = `SELECT * FROM worker w INNER JOIN person p where p.email = '${email}';`;
  return await db.query(query);
};

const GetAll = async () => {
  const q = `SELECT * FROM worker;`;
  const workers = await db.query(q);
  const r = workers.map(async (w) => {
    const workerDetails = await personController.GetByID(w.ID);
    return {
      ...w,
      ...workerDetails[0],
    };
  });
  return Promise.all(r, (results) => {
    return results;
  });
};

const Create = async (body) => {
  const { contract_date, salary } = body;
  const result = await personController.Create(body);
  const query = `INSERT INTO worker (ID, contract_date, salary) values ('${result.id}','${contract_date}','${salary}');`;
  await db.query(query);
  return result;
};

const Update = async (body) => {
  const { id, name, email, password, phone, contract_date, salary } = body;
  const person = await personController.Update({
    id,
    name,
    email,
    password,
    phone,
  });
  const query = `UPDATE worker
	SET contract_date='${contract_date}', salary='${salary}'
	WHERE ID='${id}'`;
  return await db.query(query);
};

const Delete = async (id) => {
  const query = `DELETE FROM worker WHERE ID='${id}'`;
  await db.query(query);

  return await personController.Delete(id);
};

module.exports = {
  Create,
  GetByID,
  GetByEmail,
  GetAll,
  Update,
  Delete,
};
