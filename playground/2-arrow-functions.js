const tasks = {
  tasks: [
    {
      text: "Grocery Shopping",
      completed: true,
    },
    {
      text: "Clean Yard",
      completed: false,
    },
    {
      text: "Film Course",
      completed: false,
    },
  ],
  getTasksToDo() {
    let uncompletedTask = this.tasks.filter((task) => task.completed === false);
    return uncompletedTask;
  },
};
console.log(tasks.getTasksToDo());
