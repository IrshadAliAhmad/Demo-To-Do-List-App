const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const emptyMsg = document.getElementById("empty-msg");

function updateEmptyMsg() {
  emptyMsg.style.display = listContainer.children.length ? "none" : "block";
}

function addTask() {
  const task = inputBox.value.trim();

  if (task === "") {
    alert("Please write Something!");
    return;
  }

  const tasks = Array.from(listContainer.children).map((li) =>
    li.textContent.trim()
  );
  if (tasks.includes(task)) {
    alert("This task already exists!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  let span = document.createElement("span");
  span.innerHTML = '<img src="images/cross.svg" alt="delete">';
  li.appendChild(span);

  listContainer.appendChild(li);
  inputBox.value = "";

  saveData();
  updateEmptyMsg();
}

// Add task on Enter key
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Mark complete / Delete
listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.parentElement.remove();
      saveData();
      updateEmptyMsg();
    }
  },
  false
);

// Local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
  updateEmptyMsg();
}

showTask();
