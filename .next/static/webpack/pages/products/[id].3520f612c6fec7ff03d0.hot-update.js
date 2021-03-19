webpackHotUpdate_N_E("pages/products/[id]",{

/***/ "./component/home.js":
/*!***************************!*\
  !*** ./component/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_bitelit_funloop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_bitelit_funloop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_bitelit_funloop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_14__);










var _jsxFileName = "E:\\bitelit\\funloop\\component\\home.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Home = /*#__PURE__*/function (_Component) {
  Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "add", /*#__PURE__*/function () {
      var _ref = Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_bitelit_funloop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(item) {
        var element, config;
        return E_bitelit_funloop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(item);
                // console.log(this.state.quantity)
                if (_this.state.isAdded == false && _this.state.quantity != 0) {
                  // console.log(this.state.isAdded)
                  element = {};
                  element.productID = item.id;
                  element.quantity = _this.state.quantity;

                  _this.setState({
                    isAdded: true
                  }); // var a = JSON.stringify(element)
                  // console.log(a);


                  config = {
                    method: 'post',
                    url: 'http://localhost:4000/cartItems',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  };
                  config.data = element;
                  console.log(config); // console.log(this.state.isAdded)

                  axios__WEBPACK_IMPORTED_MODULE_13___default()(config).then(function (response) {
                    console.log(JSON.stringify(response.data));
                  })["catch"](function (error) {
                    console.log(error);
                  });
                } else {
                  console.log(_this.state.isAdded);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "decreaseQuantity", /*#__PURE__*/function () {
      var _ref2 = Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_bitelit_funloop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(item) {
        var q, a, element, config;
        return E_bitelit_funloop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this.state.quantity > 0) {
                  if (_this.state.isAdded == true) {
                    q = _this.state.quantity;
                    a = q - 1;

                    _this.setState({
                      quantity: a
                    });

                    element = {};
                    element.productID = item.id;
                    element.quantity = a;
                    config = {
                      method: 'put',
                      url: 'http://localhost:4000/cartItems',
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    };
                    config.data = element;
                    axios__WEBPACK_IMPORTED_MODULE_13___default()(config).then(function (response) {
                      console.log(JSON.stringify(response.data));
                    })["catch"](function (error) {
                      console.log(error);
                      this.setState({
                        quantity: q
                      });
                    });
                  } else {
                    q = _this.state.quantity - 1;

                    _this.setState({
                      quantity: q
                    });
                  }
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "increaseQuantity", /*#__PURE__*/function () {
      var _ref3 = Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_bitelit_funloop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(item) {
        var q, a, element, config;
        return E_bitelit_funloop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this.state.quantity < 10) {
                  if (_this.state.isAdded == true) {
                    q = _this.state.quantity;
                    a = q + 1;

                    _this.setState({
                      quantity: a
                    });

                    element = {};
                    element.productID = item.id;
                    element.quantity = a;
                    config = {
                      method: 'put',
                      url: 'http://localhost:4000/cartItems',
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    };
                    config.data = element;
                    axios__WEBPACK_IMPORTED_MODULE_13___default()(config).then(function (response) {
                      console.log(JSON.stringify(response.data));
                    })["catch"](function (error) {
                      console.log(error);
                      this.setState({
                        quantity: q
                      });
                    });
                  } else {
                    q = _this.state.quantity + 1;

                    _this.setState({
                      quantity: q
                    });
                  }
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    _this.state = {
      quantity: 0,
      isAdded: false
    };
    return _this;
  }

  Object(E_bitelit_funloop_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      // productID=this.props.item[0].id;
      if (this.props.cartData.length > 0) {
        var cartProduct = this.props.cartData.filter(function (i) {
          return i.productID == _this2.props.item[0].id;
        });

        if (cartProduct.length == 1) {
          this.setState({
            quantity: cartProduct[0].quantity,
            isAdded: true
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          backgroundColor: '#edebeb',
          height: '100vh',
          width: 'null'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container-md container-lg",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row row-cols-1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                display: 'flex',
                justifyContent: 'center'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_14___default.a, {
                src: "data:image/jpeg;base64,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",
                alt: "Picture of the author",
                width: 300,
                height: 300
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row row-cols-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'center'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    flexDirection: 'column'
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: this.props.item[0].productName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 15
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: this.props.item[0].description
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 15
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: ["Price :  ", this.props.item[0].price]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 15
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                      href: '/cart',
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        style: {
                          width: '125px',
                          height: '35px',
                          backgroundColor: "skyblue",
                          borderRadius: '10px'
                        },
                        children: "go to cart page"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 168,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 15
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      flexDirection: 'row'
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: [" Quantity ", "     ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          style: {
                            width: '40px',
                            height: '35px',
                            backgroundColor: "skyblue",
                            borderRadius: '10px'
                          },
                          onClick: function onClick() {
                            return _this3.decreaseQuantity(_this3.props.item[0]);
                          },
                          children: "-"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 176,
                          columnNumber: 23
                        }, this), "  ", this.state.quantity, "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          style: {
                            width: '40px',
                            height: '35px',
                            backgroundColor: "skyblue",
                            borderRadius: '10px'
                          },
                          onClick: function onClick() {
                            return _this3.increaseQuantity(_this3.props.item[0]);
                          },
                          children: "+"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 182,
                          columnNumber: 23
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 17
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      style: {
                        width: '100px',
                        height: '35px',
                        backgroundColor: "skyblue",
                        borderRadius: '10px'
                      },
                      onClick: function onClick() {
                        return _this3.add(_this3.props.item[0]);
                      },
                      children: "add"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 7
      }, this);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiaXRlbSIsInN0YXRlIiwiaXNBZGRlZCIsInF1YW50aXR5IiwiZWxlbWVudCIsInByb2R1Y3RJRCIsImlkIiwic2V0U3RhdGUiLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInEiLCJhIiwiY2FydERhdGEiLCJsZW5ndGgiLCJjYXJ0UHJvZHVjdCIsImZpbHRlciIsImkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJwcm9kdWN0TmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJib3JkZXJSYWRpdXMiLCJkZWNyZWFzZVF1YW50aXR5IiwiaW5jcmVhc2VRdWFudGl0eSIsImFkZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCO0FBQUEsOFBBdUJkLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIO0FBQ0E7QUFDQSxvQkFBSSxNQUFLQyxLQUFMLENBQVdDLE9BQVgsSUFBc0IsS0FBdkIsSUFBa0MsTUFBS0QsS0FBTCxDQUFXRSxRQUFYLElBQXVCLENBQTVELEVBQWdFO0FBQzlEO0FBQ0lDLHlCQUYwRCxHQUVoRCxFQUZnRDtBQUc5REEseUJBQU8sQ0FBQ0MsU0FBUixHQUFvQkwsSUFBSSxDQUFDTSxFQUF6QjtB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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFpRUQ7Ozs7RUFyTWdCeUMsZ0Q7O0FBd01KM0MsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvW2lkXS4zNTIwZjYxMmM2ZmVjN2ZmMDNkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICBpc0FkZGVkOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgLy8gcHJvZHVjdElEPXRoaXMucHJvcHMuaXRlbVswXS5pZDtcbiAgICBpZih0aGlzLnByb3BzLmNhcnREYXRhLmxlbmd0aCA+IDApe1xuICAgICAgY29uc3QgY2FydFByb2R1Y3QgPSB0aGlzLnByb3BzLmNhcnREYXRhLmZpbHRlcigoaSk9PntcbiAgICAgICAgcmV0dXJuIGkucHJvZHVjdElEID09IHRoaXMucHJvcHMuaXRlbVswXS5pZDtcbiAgICAgIH0pXG4gICAgICBpZihjYXJ0UHJvZHVjdC5sZW5ndGggPT0gMSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1YW50aXR5OmNhcnRQcm9kdWN0WzBdLnF1YW50aXR5LCBpc0FkZGVkOiB0cnVlfSlcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICBcbiAgfVxuXG5cbiAgYWRkPSBhc3luYyAoaXRlbSk9PntcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnF1YW50aXR5KVxuICAgIGlmKCh0aGlzLnN0YXRlLmlzQWRkZWQgPT0gZmFsc2UpICYmICh0aGlzLnN0YXRlLnF1YW50aXR5ICE9IDApICl7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzQWRkZWQpXG4gICAgICB2YXIgZWxlbWVudCA9IHt9XG4gICAgICBlbGVtZW50LnByb2R1Y3RJRCA9IGl0ZW0uaWQ7XG4gICAgICBlbGVtZW50LnF1YW50aXR5ID0gdGhpcy5zdGF0ZS5xdWFudGl0eTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQWRkZWQgOiB0cnVlfSlcbiAgICAgIC8vIHZhciBhID0gSlNPTi5zdHJpbmdpZnkoZWxlbWVudClcbiAgICAgIC8vIGNvbnNvbGUubG9nKGEpO1xuICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsIFxuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvY2FydEl0ZW1zJyxcbiAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgY29uZmlnLmRhdGEgPSBlbGVtZW50O1xuICAgICAgY29uc29sZS5sb2coY29uZmlnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNBZGRlZClcbiAgXG4gICAgICBheGlvcyhjb25maWcpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzQWRkZWQpXG4gICAgfVxuXG4gICAgXG4gIH1cblxuICBkZWNyZWFzZVF1YW50aXR5PSBhc3luYyAoaXRlbSk9PntcbiAgICBpZih0aGlzLnN0YXRlLnF1YW50aXR5PjApe1xuICAgICAgaWYodGhpcy5zdGF0ZS5pc0FkZGVkID09IHRydWUpe1xuICAgICAgICB2YXIgcSA9IHRoaXMuc3RhdGUucXVhbnRpdHk7XG4gICAgICAgIHZhciBhID0gcSAtIDE7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1YW50aXR5OmF9KTtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB7fVxuICAgICAgICBlbGVtZW50LnByb2R1Y3RJRCA9IGl0ZW0uaWQ7XG4gICAgICAgIGVsZW1lbnQucXVhbnRpdHkgPSBhO1xuICAgICAgICBcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9jYXJ0SXRlbXMnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZy5kYXRhID0gZWxlbWVudDtcbiAgICAgICAgYXhpb3MoY29uZmlnKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVhbnRpdHk6cX0pO1xuICAgICAgICB9KTtcbiAgICAgIH1lbHNle1xuICAgICAgICB2YXIgcSA9IHRoaXMuc3RhdGUucXVhbnRpdHkgLSAxO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtxdWFudGl0eTogcX0pXG4gICAgICB9XG4gICAgICBcbiAgICB9IFxuICB9XG5cbiAgaW5jcmVhc2VRdWFudGl0eT0gYXN5bmMgKGl0ZW0pPT57XG4gICAgaWYodGhpcy5zdGF0ZS5xdWFudGl0eTwxMCl7XG4gICAgICBpZih0aGlzLnN0YXRlLmlzQWRkZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHZhciBxID0gdGhpcy5zdGF0ZS5xdWFudGl0eTtcbiAgICAgICAgdmFyIGEgPSBxICsgMTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVhbnRpdHk6YX0pO1xuICAgICAgICB2YXIgZWxlbWVudCA9IHt9XG4gICAgICAgIGVsZW1lbnQucHJvZHVjdElEID0gaXRlbS5pZDtcbiAgICAgICAgZWxlbWVudC5xdWFudGl0eSA9IGE7XG4gICAgICAgIFxuICAgICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2NhcnRJdGVtcycsXG4gICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uZmlnLmRhdGEgPSBlbGVtZW50O1xuICAgICAgICBheGlvcyhjb25maWcpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdWFudGl0eTpxfSk7XG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZhciBxID0gdGhpcy5zdGF0ZS5xdWFudGl0eSArIDE7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1YW50aXR5OiBxfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonI2VkZWJlYicsaGVpZ2h0OicxMDB2aCcsIHdpZHRoOidudWxsJ319PlxuICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIGZpeGVkLXRvcCBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPk5hdmJhcjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLW1kIGNvbnRhaW5lci1sZ1wiID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctY29scy0xXCIgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhBUEVCQVBEZzhORUJBUUR3NFFFQThQRFE4UURnOFFGUkVXRmhVVkZSTVlIeWdnR0JzcUd4VVdJVEVoSlNzdEx5NHZGeDgvT2pZc055a3ZMaXNCQ2dvS0RnME9HaEFRR2kwZEhSMHRMU3N0TFRVckt5NHRMU3N0TFMwdExTMHJMU3NyTFMwdUt5c3RMUzByTFMweUt5MHRLeXN0TFNzdExTMHJMUzB0Sy8vQUFCRUlBUFFBemdNQklnQUNFUUVERVFIL3hBQWNBQUVBQVFVQkFRQUFBQUFBQUFBQUFBQUFCZ0lEQkFVSUFRZi94QUJQRUFBQ0FRSUNCQWdJQ1FrRUN3QUFBQUFBQVFJREVRUWhCUVlTTVFjVFFWRmhjWFNCSWpRMWtaS3hzc0VXRnpKVWNwU2gwZUVVSXlWU1UySnowdkFWTTJTQ0pFSkRSR09EazZLencvTC94QUFYQVFFQkFRRUFBQUFBQUFBQUFBQUFBQUFBQVFJRC84UUFHeEVCQVFFQUF3RUJBQUFBQUFBQUFBQUFBQUVSQWlFeEVtSC8yZ0FNQXdFQUFoRURFUUEvQVB1SUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZyRTRtRktMblZuQ0VGdmxPU2pGZDdBdWdqMDljOENuNE5XYyttblFxeWo1N1psTWRkY0UxZFBFWjgrRnJwK1p4QWtZSTk4TXNIejRqNnJXKzQ5K0dHRS94SDFXdi9LQklBYUQ0WDRUL0FCUDFTdjhBeWo0WDRYbXhQMVN2L0tCdndhRDRYWVhteFgxU3YvS2UvQzNDODJLK3FWL3VHamZBaStLMS93QkhVbGVyV25UUzN1ZENxbEhPeXU3WkdKOGFlaHZuMVAwWmZjQk13UXo0MDlEZlBxZm95KzRmR25vYjU5VDlHWDNBVE1FTGZDcG9iSmZsc00vM0o4M0xsa1oyamRmOUZZbVNoU3gxQnplNk1wYk4rOTVBU1lIaWQ4MW1ubW10elBRQUFBQUFBQUFBQUE4bEpKTnZKSk50OHlSOGIxaTA5TEYxWlZxanRTamZpYWIrUlRwM3NwTmNzbms3OUtTUHFtc2M5bkI0cVNkcllhdm56ZUE4em4zV09wYWpzckpYaEY4aTJWRjN2MFdiSlJsNFBXV2pWcnhwT280S1dVWld2ZDhtU1RlZmYxa3FoZ2IyYXJUYWF1bkdVSEdTNTA3Wm53ekR6dDRUYlZSUzJyNVhVbGRwdFA4QWVVZnRQcmVxbWsrTXc2bTkwcXJjVStUd0Z4bHVoUzJlOXNYamswbFNiRGFDcXppNVFxMWJMbGJwMjgxakVqVW5Ua29WV21tMm96U3Ruek5jak5wb3pUOHFkTjAxVGhPOTloeXFSZzMxSi9LN2lQNlN4RW01cWFjWnFTazAwMDFMYVQzUGQrSmxycHVvc3V4WmlVNTVJdlJrRVpDWldpekdSY2l3UE1WaG9WWXVGU0tsRnBxelc2NnM3Y3g4SjE4MWZqZ2NVNHh1cVZTOG9KSldXNjZYUm1uMFh0eUgzcE1odXZYRUtwVGRlRG10aUtqYWJoS0xjcDNhZmNqWEgwcjRrbEcwcnVWOHRuSlo5WjVDTGJzazIzdVNWMno2RlV3R0hxZjNGV2RPWEpDdmFVSC9BTXlLVnUrUGVqVTFwMUtFM0NhY0p4dGwwUGMwMWsxek5aTTZmSDZ6cVBVNk1iTEpQSmNyS25oNDhsMCtkTm0zeE1JVnJ2S0ZYOWJkR2IvZVh2MzlacTV4Y1c0eVZtdDZKbUsrd2NCZXU5YVZWNkx4YzNVV3k1WWVjbmVVYlp1TitZKzRuSmZCMVZjZE02UGFkcjE0SjlXZVh1T3RESUFBQUFBQUFBQUFEVjYwSlBCWXROSnA0YXNtbnVhMkdjLzZjeml2cHIyRG9IV2Z4TEZkbnJld3pualQ5UzBFL3dEaVJTeXZtNDJSS0kvVzBmQnU3U3YzcjFiKzhrV2c4WTRRY0huc1dVWTJzbEcveVVsdXo5WkNvMUtsUzgwN0s3eXZ6UmNzK2ZLTE50b1hHT1NXMDgxTFliKzIvZGtXOGJKcExHeWVJVlc5U2MwNVN6YmQyNWRDL3I3aVM2TXhUcVlTTzIzSjBxcm93azNkOFU0S1d6ZmxVV3N1YmI2aU0xOEZTMjd5bE9EbG5hblVwcU1uenFNbDRQZGtibkN6c293aWxHRUZMWmdudE84bXRxVXBjc25aWjlDdHVIS3l6b2lZVTU3akloVU5mQ1Jkak13clpRbVhZeU5mQ29aRUtnR2FtUURoU2xiaVh5M2dyOHR2enYzRTVqTWcvQ2ZGT25GdmZIaW11dHlxTDFObG5vZzFERU8rODJ1TFhIWWFXMTh1akdWU25MbFVWbk9IVTFkMjUwdWQzMGRKN0sybjNMbkZiRnRSbG5uSk9QYzhuOWgxM0dXTHhoWFVseGl6K1ZINUw1MXpHSHRucW1SVzg0UFZmVEdqNzUvbjRQUG5WMmpyZzVKNFBuK21NQStldkgxU090aklBQUFBQUFBQUFBRFdheitKWXZzOWIyR2Mvd0NrOE54c0hHOW5rNHY5V1MzWDZNMnZNZmV0Y2FqamdNVTFiT2s0NTgwbW92N0d6NGJDUktJSmlORTFJTnEwNEp0NWJDY1Y5R1Y4MTFlZG1WaGFHeEhaU2ZtemI1MlRhRVk4MXVwdEYrRVZ6eTlLUTFVTW5oS3RXU25CT1cwa25ubkZwV2VYZGZMbkpQb3pCeVRncFh5VWIzMzJYSyt1eHNvcGZ2ZWxJdXdzdDJSTkdTcEZ5TWpHVWl0U0F5b3pMOEtoaFJrWEl5QTJNS2hDZUU1M2pTZklwVTc5Q3RXSlhDWkdkZThGV3hOUGk2RU51ZHFUdHR3aDRLbFV2bkpwY3YyaUQ1cFV4TjM5aVhRV0oxTG1WajlDNHVnbkt0aHE5T0svMmpwUzRyL3FMd1g1elhYTlN5cGk1Y1hLRXoyNVJJK0RwL3BmQWZ4NCtwblhKeUJxRlVjZEtZT1N0ZU5UYVY5MTFHVFZ6cjhnQUFBQUFBQUFBQURSNjdlVDhUOUJlM0UrRlFrZmRkZC9KK0oraEgyNG53U0VpVldiQ1plaE13b3lMMEpFR2JHUmVqSXc0U0xzWkFaU2tYRkl4NHlMa1pBWDB5NUdSanhaY2l3TWlNaU42NllwMDR4Y2NyOFd2L0svY1NDTEl4cjFHVXFWb3B5ZDZPU1RiMzFlUXM5U285aHRZNjFOM2hVbkY5RW1pckVWTUpqUDcrbXFOVi83eGg0eGk3NTUxS1dVWjV1N2VVbno4aEhhamFiVWswMXZUVm11NHBWV3h1M2ZVaXJTZWpLbUdrbFBabEdTdlRxd2JkS3BIbmkvV25acmxSaUkzV0V4MFpRZEN2ZDBwdS9QS25Qa3FRNlY5cXVqVVltZzZjNVFsYThYdlR2R1MzcHA4elRUN3pLdHpxTjVTd24wNWV4STdCT1BkUm4ra3NMOU9Yc1NPd2dBQUFBQUFBQUFBQTFldEhpV0w3Tlc5aG5QRUpIUSt0UGlXTDdOVzlobk9rR1NqSmpJdXhrWTBXWEl5SXJMaEl2UmtZY1pGdXZwT25Ua295YjJzcnBLK3pmbkEyMFpGMk1qVThmSGJVbTIwdmtwTGRseTNOaFJxcVNUVzVnWlVXWElzeDRzdVJZR1JGa1gxNnEyaEhwbFNYbTQxa2tUSXZyM0piRUwvclUvVlZMUFVRM0U0bHpTaksxbzMyYkpYVituZStvd0paTXlKeFJZbkI5WnFqeFNMbUpudFJpM3ZqNFArWGV2ZVdDcStUWFI2bUJJT0RieXZnTzBSOVRPdkRrUGcyOHI0RHRFZlV6cndnQUFBQUFBQUFBQURWNjArSll2czFiMkdjNVJaMGJyVDRsaSt6VnZZWnpoRmtvdXBseUxMQ1pXbVJXUkdSR3NhM3hsUysvYm42OGlReFpyOUo0Q1U1YmROWGJzcFJ1bDM1Z1Y0U3Z0UVQ1YldmV2lRMEpwcGJPNnlzUnZCNENyQzZhaTA3UEtXNTlOL3dDc2plWVdHeEZMdmI1MkJzSXlMa1dZc1pGNk1nTWlMSXRyNi9BcC93QVNuN05Za3NaRVoxNGk1UWhia25UZi9iV0xQVVFsc3B1VlRUUmFiTkNwcE10eVZybnR5cDVxd0crNE52SytBN1JIMU02OE9RK0RkZnBmQWRvajZtZGVFQUFBQUFBQUFBQUFhdldueExGOW1yZXd6bTZKMGpyVDRsaSt6VnZZWnpiSGNTcXJUSzB5MmoxTWd2Smx5TExDWldtQmtSa1hveU1XTWk3R1FHWENSZGpJeEl5THNaQVprWkdqMXBzNDU4OVAvd0JwdG95Tk5yTlB3T3QwbDlsVTF4OUVNeEtNU1NNK3RFeFp4TldJc0F1T0hLeTIyUVNQZzU4cjREdEVQVXpybzVFNE9QSytBN1JIMU02N0lBQUFBQUFBQUFBQTFldFBpV0w3Tlc5aG5OY2R5T2xOYWZFc1gyYXQ3RE9hNDdrU3FxUFVVbnBCV21WcGxwTXFUQXZKbHlNaXdtVnBnWk1aRjJNakZqSXVSa0JseGthM1RsTnpqWmNqcFA3S3BtUmthN1R0QjFZV2ltN1NwUExxcXIzbG5vaitKcHhqdmxHL1dyR3VxVklyZDRUOHlNMnBvK1hNVXgwZStWSFM2aldWTHZlVlVxRGU0MjlMUlVtbk9Wb1U0L0tuTjJoSHY1K2cxMk54VVhlRkcreHl6YXRLcDNjaTZESTNQQjViKzJNQmJjc1JGWDU4bm1kY25JbkJ4NVh3SGFJK3BuWFpBQUFBQUFBQUFBQUdyMW84U3hmWnEzc001cWp1WFVkSzYwZUpZdnMxYjJHYzB3M0xxUktLajA4QkZWSHFaU2VnVnBsU1piVEtrd0wwV1Z4a1dFeXRTQXlJeU1qQ1lHRmR6alVxMHFLakdsTGFxMUkwNHQzcUt5YjVjekRqSTFHdEN2Ulg4V2o3Rllva2xlam82Z3IxZEk0ZVZ2OEFWcFRkWithS1pvOUlhejRLbmRZYkR6cnlXNmRmODNTWFRzTE9YZTBRM1pQTEYyblRLMG5wU3RpWlhyVHVsOG1FVW8wNGZSaXNsMTd6RFI3WVdDSkZ3Y2VWOEIyaVBxWjEyY2k4SFBsZkFkb2g2bWRkQUFBQUFBQUFBQUFCcTlhUEVzWDJhdDdET2FZYmwxSTZWMXJUL0ljWnMyVC9BQ1d2WnRYU2ZGdTExbGRITk1OeTZrU2lvOVBBUlhwNlVub0hwVW1VSG9GYVpXbVdreXBNQzZtYTdUNnZTWFJWbyt4V001TXh0STBuT0RWMGtwVW03cDN2YXJiUHpsZ2pNcVY5eGJkTjh4dktXams3dHlkbG5KcU5sRmRMZTR4OFhKVHRDRWJRamV6ZWM1TjcyMzdqV0RWYkJTNDVtZlZwYkNUZnltdkJYUitzK2d4WEczV0J1dUR6eXhvLytQRDNuWEp5TnFBbi9hK2o3V1QvQUNpbnZWOHJ1L2ZhL3dDTzQ2NUlnQUFBQUFBQUFBQU1iU09HNDZqVnBmdGFWU242VVd2ZWN3MXNQS2xLVktvbXAwcFNwelRWbXBSZG5sL1c4Nm5JUHJ4d2UwOGZKNGloTlVNVGJ3bTR0MDZ0dDIwbG1uMG9nK0ducEthM0IzcFNNbWxoNHpTM1NqVVZuM05YS1BpLzBwODFmcG9LaklKTDhBTktmTlg2UStBT2svbXI5TDhBSTBla2srQU9rL21yOUw4RDM0QWFVK2F2MDBCR3oxTWtud0EwcDgxZnBvOFdvV2xNL3dEUkpaY3ZHUXM4dVQ4UUk2bVp1Rnd0YVVkcWxSMjlwdndwVXVNWGc1SnJrdmR6V1p0cGFoYVUyWGJDdHk1SXVkb2Q4bG4zSkxyUnA2L0JucHliY3BRajRYSXNvcFdza2xzNUpLeVM1a1dkQ3pqOEZVeS9LcXRPa2x1alVuQ2trK2VOSld6NmxjMU5mRlVvWlVFNmt2Mms0dU5OZlJnODVmNXJkVE52SGdxMDB0MUtDNnYvQUpLMXdYYWI1S2NQZjU5azE5THFKVm5tNVRibE41dTd6djBtTzFmTmt5K0tmVFg3S0hwZmdaMmkrQm5TZGFhamlKMDZFTHE4czVPM1FsN3lhalhjRHVpcFlyVEZDY1UzRERmbnB5dGt0bmRuMHM2aUk1cVRxZGh0RVVPSnc2Y3BTczZ0YVM4T28vY3Vna1pFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCLy85az1cIlxuICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1jb2xzLTFcIiA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxuICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5pdGVtWzBdLnByb2R1Y3ROYW1lfTwvcD5cbiAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuaXRlbVswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwPlByaWNlIDogIHt0aGlzLnByb3BzLml0ZW1bMF0ucHJpY2V9PC9wPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jYXJ0J30+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gIHN0eWxlPXt7d2lkdGg6ICcxMjVweCcsIGhlaWdodDogJzM1cHgnLCBiYWNrZ3JvdW5kQ29sb3I6IFwic2t5Ymx1ZVwiLCBib3JkZXJSYWRpdXM6JzEwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgZ28gdG8gY2FydCBwYWdlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4RGlyZWN0aW9uOidyb3cnfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD4gUXVhbnRpdHkge1wiICAgICBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7d2lkdGg6ICc0MHB4JywgaGVpZ2h0OiAnMzVweCcsIGJhY2tncm91bmRDb2xvcjogXCJza3libHVlXCIsIGJvcmRlclJhZGl1czonMTBweCd9fSBvbkNsaWNrPXsoKT0+dGhpcy5kZWNyZWFzZVF1YW50aXR5KHRoaXMucHJvcHMuaXRlbVswXSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAge1wiICBcIn1cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5xdWFudGl0eX0gXG4gICAgICAgICAgICAgICAgICAgICAge1wiICBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7d2lkdGg6ICc0MHB4JywgaGVpZ2h0OiAnMzVweCcsIGJhY2tncm91bmRDb2xvcjogXCJza3libHVlXCIsIGJvcmRlclJhZGl1czonMTBweCd9fSBvbkNsaWNrPXsoKT0+dGhpcy5pbmNyZWFzZVF1YW50aXR5KHRoaXMucHJvcHMuaXRlbVswXSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7d2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzM1cHgnLCBiYWNrZ3JvdW5kQ29sb3I6IFwic2t5Ymx1ZVwiLCBib3JkZXJSYWRpdXM6JzEwcHgnfX0gb25DbGljaz17KCk9PnRoaXMuYWRkKHRoaXMucHJvcHMuaXRlbVswXSl9PlxuICAgICAgICAgICAgICAgICAgICAgIGFkZFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9