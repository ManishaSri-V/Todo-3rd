const express = require("express");
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

const router = express.Router();

router.post("/add", createTask);
router.get("/tasks", getAllTasks);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
