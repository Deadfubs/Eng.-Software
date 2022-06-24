const express = require("express");
const router = express.Router();
const addressController = require("../controllers/address");

// gets patient
router.get("/", (req, res) => {
  addressController
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
  addressController
    .Create(req.body)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ code: 400, err: err });
    });
});

// updates patient
router.put("/", async (req, res) => {
  addressController
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
  try {
    if (id != null) {
      await addressController.Delete(id);
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
