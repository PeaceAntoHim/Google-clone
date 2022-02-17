self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/SearchResults.js":
/*!*************************************!*\
  !*** ./components/SearchResults.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
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
      lineNumber: 4,
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
            lineNumber: 13,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: results.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "truncate text-xl text-blue-800 font-medium group-hover:underline",
              children: result.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "line-clamp-2",
          children: result.snippet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this)]
      }, result.link, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("paginationButtons", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbIlNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwic2VhcmNoSW5mb3JtYXRpb24iLCJmb3JtYXR0ZWRUb3RhbFJlc3VsdHMiLCJmb3JtYXR0ZWRTZWFyY2hUaW1lIiwiaXRlbXMiLCJtYXAiLCJyZXN1bHQiLCJsaW5rIiwiZm9ybWF0dGVkVXJsIiwidGl0bGUiLCJzbmlwcGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsYUFBVCxPQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUNoQyxzQkFDSTtBQUFLLGFBQVMsRUFBQyxxREFBZjtBQUFBLDRCQUNJO0FBQUcsZUFBUyxFQUFDLGlDQUFiO0FBQUEsb0RBQ1dBLE9BQU8sQ0FBQ0MsaUJBRG5CLDBEQUNXLHNCQUNQQyxxQkFGSiwwQ0FHS0YsT0FBTyxDQUFDQyxpQkFIYiwyREFHSyx1QkFBMkJFLG1CQUhoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixvQkFPS0gsT0FBTyxDQUFDSSxLQVBiLG1EQU9LLGVBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsTUFBRDtBQUFBLDBCQUNoQjtBQUF1QixpQkFBUyxFQUFDLGVBQWpDO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBQSxrQ0FDSTtBQUNJLGdCQUFJLEVBQUVBLE1BQU0sQ0FBQ0MsSUFEakI7QUFFSSxxQkFBUyxFQUFDLFVBRmQ7QUFBQSxzQkFHU0QsTUFBTSxDQUFDRTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBTUk7QUFBRyxnQkFBSSxFQUFFUixPQUFPLENBQUNPLElBQWpCO0FBQUEsbUNBQ0k7QUFBSSx1QkFBUyxFQUFDLGtFQUFkO0FBQUEsd0JBQWtGRCxNQUFNLENBQUNHO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVlJO0FBQUcsbUJBQVMsRUFBQyxjQUFiO0FBQUEsb0JBQTZCSCxNQUFNLENBQUNJO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWko7QUFBQSxTQUFVSixNQUFNLENBQUNDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZ0I7QUFBQSxLQUFuQixDQVBMLGVBd0JJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Qkg7O0tBN0JRUixhO0FBK0JULCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC4yYmNmMjIyYWY5MzBjY2UzODJmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2VhcmNoUmVzdWx0cyh7IHJlc3VsdHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy1mdWxsIHB4LTMgc206cGwtWzUlXSBtZDpwbC1bMTQlXSBsZzpwbC01MlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtbWQgbWItNSBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICBBYm91dCB7cmVzdWx0cy5zZWFyY2hJbmZvcm1hdGlvbj8uXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUb3RhbFJlc3VsdHN9IHJlc3VsdHMgKFxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdHMuc2VhcmNoSW5mb3JtYXRpb24/LmZvcm1hdHRlZFNlYXJjaFRpbWV9IHNlY29uZHMpXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIHtyZXN1bHRzLml0ZW1zPy5tYXAoKHJlc3VsdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jlc3VsdC5saW5rfSBjbGFzc05hbWU9XCJtYXgtdy14bCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlcmY9e3Jlc3VsdC5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LmZvcm1hdHRlZFVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtyZXN1bHRzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRydW5jYXRlIHRleHQteGwgdGV4dC1ibHVlLTgwMCBmb250LW1lZGl1bSBncm91cC1ob3Zlcjp1bmRlcmxpbmVcIj57cmVzdWx0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluZS1jbGFtcC0yXCI+e3Jlc3VsdC5zbmlwcGV0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDxwYWdpbmF0aW9uQnV0dG9ucyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0czsiXSwic291cmNlUm9vdCI6IiJ9