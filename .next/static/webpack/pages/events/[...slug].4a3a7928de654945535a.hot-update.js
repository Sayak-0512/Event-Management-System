webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dummy_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dummy-data.js */ \"./dummy-data.js\");\n/* harmony import */ var _components_events_EventList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/EventList.js */ \"./components/events/EventList.js\");\n\n\nvar _jsxFileName = \"/home/sayak/Documents/Web development/Project_NextJS/event-app/pages/events/[...slug].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction FilteredEvents() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var filteredDate = router.query.slug;\n\n  if (!filteredDate) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 12\n    }, this);\n  }\n\n  var filteredYear = +filteredDate[0];\n  var filteredMonth = +filteredDate[1];\n\n  if (isNaN(filteredMonth) || isNaN(filteredYear) || filteredMonth < 1 || filteredMonth > 12) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"Wrong filters\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 12\n    }, this);\n  }\n\n  var eventsFiltered = Object(_dummy_data_js__WEBPACK_IMPORTED_MODULE_2__[\"getFilteredEvents\"])({\n    year: filteredYear,\n    month: filteredMonth\n  });\n\n  if (!eventsFiltered || eventsFiltered.length === 0) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"No filtered events found\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 10\n    }, this);\n  }\n\n  var date = new Date(filteredYear, filteredMonth - 1);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ResultsTitle, {\n      date: date\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_EventList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      items: eventsFiltered\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 3\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FilteredEvents, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = FilteredEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredEvents);\n\nvar _c;\n\n$RefreshReg$(_c, \"FilteredEvents\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz85ZGRmIl0sIm5hbWVzIjpbIkZpbHRlcmVkRXZlbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlsdGVyZWREYXRlIiwicXVlcnkiLCJzbHVnIiwiZmlsdGVyZWRZZWFyIiwiZmlsdGVyZWRNb250aCIsImlzTmFOIiwiZXZlbnRzRmlsdGVyZWQiLCJnZXRGaWx0ZXJlZEV2ZW50cyIsInllYXIiLCJtb250aCIsImxlbmd0aCIsImRhdGUiLCJEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsY0FBVCxHQUF5QjtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUNDLDZEQUFTLEVBQXRCO0FBQ0EsTUFBTUMsWUFBWSxHQUFDRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsSUFBaEM7O0FBQ0EsTUFBRyxDQUFDRixZQUFKLEVBQ0E7QUFDRSx3QkFBTztBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxNQUFNRyxZQUFZLEdBQUMsQ0FBQ0gsWUFBWSxDQUFDLENBQUQsQ0FBaEM7QUFDQSxNQUFNSSxhQUFhLEdBQUMsQ0FBQ0osWUFBWSxDQUFDLENBQUQsQ0FBakM7O0FBQ0EsTUFBR0ssS0FBSyxDQUFDRCxhQUFELENBQUwsSUFBd0JDLEtBQUssQ0FBQ0YsWUFBRCxDQUE3QixJQUErQ0MsYUFBYSxHQUFDLENBQTdELElBQWtFQSxhQUFhLEdBQUMsRUFBbkYsRUFDQTtBQUNFLHdCQUFPO0FBQUcsZUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVILE1BQU1FLGNBQWMsR0FBQ0Msd0VBQWlCLENBQUM7QUFDckNDLFFBQUksRUFBRUwsWUFEK0I7QUFFckNNLFNBQUssRUFBRUw7QUFGOEIsR0FBRCxDQUF0Qzs7QUFLQSxNQUFHLENBQUNFLGNBQUQsSUFBbUJBLGNBQWMsQ0FBQ0ksTUFBZixLQUF3QixDQUE5QyxFQUNBO0FBQ0Usd0JBQU87QUFBRyxlQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0QsTUFBTUMsSUFBSSxHQUFDLElBQUlDLElBQUosQ0FBU1QsWUFBVCxFQUF1QkMsYUFBYSxHQUFDLENBQXJDLENBQVg7QUFHRSxzQkFDRTtBQUFBLDRCQUNBLHFFQUFDLFlBQUQ7QUFBYyxVQUFJLEVBQUVPO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVGLHFFQUFDLHVFQUFEO0FBQVcsV0FBSyxFQUFFTDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0FoQ1FULGM7VUFDTUUscUQ7OztLQURORixjO0FBaUNNQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge2dldEZpbHRlcmVkRXZlbnRzfSBmcm9tIFwiLi4vLi4vZHVtbXktZGF0YS5qc1wiO1xuaW1wb3J0IEV2ZW50TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvRXZlbnRMaXN0LmpzXCI7XG5mdW5jdGlvbiBGaWx0ZXJlZEV2ZW50cygpe1xuICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XG4gIGNvbnN0IGZpbHRlcmVkRGF0ZT1yb3V0ZXIucXVlcnkuc2x1ZztcbiAgaWYoIWZpbHRlcmVkRGF0ZSlcbiAge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5Mb2FkaW5nLi4uPC9wPlxuICB9XG4gIGNvbnN0IGZpbHRlcmVkWWVhcj0rZmlsdGVyZWREYXRlWzBdO1xuICBjb25zdCBmaWx0ZXJlZE1vbnRoPStmaWx0ZXJlZERhdGVbMV07XG4gIGlmKGlzTmFOKGZpbHRlcmVkTW9udGgpIHx8IGlzTmFOKGZpbHRlcmVkWWVhcikgfHwgZmlsdGVyZWRNb250aDwxIHx8IGZpbHRlcmVkTW9udGg+MTIpXG4gIHtcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+V3JvbmcgZmlsdGVyczwvcD5cbiAgfVxuXG5jb25zdCBldmVudHNGaWx0ZXJlZD1nZXRGaWx0ZXJlZEV2ZW50cyh7XG4gIHllYXI6IGZpbHRlcmVkWWVhcixcbiAgbW9udGg6IGZpbHRlcmVkTW9udGhcbn0pO1xuXG5pZighZXZlbnRzRmlsdGVyZWQgfHwgZXZlbnRzRmlsdGVyZWQubGVuZ3RoPT09MClcbntcbiAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPk5vIGZpbHRlcmVkIGV2ZW50cyBmb3VuZDwvcD5cbn1cbmNvbnN0IGRhdGU9bmV3IERhdGUoZmlsdGVyZWRZZWFyLCBmaWx0ZXJlZE1vbnRoLTEpO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxSZXN1bHRzVGl0bGUgZGF0ZT17ZGF0ZX0vPlxuICA8RXZlbnRMaXN0IGl0ZW1zPXtldmVudHNGaWx0ZXJlZH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmVkRXZlbnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n");

/***/ })

})