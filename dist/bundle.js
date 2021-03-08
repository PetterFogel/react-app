/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Layout_1 = __importDefault(__webpack_require__(/*! ./Layout */ "./src/components/Layout.tsx"));
function App() {
    return (react_1.default.createElement(Layout_1.default, null));
}
exports.default = App;


/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Header_1 = __importDefault(__webpack_require__(/*! ./Navbar/Header */ "./src/components/Navbar/Header.tsx"));
function Layout() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.default, null)));
}
exports.default = Layout;


/***/ }),

/***/ "./src/components/Navbar/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Header.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var burgerMenu_1 = __importDefault(__webpack_require__(/*! ./burgerMenu */ "./src/components/Navbar/burgerMenu.tsx"));
var sideMenu_1 = __importDefault(__webpack_require__(/*! ./sideMenu */ "./src/components/Navbar/sideMenu.tsx"));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isMenuOpen: false
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Header.prototype.handleClick = function () {
        this.setState(function (state) { return ({
            isMenuOpen: !state.isMenuOpen
        }); });
    };
    Header.prototype.render = function () {
        return (react_1.default.createElement("header", { style: rootStyle },
            react_1.default.createElement("h2", { style: headerTitle }, "React App"),
            react_1.default.createElement("nav", { onClick: this.handleClick, style: { cursor: "pointer" } },
                react_1.default.createElement(burgerMenu_1.default, { value: this.state.isMenuOpen })),
            react_1.default.createElement("div", { style: __assign(__assign({}, sideMenuStyle), { right: this.state.isMenuOpen ? "0%" : "-50%" }) },
                react_1.default.createElement(sideMenu_1.default, null))));
    };
    return Header;
}(react_1.Component));
var rootStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    background: "#111",
    height: "10vh",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: "0rem 2rem"
};
var headerTitle = {
    color: "#f1f1f1",
    letterSpacing: "2px"
};
var sideMenuStyle = {
    position: "fixed",
    top: "10vh",
    width: "50%",
    height: "90vh",
    color: "#fff",
    background: "#111",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 500ms ease-in"
};
exports.default = Header;


/***/ }),

/***/ "./src/components/Navbar/burgerMenu.tsx":
/*!**********************************************!*\
  !*** ./src/components/Navbar/burgerMenu.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
function BurgerMenu(props) {
    console.log(props.value);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: __assign(__assign({}, barStyle), { transform: props.value ? "rotate(-45deg) translate(-0.3rem, 0.4rem)" : "rotate(0deg) translate(0rem)" }) }),
        react_1.default.createElement("div", { style: __assign(__assign({}, barStyle), { opacity: props.value ? "0" : "1" }) }),
        react_1.default.createElement("div", { style: __assign(__assign({}, barStyle), { transform: props.value ? "rotate(45deg) translate(-0.3rem, -0.4rem)" : "rotate(0deg) translate(0rem)" }) })));
}
var barStyle = {
    width: "2rem",
    height: "0.2rem",
    borderRadius: "0.1rem",
    background: "#f1f1f1",
    margin: "0.3rem",
    transition: "all 0.3s ease"
};
exports.default = BurgerMenu;


/***/ }),

/***/ "./src/components/Navbar/sideMenu.tsx":
/*!********************************************!*\
  !*** ./src/components/Navbar/sideMenu.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
function SideMenu() {
    return (react_1.default.createElement("div", { style: rootStyle },
        react_1.default.createElement("h3", null, "Home"),
        react_1.default.createElement("h3", null, "Services"),
        react_1.default.createElement("h3", null, "About"),
        react_1.default.createElement("h3", null, "Contact")));
}
var rootStyle = {
    color: "#f1f1f1",
    letterSpacing: "0.125rem"
};
exports.default = SideMenu;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));
var App_1 = __importDefault(__webpack_require__(/*! ./components/App */ "./src/components/App.tsx"));
react_dom_1.default.render(react_1.default.createElement(App_1.default, null), document.getElementById('root'));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map