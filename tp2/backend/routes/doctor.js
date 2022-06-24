const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctor");

router.post("/", (req, res) => {
  doctorController
    .Create(req.body)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, err: err });
    });
});

router.get("/", (req, res) => {
  const id = req.query.id;
  const email = req.query.email;

  if (id != null) {
    doctorController
      .GetByID(id)
      .then((data) => {
        res.status(200).send({ code: 200, data: data });
      })
      .catch((err) => {
        res.status(400).send({ code: 400, err: err });
      });
    return;
  } else if (email != null) {
    doctorController
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

router.post("/", (req, res) => {
  doctorController
    .Create(req.body)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, err: err });
    });
});

// updates doctor
router.put("/", async (req, res) => {
  doctorController
    .Update(req.body)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, error: err });
    });
});

// deletes doctor
router.delete("/", async (req, res) => {
  const id = req.query.id;
  const email = req.query.email;
  try {
    if (id != null) {
      await doctorController.Delete(id);
      res.status(200).send({ code: 200 });
      return;
    }

    if (email != null) {
      const patient = await doctorController.GetByEmail(email);
      await doctorController.Delete(patient.ID);
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
