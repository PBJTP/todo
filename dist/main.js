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

eval("//global variables\nlet myTasks = [{\n    task: 'Take out trash',\n    notes: 'trash related',\n    date: 'today',\n    priority: 'h',\n},\n{\n    task: 'Laundry',\n    notes: 'clothes related',\n    date: 'tomorrow',\n    priority: 'l',\n},\n{\n    task: 'Groceries',\n    notes: 'food related',\n    date: 'yesterday',\n    priority: 'm',\n}];\nconst form = document.getElementById('form');\n\n//submit task, create object, add to array\nform.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const formData = new FormData(form);\n    const data = Object.fromEntries(formData);\n    myTasks.push(data);\n    addId();\n    render();\n});\n\n\n//adds id to tasks for future deletion and organization\nfunction addId() {\n    for (let i = 0; i < myTasks.length; i++) {\n        myTasks.forEach(task => {\n            myTasks[i].id = i;\n        });\n    };\n    console.log(myTasks);\n};\n\nfunction render() {\n    const container = document.querySelector('.content');\n    container.innerHTML = \"\";\n    myTasks.map((tasks, index) => {\n        console.log(tasks);\n        console.log(index);\n        const div = document.createElement('div');\n        const checkBox = document.createElement('input');\n        const p = document.createElement('p');\n        const dlt = document.createElement('button');\n        const edit = document.createElement('button');\n        const due = document.createElement('button');\n    \n        div.classList.add('task');\n        checkBox.type = 'checkbox';\n        p.textContent = myTasks[index].task;\n        dlt.textContent = 'Delete';\n        dlt.classList.add('delete');\n        edit.textContent = 'Edit';\n        due.textContent = 'Change Due';\n\n        if (myTasks[index].priority == 'h') {\n            div.classList.add('high-priority');\n        } else if (myTasks[index].priority == 'm') {\n            div.classList.add('medium-priority');\n        } else if (myTasks[index].priority == 'l') {\n            div.classList.add('low-priority');\n        };\n\n        \n        div.appendChild(checkBox);\n        div.appendChild(p);\n        div.appendChild(dlt);\n        div.appendChild(edit);\n        div.appendChild(due);\n        \n        container.appendChild(div);\n        \n    });\n\n    deleteTasks();\n    \n    return container;\n}\n\nfunction deleteTasks() {\n    const matches = document.querySelectorAll('.delete');\n    matches.forEach((item, index) => {\n        item.addEventListener('click', () => {\n            myTasks.splice(index, 1);\n            console.log(myTasks);\n            render();\n        })\n    }) \n};\n\nrender();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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