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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [numero1, setNumero1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [numero2, setNumero2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [resultado, setResultado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const sumar = ()=>{\n        const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);\n        setResultado(\"Resultado de la suma: \" + parseFloat({\n            resultadoSuma\n        }));\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: resultado && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().resultado),\n                children: resultado\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                lineNumber: 13,\n                columnNumber: 22\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, this);\n    };\n    const restar = ()=>{\n        const resultadoResta = parseFloat(numero1) - parseFloat(numero2);\n        setResultado(\"Resultado de la resta: \" + parseFloat({\n            resultadoResta\n        }));\n        {\n            resultado && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().resultado),\n                children: resultado\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                lineNumber: 18,\n                columnNumber: 19\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().calculadora),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().numeros),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                            children: \"N\\xfamero 1:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputnum),\n                            type: \"number\",\n                            value: numero1,\n                            onChange: (e)=>setNumero1(e.target.value),\n                            min: 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().numeros),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                            children: \"N\\xfamero 2:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputnum),\n                            type: \"number\",\n                            value: numero2,\n                            onChange: (e)=>setNumero2(e.target.value),\n                            min: 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                            onClick: sumar,\n                            children: \"Sumar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                            onClick: restar,\n                            children: \"Restar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexi\\\\OneDrive\\\\Documentos\\\\Ciclo 03 2024\\\\DPS\\\\Lab\\\\Guia2_EP230745\\\\ejemplo3\\\\app\\\\page.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"t4eB+vfGuHd5gwz23xiqPI5WkVU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ007QUFFeEIsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1TLFFBQVE7UUFDWixNQUFNQyxnQkFBZ0JDLFdBQVdSLFdBQVdRLFdBQVdOO1FBQ3ZERyxhQUFhLDJCQUEyQkcsV0FBVztZQUFDRDtRQUFhO3NCQUNqRSw4REFBQ0U7c0JBQUdMLDJCQUFhLDhEQUFDTTtnQkFBSUMsV0FBV2IsbUVBQWdCOzBCQUFHTTs7Ozs7Ozs7Ozs7SUFDdEQ7SUFDQSxNQUFNUSxTQUFTO1FBQ2IsTUFBTUMsaUJBQWlCTCxXQUFXUixXQUFXUSxXQUFXTjtRQUN4REcsYUFBYSw0QkFBNEJHLFdBQVc7WUFBQ0s7UUFBYztRQUNuRTtZQUFDVCwyQkFBYSw4REFBQ007Z0JBQUlDLFdBQVdiLG1FQUFnQjswQkFBR007Ozs7OztRQUFnQjtJQUNuRTtJQUVBLHFCQUNFLDhEQUFDVTtRQUFLSCxXQUFXYiw4REFBVztrQkFDMUIsNEVBQUNZO1lBQUlDLFdBQVdiLHFFQUFrQjs7OEJBQ2hDLDhEQUFDWTtvQkFBSUMsV0FBV2IsaUVBQWM7O3NDQUM1Qiw4REFBQ21COzRCQUFNTixXQUFXYiw4REFBVztzQ0FBRTs7Ozs7O3NDQUMvQiw4REFBQ3FCOzRCQUFNUixXQUFXYixrRUFBZTs0QkFBRXVCLE1BQUs7NEJBQVNDLE9BQU90Qjs0QkFBU3VCLFVBQVUsQ0FBQ0MsSUFBTXZCLFdBQVd1QixFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUdJLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFckgsOERBQUNoQjtvQkFBSUMsV0FBV2IsaUVBQWM7O3NDQUM1Qiw4REFBQ21COzRCQUFNTixXQUFXYiw4REFBVztzQ0FBRTs7Ozs7O3NDQUMvQiw4REFBQ3FCOzRCQUFNUixXQUFXYixrRUFBZTs0QkFBRXVCLE1BQUs7NEJBQVNDLE9BQU9wQjs0QkFBU3FCLFVBQVUsQ0FBQ0MsSUFBTXJCLFdBQVdxQixFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUdJLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFckgsOERBQUNoQjs7c0NBQ0MsOERBQUNpQjs0QkFBT2hCLFdBQVdiLGdFQUFhOzRCQUFFOEIsU0FBU3RCO3NDQUFPOzs7Ozs7c0NBQ2xELDhEQUFDcUI7NEJBQU9oQixXQUFXYixnRUFBYTs0QkFBRThCLFNBQVNoQjtzQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0Q7R0FuQ3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtudW1lcm8xLCBzZXROdW1lcm8xXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW251bWVybzIsIHNldE51bWVybzJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVzdWx0YWRvLCBzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgc3VtYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0YWRvU3VtYSA9IHBhcnNlRmxvYXQobnVtZXJvMSkgKyBwYXJzZUZsb2F0KG51bWVybzIpO1xuICAgIHNldFJlc3VsdGFkbygnUmVzdWx0YWRvIGRlIGxhIHN1bWE6ICcgKyBwYXJzZUZsb2F0KHtyZXN1bHRhZG9TdW1hfSkgKTtcbiAgICA8cD57cmVzdWx0YWRvICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0YWRvfT57cmVzdWx0YWRvfTwvZGl2Pn08L3A+XG4gIH1cbiAgY29uc3QgcmVzdGFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdGFkb1Jlc3RhID0gcGFyc2VGbG9hdChudW1lcm8xKSAtIHBhcnNlRmxvYXQobnVtZXJvMik7XG4gICAgc2V0UmVzdWx0YWRvKCdSZXN1bHRhZG8gZGUgbGEgcmVzdGE6ICcgKyBwYXJzZUZsb2F0KHtyZXN1bHRhZG9SZXN0YX0pICk7XG4gICAge3Jlc3VsdGFkbyAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdGFkb30+e3Jlc3VsdGFkb308L2Rpdj59XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxjdWxhZG9yYX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJvc30+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Pk7Dum1lcm8gMTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dG51bX0gdHlwZT1cIm51bWJlclwiIHZhbHVlPXtudW1lcm8xfSBvbkNoYW5nZT17KGUpID0+IHNldE51bWVybzEoZS50YXJnZXQudmFsdWUpfSBtaW49ezF9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJvc30+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Pk7Dum1lcm8gMjo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dG51bX0gdHlwZT1cIm51bWJlclwiIHZhbHVlPXtudW1lcm8yfSBvbkNoYW5nZT17KGUpID0+IHNldE51bWVybzIoZS50YXJnZXQudmFsdWUpfSBtaW49ezF9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3N1bWFyfT5TdW1hcjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtyZXN0YXJ9PlJlc3RhcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwibnVtZXJvMSIsInNldE51bWVybzEiLCJudW1lcm8yIiwic2V0TnVtZXJvMiIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsInN1bWFyIiwicmVzdWx0YWRvU3VtYSIsInBhcnNlRmxvYXQiLCJwIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVzdGFyIiwicmVzdWx0YWRvUmVzdGEiLCJtYWluIiwiY2FsY3VsYWRvcmEiLCJudW1lcm9zIiwibGFiZWwiLCJ0ZXh0IiwiaW5wdXQiLCJpbnB1dG51bSIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm1pbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});