//global variables
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

//submit task, create object, add to array
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    myTasks.push(data);
    addId();
    render();
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

function render() {
    const container = document.querySelector('.content');
    container.innerHTML = "";
    myTasks.map((tasks, index) => {
        console.log(tasks);
        console.log(index);
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

    deleteTasks();
    
    return container;
}

function deleteTasks() {
    const matches = document.querySelectorAll('.delete');
    matches.forEach((item, index) => {
        item.addEventListener('click', () => {
            myTasks.splice(index, 1);
            console.log(myTasks);
            render();
        })
    }) 
};

render();