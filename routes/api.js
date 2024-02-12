var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", (req, res) => {
  res.send("Welcome to the API");
});

router.get("/todos", async (req, res) => {
  try {
    // Send back the full list of items
    const results = await db("SELECT * FROM tasks ORDER BY id ASC;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/todos", async (req, res) => {
  try {
    // The request's body is available in req.body
    // If the query is successfull you should send back the full list of items
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

router.put("/todos/:todo_id", (req, res) => {
  // The request's body is available in req.body
  // URL params are available in req.params
  // If the query is successfull you should send back the full list of items
  // Add your code here
  //
});

router.delete("/todos/:todo_id", (req, res) => {
  // URL params are available in req.params
  // Add your code here
  //
});

module.exports = router;
