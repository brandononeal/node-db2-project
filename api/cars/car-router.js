const express = require("express");
const db = require("../../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/:id", (req, res) => [
  db("cars")
    .where(req.params)
    .first()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    }),
]);

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then((ids) => {
      return db("cars").where({ id: ids[0] });
    })
    .then((newCar) => {
      res.status(201).json(newCar[0]);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
