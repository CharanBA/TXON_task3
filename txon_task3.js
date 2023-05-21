var tasks = [];

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value.trim();

  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    displayTasks();
  }
}

function displayTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var taskItem = document.createElement("div");
    taskItem.classList.add("task");

    var radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "taskRadio";
    radioButton.value = i;
    radioButton.onclick = function() {
      selectTask(this.value);
    };

    var taskText = document.createElement("span");
    taskText.textContent = tasks[i];

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
      deleteTask(this.parentElement.querySelector("input[type='radio']").value);
    };

    taskItem.appendChild(radioButton);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }
}

function selectTask(index) {
  var selectedTask = tasks[index];
  alert("Selected task: " + selectedTask);
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function filterTasks() {
  var taskList = document.getElementById("taskList");
  var filterInput = prompt("Enter a keyword to filter tasks:");

  if (filterInput !== null) {
    var filteredTasks = tasks.filter(function(task) {
      return task.toLowerCase().includes(filterInput.toLowerCase());
    });

    taskList.innerHTML = "";

    for (var i = 0; i < filteredTasks.length; i++) {
      var taskItem = document.createElement("div");
      taskItem.classList.add("task");
      taskItem.textContent = filteredTasks[i];
      taskList.appendChild(taskItem);
    }
  }
}
