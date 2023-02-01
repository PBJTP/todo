import render from "./updateDom";
//global variables
let myTasks = [];
const form = document.getElementById('form');


// //Factory function for task creation
// function createTask(task, notes, priority, date) {
//     return {task, notes, priority, date};
// };

//submit task, create object, add to array
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    myTasks.push(data);
    addId();
    addTask(data.task, data.notes, data.priority, data.date);
});


//adds id to tasks for future deletion and organization
function addId() {
    for (let i = 0; i < myTasks.length; i++) {
        myTasks.forEach(task => {
            myTasks[i].id = i;
        });
    };
    console.log(myTasks);
};

function addTask(task, notes, priority, date) {
    const container = document.querySelector('.content');
    container.appendChild(render(task, notes, priority, date));
};