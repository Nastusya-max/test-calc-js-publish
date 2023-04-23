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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-calc/./src/styles/main.scss?");

  /***/ }),
  
  /***/ "./src/js/index.js":
  /*!*************************!*\
    !*** ./src/js/index.js ***!
    \*************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n\r\n\r\n\r\nconst formList = document.querySelector(\".form__list\");\r\nconst form = document.querySelector(\".form\");\r\nconst table = document.querySelector(\".table-container\");\r\nconst resetButton = document.querySelector(\".reset-button\");\r\n\r\nlet dataJSON = __webpack_require__(/*! ../../data/data.json */ \"./data/data.json\");\r\nlet configJSON = __webpack_require__(/*! ../../data/config.json */ \"./data/config.json\");\r\n\r\ntable.style.display = \"none\";\r\n\r\nconst getData = async (str) => {\r\n  let data;\r\n  try {\r\n    const res = await fetch(str);\r\n    if (!res.ok) {\r\n      throw new error(res.statusText);\r\n    }\r\n    data = await res.json();\r\n  } catch ({ message }) {\r\n    throw new Error(message);\r\n  }\r\n  return data;\r\n};\r\n\r\nconst inputDataForm = (formArr) => {\r\n  //где есть минимум -- ипут\r\n  const inputTypes = [\r\n    ...new Set(\r\n      formArr\r\n        .map((selectItem) => {\r\n          if (selectItem.min) return selectItem.type;\r\n        })\r\n        .filter((selectItem) => {\r\n          return selectItem !== undefined;\r\n        })\r\n    ),\r\n  ];\r\n  //где есть шаг, но нет миминимума либо есть ширина, то в селект\r\n  const selectTypes = [\r\n    ...new Set(\r\n      formArr\r\n        .map((selectItem) => {\r\n          if ((selectItem.step && !selectItem.min) || selectItem.width)\r\n            return selectItem.type;\r\n        })\r\n        .filter((selectItem) => {\r\n          return selectItem !== undefined;\r\n        })\r\n    ),\r\n  ];\r\n  //для инпута\r\n  formList.innerHTML += `${inputTypes\r\n    .map((inputItem) => {\r\n      if (inputItem) {\r\n        return `\r\n          ${formArr\r\n            .map((formItem) => {\r\n              if (inputItem === formItem.type && formItem.min) {\r\n                return `\r\n                <li class=\"form__item list-group-item\">\r\n                  <label class=\"item__label form-label\" for=\"input-${formItem.key}\">${formItem.name}: </label>\r\n                  <input class=\"item__input form-control\" name=\"${formItem.key}\" id=\"input-${formItem.key}\" type=\"number\" min=\"${formItem.min}\" max=\"${formItem.max}\" value=\"${formItem.min}\" step=\"${formItem.step}\" required>\r\n                </li>`;\r\n              }\r\n            })\r\n            .join(\"\")}`;\r\n      }\r\n    })\r\n    .join(\"\")}`;\r\n  //для селекта\r\n  formList.innerHTML += `${selectTypes\r\n    .map((selectItem) => {\r\n      if (selectItem) {\r\n        return `\r\n          <li class=\"form__item list-group-item\">\r\n            <label class=\"item__label form-label\" for=\"select-${selectItem}\">${selectItem}:</label>\r\n              <select class=\"item__select form-select\" name=\"${selectItem}\" id=\"select-${selectItem}\" required>\r\n                <option class=\"item__option\" value=\"\">--Пожалуйста, выберите опцию--</option>\r\n                ${formArr\r\n                  .map((formItem) => {\r\n                    if (selectItem === formItem.type) {\r\n                      return `<option value='${JSON.stringify({\r\n                        width: formItem.width,\r\n                        material: formItem.material,\r\n                        step: formItem.step,\r\n                        unit: formItem.unit,\r\n                        price: formItem.price,\r\n                        name: formItem.name,\r\n                      })}'>${formItem.name}</option>`;\r\n                    }\r\n                  })\r\n                  .join(\"\")}\r\n              </select>\r\n          </li>`;\r\n      }\r\n    })\r\n    .join(\"\")}`;\r\n};\r\n\r\nconst createTable = (cartArr) => {\r\n  document.querySelector(\".tbody\").innerHTML += `\r\n  <th class=\"new-item\" scope=\"row\">Новый товар</th>\r\n    ${cartArr\r\n      .map((cartItem) => {\r\n        return `\r\n      <tr class=\"table__row\">\r\n      <th class=\"table__col\" scope=\"row\">${cartItem.name}</th>\r\n      <td class=\"table__col\">${cartItem.unit}</td>\r\n      ${\r\n        cartItem.amount\r\n          ? `<td class=\"table__col\">${cartItem.amount}</td>\r\n            <td class=\"table__col price\">${cartItem.price}</td>`\r\n          : `<td class=\"table__col\">${cartItem.square}</td>\r\n            <td class=\"table__col\">${cartItem.price}</td>`\r\n      }\r\n      </tr>\r\n      `;\r\n      })\r\n      .join(\"\")}\r\n    `;\r\n\r\n  let resultPrice = Array.prototype.slice\r\n    .call(document.querySelectorAll(\".price\"))\r\n    .reduce((sum, current) => {\r\n      return sum + +current.innerText;\r\n    }, 0);\r\n\r\n  document.querySelector(\".table__prie\").innerHTML = `\r\n  <p>Итоговая сумма: ${resultPrice}</p>\r\n  `;\r\n};\r\n\r\nconst calculateMaterial = () => {\r\n  let selectMaterial = JSON.parse(document.querySelector(\"#select-list\").value);\r\n  let selectPipe = JSON.parse(document.querySelector(\"#select-pipe\").value);\r\n  let inputLength = +document.querySelector(\"#input-length\").value;\r\n  let inputWidth = +document.querySelector(\"#input-width\").value;\r\n  let selectFrame = JSON.parse(document.querySelector(\"#select-frame\").value);\r\n\r\n  let result = [];\r\n\r\n  let square = inputLength * inputWidth; //площадь изделия\r\n  let materialQuantity = Math.ceil(square / selectMaterial.width); //т.к длина листа метр, делем только на ширину. Округляем до большего целого\r\n\r\n  // добавляем данные по материалу\r\n  result.push({\r\n    name: selectMaterial.name,\r\n    unit: selectMaterial.unit,\r\n    amount: materialQuantity,\r\n    price: (materialQuantity * selectMaterial.price).toFixed(2),\r\n  });\r\n\r\n  // ищем кол-во саморезов на м/2 для выбранного материала\r\n  let screwPerSquare = configJSON.filter((item) => {\r\n    if (item.key == selectMaterial.material && item.value) {\r\n      return item;\r\n    }\r\n  })[0].value;\r\n\r\n  let countScrew = Math.ceil(square * screwPerSquare); //кол-во саморезов на всю площадь\r\n\r\n  // ищем объект самореза для цены и имени в табличке\r\n  let screw = dataJSON.filter((item) => {\r\n    if (item.type == \"fix\") {\r\n      return item;\r\n    }\r\n  })[0];\r\n\r\n  // добавляем данные по саморезам\r\n  result.push({\r\n    name: screw.name,\r\n    unit: screw.unit,\r\n    amount: countScrew,\r\n    price: (countScrew * screw.price).toFixed(2),\r\n  });\r\n\r\n  // находим количество труб через формулу:\r\n  // inputLength = 2*selectPipe.width + selectPipe.width*framesPerLength + (framesPerLength+1)*selectFrame.step\r\n\r\n  //кол-во опор по длине изделеия (+ 2 с учётом труб по контуру)\r\n  let framesPerLength =\r\n    Math.ceil(\r\n      ((2 * +selectPipe.width) / 1000 + selectFrame.step - inputLength) /\r\n        -(+selectPipe.width / 1000 + selectFrame.step)\r\n    ) + 2;\r\n\r\n  //кол-во опор по ширине изделеия (+ 2 с учётом труб по контуру)\r\n  let framesPerWidth =\r\n    Math.ceil(\r\n      ((2 * +selectPipe.width) / 1000 + selectFrame.step - inputWidth) /\r\n        -(+selectPipe.width / 1000 + selectFrame.step)\r\n    ) + 2;\r\n\r\n  let mpPerLength = framesPerLength * inputLength;\r\n  let mpPerWidth = framesPerWidth * inputWidth;\r\n\r\n  let resultMp = Math.ceil(mpPerLength + mpPerWidth);\r\n\r\n  // добавляем данные по трубам\r\n  result.push({\r\n    name: selectPipe.name,\r\n    unit: selectPipe.unit,\r\n    amount: resultMp,\r\n    price: (resultMp * selectPipe.price).toFixed(2),\r\n  });\r\n\r\n  // добавляем данные по площади изделия\r\n  result.push({\r\n    name: \"Площадь изделия\",\r\n    unit: \"м2\",\r\n    square: square,\r\n    price: (\r\n      materialQuantity * selectMaterial.price +\r\n      countScrew * screw.price +\r\n      resultMp * selectPipe.price\r\n    ).toFixed(2),\r\n  });\r\n\r\n  let squareCell = `${selectFrame.step}x${selectFrame.step}`; //площадь ячейки\r\n\r\n  // добавляем данные по площади ячейки\r\n  result.push({\r\n    name: \"Площадь ячейки\",\r\n    unit: \"м2\",\r\n    square: squareCell,\r\n    price: \"-\",\r\n  });\r\n\r\n  return result;\r\n};\r\n\r\nwindow.onload = () => {\r\n  new Promise((resolve) => {\r\n    resolve(inputDataForm(dataJSON));\r\n  }).catch((err) => {\r\n    console.log(\"Error:\", err);\r\n  });\r\n\r\n  new Promise((resolve) => {\r\n    resolve(inputDataForm(configJSON));\r\n  }).catch((err) => {\r\n    console.log(\"Error:\", err);\r\n  });\r\n  // getData(\"../../data/data.json\")\r\n  //   .then((data) => {\r\n  //     dataJSON = data;\r\n  //     new Promise((resolve) => {\r\n  //       resolve(inputDataForm(data));\r\n  //     }).catch((err) => {\r\n  //       console.log(\"Error:\", err);\r\n  //     });\r\n  //   })\r\n  //   .catch(({ message }) => console.log(\"Error:\", message));\r\n\r\n  // getData(\"../../data/config.json\")\r\n  //   .then((data) => {\r\n  //     configJSON = data;\r\n  //     new Promise((resolve) => {\r\n  //       resolve(inputDataForm(data));\r\n  //     }).catch((err) => {\r\n  //       console.log(\"Error:\", err);\r\n  //     });\r\n  //   })\r\n  //   .catch(({ message }) => console.log(\"Error:\", message));\r\n\r\n  form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    calculateMaterial();\r\n    new Promise((resolve) => {\r\n      resolve(calculateMaterial());\r\n    })\r\n      .then((result) => {\r\n        createTable(result);\r\n      })\r\n      .catch((err) => {\r\n        console.log(\"Error:\", err);\r\n      });\r\n\r\n    table.style.display = \"block\";\r\n  });\r\n\r\n  resetButton.addEventListener(\"click\", () => {\r\n    document.querySelector(\".tbody\").innerHTML = \"\";\r\n    document.querySelector(\".table__prie\").innerHTML = \"\";\r\n\r\n    table.style.display = \"none\";\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://test-calc/./src/js/index.js?");
  
  /***/ }),
  
  /***/ "./data/config.json":
  /*!**************************!*\
    !*** ./data/config.json ***!
    \**************************/
  /***/ ((module) => {
  
  eval("module.exports = JSON.parse('[{\"type\":\"size\",\"key\":\"length\",\"name\":\"Длина\",\"min\":5,\"max\":50,\"step\":0.2},{\"type\":\"size\",\"key\":\"width\",\"name\":\"Ширина\",\"min\":5,\"max\":25,\"step\":0.2},{\"type\":\"frame\",\"key\":\"light\",\"name\":\"Легкая\",\"step\":1.2},{\"type\":\"frame\",\"key\":\"standard\",\"name\":\"Стандартная\",\"step\":1},{\"type\":\"frame\",\"key\":\"strong\",\"name\":\"Усиленная\",\"step\":0.8},{\"type\":\"material\",\"key\":\"metal\",\"name\":\"Метал\"},{\"type\":\"material\",\"key\":\"plastic\",\"name\":\"Пластик\"},{\"type\":\"fix\",\"key\":\"plastic\",\"name\":\"Штук на кв. метр для пластиковых листов\",\"value\":10},{\"type\":\"fix\",\"key\":\"metal\",\"name\":\"Штук на кв. метр для металлических листов\",\"value\":5}]');\n\n//# sourceURL=webpack://test-calc/./data/config.json?");
  
  /***/ }),
  
  /***/ "./data/data.json":
  /*!************************!*\
    !*** ./data/data.json ***!
    \************************/
  /***/ ((module) => {
  
  eval("module.exports = JSON.parse('[{\"type\":\"list\",\"name\":\"Лист-1 0.5 ширина 1.8м\",\"material\":\"plastic\",\"unit\":\"м2\",\"width\":1.8,\"price\":12},{\"type\":\"list\",\"name\":\"Лист-2 0.5 ширина 1.5м\",\"material\":\"plastic\",\"unit\":\"м2\",\"width\":1.5,\"price\":15},{\"type\":\"list\",\"name\":\"Лист-3 0.5 ширина 1.2м\",\"material\":\"plastic\",\"unit\":\"м2\",\"width\":1.2,\"price\":15},{\"type\":\"list\",\"name\":\"Лист-4 0.7 ширина 1.8м\",\"material\":\"plastic\",\"unit\":\"м2\",\"width\":1.8,\"price\":17},{\"type\":\"list\",\"name\":\"Лист-5 0.7 ширина 1.5м\",\"material\":\"plastic\",\"unit\":\"м2\",\"width\":1.5,\"price\":20},{\"type\":\"list\",\"name\":\"Лист-6 0.7 ширина 1.2м\",\"material\":\"plastic\",\"unit\":\"м2\",\"width\":1.2,\"price\":22},{\"type\":\"list\",\"name\":\"Лист-7 0.3 ширина 1м\",\"material\":\"metal\",\"unit\":\"м2\",\"width\":1,\"price\":25},{\"type\":\"list\",\"name\":\"Лист-8 0.3 ширина 0.75м\",\"material\":\"metal\",\"unit\":\"м2\",\"width\":0.75,\"price\":20},{\"type\":\"list\",\"name\":\"Лист-9 0.3 ширина 0.5м\",\"material\":\"metal\",\"unit\":\"м2\",\"width\":0.5,\"price\":15},{\"type\":\"list\",\"name\":\"Лист-10 0.5 ширина 1м\",\"material\":\"metal\",\"unit\":\"м2\",\"width\":1,\"price\":30},{\"type\":\"list\",\"name\":\"Лист-11 0.5 ширина 0.75м\",\"material\":\"metal\",\"unit\":\"м2\",\"width\":0.75,\"price\":26},{\"type\":\"list\",\"name\":\"Лист-12 0.5 ширина 0.5м\",\"material\":\"metal\",\"unit\":\"м2\",\"width\":0.5,\"price\":22},{\"type\":\"pipe\",\"name\":\"Труба 20х20\",\"unit\":\"мп\",\"width\":20,\"price\":18},{\"type\":\"pipe\",\"name\":\"Труба 30х30\",\"unit\":\"мп\",\"width\":30,\"price\":18},{\"type\":\"fix\",\"name\":\"Саморез\",\"unit\":\"шт\",\"price\":1.1}]');\n\n//# sourceURL=webpack://test-calc/./data/data.json?");
  
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
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
  /******/ 	
  /******/ })()
  ;