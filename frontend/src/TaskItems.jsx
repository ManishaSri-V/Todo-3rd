import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function TaskItems({ task, tasks, setTasks }) {
  const [currentTask, setCurrentTask] = useState({
    _id: task ? task._id : "",
    title: task ? task.title : "",
    description: task ? task.description : "",
  });

  const [editmode, setEditMode] = useState(false);

  const updateTask = async () => {
    const response = await axios.put(
      `http://localhost:5000/api/task/update/${currentTask._id}`,
      currentTask
    );
    console.log(response);
    setTasks(
      tasks.map((item) => (item._id === currentTask._id ? currentTask : item))
    );
    setEditMode(false);
  };
  const deleteTask = async () => {
    const response = await axios.delete(
      `http://localhost:5000/api/task/delete/${currentTask._id}`
    );
    if (response.data.success) {
      setTasks(tasks.filter((item) => item._id !== currentTask._id));
    }
  };

  const handleSubmit = () => {
    if (!editmode) {
      setEditMode(true);
    } else {
      updateTask();
    }
  };

  const handleDelete = () => {
    deleteTask();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentTask({ ...task, [e.taget.name]: e.target.value });
  };
  return (
    <div className="task">
      {editmode ? (
        <>
          <div className="task-key">
            Title: &nbsp;
            <input
              type="text"
              name="title"
              value={currentTask.title}
              onChange={handleChange}
            ></input>
          </div>

          <div className="task-key">
            Description: &nbsp;
            <input
              type="text"
              name="description"
              value={currentTask.description}
              onChange={handleChange}
            ></input>
          </div>
        </>
      ) : (
        <>
          <div>
            <span className="task-key">Title:</span> {task.title}
          </div>

          <div>
            <span className="task-key">Description:</span> {task.description}
          </div>
        </>
      )}
      <button onClick={handleSubmit}>{editmode ? "Submit" : "Edit"}</button>{" "}
      &nbsp;
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItems;
