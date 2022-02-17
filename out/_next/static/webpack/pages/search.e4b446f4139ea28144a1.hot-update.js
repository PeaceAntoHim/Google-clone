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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.ChevronLeftIcon, {}, void 0, false, {
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon, {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uQnV0dG9ucy5qcyJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uQnV0dG9ucyIsInJvdXRlciIsInVzZVJvdXRlciIsInN0YXJ0SW5kZXgiLCJOdW1iZXIiLCJxdWVyeSIsInN0YXJ0IiwidGVybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsR0FBNkI7QUFBQTs7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLE1BQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsS0FBZCxDQUFOLElBQThCLENBQWpEO0FBRUEsc0JBQ0k7QUFBQSxlQUNLSCxVQUFVLElBQUksRUFBZCxpQkFDRyw4REFBQyxrREFBRDtBQUFNLFVBQUksd0JBQWlCRixNQUFNLENBQUNJLEtBQVAsQ0FBYUUsSUFBOUIsb0JBQTRDSixVQUFVLEdBQUcsRUFBekQsQ0FBVjtBQUFBLDZCQUNJO0FBQUEsZ0NBQ0ksOERBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUixlQVdJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSx5QkFBa0JGLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhRSxJQUEvQixvQkFBNkNKLFVBQVUsR0FBRyxFQUExRCxDQUFWO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQXpCUUgsaUI7VUFDVUUsa0Q7OztLQURWRixpQjtBQTJCVCwrREFBZUEsaUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLmU0YjQ0NmY0MTM5ZWEyODE0NGExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGV2cm9uTGVmdEljb24sIENoZXZyb25SaWdodEljb24gIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIFBhZ2luYXRpb25CdXR0b25zKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IE51bWJlcihyb3V0ZXIucXVlcnkuc3RhcnQpIHx8IDA7ICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7c3RhcnRJbmRleCA+PSAxMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgc2VhcmNoP3Rlcm09JHtyb3V0ZXIucXVlcnkudGVybX0mc3RhcnQ9JHtzdGFydEluZGV4IC0gMTB9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmV2aW91czwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBUaGlzIGZvciByaWdodCBwYWdpbmF0aW9uICovfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3NlYXJjaD90ZXJtPSR7cm91dGVyLnF1ZXJ5LnRlcm19JnN0YXJ0PSR7c3RhcnRJbmRleCArIDEwfWB9ID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5OZXh0PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbkJ1dHRvbnM7Il0sInNvdXJjZVJvb3QiOiIifQ==