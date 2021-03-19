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
          style: {
            marginTop: '55px'
          },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiaXRlbSIsInN0YXRlIiwiaXNBZGRlZCIsInF1YW50aXR5IiwiZWxlbWVudCIsInByb2R1Y3RJRCIsImlkIiwic2V0U3RhdGUiLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInEiLCJhIiwiY2FydERhdGEiLCJsZW5ndGgiLCJjYXJ0UHJvZHVjdCIsImZpbHRlciIsImkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJwcm9kdWN0TmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJib3JkZXJSYWRpdXMiLCJkZWNyZWFzZVF1YW50aXR5IiwiaW5jcmVhc2VRdWFudGl0eSIsImFkZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCO0FBQUEsOFBBdUJkLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIO0FBQ0E7QUFDQSxvQkFBSSxNQUFLQyxLQUFMLENBQVdDLE9BQVgsSUFBc0IsS0FBdkIsSUFBa0MsTUFBS0QsS0FBTCxDQUFXRSxRQUFYLElBQXVCLENBQTVELEVBQWdFO0FBQzlEO0FBQ0lDLHlCQUYwRCxHQUVoRCxFQUZnRDtBQUc5REEseUJBQU8sQ0FBQ0MsU0FBUixHQUFvQkwsSUFBSSxD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QVgsQ0FBZ0IsQ0FBaEIsQ0FBVCxDQUFKO0FBQUEsdUJBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWlFRDs7OztFQXJNZ0IwQyxnRDs7QUF3TUo1QyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9baWRdLmEyZjkyNTIzMjdhNzJmZGY0Yzc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdWFudGl0eTogMCxcbiAgICAgIGlzQWRkZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAvLyBwcm9kdWN0SUQ9dGhpcy5wcm9wcy5pdGVtWzBdLmlkO1xuICAgIGlmKHRoaXMucHJvcHMuY2FydERhdGEubGVuZ3RoID4gMCl7XG4gICAgICBjb25zdCBjYXJ0UHJvZHVjdCA9IHRoaXMucHJvcHMuY2FydERhdGEuZmlsdGVyKChpKT0+e1xuICAgICAgICByZXR1cm4gaS5wcm9kdWN0SUQgPT0gdGhpcy5wcm9wcy5pdGVtWzBdLmlkO1xuICAgICAgfSlcbiAgICAgIGlmKGNhcnRQcm9kdWN0Lmxlbmd0aCA9PSAxKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVhbnRpdHk6Y2FydFByb2R1Y3RbMF0ucXVhbnRpdHksIGlzQWRkZWQ6IHRydWV9KVxuICAgICAgfVxuICAgICAgXG4gICAgfVxuICAgIFxuICB9XG5cblxuICBhZGQ9IGFzeW5jIChpdGVtKT0+e1xuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucXVhbnRpdHkpXG4gICAgaWYoKHRoaXMuc3RhdGUuaXNBZGRlZCA9PSBmYWxzZSkgJiYgKHRoaXMuc3RhdGUucXVhbnRpdHkgIT0gMCkgKXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNBZGRlZClcbiAgICAgIHZhciBlbGVtZW50ID0ge31cbiAgICAgIGVsZW1lbnQucHJvZHVjdElEID0gaXRlbS5pZDtcbiAgICAgIGVsZW1lbnQucXVhbnRpdHkgPSB0aGlzLnN0YXRlLnF1YW50aXR5O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNBZGRlZCA6IHRydWV9KVxuICAgICAgLy8gdmFyIGEgPSBKU09OLnN0cmluZ2lmeShlbGVtZW50KVxuICAgICAgLy8gY29uc29sZS5sb2coYSk7XG4gICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JywgXG4gICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9jYXJ0SXRlbXMnLFxuICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBjb25maWcuZGF0YSA9IGVsZW1lbnQ7XG4gICAgICBjb25zb2xlLmxvZyhjb25maWcpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5pc0FkZGVkKVxuICBcbiAgICAgIGF4aW9zKGNvbmZpZylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNBZGRlZClcbiAgICB9XG5cbiAgICBcbiAgfVxuXG4gIGRlY3JlYXNlUXVhbnRpdHk9IGFzeW5jIChpdGVtKT0+e1xuICAgIGlmKHRoaXMuc3RhdGUucXVhbnRpdHk+MCl7XG4gICAgICBpZih0aGlzLnN0YXRlLmlzQWRkZWQgPT0gdHJ1ZSl7XG4gICAgICAgIHZhciBxID0gdGhpcy5zdGF0ZS5xdWFudGl0eTtcbiAgICAgICAgdmFyIGEgPSBxIC0gMTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVhbnRpdHk6YX0pO1xuICAgICAgICB2YXIgZWxlbWVudCA9IHt9XG4gICAgICAgIGVsZW1lbnQucHJvZHVjdElEID0gaXRlbS5pZDtcbiAgICAgICAgZWxlbWVudC5xdWFudGl0eSA9IGE7XG4gICAgICAgIFxuICAgICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2NhcnRJdGVtcycsXG4gICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uZmlnLmRhdGEgPSBlbGVtZW50O1xuICAgICAgICBheGlvcyhjb25maWcpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdWFudGl0eTpxfSk7XG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZhciBxID0gdGhpcy5zdGF0ZS5xdWFudGl0eSAtIDE7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1YW50aXR5OiBxfSlcbiAgICAgIH1cbiAgICAgIFxuICAgIH0gXG4gIH1cblxuICBpbmNyZWFzZVF1YW50aXR5PSBhc3luYyAoaXRlbSk9PntcbiAgICBpZih0aGlzLnN0YXRlLnF1YW50aXR5PDEwKXtcbiAgICAgIGlmKHRoaXMuc3RhdGUuaXNBZGRlZCA9PSB0cnVlKXtcbiAgICAgICAgdmFyIHEgPSB0aGlzLnN0YXRlLnF1YW50aXR5O1xuICAgICAgICB2YXIgYSA9IHEgKyAxO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtxdWFudGl0eTphfSk7XG4gICAgICAgIHZhciBlbGVtZW50ID0ge31cbiAgICAgICAgZWxlbWVudC5wcm9kdWN0SUQgPSBpdGVtLmlkO1xuICAgICAgICBlbGVtZW50LnF1YW50aXR5ID0gYTtcbiAgICAgICAgXG4gICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvY2FydEl0ZW1zJyxcbiAgICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25maWcuZGF0YSA9IGVsZW1lbnQ7XG4gICAgICAgIGF4aW9zKGNvbmZpZylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1YW50aXR5OnF9KTtcbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFyIHEgPSB0aGlzLnN0YXRlLnF1YW50aXR5ICsgMTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVhbnRpdHk6IHF9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOicjZWRlYmViJyxoZWlnaHQ6JzEwMHZoJywgd2lkdGg6J251bGwnfX0+XG4gICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgZml4ZWQtdG9wIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+TmF2YmFyPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbWQgY29udGFpbmVyLWxnXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzU1cHgnfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LWNvbHMtMVwiID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4QVBFQkFQRGc4TkVCQVFEdzRRRUE4UERROFFEZzhRRlJFV0ZoVVZGUk1ZSHlnZ0dCc3FHeFVXSVRFaEpTc3RMeTR2Rng4L09qWXNOeWt2TGlzQkNnb0tEZzBPR2hBUUdpMGRIUjB0TFNzdExUVXJLeTR0TFNzdExTMHRMUzByTFNzckxTMHVLeXN0TFMwckxTMHlLeTB0S3lzdExTc3RMUzByTFMwdEsvL0FBQkVJQVBRQXpnTUJJZ0FDRVFFREVRSC94QUFjQUFFQUFRVUJBUUFBQUFBQUFBQUFBQUFBQmdJREJBVUlBUWYveEFCUEVBQUNBUUlDQkFnSUNRa0VDd0FBQUFBQUFRSURFUVFoQlFZU01RY1RRVkZoY1hTQklqUTFrWkt4c3NFV0Z6SlVjcFNoMGVFVUl5VlNVMkp6MHZBVk0yU0NKRUpEUkdPRGs2S3p3L0wveEFBWEFRRUJBUUVBQUFBQUFBQUFBQUFBQUFBQUFRSUQvOFFBR3hFQkFRRUFBd0VCQUFBQUFBQUFBQUFBQUFFUkFpRXhFbUgvMmdBTUF3RUFBaEVERVFBL0FQdUlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGckU0bUZLTG5WbkNFRnZsT1NqRmQ3QXVnajA5YzhDbjROV2MrbW5RcXlqNTdabE1kZGNFMWRQRVo4K0ZycCtaeEFrWUk5OE1zSHo0ajZyVys0OStHR0UveEgxV3YvS0JJQWFENFg0VC9BQlAxU3Y4QXlqNFg0WG14UDFTdi9LQnZ3YUQ0WFlYbXhYMVN2L0tlL0MzQzgySytxVi91R2pmQWkrSzEvd0JIVWxlclduVFMzdWRDcWxIT3l1N1pHSjhhZWh2bjFQMFpmY0JNd1F6NDA5RGZQcWZveSs0Zkdub2I1OVQ5R1gzQVRNRUxmQ3BvYkpmbHNNLzNKODNMbGtaMmpkZjlGWW1TaFN4MUJ6ZTZNcGJOKzk1QVNZSGlkODFtbm1tdHpQUUFBQUFBQUFBQUFBOGxKSk52SkpOdDh5UjhiMWkwOUxGMVpWcWp0U2pmaWFiK1JUcDNzcE5jc25rNzlLU1BxbXNjOW5CNHFTZHJZYXZuemVBOHpuM1dPcGFqc3JKWGhGOGkyVkYzdjBXYkpSbDRQV1dqVnJ4cE9vNEtXVVpXdmQ4bVNUZWZmMWtxaGdiMmFyVGFhdW5HVUhHUzUwN1pud3pEenQ0VGJWUlMycjVYVWxkcHRQOEFlVWZ0UHJlcW1rK013Nm05MHFyY1UrVHdGeGx1aFMyZTlzWGprMGxTYkRhQ3F6aTVRcTFiTGxicDI4MWpFalVuVGtvVldtbTJvelN0bnpOY2pOcG96VDhxZE4wMVRoTzk5aHlxUmczMUovSzdpUDZTeEVtNXFhY1pxU2swMDAxTGFUM1BkK0pscnB1b3N1eFppVTU1SXZSa0VaQ1pXaXpHUmNpd1BNVmhvVll1RlNLbEZwcXpXNjZzN2N4OEoxODFmamdjVTR4dXFWUzhvSkpXVzY2WFJtbjBYdHlIM3BNaHV2WEVLcFRkZURtdGlLamFiaEtMY3AzYWZjalhIMHI0a2xHMHJ1Vjh0bkpaOVo1Q0xic2syM3VTVjJ6NkZVd0dIcWYzRldkT1hKQ3ZhVUgvQU15S1Z1K1BlalUxcDFLRTNDYWNKeHRsMFBjMDFrMXpOWk02Zkg2enFQVTZNYkxKUEpjcktuaDQ4bDArZE5tM3hNSVZydktGWDliZEdiL2VYdjM5WnE1eGNXNHlWbXQ2Sm1LK3djQmV1OWFWVjZMeGMzVVd5NVllY25lVWJadU4rWSs0bkpmQjFWY2RNNlBhZHIxNEo5V2VYdU90RElBQUFBQUFBQUFBRFY2MEpQQll0TkpwNGFzbW51YTJHYy82Y3ppdnByMkRvSFdmeExGZG5yZXd6bmpUOVMwRS93RGlSU3l2bTQyUktJL1cwZkJ1N1N2M3IxYis4a1dnOFk0UWNIbnNXVVkyc2xHL3lVbHV6OVpDbzFLbFM4MDdLN3l2elJjcytmS0xOdG9YR09TVzA4MUxZYisyL2RrVzhiSnBMR3llSVZXOVNjMDVTemJkMjVkQy9yN2lTNk14VHFZU08yM0owcXJvd2szZDhVNEtXemZsVVdzdWJiNmlNMThGUzI3eWxPRGxuYW5VcHFNbnpxTWw0UGRrYm5DenNvd2lsR0VGTFpnbnRPOG10cVVwY3NuWlo5Q3R1SEt5em9pWVU1N2pJaFVOZkNSZGpNd3JaUW1YWXlOZkNvWkVLZ0dhbVFEaFNsYmlYeTNncjh0dnp2M0U1ak1nL0NmRk9uRnZmSGltdXR5cUwxTmxub2cxREVPKzgydUxYSFlhVzE4dWpHVlNuTGxVVm5PSFUxZDI1MHVkMzBkSjdLMm4zTG5GYkZ0UmxubkpPUGM4bjloMTNHV0x4aFhVbHhpeitWSDVMNTF6R0h0bnFtUlc4NFBWZlRHajc1L240UFBuVjJqcmc1SjRQbittTUErZXZIMVNPdGpJQUFBQUFBQUFBQURXYXorSll2czliMkdjL3dDazhOeHNIRzluazR2OVdTM1g2TTJ2TWZldGNhampnTVUxYk9rNDU4MG1vdjdHejRiQ1JLSUppTkUxSU5xMDRKdDViQ2NWOUdWODExZWRtVmhhR3hIWlNmbXpiNTJUYUVZODF1cHRGK0VWenk5S1ExVU1uaEt0V1NuQk9XMGtubm5GcFdlWGRmTG5KUG96QnlUZ3BYeVViMzMyWEsrdXhzb3BmdmVsSXV3c3QyUk5HU3BGeU1qR1VpdFNBeW96TDhLaGhSa1hJeUEyTUtoQ2VFNTNqU2ZJcFU3OUN0V0pYQ1pHZGU4Rld4TlBpNkVOdWRxVHR0d2g0S2xVdm5KcGN2MmlENXBVeE4zOWlYUVdKMUxtVmo5QzR1Z25LdGhxOU9LLzJqcFM0ci9xTHdYNXpYWE5TeXBpNWNYS0V6MjVSSStEcC9wZkFmeDQrcG5YSnlCcUZVY2RLWU9TdGVOVGFWOTExR1RWenI4Z0FBQUFBQUFBQUFEUjY3ZVQ4VDlCZTNFK0ZRa2ZkZGQvSitKK2hIMjRud1NFaVZXYkNaZWhNd295TDBKRUdiR1Jlakl3NFNMc1pBWlNrWEZJeDR5TGtaQVgweTVHUmp4WmNpd01pTWlONjZZcDA0eGNjcjhXdi9LL2NTQ0xJeHIxR1VxVm9weWQ2T1NUYjMxZVFzOVNvOWh0WTYxTjNoVW5GOUVtaXJFVk1KalA3K21xTlYvN3hoNHhpNzU1MUtXVVo1dTdlVW56OGhIYWphYlVrMDF2VFZtdTRwVld4dTNmVWlyU2VqS21Ha2xQWmxHU3ZUcXdiZEtwSG5pL1duWnJsUmlJM1dFeDBaUWRDdmQwcHUvUEtuUGtxUTZWOXF1alVZbWc2YzVRbGE4WHZUdkdTM3BwOHpUVDd6S3R6cU41U3duMDVleEk3Qk9QZFJuK2tzTDlPWHNTT3dnQUFBQUFBQUFBQUExZXRIaVdMN05XOWhuUEVKSFErdFBpV0w3Tlc5aG5Pa0dTakpqSXV4a1kwV1hJeUlyTGhJdlJrWWNaRnV2cE9uVGtveWIyc3JwSyt6Zm5BMjBaRjJNalU4ZkhiVW0yMHZrcExkbHkzTmhScXFTVFc1Z1pVV1hJc3g0c3VSWUdSRmtYMTZxMmhIcGxTWG00MWtrVEl2cjNKYkVML3JVL1ZWTFBVUTNFNGx6U2pLMW8zMmJKWFYrbmUrb3dKWk15SnhSWW5COVpxanhTTG1KbnRSaTN2ajRQK1hldmVXQ3ErVFhSNm1CSU9EYnl2Z08wUjlUT3ZEa1BnMjhyNER0RWZVenJ3Z0FBQUFBQUFBQUFEVjYwK0pZdnMxYjJHYzVSWjBiclQ0bGkrelZ2WVp6aEZrb3VwbHlMTENaV21SV1JHUkdzYTN4bFMrL2JuNjhpUXhacjlKNENVNWJkTlhic3BSdWwzNWdWNFN2dFFUNWJXZldpUTBKcHBiTzZ5c1J2QjRDckM2YWkwN1BLVzU5Ti93Q3NqZVlXR3hGTHZiNTJCc0l5TGtXWXNaRjZNZ01pTEl0cjYvQXAvd0FTbjdOWWtzWkVaMTRpNVFoYmtuVGYvYldMUFVRbHNwdVZUVFJhYk5DcHBNdHlWcm50eXA1cXdHKzROdksrQTdSSDFNNjhPUStEZGZwZkFkb2o2bWRlRUFBQUFBQUFBQUFBYXZXbnhMRjltcmV3em02SjBqclQ0bGkrelZ2WVp6YkhjU3FyVEsweTJqMU1ndkpseUxMQ1pXbUJrUmtYb3lNV01pN0dRR1hDUmRqSXhJeUxzWkFaa1pHajFwczQ1ODlQL3dCcHRveU5Ock5Qd090MGw5bFUxeDlFTXhLTVNTTSt0RXhaeE5XSXNBdU9IS3kyMlFTUGc1OHI0RHRFUFV6cm81RTRPUEsrQTdSSDFNNjdJQUFBQUFBQUFBQUExZXRQaVdMN05XOWhuTmNkeU9sTmFmRXNYMmF0N0RPYTQ3a1NxcVBVVW5wQldtVnBscE1xVEF2Smx5TWl3bVZwZ1pNWkYyTWpGakl1UmtCbHhrYTNUbE56alpjanBQN0twbVJrYTdUdEIxWVdpbTdTcFBMcXFyM2xub2orSnB4anZsRy9Xckd1cVZJcmQ0VDh5TTJwbytYTVV4MGUrVkhTNmpXVkx2ZVZVcURlNDI5TFJVbW5PVm9VNC9Lbk4yaEh2NStnMTJOeFVYZUZHK3h5emF0S3AzY2k2REkzUEI1YisyTUJiY3NSRlg1OG5tZGNuSW5CeDVYd0hhSStwblhaQUFBQUFBQUFBQUFHcjFvOFN4ZlpxM3NNNXFqdVhVZEs2MGVKWXZzMWIyR2MwdzNMcVJLS2owOEJGVkhxWlNlZ1ZwbFNaYlRLa3dMMFdWeGtXRXl0U0F5SXlNakNZR0ZkempVcTBxS2pHbExhcTFJMDR0M3FLeWI1Y3pEakkxR3RDdlJYOFdqN0ZZb2tsZWpvNmdyMWRJNGVWdjhBVnBUZForYUtabzlJYXo0S25kWWJEenJ5VzZkZjgzU1hUc0xPWGUwUTNaUExGMm5USzBucFN0aVpYclR1bDhtRVVvMDRmUmlzbDE3ekRSN1lXQ0pGd2NlVjhCMmlQcVoxMmNpOEhQbGZBZG9oNm1kZEFBQUFBQUFBQUFBQnE5YVBFc1gyYXQ3RE9hWWJsMUk2VjFyVC9JY1pzMlQvQUNXdlp0WFNmRnUxMWxkSE5NTnk2a1NpbzlQQVJYcDZVbm9IcFVtVUhvRmFaV21Xa3lwTUM2bWE3VDZ2U1hSVm8reFdNNU14dEkwbk9EVjBrcFVtN3AzdmFyYlB6bGdqTXFWOXhiZE44eHZLV2prN3R5ZGxuSnFObEZkTGU0eDhYSlR0Q0ViUWplemVjNU43MjM3aldEVmJCUzQ1bWZWcGJDVGZ5bXZCWFIrcytneFhHM1dCdXVEenl4by8rUEQzblhKeU5xQW4vYStqN1dUL0FDaW52VjhydS9mYS93Q080NjVJZ0FBQUFBQUFBQUFNYlNPRzQ2alZwZnRhVlNuNlVXdmVjdzFzUEtsS1ZLb21wMHBTcHpUVm1wUmRubC9XODZuSVByeHdlMDhmSjRpaE5VTVRid200dDA2dHQyMGxtbjBvZytHbnBLYTNCM3BTTW1saDR6UzNTalVWbjNOWEtQaS8wcDgxZnBvS2pJSkw4QU5LZk5YNlErQU9rL21yOUw4QUkwZWtrK0FPay9tcjlMOEQzNEFhVSthdjAwQkd6MU1rbndBMHA4MWZwbzhXb1dsTS93RFJKWmN2R1FzOHVUOFFJNm1adUZ3dGFVZHFsUjI5cHZ3cFV1TVhnNUpya3ZkeldadHBhaGFVMlhiQ3R5NUl1ZG9kOGxuM0pMclJwNi9CbnB5YmNwUWo0WElzb3BXc2tsczVKS3lTNWtXZEN6ajhGVXkvS3F0T2tsdWpVbkNraytlTkpXejZsYzFOZkZVb1pVRTZrdjJrNHVOTmZSZzg1ZjVyZFROdkhncTAwdDFLQzZ2L0FKSzF3WGFiNUtjUGY1OWsxOUxxSlZubTVUYmxONXU3enYwbU8xZk5reStLZlRYN0tIcGZnWjJpK0JuU2RhYWppSjA2RUxxOHM1TzNRbDd5YWpYY0R1aXBZclRGQ2NVM0REZm5weXRrdG5kbjBzNmlJNXFUcWRodEVVT0p3NmNwU3M2dGFTOE9vL2N1Z2taRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQi8vOWs9XCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctY29scy0xXCIgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cbiAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuaXRlbVswXS5wcm9kdWN0TmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLml0ZW1bMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8cD5QcmljZSA6ICB7dGhpcy5wcm9wcy5pdGVtWzBdLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2FydCd9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBzdHlsZT17e3dpZHRoOiAnMTI1cHgnLCBoZWlnaHQ6ICczNXB4JywgYmFja2dyb3VuZENvbG9yOiBcInNreWJsdWVcIiwgYm9yZGVyUmFkaXVzOicxMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgIGdvIHRvIGNhcnQgcGFnZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleERpcmVjdGlvbjoncm93J319PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+IFF1YW50aXR5IHtcIiAgICAgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e3dpZHRoOiAnNDBweCcsIGhlaWdodDogJzM1cHgnLCBiYWNrZ3JvdW5kQ29sb3I6IFwic2t5Ymx1ZVwiLCBib3JkZXJSYWRpdXM6JzEwcHgnfX0gb25DbGljaz17KCk9PnRoaXMuZGVjcmVhc2VRdWFudGl0eSh0aGlzLnByb3BzLml0ZW1bMF0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucXVhbnRpdHl9IFxuICAgICAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e3dpZHRoOiAnNDBweCcsIGhlaWdodDogJzM1cHgnLCBiYWNrZ3JvdW5kQ29sb3I6IFwic2t5Ymx1ZVwiLCBib3JkZXJSYWRpdXM6JzEwcHgnfX0gb25DbGljaz17KCk9PnRoaXMuaW5jcmVhc2VRdWFudGl0eSh0aGlzLnByb3BzLml0ZW1bMF0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e3dpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICczNXB4JywgYmFja2dyb3VuZENvbG9yOiBcInNreWJsdWVcIiwgYm9yZGVyUmFkaXVzOicxMHB4J319IG9uQ2xpY2s9eygpPT50aGlzLmFkZCh0aGlzLnByb3BzLml0ZW1bMF0pfT5cbiAgICAgICAgICAgICAgICAgICAgICBhZGRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==