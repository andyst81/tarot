webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/andy/Sites/tarot/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _data, _data2, _data3, _data4, _data5, _data6, _data7, _data8;\n\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    _this = _super.call(this);\n    _this.state = {\n      showCard: false\n    };\n    var cardName = (_data = data) === null || _data === void 0 ? void 0 : _data.name;\n    var number = (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.number;\n    var fortune = (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.fortune_telling;\n    var keywords = (_data4 = data) === null || _data4 === void 0 ? void 0 : _data4.keywords;\n    var light = (_data5 = data) === null || _data5 === void 0 ? void 0 : _data5.meanings.light;\n    var shadow = (_data6 = data) === null || _data6 === void 0 ? void 0 : _data6.meanings.shadow;\n    var image = (_data7 = data) === null || _data7 === void 0 ? void 0 : _data7.img;\n    var questions = (_data8 = data) === null || _data8 === void 0 ? void 0 : _data8.questions;\n    var fortuneList = [];\n\n    for (var x in fortune) {\n      fortuneList.push(__jsx(\"p\", {\n        key: x,\n        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 24\n        }\n      }, fortune[x]));\n    }\n\n    var keywordList = [];\n\n    for (var y in keywords) {\n      var mid = keywords[y];\n      mid = mid[0].toUpperCase() + mid.substring(1);\n      keywordList.push(__jsx(\"li\", {\n        key: y,\n        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 24\n        }\n      }, mid));\n    }\n\n    var lightList = [];\n\n    for (var l in light) {\n      lightList.push(__jsx(\"li\", {\n        key: l,\n        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 22\n        }\n      }, light[l]));\n    }\n\n    var shadowList = [];\n\n    for (var d in shadow) {\n      shadowList.push(__jsx(\"li\", {\n        key: d,\n        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 23\n        }\n      }, shadow[d]));\n    }\n\n    var questionList = [];\n\n    for (var q in questions) {\n      questionList.push(__jsx(\"li\", {\n        key: q,\n        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 25\n        }\n      }, questions[q]));\n    }\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      function fetcher(url) {\n        return fetch(url).then(function (r) {\n          return r.json();\n        });\n      }\n\n      var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])(),\n          query = _useRouter.query;\n\n      var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('/api/tarot', fetcher),\n          data = _useSWR.data,\n          error = _useSWR.error;\n\n      if (!data) number = 'Loading...';\n      if (error) number = 'Failed to fetch a card.';\n      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 5\n        }\n      }, __jsx(\"div\", {\n        className: \"container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 7\n        }\n      }, __jsx(\"main\", {\n        className: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 9\n        }\n      }, __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }\n      }), __jsx(\"h3\", {\n        style: {\n          textAlign: \"center\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }\n      }, \"Ask a question outloud and press the button below to generate one card to answer the question.\"), __jsx(\"h5\", {\n        style: {\n          textAlign: \"center\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }\n      }, \"An interpretation of the meaning of the card will appear below it.\"), __jsx(\"button\", {\n        style: {\n          display: \"flex\",\n          margin: \"auto\",\n          alignItems: \"center\",\n          justifyContent: \"center\"\n        },\n        className: \"button\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }\n      }, \"Show Card\"), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        style: {\n          display: 'block'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }\n      }, __jsx(\"img\", {\n        style: {\n          display: \"flex\",\n          margin: \"auto\",\n          alignItems: \"center\",\n          justifyContent: \"center\"\n        },\n        src: image,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }\n      }), __jsx(\"div\", {\n        style: {\n          textAlign: \"center\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 47\n        }\n      }, number)), __jsx(\"div\", {\n        style: {\n          textAlign: \"center\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 47\n        }\n      }, cardName)), __jsx(\"div\", {\n        style: {\n          textAlign: \"center\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 13\n        }\n      }, __jsx(\"h4\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 47\n        }\n      }, fortuneList)), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 13\n        }\n      }, __jsx(\"b\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 18\n        }\n      }, \"Questions to ask:\"), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 42\n        }\n      }, questionList)), __jsx(\"div\", {\n        className: \"row\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"column\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 15\n        }\n      }, __jsx(\"span\", {\n        style: {\n          textAlign: \"center\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 39\n        }\n      }, __jsx(\"b\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 74\n        }\n      }, \"Light Meanings:\")), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 103\n        }\n      }, lightList)), __jsx(\"div\", {\n        className: \"column\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 15\n        }\n      }, __jsx(\"b\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 39\n        }\n      }, \"Dark Meanings:\"), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 60\n        }\n      }, shadowList)), __jsx(\"div\", {\n        className: \"column\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 15\n        }\n      }, __jsx(\"b\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 39\n        }\n      }, \"Keywords:\"), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 55\n        }\n      }, keywordList)))))));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwic3RhdGUiLCJzaG93Q2FyZCIsImNhcmROYW1lIiwiZGF0YSIsIm5hbWUiLCJudW1iZXIiLCJmb3J0dW5lIiwiZm9ydHVuZV90ZWxsaW5nIiwia2V5d29yZHMiLCJsaWdodCIsIm1lYW5pbmdzIiwic2hhZG93IiwiaW1hZ2UiLCJpbWciLCJxdWVzdGlvbnMiLCJmb3J0dW5lTGlzdCIsIngiLCJwdXNoIiwia2V5d29yZExpc3QiLCJ5IiwibWlkIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJsaWdodExpc3QiLCJsIiwic2hhZG93TGlzdCIsImQiLCJxdWVzdGlvbkxpc3QiLCJxIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTV1IiLCJlcnJvciIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJtYXJnaW4iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxLOzs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRTtBQURDLEtBQWI7QUFLQSxRQUFNQyxRQUFRLFlBQUdDLElBQUgsMENBQUcsTUFBTUMsSUFBdkI7QUFDQSxRQUFJQyxNQUFNLGFBQUdGLElBQUgsMkNBQUcsT0FBTUUsTUFBbkI7QUFDQSxRQUFJQyxPQUFPLGFBQUdILElBQUgsMkNBQUcsT0FBTUksZUFBcEI7QUFDQSxRQUFJQyxRQUFRLGFBQUdMLElBQUgsMkNBQUcsT0FBTUssUUFBckI7QUFDQSxRQUFJQyxLQUFLLGFBQUdOLElBQUgsMkNBQUcsT0FB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O0FBQUEsU0FBS0UsVUFBTCxDQUE3QyxDQUZGLEVBR0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF4QixFQUF3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtQLFdBQUwsQ0FBeEMsQ0FIRixDQU5GLENBTkYsQ0FERixDQURGLENBREE7QUEwQkQ7Ozs7RUFsRmlCMEIsNENBQUssQ0FBQ0MsUzs7QUFxRlgvQyxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0NhcmQ6IGZhbHNlXG4gICAgfVxuXG4gXG4gICAgY29uc3QgY2FyZE5hbWUgPSBkYXRhPy5uYW1lO1xuICAgIGxldCBudW1iZXIgPSBkYXRhPy5udW1iZXI7XG4gICAgbGV0IGZvcnR1bmUgPSBkYXRhPy5mb3J0dW5lX3RlbGxpbmc7XG4gICAgbGV0IGtleXdvcmRzID0gZGF0YT8ua2V5d29yZHM7XG4gICAgbGV0IGxpZ2h0ID0gZGF0YT8ubWVhbmluZ3MubGlnaHQ7XG4gICAgbGV0IHNoYWRvdyA9IGRhdGE/Lm1lYW5pbmdzLnNoYWRvdztcbiAgICBsZXQgaW1hZ2UgPSBkYXRhPy5pbWc7XG4gICAgbGV0IHF1ZXN0aW9ucyA9IGRhdGE/LnF1ZXN0aW9uc1xuICBcbiAgICBsZXQgZm9ydHVuZUxpc3QgPSBbXVxuICAgIGZvciAodmFyIHggaW4gZm9ydHVuZSkge1xuICAgICAgZm9ydHVuZUxpc3QucHVzaCg8cCBrZXk9e3h9Pntmb3J0dW5lW3hdfTwvcD4pXG4gICAgfVxuICBcbiAgICBsZXQga2V5d29yZExpc3QgPSBbXVxuICAgIGZvciAodmFyIHkgaW4ga2V5d29yZHMpIHtcbiAgICAgIGxldCBtaWQgPSBrZXl3b3Jkc1t5XVxuICAgICAgbWlkID0gbWlkWzBdLnRvVXBwZXJDYXNlKCkrIG1pZC5zdWJzdHJpbmcoMSlcbiAgICAgIGtleXdvcmRMaXN0LnB1c2goPGxpIGtleT17eX0+e21pZH08L2xpPilcbiAgICB9IFxuICBcbiAgICBsZXQgbGlnaHRMaXN0ID0gW11cbiAgICBmb3IgKHZhciBsIGluIGxpZ2h0KSB7XG4gICAgICBsaWdodExpc3QucHVzaCg8bGkga2V5PXtsfT57bGlnaHRbbF19PC9saT4pXG4gICAgfVxuICBcbiAgICBsZXQgc2hhZG93TGlzdCA9IFtdXG4gICAgZm9yICh2YXIgZCBpbiBzaGFkb3cpIHtcbiAgICAgIHNoYWRvd0xpc3QucHVzaCg8bGkga2V5PXtkfT57c2hhZG93W2RdfTwvbGk+KVxuICAgIH1cbiAgXG4gICAgbGV0IHF1ZXN0aW9uTGlzdCA9IFtdXG4gICAgZm9yICh2YXIgcSBpbiBxdWVzdGlvbnMpIHtcbiAgICAgIHF1ZXN0aW9uTGlzdC5wdXNoKDxsaSBrZXk9e3F9PntxdWVzdGlvbnNbcV19PC9saT4pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xuICAgICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvdGFyb3QnLCBmZXRjaGVyKTtcbiAgICBcbiAgICBpZiAoIWRhdGEpIG51bWJlciA9ICdMb2FkaW5nLi4uJztcbiAgICBpZiAoZXJyb3IpIG51bWJlciA9ICdGYWlsZWQgdG8gZmV0Y2ggYSBjYXJkLic7XG5cbiAgICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PkFzayBhIHF1ZXN0aW9uIG91dGxvdWQgYW5kIHByZXNzIHRoZSBidXR0b24gYmVsb3cgdG8gZ2VuZXJhdGUgb25lIGNhcmQgdG8gYW5zd2VyIHRoZSBxdWVzdGlvbi48L2gzPlxuICAgICAgICAgIDxoNSBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+QW4gaW50ZXJwcmV0YXRpb24gb2YgdGhlIG1lYW5pbmcgb2YgdGhlIGNhcmQgd2lsbCBhcHBlYXIgYmVsb3cgaXQuPC9oNT5cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbjpcImF1dG9cIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX1jbGFzc05hbWU9XCJidXR0b25cIj5TaG93IENhcmQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidibG9jayd9fT5cbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luOlwiYXV0b1wiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fSBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+PGgxPntudW1iZXJ9PC9oMT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PjxoMj57Y2FyZE5hbWV9PC9oMj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PjxoND57Zm9ydHVuZUxpc3R9PC9oND48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGI+UXVlc3Rpb25zIHRvIGFzazo8L2I+PHVsPntxdWVzdGlvbkxpc3R9PC91bD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+PHNwYW4gc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PjxiPkxpZ2h0IE1lYW5pbmdzOjwvYj48L3NwYW4+PHVsPntsaWdodExpc3R9PC91bD48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj48Yj5EYXJrIE1lYW5pbmdzOjwvYj48dWw+e3NoYWRvd0xpc3R9PC91bD48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj48Yj5LZXl3b3Jkczo8L2I+PHVsPntrZXl3b3JkTGlzdH08L3VsPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})