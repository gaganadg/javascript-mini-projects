const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark complete
    li.addEventListener("click", () => {
        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            li.firstChild.textContent = "✔ " + taskText;
        } else {
            li.firstChild.textContent = taskText;
        }
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
