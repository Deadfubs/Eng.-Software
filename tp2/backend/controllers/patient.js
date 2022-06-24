const db = require("../mysql");
const personController = require("./person");

const GetByID = async (id) => {
  query = `SELECT * FROM patient pat
	INNER JOIN person per
	WHERE pat.ID='${id}' AND per.ID='${id}';`;
  return await db.query(query);
};

const GetByEmail = async (email) => {
  query = `SELECT * FROM patient INNER JOIN person p where p.email = '${email}';`;
  return await db.query(query);
};

const GetAll = async () => {
  const q = `SELECT * FROM patient;`;
  const patients = await db.query(q);
  const r = patients.map(async (p) => {
    const patientDetails = await personController.GetByID(p.ID);
    return {
      ...p,
      ...patientDetails[0],
    };
  });

  return Promise.all(r, (results) => {
    return results;
  });
};

const Create = async (body) => {
  const { name, email, password, phone, weight, height, blood_type } = body;
  person = await personController.Create({ name, email, password, phone });

  query = `INSERT INTO patient (ID, weight, height, blood_type) values ('${person.id}','${weight}','${height}','${blood_type}');`;
  const result = await db.query(query);
  return {
    id: person.id,
  };
};

const Update = async (body) => {
  const { id, name, email, password, phone, weight, height, blood_type } = body;
  const person = await personController.Update({
    id,
    name,
    email,
    password,
    phone,
  });
  const query = `UPDATE patient
	SET weight='${weight}', height='${height}', blood_type='${blood_type}'
	WHERE ID='${id}'`;
  return await db.query(query);
};

const Delete = async (id) => {
  const query = `DELETE FROM patient WHERE ID='${id}'`;
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
