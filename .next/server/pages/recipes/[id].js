module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wuWz");


/***/ }),

/***/ "7fo+":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"ゴーヤと桜海老の塩昆布和え\",\"description\":\"我が家の常備菜一番手。ゴーヤ好きにはオススメです。\",\"imageUrl\":\"https://img.cpcdn.com/recipes/4053659/750x500cq60/ed3f79a95814e194a9c3c166a967ed43?p=1473034120\",\"steps\":[\"ゴーヤを縦半分に切ってワタを取り除き薄切りにする\",\"沸騰したお湯でゴーヤを1分ほど茹で、冷水でさらしてぎゅっと絞って水気を切る\",\"桜海老、塩昆布、醤油、ごま油と和える\"],\"ingredients\":[{\"name\":\"ゴーヤ\",\"quantity\":\"1本\"},{\"name\":\"桜海老\",\"quantity\":\"10g\"},{\"name\":\"塩昆布\",\"quantity\":\"10g\"},{\"name\":\"醤油\",\"quantity\":\"大さじ1/2\"},{\"name\":\"ごま油\",\"quantity\":\"大さじ1/2\"}]},{\"id\":2,\"name\":\"白だしだけでできる、超簡単たまごスープ\",\"description\":\"味付けは白だしだけ。超簡単にできるたまごスープです。\",\"imageUrl\":\"https://img.cpcdn.com/recipes/3547216/750x500cq60/555414daae46ff6269d741e60c985fa1?p=1448895100\",\"steps\":[\"水を火にかけ沸騰したら溶いたたまごを混ぜながら加える\",\"白だしを加える\"],\"ingredients\":[{\"name\":\"白だし\",\"quantity\":\"大さじ1\"},{\"name\":\"卵\",\"quantity\":\"1個\"},{\"name\":\"水\",\"quantity\":\"400CC\"}]},{\"id\":3,\"name\":\"フライドごぼう山椒風味\",\"description\":\"お酒のおつまみに最高です\",\"imageUrl\":\"https://img.cpcdn.com/recipes/5827446/750x500cq60/f7a06afd8bfa671148efd983d5ed193b?p=1568543589\",\"steps\":[\"ごぼうは土を洗い流して乱切りにする\",\"ごぼうと片栗粉をビニール袋に入れて全体にまぶす\",\"フライパンに大さじ3の油を入れて熱し、2のごぼうをいれ、中火で片面に焼き色がつくまで揚げ焼きにする\",\"焼き色がついたらびっくり変えし、もう片面にも焼き色がつくまでじっくり揚げ焼きにする\",\"焼き上がったら皿に移し、塩と山椒（粉末よりもミルで挽くものがおすすめ）をお好みでまぶして完成！\"],\"ingredients\":[{\"name\":\"ごぼう\",\"quantity\":\"1本\"},{\"name\":\"片栗粉\",\"quantity\":\"大さじ1\"},{\"name\":\"油\",\"quantity\":\"大さじ3\"},{\"name\":\"塩\",\"quantity\":\"適量\"},{\"name\":\"山椒\",\"quantity\":\"適量\"}]}]");

/***/ }),

/***/ "8Teg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRecipe; });
/* harmony import */ var _data_recipes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7fo+");
var _data_recipes_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("7fo+", 1);

async function getRecipes() {
  return _data_recipes_json__WEBPACK_IMPORTED_MODULE_0__;
}
async function getRecipe(id) {
  return _data_recipes_json__WEBPACK_IMPORTED_MODULE_0__.find(recipe => recipe.id === id) || null;
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "wuWz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8Teg");




const RecipePage = props => {
  const {
    recipe
  } = props;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      children: "My Recipe Site"
    }), recipe && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        children: recipe.name
      }), recipe.imageUrl && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: recipe.imageUrl,
        alt: "\u30EC\u30B7\u30D4\u753B\u50CF",
        width: "300"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: recipe.description
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
        children: "\u6750\u6599"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ol", {
        children: recipe.ingredients.map((ing, i) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
          children: [ing.name, " : ", ing.quantity]
        }, i))
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
        children: "\u624B\u9806"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ol", {
        children: recipe.steps.map((step, i) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: step
        }, i))
      })]
    })]
  });
};

const getServerSideProps = async context => {
  var _context$params;

  const id = Number((_context$params = context.params) === null || _context$params === void 0 ? void 0 : _context$params.id);

  if (id === 0 || isNaN(id)) {
    return {
      notFound: true
    };
  } else {
    const recipe = await Object(_lib_recipe__WEBPACK_IMPORTED_MODULE_1__[/* getRecipe */ "a"])(id);
    return {
      props: {
        recipe: recipe
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (RecipePage);

/***/ })

/******/ });