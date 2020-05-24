webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_FoodsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FoodsView */ "./src/components/FoodsView.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.json */ "./src/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/data.json", 1);
var _jsxFileName = "/Users/sevebarrameda/Desktop/CODING/REACT/chicken-tinder/src/App.js";






function App() {
  const [restaurant, setRestaurant] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_data_json__WEBPACK_IMPORTED_MODULE_4__);
  const [likedRestaurant, setLikedRestaurant] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // const [dislikedPeople, setDislikedPeople] = useState([]);
  // const [superLikedPeople, setSuperLikedPeople] = useState([]);
  // These useState set the intitial state of the first item and how to change it in the second
  // useState doesn't work in a class component, only function component

  const removeFromList = (list, restaurantId) => list.filter(rest => rest.id !== restaurantId); //takes in list and restId
  //filter from list - keep rest.id !== restaurantId
  // mass method used for actions


  const modifyLists = (restaurantId, action) => {
    switch (action) {
      case "LIKE_RESTAURANT":
        // case for function to occur
        setRestaurant(removeFromList(restaurant, restaurantId));
        break;

      case "DISLIKE_RESTAURANT":
        // case for function to occur
        setRestaurant(removeFromList(restaurant, restaurantId));
        break;

      case "SUPERLIKE_RESTAURANT":
        // case for function to occur
        setRestaurant(removeFromList(restaurant, restaurantId));
        break;

      case "REWIND_RESTAURANT":
        // case for function to occur
        setRestaurant(removeFromList(restaurant, restaurantId));
        break;

      default:
        return restaurant;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FoodsView__WEBPACK_IMPORTED_MODULE_3__["default"], {
    modifyLists: modifyLists,
    key: restaurant[0].key,
    restaurant: restaurant[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.3efdb188dbb2c83d2391.hot-update.js.map