let submit = document.getElementById("submit");
let tasks = document.getElementById("content");
let task = document.getElementById("task");
let countTasks = 0;

submit.addEventListener("click", function() {
  if (task.value <= 0) task.placeholder = "Preencha aqui...";
  else createTask(task);
});

tasks.addEventListener("dblclick", function(event) {
  event.target.parentNode.classList.add("fadeOut");
});

function createTask() {
  let taskList = document.getElementsByClassName("tasks");
  taskList[0].appendChild(insertTask(task)); // Como estou usando uma UL preciso passar o index da lista
  clearInput();
}

function insertTask(task) {
  let div = document.createElement("div");
  div.setAttribute("class", "task");
  div.append(createCheckBox());
  div.append(createLabel(task));
  return div;
}

function createCheckBox() {
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", countTasks);
  return checkbox;
}

function createLabel(task) {
  let label = document.createElement("label");
  label.classList.add("item");
  label.setAttribute("for", countTasks);
  label.textContent = task.value;
  countTasks++;
  return label;
}

function getInitialDate() {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "America/Sao_Paulo"
  };
  return new Intl.DateTimeFormat("pt-BR", options).format(date);
}

function clearInput() {
  task.value = "";
}
