import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskItems from "./TaskItems";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchAllTasks = async () => {
    const response = await axios.get("http://localhost:5000/api/task/tasks");
    setTasks(response.data.data);
  };

  console.log("list of tasks", tasks);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <h2>All Tasks</h2>
      <div className="flexbox">
        {tasks.map((task, _) => {
          return <TaskItems task={task} setTasks={setTasks} tasks={tasks} />;
        })}
      </div>
    </div>
  );
}

export default TaskList;
