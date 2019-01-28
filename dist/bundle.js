/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n/* harmony import */ var _rendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendering */ \"./src/rendering.js\");\n\n\nvar fifteen = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, null]];\n\nvar moveTile = function moveTile(gameState, nextY, nextX) {\n  gameState[xyOfEmptyCell.y][xyOfEmptyCell.x] = gameState[nextY][nextX];\n  gameState[nextY][nextX];\n\n  if (Object(_rendering__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(gameState) && gameState.every(function (inner, y) {\n    return inner.every(function (el, x) {\n      return el === fifteen[y][x];\n    });\n  })) {\n    alert('You won!');\n    startGame();\n  }\n};\n\nvar startGame = function startGame() {\n  var gameState = shuffleState(fifteen);\n  Object(_rendering__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(gameState);\n  document.addEventListener('keydown', function (e) {\n    var xyOfEmptyCell = Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getXY\"])(gameState);\n\n    if (e.keyCode === 38) {\n      // up arrow\n      if (xyOfEmptyCell.y === 3) return;\n      var nextY = xyOfEmptyCell.y + 1;\n      var nextX = xyOfEmptyCell.x;\n      moveTile(gameState, nextY, nextX);\n    } else if (e.keyCode === 40) {\n      // down arrow\n      if (xyOfEmptyCell.y === 0) return;\n\n      var _nextY = xyOfEmptyCell.y - 1;\n\n      var _nextX = xyOfEmptyCell.x;\n      moveTile(gameState, _nextY, _nextX);\n    } else if (e.keyCode === 37) {\n      // left arrow\n      if (xyOfEmptyCell.x === 3) return;\n      var _nextY2 = xyOfEmptyCell.y;\n\n      var _nextX2 = xyOfEmptyCell.x + 1;\n\n      moveTile(gameState, _nextY2, _nextX2);\n    } else if (e.keyCode === 40) {\n      // right arrow\n      if (xyOfEmptyCell.x === 0) return;\n      var _nextY3 = xyOfEmptyCell.y;\n\n      var _nextX3 = xyOfEmptyCell.x - 1;\n\n      moveTile(gameState, _nextY3, _nextX3);\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/rendering.js":
/*!**************************!*\
  !*** ./src/rendering.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderGame; });\nvar renderRow = function renderRow(arr) {\n  return \"<div class=\\\"square\\\">\".concat(arr.join('</div><div class=\"square\">'), \"</div>\");\n};\n\nvar renderRows = function renderRows(arr) {\n  return arr.reduce(function (acc, current) {\n    return acc + renderRow(current);\n  }, '');\n};\n\nfunction renderGame(shuffledArray) {\n  var domNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.getElementById('app');\n  var rows = renderRows(shuffledArray).replace('<div class=\"square\"></div>', '<div class=\"square empty\"></div>');\n  domNode.innerHTML = rows;\n}\n;\n\n//# sourceURL=webpack:///./src/rendering.js?");

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! exports provided: getXY, shuffleState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getXY\", function() { return getXY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffleState\", function() { return shuffleState; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar getXY = function getXY(source) {\n  var y = source.findIndex(function (arr) {\n    return arr.includes(null);\n  });\n  var x = source[y].findIndex(function (x) {\n    return x === null;\n  });\n  return {\n    y: y,\n    x: x\n  };\n};\nvar shuffleState = function shuffleState(state) {\n  var shuffleArr = function shuffleArr(inputArr) {\n    var arr = _toConsumableArray(inputArr);\n\n    for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x) {\n      ;\n    }\n\n    return arr;\n  };\n\n  var flattenArr = state.reduce(function (acc, val) {\n    return [].concat(_toConsumableArray(acc), _toConsumableArray(val));\n  }, []);\n  var shuffledArr = shuffleArr(flattenArr);\n  return [shuffledArr.slice(0, 4), shuffledArr.slice(4, 8), shuffledArr.slice(8, 12), shuffledArr.slice(12, 16)];\n};\n\n//# sourceURL=webpack:///./src/state.js?");

/***/ })

/******/ });