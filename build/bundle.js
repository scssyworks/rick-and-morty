/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App/index.js":
/*!*********************************!*\
  !*** ./src/client/App/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/client/App/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/client/components/Header/index.js");





var App = function App(_ref) {
  var route = _ref.route;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: App
});

/***/ }),

/***/ "./src/client/App/index.scss":
/*!***********************************!*\
  !*** ./src/client/App/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: FETCH_HACKER_NEWS_FEED, fetchHackerNewsFeed, UPVOTES, FETCH_UPVOTES, fetchUpvotes, UPDATE_UPVOTES, updateUpvotes, HIDDEN_STATUS, fetchHiddenFeeds, HIDE_FEED, hideFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_HACKER_NEWS_FEED", function() { return FETCH_HACKER_NEWS_FEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHackerNewsFeed", function() { return fetchHackerNewsFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPVOTES", function() { return UPVOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_UPVOTES", function() { return FETCH_UPVOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUpvotes", function() { return fetchUpvotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_UPVOTES", function() { return UPDATE_UPVOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUpvotes", function() { return updateUpvotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDDEN_STATUS", function() { return HIDDEN_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHiddenFeeds", function() { return fetchHiddenFeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_FEED", function() { return HIDE_FEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideFeed", function() { return hideFeed; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);



var FETCH_HACKER_NEWS_FEED = 'fetch_hacker_news_feed';
var fetchHackerNewsFeed = function fetchHackerNewsFeed(page) {
  return /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var _len,
        args,
        _key,
        dispatch,
        api,
        URL,
        res,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args[_key];
            }

            dispatch = args[0], api = args[2];
            URL = '/search_by_date?tags=story';

            if (page) {
              URL += "&page=".concat(page);
            }

            _context.next = 6;
            return api.get(URL);

          case 6:
            res = _context.sent;
            dispatch({
              type: FETCH_HACKER_NEWS_FEED,
              payload: res.data
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}; // Temporary local storage code below

var UPVOTES = 'upvotes';

function getUpvotes() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        if (typeof Storage !== 'undefined') {
          var ls = localStorage.getItem(UPVOTES) || '{}';
          resolve(JSON.parse(ls));
        } else {
          resolve({}); // Server side resolve
        }
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
}

function updateUpvotesLS(authorId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        if (typeof Storage !== 'undefined') {
          var ls = JSON.parse(localStorage.getItem(UPVOTES) || '{}');
          var prevCount = ls[authorId] || 0;

          if (prevCount < 10) {
            ls[authorId] = prevCount + 1;
          }

          localStorage.setItem(UPVOTES, JSON.stringify(ls));
          resolve(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, authorId, ls[authorId])); // Assuming API will return new count for given authorId
        } else {
          resolve(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, authorId, 0));
        }
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
}

function getHidden() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        if (typeof Storage !== 'undefined') {
          var ls = localStorage.getItem('hidden') || '{}';
          resolve(JSON.parse(ls));
        } else {
          resolve({}); // For server side
        }
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
}

function hideFeedLS(authorId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        if (typeof Storage !== 'undefined') {
          var ls = JSON.parse(localStorage.getItem('hidden') || '{}');
          ls[authorId] = true;
          resolve(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, authorId, true));
        } else {
          resolve(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, authorId, false));
        }
      } catch (e) {
        reject(e);
      }
    }, 0);
  });
}

; // Temporary local storage code ends

var FETCH_UPVOTES = 'fetch_upvotes';
var fetchUpvotes = function fetchUpvotes() {
  return /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var _len2,
        args,
        _key2,
        dispatch,
        res,
        _args2 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = _args2[_key2];
            }

            dispatch = args[0]; // We will use api in future to fetch upvotes using a service

            _context2.next = 4;
            return getUpvotes();

          case 4:
            res = _context2.sent;
            // To be replaced with API call
            dispatch({
              type: FETCH_UPVOTES,
              payload: res
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
};
var UPDATE_UPVOTES = 'update_upvotes';
var updateUpvotes = function updateUpvotes(authorId) {
  return /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
    var _len3,
        args,
        _key3,
        dispatch,
        res,
        _args3 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            for (_len3 = _args3.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = _args3[_key3];
            }

            dispatch = args[0]; // We will use api in future to increase upvotes using a service

            _context3.next = 4;
            return updateUpvotesLS(authorId);

          case 4:
            res = _context3.sent;
            dispatch({
              type: UPDATE_UPVOTES,
              payload: res
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
};
var HIDDEN_STATUS = 'hidden_status';
var fetchHiddenFeeds = function fetchHiddenFeeds() {
  return /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
    var _len4,
        args,
        _key4,
        dispatch,
        res,
        _args4 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            for (_len4 = _args4.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = _args4[_key4];
            }

            dispatch = args[0]; // We will use api in future to get hidden status via service

            _context4.next = 4;
            return getHidden();

          case 4:
            res = _context4.sent;
            dispatch({
              type: HIDDEN_STATUS,
              payload: res
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
};
var HIDE_FEED = 'hide_feed';
var hideFeed = function hideFeed(authorId) {
  return /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
    var _len5,
        args,
        _key5,
        dispatch,
        res,
        _args5 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            for (_len5 = _args5.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = _args5[_key5];
            }

            dispatch = args[0]; // We will use api in future to update hidden status via service

            _context5.next = 4;
            return hideFeedLS(authorId);

          case 4:
            res = _context5.sent;
            dispatch({
              type: HIDE_FEED,
              payload: res
            });

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
};

/***/ }),

/***/ "./src/client/components/Header/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/Header/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/client/components/Header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "hacker-news-clone-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png",
    alt: "Hacker News clone"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hacker News Clone"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/client/components/Header/index.scss":
/*!*************************************************!*\
  !*** ./src/client/components/Header/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/pages/HomePage/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/HomePage/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions */ "./src/client/actions/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.scss */ "./src/client/pages/HomePage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_11__);








function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var HomePage = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(HomePage, _Component);

  var _super = _createSuper(HomePage);

  function HomePage() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HomePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "page", 1);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "loadMoreResults", function () {
      _this.page += 1;

      _this.props.fetchHackerNewsFeed(_this.page);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "hideItem", function (authorId) {
      _this.props.hideFeed(authorId);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "renderFeed", function () {
      var _this$props = _this.props,
          feed = _this$props.feed,
          hidden = _this$props.hidden;
      return feed.filter(function (feedItem) {
        return !hidden[feedItem.authorId];
      }).map(function (feedItem) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          key: feedItem.authorId
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: "comment-count"
        }, feedItem.commentCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: "upvote-count"
        }, _this.getUpvotes(feedItem.authorId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: "upvote-control"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          onClick: function onClick() {
            return _this.upvote(feedItem.authorId);
          },
          type: "button"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "caret up"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "sr-only"
        }, "Upvode"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: "title"
        }, feedItem.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: "url"
        }, feedItem.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: feedItem.url
        }, feedItem.url) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: "author"
        }, feedItem.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: "time"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, feedItem.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          onClick: function onClick() {
            return _this.hideItem(feedItem.authorId);
          },
          type: "button"
        }, "[hide]")));
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HomePage, [{
    key: "getUpvotes",
    value: function getUpvotes(authorId) {
      var upvotes = this.props.upvotes;

      if (upvotes && upvotes[authorId]) {
        return +upvotes[authorId];
      }

      return 0;
    }
  }, {
    key: "upvote",
    value: function upvote(authorId) {
      this.props.updateUpvotes(authorId);
    }
  }, {
    key: "getChartData",
    value: function getChartData() {
      var _this$props2 = this.props,
          feed = _this$props2.feed,
          upvotes = _this$props2.upvotes,
          hidden = _this$props2.hidden;
      return feed.filter(function (feedItem) {
        return !hidden[feedItem.authorId];
      }).map(function (feedItem) {
        return {
          id: feedItem.author,
          votes: upvotes[feedItem.authorId] || 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          feed = _this$props3.feed,
          upvotes = _this$props3.upvotes,
          hidden = _this$props3.hidden;

      if (!(feed && upvotes && hidden)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "loader"
        }, "Loading...");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "hacker-news-feed"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null, "Upvotes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null, "Domain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null, "Posted By"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null, "Posted when?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", null, this.renderFeed()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.loadMoreResults,
        className: "load-more-btn mt-4 mb-4",
        type: "button"
      }, "Load More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["ResponsiveContainer"], {
        height: 300,
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["LineChart"], {
        data: this.getChartData()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["CartesianGrid"], {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["XAxis"], {
        dataKey: "id"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["YAxis"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["Line"], {
        type: "monotone",
        dataKey: "votes",
        stroke: "#8884d8"
      }))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchHackerNewsFeed();
      this.props.fetchUpvotes();
      this.props.fetchHiddenFeeds();
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

function mapStateToProps(_ref) {
  var feed = _ref.feed,
      upvotes = _ref.upvotes,
      hidden = _ref.hidden;
  return {
    feed: feed,
    upvotes: upvotes,
    hidden: hidden
  };
}

function loadData(store) {
  return Promise.all([store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["fetchHackerNewsFeed"])()), store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["fetchUpvotes"])()), store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["fetchHiddenFeeds"])())]);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {
    fetchHackerNewsFeed: _actions__WEBPACK_IMPORTED_MODULE_10__["fetchHackerNewsFeed"],
    fetchUpvotes: _actions__WEBPACK_IMPORTED_MODULE_10__["fetchUpvotes"],
    updateUpvotes: _actions__WEBPACK_IMPORTED_MODULE_10__["updateUpvotes"],
    fetchHiddenFeeds: _actions__WEBPACK_IMPORTED_MODULE_10__["fetchHiddenFeeds"],
    hideFeed: _actions__WEBPACK_IMPORTED_MODULE_10__["hideFeed"]
  })(HomePage),
  loadData: loadData
});

/***/ }),

/***/ "./src/client/pages/HomePage/index.scss":
/*!**********************************************!*\
  !*** ./src/client/pages/HomePage/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/pages/NotFoundPage/index.js":
/*!************************************************!*\
  !*** ./src/client/pages/NotFoundPage/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  staticContext.notFound = true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Oops! Page not found"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: NotFoundPage
});

/***/ }),

/***/ "./src/client/reducers/feedReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/feedReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");



function getTimeParam(isoTime) {
  var currentTimestamp = Date.now();
  var inputTimestamp = new Date(isoTime).getTime();
  var timeDiff = currentTimestamp - inputTimestamp;
  var seconds = timeDiff / 1000; // milliseconds to seconds

  if (seconds < 60) {
    return "".concat(Math.round(seconds), " seconds ago");
  }

  var minutes = seconds / 60; // seconds to minutes;

  if (minutes < 60) {
    return "".concat(Math.round(minutes), " minutes ago");
  }

  var hours = minutes / 60; // minutes to hours

  if (hours < 24) {
    return "".concat(Math.round(hours), " hours ago");
  }

  var days = hours / 24; // hours to days

  return "".concat(Math.round(days), " days ago");
}

function feedProcessor(data) {
  return data.hits.map(function (feedItem) {
    return {
      time: getTimeParam(feedItem.created_at),
      title: feedItem.title,
      author: feedItem.author,
      url: feedItem.url,
      commentCount: feedItem.num_comments,
      authorId: "".concat(feedItem.author, "_").concat(new Date(feedItem.created_at).getTime())
    };
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_HACKER_NEWS_FEED"]:
      var newState = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state);

      var newList = feedProcessor(action.payload);
      newList.forEach(function (newItem) {
        var existing = newState.find(function (item) {
          return item.authorId === newItem.authorId;
        });

        if (!existing) {
          newState.push(newItem);
        }
      });
      return newState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/client/reducers/hiddenReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/hiddenReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["HIDDEN_STATUS"]:
      return action.payload;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["HIDE_FEED"]:
      return _objectSpread({}, state, {}, action.payload);

    default:
      return state;
  }
});
;

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feedReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedReducer */ "./src/client/reducers/feedReducer.js");
/* harmony import */ var _upvoteReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upvoteReducer */ "./src/client/reducers/upvoteReducer.js");
/* harmony import */ var _hiddenReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hiddenReducer */ "./src/client/reducers/hiddenReducer.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  feed: _feedReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  upvotes: _upvoteReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  hidden: _hiddenReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/client/reducers/upvoteReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/upvoteReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_UPVOTES"]:
      return action.payload;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_UPVOTES"]:
      return _objectSpread({}, state, {}, action.payload);

    default:
      return state;
  }
});
;

/***/ }),

/***/ "./src/client/routes/index.js":
/*!************************************!*\
  !*** ./src/client/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/HomePage */ "./src/client/pages/HomePage/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/client/App/index.js");
/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/NotFoundPage */ "./src/client/pages/NotFoundPage/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ __webpack_exports__["default"] = ([_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  routes: [_objectSpread({}, _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    path: '/',
    exact: true
  }), _objectSpread({}, _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_3__["default"])]
})]);

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/reducers */ "./src/client/reducers/index.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants */ "./src/shared/constants.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var axios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
    baseURL: "".concat(_shared_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"], "/api/v1")
  });
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_client_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(axios)));
  return store;
});

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/routes */ "./src/client/routes/index.js");







/* harmony default export */ __webpack_exports__["default"] = (function (req, store, context) {
  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: req.path,
    context: context
  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__["renderRoutes"])(_client_routes__WEBPACK_IMPORTED_MODULE_6__["default"]))));
  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n        <head>\n            <title>Hacker News Clone</title>\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n            <meta name=\"keywords\" content=\"react, ssr, hackernews, clone, demo, heroku\" />\n            <meta name=\"description\" content=\"This page is a React SSR demo deployed to Heroku.\" />\n            <link rel=\"icon\" type=\"image/png\" href=\"https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png\" />\n            <link rel=\"stylesheet\" href=\"bundle.css\" />\n        </head>\n        <body>\n            <div class=\"container pb-4\">\n                <div id=\"root\">".concat(content, "</div>\n            </div>\n            <script>\n                window.INITIAL_STATE = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), "\n            </script>\n            <script src=\"bundle.js\" async defer></script>\n        </body>\n    </html>\n    ");
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/renderer */ "./src/helpers/renderer.js");
/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/createStore */ "./src/helpers/createStore.js");
/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/routes */ "./src/client/routes/index.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/constants */ "./src/shared/constants.js");







var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(_shared_constants__WEBPACK_IMPORTED_MODULE_6__["PROXY_PATH"], express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(_shared_constants__WEBPACK_IMPORTED_MODULE_6__["API_URL"], {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return "".concat(_shared_constants__WEBPACK_IMPORTED_MODULE_6__["PROXY_PATH"]).concat(req.url);
  }
}));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));
app.get('*', function (req, res) {
  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__["matchRoutes"])(_client_routes__WEBPACK_IMPORTED_MODULE_5__["default"], req.path).map(function (_ref) {
    var route = _ref.route;
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve) {
        promise.then(resolve).catch(function () {
          var _console;

          (_console = console).error.apply(_console, arguments);

          resolve.apply(void 0, arguments);
        });
      });
    }

    return Promise.resolve();
  });
  Promise.all(promises).then(function () {
    var context = {};
    var content = Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_3__["default"])(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  }).catch(function () {
    var _console2;

    (_console2 = console).error.apply(_console2, arguments);
  });
});
var envPort = process.env.PORT || 3000;
app.listen(envPort, function () {
  console.log("Server up and running on PORT ".concat(envPort));
});

/***/ }),

/***/ "./src/shared/constants.js":
/*!*********************************!*\
  !*** ./src/shared/constants.js ***!
  \*********************************/
/*! exports provided: API_URL, PROXY_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROXY_PATH", function() { return PROXY_PATH; });
var API_URL = 'https://hn.algolia.com';
var PROXY_PATH = '/api/v1';

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ });