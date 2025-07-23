const taskform = document.querySelector<HTMLFormElement>('.form');
const forminput=document.querySelector<HTMLInputElement>('.form-input');

const tasklist = document.querySelector<HTMLUListElement>('.list');

type Task = {
description : string;
isCompleted : boolean;

};
const tasks: Task[] = [];

 function createtask(event:SubmitEvent){
    event.preventDefault();
    const taskDiscription = forminput?.value;
    if (taskDiscription) {
console.log(taskDiscription);

        forminput.value = '';
return
    }
alert('Please enter a task description');

}
taskform?.addEventListener('submit',createtask);