function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim;  
  if(taskText !== ''){
    console.log('Valid task:', taskText)
  } else {
    console.log('No task entered!')
  }
}