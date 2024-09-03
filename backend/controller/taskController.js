const Task = require("../model/taskModel");
const { generateToken } = require("../config/auth");

exports.createTask = async (req, res) => {
  const { title, date, description } = req.body;
  try {
    const newTask = new Task({
      title: title,
      date: date,
      description: description,
    });

    await newTask.save();
    const token = generateToken;

    res.status(200).json({
      success: true,
      data: newTask,
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ isDeleted: false });

    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, body);
    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id, { isDeleted: true });
    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
