/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updateDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDom */ \"./src/updateDom.js\");\n\n//global variables\nlet myTasks = [];\nconst form = document.getElementById('form');\n\n\n// //Factory function for task creation\n// function createTask(task, notes, priority, date) {\n//     return {task, notes, priority, date};\n// };\n\n//submit task, create object, add to array\nform.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const formData = new FormData(form);\n    const data = Object.fromEntries(formData);\n    myTasks.push(data);\n    addId();\n    addTask(data.task, data.notes, data.priority, data.date);\n});\n\n\n//adds id to tasks for future deletion and organization\nfunction addId() {\n    for (let i = 0; i < myTasks.length; i++) {\n        myTasks.forEach(task => {\n            myTasks[i].id = i;\n        });\n    };\n    console.log(myTasks);\n};\n\nfunction addTask(task, notes, priority, date) {\n    const container = document.querySelector('.content');\n    container.appendChild((0,_updateDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task, notes, priority, date));\n};\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/updateDom.js":
/*!**************************!*\
  !*** ./src/updateDom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction render(task, note, priority, date) {\n    const div = document.createElement('div');\n    const checkBox = document.createElement('input');\n    const p = document.createElement('p');\n    const dlt = document.createElement('button');\n    const edit = document.createElement('button');\n    const due = document.createElement('button');\n\n    div.classList.add('task');\n    checkBox.type = 'checkbox';\n    p.textContent = task;\n    dlt.textContent = 'Delete';\n    edit.textContent = 'Edit';\n    due.textContent = 'Change Due';\n\n    div.appendChild(checkBox);\n    div.appendChild(p);\n    div.appendChild(dlt);\n    div.appendChild(edit);\n    div.appendChild(due);\n\n    return div;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://todo-list/./src/updateDom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;