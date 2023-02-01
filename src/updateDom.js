function render(task, note, priority, date) {
    const div = document.createElement('div');
    const checkBox = document.createElement('input');
    const p = document.createElement('p');
    const dlt = document.createElement('button');
    const edit = document.createElement('button');
    const due = document.createElement('button');

    div.classList.add('task');
    checkBox.type = 'checkbox';
    p.textContent = task;
    dlt.textContent = 'Delete';
    edit.textContent = 'Edit';
    due.textContent = 'Change Due';

    div.appendChild(checkBox);
    div.appendChild(p);
    div.appendChild(dlt);
    div.appendChild(edit);
    div.appendChild(due);

    return div;
}

export default render;