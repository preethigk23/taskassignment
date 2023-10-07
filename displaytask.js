// Display all tasks on the "tasks.html" page
document.addEventListener("DOMContentLoaded", () => {
    const allTasksList = document.getElementById("allTasks");
    allTasksList.innerHTML = "";

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    existingTasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `${index + 1}. Task Description: ${task.description} <br> Assignee: ${task.assignee} <button onclick="removeTask(${index})">Remove</button>`;
        allTasksList.appendChild(taskItem);
    });
});

function removeTask(index) {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Remove the task at the specified index
    existingTasks.splice(index, 1);

    // Save the updated tasks array to local storage
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    // Refresh the task list
    displayTasks();
}
