// TASK MANAGER
let taskId = 1;
let userName = "";
// taskManager object

const taskManager = {
  tasks: [],
  addTask: function () {
    const taskDescription = prompt ("Please add task description: ");

    if (taskDescription.trim() === "") {
      alert("Task description can not be empty!");
      this.addTask();
    };

    const task = {
      id: taskId++,
      description: taskDescription,
      complete: false,
    };

    this.tasks.push(task);
    alert("Task added!");

    menu();
  },

  completeTask: function () {
    const taskIdToComplete = parseInt(prompt("Enter the task ID to mark as complete:"));
    const taskToComplete = this.tasks.find(task => task.id === taskIdToComplete);
    if (!taskToComplete) {
      alert("Task not found!");
      menu();
      return;
    }
    taskToComplete.complete = true;
    alert("Task marked as complete!");
    menu();
  },

  listAllTasks: function () {
    let message = "";
    this.tasks.forEach((task) => {
      message += "Id: " + task.id + " Description: " + task.description + " Complete: " + task.complete + "\n";
    });
    alert(message);
    menu();
  },

  listCompletedTasks: function () {
    const completedTasks = this.tasks.filter(task => task.complete);
    let message = "";
    completedTasks.forEach((task) => {
      message += "Id: " + task.id + " Description: " + task.description + "\n";
    });
    if (completedTasks.length === 0) {
      message = "No completed tasks found.";
    }
    alert(message);
    menu();
  },
};

// function for asking the user to fill in their name
// The reason I used (While) loop is because the if loop worked fine after inputing numbers
// after getting the error message. So I had to find another way.
function askUserName() {
  let name = prompt("Please enter your name: ");
   while (!name || !isNaN(name)) {
    name = prompt( "Error: Invalid input. Name cannot be empty or numeric.");
  }
  return name;
};
// menu function
function menu() {
  // This is added so that after adding a task and returning to menu
  // the user doesn't need to input their name again.
  if (!userName) {
    userName = askUserName();
  };
  
  const choice = parseInt(
    prompt(
      "Welcome, " + userName + "!\nSelect a choice:\n1) Add Task\n2) Complete task\n3) List all tasks\n4) List completed tasks\n5) Exit"
    )
  );
  switch (choice) {
    case 1:
      taskManager.addTask();
      break;
    case 2:
       taskManager.completeTask();
      break;
    case 3:
      taskManager.listAllTasks();
      break;
    case 4:
      taskManager.listCompletedTasks();
      break;
    case 5:
      alert("Goodbye!");
      break;
    default:
      alert("Invalid choice. Please enter a number between 1-5.");
      menu();
      break;
  };
};

menu();