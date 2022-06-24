const db = require("../mysql");
const { error } = require("console");
const personController = require("../controllers/person");

const GetAll = async () => {
  return await db.query(`SELECT * FROM address_bank;`);
};

const Create = async (body) => {
  const { personID, zip_code, address, district, city, state } = body;
  let id = personID;
  if (personID == null) {
    const { personEmail } = body;
    const user = await personController.GetByEmail(personEmail);
    console.log(user);
    if (user.length == 0) {
      throw error("user doens't exist");
    }

    id = user[0].ID;
  }

  const query = `INSERT INTO address_bank (zip_code, address, district, city, state, person_ID)
	values ('${zip_code}', '${address}', '${district}', '${city}', '${state}', '${id}');`;
  const result = await db.query(query);
  return {
    id: result.insertId,
  };
};

const Update = async (body) => {
  const { id, personID, zip_code, address, district, city, state } = body;
  const existingUser = await personController.GetByID(personID);
  if (existingUser.length == 0) {
    throw error("user doesn't exist");
  }

  const query = `UPDATE address_bank
	set zip_code='${zip_code}',
		address='${address}',
		district='${district}',
		city='${city}',
		state='${state}'
		WHERE ID='${id}';`;
  return await db.query(query);
};

const Delete = async (id) => {
  const query = `DELETE FROM address_bank WHERE ID='${id}';`;
  return await db.query(query);
};

module.exports = {
  GetAll,
  Create,
  Update,
  Delete,
};
