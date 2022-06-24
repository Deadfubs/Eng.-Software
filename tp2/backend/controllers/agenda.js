const db = require("../mysql");
const { error } = require("console");
const patientController = require("./patient");
const doctorController = require("./doctor");

const GetByID = async (id) => {
  const q = `SELECT * FROM agenda WHERE ID='${id}';`;
  return await db.query(q);
};

const GetByPatient = async (id) => {
  const q = `SELECT * FROM agenda WHERE patient_ID='${id}';`;
  return await db.query(q);
};

const GetByDoctor = async (id) => {
  const q = `SELECT * FROM agenda WHERE doctor_ID='${id}';`;
  return await db.query(q);
};

const GetAll = async () => {
  const q = `SELECT * FROM agenda;`;
  return await db.query(q);
};

const Create = async (body) => {
  let { patientID, doctorID } = body;

  if (patientID == null) {
    if (body.patientEmail == null) {
      throw error("no patientID or patientEmail were given");
    }
    let patient = await patientController.GetByEmail(body.patientEmail);
    if (patient.length > 0) {
      patientID = patient[0].ID;
    } else {
      throw error("no doctor");
    }
  }

  if (doctorID == null) {
    if (body.doctorEmail == null) {
      throw error("no doctorID or doctorEmail were given");
    }
    let doctor = await doctorController.GetByEmail(body.doctorEmail);
    if (doctor.length > 0) {
      doctorID = doctor[0].ID;
    } else {
      throw error("no doctor");
    }
  }

  const q = `INSERT INTO agenda
	(date, time, doctor_ID, patient_ID)
	values ('${body.date}','${body.time}','${doctorID}', '${patientID}');`;
  const result = await db.query(q);
  console.log(result);
  return {
    id: result.insertId,
  };
};

const Update = async (body) => {
  const { patientID, doctorID } = body;
  if (patientID == null) {
    if (body.patientEmail == null) {
      throw error("no patientID or patientEmail were given");
    }
    let patient = await patientController.GetByEmail(body.patientEmail);
    patientID = patient.ID;
  }

  if (doctorID == null) {
    if (body.doctorEmail == null) {
      throw error("no doctorID or doctorEmail were given");
    }
    let doctor = await doctorController.GetByEmail(body.doctorEmail);
    doctorID = doctor.ID;
  }
  const q = `UPDATE agenda SET
	time='${body.time}',
	date='${body.date}',
	doctor_ID='${doctorID}',
	patient_ID='${patientID}'
	WHERE ID='${body.id}'`;
  return await db.query(q);
};

const Delete = async (id) => {
  const query = `DELETE FROM agenda WHERE ID='${id}'`;
  return await db.query(query);
};

module.exports = {
  Create,
  GetByID,
  GetByPatient,
  GetByDoctor,
  GetAll,
  Update,
  Delete,
};
