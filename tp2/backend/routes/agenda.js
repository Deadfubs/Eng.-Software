const express = require("express");
const router = express.Router();
const agendaController = require("../controllers/agenda");

router.get("/", (req, res) => {
  const id = req.query.id;
  agendaController
    .GetByID(id)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, err: err });
    });
  return;
});

router.get("/doctor", (req, res) => {
  const id = req.query.doctorID;
  agendaController
    .GetByDoctor(id)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, err: err });
    });
  return;
});

router.get("/patient", (req, res) => {
  const id = req.query.patientID;
  agendaController
    .GetByPatient(id)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, err: err });
    });
  return;
});

// gets all agendas
router.get("/all", (req, res) => {
  agendaController
    .GetAll()
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, err: err });
    });
});

// creates agenda
router.post("/", async (req, res) => {
  agendaController
    .Create(req.body)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, error: err });
    });
});

// updates agenda
router.put("/", async (req, res) => {
  agendaController
    .Update(req.body)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, error: err });
    });
});

// deletes agenda
router.delete("/", async (req, res) => {
  const id = req.query.id;
  agendaController
    .Delete(id)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, error: err });
    });
  return;
});

module.exports = router;
