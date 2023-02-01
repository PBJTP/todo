let myTasks = [];

const form = document.getElementById('form');

function createTask(task, notes, priority, date) {
    return {task, notes, priority, date};
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    myTasks.push(data);
    console.table(myTasks);
    console.table(myTasks[0].notes);
});

