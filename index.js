// Write your code here!
// var descriptionInput = document.getElementsByTagName('INPUT')[1].value
document.addEventListener('DOMContentLoaded', () => {
  // your code here
  const newTask = document.getElementById('new-task-description');
  const submitButton = document.getElementsByTagName('INPUT')[1];
  const list = document.getElementById('tasks');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const listElement = document.createElement('li');
    consolelog(newTask.value)
    listElement.innerHTML = newTask.value;
    list.appendChild(listElement);
  });
});
