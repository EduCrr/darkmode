"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/manager/home",{

/***/ "./components/Theme/Theme.js":
/*!***********************************!*\
  !*** ./components/Theme/Theme.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Theme\": function() { return /* binding */ Theme; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/Theme/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Theme = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), darkTheme = ref[0], setDarkTheme = ref[1];\n    var handleToggle = function(event) {\n        setDarkTheme(event.target.checked);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (darkTheme !== undefined) {\n            if (darkTheme) {\n                // Set value of  darkmode to dark\n                document.documentElement.setAttribute(\"data-theme\", \"dark\");\n                window.localStorage.setItem(\"theme\", \"dark\");\n            } else {\n                // Set value of  darkmode to light\n                document.documentElement.removeAttribute(\"data-theme\");\n                window.localStorage.setItem(\"theme\", \"light\");\n            }\n        }\n    }, [\n        darkTheme\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var root = window.document.documentElement;\n        var initialColorValue = root.style.getPropertyValue(\"--initial-color-mode\");\n        // Set initial darkmode to light\n        setDarkTheme(initialColorValue === \"\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: darkTheme !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: \"#\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"switch\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            checked: darkTheme,\n                            onChange: handleToggle\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slider)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n                lineNumber: 36,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Theme, \"E/B/4Ef6ta/QIMrjUGgByfso7Ds=\");\n_c = Theme;\nvar _c;\n$RefreshReg$(_c, \"Theme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lL1RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEM7QUFDRTs7QUFDckMsSUFBTUcsS0FBSyxHQUFHLFdBQU07O0lBQ3pCLElBQWtDRCxHQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ0UsU0FBUyxDQUFDLEVBSHZELFNBR2tCLEdBQWtCRixHQUFtQixHQUFyQyxFQUhsQixZQUdnQyxHQUFJQSxHQUFtQixHQUF2QjtJQUU5QixJQUFNSyxZQUFZLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQzlCRixZQUFZLENBQUNFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQztLQUNwQztJQUVEVCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJSSxTQUFTLEtBQUtELFNBQVMsRUFBRTtZQUMzQixJQUFJQyxTQUFTLEVBQUU7Z0JBQ2IsaUNBQWlDO2dCQUNqQ00sUUFBUSxDQUFDQyxlQUFlLENBQUNDLFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzVEQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM5QyxNQUFNO2dCQUNMLGtDQUFrQztnQkFDbENMLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDSyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3ZESCxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzthQUMvQztTQUNGO0tBQ0YsRUFBRTtRQUFDWCxTQUFTO0tBQUMsQ0FBQyxDQUFDO0lBRWhCSixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNaUIsSUFBSSxHQUFHSixNQUFNLENBQUNILFFBQVEsQ0FBQ0MsZUFBZTtRQUM1QyxJQUFNTyxpQkFBaUIsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUNDLGdCQUFnQixDQUNuRCxzQkFBc0IsQ0FDdkI7UUFDRCxnQ0FBZ0M7UUFDaENmLFlBQVksQ0FBQ2EsaUJBQWlCLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDeEMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFO2tCQUNFLDRFQUFDRyxLQUFHO3NCQUNEakIsU0FBUyxLQUFLRCxTQUFTLGtCQUN0Qiw4REFBQ21CLE1BQUk7Z0JBQUNDLE1BQU0sRUFBQyxHQUFHOzBCQUNkLDRFQUFDQyxPQUFLO29CQUFDQyxTQUFTLEVBQUUxQixzRUFBYTs7c0NBQzdCLDhEQUFDNEIsT0FBSzs0QkFDSkMsSUFBSSxFQUFDLFVBQVU7NEJBQ2ZuQixPQUFPLEVBQUVMLFNBQVM7NEJBQ2xCeUIsUUFBUSxFQUFFdkIsWUFBWTs7Ozs7aUNBQ3RCO3NDQUNGLDhEQUFDd0IsTUFBSTs0QkFBQ0wsU0FBUyxFQUFFMUIsbUVBQWE7Ozs7O2lDQUFTOzs7Ozs7eUJBQ2pDOzs7OztxQkFDSDs7Ozs7aUJBRUw7cUJBQ0wsQ0FDSDtDQUNILENBQUM7R0EvQ1dHLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RoZW1lL1RoZW1lLmpzP2FkZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5leHBvcnQgY29uc3QgVGhlbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhcmtUaGVtZSwgc2V0RGFya1RoZW1lXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0RGFya1RoZW1lKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhcmtUaGVtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChkYXJrVGhlbWUpIHtcclxuICAgICAgICAvLyBTZXQgdmFsdWUgb2YgIGRhcmttb2RlIHRvIGRhcmtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBcImRhcmtcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNldCB2YWx1ZSBvZiAgZGFya21vZGUgdG8gbGlnaHRcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2RhcmtUaGVtZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgcm9vdCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbml0aWFsQ29sb3JWYWx1ZSA9IHJvb3Quc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcclxuICAgICAgXCItLWluaXRpYWwtY29sb3ItbW9kZVwiXHJcbiAgICApO1xyXG4gICAgLy8gU2V0IGluaXRpYWwgZGFya21vZGUgdG8gbGlnaHRcclxuICAgIHNldERhcmtUaGVtZShpbml0aWFsQ29sb3JWYWx1ZSA9PT0gXCJcIik7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtkYXJrVGhlbWUgIT09IHVuZGVmaW5lZCAmJiAoXHJcbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5zd2l0Y2h9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2RhcmtUaGVtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRoZW1lIiwidW5kZWZpbmVkIiwiZGFya1RoZW1lIiwic2V0RGFya1RoZW1lIiwiaGFuZGxlVG9nZ2xlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlQXR0cmlidXRlIiwicm9vdCIsImluaXRpYWxDb2xvclZhbHVlIiwic3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGl2IiwiZm9ybSIsImFjdGlvbiIsImxhYmVsIiwiY2xhc3NOYW1lIiwic3dpdGNoIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJzcGFuIiwic2xpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Theme/Theme.js\n");

/***/ })

});