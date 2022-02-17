self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar */ "./components/avatar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeaderOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderOptions */ "./components/HeaderOptions.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user01\\Documents\\Google-clone\\components\\Header.js",
    _s = $RefreshSig$();








function Header() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  var search = function search(e) {
    e.preventDefault();
    var term = searchInputRef.current.value;
    if (!term) return;
    router.push("/search?term=".concat(term));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: "sticky top-0 bg-white",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex w-full p-6 items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        height: 40,
        width: 120,
        className: "cursor-pointer sm:height=40",
        onClick: function onClick() {
          return router.push("/");
        },
        src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        className: "flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          ref: searchInputRef,
          className: "flex-grow w-full focus:outline-none"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.XIcon, {
          className: "h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform  hover:scale-125",
          onClick: function onClick() {
            return searchInputRef.current.value = "";
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.MicrophoneIcon, {
          className: "h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.SearchIcon, {
          className: "h-6 text-blue-500 hidden:inline-flex"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          hidden: true,
          type: "submit",
          onClick: search,
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_avatar__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "ml-auto",
        url: "https://github.com/PeaceAntoHim/Frans-Portfolio-3.0/blob/main/img/FransG.png?raw=true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderOptions__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_s(Header, "AEV146mX0Fbc4rXKci2kjxGVV1E=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VhcmNoSW5wdXRSZWYiLCJ1c2VSZWYiLCJzZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXJtIiwiY3VycmVudCIsInZhbHVlIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDZCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBN0I7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsQ0FBQyxFQUFJO0FBQ2hCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNQyxJQUFJLEdBQUlMLGNBQWMsQ0FBQ00sT0FBZixDQUF1QkMsS0FBckM7QUFFQSxRQUFJLENBQUNGLElBQUwsRUFBVztBQUVYUCxVQUFNLENBQUNVLElBQVAsd0JBQTRCSCxJQUE1QjtBQUNILEdBUkQ7O0FBVUEsc0JBQ0k7QUFBUSxhQUFTLEVBQUMsdUJBQWxCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw4QkFDSSw4REFBQyxtREFBRDtBQUNJLGNBQU0sRUFBRSxFQURaO0FBRUksYUFBSyxFQUFFLEdBRlg7QUFHSSxpQkFBUyxFQUFDLDZCQUhkO0FBSUksZUFBTyxFQUFFO0FBQUEsaUJBQU1QLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLEdBQVosQ0FBTjtBQUFBLFNBSmI7QUFLSSxXQUFHLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFRSTtBQUFNLGlCQUFTLEVBQUMsMEdBQWhCO0FBQUEsZ0NBQ0k7QUFDSSxjQUFJLEVBQUMsTUFEVDtBQUVJLGFBQUcsRUFBRVIsY0FGVDtBQUdJLG1CQUFTLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBTUksOERBQUMseURBQUQ7QUFDSSxtQkFBUyxFQUFDLDZGQURkO0FBRUksaUJBQU8sRUFBRTtBQUFBLG1CQUFPQSxjQUFjLENBQUNNLE9BQWYsQ0FBdUJDLEtBQXZCLEdBQStCLEVBQXRDO0FBQUE7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBVUksOERBQUMsa0VBQUQ7QUFDSSxtQkFBUyxFQUFDO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSixlQWFJLDhEQUFDLDhEQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBY0k7QUFBUSxnQkFBTSxNQUFkO0FBQWUsY0FBSSxFQUFDLFFBQXBCO0FBQTZCLGlCQUFPLEVBQUVMLE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLGVBd0JJLDhEQUFDLDRDQUFEO0FBQ0ksaUJBQVMsRUFBQyxTQURkO0FBRUksV0FBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWdDSSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIOztHQW5EUUwsTTtVQUNVRSxrRDs7O0tBRFZGLE07QUFxRFQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjczZjMxZWQ5ZTFhMjI5OGVkMjMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXZhdGFyIGZyb20gJy4vYXZhdGFyJztcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWRlck9wdGlvbnMgZnJvbSAnLi9IZWFkZXJPcHRpb25zJztcclxuaW1wb3J0IHsgWEljb24sIE1pY3JvcGhvbmVJY29uLCBTZWFyY2hJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGVybSAgPSBzZWFyY2hJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIXRlcm0pIHJldHVybjtcclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2g/dGVybT0ke3Rlcm19YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHAtNiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgc206aGVpZ2h0PTQwXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL3d3dy5nb29nbGUuY29tL2ltYWdlcy9icmFuZGluZy9nb29nbGVsb2dvLzJ4L2dvb2dsZWxvZ29fY29sb3JfMjcyeDkyZHAucG5nJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93IHB4LTYgcHktMyBtbC0xMCBtci01IGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1mdWxsIHNoYWRvdy1sZyBtYXgtdy0zeGwgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17c2VhcmNoSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8WEljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNyBzbTptci0zIHRleHQtZ3JheS01MDAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgdHJhbnNmb3JtICBob3ZlcjpzY2FsZS0xMjVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHNlYXJjaElucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNaWNyb3Bob25lSWNvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IG1yLTMgaGlkZGVuIHNtOmlubGluZS1mbGV4IHRleHQtYmx1ZS01MDAgYm9yZGVyLWwtMiBwbC00IGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTYgdGV4dC1ibHVlLTUwMCBoaWRkZW46aW5saW5lLWZsZXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaGlkZGVuIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtzZWFyY2h9PlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICB1cmw9XCJodHRwczovL2dpdGh1Yi5jb20vUGVhY2VBbnRvSGltL0ZyYW5zLVBvcnRmb2xpby0zLjAvYmxvYi9tYWluL2ltZy9GcmFuc0cucG5nP3Jhdz10cnVlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEhlYWRlciBPcHRpb25zICovfVxyXG4gICAgICAgICAgICA8SGVhZGVyT3B0aW9ucyAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9