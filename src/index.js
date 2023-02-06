//global variables

//dummy content
let myTasks = [{
    task: 'Take out trash',
    notes: 'trash related',
    date: 'today',
    priority: 'h',
},
{
    task: 'Laundry',
    notes: 'clothes related',
    date: 'tomorrow',
    priority: 'l',
},
{
    task: 'Groceries',
    notes: 'food related',
    date: 'yesterday',
    priority: 'm',
}];
const form = document.getElementById('form');

//submit task, create object, add to array, add values, render to DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    myTasks.push(data);
    render();

});


//adds id to tasks on array and DOM for future deletion and editing
function addId() {
    myTasks.forEach((item, index) => {
        myTasks[index].id = index;
    });
    console.log(myTasks);
};


//Render the objects in myTasks to the DOM. Add event listeners to buttons
function render() {
    const container = document.querySelector('.content');
    container.innerHTML = "";
    myTasks.map((tasks, index) => {
        const div = document.createElement('div');
        const checkBox = document.createElement('input');
        const p = document.createElement('p');
        const dlt = document.createElement('button');
        const edit = document.createElement('button');
        const due = document.createElement('button');
    
        div.classList.add('task');
        checkBox.type = 'checkbox';
        p.textContent = myTasks[index].task;
        dlt.textContent = 'Delete';
        dlt.classList.add('delete');
        edit.textContent = 'Edit';
        due.textContent = 'Change Due';
        div.setAttribute('id', index);

        if (myTasks[index].priority == 'h') {
            div.classList.add('high-priority');
        } else if (myTasks[index].priority == 'm') {
            div.classList.add('medium-priority');
        } else if (myTasks[index].priority == 'l') {
            div.classList.add('low-priority');
        };

        
        div.appendChild(checkBox);
        div.appendChild(p);
        div.appendChild(dlt);
        div.appendChild(edit);
        div.appendChild(due);
        
        container.appendChild(div);
        
    });

    //Event listeners for created buttons
    addId();
    deleteTasks();
    taskCompleted();
    
    return container;
}


//Delete button event listener
function deleteTasks() {
    const matches = document.querySelectorAll('.delete');
    matches.forEach((item, index) => {;
        item.addEventListener('click', () => {
            myTasks.splice(index, 1);
            console.log(myTasks);
            render();
        })
    }) 
};


//Add task completed class when checkbox is checked
function taskCompleted() {
    const matches = document.querySelectorAll('input[type=checkbox]');
    console.log(matches)
    matches.forEach((item, index) => {
        item.addEventListener('click', () => {
            document.getElementById(index).classList.toggle('checked');
        })
    })
}
 
//generate dummy content to DOM
render();
taskCompleted();