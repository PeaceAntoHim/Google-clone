self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user01\\Documents\\Google-clone\\pages\\search.js",
    _s = $RefreshSig$();






function Search(_ref) {
  _s();

  var results = _ref.results;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  console.log(results);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [router.query.term, " - Google Search"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_4__.default, {
      results: results
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

_s(Search, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Search;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInJlc3VsdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJ0ZXJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVo7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBQSxtQkFBUUMsTUFBTSxDQUFDSSxLQUFQLENBQWFDLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBT0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBU0ksOERBQUMsOERBQUQ7QUFBZSxhQUFPLEVBQUVOO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIOztHQWpCUUQsTTtVQUNVRyxrRDs7O0tBRFZILE07O0FBbUJULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC42YjQ5ODc5MzA4NmJmZTdmZTdiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlc3BvbnNlIGZyb20gJy4uL1Jlc3BvbnNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IHtBUElfS0VZLCBDT05URVhUX0tFWX0gZnJvbSAnLi4va2V5cyc7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cyc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goeyByZXN1bHRzIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cm91dGVyLnF1ZXJ5LnRlcm19IC0gR29vZ2xlIFNlYXJjaDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgey8qIFNlYXJjaCBSZXN1bHRzICovfVxyXG4gICAgICAgICAgICA8U2VhcmNoUmVzdWx0cyByZXN1bHRzPXtyZXN1bHRzfSAvPiAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTsgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsgIFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB1c2VEdW1teURhdGEgPSBmYWxzZTtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBjb250ZXh0LnF1ZXJ5LnN0YXJ0IHx8IFwiMFwiO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB1c2VEdW1teURhdGEgXHJcbiAgICAgICAgPyBSZXNwb25zZSBcclxuICAgICAgICA6IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY3VzdG9tc2VhcmNoL3YxP2tleT0ke0FQSV9LRVl9JmN4PSR7Q09OVEVYVF9LRVl9JnE9JHtjb250ZXh0LnF1ZXJ5LnRlcm19JnN0YXJ0PSR7c3RhcnRJbmRleH1gXHJcbiAgICAgICAgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHJcbiAgICAvKiBBZnRlciB0aGUgU0VSVkVSIGhhcyByZW5kZXJlZC4uLiBwYXNzIHRoZSByZXN1bHRzIHRvIHRoZSBjbGllbnQuLiAqL1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICByZXN1bHRzOiBkYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==