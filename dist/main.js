/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//global variables\n\n//dummy content\nlet myTasks = [{\n    task: 'Take out trash',\n    notes: 'trash related',\n    date: 'today',\n    priority: 'h',\n},\n{\n    task: 'Laundry',\n    notes: 'clothes related',\n    date: 'tomorrow',\n    priority: 'l',\n},\n{\n    task: 'Groceries',\n    notes: 'food related',\n    date: 'yesterday',\n    priority: 'm',\n}];\nconst form = document.getElementById('form');\n\n//submit task, create object, add to array, add values, render to DOM\nform.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const formData = new FormData(form);\n    const data = Object.fromEntries(formData);\n    myTasks.push(data);\n    render();\n\n});\n\n\n//adds id to tasks on array and DOM for future deletion and editing\nfunction addId() {\n    myTasks.forEach((item, index) => {\n        myTasks[index].id = index;\n    });\n};\n\n\n//Render the objects in myTasks to the DOM. Add event listeners to buttons\nfunction render() {\n    const container = document.querySelector('.content');\n    container.innerHTML = \"\";\n    myTasks.map((tasks, index) => {\n        const div = document.createElement('div');\n        const checkBox = document.createElement('input');\n        const p = document.createElement('p');\n        const dlt = document.createElement('button');\n        const edit = document.createElement('button');\n        const due = document.createElement('button');\n    \n        div.classList.add('task');\n        checkBox.type = 'checkbox';\n        p.textContent = myTasks[index].task;\n        dlt.textContent = 'Delete';\n        dlt.classList.add('delete');\n        edit.textContent = 'Edit';\n        due.textContent = 'Change Due';\n        div.setAttribute('id', index);\n\n        if (myTasks[index].priority == 'h') {\n            div.classList.add('high-priority');\n        } else if (myTasks[index].priority == 'm') {\n            div.classList.add('medium-priority');\n        } else if (myTasks[index].priority == 'l') {\n            div.classList.add('low-priority');\n        };\n        \n        div.appendChild(checkBox);\n        div.appendChild(p);\n        div.appendChild(dlt);\n        div.appendChild(edit);\n        div.appendChild(due);\n        \n        container.appendChild(div);\n\n        if (myTasks[index].completed === true) {\n            document.getElementById(index).classList.add('checked');\n            const div = document.getElementById(index)\n            div.querySelector('input[type=checkbox]').checked = true;\n        };\n        \n    });\n\n    //Event listeners for created buttons\n    addId();\n    deleteTasks();\n    taskCompleted();\n    \n    return container;\n}\n\n\n//Delete button event listener\nfunction deleteTasks() {\n    const matches = document.querySelectorAll('.delete');\n    matches.forEach((item, index) => {;\n        item.addEventListener('click', () => {\n            myTasks.splice(index, 1);\n            render();\n        })\n    }) \n};\n\n\n//Add task completed class when checkbox is checked\nfunction taskCompleted() {\n    const matches = document.querySelectorAll('input[type=checkbox]');\n    matches.forEach((item, index) => {\n        item.addEventListener('change', () => {\n            if (matches[index].checked) {\n                document.getElementById(index).classList.add('checked');\n                myTasks[index].completed = true;\n            } else {\n                document.getElementById(index).classList.remove('checked');\n                myTasks[index].completed = false;\n            }\n        })\n    })\n}\n \n//generate dummy content to DOM\nrender();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;