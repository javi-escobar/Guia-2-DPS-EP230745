"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [numero1, setNumero1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [numero2, setNumero2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [resultado, setResultado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const sumar = ()=>{\n        const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);\n        setResultado(resultadoSuma);\n    };\n    const restar = ()=>{\n        const resultadoResta = parseFloat(numero1) - parseFloat(numero2);\n        setResultado(resultadoResta);\n    };\n    const multiplicar = ()=>{\n        const resultadoMulti = parseFloat(numero1) * parseFloat(numero2);\n        setResultado(resultadoMulti);\n    };\n    const dividir = ()=>{\n        if (numero1 == 0 || numero2 == 0) {\n            setResultado(\"No se puede dividir 0\");\n        } else {\n            const resultadoDiv = parseFloat(numero1) / parseFloat(numero2);\n            setResultado(resultadoDiv);\n        }\n    };\n    const potencia = ()=>{\n        const resultadoPot = parseFloat(numero1) ^ parseFloat(numero2);\n        setResultado(resultadoPot);\n    };\n    const raiz = ()=>{\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Ingresa un n\\xfamero entero:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputnum),\n                    type: \"number\",\n                    value: numero1,\n                    onChange: (e)=>setNumero1(e.target.value),\n                    min: 1\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n            lineNumber: 36,\n            columnNumber: 5\n        }, this);\n        const resultadoRaiz = Math.sqrt(parseFloat(numero1));\n        setResultado(resultadoRaiz);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().calculadora),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().numeros),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                            children: \"N\\xfamero 1:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputnum),\n                            type: \"number\",\n                            value: numero1,\n                            onChange: (e)=>setNumero1(e.target.value),\n                            min: 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().numeros),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                            children: \"N\\xfamero 2:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputnum),\n                            type: \"number\",\n                            value: numero2,\n                            onChange: (e)=>setNumero2(e.target.value),\n                            min: 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                    onClick: sumar,\n                                    children: \"Sumar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                    onClick: restar,\n                                    children: \"Restar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                    onClick: multiplicar,\n                                    children: \"Multiplicar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                    onClick: dividir,\n                                    children: \"Dividir\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                    onClick: potencia,\n                                    children: \"Potencia\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                    onClick: dividir,\n                                    children: \"Ra\\xedz Cuadrada\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().resultado),\n                    children: [\n                        \"El resultado es: \",\n                        resultado\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"t4eB+vfGuHd5gwz23xiqPI5WkVU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JELDhEQUFDcUI7b0NBQU9mLFdBQVd2QixnRUFBYTtvQ0FBRXVDLFNBQVN4Qjs4Q0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUd4RCw4REFBQ0s7b0JBQUlHLFdBQVd2QixtRUFBZ0I7O3dCQUFFO3dCQUFrQk07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RDtHQXJFd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW251bWVybzEsIHNldE51bWVybzFdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbnVtZXJvMiwgc2V0TnVtZXJvMl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZXN1bHRhZG8sIHNldFJlc3VsdGFkb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBzdW1hciA9ICgpID0+IHtcbiAgICBjb25zdCByZXN1bHRhZG9TdW1hID0gcGFyc2VGbG9hdChudW1lcm8xKSArIHBhcnNlRmxvYXQobnVtZXJvMik7XG4gICAgc2V0UmVzdWx0YWRvKHJlc3VsdGFkb1N1bWEpO1xuICB9XG4gIGNvbnN0IHJlc3RhciA9ICgpID0+IHtcbiAgICBjb25zdCByZXN1bHRhZG9SZXN0YSA9IHBhcnNlRmxvYXQobnVtZXJvMSkgLSBwYXJzZUZsb2F0KG51bWVybzIpO1xuICAgIHNldFJlc3VsdGFkbyhyZXN1bHRhZG9SZXN0YSk7XG4gIH1cbiAgY29uc3QgbXVsdGlwbGljYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0YWRvTXVsdGkgPSBwYXJzZUZsb2F0KG51bWVybzEpICogcGFyc2VGbG9hdChudW1lcm8yKTtcbiAgICBzZXRSZXN1bHRhZG8ocmVzdWx0YWRvTXVsdGkpO1xuICB9XG4gIGNvbnN0IGRpdmlkaXIgPSAoKSA9PiB7XG4gICAgaWYobnVtZXJvMSA9PSAwIHx8IG51bWVybzIgPT0gMCkge1xuICAgICAgc2V0UmVzdWx0YWRvKFwiTm8gc2UgcHVlZGUgZGl2aWRpciAwXCIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgcmVzdWx0YWRvRGl2ID0gcGFyc2VGbG9hdChudW1lcm8xKSAvIHBhcnNlRmxvYXQobnVtZXJvMik7XG4gICAgICBzZXRSZXN1bHRhZG8ocmVzdWx0YWRvRGl2KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcG90ZW5jaWEgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0YWRvUG90ID0gcGFyc2VGbG9hdChudW1lcm8xKSBeIHBhcnNlRmxvYXQobnVtZXJvMik7XG4gICAgc2V0UmVzdWx0YWRvKHJlc3VsdGFkb1BvdCk7XG4gIH1cbiAgY29uc3QgcmFpeiA9ICgpID0+IHtcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPkluZ3Jlc2EgdW4gbsO6bWVybyBlbnRlcm86PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dG51bX0gdHlwZT1cIm51bWJlclwiIHZhbHVlPXtudW1lcm8xfSBvbkNoYW5nZT17KGUpID0+IHNldE51bWVybzEoZS50YXJnZXQudmFsdWUpfSBtaW49ezF9Lz5cbiAgICA8L2Rpdj5cbiAgICBjb25zdCByZXN1bHRhZG9SYWl6ID0gTWF0aC5zcXJ0KHBhcnNlRmxvYXQobnVtZXJvMSkpO1xuICAgIHNldFJlc3VsdGFkbyhyZXN1bHRhZG9SYWl6KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsY3VsYWRvcmF9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm51bWVyb3N9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5Ow7ptZXJvIDE6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRudW19IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17bnVtZXJvMX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROdW1lcm8xKGUudGFyZ2V0LnZhbHVlKX0gbWluPXsxfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm51bWVyb3N9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5Ow7ptZXJvIDI6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRudW19IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17bnVtZXJvMn0gb25DaGFuZ2U9eyhlKSA9PiBzZXROdW1lcm8yKGUudGFyZ2V0LnZhbHVlKX0gbWluPXsxfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17c3VtYXJ9PlN1bWFyPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17cmVzdGFyfT5SZXN0YXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e211bHRpcGxpY2FyfT5NdWx0aXBsaWNhcjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2RpdmlkaXJ9PkRpdmlkaXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3BvdGVuY2lhfT5Qb3RlbmNpYTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2RpdmlkaXJ9PlJhw616IEN1YWRyYWRhPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdGFkb30+RWwgcmVzdWx0YWRvIGVzOiB7cmVzdWx0YWRvfTwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwibnVtZXJvMSIsInNldE51bWVybzEiLCJudW1lcm8yIiwic2V0TnVtZXJvMiIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsInN1bWFyIiwicmVzdWx0YWRvU3VtYSIsInBhcnNlRmxvYXQiLCJyZXN0YXIiLCJyZXN1bHRhZG9SZXN0YSIsIm11bHRpcGxpY2FyIiwicmVzdWx0YWRvTXVsdGkiLCJkaXZpZGlyIiwicmVzdWx0YWRvRGl2IiwicG90ZW5jaWEiLCJyZXN1bHRhZG9Qb3QiLCJyYWl6IiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsImNsYXNzTmFtZSIsImlucHV0bnVtIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibWluIiwicmVzdWx0YWRvUmFpeiIsIk1hdGgiLCJzcXJ0IiwibWFpbiIsImNhbGN1bGFkb3JhIiwibnVtZXJvcyIsInRleHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});