import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handledescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const createTask = async () => {
    const task = {
      title: title,
      description: description,
    };

    const response = await axios.post(
      "http://localhost:5000/api/task/add",
      task
    );
    console.log(response);
  };
  return (
    <div>
      <h1>Create Task</h1>
      <form className="form" action="post" onSubmit={createTask}>
        <label>
          {" "}
          Title:
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          ></input>
        </label>

        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handledescriptionChange}
            required
          ></input>
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
