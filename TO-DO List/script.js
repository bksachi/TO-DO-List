document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const pushButton = document.getElementById("push");
  const tasksContainer = document.getElementById("tasks");

  pushButton.addEventListener("click", () => {
    if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
      <span>${taskInput.value}</span>
      <button class="delete">X</button>
    `;

    tasksContainer.appendChild(task);
    taskInput.value = "";

    task.querySelector(".delete").addEventListener("click", () => {
      task.remove();
    });
  });
});
