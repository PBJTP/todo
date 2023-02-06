import {myTasks} from './index.js';

function render() {
    console.log(myTasks);
    const container = document.querySelector('.content');
    container.innerHTML = "";
    for (let i = 0; i < myTasks.length; i++) {
        const div = document.createElement('div');
        const checkBox = document.createElement('input');
        const p = document.createElement('p');
        const dlt = document.createElement('button');
        const edit = document.createElement('button');
        const due = document.createElement('button');
    
        div.classList.add('task');
        checkBox.type = 'checkbox';
        p.textContent = myTasks[i].task;
        dlt.textContent = 'Delete';
        edit.textContent = 'Edit';
        due.textContent = 'Change Due';
    
        div.appendChild(checkBox);
        div.appendChild(p);
        div.appendChild(dlt);
        div.appendChild(edit);
        div.appendChild(due);
    
        container.appendChild(div);
    };

    return container;
}


export default render;