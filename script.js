function addTask() {
    const taskDescription = document.getElementById("taskInput").value;
    const assignee = document.getElementById("assigneeInput").value;

    // Create a task object
    const task = { description: taskDescription, assignee: assignee };

    // Get existing tasks from local storage or initialize an empty array
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task to the array
    existingTasks.push(task);

    // Save the updated tasks array to local storage
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    // Clear input fields
    document.getElementById("taskInput").value = "";
    document.getElementById("assigneeInput").value = "";

    // Refresh the task list
    displayTasks();
}

// Display tasks on the page
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    existingTasks.forEach(task => {
        const taskItem = document.createElement("div");
        taskItem.className = "task";
        taskItem.innerHTML = `<strong>Task Description:</strong> ${task.description}<br><strong>Assignee:</strong> ${task.assignee}`;
        taskList.appendChild(taskItem);
    });
}