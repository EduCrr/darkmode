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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Theme\": function() { return /* binding */ Theme; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Theme = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), darkTheme = ref[0], setDarkTheme = ref[1];\n    var handleToggle = function() {\n        if (window.localStorage.getItem(\"theme\") === \"dark\") {\n            document.documentElement.removeAttribute(\"data-theme\");\n            window.localStorage.setItem(\"theme\", \"light\");\n            setDarkTheme(\"light\");\n        } else if (window.localStorage.getItem(\"theme\") === \"light\") {\n            document.documentElement.setAttribute(\"data-theme\", \"dark\");\n            window.localStorage.setItem(\"theme\", \"dark\");\n            setDarkTheme(\"dark\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleToggle,\n                children: darkTheme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaSun, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n                    lineNumber: 24,\n                    columnNumber: 35\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaMoon, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n                    lineNumber: 24,\n                    columnNumber: 47\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ag\\xeancia 8poroito\\\\Desktop\\\\adminLayout\\\\manager\\\\components\\\\Theme\\\\Theme.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Theme, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Theme;\nvar _c;\n$RefreshReg$(_c, \"Theme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lL1RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUEwQztBQUNFO0FBQ0c7O0FBRXhDLElBQU1LLEtBQUssR0FBRyxXQUFNOztJQUN6QixJQUFrQ0gsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUxoRCxTQUtrQixHQUFrQkEsR0FBWSxHQUE5QixFQUxsQixZQUtnQyxHQUFJQSxHQUFZLEdBQWhCO0lBRTlCLElBQU1NLFlBQVksR0FBRyxXQUFNO1FBQ3pCLElBQUlDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQ25EQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZETCxNQUFNLENBQUNDLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM5Q1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZCLE1BQU0sSUFBSUUsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxPQUFPLEVBQUU7WUFDM0RDLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDRyxZQUFZLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVEUCxNQUFNLENBQUNDLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3Q1IsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7SUFFRCxxQkFDRTtrQkFDRSw0RUFBQ1UsS0FBRztzQkFDRiw0RUFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFWCxZQUFZOzBCQUMxQkYsU0FBUyxLQUFLLE1BQU0saUJBQUcsOERBQUNGLGlEQUFLOzs7O3lCQUFHLGlCQUFHLDhEQUFDRCxrREFBTTs7Ozt5QkFBRzs7Ozs7cUJBQ3ZDOzs7OztpQkFDTDtxQkFDTCxDQUNIO0NBQ0gsQ0FBQztHQXhCV0UsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGhlbWUvVGhlbWUuanM/YWRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZhTW9vbiwgRmFTdW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZSA9ICgpID0+IHtcclxuICBjb25zdCBbZGFya1RoZW1lLCBzZXREYXJrVGhlbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA9PT0gXCJkYXJrXCIpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIik7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XHJcbiAgICAgIHNldERhcmtUaGVtZShcImxpZ2h0XCIpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA9PT0gXCJsaWdodFwiKSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIFwiZGFya1wiKTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICBzZXREYXJrVGhlbWUoXCJkYXJrXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgIHtkYXJrVGhlbWUgPT09IFwiZGFya1wiID8gPEZhU3VuIC8+IDogPEZhTW9vbiAvPn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGYU1vb24iLCJGYVN1biIsIlRoZW1lIiwiZGFya1RoZW1lIiwic2V0RGFya1RoZW1lIiwiaGFuZGxlVG9nZ2xlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0SXRlbSIsInNldEF0dHJpYnV0ZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Theme/Theme.js\n");

/***/ })

});