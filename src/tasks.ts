const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput=document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
description : string;
isCompleted : boolean;

};
const tasks: Task[] =loadTasks();

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}
tasks.forEach(renderTask);
taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
      const task:Task={
          description:taskDescription,
          isCompleted:false,
      }
    // add task to list
    // render tasks
    addtask(task);
    renderTask(task);
    // update local storage
    updateStorage()
    formInput.value = '';
    return;
  }
  alert('Please enter a task description');
});
function addtask(task:Task):void{
   
    tasks.push(task);
    //  console.log(tasks);
    
}
function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = task.isCompleted;
  
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });
  
  taskElement.textContent = task.description;
  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}