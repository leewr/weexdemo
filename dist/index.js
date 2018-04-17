// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["message"]
  }, [_vm._v("Now, let's use Vue.js to build your Weex app.")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "listItem": {
    "paddingTop": "20",
    "paddingRight": "24",
    "paddingBottom": 0,
    "paddingLeft": "24",
    "marginBottom": "20",
    "borderTop": "1px solid #ddd",
    "borderBottom": "1px solid #ddd",
    "justifyContent": "flex-start"
  },
  "listHead": {
    "justifyContent": "space-around",
    "flexFlow": "row"
  },
  "userPic": {
    "width": "80",
    "height": "80",
    "borderRadius": "8"
  },
  "userInfo": {
    "flex": 1,
    "marginLeft": "20"
  },
  "listbody": {
    "paddingTop": "10",
    "paddingRight": 0,
    "paddingBottom": "10",
    "paddingLeft": 0,
    "fontSize": "30",
    "color": "#000000",
    "borderBottom": "1px solid #ddd"
  },
  "listbottom": {
    "flexFlow": "row"
  },
  "gridItem": {
    "height": "40",
    "marginTop": "20",
    "marginRight": 0,
    "marginBottom": "20",
    "marginLeft": 0,
    "flexFlow": "row",
    "justifyContent": "center",
    "flex": 1,
    "borderRight": "1px solid #ddd",
    "alignContent": "flex-start"
  },
  "font": {
    "width": "60",
    "fontSize": "40"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'listItem',
    data: function data() {
        return {
            fontName: '\uE661'
        };
    },

    props: {
        listItem: {
            type: Object
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["listItem"]
  }, [_c('div', {
    staticClass: ["listHead"]
  }, [_c('image', {
    staticClass: ["userPic"],
    attrs: {
      "src": "https://avatars3.githubusercontent.com/u/29355109?v=4&s=120"
    }
  }), _c('div', {
    staticClass: ["userInfo"]
  }, [_c('text', [_vm._v(_vm._s(_vm.listItem.name))]), _c('text', [_vm._v(_vm._s(_vm.listItem.time))])])]), _c('div', {
    staticClass: ["listbody"]
  }, [_c('text', [_vm._v(_vm._s(_vm.listItem.title))])]), _c('div', {
    staticClass: ["listbottom"]
  }, [_c('div', {
    staticClass: ["gridItem"]
  }, [_c('text', {
    staticClass: ["font"],
    style: {
      fontFamily: 'iconfont',
      color: 'red'
    }
  }, [_vm._v("\n                " + _vm._s(_vm.fontName) + "\n            ")]), _c('text', [_vm._v("\n                " + _vm._s(_vm.listItem.view) + "\n            ")])]), _c('div', {
    staticClass: ["gridItem"]
  }, [_c('text', {
    staticClass: ["font"],
    style: {
      fontFamily: 'iconfont',
      color: 'red'
    }
  }, [_vm._v("\n                " + _vm._s(_vm.fontName) + "\n            ")]), _c('text', [_vm._v(_vm._s(_vm.listItem.commentNum))])]), _c('div', {
    staticClass: ["gridItem"]
  }, [_c('text', [_vm._v(_vm._s(_vm.listItem.timeBefore))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "H:\\lwr\\weexdemo\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e4c7abba"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "iconfont",
      "src": "url('//at.alicdn.com/t/font_267539_fkwl88carr7ldi.eot?#iefix') format('embedded-opentype'),\n  url('//at.alicdn.com/t/font_267539_fkwl88carr7ldi.woff') format('woff'),\n  url('//at.alicdn.com/t/font_267539_fkwl88carr7ldi.ttf') format('truetype'),\n  url('//at.alicdn.com/t/font_267539_fkwl88carr7ldi.svg#iconfont') format('svg')"
    }
  ],
  "wrapper": {
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "listWrap": {
    "marginTop": "79",
    "flexDirection": "column",
    "width": 100
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41B883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HelloWorld = __webpack_require__(13);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _topBar = __webpack_require__(14);

var _topBar2 = _interopRequireDefault(_topBar);

var _listItem = __webpack_require__(18);

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'App',
  components: {
    HelloWorld: _HelloWorld2.default,
    TopBar: _topBar2.default,
    listItem: _listItem2.default
  },
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      listData: [{
        title: 'React Native 初始化项目运行报错',
        name: 'Hyurl',
        time: '20180417',
        view: 2209,
        commentNum: 22,
        timeBefore: '1小时前'
      }, {
        title: '新手爬虫，教你如何爬掘金（一）',
        name: 'fruit-memory',
        time: '20180417',
        view: 1102,
        commentNum: 11,
        timeBefore: '2小时前'
      }]
    };
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* template */
var __vue_template__ = __webpack_require__(0)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "H:\\lwr\\weexdemo\\src\\components\\HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "H:\\lwr\\weexdemo\\src\\components\\topBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7f21d4d5"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "topbar": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "height": "80",
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "space-around",
    "background": "#fff",
    "borderBottom": "1px solid #ddd"
  },
  "topbarItem": {
    "lineHeight": "80",
    "color": "#333333",
    "fontSize": "14"
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  name: 'topBar',
  data: function data() {
    return {
      itemData: [{
        name: '全部',
        id: 'all'
      }, {
        name: '精华',
        id: 'good'
      }, {
        name: '分享',
        id: 'share'
      }, {
        name: '招聘',
        id: 'job'
      }]
    };
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["topbar"]
  }, _vm._l((_vm.itemData), function(itme) {
    return _c('text', {
      key: itme.id,
      staticClass: ["topbarItem"]
    }, [_vm._v(_vm._s(itme.name))])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "H:\\lwr\\weexdemo\\src\\components\\listItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5f3c99e8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('TopBar'), _c('div', {
    staticClass: ["listWrap"]
  }, _vm._l((_vm.listData), function(item) {
    return _c('listItem', {
      key: item,
      attrs: {
        "listItem": item
      }
    })
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);