"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/manager/produto/adicionar",{

/***/ "./components/Theme/Theme.js":
/*!***********************************!*\
  !*** ./components/Theme/Theme.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Theme\": function() { return /* binding */ Theme; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Theme = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), darkTheme = ref[0], setDarkTheme = ref[1];\n    var handleToggle = function() {\n        if (localStorage.getItem(\"theme\") === \"dark\") {\n            document.documentElement.removeAttribute(\"data-theme\");\n            window.localStorage.setItem(\"theme\", \"light\");\n        } else if (localStorage.getItem(\"theme\") === \"light\") {\n            window.localStorage.setItem(\"theme\", \"dark\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (darkTheme !== undefined) {\n            if (darkTheme) {\n                // Set value of  darkmode to dark\n                document.documentElement.setAttribute(\"data-theme\", \"dark\");\n                window.localStorage.setItem(\"theme\", \"dark\");\n            } else {\n                // Set value of  darkmode to light\n                document.documentElement.removeAttribute(\"data-theme\");\n                window.localStorage.setItem(\"theme\", \"light\");\n            }\n        }\n    }, [\n        darkTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleToggle,\n                children: \"color\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Theme, \"jJZmbdFnZFNs6vZQXRn5ZO2Uq34=\");\n_c = Theme;\nvar _c;\n$RefreshReg$(_c, \"Theme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lL1RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTBDO0FBQ0U7O0FBQ3JDLElBQU1HLEtBQUssR0FBRyxXQUFNOztJQUN6QixJQUFrQ0QsR0FBbUIsR0FBbkJBLCtDQUFRLENBQUNFLFNBQVMsQ0FBQyxFQUh2RCxTQUdrQixHQUFrQkYsR0FBbUIsR0FBckMsRUFIbEIsWUFHZ0MsR0FBSUEsR0FBbUIsR0FBdkI7SUFFOUIsSUFBTUssWUFBWSxHQUFHLFdBQU07UUFDekIsSUFBSUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQzVDQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZEQyxNQUFNLENBQUNMLFlBQVksQ0FBQ00sT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUMvQyxNQUFNLElBQUlOLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE9BQU8sRUFBRTtZQUNwREksTUFBTSxDQUFDTCxZQUFZLENBQUNNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUM7S0FDRjtJQUVEYixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJSSxTQUFTLEtBQUtELFNBQVMsRUFBRTtZQUMzQixJQUFJQyxTQUFTLEVBQUU7Z0JBQ2IsaUNBQWlDO2dCQUNqQ0ssUUFBUSxDQUFDQyxlQUFlLENBQUNJLFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzVERixNQUFNLENBQUNMLFlBQVksQ0FBQ00sT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM5QyxNQUFNO2dCQUNMLGtDQUFrQztnQkFDbENKLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3ZEQyxNQUFNLENBQUNMLFlBQVksQ0FBQ00sT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzthQUMvQztTQUNGO0tBQ0YsRUFBRTtRQUFDVCxTQUFTO0tBQUMsQ0FBQyxDQUFDO0lBRWhCLHFCQUNFO2tCQUNFLDRFQUFDVyxLQUFHO3NCQUNGLDRFQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVYLFlBQVk7MEJBQUUsT0FBSzs7Ozs7cUJBQVM7Ozs7O2lCQUN6QztxQkFDTCxDQUNIO0NBQ0gsQ0FBQztHQWpDV0osS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGhlbWUvVGhlbWUuanM/YWRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBjb25zdCBUaGVtZSA9ICgpID0+IHtcclxuICBjb25zdCBbZGFya1RoZW1lLCBzZXREYXJrVGhlbWVdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT09IFwiZGFya1wiKSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xyXG4gICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID09PSBcImxpZ2h0XCIpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGFya1RoZW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKGRhcmtUaGVtZSkge1xyXG4gICAgICAgIC8vIFNldCB2YWx1ZSBvZiAgZGFya21vZGUgdG8gZGFya1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIFwiZGFya1wiKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU2V0IHZhbHVlIG9mICBkYXJrbW9kZSB0byBsaWdodFxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbZGFya1RoZW1lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVG9nZ2xlfT5jb2xvcjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRoZW1lIiwidW5kZWZpbmVkIiwiZGFya1RoZW1lIiwic2V0RGFya1RoZW1lIiwiaGFuZGxlVG9nZ2xlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwicmVtb3ZlQXR0cmlidXRlIiwid2luZG93Iiwic2V0SXRlbSIsInNldEF0dHJpYnV0ZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Theme/Theme.js\n");

/***/ })

});