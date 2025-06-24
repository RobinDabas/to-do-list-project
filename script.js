const { createElement } = require("react");

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if(taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    document.getElementById('taskInput').appendChild(li);
    taskInput.value = '';
  }
}
