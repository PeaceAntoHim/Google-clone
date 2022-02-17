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
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\user01\\Documents\\Google-clone\\components\\PaginationButtons.js";

function PaginationButtons() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

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


/***/ }),

/***/ "./components/SearchResults.js":
/*!*************************************!*\
  !*** ./components/SearchResults.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PaginationButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PaginationButtons */ "./components/PaginationButtons.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\user01\\Documents\\Google-clone\\components\\SearchResults.js";


function SearchResults(_ref) {
  var _results$searchInform,
      _results$searchInform2,
      _results$items,
      _this = this;

  var results = _ref.results;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-gray-600 text-md mb-5 mt-3",
      children: ["About ", (_results$searchInform = results.searchInformation) === null || _results$searchInform === void 0 ? void 0 : _results$searchInform.formattedTotalResults, " results (", (_results$searchInform2 = results.searchInformation) === null || _results$searchInform2 === void 0 ? void 0 : _results$searchInform2.formattedSearchTime, " seconds)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), (_results$items = results.items) === null || _results$items === void 0 ? void 0 : _results$items.map(function (result) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "max-w-xl mb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            herf: result.link,
            className: "text-sml",
            children: result.formattedUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: results.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "truncate text-xl text-blue-800 font-medium group-hover:underline",
              children: result.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "line-clamp-2",
          children: result.snippet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this)]
      }, result.link, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = SearchResults;
/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

var _c;

$RefreshReg$(_c, "SearchResults");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbIlBhZ2luYXRpb25CdXR0b25zIiwiU2VhcmNoUmVzdWx0cyIsInJlc3VsdHMiLCJzZWFyY2hJbmZvcm1hdGlvbiIsImZvcm1hdHRlZFRvdGFsUmVzdWx0cyIsImZvcm1hdHRlZFNlYXJjaFRpbWUiLCJpdGVtcyIsIm1hcCIsInJlc3VsdCIsImxpbmsiLCJmb3JtYXR0ZWRVcmwiLCJ0aXRsZSIsInNuaXBwZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxpQkFBVCxHQUE2QjtBQUN6QixzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7S0FOUUEsaUI7QUFRVCwrREFBZUEsaUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOztBQUVBLFNBQVNDLGFBQVQsT0FBb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDaEMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMscURBQWY7QUFBQSw0QkFDSTtBQUFHLGVBQVMsRUFBQyxpQ0FBYjtBQUFBLG9EQUNXQSxPQUFPLENBQUNDLGlCQURuQiwwREFDVyxzQkFDUEMscUJBRkosMENBR0tGLE9BQU8sQ0FBQ0MsaUJBSGIsMkRBR0ssdUJBQTJCRSxtQkFIaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosb0JBT0tILE9BQU8sQ0FBQ0ksS0FQYixtREFPSyxlQUFlQyxHQUFmLENBQW1CLFVBQUNDLE1BQUQ7QUFBQSwwQkFDaEI7QUFBdUIsaUJBQVMsRUFBQyxlQUFqQztBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsa0NBQ0k7QUFDSSxnQkFBSSxFQUFFQSxNQUFNLENBQUNDLElBRGpCO0FBRUkscUJBQVMsRUFBQyxVQUZkO0FBQUEsc0JBR1NELE1BQU0sQ0FBQ0U7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQUcsZ0JBQUksRUFBRVIsT0FBTyxDQUFDTyxJQUFqQjtBQUFBLG1DQUNJO0FBQUksdUJBQVMsRUFBQyxrRUFBZDtBQUFBLHdCQUFrRkQsTUFBTSxDQUFDRztBQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFZSTtBQUFHLG1CQUFTLEVBQUMsY0FBYjtBQUFBLG9CQUE2QkgsTUFBTSxDQUFDSTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpKO0FBQUEsU0FBVUosTUFBTSxDQUFDQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCO0FBQUEsS0FBbkIsQ0FQTCxlQXdCSSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEJIOztLQTdCUVIsYTtBQStCVCwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guNGEyZGE3N2I3YjYzODk1NDI1NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFBhZ2luYXRpb25CdXR0b25zKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbkJ1dHRvbnM7IiwiaW1wb3J0IFBhZ2luYXRpb25CdXR0b25zIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbkJ1dHRvbnMnXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hSZXN1bHRzKHsgcmVzdWx0cyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgcHgtMyBzbTpwbC1bNSVdIG1kOnBsLVsxNCVdIGxnOnBsLTUyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1tZCBtYi01IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIEFib3V0IHtyZXN1bHRzLnNlYXJjaEluZm9ybWF0aW9uPy5cclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFRvdGFsUmVzdWx0c30gcmVzdWx0cyAoXHJcbiAgICAgICAgICAgICAgICB7cmVzdWx0cy5zZWFyY2hJbmZvcm1hdGlvbj8uZm9ybWF0dGVkU2VhcmNoVGltZX0gc2Vjb25kcylcclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAge3Jlc3VsdHMuaXRlbXM/Lm1hcCgocmVzdWx0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cmVzdWx0Lmxpbmt9IGNsYXNzTmFtZT1cIm1heC13LXhsIG1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVyZj17cmVzdWx0Lmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQuZm9ybWF0dGVkVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Jlc3VsdHMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHJ1bmNhdGUgdGV4dC14bCB0ZXh0LWJsdWUtODAwIGZvbnQtbWVkaXVtIGdyb3VwLWhvdmVyOnVuZGVybGluZVwiPntyZXN1bHQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5lLWNsYW1wLTJcIj57cmVzdWx0LnNuaXBwZXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb25CdXR0b25zIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHRzOyJdLCJzb3VyY2VSb290IjoiIn0=