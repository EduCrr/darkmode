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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Theme\": function() { return /* binding */ Theme; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Theme = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), darkTheme = ref[0], setDarkTheme = ref[1];\n    var handleToggle = function() {\n        if (localStorage.getItem(\"theme\") === \"dark\") {\n            window.localStorage.setItem(\"theme\", \"light\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (darkTheme !== undefined) {\n            if (darkTheme) {\n                // Set value of  darkmode to dark\n                document.documentElement.setAttribute(\"data-theme\", \"dark\");\n                window.localStorage.setItem(\"theme\", \"dark\");\n            } else {\n                // Set value of  darkmode to light\n                document.documentElement.removeAttribute(\"data-theme\");\n                window.localStorage.setItem(\"theme\", \"light\");\n            }\n        }\n    }, [\n        darkTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: darkTheme !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleToggle,\n                children: \"color\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Theme, \"jJZmbdFnZFNs6vZQXRn5ZO2Uq34=\");\n_c = Theme;\nvar _c;\n$RefreshReg$(_c, \"Theme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lL1RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTBDO0FBQ0U7O0FBQ3JDLElBQU1HLEtBQUssR0FBRyxXQUFNOztJQUN6QixJQUFrQ0QsR0FBbUIsR0FBbkJBLCtDQUFRLENBQUNFLFNBQVMsQ0FBQyxFQUh2RCxTQUdrQixHQUFrQkYsR0FBbUIsR0FBckMsRUFIbEIsWUFHZ0MsR0FBSUEsR0FBbUIsR0FBdkI7SUFFOUIsSUFBTUssWUFBWSxHQUFHLFdBQU07UUFDekIsSUFBSUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQzVDQyxNQUFNLENBQUNGLFlBQVksQ0FBQ0csT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUMvQztLQUNGO0lBRURWLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlJLFNBQVMsS0FBS0QsU0FBUyxFQUFFO1lBQzNCLElBQUlDLFNBQVMsRUFBRTtnQkFDYixpQ0FBaUM7Z0JBQ2pDTyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsWUFBWSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDNURKLE1BQU0sQ0FBQ0YsWUFBWSxDQUFDRyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzlDLE1BQU07Z0JBQ0wsa0NBQWtDO2dCQUNsQ0MsUUFBUSxDQUFDQyxlQUFlLENBQUNFLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkRMLE1BQU0sQ0FBQ0YsWUFBWSxDQUFDRyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7S0FDRixFQUFFO1FBQUNOLFNBQVM7S0FBQyxDQUFDLENBQUM7SUFFaEIscUJBQ0U7a0JBQ0UsNEVBQUNXLEtBQUc7c0JBQ0RYLFNBQVMsS0FBS0QsU0FBUyxrQkFDdEIsOERBQUNhLFFBQU07Z0JBQUNDLE9BQU8sRUFBRVgsWUFBWTswQkFBRSxPQUFLOzs7OztxQkFBUzs7Ozs7aUJBRTNDO3FCQUNMLENBQ0g7Q0FDSCxDQUFDO0dBaENXSixLQUFLO0FBQUxBLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaGVtZS9UaGVtZS5qcz9hZGVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGNvbnN0IFRoZW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXJrVGhlbWUsIHNldERhcmtUaGVtZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA9PT0gXCJkYXJrXCIpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhcmtUaGVtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChkYXJrVGhlbWUpIHtcclxuICAgICAgICAvLyBTZXQgdmFsdWUgb2YgIGRhcmttb2RlIHRvIGRhcmtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBcImRhcmtcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNldCB2YWx1ZSBvZiAgZGFya21vZGUgdG8gbGlnaHRcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2RhcmtUaGVtZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZGFya1RoZW1lICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9PmNvbG9yPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUaGVtZSIsInVuZGVmaW5lZCIsImRhcmtUaGVtZSIsInNldERhcmtUaGVtZSIsImhhbmRsZVRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJzZXRJdGVtIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Theme/Theme.js\n");

/***/ })

});