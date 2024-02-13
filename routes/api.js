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
    const { title, isCompleted } = req.body;
    await db(
      `INSERT INTO tasks (title, completed) VALUES ('${title}', '${isCompleted}')`
    );

    const results = await db("SELECT * FROM tasks ORDER BY id ASC;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/todos/:id", async (req, res) => {
  try {
    await db(`UPDATE tasks SET completed = '1' WHERE id = ${req.params.id};`);

    res.send({ message: "updated" });
  } catch (err) {
    console.error(err);
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
    await db(`DELETE FROM tasks WHERE id = ${req.params.id};`);

    res.send({ message: "deleted" });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
