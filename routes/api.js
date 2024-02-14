var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", (req, res) => {
  res.send("Welcome to the API");
});

router.get("/todos", async (req, res) => {
  try {
    const results = await db("SELECT * FROM tasks ORDER BY id ASC;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/todos", async (req, res) => {
  try {
    const { title } = req.body;
    await db(`INSERT INTO tasks (title, completed) VALUES ('${title}', false)`);

    const results = await db("SELECT * FROM tasks ORDER BY id ASC;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/todos/:id", async (req, res) => {
  try {
    await db(`UPDATE tasks SET completed = true WHERE id = ${req.params.id};`);

    const results = await db("SELECT * FROM tasks ORDER BY id ASC;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
    await db(`DELETE FROM tasks WHERE id = ${req.params.id};`);

    const results = await db("SELECT * FROM tasks ORDER BY id ASC;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
