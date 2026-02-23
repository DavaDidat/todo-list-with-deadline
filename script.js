const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const deadlineInput = document.getElementById("deadline-input");

let todos = [];

const savedTodos = localStorage.getItem("todos");
if (savedTodos) {
  todos = JSON.parse(savedTodos);
}

render();

function render() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    if (todo.completed) {
      li.classList.add("completed");
    }

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("task-left");

    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = todo.text;
    // Klik pada teks untuk toggle selesai
    span.style.cursor = "pointer";
    span.addEventListener("click", function () {
      toggleComplete(index);
    });

    const deadlineText = document.createElement("small");
    deadlineText.classList.add("task-deadline");

    if (todo.deadline) {
      deadlineText.textContent = formatDeadline(todo.deadline);
    }
    if (!todo.completed && todo.deadline) {
      const deadlineDate = new Date(todo.deadline);
      if (deadlineDate < new Date()) {
        li.classList.add("overdue");
      }
    }

    leftDiv.appendChild(span);
    leftDiv.appendChild(deadlineText);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      deleteTodo(index);
    });

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // Animasi masuk
    requestAnimationFrame(() => {
      li.classList.add("show");
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  if (input.value.trim() === "") return;

  todos.push({
    text: input.value,
    completed: false,
    deadline: deadlineInput.value,
  });

  input.value = "";
  deadlineInput.value = "";
  render();
}

function deleteTodo(index) {
  const li = list.children[index];
  if (li) {
    li.classList.remove("show");
    li.classList.add("fade-out");
    setTimeout(() => {
      todos.splice(index, 1);
      render();
    }, 300);
  }
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  render();
}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

function formatDeadline(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const diff = date - now;
  const oneDay = 24 * 60 * 60 * 1000;

  if (diff < oneDay && diff > 0) {
    return (
      "Besok " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }
  return date.toLocaleString();
}
