function addTask() {
  async () => {
    const task = {
      title: title,
      date: date,
      description: description,
    };
    const response = await axios.post(
      "http://localhost:4000/api/task/add",
      task
    );
    console.log(response);
  };
}
addTask();

function getTasks() {
  async () => {
    const response = await axios.get(
      "http://localhost:4000/api/task/tasks",
      task
    );
    console.log(response);
  };
}
getTasks();

function handleDelete() {
  async () => {
    const response = await axios.delete(
      "http://localhost:4000/api/task/delete/:id",
      task
    );
    console.log(response);
  };
}

handleDelete();
