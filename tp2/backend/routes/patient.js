const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patient");

// gets patient
router.get("/", (req, res) => {
  const id = req.query.id;
  const email = req.query.email;

  if (id != null) {
    patientController
      .GetByID(id)
      .then((data) => {
        res.status(200).send({ code: 200, data: data });
      })
      .catch((err) => {
        res.status(400).send({ code: 400, err: err });
      });
    return;
  } else if (email != null) {
    patientController
      .GetByEmail(email)
      .then((data) => {
        res.status(200).send({ code: 200, data: data });
      })
      .catch((err) => {
        res.status(400).send({ code: 400, err: err });
      });
  } else {
    res.status(400).send({ code: 400, err: "no parameters given" });
  }
});

// gets all patients
router.get("/all", async (req, res) => {
  patientController
    .GetAll()
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, err: err });
    });
});

// creates patient
router.post("/", async (req, res) => {
  patientController
    .Create(req.body)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, error: err });
    });
});

// updates patient
router.put("/", async (req, res) => {
  patientController
    .Update(req.body)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, error: err });
    });
});

// deletes patient
router.delete("/", async (req, res) => {
  const id = req.query.id;
  const email = req.query.email;
  try {
    if (id != null) {
      await patientController.Delete(id);
      res.status(200).send({ code: 200 });
      return;
    }

    if (email != null) {
      const patient = await patientController.GetByEmail(email);
      await patientController.Delete(patient.ID);
      res.status(200).send({ code: 200 });
      return;
    }

    // if none of the parameters were given fails
    res.status(400).send({ code: 400 });
  } catch (err) {
    console.log(err);
    res.status(400).send({ code: 400, err: err });
  }
});

module.exports = router;
