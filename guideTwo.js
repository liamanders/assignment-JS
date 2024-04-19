// TASK MANAGER

let taskId = 1;

// taskManager object
const taskManager = {
  // fill up with properties, see instructions

  // the user should be able to decide whatever task the user wants to enter

  // property that should contain all tasks
  tasks: [],
  addTask: function () {
    // write some logic just like any regular function
    // what do you think a task should contain?
    // and what are the requirements for a task?

    // a task should have:
    // - id
    // - description
    // - something to show if it is complete or not

    // define the task object
    const task = {
      id: taskId++,
      description: "",
      // you need to change the empty string to a variable, probably the variable where you store the input user
      complete: false,
    };

    console.log("task id: " + task.id);
  },
};

taskManager.addTask();
