const express = require("express");
const router = express.Router();

const workerController = require("../controllers/worker");

// gets worker
router.get("/", (req, res) => {
  const id = req.query.id;
  const email = req.query.email;

  if (id != null) {
    workerController
      .GetByID(id)
      .then((data) => {
        res.status(200).send({ code: 200, data: data });
      })
      .catch((err) => {
        res.status(400).send({ code: 400, err: err });
      });
    return;
  } else if (email != null) {
    workerController
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

// gets all workers
router.get("/all", async (req, res) => {
  workerController
    .GetAll()
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, err: err });
    });
});

// creates worker
router.post("/", async (req, res) => {
  workerController
    .Create(req.body)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, error: err });
    });
});

// updates worker
router.put("/", async (req, res) => {
  workerController
    .Update(req.body)
    .then((data) => {
      res.status(200).send({ code: 200, data: data });
    })
    .catch((err) => {
      res.status(400).send({ code: 400, error: err });
    });
});

// deletes worker
router.delete("/", async (req, res) => {
  const id = req.query.id;
  const email = req.query.email;
  try {
    if (id != null) {
      await workerController.Delete(id);
      res.status(200).send({ code: 200 });
      return;
    }

    if (email != null) {
      const worker = await workerController.GetByEmail(email);
      await workerController.Delete(worker.ID);
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
