self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/PaginationButtons.js":
/*!*****************************************!*\
  !*** ./components/PaginationButtons.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user01\\Documents\\Google-clone\\components\\PaginationButtons.js",
    _s = $RefreshSig$();





function PaginationButtons() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var startIndex = Number(router.query.start) || 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [startIndex >= 10 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "search?term=".concat(router.query.term, "&start=").concat(startIndex - 10),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-grow flex-col items-center cursor-pointer hover:underline",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.ChevronLeftIcon, {
          className: "h-5 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Previous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/search?term=".concat(router.query.term, "&start=").concat(startIndex + 10),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon, {
          className: "h-5 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Next"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_s(PaginationButtons, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = PaginationButtons;
/* harmony default export */ __webpack_exports__["default"] = (PaginationButtons);

var _c;

$RefreshReg$(_c, "PaginationButtons");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uQnV0dG9ucy5qcyJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uQnV0dG9ucyIsInJvdXRlciIsInVzZVJvdXRlciIsInN0YXJ0SW5kZXgiLCJOdW1iZXIiLCJxdWVyeSIsInN0YXJ0IiwidGVybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsR0FBNkI7QUFBQTs7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLE1BQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsS0FBZCxDQUFOLElBQThCLENBQWpEO0FBRUEsc0JBQ0k7QUFBQSxlQUNLSCxVQUFVLElBQUksRUFBZCxpQkFDRyw4REFBQyxrREFBRDtBQUFNLFVBQUksd0JBQWlCRixNQUFNLENBQUNJLEtBQVAsQ0FBYUUsSUFBOUIsb0JBQTRDSixVQUFVLEdBQUcsRUFBekQsQ0FBVjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxxRUFBZjtBQUFBLGdDQUNJLDhEQUFDLG1FQUFEO0FBQWlCLG1CQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUixlQVdJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSx5QkFBa0JGLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhRSxJQUEvQixvQkFBNkNKLFVBQVUsR0FBRyxFQUExRCxDQUFWO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSSw4REFBQyxvRUFBRDtBQUFrQixtQkFBUyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQkg7O0dBekJRSCxpQjtVQUNVRSxrRDs7O0tBRFZGLGlCO0FBMkJULCtEQUFlQSxpQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guZmI5M2VmYjIxMjFkNzFmOGNiZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZXZyb25MZWZ0SWNvbiwgQ2hldnJvblJpZ2h0SWNvbiAgfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gUGFnaW5hdGlvbkJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBzdGFydEluZGV4ID0gTnVtYmVyKHJvdXRlci5xdWVyeS5zdGFydCkgfHwgMDsgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzdGFydEluZGV4ID49IDEwICYmIChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BzZWFyY2g/dGVybT0ke3JvdXRlci5xdWVyeS50ZXJtfSZzdGFydD0ke3N0YXJ0SW5kZXggLSAxMH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiBjbGFzc05hbWU9XCJoLTUgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJldmlvdXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogVGhpcyBmb3IgcmlnaHQgcGFnaW5hdGlvbiAqL31cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zZWFyY2g/dGVybT0ke3JvdXRlci5xdWVyeS50ZXJtfSZzdGFydD0ke3N0YXJ0SW5kZXggKyAxMH1gfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT1cImgtNSBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk5leHQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uQnV0dG9uczsiXSwic291cmNlUm9vdCI6IiJ9