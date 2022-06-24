const express = require("express");
const router = express.Router();
const personController = require("../controllers/person");
const patientController = require("../controllers/patient");
const workerController = require("../controllers/worker");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const persons = await personController.GetByEmail(email);
  if (persons.length == 0 || persons[0] == null) {
    res.status(400).send({ code: 400, error: "not found" });
  }
  const p = persons[0];
  if (p.password == password) {
    const workers = await workerController.GetByID(p.ID);
    if (workers.length > 0) {
      res.status(200).send({ code: 200, role: "worker", id: p.ID });
      exists = true;
      return;
    }
    const patients = await patientController.GetByID(p.ID);
    if (patients.length > 0) {
      res.status(200).send({ code: 200, role: "patient", id: p.ID });
      exists = true;
      return;
    }
  }

  if (exists === false) {
    res.status(400).send({ code: 400, error: "not found" });
  }
});

module.exports = router;
