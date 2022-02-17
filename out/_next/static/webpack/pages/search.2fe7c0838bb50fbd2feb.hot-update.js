self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/PaginationButtons.js":
/*!*****************************************!*\
  !*** ./components/PaginationButtons.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
/* harmony import */ var _components_PaginationButtons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_1__);
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
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_PaginationButtons__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbIlNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwic2VhcmNoSW5mb3JtYXRpb24iLCJmb3JtYXR0ZWRUb3RhbFJlc3VsdHMiLCJmb3JtYXR0ZWRTZWFyY2hUaW1lIiwiaXRlbXMiLCJtYXAiLCJyZXN1bHQiLCJsaW5rIiwiZm9ybWF0dGVkVXJsIiwidGl0bGUiLCJzbmlwcGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxhQUFULE9BQW9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ2hDLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFEQUFmO0FBQUEsNEJBQ0k7QUFBRyxlQUFTLEVBQUMsaUNBQWI7QUFBQSxvREFDV0EsT0FBTyxDQUFDQyxpQkFEbkIsMERBQ1csc0JBQ1BDLHFCQUZKLDBDQUdLRixPQUFPLENBQUNDLGlCQUhiLDJEQUdLLHVCQUEyQkUsbUJBSGhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLG9CQU9LSCxPQUFPLENBQUNJLEtBUGIsbURBT0ssZUFBZUMsR0FBZixDQUFtQixVQUFDQyxNQUFEO0FBQUEsMEJBQ2hCO0FBQXVCLGlCQUFTLEVBQUMsZUFBakM7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsT0FBZjtBQUFBLGtDQUNJO0FBQ0ksZ0JBQUksRUFBRUEsTUFBTSxDQUFDQyxJQURqQjtBQUVJLHFCQUFTLEVBQUMsVUFGZDtBQUFBLHNCQUdTRCxNQUFNLENBQUNFO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUFHLGdCQUFJLEVBQUVSLE9BQU8sQ0FBQ08sSUFBakI7QUFBQSxtQ0FDSTtBQUFJLHVCQUFTLEVBQUMsa0VBQWQ7QUFBQSx3QkFBa0ZELE1BQU0sQ0FBQ0c7QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBWUk7QUFBRyxtQkFBUyxFQUFDLGNBQWI7QUFBQSxvQkFBNkJILE1BQU0sQ0FBQ0k7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSjtBQUFBLFNBQVVKLE1BQU0sQ0FBQ0MsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQW5CLENBUEwsZUF3QkksOERBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRCSDs7S0E3QlFSLGE7QUErQlQsK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjJmZTdjMDgzOGJiNTBmYmQyZmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnaW5hdGlvbkJ1dHRvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uQnV0dG9ucydcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFJlc3VsdHMoeyByZXN1bHRzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBweC0zIHNtOnBsLVs1JV0gbWQ6cGwtWzE0JV0gbGc6cGwtNTJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LW1kIG1iLTUgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgQWJvdXQge3Jlc3VsdHMuc2VhcmNoSW5mb3JtYXRpb24/LlxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVG90YWxSZXN1bHRzfSByZXN1bHRzIChcclxuICAgICAgICAgICAgICAgIHtyZXN1bHRzLnNlYXJjaEluZm9ybWF0aW9uPy5mb3JtYXR0ZWRTZWFyY2hUaW1lfSBzZWNvbmRzKVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICB7cmVzdWx0cy5pdGVtcz8ubWFwKChyZXN1bHQpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyZXN1bHQubGlua30gY2xhc3NOYW1lPVwibWF4LXcteGwgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXJmPXtyZXN1bHQubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc21sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5mb3JtYXR0ZWRVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cmVzdWx0cy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0cnVuY2F0ZSB0ZXh0LXhsIHRleHQtYmx1ZS04MDAgZm9udC1tZWRpdW0gZ3JvdXAtaG92ZXI6dW5kZXJsaW5lXCI+e3Jlc3VsdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmUtY2xhbXAtMlwiPntyZXN1bHQuc25pcHBldH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvbkJ1dHRvbnMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==