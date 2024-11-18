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

/***/ "./public/dist/api.js":
/*!****************************!*\
  !*** ./public/dist/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMessages: () => (/* binding */ getMessages),\n/* harmony export */   getUsers: () => (/* binding */ getUsers),\n/* harmony export */   handleResponse: () => (/* binding */ handleResponse),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   sendMessage: () => (/* binding */ sendMessage)\n/* harmony export */ });\nfunction login(username) {\n  return fetch('/api/v1/session', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      username: username\n    })\n  }).then(handleResponse);\n}\nfunction logout() {\n  return fetch('/api/v1/session', {\n    method: 'DELETE',\n    credentials: 'include'\n  }).then(handleResponse);\n}\nfunction getMessages() {\n  return fetch('/api/v1/messages', {\n    credentials: 'include'\n  }).then(handleResponse);\n}\nfunction sendMessage(text) {\n  return fetch('/api/v1/messages', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include',\n    body: JSON.stringify({\n      text: text\n    })\n  }).then(handleResponse);\n}\nfunction getUsers() {\n  return fetch('/api/v1/users', {\n    credentials: 'include'\n  }).then(handleResponse);\n}\nfunction handleResponse(response) {\n  if (response.status === 204) {\n    return null;\n  }\n  if (!response.ok) {\n    return response.text().then(function (text) {\n      throw {\n        status: response.status,\n        message: text || response.statusText\n      };\n    });\n  }\n  return response.json()[\"catch\"](function () {\n    throw {\n      status: response.status,\n      message: \"Invalid JSON response\"\n    };\n  });\n}\n\n//# sourceURL=webpack://project2/./public/dist/api.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_dist_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/dist/api */ \"./public/dist/api.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\nvar state = {\n  currentUser: null,\n  messages: [],\n  users: [],\n  error: null,\n  polling: null\n};\nfunction render() {\n  renderUsers();\n  renderMessages();\n  renderError();\n}\nfunction renderUsers() {\n  var userList = document.getElementById('user-list');\n  userList.innerHTML = state.users.map(function (user) {\n    return \"<li><span class=\\\"user-status\\\"></span>\".concat(user, \"</li>\");\n  }).join('');\n}\nfunction renderMessages() {\n  var messageList = document.getElementById('message-list');\n  messageList.innerHTML = state.messages.map(function (msg) {\n    return \"<div><strong>\".concat(msg.user, \"</strong>: \").concat(msg.text, \"</div>\");\n  }).join('');\n}\nfunction renderError() {\n  var errorEl = document.getElementById('error');\n  errorEl.textContent = state.error || '';\n}\ndocument.getElementById('login-button').addEventListener('click', function () {\n  var username = document.getElementById('username').value;\n  document.getElementById('login-loading').hidden = false;\n  document.getElementById('login-error').textContent = '';\n  var minimumDisplayTime = new Promise(function (resolve) {\n    return setTimeout(resolve, 700);\n  });\n  Promise.all([_public_dist_api__WEBPACK_IMPORTED_MODULE_0__.login(username), minimumDisplayTime]).then(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 1),\n      data = _ref2[0];\n    state.currentUser = data.username;\n    document.getElementById('login-view').hidden = true;\n    document.getElementById('chat-app').hidden = false;\n    document.getElementById('login-loading').hidden = true;\n    startPolling();\n    render();\n  })[\"catch\"](function (error) {\n    document.getElementById('login-loading').hidden = true;\n    if (error.status === 403) {\n      document.getElementById('login-error').textContent = \"The username 'dog' is not allowed.\";\n    } else if (error.status === 400) {\n      document.getElementById('login-error').textContent = \"Invalid username. Please use only allowed characters and nums.\";\n    } else {\n      document.getElementById('login-error').textContent = \"An unexpected error occurred. Please try again.\";\n    }\n  });\n});\ndocument.getElementById('send-button').addEventListener('click', function () {\n  var text = document.getElementById('message-input').value;\n  _public_dist_api__WEBPACK_IMPORTED_MODULE_0__.sendMessage(text).then(function (message) {\n    state.messages.push(message);\n    renderMessages();\n    document.getElementById('message-input').value = '';\n    state.error = null;\n    renderError();\n  })[\"catch\"](function (error) {\n    try {\n      var errorMessage = JSON.parse(error.message).error;\n      state.error = errorMessage;\n    } catch (e) {\n      state.error = \"An unexpected error occurred.\";\n    }\n    renderError();\n  });\n});\nfunction startPolling() {\n  if (state.polling || !state.currentUser) return;\n  document.getElementById('messages-loading').hidden = false;\n  state.polling = setInterval(function () {\n    _public_dist_api__WEBPACK_IMPORTED_MODULE_0__.getMessages().then(function (data) {\n      state.messages = data.messages;\n      renderMessages();\n      document.getElementById('messages-loading').hidden = true;\n    });\n    _public_dist_api__WEBPACK_IMPORTED_MODULE_0__.getUsers().then(function (data) {\n      state.users = data.users;\n      renderUsers();\n    });\n  }, 5000);\n}\ndocument.getElementById('logout-button').addEventListener('click', function () {\n  console.log(\"Logout button clicked\");\n  if (state.polling) {\n    clearInterval(state.polling);\n    state.polling = null;\n  }\n  _public_dist_api__WEBPACK_IMPORTED_MODULE_0__.logout().then(function () {\n    state.currentUser = null;\n    state.error = null;\n    document.getElementById('login-view').hidden = false;\n    document.getElementById('chat-app').hidden = true;\n    renderError();\n  })[\"catch\"](function (error) {\n    state.error = error.message;\n    renderError();\n  });\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  document.getElementById('login-view').hidden = false;\n  document.getElementById('chat-app').hidden = true;\n});\n\n//# sourceURL=webpack://project2/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;