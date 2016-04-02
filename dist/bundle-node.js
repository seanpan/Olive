/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Sean on 16/1/20.
	 */
	__webpack_require__(1);

	__webpack_require__(2);
	__webpack_require__(977);
	__webpack_require__(979);


/***/ },
/* 1 */
/***/ function(module, exports) {

	//shimming of bind/filter coz they are broken in ie9- while webpack try to pack;
	if (!Function.prototype.bind) {
	    Function.prototype.bind = function () {

	        var fn = this,
	            args = [].slice.call(arguments),
	            object = args.shift();

	        return function () {

	            return fn.apply(object, args.concat([].slice.call(arguments)));

	        };

	    };

	}
	if (!Array.prototype.filter) {
	    Array.prototype.filter = function (fun, thisp) {
	        var len = this.length;
	        if (typeof fun !== "function")
	            throw new TypeError();
	        var res = [];
	        for (var i = 0; i < len; i++) {
	            if (i in this) {
	                var val = this[i]; // in case fun mutates this
	                if (fun.call(thisp, val, i, this))
	                    res.push(val);
	            }
	        }
	        return res;
	    };
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var comps = __webpack_require__(3).components;

	var Container = comps.Container;
	var Viewport = comps.Viewport;
	var Text = comps.Text;
	var Link = comps.Link;
	var Avatar = comps.Avatar;
	var Preview = comps.Preview;
	var Player = comps.Player;
	var Recommend = comps.Recommend;
	var StarVote = comps.StarVote;
	var VideoTool = comps.VideoTool;
	var Panel = comps.Panel;

	var recommendJsonObj = {
	    activeIndex: 0,
	    data: [
	        {
	            tabName: '相关系列课',
	            items: [
	                {
	                    name: '装修精品旺铺留住买家',
	                    count: 10,
	                    items: [
	                        {
	                            name: '一.SEO的概念',
	                            items: [
	                                {
	                                    name: '讲师介绍',
	                                    time: '12:00'
	                                },
	                                {
	                                    name: '讲师介绍二',
	                                    time: '12:00'
	                                }
	                            ]
	                        },
	                        {
	                            name: '二.SEO的概念',
	                            items: [
	                                {
	                                    name: '讲师介绍',
	                                    time: '12:00'
	                                },
	                                {
	                                    name: '讲师介绍二',
	                                    time: '12:00'
	                                }
	                            ]
	                        }
	                    ]
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    count: 10,
	                    items: [
	                        {
	                            name: '讲师介绍',
	                            time: '12:00'
	                        },
	                        {
	                            name: '讲师介绍',
	                            time: '12:00'
	                        }
	                    ]
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    count: 10,
	                    items: []
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    count: 10,
	                    items: []
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    count: 10,
	                    items: []
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    count: 10,
	                    items: []
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    count: 10,
	                    items: []
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    count: 10,
	                    items: []
	                }
	            ]
	        },
	        {
	            tabName: '相关课程',
	            items: [
	                {
	                    name: '装修精品旺铺留住买家',
	                    type: 'preview',
	                    count: 1234,
	                    time: '5:00',
	                    img: './img/avatar.jpg'
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    type: 'preview',
	                    count: 1234,
	                    time: '6:00',
	                    img: './img/avatar.jpg'
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    type: 'preview',
	                    count: 1234,
	                    time: '6:00',
	                    img: './img/avatar.jpg'
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    type: 'preview',
	                    count: 1234,
	                    time: '6:00',
	                    img: './img/avatar.jpg'
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    type: 'preview',
	                    count: 1234,
	                    time: '6:00',
	                    img: './img/avatar.jpg'
	                },
	                {
	                    name: '装修精品旺铺留住买家',
	                    type: 'preview',
	                    count: 1234,
	                    time: '6:00',
	                    img: './img/avatar.jpg'
	                }
	            ]
	        }
	    ]
	};

	var viewport = new Viewport({
	    items: [
	        {
	            type: Container,
	            items: [
	                {
	                    type: Container,
	                    items: [
	                        {
	                            type: Container,
	                            layout: 'hbox',
	                            items: [
	                                //{
	                                //    type: Recommend,
	                                //    data: recommendJsonObj
	                                //},
	                                {
	                                    type: Player,
	                                    style: {
	                                        width: 930
	                                    },
	                                    cls: 'o-player',
	                                    toolbar: [
	                                        {
	                                            type: StarVote
	                                        },
	                                        {
	                                            type: VideoTool,
	                                            style: {
	                                                float: 'right',
	                                                marginRight: 30,
	                                                marginTop: 3
	                                            }
	                                        }
	                                    ]
	                                },
	                                {
	                                    type: Recommend,
	                                    data: recommendJsonObj
	                                }
	                            ],
	                            style: {
	                                height: 480,
	                                horizontalAlign: 'center',
	                                width: 1185,
	                                marginBottom: 10,
	                                paddingLeft: 10,
	                                background: 'url(//cbu01.alicdn.com/cms/upload/2014/525/130/2031525_1751704920.png) no-repeat scroll -3px -300px'
	                            }
	                        },
	                        {
	                            type: Container,
	                            layout: 'hbox',
	                            style: {
	                                horizontalAlign: 'center',
	                                width: 1185
	                            },
	                            items: [
	                                {
	                                    type: Panel,
	                                    title: '装修精品旺铺留住买家',
	                                    style: {
	                                        height: 217,
	                                        width: 940
	                                    },
	                                    items: [
	                                        {
	                                            type: Container,
	                                            layout: 'hbox',
	                                            items: [
	                                                {
	                                                    type: Text,
	                                                    label: '学习人数',
	                                                    data: 888,
	                                                    style: {
	                                                        marginRight: 30
	                                                    }
	                                                },
	                                                {
	                                                    type: Text,
	                                                    label: '收藏人数',
	                                                    data: 526,
	                                                    style: {
	                                                        marginRight: 30
	                                                    }
	                                                },
	                                                {
	                                                    type: Text,
	                                                    label: '学员评分',
	                                                    data: '5分'
	                                                }
	                                                ,
	                                                {
	                                                    type: Text,
	                                                    label: '发布时间',
	                                                    data: '2015-09-30',
	                                                    style: {
	                                                        horizontalAlign: 'right'
	                                                    }
	                                                }
	                                            ]
	                                        },
	                                        {
	                                            type: Container,
	                                            items: [
	                                                {
	                                                    type: Text,
	                                                    label: '课程简介',
	                                                    labelAlign: 'top',
	                                                    style: {
	                                                        lineHeight: 18,
	                                                        height: 76
	                                                    },
	                                                    data: '央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,央行的网络支付新规,'
	                                                }
	                                            ]
	                                        },
	                                        {
	                                            type: Container,
	                                            items: [
	                                                {
	                                                    type: Link,
	                                                    label: '标签',
	                                                    underline: true,
	                                                    data: ['网络支付', '店铺自诊', '理财']
	                                                }
	                                            ]
	                                        }
	                                    ]
	                                },
	                                {
	                                    type: Panel,
	                                    id: 'teacher-summary',
	                                    cls: 'last dark',
	                                    title: '讲师简介',
	                                    style: {
	                                        height: 217,
	                                        width: 242
	                                    },
	                                    items: [
	                                        {
	                                            type: Container,
	                                            layout: 'hbox',
	                                            items: [
	                                                {
	                                                    type: Avatar
	                                                },
	                                                {
	                                                    type: Container,
	                                                    items: [
	                                                        {
	                                                            type: Text,
	                                                            label: '讲师',
	                                                            data: '名字',
	                                                            style: {
	                                                                marginBottom: 10
	                                                            }
	                                                        },
	                                                        {
	                                                            type: Text,
	                                                            data: '内容内容内容内容内容内容内容内容内.',
	                                                            style: {
	                                                                lineHeight: 18,
	                                                                marginBottom: 10
	                                                            }
	                                                        },
	                                                        {
	                                                            type: Link,
	                                                            cls: 'highLight',
	                                                            data: '了解更多&gt;',
	                                                            listeners: {
	                                                                click: function () {
	                                                                    alert('You clicked a link.');
	                                                                }
	                                                            }
	                                                        }
	                                                    ],
	                                                    style: {
	                                                        width: 110
	                                                    }
	                                                }
	                                            ]
	                                        }
	                                    ]
	                                }
	                            ]
	                        },
	                        {
	                            type: Container,
	                            layout: 'hbox',
	                            style: {
	                                horizontalAlign: 'center',
	                                width: 1185,
	                                padding: 0
	                            },
	                            items: [
	                                {
	                                    type: Panel,
	                                    title: '说说您的观点',
	                                    style: {
	                                        height: 800,
	                                        width: 940,
	                                        borderRight: 0
	                                    },
	                                    items: []
	                                },
	                                {
	                                    type: Container,
	                                    items: [
	                                        {
	                                            type: Panel,
	                                            title: '相关课程',
	                                            cls: 'last dark',
	                                            style: {
	                                                width: 242
	                                            },
	                                            items: [
	                                                {
	                                                    type: Preview,
	                                                    data: {
	                                                        title: '如何提升您首图的点击率',
	                                                        score: '4.0',
	                                                        studyCount: 9999,
	                                                        url: '',
	                                                        img: './img/avatar.jpg'
	                                                    },
	                                                    style: {
	                                                        marginBottom: 20
	                                                    }
	                                                },
	                                                {
	                                                    type: Preview,
	                                                    data: {
	                                                        title: '如何提升您首图的点击率',
	                                                        score: '4.0',
	                                                        studyCount: 9999,
	                                                        url: '',
	                                                        img: './img/avatar.jpg'
	                                                    },
	                                                    style: {
	                                                        marginBottom: 20
	                                                    }
	                                                },
	                                                {
	                                                    type: Preview,
	                                                    data: {
	                                                        title: '如何提升您首图的点击率',
	                                                        score: '4.0',
	                                                        studyCount: 9999,
	                                                        url: '',
	                                                        img: './img/avatar.jpg'
	                                                    }
	                                                }
	                                            ]
	                                        },
	                                        {
	                                            type: Panel,
	                                            cls: 'last dark',
	                                            moreBtn: '更多>',
	                                            title: '热门课程',
	                                            items: [
	                                                {
	                                                    type: Link,
	                                                    isListItem: true,
	                                                    data: '[原材料]如何打造五星产品首图',
	                                                    style: {
	                                                        marginBottom: 15
	                                                    }
	                                                },
	                                                {
	                                                    type: Link,
	                                                    isListItem: true,
	                                                    data: '[原材料]如何打造五星产品首图',
	                                                    style: {
	                                                        marginBottom: 15
	                                                    }
	                                                }, {
	                                                    type: Link,
	                                                    isListItem: true,
	                                                    data: '[原材料]如何打造五星产品首图',
	                                                    style: {
	                                                        marginBottom: 15
	                                                    }
	                                                }, {
	                                                    type: Link,
	                                                    isListItem: true,
	                                                    data: '[原材料]如何打造五星产品首图',
	                                                    style: {
	                                                        marginBottom: 15
	                                                    }
	                                                }, {
	                                                    type: Link,
	                                                    isListItem: true,
	                                                    data: '[原材料]如何打造五星产品首图',
	                                                    style: {
	                                                        marginBottom: 15
	                                                    }
	                                                }
	                                            ]
	                                        }
	                                    ]
	                                }


	                            ]
	                        }
	                    ],
	                    style: {
	                        background: 'url(//cbu01.alicdn.com/cms/upload/2014/671/088/1880176_1867113056.png) repeat center 0'
	                    }
	                }
	            ],
	            style: {
	                background: 'url(//cbu01.alicdn.com/cms/upload/2013/873/368/1863378_1867113056.png) repeat center 0'
	            }
	        }
	    ]
	});

	//渲染到页面,也可渲染到其他组件内
	viewport.renderTo('body');

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Root = __webpack_require__(4);

	(function (global) {
	    var Olive = {
	        define: Root.define,
	        layout: {},
	        //theme: require('./theme/theme.js'),
	        components: {
	            Component: __webpack_require__(6),
	            Button: __webpack_require__(909),
	            CourseList: __webpack_require__(915),
	            TextInput: __webpack_require__(921),
	            Text: __webpack_require__(922),
	            Link: __webpack_require__(926),
	            Avatar: __webpack_require__(930),
	            Preview: __webpack_require__(934),
	            Player: __webpack_require__(938),
	            Recommend: __webpack_require__(942),
	            StarVote: __webpack_require__(952),
	            VideoTool: __webpack_require__(954),
	            Container: __webpack_require__(959),
	            Viewport: __webpack_require__(961),
	            Panel: __webpack_require__(963),
	            Hero: __webpack_require__(967),
	            Form: __webpack_require__(972),
	            Table: __webpack_require__(973)
	        }
	    };
	    module.exports = global.Olive = Olive;
	})(typeof window !== "undefined" ? window : this);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5);
	var keywords = ['autoInit', 'extend', 'mixin', 'statics'];

	Function.prototype.$isFunction = true;

	var extendClass = function (superClass, subClass) {
	    if (superClass && subClass) {
	        var f = function () {
	        };
	        f.prototype = superClass.prototype;
	        subClass.prototype = new f();
	        subClass.prototype.constructor = subClass;
	        subClass.$superClass = superClass;
	    }
	};

	var mixinClass = function (self, mixin) {
	    if (!self || !mixin) {
	        return;
	    }
	    var args = arguments;
	    var mix = function (mixin) {
	        _.each(mixin, function (value, key) {
	            if (key === 'autoInit') {
	                value(self);
	            }
	            if (_.indexOf(keywords, key) > -1) {
	                return;
	            }
	            self.prototype[key] = value;
	        });
	    };

	    if (_.isObject(mixin)) {
	        if (_.isFunction(mixin)) {
	            mix(mixin.prototype);
	            return;
	        }
	        if (_.isArray(mixin)) {
	            _.each(mixin, function (oneMixin) {
	                args.callee(self, oneMixin);
	            });
	            return;
	        }
	        mix(mixin);
	    }
	};

	var Base = function () {
	};

	Base.prototype.callParent = function () {
	    var caller = arguments.callee.caller,
	        thisClass = caller.$ownerClass,
	        superClass = thisClass.$superClass;
	    var superFn = superClass.prototype[caller.$name];
	    if (superFn && superFn.$isFunction) {
	        return superFn.apply(this, arguments);
	    }
	};

	exports.define = function (cfg) {
	    var fn = function (opts) {
	        this.options = opts || {};
	        //initialize
	        var initialize = cfg.initialize || this.initialize;
	        if (_.isFunction(initialize))
	            initialize.apply(this, arguments);
	    };
	    var val,
	        superClass = cfg.extend || Base;
	    extendClass(superClass, fn);
	    mixinClass(fn, cfg.mixin);
	    var _proto = fn.prototype;
	    for (var p in cfg) {
	        if (p === 'extend') {
	            continue;
	        }
	        val = cfg[p];
	        //only create class function
	        if (val.$isFunction) {
	            val.$name = p;
	            val.$ownerClass = fn;
	        }
	        _proto[p] = val;
	    }
	    return fn;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5),
	    $ = __webpack_require__(7);
	var Root = __webpack_require__(4);
	var Renderable = __webpack_require__(8);
	var Observable = __webpack_require__(907);

	var sid = 0;

	module.exports = Root.define({
	    mixin: [Renderable, Observable],
	    initialize: function () {
	        this.id = 'olive_' + (sid++);
	        if (_.isFunction(this._addEventHooks)) {
	            this._addEventHooks();
	        }
	        this.children = this.processItems();
	        if (_.isFunction(this._registerEvents)) {
	            this._registerEvents();
	        }
	    },
	    processItems: function () {
	        var self = this;
	        return _.map(this.options.items, function (item) {
	            return self.parseItem(item);
	        });
	    },
	    parseItem: function (item) {
	        return new item.type(item);
	    },
	    destroy: function () {
	    }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.2
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-03-17T17:51Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.2",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(5);
	var $ = ( true ? __webpack_require__(7)(__webpack_require__(9).jsdom().defaultView) : require('jquery'));
	var Root = __webpack_require__(4);

	module.exports = Root.define({
	    _parseHtml: function () {
	        var itemHtmlElements = _.map(this.children, function (item) {
	            return item._parseHtml();
	        });
	        var toolHtmlElements = _.map(this.toolbar, function (tool) {
	            return tool._parseHtml();
	        });
	        //return html element
	        return this._parseCurrentHtml({itemHtmlElements: itemHtmlElements, toolHtmlElements: toolHtmlElements});
	    },
	    _parseCurrentHtml: function (children) {
	        //TODO refactor
	        this._parseStyle();
	        var el = this._addChildren(this._setComment(_.template(this.tpl)(this)), children);
	        this._setId(el);
	        this._setClass(el);
	        return this.el = el;
	    },
	    _setComment: function (html) {
	        //TODO
	        return html;
	    },
	    _setClass: function (el) {
	        $(el).addClass(this.options.cls);
	    },
	    _setId: function (el) {
	        $(el).attr('id', this.options.id);
	    },
	    _addChildren: function (current, children) {
	        //this.toolbarHtml = children.toolbar;
	        var $current = $(current);
	        $current.find('.toolbar').append(children.toolHtmlElements);
	        var $body = $current.find('.body');
	        $body.append(children.itemHtmlElements);
	        $body.append($body.children('.clear'));
	        return $current[0];
	    },
	    _parseStyle: function () {
	        //getRules(this);
	        var rules = {
	            float: function (value) {
	                return 'float: ' + value + ';';
	            },
	            lineHeight: function (value) {
	                return 'line-height: ' + value + 'px;';
	            },
	            marginLeft: function (value) {
	                return 'margin-left: ' + value + 'px;'
	            },
	            marginRight: function (value) {
	                return 'margin-right: ' + value + 'px;'
	            },
	            marginBottom: function (value) {
	                return 'margin-bottom: ' + value + 'px;'
	            },
	            marginTop: function (value) {
	                return 'margin-top: ' + value + 'px;'
	            },
	            paddingLeft: function (value) {
	                return 'padding-left: ' + value + 'px;'
	            },
	            horizontalAlign: function (value) {
	                switch (value) {
	                    case 'center':
	                        return 'margin: 0 auto;';
	                    case 'right':
	                        return 'float: right;';
	                    case 'left':
	                        return 'float: left;';
	                    default:
	                        return '';
	                }
	            },
	            backgroundColor: function (value) {
	                return 'background-color: ' + value + ';';
	            },
	            borderRight: function (value) {
	                return 'border-right: ' + value + ';';
	            },
	            background: function (value) {
	                return 'background: ' + value + ';';
	            }
	        };
	        var parsedStyle = '';
	        _.each(this.options.style, function (value, key) {
	            var rule = rules[key];
	            if (rule) {
	                parsedStyle += rule(value);
	                return;
	            }
	            parsedStyle += (key + ': ' + (_.isNumber(value) ? (value + 'px') : value) + ';');
	        });
	        return this.parsedStyle = parsedStyle;
	    },
	    _render: function (html) {
	        $(this.parentDom).append(html);
	    },
	    renderTo: function (target) {
	        if (true) {
	            var fs = __webpack_require__(10);
	            var path = __webpack_require__(11);
	            var tpl = __webpack_require__(906);
	            var html = _.template(tpl)({
	                body: this._parseHtml().outerHTML
	            });
	            fs.writeFile(path.basename(process.argv[1], '.js') + '.html', html, function (err) {
	                console.log(err ? '生成失败!' : '生成成功!')
	            });
	            return;
	        }
	        this.parentDom = target || this.target || 'body';
	        var isRendered = $('body').data('state');
	        if (isRendered !== 'rendered') {
	            this._render(this._parseHtml());
	        }
	        this.triggerAfterRender();
	    },
	    renderToString: function () {
	        if (true) {
	            var fs = __webpack_require__(10);
	            var path = __webpack_require__(11);
	            var tpl = __webpack_require__(906);
	            var html = _.template(tpl)({
	                body: this._parseHtml().outerHTML
	            });
	            fs.writeFile(path.basename(process.argv[1], '.js') + '.html', html, function (err) {
	                console.log(err ? '生成失败!' : '生成成功!')
	            });
	        }
	    },
	    triggerAfterRender: function () {
	        this.trigger('afterRender', {});
	        _.each(this.children, function (child) {
	            child.triggerAfterRender();
	        });
	    },
	    remove: function () {
	    },
	    show: function () {
	    },
	    hide: function () {
	    }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* eslint-disable no-unused-expressions */
	() => `jsdom 7.x onward only works on Node.js 4 or newer: https://github.com/tmpvar/jsdom#install`;
	/* eslint-enable no-unused-expressions */

	const fs = __webpack_require__(10);
	const path = __webpack_require__(11);
	const CookieJar = __webpack_require__(12).CookieJar;

	const toFileUrl = __webpack_require__(23).toFileUrl;
	const defineGetter = __webpack_require__(23).defineGetter;
	const defineSetter = __webpack_require__(23).defineSetter;
	const parseContentType = __webpack_require__(23).parseContentType;
	const documentFeatures = __webpack_require__(38);
	const domToHtml = __webpack_require__(40).domToHtml;
	const Window = __webpack_require__(64);
	const resourceLoader = __webpack_require__(693);
	const VirtualConsole = __webpack_require__(479);
	const locationInfo = __webpack_require__(33).locationInfo;
	const idlUtils = __webpack_require__(39);

	__webpack_require__(895); // Enable living standard features

	/* eslint-disable no-restricted-modules */
	// TODO: stop using the built-in URL in favor of the spec-compliant whatwg-url package
	// This legacy usage is in the process of being purged.
	const URL = __webpack_require__(14);
	/* eslint-enable no-restricted-modules */

	const canReadFilesFromFS = Boolean(fs.readFile); // in a browserify environment, this isn't present

	exports.createVirtualConsole = function (options) {
	  return new VirtualConsole(options);
	};

	exports.getVirtualConsole = function (window) {
	  return window._virtualConsole;
	};

	exports.createCookieJar = function () {
	  return new CookieJar(null, { looseMode: true });
	};

	exports.nodeLocation = function (node) {
	  return idlUtils.implForWrapper(node)[locationInfo];
	};

	exports.reconfigureWindow = function (window, newProps) {
	  if ("top" in newProps) {
	    window._top = newProps.top;
	  }
	};

	exports.debugMode = false;

	// Proxy feature functions to features module.
	for (const propName of ["availableDocumentFeatures", "defaultDocumentFeatures", "applyDocumentFeatures"]) {
	  defineGetter(exports, propName, () => documentFeatures[propName]);
	  defineSetter(exports, propName, val => documentFeatures[propName] = val);
	}

	exports.jsdom = function (html, options) {
	  if (options === undefined) {
	    options = {};
	  }
	  if (options.parsingMode === undefined || options.parsingMode === "auto") {
	    options.parsingMode = "html";
	  }

	  if (options.parsingMode !== "html" && options.parsingMode !== "xml") {
	    throw new RangeError(`Invalid parsingMode option ${JSON.stringify(options.parsingMode)}; must be either "html", ` +
	      `"xml", "auto", or undefined`);
	  }

	  setGlobalDefaultConfig(options);

	  // Back-compat hack: we have previously suggested nesting these under document, for jsdom.env at least.
	  // So we need to support that.
	  if (options.document) {
	    if (options.document.cookie !== undefined) {
	      options.cookie = options.document.cookie;
	    }
	    if (options.document.referrer !== undefined) {
	      options.referrer = options.document.referrer;
	    }
	  }

	  // List options explicitly to be clear which are passed through
	  const window = new Window({
	    parsingMode: options.parsingMode,
	    contentType: options.contentType,
	    parser: options.parser,
	    url: options.url,
	    lastModified: options.lastModified,
	    referrer: options.referrer,
	    cookieJar: options.cookieJar,
	    cookie: options.cookie,
	    resourceLoader: options.resourceLoader,
	    deferClose: options.deferClose,
	    concurrentNodeIterators: options.concurrentNodeIterators,
	    virtualConsole: options.virtualConsole,
	    pool: options.pool,
	    agentOptions: options.agentOptions,
	    strictSSL: options.strictSSL,
	    userAgent: options.userAgent
	  });

	  documentFeatures.applyDocumentFeatures(window.document, options.features);

	  if (options.created) {
	    options.created(null, window.document.defaultView);
	  }

	  if (options.parsingMode === "html") {
	    if (html === undefined || html === "") {
	      html = "<html><head></head><body></body></html>";
	    }

	    window.document.write(html);
	  }
	  if (options.parsingMode === "xml") {
	    if (html !== undefined) {
	      const documentImpl = idlUtils.implForWrapper(window.document);
	      documentImpl._htmlToDom.appendHtmlToDocument(html, documentImpl);
	    }
	  }

	  if (window.document.close && !options.deferClose) {
	    window.document.close();
	  }

	  return window.document;
	};

	exports.jQueryify = exports.jsdom.jQueryify = function (window, jqueryUrl, callback) {
	  if (!window || !window.document) {
	    return;
	  }

	  const implImpl = idlUtils.implForWrapper(window.document.implementation);
	  const features = implImpl._features;
	  implImpl._addFeature("FetchExternalResources", ["script"]);
	  implImpl._addFeature("ProcessExternalResources", ["script"]);
	  implImpl._addFeature("MutationEvents", ["2.0"]);

	  const scriptEl = window.document.createElement("script");
	  scriptEl.className = "jsdom";
	  scriptEl.src = jqueryUrl;
	  scriptEl.onload = scriptEl.onerror = () => {
	    implImpl._features = features;

	    if (callback) {
	      callback(window, window.jQuery);
	    }
	  };

	  window.document.body.appendChild(scriptEl);
	};

	exports.env = exports.jsdom.env = function () {
	  const config = getConfigFromArguments(arguments);
	  let req = null;

	  if (config.file && canReadFilesFromFS) {
	    req = resourceLoader.readFile(config.file, (err, text) => {
	      if (err) {
	        reportInitError(err, config);
	        return;
	      }

	      setParsingModeFromExtension(config, config.file);

	      config.html = text;
	      processHTML(config);
	    });
	  } else if (config.html !== undefined) {
	    processHTML(config);
	  } else if (config.url) {
	    req = handleUrl(config);
	  } else if (config.somethingToAutodetect !== undefined) {
	    const url = URL.parse(config.somethingToAutodetect);
	    if (url.protocol && url.hostname) {
	      config.url = config.somethingToAutodetect;
	      req = handleUrl(config.somethingToAutodetect);
	    } else if (canReadFilesFromFS) {
	      req = resourceLoader.readFile(config.somethingToAutodetect, (err, text) => {
	        if (err) {
	          if (err.code === "ENOENT" || err.code === "ENAMETOOLONG") {
	            config.html = config.somethingToAutodetect;
	            processHTML(config);
	          } else {
	            reportInitError(err, config);
	          }
	        } else {
	          setParsingModeFromExtension(config, config.somethingToAutodetect);

	          config.html = text;
	          config.url = toFileUrl(config.somethingToAutodetect);
	          processHTML(config);
	        }
	      });
	    } else {
	      config.html = config.somethingToAutodetect;
	      processHTML(config);
	    }
	  }

	  function handleUrl() {
	    const options = {
	      encoding: config.encoding || "utf8",
	      headers: config.headers || {},
	      pool: config.pool,
	      agentOptions: config.agentOptions,
	      strictSSL: config.strictSSL
	    };

	    if (config.proxy) {
	      options.proxy = config.proxy;
	    }

	    options.headers["User-Agent"] = config.userAgent;

	    config.cookieJar = config.cookieJar || exports.createCookieJar();

	    return resourceLoader.download(config.url, options, config.cookieJar, null, (err, responseText, res) => {
	      if (err) {
	        reportInitError(err, config);
	        return;
	      }

	      // The use of `res.request.uri.href` ensures that `window.location.href`
	      // is updated when `request` follows redirects.
	      config.html = responseText;
	      config.url = res.request.uri.href;

	      if (res.headers["last-modified"]) {
	        config.lastModified = new Date(res.headers["last-modified"]);
	      }

	      if (config.parsingMode === "auto") {
	        const contentType = parseContentType(res.headers["content-type"]);
	        if (contentType && contentType.isXML()) {
	          config.parsingMode = "xml";
	        }
	      }

	      processHTML(config);
	    });
	  }
	  return req;
	};

	exports.serializeDocument = function (doc) {
	  return domToHtml([doc]);
	};

	function processHTML(config) {
	  const window = exports.jsdom(config.html, config).defaultView;
	  const implImpl = idlUtils.implForWrapper(window.document.implementation);
	  const features = JSON.parse(JSON.stringify(implImpl._features));

	  let docsLoaded = 0;
	  const totalDocs = config.scripts.length + config.src.length;

	  if (!window || !window.document) {
	    reportInitError(new Error("JSDOM: a window object could not be created."), config);
	    return;
	  }

	  function scriptComplete() {
	    docsLoaded++;

	    if (docsLoaded >= totalDocs) {
	      implImpl._features = features;

	      process.nextTick(() => {
	        if (config.onload) {
	          config.onload(window);
	        }
	        if (config.done) {
	          config.done(null, window);
	        }
	      });
	    }
	  }

	  function handleScriptError() {
	    // nextTick so that an exception within scriptComplete won't cause
	    // another script onerror (which would be an infinite loop)
	    process.nextTick(scriptComplete);
	  }

	  if (config.scripts.length > 0 || config.src.length > 0) {
	    implImpl._addFeature("FetchExternalResources", ["script"]);
	    implImpl._addFeature("ProcessExternalResources", ["script"]);
	    implImpl._addFeature("MutationEvents", ["2.0"]);

	    for (const scriptSrc of config.scripts) {
	      const script = window.document.createElement("script");
	      script.className = "jsdom";
	      script.onload = scriptComplete;
	      script.onerror = handleScriptError;
	      script.src = scriptSrc;

	      window.document.body.appendChild(script);
	    }

	    for (const scriptText of config.src) {
	      const script = window.document.createElement("script");
	      script.onload = scriptComplete;
	      script.onerror = handleScriptError;
	      script.text = scriptText;

	      window.document.documentElement.appendChild(script);
	      window.document.documentElement.removeChild(script);
	    }
	  } else if (window.document.readyState === "complete") {
	    scriptComplete();
	  } else {
	    window.addEventListener("load", scriptComplete);
	  }
	}

	function setGlobalDefaultConfig(config) {
	  config.pool = config.pool !== undefined ? config.pool : {
	    maxSockets: 6
	  };

	  config.agentOptions = config.agentOptions !== undefined ? config.agentOptions : {
	    keepAlive: true,
	    keepAliveMsecs: 115 * 1000
	  };

	  config.strictSSL = config.strictSSL !== undefined ? config.strictSSL : true;

	  config.userAgent = config.userAgent || "Node.js (" + process.platform + "; U; rv:" + process.version + ")";
	}

	function getConfigFromArguments(args) {
	  const config = {};
	  if (typeof args[0] === "object") {
	    Object.assign(config, args[0]);
	  } else {
	    for (const arg of args) {
	      switch (typeof arg) {
	        case "string":
	          config.somethingToAutodetect = arg;
	          break;
	        case "function":
	          config.done = arg;
	          break;
	        case "object":
	          if (Array.isArray(arg)) {
	            config.scripts = arg;
	          } else {
	            Object.assign(config, arg);
	          }
	          break;
	      }
	    }
	  }

	  if (!config.done && !config.created && !config.onload) {
	    throw new Error("Must pass a \"created\", \"onload\", or \"done\" option, or a callback, to jsdom.env");
	  }

	  if (config.somethingToAutodetect === undefined &&
	      config.html === undefined && !config.file && !config.url) {
	    throw new Error("Must pass a \"html\", \"file\", or \"url\" option, or a string, to jsdom.env");
	  }

	  config.scripts = ensureArray(config.scripts);
	  config.src = ensureArray(config.src);
	  config.parsingMode = config.parsingMode || "auto";

	  config.features = config.features || {
	    FetchExternalResources: false,
	    ProcessExternalResources: false,
	    SkipExternalResources: false
	  };

	  if (!config.url && config.file) {
	    config.url = toFileUrl(config.file);
	  }

	  setGlobalDefaultConfig(config);

	  return config;
	}

	function reportInitError(err, config) {
	  if (config.created) {
	    config.created(err);
	  }
	  if (config.done) {
	    config.done(err);
	  }
	}

	function ensureArray(value) {
	  let array = value || [];
	  if (typeof array === "string") {
	    array = [array];
	  }
	  return array;
	}

	function setParsingModeFromExtension(config, filename) {
	  if (config.parsingMode === "auto") {
	    const ext = path.extname(filename);
	    if (ext === ".xhtml" || ext === ".xml") {
	      config.parsingMode = "xml";
	    }
	  }
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Copyright (c) 2015, Salesforce.com, Inc.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *
	 * 1. Redistributions of source code must retain the above copyright notice,
	 * this list of conditions and the following disclaimer.
	 *
	 * 2. Redistributions in binary form must reproduce the above copyright notice,
	 * this list of conditions and the following disclaimer in the documentation
	 * and/or other materials provided with the distribution.
	 *
	 * 3. Neither the name of Salesforce.com nor the names of its contributors may
	 * be used to endorse or promote products derived from this software without
	 * specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	 * POSSIBILITY OF SUCH DAMAGE.
	 */
	'use strict';
	var net = __webpack_require__(13);
	var urlParse = __webpack_require__(14).parse;
	var pubsuffix = __webpack_require__(15);
	var Store = __webpack_require__(17).Store;
	var MemoryCookieStore = __webpack_require__(18).MemoryCookieStore;
	var pathMatch = __webpack_require__(20).pathMatch;
	var VERSION = __webpack_require__(22).version;

	var punycode;
	try {
	  punycode = __webpack_require__(16);
	} catch(e) {
	  console.warn("cookie: can't load punycode; won't use punycode for domain normalization");
	}

	var DATE_DELIM = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/;

	// From RFC6265 S4.1.1
	// note that it excludes \x3B ";"
	var COOKIE_OCTET  = /[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]/;
	var COOKIE_OCTETS = new RegExp('^'+COOKIE_OCTET.source+'+$');

	var CONTROL_CHARS = /[\x00-\x1F]/;

	// Double quotes are part of the value (see: S4.1.1).
	// '\r', '\n' and '\0' should be treated as a terminator in the "relaxed" mode
	// (see: https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/parsed_cookie.cc#L60)
	// '=' and ';' are attribute/values separators
	// (see: https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/parsed_cookie.cc#L64)
	var COOKIE_PAIR = /^(([^=;]+))\s*=\s*([^\n\r\0]*)/;

	// Used to parse non-RFC-compliant cookies like '=abc' when given the `loose`
	// option in Cookie.parse:
	var LOOSE_COOKIE_PAIR = /^((?:=)?([^=;]*)\s*=\s*)?([^\n\r\0]*)/;

	// RFC6265 S4.1.1 defines path value as 'any CHAR except CTLs or ";"'
	// Note ';' is \x3B
	var PATH_VALUE = /[\x20-\x3A\x3C-\x7E]+/;

	// Used for checking whether or not there is a trailing semi-colon
	var TRAILING_SEMICOLON = /;+$/;

	var DAY_OF_MONTH = /^(\d{1,2})[^\d]*$/;
	var TIME = /^(\d{1,2})[^\d]*:(\d{1,2})[^\d]*:(\d{1,2})[^\d]*$/;
	var MONTH = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i;

	var MONTH_TO_NUM = {
	  jan:0, feb:1, mar:2, apr:3, may:4, jun:5,
	  jul:6, aug:7, sep:8, oct:9, nov:10, dec:11
	};
	var NUM_TO_MONTH = [
	  'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
	];
	var NUM_TO_DAY = [
	  'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
	];

	var YEAR = /^(\d{2}|\d{4})$/; // 2 to 4 digits

	var MAX_TIME = 2147483647000; // 31-bit max
	var MIN_TIME = 0; // 31-bit min


	// RFC6265 S5.1.1 date parser:
	function parseDate(str) {
	  if (!str) {
	    return;
	  }

	  /* RFC6265 S5.1.1:
	   * 2. Process each date-token sequentially in the order the date-tokens
	   * appear in the cookie-date
	   */
	  var tokens = str.split(DATE_DELIM);
	  if (!tokens) {
	    return;
	  }

	  var hour = null;
	  var minutes = null;
	  var seconds = null;
	  var day = null;
	  var month = null;
	  var year = null;

	  for (var i=0; i<tokens.length; i++) {
	    var token = tokens[i].trim();
	    if (!token.length) {
	      continue;
	    }

	    var result;

	    /* 2.1. If the found-time flag is not set and the token matches the time
	     * production, set the found-time flag and set the hour- value,
	     * minute-value, and second-value to the numbers denoted by the digits in
	     * the date-token, respectively.  Skip the remaining sub-steps and continue
	     * to the next date-token.
	     */
	    if (seconds === null) {
	      result = TIME.exec(token);
	      if (result) {
	        hour = parseInt(result[1], 10);
	        minutes = parseInt(result[2], 10);
	        seconds = parseInt(result[3], 10);
	        /* RFC6265 S5.1.1.5:
	         * [fail if]
	         * *  the hour-value is greater than 23,
	         * *  the minute-value is greater than 59, or
	         * *  the second-value is greater than 59.
	         */
	        if(hour > 23 || minutes > 59 || seconds > 59) {
	          return;
	        }

	        continue;
	      }
	    }

	    /* 2.2. If the found-day-of-month flag is not set and the date-token matches
	     * the day-of-month production, set the found-day-of- month flag and set
	     * the day-of-month-value to the number denoted by the date-token.  Skip
	     * the remaining sub-steps and continue to the next date-token.
	     */
	    if (day === null) {
	      result = DAY_OF_MONTH.exec(token);
	      if (result) {
	        day = parseInt(result, 10);
	        /* RFC6265 S5.1.1.5:
	         * [fail if] the day-of-month-value is less than 1 or greater than 31
	         */
	        if(day < 1 || day > 31) {
	          return;
	        }
	        continue;
	      }
	    }

	    /* 2.3. If the found-month flag is not set and the date-token matches the
	     * month production, set the found-month flag and set the month-value to
	     * the month denoted by the date-token.  Skip the remaining sub-steps and
	     * continue to the next date-token.
	     */
	    if (month === null) {
	      result = MONTH.exec(token);
	      if (result) {
	        month = MONTH_TO_NUM[result[1].toLowerCase()];
	        continue;
	      }
	    }

	    /* 2.4. If the found-year flag is not set and the date-token matches the year
	     * production, set the found-year flag and set the year-value to the number
	     * denoted by the date-token.  Skip the remaining sub-steps and continue to
	     * the next date-token.
	     */
	    if (year === null) {
	      result = YEAR.exec(token);
	      if (result) {
	        year = parseInt(result[0], 10);
	        /* From S5.1.1:
	         * 3.  If the year-value is greater than or equal to 70 and less
	         * than or equal to 99, increment the year-value by 1900.
	         * 4.  If the year-value is greater than or equal to 0 and less
	         * than or equal to 69, increment the year-value by 2000.
	         */
	        if (70 <= year && year <= 99) {
	          year += 1900;
	        } else if (0 <= year && year <= 69) {
	          year += 2000;
	        }

	        if (year < 1601) {
	          return; // 5. ... the year-value is less than 1601
	        }
	      }
	    }
	  }

	  if (seconds === null || day === null || month === null || year === null) {
	    return; // 5. ... at least one of the found-day-of-month, found-month, found-
	            // year, or found-time flags is not set,
	  }

	  return new Date(Date.UTC(year, month, day, hour, minutes, seconds));
	}

	function formatDate(date) {
	  var d = date.getUTCDate(); d = d >= 10 ? d : '0'+d;
	  var h = date.getUTCHours(); h = h >= 10 ? h : '0'+h;
	  var m = date.getUTCMinutes(); m = m >= 10 ? m : '0'+m;
	  var s = date.getUTCSeconds(); s = s >= 10 ? s : '0'+s;
	  return NUM_TO_DAY[date.getUTCDay()] + ', ' +
	    d+' '+ NUM_TO_MONTH[date.getUTCMonth()] +' '+ date.getUTCFullYear() +' '+
	    h+':'+m+':'+s+' GMT';
	}

	// S5.1.2 Canonicalized Host Names
	function canonicalDomain(str) {
	  if (str == null) {
	    return null;
	  }
	  str = str.trim().replace(/^\./,''); // S4.1.2.3 & S5.2.3: ignore leading .

	  // convert to IDN if any non-ASCII characters
	  if (punycode && /[^\u0001-\u007f]/.test(str)) {
	    str = punycode.toASCII(str);
	  }

	  return str.toLowerCase();
	}

	// S5.1.3 Domain Matching
	function domainMatch(str, domStr, canonicalize) {
	  if (str == null || domStr == null) {
	    return null;
	  }
	  if (canonicalize !== false) {
	    str = canonicalDomain(str);
	    domStr = canonicalDomain(domStr);
	  }

	  /*
	   * "The domain string and the string are identical. (Note that both the
	   * domain string and the string will have been canonicalized to lower case at
	   * this point)"
	   */
	  if (str == domStr) {
	    return true;
	  }

	  /* "All of the following [three] conditions hold:" (order adjusted from the RFC) */

	  /* "* The string is a host name (i.e., not an IP address)." */
	  if (net.isIP(str)) {
	    return false;
	  }

	  /* "* The domain string is a suffix of the string" */
	  var idx = str.indexOf(domStr);
	  if (idx <= 0) {
	    return false; // it's a non-match (-1) or prefix (0)
	  }

	  // e.g "a.b.c".indexOf("b.c") === 2
	  // 5 === 3+2
	  if (str.length !== domStr.length + idx) { // it's not a suffix
	    return false;
	  }

	  /* "* The last character of the string that is not included in the domain
	  * string is a %x2E (".") character." */
	  if (str.substr(idx-1,1) !== '.') {
	    return false;
	  }

	  return true;
	}


	// RFC6265 S5.1.4 Paths and Path-Match

	/*
	 * "The user agent MUST use an algorithm equivalent to the following algorithm
	 * to compute the default-path of a cookie:"
	 *
	 * Assumption: the path (and not query part or absolute uri) is passed in.
	 */
	function defaultPath(path) {
	  // "2. If the uri-path is empty or if the first character of the uri-path is not
	  // a %x2F ("/") character, output %x2F ("/") and skip the remaining steps.
	  if (!path || path.substr(0,1) !== "/") {
	    return "/";
	  }

	  // "3. If the uri-path contains no more than one %x2F ("/") character, output
	  // %x2F ("/") and skip the remaining step."
	  if (path === "/") {
	    return path;
	  }

	  var rightSlash = path.lastIndexOf("/");
	  if (rightSlash === 0) {
	    return "/";
	  }

	  // "4. Output the characters of the uri-path from the first character up to,
	  // but not including, the right-most %x2F ("/")."
	  return path.slice(0, rightSlash);
	}


	function parse(str, options) {
	  if (!options || typeof options !== 'object') {
	    options = {};
	  }
	  str = str.trim();

	  // S4.1.1 Trailing semi-colons are not part of the specification.
	  var semiColonCheck = TRAILING_SEMICOLON.exec(str);
	  if (semiColonCheck) {
	    str = str.slice(0, semiColonCheck.index);
	  }

	  // We use a regex to parse the "name-value-pair" part of S5.2
	  var firstSemi = str.indexOf(';'); // S5.2 step 1
	  var pairRe = options.loose ? LOOSE_COOKIE_PAIR : COOKIE_PAIR;
	  var result = pairRe.exec(firstSemi === -1 ? str : str.substr(0,firstSemi));

	  // Rx satisfies the "the name string is empty" and "lacks a %x3D ("=")"
	  // constraints as well as trimming any whitespace.
	  if (!result) {
	    return;
	  }

	  var c = new Cookie();
	  if (result[1]) {
	    c.key = result[2].trim();
	  } else {
	    c.key = '';
	  }
	  c.value = result[3].trim();
	  if (CONTROL_CHARS.test(c.key) || CONTROL_CHARS.test(c.value)) {
	    return;
	  }

	  if (firstSemi === -1) {
	    return c;
	  }

	  // S5.2.3 "unparsed-attributes consist of the remainder of the set-cookie-string
	  // (including the %x3B (";") in question)." plus later on in the same section
	  // "discard the first ";" and trim".
	  var unparsed = str.slice(firstSemi).replace(/^\s*;\s*/,'').trim();

	  // "If the unparsed-attributes string is empty, skip the rest of these
	  // steps."
	  if (unparsed.length === 0) {
	    return c;
	  }

	  /*
	   * S5.2 says that when looping over the items "[p]rocess the attribute-name
	   * and attribute-value according to the requirements in the following
	   * subsections" for every item.  Plus, for many of the individual attributes
	   * in S5.3 it says to use the "attribute-value of the last attribute in the
	   * cookie-attribute-list".  Therefore, in this implementation, we overwrite
	   * the previous value.
	   */
	  var cookie_avs = unparsed.split(/\s*;\s*/);
	  while (cookie_avs.length) {
	    var av = cookie_avs.shift();
	    var av_sep = av.indexOf('=');
	    var av_key, av_value;

	    if (av_sep === -1) {
	      av_key = av;
	      av_value = null;
	    } else {
	      av_key = av.substr(0,av_sep);
	      av_value = av.substr(av_sep+1);
	    }

	    av_key = av_key.trim().toLowerCase();

	    if (av_value) {
	      av_value = av_value.trim();
	    }

	    switch(av_key) {
	    case 'expires': // S5.2.1
	      if (av_value) {
	        var exp = parseDate(av_value);
	        // "If the attribute-value failed to parse as a cookie date, ignore the
	        // cookie-av."
	        if (exp) {
	          // over and underflow not realistically a concern: V8's getTime() seems to
	          // store something larger than a 32-bit time_t (even with 32-bit node)
	          c.expires = exp;
	        }
	      }
	      break;

	    case 'max-age': // S5.2.2
	      if (av_value) {
	        // "If the first character of the attribute-value is not a DIGIT or a "-"
	        // character ...[or]... If the remainder of attribute-value contains a
	        // non-DIGIT character, ignore the cookie-av."
	        if (/^-?[0-9]+$/.test(av_value)) {
	          var delta = parseInt(av_value, 10);
	          // "If delta-seconds is less than or equal to zero (0), let expiry-time
	          // be the earliest representable date and time."
	          c.setMaxAge(delta);
	        }
	      }
	      break;

	    case 'domain': // S5.2.3
	      // "If the attribute-value is empty, the behavior is undefined.  However,
	      // the user agent SHOULD ignore the cookie-av entirely."
	      if (av_value) {
	        // S5.2.3 "Let cookie-domain be the attribute-value without the leading %x2E
	        // (".") character."
	        var domain = av_value.trim().replace(/^\./, '');
	        if (domain) {
	          // "Convert the cookie-domain to lower case."
	          c.domain = domain.toLowerCase();
	        }
	      }
	      break;

	    case 'path': // S5.2.4
	      /*
	       * "If the attribute-value is empty or if the first character of the
	       * attribute-value is not %x2F ("/"):
	       *   Let cookie-path be the default-path.
	       * Otherwise:
	       *   Let cookie-path be the attribute-value."
	       *
	       * We'll represent the default-path as null since it depends on the
	       * context of the parsing.
	       */
	      c.path = av_value && av_value[0] === "/" ? av_value : null;
	      break;

	    case 'secure': // S5.2.5
	      /*
	       * "If the attribute-name case-insensitively matches the string "Secure",
	       * the user agent MUST append an attribute to the cookie-attribute-list
	       * with an attribute-name of Secure and an empty attribute-value."
	       */
	      c.secure = true;
	      break;

	    case 'httponly': // S5.2.6 -- effectively the same as 'secure'
	      c.httpOnly = true;
	      break;

	    default:
	      c.extensions = c.extensions || [];
	      c.extensions.push(av);
	      break;
	    }
	  }

	  return c;
	}

	// avoid the V8 deoptimization monster!
	function jsonParse(str) {
	  var obj;
	  try {
	    obj = JSON.parse(str);
	  } catch (e) {
	    return e;
	  }
	  return obj;
	}

	function fromJSON(str) {
	  if (!str) {
	    return null;
	  }

	  var obj;
	  if (typeof str === 'string') {
	    obj = jsonParse(str);
	    if (obj instanceof Error) {
	      return null;
	    }
	  } else {
	    // assume it's an Object
	    obj = str;
	  }

	  var c = new Cookie();
	  for (var i=0; i<Cookie.serializableProperties.length; i++) {
	    var prop = Cookie.serializableProperties[i];
	    if (obj[prop] === undefined ||
	        obj[prop] === Cookie.prototype[prop])
	    {
	      continue; // leave as prototype default
	    }

	    if (prop === 'expires' ||
	        prop === 'creation' ||
	        prop === 'lastAccessed')
	    {
	      if (obj[prop] === null) {
	        c[prop] = null;
	      } else {
	        c[prop] = obj[prop] == "Infinity" ?
	          "Infinity" : new Date(obj[prop]);
	      }
	    } else {
	      c[prop] = obj[prop];
	    }
	  }

	  return c;
	}

	/* Section 5.4 part 2:
	 * "*  Cookies with longer paths are listed before cookies with
	 *     shorter paths.
	 *
	 *  *  Among cookies that have equal-length path fields, cookies with
	 *     earlier creation-times are listed before cookies with later
	 *     creation-times."
	 */

	function cookieCompare(a,b) {
	  var cmp = 0;

	  // descending for length: b CMP a
	  var aPathLen = a.path ? a.path.length : 0;
	  var bPathLen = b.path ? b.path.length : 0;
	  cmp = bPathLen - aPathLen;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  // ascending for time: a CMP b
	  var aTime = a.creation ? a.creation.getTime() : MAX_TIME;
	  var bTime = b.creation ? b.creation.getTime() : MAX_TIME;
	  cmp = aTime - bTime;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  // break ties for the same millisecond (precision of JavaScript's clock)
	  cmp = a.creationIndex - b.creationIndex;

	  return cmp;
	}

	// Gives the permutation of all possible pathMatch()es of a given path. The
	// array is in longest-to-shortest order.  Handy for indexing.
	function permutePath(path) {
	  if (path === '/') {
	    return ['/'];
	  }
	  if (path.lastIndexOf('/') === path.length-1) {
	    path = path.substr(0,path.length-1);
	  }
	  var permutations = [path];
	  while (path.length > 1) {
	    var lindex = path.lastIndexOf('/');
	    if (lindex === 0) {
	      break;
	    }
	    path = path.substr(0,lindex);
	    permutations.push(path);
	  }
	  permutations.push('/');
	  return permutations;
	}

	function getCookieContext(url) {
	  if (url instanceof Object) {
	    return url;
	  }
	  // NOTE: decodeURI will throw on malformed URIs (see GH-32).
	  // Therefore, we will just skip decoding for such URIs.
	  try {
	    url = decodeURI(url);
	  }
	  catch(err) {
	    // Silently swallow error
	  }

	  return urlParse(url);
	}

	function Cookie(options) {
	  options = options || {};

	  Object.keys(options).forEach(function(prop) {
	    if (Cookie.prototype.hasOwnProperty(prop) &&
	        Cookie.prototype[prop] !== options[prop] &&
	        prop.substr(0,1) !== '_')
	    {
	      this[prop] = options[prop];
	    }
	  }, this);

	  this.creation = this.creation || new Date();

	  // used to break creation ties in cookieCompare():
	  Object.defineProperty(this, 'creationIndex', {
	    configurable: false,
	    enumerable: false, // important for assert.deepEqual checks
	    writable: true,
	    value: ++Cookie.cookiesCreated
	  });
	}

	Cookie.cookiesCreated = 0; // incremented each time a cookie is created

	Cookie.parse = parse;
	Cookie.fromJSON = fromJSON;

	Cookie.prototype.key = "";
	Cookie.prototype.value = "";

	// the order in which the RFC has them:
	Cookie.prototype.expires = "Infinity"; // coerces to literal Infinity
	Cookie.prototype.maxAge = null; // takes precedence over expires for TTL
	Cookie.prototype.domain = null;
	Cookie.prototype.path = null;
	Cookie.prototype.secure = false;
	Cookie.prototype.httpOnly = false;
	Cookie.prototype.extensions = null;

	// set by the CookieJar:
	Cookie.prototype.hostOnly = null; // boolean when set
	Cookie.prototype.pathIsDefault = null; // boolean when set
	Cookie.prototype.creation = null; // Date when set; defaulted by Cookie.parse
	Cookie.prototype.lastAccessed = null; // Date when set
	Object.defineProperty(Cookie.prototype, 'creationIndex', {
	  configurable: true,
	  enumerable: false,
	  writable: true,
	  value: 0
	});

	Cookie.serializableProperties = Object.keys(Cookie.prototype)
	  .filter(function(prop) {
	    return !(
	      Cookie.prototype[prop] instanceof Function ||
	      prop === 'creationIndex' ||
	      prop.substr(0,1) === '_'
	    );
	  });

	Cookie.prototype.inspect = function inspect() {
	  var now = Date.now();
	  return 'Cookie="'+this.toString() +
	    '; hostOnly='+(this.hostOnly != null ? this.hostOnly : '?') +
	    '; aAge='+(this.lastAccessed ? (now-this.lastAccessed.getTime())+'ms' : '?') +
	    '; cAge='+(this.creation ? (now-this.creation.getTime())+'ms' : '?') +
	    '"';
	};

	Cookie.prototype.toJSON = function() {
	  var obj = {};

	  var props = Cookie.serializableProperties;
	  for (var i=0; i<props.length; i++) {
	    var prop = props[i];
	    if (this[prop] === Cookie.prototype[prop]) {
	      continue; // leave as prototype default
	    }

	    if (prop === 'expires' ||
	        prop === 'creation' ||
	        prop === 'lastAccessed')
	    {
	      if (this[prop] === null) {
	        obj[prop] = null;
	      } else {
	        obj[prop] = this[prop] == "Infinity" ? // intentionally not ===
	          "Infinity" : this[prop].toISOString();
	      }
	    } else if (prop === 'maxAge') {
	      if (this[prop] !== null) {
	        // again, intentionally not ===
	        obj[prop] = (this[prop] == Infinity || this[prop] == -Infinity) ?
	          this[prop].toString() : this[prop];
	      }
	    } else {
	      if (this[prop] !== Cookie.prototype[prop]) {
	        obj[prop] = this[prop];
	      }
	    }
	  }

	  return obj;
	};

	Cookie.prototype.clone = function() {
	  return fromJSON(this.toJSON());
	};

	Cookie.prototype.validate = function validate() {
	  if (!COOKIE_OCTETS.test(this.value)) {
	    return false;
	  }
	  if (this.expires != Infinity && !(this.expires instanceof Date) && !parseDate(this.expires)) {
	    return false;
	  }
	  if (this.maxAge != null && this.maxAge <= 0) {
	    return false; // "Max-Age=" non-zero-digit *DIGIT
	  }
	  if (this.path != null && !PATH_VALUE.test(this.path)) {
	    return false;
	  }

	  var cdomain = this.cdomain();
	  if (cdomain) {
	    if (cdomain.match(/\.$/)) {
	      return false; // S4.1.2.3 suggests that this is bad. domainMatch() tests confirm this
	    }
	    var suffix = pubsuffix.getPublicSuffix(cdomain);
	    if (suffix == null) { // it's a public suffix
	      return false;
	    }
	  }
	  return true;
	};

	Cookie.prototype.setExpires = function setExpires(exp) {
	  if (exp instanceof Date) {
	    this.expires = exp;
	  } else {
	    this.expires = parseDate(exp) || "Infinity";
	  }
	};

	Cookie.prototype.setMaxAge = function setMaxAge(age) {
	  if (age === Infinity || age === -Infinity) {
	    this.maxAge = age.toString(); // so JSON.stringify() works
	  } else {
	    this.maxAge = age;
	  }
	};

	// gives Cookie header format
	Cookie.prototype.cookieString = function cookieString() {
	  var val = this.value;
	  if (val == null) {
	    val = '';
	  }
	  if (this.key === '') {
	    return val;
	  }
	  return this.key+'='+val;
	};

	// gives Set-Cookie header format
	Cookie.prototype.toString = function toString() {
	  var str = this.cookieString();

	  if (this.expires != Infinity) {
	    if (this.expires instanceof Date) {
	      str += '; Expires='+formatDate(this.expires);
	    } else {
	      str += '; Expires='+this.expires;
	    }
	  }

	  if (this.maxAge != null && this.maxAge != Infinity) {
	    str += '; Max-Age='+this.maxAge;
	  }

	  if (this.domain && !this.hostOnly) {
	    str += '; Domain='+this.domain;
	  }
	  if (this.path) {
	    str += '; Path='+this.path;
	  }

	  if (this.secure) {
	    str += '; Secure';
	  }
	  if (this.httpOnly) {
	    str += '; HttpOnly';
	  }
	  if (this.extensions) {
	    this.extensions.forEach(function(ext) {
	      str += '; '+ext;
	    });
	  }

	  return str;
	};

	// TTL() partially replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
	// elsewhere)
	// S5.3 says to give the "latest representable date" for which we use Infinity
	// For "expired" we use 0
	Cookie.prototype.TTL = function TTL(now) {
	  /* RFC6265 S4.1.2.2 If a cookie has both the Max-Age and the Expires
	   * attribute, the Max-Age attribute has precedence and controls the
	   * expiration date of the cookie.
	   * (Concurs with S5.3 step 3)
	   */
	  if (this.maxAge != null) {
	    return this.maxAge<=0 ? 0 : this.maxAge*1000;
	  }

	  var expires = this.expires;
	  if (expires != Infinity) {
	    if (!(expires instanceof Date)) {
	      expires = parseDate(expires) || Infinity;
	    }

	    if (expires == Infinity) {
	      return Infinity;
	    }

	    return expires.getTime() - (now || Date.now());
	  }

	  return Infinity;
	};

	// expiryTime() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
	// elsewhere)
	Cookie.prototype.expiryTime = function expiryTime(now) {
	  if (this.maxAge != null) {
	    var relativeTo = now || this.creation || new Date();
	    var age = (this.maxAge <= 0) ? -Infinity : this.maxAge*1000;
	    return relativeTo.getTime() + age;
	  }

	  if (this.expires == Infinity) {
	    return Infinity;
	  }
	  return this.expires.getTime();
	};

	// expiryDate() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
	// elsewhere), except it returns a Date
	Cookie.prototype.expiryDate = function expiryDate(now) {
	  var millisec = this.expiryTime(now);
	  if (millisec == Infinity) {
	    return new Date(MAX_TIME);
	  } else if (millisec == -Infinity) {
	    return new Date(MIN_TIME);
	  } else {
	    return new Date(millisec);
	  }
	};

	// This replaces the "persistent-flag" parts of S5.3 step 3
	Cookie.prototype.isPersistent = function isPersistent() {
	  return (this.maxAge != null || this.expires != Infinity);
	};

	// Mostly S5.1.2 and S5.2.3:
	Cookie.prototype.cdomain =
	Cookie.prototype.canonicalizedDomain = function canonicalizedDomain() {
	  if (this.domain == null) {
	    return null;
	  }
	  return canonicalDomain(this.domain);
	};

	function CookieJar(store, options) {
	  if (typeof options === "boolean") {
	    options = {rejectPublicSuffixes: options};
	  } else if (options == null) {
	    options = {};
	  }
	  if (options.rejectPublicSuffixes != null) {
	    this.rejectPublicSuffixes = options.rejectPublicSuffixes;
	  }
	  if (options.looseMode != null) {
	    this.enableLooseMode = options.looseMode;
	  }

	  if (!store) {
	    store = new MemoryCookieStore();
	  }
	  this.store = store;
	}
	CookieJar.prototype.store = null;
	CookieJar.prototype.rejectPublicSuffixes = true;
	CookieJar.prototype.enableLooseMode = false;
	var CAN_BE_SYNC = [];

	CAN_BE_SYNC.push('setCookie');
	CookieJar.prototype.setCookie = function(cookie, url, options, cb) {
	  var err;
	  var context = getCookieContext(url);
	  if (options instanceof Function) {
	    cb = options;
	    options = {};
	  }

	  var host = canonicalDomain(context.hostname);
	  var loose = this.enableLooseMode;
	  if (options.loose != null) {
	    loose = options.loose;
	  }

	  // S5.3 step 1
	  if (!(cookie instanceof Cookie)) {
	    cookie = Cookie.parse(cookie, { loose: loose });
	  }
	  if (!cookie) {
	    err = new Error("Cookie failed to parse");
	    return cb(options.ignoreError ? null : err);
	  }

	  // S5.3 step 2
	  var now = options.now || new Date(); // will assign later to save effort in the face of errors

	  // S5.3 step 3: NOOP; persistent-flag and expiry-time is handled by getCookie()

	  // S5.3 step 4: NOOP; domain is null by default

	  // S5.3 step 5: public suffixes
	  if (this.rejectPublicSuffixes && cookie.domain) {
	    var suffix = pubsuffix.getPublicSuffix(cookie.cdomain());
	    if (suffix == null) { // e.g. "com"
	      err = new Error("Cookie has domain set to a public suffix");
	      return cb(options.ignoreError ? null : err);
	    }
	  }

	  // S5.3 step 6:
	  if (cookie.domain) {
	    if (!domainMatch(host, cookie.cdomain(), false)) {
	      err = new Error("Cookie not in this host's domain. Cookie:"+cookie.cdomain()+" Request:"+host);
	      return cb(options.ignoreError ? null : err);
	    }

	    if (cookie.hostOnly == null) { // don't reset if already set
	      cookie.hostOnly = false;
	    }

	  } else {
	    cookie.hostOnly = true;
	    cookie.domain = host;
	  }

	  //S5.2.4 If the attribute-value is empty or if the first character of the
	  //attribute-value is not %x2F ("/"):
	  //Let cookie-path be the default-path.
	  if (!cookie.path || cookie.path[0] !== '/') {
	    cookie.path = defaultPath(context.pathname);
	    cookie.pathIsDefault = true;
	  }

	  // S5.3 step 8: NOOP; secure attribute
	  // S5.3 step 9: NOOP; httpOnly attribute

	  // S5.3 step 10
	  if (options.http === false && cookie.httpOnly) {
	    err = new Error("Cookie is HttpOnly and this isn't an HTTP API");
	    return cb(options.ignoreError ? null : err);
	  }

	  var store = this.store;

	  if (!store.updateCookie) {
	    store.updateCookie = function(oldCookie, newCookie, cb) {
	      this.putCookie(newCookie, cb);
	    };
	  }

	  function withCookie(err, oldCookie) {
	    if (err) {
	      return cb(err);
	    }

	    var next = function(err) {
	      if (err) {
	        return cb(err);
	      } else {
	        cb(null, cookie);
	      }
	    };

	    if (oldCookie) {
	      // S5.3 step 11 - "If the cookie store contains a cookie with the same name,
	      // domain, and path as the newly created cookie:"
	      if (options.http === false && oldCookie.httpOnly) { // step 11.2
	        err = new Error("old Cookie is HttpOnly and this isn't an HTTP API");
	        return cb(options.ignoreError ? null : err);
	      }
	      cookie.creation = oldCookie.creation; // step 11.3
	      cookie.creationIndex = oldCookie.creationIndex; // preserve tie-breaker
	      cookie.lastAccessed = now;
	      // Step 11.4 (delete cookie) is implied by just setting the new one:
	      store.updateCookie(oldCookie, cookie, next); // step 12

	    } else {
	      cookie.creation = cookie.lastAccessed = now;
	      store.putCookie(cookie, next); // step 12
	    }
	  }

	  store.findCookie(cookie.domain, cookie.path, cookie.key, withCookie);
	};

	// RFC6365 S5.4
	CAN_BE_SYNC.push('getCookies');
	CookieJar.prototype.getCookies = function(url, options, cb) {
	  var context = getCookieContext(url);
	  if (options instanceof Function) {
	    cb = options;
	    options = {};
	  }

	  var host = canonicalDomain(context.hostname);
	  var path = context.pathname || '/';

	  var secure = options.secure;
	  if (secure == null && context.protocol &&
	      (context.protocol == 'https:' || context.protocol == 'wss:'))
	  {
	    secure = true;
	  }

	  var http = options.http;
	  if (http == null) {
	    http = true;
	  }

	  var now = options.now || Date.now();
	  var expireCheck = options.expire !== false;
	  var allPaths = !!options.allPaths;
	  var store = this.store;

	  function matchingCookie(c) {
	    // "Either:
	    //   The cookie's host-only-flag is true and the canonicalized
	    //   request-host is identical to the cookie's domain.
	    // Or:
	    //   The cookie's host-only-flag is false and the canonicalized
	    //   request-host domain-matches the cookie's domain."
	    if (c.hostOnly) {
	      if (c.domain != host) {
	        return false;
	      }
	    } else {
	      if (!domainMatch(host, c.domain, false)) {
	        return false;
	      }
	    }

	    // "The request-uri's path path-matches the cookie's path."
	    if (!allPaths && !pathMatch(path, c.path)) {
	      return false;
	    }

	    // "If the cookie's secure-only-flag is true, then the request-uri's
	    // scheme must denote a "secure" protocol"
	    if (c.secure && !secure) {
	      return false;
	    }

	    // "If the cookie's http-only-flag is true, then exclude the cookie if the
	    // cookie-string is being generated for a "non-HTTP" API"
	    if (c.httpOnly && !http) {
	      return false;
	    }

	    // deferred from S5.3
	    // non-RFC: allow retention of expired cookies by choice
	    if (expireCheck && c.expiryTime() <= now) {
	      store.removeCookie(c.domain, c.path, c.key, function(){}); // result ignored
	      return false;
	    }

	    return true;
	  }

	  store.findCookies(host, allPaths ? null : path, function(err,cookies) {
	    if (err) {
	      return cb(err);
	    }

	    cookies = cookies.filter(matchingCookie);

	    // sorting of S5.4 part 2
	    if (options.sort !== false) {
	      cookies = cookies.sort(cookieCompare);
	    }

	    // S5.4 part 3
	    var now = new Date();
	    cookies.forEach(function(c) {
	      c.lastAccessed = now;
	    });
	    // TODO persist lastAccessed

	    cb(null,cookies);
	  });
	};

	CAN_BE_SYNC.push('getCookieString');
	CookieJar.prototype.getCookieString = function(/*..., cb*/) {
	  var args = Array.prototype.slice.call(arguments,0);
	  var cb = args.pop();
	  var next = function(err,cookies) {
	    if (err) {
	      cb(err);
	    } else {
	      cb(null, cookies
	        .sort(cookieCompare)
	        .map(function(c){
	          return c.cookieString();
	        })
	        .join('; '));
	    }
	  };
	  args.push(next);
	  this.getCookies.apply(this,args);
	};

	CAN_BE_SYNC.push('getSetCookieStrings');
	CookieJar.prototype.getSetCookieStrings = function(/*..., cb*/) {
	  var args = Array.prototype.slice.call(arguments,0);
	  var cb = args.pop();
	  var next = function(err,cookies) {
	    if (err) {
	      cb(err);
	    } else {
	      cb(null, cookies.map(function(c){
	        return c.toString();
	      }));
	    }
	  };
	  args.push(next);
	  this.getCookies.apply(this,args);
	};

	CAN_BE_SYNC.push('serialize');
	CookieJar.prototype.serialize = function(cb) {
	  var type = this.store.constructor.name;
	  if (type === 'Object') {
	    type = null;
	  }

	  // update README.md "Serialization Format" if you change this, please!
	  var serialized = {
	    // The version of tough-cookie that serialized this jar. Generally a good
	    // practice since future versions can make data import decisions based on
	    // known past behavior. When/if this matters, use `semver`.
	    version: 'tough-cookie@'+VERSION,

	    // add the store type, to make humans happy:
	    storeType: type,

	    // CookieJar configuration:
	    rejectPublicSuffixes: !!this.rejectPublicSuffixes,

	    // this gets filled from getAllCookies:
	    cookies: []
	  };

	  if (!(this.store.getAllCookies &&
	        typeof this.store.getAllCookies === 'function'))
	  {
	    return cb(new Error('store does not support getAllCookies and cannot be serialized'));
	  }

	  this.store.getAllCookies(function(err,cookies) {
	    if (err) {
	      return cb(err);
	    }

	    serialized.cookies = cookies.map(function(cookie) {
	      // convert to serialized 'raw' cookies
	      cookie = (cookie instanceof Cookie) ? cookie.toJSON() : cookie;

	      // Remove the index so new ones get assigned during deserialization
	      delete cookie.creationIndex;

	      return cookie;
	    });

	    return cb(null, serialized);
	  });
	};

	// well-known name that JSON.stringify calls
	CookieJar.prototype.toJSON = function() {
	  return this.serializeSync();
	};

	// use the class method CookieJar.deserialize instead of calling this directly
	CAN_BE_SYNC.push('_importCookies');
	CookieJar.prototype._importCookies = function(serialized, cb) {
	  var jar = this;
	  var cookies = serialized.cookies;
	  if (!cookies || !Array.isArray(cookies)) {
	    return cb(new Error('serialized jar has no cookies array'));
	  }

	  function putNext(err) {
	    if (err) {
	      return cb(err);
	    }

	    if (!cookies.length) {
	      return cb(err, jar);
	    }

	    var cookie;
	    try {
	      cookie = fromJSON(cookies.shift());
	    } catch (e) {
	      return cb(e);
	    }

	    if (cookie === null) {
	      return putNext(null); // skip this cookie
	    }

	    jar.store.putCookie(cookie, putNext);
	  }

	  putNext();
	};

	CookieJar.deserialize = function(strOrObj, store, cb) {
	  if (arguments.length !== 3) {
	    // store is optional
	    cb = store;
	    store = null;
	  }

	  var serialized;
	  if (typeof strOrObj === 'string') {
	    serialized = jsonParse(strOrObj);
	    if (serialized instanceof Error) {
	      return cb(serialized);
	    }
	  } else {
	    serialized = strOrObj;
	  }

	  var jar = new CookieJar(store, serialized.rejectPublicSuffixes);
	  jar._importCookies(serialized, function(err) {
	    if (err) {
	      return cb(err);
	    }
	    cb(null, jar);
	  });
	};

	CookieJar.deserializeSync = function(strOrObj, store) {
	  var serialized = typeof strOrObj === 'string' ?
	    JSON.parse(strOrObj) : strOrObj;
	  var jar = new CookieJar(store, serialized.rejectPublicSuffixes);

	  // catch this mistake early:
	  if (!jar.store.synchronous) {
	    throw new Error('CookieJar store is not synchronous; use async API instead.');
	  }

	  jar._importCookiesSync(serialized);
	  return jar;
	};
	CookieJar.fromJSON = CookieJar.deserializeSync;

	CAN_BE_SYNC.push('clone');
	CookieJar.prototype.clone = function(newStore, cb) {
	  if (arguments.length === 1) {
	    cb = newStore;
	    newStore = null;
	  }

	  this.serialize(function(err,serialized) {
	    if (err) {
	      return cb(err);
	    }
	    CookieJar.deserialize(newStore, serialized, cb);
	  });
	};

	// Use a closure to provide a true imperative API for synchronous stores.
	function syncWrap(method) {
	  return function() {
	    if (!this.store.synchronous) {
	      throw new Error('CookieJar store is not synchronous; use async API instead.');
	    }

	    var args = Array.prototype.slice.call(arguments);
	    var syncErr, syncResult;
	    args.push(function syncCb(err, result) {
	      syncErr = err;
	      syncResult = result;
	    });
	    this[method].apply(this, args);

	    if (syncErr) {
	      throw syncErr;
	    }
	    return syncResult;
	  };
	}

	// wrap all declared CAN_BE_SYNC methods in the sync wrapper
	CAN_BE_SYNC.forEach(function(method) {
	  CookieJar.prototype[method+'Sync'] = syncWrap(method);
	});

	module.exports = {
	  CookieJar: CookieJar,
	  Cookie: Cookie,
	  Store: Store,
	  MemoryCookieStore: MemoryCookieStore,
	  parseDate: parseDate,
	  formatDate: formatDate,
	  parse: parse,
	  fromJSON: fromJSON,
	  domainMatch: domainMatch,
	  defaultPath: defaultPath,
	  pathMatch: pathMatch,
	  getPublicSuffix: pubsuffix.getPublicSuffix,
	  cookieCompare: cookieCompare,
	  permuteDomain: __webpack_require__(19).permuteDomain,
	  permutePath: permutePath,
	  canonicalDomain: canonicalDomain
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("net");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/****************************************************
	 * AUTOMATICALLY GENERATED by generate-pubsuffix.js *
	 *                  DO NOT EDIT!                    *
	 ****************************************************/

	"use strict";

	var punycode = __webpack_require__(16);

	module.exports.getPublicSuffix = function getPublicSuffix(domain) {
	  /*!
	   * Copyright (c) 2015, Salesforce.com, Inc.
	   * All rights reserved.
	   *
	   * Redistribution and use in source and binary forms, with or without
	   * modification, are permitted provided that the following conditions are met:
	   *
	   * 1. Redistributions of source code must retain the above copyright notice,
	   * this list of conditions and the following disclaimer.
	   *
	   * 2. Redistributions in binary form must reproduce the above copyright notice,
	   * this list of conditions and the following disclaimer in the documentation
	   * and/or other materials provided with the distribution.
	   *
	   * 3. Neither the name of Salesforce.com nor the names of its contributors may
	   * be used to endorse or promote products derived from this software without
	   * specific prior written permission.
	   *
	   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	   * POSSIBILITY OF SUCH DAMAGE.
	   */
	  if (!domain) {
	    return null;
	  }
	  if (domain.match(/^\./)) {
	    return null;
	  }
	  var asciiDomain = punycode.toASCII(domain);
	  var converted = false;
	  if (asciiDomain !== domain) {
	    domain = asciiDomain;
	    converted = true;
	  }
	  if (index[domain]) {
	    return null;
	  }

	  domain = domain.toLowerCase();
	  var parts = domain.split('.').reverse();

	  var suffix = '';
	  var suffixLen = 0;
	  for (var i=0; i<parts.length; i++) {
	    var part = parts[i];
	    var starstr = '*'+suffix;
	    var partstr = part+suffix;

	    if (index[starstr]) { // star rule matches
	      suffixLen = i+1;
	      if (index[partstr] === false) { // exception rule matches (NB: false, not undefined)
	        suffixLen--;
	      }
	    } else if (index[partstr]) { // exact match, not exception
	      suffixLen = i+1;
	    }

	    suffix = '.'+partstr;
	  }

	  if (index['*'+suffix]) { // *.domain exists (e.g. *.kyoto.jp for domain='kyoto.jp');
	    return null;
	  }

	  suffixLen = suffixLen || 1;
	  if (parts.length > suffixLen) {
	    var publicSuffix = parts.slice(0,suffixLen+1).reverse().join('.');
	    return converted ? punycode.toUnicode(publicSuffix) : publicSuffix;
	  }

	  return null;
	};

	// The following generated structure is used under the MPL version 2.0
	// See public-suffix.txt for more information

	var index = module.exports.index = Object.freeze(
	{"ac":true,"com.ac":true,"edu.ac":true,"gov.ac":true,"net.ac":true,"mil.ac":true,"org.ac":true,"ad":true,"nom.ad":true,"ae":true,"co.ae":true,"net.ae":true,"org.ae":true,"sch.ae":true,"ac.ae":true,"gov.ae":true,"mil.ae":true,"aero":true,"accident-investigation.aero":true,"accident-prevention.aero":true,"aerobatic.aero":true,"aeroclub.aero":true,"aerodrome.aero":true,"agents.aero":true,"aircraft.aero":true,"airline.aero":true,"airport.aero":true,"air-surveillance.aero":true,"airtraffic.aero":true,"air-traffic-control.aero":true,"ambulance.aero":true,"amusement.aero":true,"association.aero":true,"author.aero":true,"ballooning.aero":true,"broker.aero":true,"caa.aero":true,"cargo.aero":true,"catering.aero":true,"certification.aero":true,"championship.aero":true,"charter.aero":true,"civilaviation.aero":true,"club.aero":true,"conference.aero":true,"consultant.aero":true,"consulting.aero":true,"control.aero":true,"council.aero":true,"crew.aero":true,"design.aero":true,"dgca.aero":true,"educator.aero":true,"emergency.aero":true,"engine.aero":true,"engineer.aero":true,"entertainment.aero":true,"equipment.aero":true,"exchange.aero":true,"express.aero":true,"federation.aero":true,"flight.aero":true,"freight.aero":true,"fuel.aero":true,"gliding.aero":true,"government.aero":true,"groundhandling.aero":true,"group.aero":true,"hanggliding.aero":true,"homebuilt.aero":true,"insurance.aero":true,"journal.aero":true,"journalist.aero":true,"leasing.aero":true,"logistics.aero":true,"magazine.aero":true,"maintenance.aero":true,"marketplace.aero":true,"media.aero":true,"microlight.aero":true,"modelling.aero":true,"navigation.aero":true,"parachuting.aero":true,"paragliding.aero":true,"passenger-association.aero":true,"pilot.aero":true,"press.aero":true,"production.aero":true,"recreation.aero":true,"repbody.aero":true,"res.aero":true,"research.aero":true,"rotorcraft.aero":true,"safety.aero":true,"scientist.aero":true,"services.aero":true,"show.aero":true,"skydiving.aero":true,"software.aero":true,"student.aero":true,"taxi.aero":true,"trader.aero":true,"trading.aero":true,"trainer.aero":true,"union.aero":true,"workinggroup.aero":true,"works.aero":true,"af":true,"gov.af":true,"com.af":true,"org.af":true,"net.af":true,"edu.af":true,"ag":true,"com.ag":true,"org.ag":true,"net.ag":true,"co.ag":true,"nom.ag":true,"ai":true,"off.ai":true,"com.ai":true,"net.ai":true,"org.ai":true,"al":true,"com.al":true,"edu.al":true,"gov.al":true,"mil.al":true,"net.al":true,"org.al":true,"am":true,"an":true,"com.an":true,"net.an":true,"org.an":true,"edu.an":true,"ao":true,"ed.ao":true,"gv.ao":true,"og.ao":true,"co.ao":true,"pb.ao":true,"it.ao":true,"aq":true,"ar":true,"com.ar":true,"edu.ar":true,"gob.ar":true,"gov.ar":true,"int.ar":true,"mil.ar":true,"net.ar":true,"org.ar":true,"tur.ar":true,"arpa":true,"e164.arpa":true,"in-addr.arpa":true,"ip6.arpa":true,"iris.arpa":true,"uri.arpa":true,"urn.arpa":true,"as":true,"gov.as":true,"asia":true,"at":true,"ac.at":true,"co.at":true,"gv.at":true,"or.at":true,"au":true,"com.au":true,"net.au":true,"org.au":true,"edu.au":true,"gov.au":true,"asn.au":true,"id.au":true,"info.au":true,"conf.au":true,"oz.au":true,"act.au":true,"nsw.au":true,"nt.au":true,"qld.au":true,"sa.au":true,"tas.au":true,"vic.au":true,"wa.au":true,"act.edu.au":true,"nsw.edu.au":true,"nt.edu.au":true,"qld.edu.au":true,"sa.edu.au":true,"tas.edu.au":true,"vic.edu.au":true,"wa.edu.au":true,"qld.gov.au":true,"sa.gov.au":true,"tas.gov.au":true,"vic.gov.au":true,"wa.gov.au":true,"aw":true,"com.aw":true,"ax":true,"az":true,"com.az":true,"net.az":true,"int.az":true,"gov.az":true,"org.az":true,"edu.az":true,"info.az":true,"pp.az":true,"mil.az":true,"name.az":true,"pro.az":true,"biz.az":true,"ba":true,"org.ba":true,"net.ba":true,"edu.ba":true,"gov.ba":true,"mil.ba":true,"unsa.ba":true,"unbi.ba":true,"co.ba":true,"com.ba":true,"rs.ba":true,"bb":true,"biz.bb":true,"co.bb":true,"com.bb":true,"edu.bb":true,"gov.bb":true,"info.bb":true,"net.bb":true,"org.bb":true,"store.bb":true,"tv.bb":true,"*.bd":true,"be":true,"ac.be":true,"bf":true,"gov.bf":true,"bg":true,"a.bg":true,"b.bg":true,"c.bg":true,"d.bg":true,"e.bg":true,"f.bg":true,"g.bg":true,"h.bg":true,"i.bg":true,"j.bg":true,"k.bg":true,"l.bg":true,"m.bg":true,"n.bg":true,"o.bg":true,"p.bg":true,"q.bg":true,"r.bg":true,"s.bg":true,"t.bg":true,"u.bg":true,"v.bg":true,"w.bg":true,"x.bg":true,"y.bg":true,"z.bg":true,"0.bg":true,"1.bg":true,"2.bg":true,"3.bg":true,"4.bg":true,"5.bg":true,"6.bg":true,"7.bg":true,"8.bg":true,"9.bg":true,"bh":true,"com.bh":true,"edu.bh":true,"net.bh":true,"org.bh":true,"gov.bh":true,"bi":true,"co.bi":true,"com.bi":true,"edu.bi":true,"or.bi":true,"org.bi":true,"biz":true,"bj":true,"asso.bj":true,"barreau.bj":true,"gouv.bj":true,"bm":true,"com.bm":true,"edu.bm":true,"gov.bm":true,"net.bm":true,"org.bm":true,"*.bn":true,"bo":true,"com.bo":true,"edu.bo":true,"gov.bo":true,"gob.bo":true,"int.bo":true,"org.bo":true,"net.bo":true,"mil.bo":true,"tv.bo":true,"br":true,"adm.br":true,"adv.br":true,"agr.br":true,"am.br":true,"arq.br":true,"art.br":true,"ato.br":true,"b.br":true,"bio.br":true,"blog.br":true,"bmd.br":true,"cim.br":true,"cng.br":true,"cnt.br":true,"com.br":true,"coop.br":true,"ecn.br":true,"eco.br":true,"edu.br":true,"emp.br":true,"eng.br":true,"esp.br":true,"etc.br":true,"eti.br":true,"far.br":true,"flog.br":true,"fm.br":true,"fnd.br":true,"fot.br":true,"fst.br":true,"g12.br":true,"ggf.br":true,"gov.br":true,"imb.br":true,"ind.br":true,"inf.br":true,"jor.br":true,"jus.br":true,"leg.br":true,"lel.br":true,"mat.br":true,"med.br":true,"mil.br":true,"mp.br":true,"mus.br":true,"net.br":true,"*.nom.br":true,"not.br":true,"ntr.br":true,"odo.br":true,"org.br":true,"ppg.br":true,"pro.br":true,"psc.br":true,"psi.br":true,"qsl.br":true,"radio.br":true,"rec.br":true,"slg.br":true,"srv.br":true,"taxi.br":true,"teo.br":true,"tmp.br":true,"trd.br":true,"tur.br":true,"tv.br":true,"vet.br":true,"vlog.br":true,"wiki.br":true,"zlg.br":true,"bs":true,"com.bs":true,"net.bs":true,"org.bs":true,"edu.bs":true,"gov.bs":true,"bt":true,"com.bt":true,"edu.bt":true,"gov.bt":true,"net.bt":true,"org.bt":true,"bv":true,"bw":true,"co.bw":true,"org.bw":true,"by":true,"gov.by":true,"mil.by":true,"com.by":true,"of.by":true,"bz":true,"com.bz":true,"net.bz":true,"org.bz":true,"edu.bz":true,"gov.bz":true,"ca":true,"ab.ca":true,"bc.ca":true,"mb.ca":true,"nb.ca":true,"nf.ca":true,"nl.ca":true,"ns.ca":true,"nt.ca":true,"nu.ca":true,"on.ca":true,"pe.ca":true,"qc.ca":true,"sk.ca":true,"yk.ca":true,"gc.ca":true,"cat":true,"cc":true,"cd":true,"gov.cd":true,"cf":true,"cg":true,"ch":true,"ci":true,"org.ci":true,"or.ci":true,"com.ci":true,"co.ci":true,"edu.ci":true,"ed.ci":true,"ac.ci":true,"net.ci":true,"go.ci":true,"asso.ci":true,"xn--aroport-bya.ci":true,"int.ci":true,"presse.ci":true,"md.ci":true,"gouv.ci":true,"*.ck":true,"www.ck":false,"cl":true,"gov.cl":true,"gob.cl":true,"co.cl":true,"mil.cl":true,"cm":true,"co.cm":true,"com.cm":true,"gov.cm":true,"net.cm":true,"cn":true,"ac.cn":true,"com.cn":true,"edu.cn":true,"gov.cn":true,"net.cn":true,"org.cn":true,"mil.cn":true,"xn--55qx5d.cn":true,"xn--io0a7i.cn":true,"xn--od0alg.cn":true,"ah.cn":true,"bj.cn":true,"cq.cn":true,"fj.cn":true,"gd.cn":true,"gs.cn":true,"gz.cn":true,"gx.cn":true,"ha.cn":true,"hb.cn":true,"he.cn":true,"hi.cn":true,"hl.cn":true,"hn.cn":true,"jl.cn":true,"js.cn":true,"jx.cn":true,"ln.cn":true,"nm.cn":true,"nx.cn":true,"qh.cn":true,"sc.cn":true,"sd.cn":true,"sh.cn":true,"sn.cn":true,"sx.cn":true,"tj.cn":true,"xj.cn":true,"xz.cn":true,"yn.cn":true,"zj.cn":true,"hk.cn":true,"mo.cn":true,"tw.cn":true,"co":true,"arts.co":true,"com.co":true,"edu.co":true,"firm.co":true,"gov.co":true,"info.co":true,"int.co":true,"mil.co":true,"net.co":true,"nom.co":true,"org.co":true,"rec.co":true,"web.co":true,"com":true,"coop":true,"cr":true,"ac.cr":true,"co.cr":true,"ed.cr":true,"fi.cr":true,"go.cr":true,"or.cr":true,"sa.cr":true,"cu":true,"com.cu":true,"edu.cu":true,"org.cu":true,"net.cu":true,"gov.cu":true,"inf.cu":true,"cv":true,"cw":true,"com.cw":true,"edu.cw":true,"net.cw":true,"org.cw":true,"cx":true,"gov.cx":true,"ac.cy":true,"biz.cy":true,"com.cy":true,"ekloges.cy":true,"gov.cy":true,"ltd.cy":true,"name.cy":true,"net.cy":true,"org.cy":true,"parliament.cy":true,"press.cy":true,"pro.cy":true,"tm.cy":true,"cz":true,"de":true,"dj":true,"dk":true,"dm":true,"com.dm":true,"net.dm":true,"org.dm":true,"edu.dm":true,"gov.dm":true,"do":true,"art.do":true,"com.do":true,"edu.do":true,"gob.do":true,"gov.do":true,"mil.do":true,"net.do":true,"org.do":true,"sld.do":true,"web.do":true,"dz":true,"com.dz":true,"org.dz":true,"net.dz":true,"gov.dz":true,"edu.dz":true,"asso.dz":true,"pol.dz":true,"art.dz":true,"ec":true,"com.ec":true,"info.ec":true,"net.ec":true,"fin.ec":true,"k12.ec":true,"med.ec":true,"pro.ec":true,"org.ec":true,"edu.ec":true,"gov.ec":true,"gob.ec":true,"mil.ec":true,"edu":true,"ee":true,"edu.ee":true,"gov.ee":true,"riik.ee":true,"lib.ee":true,"med.ee":true,"com.ee":true,"pri.ee":true,"aip.ee":true,"org.ee":true,"fie.ee":true,"eg":true,"com.eg":true,"edu.eg":true,"eun.eg":true,"gov.eg":true,"mil.eg":true,"name.eg":true,"net.eg":true,"org.eg":true,"sci.eg":true,"*.er":true,"es":true,"com.es":true,"nom.es":true,"org.es":true,"gob.es":true,"edu.es":true,"et":true,"com.et":true,"gov.et":true,"org.et":true,"edu.et":true,"biz.et":true,"name.et":true,"info.et":true,"net.et":true,"eu":true,"fi":true,"aland.fi":true,"*.fj":true,"*.fk":true,"fm":true,"fo":true,"fr":true,"com.fr":true,"asso.fr":true,"nom.fr":true,"prd.fr":true,"presse.fr":true,"tm.fr":true,"aeroport.fr":true,"assedic.fr":true,"avocat.fr":true,"avoues.fr":true,"cci.fr":true,"chambagri.fr":true,"chirurgiens-dentistes.fr":true,"experts-comptables.fr":true,"geometre-expert.fr":true,"gouv.fr":true,"greta.fr":true,"huissier-justice.fr":true,"medecin.fr":true,"notaires.fr":true,"pharmacien.fr":true,"port.fr":true,"veterinaire.fr":true,"ga":true,"gb":true,"gd":true,"ge":true,"com.ge":true,"edu.ge":true,"gov.ge":true,"org.ge":true,"mil.ge":true,"net.ge":true,"pvt.ge":true,"gf":true,"gg":true,"co.gg":true,"net.gg":true,"org.gg":true,"gh":true,"com.gh":true,"edu.gh":true,"gov.gh":true,"org.gh":true,"mil.gh":true,"gi":true,"com.gi":true,"ltd.gi":true,"gov.gi":true,"mod.gi":true,"edu.gi":true,"org.gi":true,"gl":true,"co.gl":true,"com.gl":true,"edu.gl":true,"net.gl":true,"org.gl":true,"gm":true,"gn":true,"ac.gn":true,"com.gn":true,"edu.gn":true,"gov.gn":true,"org.gn":true,"net.gn":true,"gov":true,"gp":true,"com.gp":true,"net.gp":true,"mobi.gp":true,"edu.gp":true,"org.gp":true,"asso.gp":true,"gq":true,"gr":true,"com.gr":true,"edu.gr":true,"net.gr":true,"org.gr":true,"gov.gr":true,"gs":true,"gt":true,"com.gt":true,"edu.gt":true,"gob.gt":true,"ind.gt":true,"mil.gt":true,"net.gt":true,"org.gt":true,"*.gu":true,"gw":true,"gy":true,"co.gy":true,"com.gy":true,"net.gy":true,"hk":true,"com.hk":true,"edu.hk":true,"gov.hk":true,"idv.hk":true,"net.hk":true,"org.hk":true,"xn--55qx5d.hk":true,"xn--wcvs22d.hk":true,"xn--lcvr32d.hk":true,"xn--mxtq1m.hk":true,"xn--gmqw5a.hk":true,"xn--ciqpn.hk":true,"xn--gmq050i.hk":true,"xn--zf0avx.hk":true,"xn--io0a7i.hk":true,"xn--mk0axi.hk":true,"xn--od0alg.hk":true,"xn--od0aq3b.hk":true,"xn--tn0ag.hk":true,"xn--uc0atv.hk":true,"xn--uc0ay4a.hk":true,"hm":true,"hn":true,"com.hn":true,"edu.hn":true,"org.hn":true,"net.hn":true,"mil.hn":true,"gob.hn":true,"hr":true,"iz.hr":true,"from.hr":true,"name.hr":true,"com.hr":true,"ht":true,"com.ht":true,"shop.ht":true,"firm.ht":true,"info.ht":true,"adult.ht":true,"net.ht":true,"pro.ht":true,"org.ht":true,"med.ht":true,"art.ht":true,"coop.ht":true,"pol.ht":true,"asso.ht":true,"edu.ht":true,"rel.ht":true,"gouv.ht":true,"perso.ht":true,"hu":true,"co.hu":true,"info.hu":true,"org.hu":true,"priv.hu":true,"sport.hu":true,"tm.hu":true,"2000.hu":true,"agrar.hu":true,"bolt.hu":true,"casino.hu":true,"city.hu":true,"erotica.hu":true,"erotika.hu":true,"film.hu":true,"forum.hu":true,"games.hu":true,"hotel.hu":true,"ingatlan.hu":true,"jogasz.hu":true,"konyvelo.hu":true,"lakas.hu":true,"media.hu":true,"news.hu":true,"reklam.hu":true,"sex.hu":true,"shop.hu":true,"suli.hu":true,"szex.hu":true,"tozsde.hu":true,"utazas.hu":true,"video.hu":true,"id":true,"ac.id":true,"biz.id":true,"co.id":true,"desa.id":true,"go.id":true,"mil.id":true,"my.id":true,"net.id":true,"or.id":true,"sch.id":true,"web.id":true,"ie":true,"gov.ie":true,"il":true,"ac.il":true,"co.il":true,"gov.il":true,"idf.il":true,"k12.il":true,"muni.il":true,"net.il":true,"org.il":true,"im":true,"ac.im":true,"co.im":true,"com.im":true,"ltd.co.im":true,"net.im":true,"org.im":true,"plc.co.im":true,"tt.im":true,"tv.im":true,"in":true,"co.in":true,"firm.in":true,"net.in":true,"org.in":true,"gen.in":true,"ind.in":true,"nic.in":true,"ac.in":true,"edu.in":true,"res.in":true,"gov.in":true,"mil.in":true,"info":true,"int":true,"eu.int":true,"io":true,"com.io":true,"iq":true,"gov.iq":true,"edu.iq":true,"mil.iq":true,"com.iq":true,"org.iq":true,"net.iq":true,"ir":true,"ac.ir":true,"co.ir":true,"gov.ir":true,"id.ir":true,"net.ir":true,"org.ir":true,"sch.ir":true,"xn--mgba3a4f16a.ir":true,"xn--mgba3a4fra.ir":true,"is":true,"net.is":true,"com.is":true,"edu.is":true,"gov.is":true,"org.is":true,"int.is":true,"it":true,"gov.it":true,"edu.it":true,"abr.it":true,"abruzzo.it":true,"aosta-valley.it":true,"aostavalley.it":true,"bas.it":true,"basilicata.it":true,"cal.it":true,"calabria.it":true,"cam.it":true,"campania.it":true,"emilia-romagna.it":true,"emiliaromagna.it":true,"emr.it":true,"friuli-v-giulia.it":true,"friuli-ve-giulia.it":true,"friuli-vegiulia.it":true,"friuli-venezia-giulia.it":true,"friuli-veneziagiulia.it":true,"friuli-vgiulia.it":true,"friuliv-giulia.it":true,"friulive-giulia.it":true,"friulivegiulia.it":true,"friulivenezia-giulia.it":true,"friuliveneziagiulia.it":true,"friulivgiulia.it":true,"fvg.it":true,"laz.it":true,"lazio.it":true,"lig.it":true,"liguria.it":true,"lom.it":true,"lombardia.it":true,"lombardy.it":true,"lucania.it":true,"mar.it":true,"marche.it":true,"mol.it":true,"molise.it":true,"piedmont.it":true,"piemonte.it":true,"pmn.it":true,"pug.it":true,"puglia.it":true,"sar.it":true,"sardegna.it":true,"sardinia.it":true,"sic.it":true,"sicilia.it":true,"sicily.it":true,"taa.it":true,"tos.it":true,"toscana.it":true,"trentino-a-adige.it":true,"trentino-aadige.it":true,"trentino-alto-adige.it":true,"trentino-altoadige.it":true,"trentino-s-tirol.it":true,"trentino-stirol.it":true,"trentino-sud-tirol.it":true,"trentino-sudtirol.it":true,"trentino-sued-tirol.it":true,"trentino-suedtirol.it":true,"trentinoa-adige.it":true,"trentinoaadige.it":true,"trentinoalto-adige.it":true,"trentinoaltoadige.it":true,"trentinos-tirol.it":true,"trentinostirol.it":true,"trentinosud-tirol.it":true,"trentinosudtirol.it":true,"trentinosued-tirol.it":true,"trentinosuedtirol.it":true,"tuscany.it":true,"umb.it":true,"umbria.it":true,"val-d-aosta.it":true,"val-daosta.it":true,"vald-aosta.it":true,"valdaosta.it":true,"valle-aosta.it":true,"valle-d-aosta.it":true,"valle-daosta.it":true,"valleaosta.it":true,"valled-aosta.it":true,"valledaosta.it":true,"vallee-aoste.it":true,"valleeaoste.it":true,"vao.it":true,"vda.it":true,"ven.it":true,"veneto.it":true,"ag.it":true,"agrigento.it":true,"al.it":true,"alessandria.it":true,"alto-adige.it":true,"altoadige.it":true,"an.it":true,"ancona.it":true,"andria-barletta-trani.it":true,"andria-trani-barletta.it":true,"andriabarlettatrani.it":true,"andriatranibarletta.it":true,"ao.it":true,"aosta.it":true,"aoste.it":true,"ap.it":true,"aq.it":true,"aquila.it":true,"ar.it":true,"arezzo.it":true,"ascoli-piceno.it":true,"ascolipiceno.it":true,"asti.it":true,"at.it":true,"av.it":true,"avellino.it":true,"ba.it":true,"balsan.it":true,"bari.it":true,"barletta-trani-andria.it":true,"barlettatraniandria.it":true,"belluno.it":true,"benevento.it":true,"bergamo.it":true,"bg.it":true,"bi.it":true,"biella.it":true,"bl.it":true,"bn.it":true,"bo.it":true,"bologna.it":true,"bolzano.it":true,"bozen.it":true,"br.it":true,"brescia.it":true,"brindisi.it":true,"bs.it":true,"bt.it":true,"bz.it":true,"ca.it":true,"cagliari.it":true,"caltanissetta.it":true,"campidano-medio.it":true,"campidanomedio.it":true,"campobasso.it":true,"carbonia-iglesias.it":true,"carboniaiglesias.it":true,"carrara-massa.it":true,"carraramassa.it":true,"caserta.it":true,"catania.it":true,"catanzaro.it":true,"cb.it":true,"ce.it":true,"cesena-forli.it":true,"cesenaforli.it":true,"ch.it":true,"chieti.it":true,"ci.it":true,"cl.it":true,"cn.it":true,"co.it":true,"como.it":true,"cosenza.it":true,"cr.it":true,"cremona.it":true,"crotone.it":true,"cs.it":true,"ct.it":true,"cuneo.it":true,"cz.it":true,"dell-ogliastra.it":true,"dellogliastra.it":true,"en.it":true,"enna.it":true,"fc.it":true,"fe.it":true,"fermo.it":true,"ferrara.it":true,"fg.it":true,"fi.it":true,"firenze.it":true,"florence.it":true,"fm.it":true,"foggia.it":true,"forli-cesena.it":true,"forlicesena.it":true,"fr.it":true,"frosinone.it":true,"ge.it":true,"genoa.it":true,"genova.it":true,"go.it":true,"gorizia.it":true,"gr.it":true,"grosseto.it":true,"iglesias-carbonia.it":true,"iglesiascarbonia.it":true,"im.it":true,"imperia.it":true,"is.it":true,"isernia.it":true,"kr.it":true,"la-spezia.it":true,"laquila.it":true,"laspezia.it":true,"latina.it":true,"lc.it":true,"le.it":true,"lecce.it":true,"lecco.it":true,"li.it":true,"livorno.it":true,"lo.it":true,"lodi.it":true,"lt.it":true,"lu.it":true,"lucca.it":true,"macerata.it":true,"mantova.it":true,"massa-carrara.it":true,"massacarrara.it":true,"matera.it":true,"mb.it":true,"mc.it":true,"me.it":true,"medio-campidano.it":true,"mediocampidano.it":true,"messina.it":true,"mi.it":true,"milan.it":true,"milano.it":true,"mn.it":true,"mo.it":true,"modena.it":true,"monza-brianza.it":true,"monza-e-della-brianza.it":true,"monza.it":true,"monzabrianza.it":true,"monzaebrianza.it":true,"monzaedellabrianza.it":true,"ms.it":true,"mt.it":true,"na.it":true,"naples.it":true,"napoli.it":true,"no.it":true,"novara.it":true,"nu.it":true,"nuoro.it":true,"og.it":true,"ogliastra.it":true,"olbia-tempio.it":true,"olbiatempio.it":true,"or.it":true,"oristano.it":true,"ot.it":true,"pa.it":true,"padova.it":true,"padua.it":true,"palermo.it":true,"parma.it":true,"pavia.it":true,"pc.it":true,"pd.it":true,"pe.it":true,"perugia.it":true,"pesaro-urbino.it":true,"pesarourbino.it":true,"pescara.it":true,"pg.it":true,"pi.it":true,"piacenza.it":true,"pisa.it":true,"pistoia.it":true,"pn.it":true,"po.it":true,"pordenone.it":true,"potenza.it":true,"pr.it":true,"prato.it":true,"pt.it":true,"pu.it":true,"pv.it":true,"pz.it":true,"ra.it":true,"ragusa.it":true,"ravenna.it":true,"rc.it":true,"re.it":true,"reggio-calabria.it":true,"reggio-emilia.it":true,"reggiocalabria.it":true,"reggioemilia.it":true,"rg.it":true,"ri.it":true,"rieti.it":true,"rimini.it":true,"rm.it":true,"rn.it":true,"ro.it":true,"roma.it":true,"rome.it":true,"rovigo.it":true,"sa.it":true,"salerno.it":true,"sassari.it":true,"savona.it":true,"si.it":true,"siena.it":true,"siracusa.it":true,"so.it":true,"sondrio.it":true,"sp.it":true,"sr.it":true,"ss.it":true,"suedtirol.it":true,"sv.it":true,"ta.it":true,"taranto.it":true,"te.it":true,"tempio-olbia.it":true,"tempioolbia.it":true,"teramo.it":true,"terni.it":true,"tn.it":true,"to.it":true,"torino.it":true,"tp.it":true,"tr.it":true,"trani-andria-barletta.it":true,"trani-barletta-andria.it":true,"traniandriabarletta.it":true,"tranibarlettaandria.it":true,"trapani.it":true,"trentino.it":true,"trento.it":true,"treviso.it":true,"trieste.it":true,"ts.it":true,"turin.it":true,"tv.it":true,"ud.it":true,"udine.it":true,"urbino-pesaro.it":true,"urbinopesaro.it":true,"va.it":true,"varese.it":true,"vb.it":true,"vc.it":true,"ve.it":true,"venezia.it":true,"venice.it":true,"verbania.it":true,"vercelli.it":true,"verona.it":true,"vi.it":true,"vibo-valentia.it":true,"vibovalentia.it":true,"vicenza.it":true,"viterbo.it":true,"vr.it":true,"vs.it":true,"vt.it":true,"vv.it":true,"je":true,"co.je":true,"net.je":true,"org.je":true,"*.jm":true,"jo":true,"com.jo":true,"org.jo":true,"net.jo":true,"edu.jo":true,"sch.jo":true,"gov.jo":true,"mil.jo":true,"name.jo":true,"jobs":true,"jp":true,"ac.jp":true,"ad.jp":true,"co.jp":true,"ed.jp":true,"go.jp":true,"gr.jp":true,"lg.jp":true,"ne.jp":true,"or.jp":true,"aichi.jp":true,"akita.jp":true,"aomori.jp":true,"chiba.jp":true,"ehime.jp":true,"fukui.jp":true,"fukuoka.jp":true,"fukushima.jp":true,"gifu.jp":true,"gunma.jp":true,"hiroshima.jp":true,"hokkaido.jp":true,"hyogo.jp":true,"ibaraki.jp":true,"ishikawa.jp":true,"iwate.jp":true,"kagawa.jp":true,"kagoshima.jp":true,"kanagawa.jp":true,"kochi.jp":true,"kumamoto.jp":true,"kyoto.jp":true,"mie.jp":true,"miyagi.jp":true,"miyazaki.jp":true,"nagano.jp":true,"nagasaki.jp":true,"nara.jp":true,"niigata.jp":true,"oita.jp":true,"okayama.jp":true,"okinawa.jp":true,"osaka.jp":true,"saga.jp":true,"saitama.jp":true,"shiga.jp":true,"shimane.jp":true,"shizuoka.jp":true,"tochigi.jp":true,"tokushima.jp":true,"tokyo.jp":true,"tottori.jp":true,"toyama.jp":true,"wakayama.jp":true,"yamagata.jp":true,"yamaguchi.jp":true,"yamanashi.jp":true,"xn--4pvxs.jp":true,"xn--vgu402c.jp":true,"xn--c3s14m.jp":true,"xn--f6qx53a.jp":true,"xn--8pvr4u.jp":true,"xn--uist22h.jp":true,"xn--djrs72d6uy.jp":true,"xn--mkru45i.jp":true,"xn--0trq7p7nn.jp":true,"xn--8ltr62k.jp":true,"xn--2m4a15e.jp":true,"xn--efvn9s.jp":true,"xn--32vp30h.jp":true,"xn--4it797k.jp":true,"xn--1lqs71d.jp":true,"xn--5rtp49c.jp":true,"xn--5js045d.jp":true,"xn--ehqz56n.jp":true,"xn--1lqs03n.jp":true,"xn--qqqt11m.jp":true,"xn--kbrq7o.jp":true,"xn--pssu33l.jp":true,"xn--ntsq17g.jp":true,"xn--uisz3g.jp":true,"xn--6btw5a.jp":true,"xn--1ctwo.jp":true,"xn--6orx2r.jp":true,"xn--rht61e.jp":true,"xn--rht27z.jp":true,"xn--djty4k.jp":true,"xn--nit225k.jp":true,"xn--rht3d.jp":true,"xn--klty5x.jp":true,"xn--kltx9a.jp":true,"xn--kltp7d.jp":true,"xn--uuwu58a.jp":true,"xn--zbx025d.jp":true,"xn--ntso0iqx3a.jp":true,"xn--elqq16h.jp":true,"xn--4it168d.jp":true,"xn--klt787d.jp":true,"xn--rny31h.jp":true,"xn--7t0a264c.jp":true,"xn--5rtq34k.jp":true,"xn--k7yn95e.jp":true,"xn--tor131o.jp":true,"xn--d5qv7z876c.jp":true,"*.kawasaki.jp":true,"*.kitakyushu.jp":true,"*.kobe.jp":true,"*.nagoya.jp":true,"*.sapporo.jp":true,"*.sendai.jp":true,"*.yokohama.jp":true,"city.kawasaki.jp":false,"city.kitakyushu.jp":false,"city.kobe.jp":false,"city.nagoya.jp":false,"city.sapporo.jp":false,"city.sendai.jp":false,"city.yokohama.jp":false,"aisai.aichi.jp":true,"ama.aichi.jp":true,"anjo.aichi.jp":true,"asuke.aichi.jp":true,"chiryu.aichi.jp":true,"chita.aichi.jp":true,"fuso.aichi.jp":true,"gamagori.aichi.jp":true,"handa.aichi.jp":true,"hazu.aichi.jp":true,"hekinan.aichi.jp":true,"higashiura.aichi.jp":true,"ichinomiya.aichi.jp":true,"inazawa.aichi.jp":true,"inuyama.aichi.jp":true,"isshiki.aichi.jp":true,"iwakura.aichi.jp":true,"kanie.aichi.jp":true,"kariya.aichi.jp":true,"kasugai.aichi.jp":true,"kira.aichi.jp":true,"kiyosu.aichi.jp":true,"komaki.aichi.jp":true,"konan.aichi.jp":true,"kota.aichi.jp":true,"mihama.aichi.jp":true,"miyoshi.aichi.jp":true,"nishio.aichi.jp":true,"nisshin.aichi.jp":true,"obu.aichi.jp":true,"oguchi.aichi.jp":true,"oharu.aichi.jp":true,"okazaki.aichi.jp":true,"owariasahi.aichi.jp":true,"seto.aichi.jp":true,"shikatsu.aichi.jp":true,"shinshiro.aichi.jp":true,"shitara.aichi.jp":true,"tahara.aichi.jp":true,"takahama.aichi.jp":true,"tobishima.aichi.jp":true,"toei.aichi.jp":true,"togo.aichi.jp":true,"tokai.aichi.jp":true,"tokoname.aichi.jp":true,"toyoake.aichi.jp":true,"toyohashi.aichi.jp":true,"toyokawa.aichi.jp":true,"toyone.aichi.jp":true,"toyota.aichi.jp":true,"tsushima.aichi.jp":true,"yatomi.aichi.jp":true,"akita.akita.jp":true,"daisen.akita.jp":true,"fujisato.akita.jp":true,"gojome.akita.jp":true,"hachirogata.akita.jp":true,"happou.akita.jp":true,"higashinaruse.akita.jp":true,"honjo.akita.jp":true,"honjyo.akita.jp":true,"ikawa.akita.jp":true,"kamikoani.akita.jp":true,"kamioka.akita.jp":true,"katagami.akita.jp":true,"kazuno.akita.jp":true,"kitaakita.akita.jp":true,"kosaka.akita.jp":true,"kyowa.akita.jp":true,"misato.akita.jp":true,"mitane.akita.jp":true,"moriyoshi.akita.jp":true,"nikaho.akita.jp":true,"noshiro.akita.jp":true,"odate.akita.jp":true,"oga.akita.jp":true,"ogata.akita.jp":true,"semboku.akita.jp":true,"yokote.akita.jp":true,"yurihonjo.akita.jp":true,"aomori.aomori.jp":true,"gonohe.aomori.jp":true,"hachinohe.aomori.jp":true,"hashikami.aomori.jp":true,"hiranai.aomori.jp":true,"hirosaki.aomori.jp":true,"itayanagi.aomori.jp":true,"kuroishi.aomori.jp":true,"misawa.aomori.jp":true,"mutsu.aomori.jp":true,"nakadomari.aomori.jp":true,"noheji.aomori.jp":true,"oirase.aomori.jp":true,"owani.aomori.jp":true,"rokunohe.aomori.jp":true,"sannohe.aomori.jp":true,"shichinohe.aomori.jp":true,"shingo.aomori.jp":true,"takko.aomori.jp":true,"towada.aomori.jp":true,"tsugaru.aomori.jp":true,"tsuruta.aomori.jp":true,"abiko.chiba.jp":true,"asahi.chiba.jp":true,"chonan.chiba.jp":true,"chosei.chiba.jp":true,"choshi.chiba.jp":true,"chuo.chiba.jp":true,"funabashi.chiba.jp":true,"futtsu.chiba.jp":true,"hanamigawa.chiba.jp":true,"ichihara.chiba.jp":true,"ichikawa.chiba.jp":true,"ichinomiya.chiba.jp":true,"inzai.chiba.jp":true,"isumi.chiba.jp":true,"kamagaya.chiba.jp":true,"kamogawa.chiba.jp":true,"kashiwa.chiba.jp":true,"katori.chiba.jp":true,"katsuura.chiba.jp":true,"kimitsu.chiba.jp":true,"kisarazu.chiba.jp":true,"kozaki.chiba.jp":true,"kujukuri.chiba.jp":true,"kyonan.chiba.jp":true,"matsudo.chiba.jp":true,"midori.chiba.jp":true,"mihama.chiba.jp":true,"minamiboso.chiba.jp":true,"mobara.chiba.jp":true,"mutsuzawa.chiba.jp":true,"nagara.chiba.jp":true,"nagareyama.chiba.jp":true,"narashino.chiba.jp":true,"narita.chiba.jp":true,"noda.chiba.jp":true,"oamishirasato.chiba.jp":true,"omigawa.chiba.jp":true,"onjuku.chiba.jp":true,"otaki.chiba.jp":true,"sakae.chiba.jp":true,"sakura.chiba.jp":true,"shimofusa.chiba.jp":true,"shirako.chiba.jp":true,"shiroi.chiba.jp":true,"shisui.chiba.jp":true,"sodegaura.chiba.jp":true,"sosa.chiba.jp":true,"tako.chiba.jp":true,"tateyama.chiba.jp":true,"togane.chiba.jp":true,"tohnosho.chiba.jp":true,"tomisato.chiba.jp":true,"urayasu.chiba.jp":true,"yachimata.chiba.jp":true,"yachiyo.chiba.jp":true,"yokaichiba.chiba.jp":true,"yokoshibahikari.chiba.jp":true,"yotsukaido.chiba.jp":true,"ainan.ehime.jp":true,"honai.ehime.jp":true,"ikata.ehime.jp":true,"imabari.ehime.jp":true,"iyo.ehime.jp":true,"kamijima.ehime.jp":true,"kihoku.ehime.jp":true,"kumakogen.ehime.jp":true,"masaki.ehime.jp":true,"matsuno.ehime.jp":true,"matsuyama.ehime.jp":true,"namikata.ehime.jp":true,"niihama.ehime.jp":true,"ozu.ehime.jp":true,"saijo.ehime.jp":true,"seiyo.ehime.jp":true,"shikokuchuo.ehime.jp":true,"tobe.ehime.jp":true,"toon.ehime.jp":true,"uchiko.ehime.jp":true,"uwajima.ehime.jp":true,"yawatahama.ehime.jp":true,"echizen.fukui.jp":true,"eiheiji.fukui.jp":true,"fukui.fukui.jp":true,"ikeda.fukui.jp":true,"katsuyama.fukui.jp":true,"mihama.fukui.jp":true,"minamiechizen.fukui.jp":true,"obama.fukui.jp":true,"ohi.fukui.jp":true,"ono.fukui.jp":true,"sabae.fukui.jp":true,"sakai.fukui.jp":true,"takahama.fukui.jp":true,"tsuruga.fukui.jp":true,"wakasa.fukui.jp":true,"ashiya.fukuoka.jp":true,"buzen.fukuoka.jp":true,"chikugo.fukuoka.jp":true,"chikuho.fukuoka.jp":true,"chikujo.fukuoka.jp":true,"chikushino.fukuoka.jp":true,"chikuzen.fukuoka.jp":true,"chuo.fukuoka.jp":true,"dazaifu.fukuoka.jp":true,"fukuchi.fukuoka.jp":true,"hakata.fukuoka.jp":true,"higashi.fukuoka.jp":true,"hirokawa.fukuoka.jp":true,"hisayama.fukuoka.jp":true,"iizuka.fukuoka.jp":true,"inatsuki.fukuoka.jp":true,"kaho.fukuoka.jp":true,"kasuga.fukuoka.jp":true,"kasuya.fukuoka.jp":true,"kawara.fukuoka.jp":true,"keisen.fukuoka.jp":true,"koga.fukuoka.jp":true,"kurate.fukuoka.jp":true,"kurogi.fukuoka.jp":true,"kurume.fukuoka.jp":true,"minami.fukuoka.jp":true,"miyako.fukuoka.jp":true,"miyama.fukuoka.jp":true,"miyawaka.fukuoka.jp":true,"mizumaki.fukuoka.jp":true,"munakata.fukuoka.jp":true,"nakagawa.fukuoka.jp":true,"nakama.fukuoka.jp":true,"nishi.fukuoka.jp":true,"nogata.fukuoka.jp":true,"ogori.fukuoka.jp":true,"okagaki.fukuoka.jp":true,"okawa.fukuoka.jp":true,"oki.fukuoka.jp":true,"omuta.fukuoka.jp":true,"onga.fukuoka.jp":true,"onojo.fukuoka.jp":true,"oto.fukuoka.jp":true,"saigawa.fukuoka.jp":true,"sasaguri.fukuoka.jp":true,"shingu.fukuoka.jp":true,"shinyoshitomi.fukuoka.jp":true,"shonai.fukuoka.jp":true,"soeda.fukuoka.jp":true,"sue.fukuoka.jp":true,"tachiarai.fukuoka.jp":true,"tagawa.fukuoka.jp":true,"takata.fukuoka.jp":true,"toho.fukuoka.jp":true,"toyotsu.fukuoka.jp":true,"tsuiki.fukuoka.jp":true,"ukiha.fukuoka.jp":true,"umi.fukuoka.jp":true,"usui.fukuoka.jp":true,"yamada.fukuoka.jp":true,"yame.fukuoka.jp":true,"yanagawa.fukuoka.jp":true,"yukuhashi.fukuoka.jp":true,"aizubange.fukushima.jp":true,"aizumisato.fukushima.jp":true,"aizuwakamatsu.fukushima.jp":true,"asakawa.fukushima.jp":true,"bandai.fukushima.jp":true,"date.fukushima.jp":true,"fukushima.fukushima.jp":true,"furudono.fukushima.jp":true,"futaba.fukushima.jp":true,"hanawa.fukushima.jp":true,"higashi.fukushima.jp":true,"hirata.fukushima.jp":true,"hirono.fukushima.jp":true,"iitate.fukushima.jp":true,"inawashiro.fukushima.jp":true,"ishikawa.fukushima.jp":true,"iwaki.fukushima.jp":true,"izumizaki.fukushima.jp":true,"kagamiishi.fukushima.jp":true,"kaneyama.fukushima.jp":true,"kawamata.fukushima.jp":true,"kitakata.fukushima.jp":true,"kitashiobara.fukushima.jp":true,"koori.fukushima.jp":true,"koriyama.fukushima.jp":true,"kunimi.fukushima.jp":true,"miharu.fukushima.jp":true,"mishima.fukushima.jp":true,"namie.fukushima.jp":true,"nango.fukushima.jp":true,"nishiaizu.fukushima.jp":true,"nishigo.fukushima.jp":true,"okuma.fukushima.jp":true,"omotego.fukushima.jp":true,"ono.fukushima.jp":true,"otama.fukushima.jp":true,"samegawa.fukushima.jp":true,"shimogo.fukushima.jp":true,"shirakawa.fukushima.jp":true,"showa.fukushima.jp":true,"soma.fukushima.jp":true,"sukagawa.fukushima.jp":true,"taishin.fukushima.jp":true,"tamakawa.fukushima.jp":true,"tanagura.fukushima.jp":true,"tenei.fukushima.jp":true,"yabuki.fukushima.jp":true,"yamato.fukushima.jp":true,"yamatsuri.fukushima.jp":true,"yanaizu.fukushima.jp":true,"yugawa.fukushima.jp":true,"anpachi.gifu.jp":true,"ena.gifu.jp":true,"gifu.gifu.jp":true,"ginan.gifu.jp":true,"godo.gifu.jp":true,"gujo.gifu.jp":true,"hashima.gifu.jp":true,"hichiso.gifu.jp":true,"hida.gifu.jp":true,"higashishirakawa.gifu.jp":true,"ibigawa.gifu.jp":true,"ikeda.gifu.jp":true,"kakamigahara.gifu.jp":true,"kani.gifu.jp":true,"kasahara.gifu.jp":true,"kasamatsu.gifu.jp":true,"kawaue.gifu.jp":true,"kitagata.gifu.jp":true,"mino.gifu.jp":true,"minokamo.gifu.jp":true,"mitake.gifu.jp":true,"mizunami.gifu.jp":true,"motosu.gifu.jp":true,"nakatsugawa.gifu.jp":true,"ogaki.gifu.jp":true,"sakahogi.gifu.jp":true,"seki.gifu.jp":true,"sekigahara.gifu.jp":true,"shirakawa.gifu.jp":true,"tajimi.gifu.jp":true,"takayama.gifu.jp":true,"tarui.gifu.jp":true,"toki.gifu.jp":true,"tomika.gifu.jp":true,"wanouchi.gifu.jp":true,"yamagata.gifu.jp":true,"yaotsu.gifu.jp":true,"yoro.gifu.jp":true,"annaka.gunma.jp":true,"chiyoda.gunma.jp":true,"fujioka.gunma.jp":true,"higashiagatsuma.gunma.jp":true,"isesaki.gunma.jp":true,"itakura.gunma.jp":true,"kanna.gunma.jp":true,"kanra.gunma.jp":true,"katashina.gunma.jp":true,"kawaba.gunma.jp":true,"kiryu.gunma.jp":true,"kusatsu.gunma.jp":true,"maebashi.gunma.jp":true,"meiwa.gunma.jp":true,"midori.gunma.jp":true,"minakami.gunma.jp":true,"naganohara.gunma.jp":true,"nakanojo.gunma.jp":true,"nanmoku.gunma.jp":true,"numata.gunma.jp":true,"oizumi.gunma.jp":true,"ora.gunma.jp":true,"ota.gunma.jp":true,"shibukawa.gunma.jp":true,"shimonita.gunma.jp":true,"shinto.gunma.jp":true,"showa.gunma.jp":true,"takasaki.gunma.jp":true,"takayama.gunma.jp":true,"tamamura.gunma.jp":true,"tatebayashi.gunma.jp":true,"tomioka.gunma.jp":true,"tsukiyono.gunma.jp":true,"tsumagoi.gunma.jp":true,"ueno.gunma.jp":true,"yoshioka.gunma.jp":true,"asaminami.hiroshima.jp":true,"daiwa.hiroshima.jp":true,"etajima.hiroshima.jp":true,"fuchu.hiroshima.jp":true,"fukuyama.hiroshima.jp":true,"hatsukaichi.hiroshima.jp":true,"higashihiroshima.hiroshima.jp":true,"hongo.hiroshima.jp":true,"jinsekikogen.hiroshima.jp":true,"kaita.hiroshima.jp":true,"kui.hiroshima.jp":true,"kumano.hiroshima.jp":true,"kure.hiroshima.jp":true,"mihara.hiroshima.jp":true,"miyoshi.hiroshima.jp":true,"naka.hiroshima.jp":true,"onomichi.hiroshima.jp":true,"osakikamijima.hiroshima.jp":true,"otake.hiroshima.jp":true,"saka.hiroshima.jp":true,"sera.hiroshima.jp":true,"seranishi.hiroshima.jp":true,"shinichi.hiroshima.jp":true,"shobara.hiroshima.jp":true,"takehara.hiroshima.jp":true,"abashiri.hokkaido.jp":true,"abira.hokkaido.jp":true,"aibetsu.hokkaido.jp":true,"akabira.hokkaido.jp":true,"akkeshi.hokkaido.jp":true,"asahikawa.hokkaido.jp":true,"ashibetsu.hokkaido.jp":true,"ashoro.hokkaido.jp":true,"assabu.hokkaido.jp":true,"atsuma.hokkaido.jp":true,"bibai.hokkaido.jp":true,"biei.hokkaido.jp":true,"bifuka.hokkaido.jp":true,"bihoro.hokkaido.jp":true,"biratori.hokkaido.jp":true,"chippubetsu.hokkaido.jp":true,"chitose.hokkaido.jp":true,"date.hokkaido.jp":true,"ebetsu.hokkaido.jp":true,"embetsu.hokkaido.jp":true,"eniwa.hokkaido.jp":true,"erimo.hokkaido.jp":true,"esan.hokkaido.jp":true,"esashi.hokkaido.jp":true,"fukagawa.hokkaido.jp":true,"fukushima.hokkaido.jp":true,"furano.hokkaido.jp":true,"furubira.hokkaido.jp":true,"haboro.hokkaido.jp":true,"hakodate.hokkaido.jp":true,"hamatonbetsu.hokkaido.jp":true,"hidaka.hokkaido.jp":true,"higashikagura.hokkaido.jp":true,"higashikawa.hokkaido.jp":true,"hiroo.hokkaido.jp":true,"hokuryu.hokkaido.jp":true,"hokuto.hokkaido.jp":true,"honbetsu.hokkaido.jp":true,"horokanai.hokkaido.jp":true,"horonobe.hokkaido.jp":true,"ikeda.hokkaido.jp":true,"imakane.hokkaido.jp":true,"ishikari.hokkaido.jp":true,"iwamizawa.hokkaido.jp":true,"iwanai.hokkaido.jp":true,"kamifurano.hokkaido.jp":true,"kamikawa.hokkaido.jp":true,"kamishihoro.hokkaido.jp":true,"kamisunagawa.hokkaido.jp":true,"kamoenai.hokkaido.jp":true,"kayabe.hokkaido.jp":true,"kembuchi.hokkaido.jp":true,"kikonai.hokkaido.jp":true,"kimobetsu.hokkaido.jp":true,"kitahiroshima.hokkaido.jp":true,"kitami.hokkaido.jp":true,"kiyosato.hokkaido.jp":true,"koshimizu.hokkaido.jp":true,"kunneppu.hokkaido.jp":true,"kuriyama.hokkaido.jp":true,"kuromatsunai.hokkaido.jp":true,"kushiro.hokkaido.jp":true,"kutchan.hokkaido.jp":true,"kyowa.hokkaido.jp":true,"mashike.hokkaido.jp":true,"matsumae.hokkaido.jp":true,"mikasa.hokkaido.jp":true,"minamifurano.hokkaido.jp":true,"mombetsu.hokkaido.jp":true,"moseushi.hokkaido.jp":true,"mukawa.hokkaido.jp":true,"muroran.hokkaido.jp":true,"naie.hokkaido.jp":true,"nakagawa.hokkaido.jp":true,"nakasatsunai.hokkaido.jp":true,"nakatombetsu.hokkaido.jp":true,"nanae.hokkaido.jp":true,"nanporo.hokkaido.jp":true,"nayoro.hokkaido.jp":true,"nemuro.hokkaido.jp":true,"niikappu.hokkaido.jp":true,"niki.hokkaido.jp":true,"nishiokoppe.hokkaido.jp":true,"noboribetsu.hokkaido.jp":true,"numata.hokkaido.jp":true,"obihiro.hokkaido.jp":true,"obira.hokkaido.jp":true,"oketo.hokkaido.jp":true,"okoppe.hokkaido.jp":true,"otaru.hokkaido.jp":true,"otobe.hokkaido.jp":true,"otofuke.hokkaido.jp":true,"otoineppu.hokkaido.jp":true,"oumu.hokkaido.jp":true,"ozora.hokkaido.jp":true,"pippu.hokkaido.jp":true,"rankoshi.hokkaido.jp":true,"rebun.hokkaido.jp":true,"rikubetsu.hokkaido.jp":true,"rishiri.hokkaido.jp":true,"rishirifuji.hokkaido.jp":true,"saroma.hokkaido.jp":true,"sarufutsu.hokkaido.jp":true,"shakotan.hokkaido.jp":true,"shari.hokkaido.jp":true,"shibecha.hokkaido.jp":true,"shibetsu.hokkaido.jp":true,"shikabe.hokkaido.jp":true,"shikaoi.hokkaido.jp":true,"shimamaki.hokkaido.jp":true,"shimizu.hokkaido.jp":true,"shimokawa.hokkaido.jp":true,"shinshinotsu.hokkaido.jp":true,"shintoku.hokkaido.jp":true,"shiranuka.hokkaido.jp":true,"shiraoi.hokkaido.jp":true,"shiriuchi.hokkaido.jp":true,"sobetsu.hokkaido.jp":true,"sunagawa.hokkaido.jp":true,"taiki.hokkaido.jp":true,"takasu.hokkaido.jp":true,"takikawa.hokkaido.jp":true,"takinoue.hokkaido.jp":true,"teshikaga.hokkaido.jp":true,"tobetsu.hokkaido.jp":true,"tohma.hokkaido.jp":true,"tomakomai.hokkaido.jp":true,"tomari.hokkaido.jp":true,"toya.hokkaido.jp":true,"toyako.hokkaido.jp":true,"toyotomi.hokkaido.jp":true,"toyoura.hokkaido.jp":true,"tsubetsu.hokkaido.jp":true,"tsukigata.hokkaido.jp":true,"urakawa.hokkaido.jp":true,"urausu.hokkaido.jp":true,"uryu.hokkaido.jp":true,"utashinai.hokkaido.jp":true,"wakkanai.hokkaido.jp":true,"wassamu.hokkaido.jp":true,"yakumo.hokkaido.jp":true,"yoichi.hokkaido.jp":true,"aioi.hyogo.jp":true,"akashi.hyogo.jp":true,"ako.hyogo.jp":true,"amagasaki.hyogo.jp":true,"aogaki.hyogo.jp":true,"asago.hyogo.jp":true,"ashiya.hyogo.jp":true,"awaji.hyogo.jp":true,"fukusaki.hyogo.jp":true,"goshiki.hyogo.jp":true,"harima.hyogo.jp":true,"himeji.hyogo.jp":true,"ichikawa.hyogo.jp":true,"inagawa.hyogo.jp":true,"itami.hyogo.jp":true,"kakogawa.hyogo.jp":true,"kamigori.hyogo.jp":true,"kamikawa.hyogo.jp":true,"kasai.hyogo.jp":true,"kasuga.hyogo.jp":true,"kawanishi.hyogo.jp":true,"miki.hyogo.jp":true,"minamiawaji.hyogo.jp":true,"nishinomiya.hyogo.jp":true,"nishiwaki.hyogo.jp":true,"ono.hyogo.jp":true,"sanda.hyogo.jp":true,"sannan.hyogo.jp":true,"sasayama.hyogo.jp":true,"sayo.hyogo.jp":true,"shingu.hyogo.jp":true,"shinonsen.hyogo.jp":true,"shiso.hyogo.jp":true,"sumoto.hyogo.jp":true,"taishi.hyogo.jp":true,"taka.hyogo.jp":true,"takarazuka.hyogo.jp":true,"takasago.hyogo.jp":true,"takino.hyogo.jp":true,"tamba.hyogo.jp":true,"tatsuno.hyogo.jp":true,"toyooka.hyogo.jp":true,"yabu.hyogo.jp":true,"yashiro.hyogo.jp":true,"yoka.hyogo.jp":true,"yokawa.hyogo.jp":true,"ami.ibaraki.jp":true,"asahi.ibaraki.jp":true,"bando.ibaraki.jp":true,"chikusei.ibaraki.jp":true,"daigo.ibaraki.jp":true,"fujishiro.ibaraki.jp":true,"hitachi.ibaraki.jp":true,"hitachinaka.ibaraki.jp":true,"hitachiomiya.ibaraki.jp":true,"hitachiota.ibaraki.jp":true,"ibaraki.ibaraki.jp":true,"ina.ibaraki.jp":true,"inashiki.ibaraki.jp":true,"itako.ibaraki.jp":true,"iwama.ibaraki.jp":true,"joso.ibaraki.jp":true,"kamisu.ibaraki.jp":true,"kasama.ibaraki.jp":true,"kashima.ibaraki.jp":true,"kasumigaura.ibaraki.jp":true,"koga.ibaraki.jp":true,"miho.ibaraki.jp":true,"mito.ibaraki.jp":true,"moriya.ibaraki.jp":true,"naka.ibaraki.jp":true,"namegata.ibaraki.jp":true,"oarai.ibaraki.jp":true,"ogawa.ibaraki.jp":true,"omitama.ibaraki.jp":true,"ryugasaki.ibaraki.jp":true,"sakai.ibaraki.jp":true,"sakuragawa.ibaraki.jp":true,"shimodate.ibaraki.jp":true,"shimotsuma.ibaraki.jp":true,"shirosato.ibaraki.jp":true,"sowa.ibaraki.jp":true,"suifu.ibaraki.jp":true,"takahagi.ibaraki.jp":true,"tamatsukuri.ibaraki.jp":true,"tokai.ibaraki.jp":true,"tomobe.ibaraki.jp":true,"tone.ibaraki.jp":true,"toride.ibaraki.jp":true,"tsuchiura.ibaraki.jp":true,"tsukuba.ibaraki.jp":true,"uchihara.ibaraki.jp":true,"ushiku.ibaraki.jp":true,"yachiyo.ibaraki.jp":true,"yamagata.ibaraki.jp":true,"yawara.ibaraki.jp":true,"yuki.ibaraki.jp":true,"anamizu.ishikawa.jp":true,"hakui.ishikawa.jp":true,"hakusan.ishikawa.jp":true,"kaga.ishikawa.jp":true,"kahoku.ishikawa.jp":true,"kanazawa.ishikawa.jp":true,"kawakita.ishikawa.jp":true,"komatsu.ishikawa.jp":true,"nakanoto.ishikawa.jp":true,"nanao.ishikawa.jp":true,"nomi.ishikawa.jp":true,"nonoichi.ishikawa.jp":true,"noto.ishikawa.jp":true,"shika.ishikawa.jp":true,"suzu.ishikawa.jp":true,"tsubata.ishikawa.jp":true,"tsurugi.ishikawa.jp":true,"uchinada.ishikawa.jp":true,"wajima.ishikawa.jp":true,"fudai.iwate.jp":true,"fujisawa.iwate.jp":true,"hanamaki.iwate.jp":true,"hiraizumi.iwate.jp":true,"hirono.iwate.jp":true,"ichinohe.iwate.jp":true,"ichinoseki.iwate.jp":true,"iwaizumi.iwate.jp":true,"iwate.iwate.jp":true,"joboji.iwate.jp":true,"kamaishi.iwate.jp":true,"kanegasaki.iwate.jp":true,"karumai.iwate.jp":true,"kawai.iwate.jp":true,"kitakami.iwate.jp":true,"kuji.iwate.jp":true,"kunohe.iwate.jp":true,"kuzumaki.iwate.jp":true,"miyako.iwate.jp":true,"mizusawa.iwate.jp":true,"morioka.iwate.jp":true,"ninohe.iwate.jp":true,"noda.iwate.jp":true,"ofunato.iwate.jp":true,"oshu.iwate.jp":true,"otsuchi.iwate.jp":true,"rikuzentakata.iwate.jp":true,"shiwa.iwate.jp":true,"shizukuishi.iwate.jp":true,"sumita.iwate.jp":true,"tanohata.iwate.jp":true,"tono.iwate.jp":true,"yahaba.iwate.jp":true,"yamada.iwate.jp":true,"ayagawa.kagawa.jp":true,"higashikagawa.kagawa.jp":true,"kanonji.kagawa.jp":true,"kotohira.kagawa.jp":true,"manno.kagawa.jp":true,"marugame.kagawa.jp":true,"mitoyo.kagawa.jp":true,"naoshima.kagawa.jp":true,"sanuki.kagawa.jp":true,"tadotsu.kagawa.jp":true,"takamatsu.kagawa.jp":true,"tonosho.kagawa.jp":true,"uchinomi.kagawa.jp":true,"utazu.kagawa.jp":true,"zentsuji.kagawa.jp":true,"akune.kagoshima.jp":true,"amami.kagoshima.jp":true,"hioki.kagoshima.jp":true,"isa.kagoshima.jp":true,"isen.kagoshima.jp":true,"izumi.kagoshima.jp":true,"kagoshima.kagoshima.jp":true,"kanoya.kagoshima.jp":true,"kawanabe.kagoshima.jp":true,"kinko.kagoshima.jp":true,"kouyama.kagoshima.jp":true,"makurazaki.kagoshima.jp":true,"matsumoto.kagoshima.jp":true,"minamitane.kagoshima.jp":true,"nakatane.kagoshima.jp":true,"nishinoomote.kagoshima.jp":true,"satsumasendai.kagoshima.jp":true,"soo.kagoshima.jp":true,"tarumizu.kagoshima.jp":true,"yusui.kagoshima.jp":true,"aikawa.kanagawa.jp":true,"atsugi.kanagawa.jp":true,"ayase.kanagawa.jp":true,"chigasaki.kanagawa.jp":true,"ebina.kanagawa.jp":true,"fujisawa.kanagawa.jp":true,"hadano.kanagawa.jp":true,"hakone.kanagawa.jp":true,"hiratsuka.kanagawa.jp":true,"isehara.kanagawa.jp":true,"kaisei.kanagawa.jp":true,"kamakura.kanagawa.jp":true,"kiyokawa.kanagawa.jp":true,"matsuda.kanagawa.jp":true,"minamiashigara.kanagawa.jp":true,"miura.kanagawa.jp":true,"nakai.kanagawa.jp":true,"ninomiya.kanagawa.jp":true,"odawara.kanagawa.jp":true,"oi.kanagawa.jp":true,"oiso.kanagawa.jp":true,"sagamihara.kanagawa.jp":true,"samukawa.kanagawa.jp":true,"tsukui.kanagawa.jp":true,"yamakita.kanagawa.jp":true,"yamato.kanagawa.jp":true,"yokosuka.kanagawa.jp":true,"yugawara.kanagawa.jp":true,"zama.kanagawa.jp":true,"zushi.kanagawa.jp":true,"aki.kochi.jp":true,"geisei.kochi.jp":true,"hidaka.kochi.jp":true,"higashitsuno.kochi.jp":true,"ino.kochi.jp":true,"kagami.kochi.jp":true,"kami.kochi.jp":true,"kitagawa.kochi.jp":true,"kochi.kochi.jp":true,"mihara.kochi.jp":true,"motoyama.kochi.jp":true,"muroto.kochi.jp":true,"nahari.kochi.jp":true,"nakamura.kochi.jp":true,"nankoku.kochi.jp":true,"nishitosa.kochi.jp":true,"niyodogawa.kochi.jp":true,"ochi.kochi.jp":true,"okawa.kochi.jp":true,"otoyo.kochi.jp":true,"otsuki.kochi.jp":true,"sakawa.kochi.jp":true,"sukumo.kochi.jp":true,"susaki.kochi.jp":true,"tosa.kochi.jp":true,"tosashimizu.kochi.jp":true,"toyo.kochi.jp":true,"tsuno.kochi.jp":true,"umaji.kochi.jp":true,"yasuda.kochi.jp":true,"yusuhara.kochi.jp":true,"amakusa.kumamoto.jp":true,"arao.kumamoto.jp":true,"aso.kumamoto.jp":true,"choyo.kumamoto.jp":true,"gyokuto.kumamoto.jp":true,"hitoyoshi.kumamoto.jp":true,"kamiamakusa.kumamoto.jp":true,"kashima.kumamoto.jp":true,"kikuchi.kumamoto.jp":true,"kosa.kumamoto.jp":true,"kumamoto.kumamoto.jp":true,"mashiki.kumamoto.jp":true,"mifune.kumamoto.jp":true,"minamata.kumamoto.jp":true,"minamioguni.kumamoto.jp":true,"nagasu.kumamoto.jp":true,"nishihara.kumamoto.jp":true,"oguni.kumamoto.jp":true,"ozu.kumamoto.jp":true,"sumoto.kumamoto.jp":true,"takamori.kumamoto.jp":true,"uki.kumamoto.jp":true,"uto.kumamoto.jp":true,"yamaga.kumamoto.jp":true,"yamato.kumamoto.jp":true,"yatsushiro.kumamoto.jp":true,"ayabe.kyoto.jp":true,"fukuchiyama.kyoto.jp":true,"higashiyama.kyoto.jp":true,"ide.kyoto.jp":true,"ine.kyoto.jp":true,"joyo.kyoto.jp":true,"kameoka.kyoto.jp":true,"kamo.kyoto.jp":true,"kita.kyoto.jp":true,"kizu.kyoto.jp":true,"kumiyama.kyoto.jp":true,"kyotamba.kyoto.jp":true,"kyotanabe.kyoto.jp":true,"kyotango.kyoto.jp":true,"maizuru.kyoto.jp":true,"minami.kyoto.jp":true,"minamiyamashiro.kyoto.jp":true,"miyazu.kyoto.jp":true,"muko.kyoto.jp":true,"nagaokakyo.kyoto.jp":true,"nakagyo.kyoto.jp":true,"nantan.kyoto.jp":true,"oyamazaki.kyoto.jp":true,"sakyo.kyoto.jp":true,"seika.kyoto.jp":true,"tanabe.kyoto.jp":true,"uji.kyoto.jp":true,"ujitawara.kyoto.jp":true,"wazuka.kyoto.jp":true,"yamashina.kyoto.jp":true,"yawata.kyoto.jp":true,"asahi.mie.jp":true,"inabe.mie.jp":true,"ise.mie.jp":true,"kameyama.mie.jp":true,"kawagoe.mie.jp":true,"kiho.mie.jp":true,"kisosaki.mie.jp":true,"kiwa.mie.jp":true,"komono.mie.jp":true,"kumano.mie.jp":true,"kuwana.mie.jp":true,"matsusaka.mie.jp":true,"meiwa.mie.jp":true,"mihama.mie.jp":true,"minamiise.mie.jp":true,"misugi.mie.jp":true,"miyama.mie.jp":true,"nabari.mie.jp":true,"shima.mie.jp":true,"suzuka.mie.jp":true,"tado.mie.jp":true,"taiki.mie.jp":true,"taki.mie.jp":true,"tamaki.mie.jp":true,"toba.mie.jp":true,"tsu.mie.jp":true,"udono.mie.jp":true,"ureshino.mie.jp":true,"watarai.mie.jp":true,"yokkaichi.mie.jp":true,"furukawa.miyagi.jp":true,"higashimatsushima.miyagi.jp":true,"ishinomaki.miyagi.jp":true,"iwanuma.miyagi.jp":true,"kakuda.miyagi.jp":true,"kami.miyagi.jp":true,"kawasaki.miyagi.jp":true,"kesennuma.miyagi.jp":true,"marumori.miyagi.jp":true,"matsushima.miyagi.jp":true,"minamisanriku.miyagi.jp":true,"misato.miyagi.jp":true,"murata.miyagi.jp":true,"natori.miyagi.jp":true,"ogawara.miyagi.jp":true,"ohira.miyagi.jp":true,"onagawa.miyagi.jp":true,"osaki.miyagi.jp":true,"rifu.miyagi.jp":true,"semine.miyagi.jp":true,"shibata.miyagi.jp":true,"shichikashuku.miyagi.jp":true,"shikama.miyagi.jp":true,"shiogama.miyagi.jp":true,"shiroishi.miyagi.jp":true,"tagajo.miyagi.jp":true,"taiwa.miyagi.jp":true,"tome.miyagi.jp":true,"tomiya.miyagi.jp":true,"wakuya.miyagi.jp":true,"watari.miyagi.jp":true,"yamamoto.miyagi.jp":true,"zao.miyagi.jp":true,"aya.miyazaki.jp":true,"ebino.miyazaki.jp":true,"gokase.miyazaki.jp":true,"hyuga.miyazaki.jp":true,"kadogawa.miyazaki.jp":true,"kawaminami.miyazaki.jp":true,"kijo.miyazaki.jp":true,"kitagawa.miyazaki.jp":true,"kitakata.miyazaki.jp":true,"kitaura.miyazaki.jp":true,"kobayashi.miyazaki.jp":true,"kunitomi.miyazaki.jp":true,"kushima.miyazaki.jp":true,"mimata.miyazaki.jp":true,"miyakonojo.miyazaki.jp":true,"miyazaki.miyazaki.jp":true,"morotsuka.miyazaki.jp":true,"nichinan.miyazaki.jp":true,"nishimera.miyazaki.jp":true,"nobeoka.miyazaki.jp":true,"saito.miyazaki.jp":true,"shiiba.miyazaki.jp":true,"shintomi.miyazaki.jp":true,"takaharu.miyazaki.jp":true,"takanabe.miyazaki.jp":true,"takazaki.miyazaki.jp":true,"tsuno.miyazaki.jp":true,"achi.nagano.jp":true,"agematsu.nagano.jp":true,"anan.nagano.jp":true,"aoki.nagano.jp":true,"asahi.nagano.jp":true,"azumino.nagano.jp":true,"chikuhoku.nagano.jp":true,"chikuma.nagano.jp":true,"chino.nagano.jp":true,"fujimi.nagano.jp":true,"hakuba.nagano.jp":true,"hara.nagano.jp":true,"hiraya.nagano.jp":true,"iida.nagano.jp":true,"iijima.nagano.jp":true,"iiyama.nagano.jp":true,"iizuna.nagano.jp":true,"ikeda.nagano.jp":true,"ikusaka.nagano.jp":true,"ina.nagano.jp":true,"karuizawa.nagano.jp":true,"kawakami.nagano.jp":true,"kiso.nagano.jp":true,"kisofukushima.nagano.jp":true,"kitaaiki.nagano.jp":true,"komagane.nagano.jp":true,"komoro.nagano.jp":true,"matsukawa.nagano.jp":true,"matsumoto.nagano.jp":true,"miasa.nagano.jp":true,"minamiaiki.nagano.jp":true,"minamimaki.nagano.jp":true,"minamiminowa.nagano.jp":true,"minowa.nagano.jp":true,"miyada.nagano.jp":true,"miyota.nagano.jp":true,"mochizuki.nagano.jp":true,"nagano.nagano.jp":true,"nagawa.nagano.jp":true,"nagiso.nagano.jp":true,"nakagawa.nagano.jp":true,"nakano.nagano.jp":true,"nozawaonsen.nagano.jp":true,"obuse.nagano.jp":true,"ogawa.nagano.jp":true,"okaya.nagano.jp":true,"omachi.nagano.jp":true,"omi.nagano.jp":true,"ookuwa.nagano.jp":true,"ooshika.nagano.jp":true,"otaki.nagano.jp":true,"otari.nagano.jp":true,"sakae.nagano.jp":true,"sakaki.nagano.jp":true,"saku.nagano.jp":true,"sakuho.nagano.jp":true,"shimosuwa.nagano.jp":true,"shinanomachi.nagano.jp":true,"shiojiri.nagano.jp":true,"suwa.nagano.jp":true,"suzaka.nagano.jp":true,"takagi.nagano.jp":true,"takamori.nagano.jp":true,"takayama.nagano.jp":true,"tateshina.nagano.jp":true,"tatsuno.nagano.jp":true,"togakushi.nagano.jp":true,"togura.nagano.jp":true,"tomi.nagano.jp":true,"ueda.nagano.jp":true,"wada.nagano.jp":true,"yamagata.nagano.jp":true,"yamanouchi.nagano.jp":true,"yasaka.nagano.jp":true,"yasuoka.nagano.jp":true,"chijiwa.nagasaki.jp":true,"futsu.nagasaki.jp":true,"goto.nagasaki.jp":true,"hasami.nagasaki.jp":true,"hirado.nagasaki.jp":true,"iki.nagasaki.jp":true,"isahaya.nagasaki.jp":true,"kawatana.nagasaki.jp":true,"kuchinotsu.nagasaki.jp":true,"matsuura.nagasaki.jp":true,"nagasaki.nagasaki.jp":true,"obama.nagasaki.jp":true,"omura.nagasaki.jp":true,"oseto.nagasaki.jp":true,"saikai.nagasaki.jp":true,"sasebo.nagasaki.jp":true,"seihi.nagasaki.jp":true,"shimabara.nagasaki.jp":true,"shinkamigoto.nagasaki.jp":true,"togitsu.nagasaki.jp":true,"tsushima.nagasaki.jp":true,"unzen.nagasaki.jp":true,"ando.nara.jp":true,"gose.nara.jp":true,"heguri.nara.jp":true,"higashiyoshino.nara.jp":true,"ikaruga.nara.jp":true,"ikoma.nara.jp":true,"kamikitayama.nara.jp":true,"kanmaki.nara.jp":true,"kashiba.nara.jp":true,"kashihara.nara.jp":true,"katsuragi.nara.jp":true,"kawai.nara.jp":true,"kawakami.nara.jp":true,"kawanishi.nara.jp":true,"koryo.nara.jp":true,"kurotaki.nara.jp":true,"mitsue.nara.jp":true,"miyake.nara.jp":true,"nara.nara.jp":true,"nosegawa.nara.jp":true,"oji.nara.jp":true,"ouda.nara.jp":true,"oyodo.nara.jp":true,"sakurai.nara.jp":true,"sango.nara.jp":true,"shimoichi.nara.jp":true,"shimokitayama.nara.jp":true,"shinjo.nara.jp":true,"soni.nara.jp":true,"takatori.nara.jp":true,"tawaramoto.nara.jp":true,"tenkawa.nara.jp":true,"tenri.nara.jp":true,"uda.nara.jp":true,"yamatokoriyama.nara.jp":true,"yamatotakada.nara.jp":true,"yamazoe.nara.jp":true,"yoshino.nara.jp":true,"aga.niigata.jp":true,"agano.niigata.jp":true,"gosen.niigata.jp":true,"itoigawa.niigata.jp":true,"izumozaki.niigata.jp":true,"joetsu.niigata.jp":true,"kamo.niigata.jp":true,"kariwa.niigata.jp":true,"kashiwazaki.niigata.jp":true,"minamiuonuma.niigata.jp":true,"mitsuke.niigata.jp":true,"muika.niigata.jp":true,"murakami.niigata.jp":true,"myoko.niigata.jp":true,"nagaoka.niigata.jp":true,"niigata.niigata.jp":true,"ojiya.niigata.jp":true,"omi.niigata.jp":true,"sado.niigata.jp":true,"sanjo.niigata.jp":true,"seiro.niigata.jp":true,"seirou.niigata.jp":true,"sekikawa.niigata.jp":true,"shibata.niigata.jp":true,"tagami.niigata.jp":true,"tainai.niigata.jp":true,"tochio.niigata.jp":true,"tokamachi.niigata.jp":true,"tsubame.niigata.jp":true,"tsunan.niigata.jp":true,"uonuma.niigata.jp":true,"yahiko.niigata.jp":true,"yoita.niigata.jp":true,"yuzawa.niigata.jp":true,"beppu.oita.jp":true,"bungoono.oita.jp":true,"bungotakada.oita.jp":true,"hasama.oita.jp":true,"hiji.oita.jp":true,"himeshima.oita.jp":true,"hita.oita.jp":true,"kamitsue.oita.jp":true,"kokonoe.oita.jp":true,"kuju.oita.jp":true,"kunisaki.oita.jp":true,"kusu.oita.jp":true,"oita.oita.jp":true,"saiki.oita.jp":true,"taketa.oita.jp":true,"tsukumi.oita.jp":true,"usa.oita.jp":true,"usuki.oita.jp":true,"yufu.oita.jp":true,"akaiwa.okayama.jp":true,"asakuchi.okayama.jp":true,"bizen.okayama.jp":true,"hayashima.okayama.jp":true,"ibara.okayama.jp":true,"kagamino.okayama.jp":true,"kasaoka.okayama.jp":true,"kibichuo.okayama.jp":true,"kumenan.okayama.jp":true,"kurashiki.okayama.jp":true,"maniwa.okayama.jp":true,"misaki.okayama.jp":true,"nagi.okayama.jp":true,"niimi.okayama.jp":true,"nishiawakura.okayama.jp":true,"okayama.okayama.jp":true,"satosho.okayama.jp":true,"setouchi.okayama.jp":true,"shinjo.okayama.jp":true,"shoo.okayama.jp":true,"soja.okayama.jp":true,"takahashi.okayama.jp":true,"tamano.okayama.jp":true,"tsuyama.okayama.jp":true,"wake.okayama.jp":true,"yakage.okayama.jp":true,"aguni.okinawa.jp":true,"ginowan.okinawa.jp":true,"ginoza.okinawa.jp":true,"gushikami.okinawa.jp":true,"haebaru.okinawa.jp":true,"higashi.okinawa.jp":true,"hirara.okinawa.jp":true,"iheya.okinawa.jp":true,"ishigaki.okinawa.jp":true,"ishikawa.okinawa.jp":true,"itoman.okinawa.jp":true,"izena.okinawa.jp":true,"kadena.okinawa.jp":true,"kin.okinawa.jp":true,"kitadaito.okinawa.jp":true,"kitanakagusuku.okinawa.jp":true,"kumejima.okinawa.jp":true,"kunigami.okinawa.jp":true,"minamidaito.okinawa.jp":true,"motobu.okinawa.jp":true,"nago.okinawa.jp":true,"naha.okinawa.jp":true,"nakagusuku.okinawa.jp":true,"nakijin.okinawa.jp":true,"nanjo.okinawa.jp":true,"nishihara.okinawa.jp":true,"ogimi.okinawa.jp":true,"okinawa.okinawa.jp":true,"onna.okinawa.jp":true,"shimoji.okinawa.jp":true,"taketomi.okinawa.jp":true,"tarama.okinawa.jp":true,"tokashiki.okinawa.jp":true,"tomigusuku.okinawa.jp":true,"tonaki.okinawa.jp":true,"urasoe.okinawa.jp":true,"uruma.okinawa.jp":true,"yaese.okinawa.jp":true,"yomitan.okinawa.jp":true,"yonabaru.okinawa.jp":true,"yonaguni.okinawa.jp":true,"zamami.okinawa.jp":true,"abeno.osaka.jp":true,"chihayaakasaka.osaka.jp":true,"chuo.osaka.jp":true,"daito.osaka.jp":true,"fujiidera.osaka.jp":true,"habikino.osaka.jp":true,"hannan.osaka.jp":true,"higashiosaka.osaka.jp":true,"higashisumiyoshi.osaka.jp":true,"higashiyodogawa.osaka.jp":true,"hirakata.osaka.jp":true,"ibaraki.osaka.jp":true,"ikeda.osaka.jp":true,"izumi.osaka.jp":true,"izumiotsu.osaka.jp":true,"izumisano.osaka.jp":true,"kadoma.osaka.jp":true,"kaizuka.osaka.jp":true,"kanan.osaka.jp":true,"kashiwara.osaka.jp":true,"katano.osaka.jp":true,"kawachinagano.osaka.jp":true,"kishiwada.osaka.jp":true,"kita.osaka.jp":true,"kumatori.osaka.jp":true,"matsubara.osaka.jp":true,"minato.osaka.jp":true,"minoh.osaka.jp":true,"misaki.osaka.jp":true,"moriguchi.osaka.jp":true,"neyagawa.osaka.jp":true,"nishi.osaka.jp":true,"nose.osaka.jp":true,"osakasayama.osaka.jp":true,"sakai.osaka.jp":true,"sayama.osaka.jp":true,"sennan.osaka.jp":true,"settsu.osaka.jp":true,"shijonawate.osaka.jp":true,"shimamoto.osaka.jp":true,"suita.osaka.jp":true,"tadaoka.osaka.jp":true,"taishi.osaka.jp":true,"tajiri.osaka.jp":true,"takaishi.osaka.jp":true,"takatsuki.osaka.jp":true,"tondabayashi.osaka.jp":true,"toyonaka.osaka.jp":true,"toyono.osaka.jp":true,"yao.osaka.jp":true,"ariake.saga.jp":true,"arita.saga.jp":true,"fukudomi.saga.jp":true,"genkai.saga.jp":true,"hamatama.saga.jp":true,"hizen.saga.jp":true,"imari.saga.jp":true,"kamimine.saga.jp":true,"kanzaki.saga.jp":true,"karatsu.saga.jp":true,"kashima.saga.jp":true,"kitagata.saga.jp":true,"kitahata.saga.jp":true,"kiyama.saga.jp":true,"kouhoku.saga.jp":true,"kyuragi.saga.jp":true,"nishiarita.saga.jp":true,"ogi.saga.jp":true,"omachi.saga.jp":true,"ouchi.saga.jp":true,"saga.saga.jp":true,"shiroishi.saga.jp":true,"taku.saga.jp":true,"tara.saga.jp":true,"tosu.saga.jp":true,"yoshinogari.saga.jp":true,"arakawa.saitama.jp":true,"asaka.saitama.jp":true,"chichibu.saitama.jp":true,"fujimi.saitama.jp":true,"fujimino.saitama.jp":true,"fukaya.saitama.jp":true,"hanno.saitama.jp":true,"hanyu.saitama.jp":true,"hasuda.saitama.jp":true,"hatogaya.saitama.jp":true,"hatoyama.saitama.jp":true,"hidaka.saitama.jp":true,"higashichichibu.saitama.jp":true,"higashimatsuyama.saitama.jp":true,"honjo.saitama.jp":true,"ina.saitama.jp":true,"iruma.saitama.jp":true,"iwatsuki.saitama.jp":true,"kamiizumi.saitama.jp":true,"kamikawa.saitama.jp":true,"kamisato.saitama.jp":true,"kasukabe.saitama.jp":true,"kawagoe.saitama.jp":true,"kawaguchi.saitama.jp":true,"kawajima.saitama.jp":true,"kazo.saitama.jp":true,"kitamoto.saitama.jp":true,"koshigaya.saitama.jp":true,"kounosu.saitama.jp":true,"kuki.saitama.jp":true,"kumagaya.saitama.jp":true,"matsubushi.saitama.jp":true,"minano.saitama.jp":true,"misato.saitama.jp":true,"miyashiro.saitama.jp":true,"miyoshi.saitama.jp":true,"moroyama.saitama.jp":true,"nagatoro.saitama.jp":true,"namegawa.saitama.jp":true,"niiza.saitama.jp":true,"ogano.saitama.jp":true,"ogawa.saitama.jp":true,"ogose.saitama.jp":true,"okegawa.saitama.jp":true,"omiya.saitama.jp":true,"otaki.saitama.jp":true,"ranzan.saitama.jp":true,"ryokami.saitama.jp":true,"saitama.saitama.jp":true,"sakado.saitama.jp":true,"satte.saitama.jp":true,"sayama.saitama.jp":true,"shiki.saitama.jp":true,"shiraoka.saitama.jp":true,"soka.saitama.jp":true,"sugito.saitama.jp":true,"toda.saitama.jp":true,"tokigawa.saitama.jp":true,"tokorozawa.saitama.jp":true,"tsurugashima.saitama.jp":true,"urawa.saitama.jp":true,"warabi.saitama.jp":true,"yashio.saitama.jp":true,"yokoze.saitama.jp":true,"yono.saitama.jp":true,"yorii.saitama.jp":true,"yoshida.saitama.jp":true,"yoshikawa.saitama.jp":true,"yoshimi.saitama.jp":true,"aisho.shiga.jp":true,"gamo.shiga.jp":true,"higashiomi.shiga.jp":true,"hikone.shiga.jp":true,"koka.shiga.jp":true,"konan.shiga.jp":true,"kosei.shiga.jp":true,"koto.shiga.jp":true,"kusatsu.shiga.jp":true,"maibara.shiga.jp":true,"moriyama.shiga.jp":true,"nagahama.shiga.jp":true,"nishiazai.shiga.jp":true,"notogawa.shiga.jp":true,"omihachiman.shiga.jp":true,"otsu.shiga.jp":true,"ritto.shiga.jp":true,"ryuoh.shiga.jp":true,"takashima.shiga.jp":true,"takatsuki.shiga.jp":true,"torahime.shiga.jp":true,"toyosato.shiga.jp":true,"yasu.shiga.jp":true,"akagi.shimane.jp":true,"ama.shimane.jp":true,"gotsu.shimane.jp":true,"hamada.shimane.jp":true,"higashiizumo.shimane.jp":true,"hikawa.shimane.jp":true,"hikimi.shimane.jp":true,"izumo.shimane.jp":true,"kakinoki.shimane.jp":true,"masuda.shimane.jp":true,"matsue.shimane.jp":true,"misato.shimane.jp":true,"nishinoshima.shimane.jp":true,"ohda.shimane.jp":true,"okinoshima.shimane.jp":true,"okuizumo.shimane.jp":true,"shimane.shimane.jp":true,"tamayu.shimane.jp":true,"tsuwano.shimane.jp":true,"unnan.shimane.jp":true,"yakumo.shimane.jp":true,"yasugi.shimane.jp":true,"yatsuka.shimane.jp":true,"arai.shizuoka.jp":true,"atami.shizuoka.jp":true,"fuji.shizuoka.jp":true,"fujieda.shizuoka.jp":true,"fujikawa.shizuoka.jp":true,"fujinomiya.shizuoka.jp":true,"fukuroi.shizuoka.jp":true,"gotemba.shizuoka.jp":true,"haibara.shizuoka.jp":true,"hamamatsu.shizuoka.jp":true,"higashiizu.shizuoka.jp":true,"ito.shizuoka.jp":true,"iwata.shizuoka.jp":true,"izu.shizuoka.jp":true,"izunokuni.shizuoka.jp":true,"kakegawa.shizuoka.jp":true,"kannami.shizuoka.jp":true,"kawanehon.shizuoka.jp":true,"kawazu.shizuoka.jp":true,"kikugawa.shizuoka.jp":true,"kosai.shizuoka.jp":true,"makinohara.shizuoka.jp":true,"matsuzaki.shizuoka.jp":true,"minamiizu.shizuoka.jp":true,"mishima.shizuoka.jp":true,"morimachi.shizuoka.jp":true,"nishiizu.shizuoka.jp":true,"numazu.shizuoka.jp":true,"omaezaki.shizuoka.jp":true,"shimada.shizuoka.jp":true,"shimizu.shizuoka.jp":true,"shimoda.shizuoka.jp":true,"shizuoka.shizuoka.jp":true,"susono.shizuoka.jp":true,"yaizu.shizuoka.jp":true,"yoshida.shizuoka.jp":true,"ashikaga.tochigi.jp":true,"bato.tochigi.jp":true,"haga.tochigi.jp":true,"ichikai.tochigi.jp":true,"iwafune.tochigi.jp":true,"kaminokawa.tochigi.jp":true,"kanuma.tochigi.jp":true,"karasuyama.tochigi.jp":true,"kuroiso.tochigi.jp":true,"mashiko.tochigi.jp":true,"mibu.tochigi.jp":true,"moka.tochigi.jp":true,"motegi.tochigi.jp":true,"nasu.tochigi.jp":true,"nasushiobara.tochigi.jp":true,"nikko.tochigi.jp":true,"nishikata.tochigi.jp":true,"nogi.tochigi.jp":true,"ohira.tochigi.jp":true,"ohtawara.tochigi.jp":true,"oyama.tochigi.jp":true,"sakura.tochigi.jp":true,"sano.tochigi.jp":true,"shimotsuke.tochigi.jp":true,"shioya.tochigi.jp":true,"takanezawa.tochigi.jp":true,"tochigi.tochigi.jp":true,"tsuga.tochigi.jp":true,"ujiie.tochigi.jp":true,"utsunomiya.tochigi.jp":true,"yaita.tochigi.jp":true,"aizumi.tokushima.jp":true,"anan.tokushima.jp":true,"ichiba.tokushima.jp":true,"itano.tokushima.jp":true,"kainan.tokushima.jp":true,"komatsushima.tokushima.jp":true,"matsushige.tokushima.jp":true,"mima.tokushima.jp":true,"minami.tokushima.jp":true,"miyoshi.tokushima.jp":true,"mugi.tokushima.jp":true,"nakagawa.tokushima.jp":true,"naruto.tokushima.jp":true,"sanagochi.tokushima.jp":true,"shishikui.tokushima.jp":true,"tokushima.tokushima.jp":true,"wajiki.tokushima.jp":true,"adachi.tokyo.jp":true,"akiruno.tokyo.jp":true,"akishima.tokyo.jp":true,"aogashima.tokyo.jp":true,"arakawa.tokyo.jp":true,"bunkyo.tokyo.jp":true,"chiyoda.tokyo.jp":true,"chofu.tokyo.jp":true,"chuo.tokyo.jp":true,"edogawa.tokyo.jp":true,"fuchu.tokyo.jp":true,"fussa.tokyo.jp":true,"hachijo.tokyo.jp":true,"hachioji.tokyo.jp":true,"hamura.tokyo.jp":true,"higashikurume.tokyo.jp":true,"higashimurayama.tokyo.jp":true,"higashiyamato.tokyo.jp":true,"hino.tokyo.jp":true,"hinode.tokyo.jp":true,"hinohara.tokyo.jp":true,"inagi.tokyo.jp":true,"itabashi.tokyo.jp":true,"katsushika.tokyo.jp":true,"kita.tokyo.jp":true,"kiyose.tokyo.jp":true,"kodaira.tokyo.jp":true,"koganei.tokyo.jp":true,"kokubunji.tokyo.jp":true,"komae.tokyo.jp":true,"koto.tokyo.jp":true,"kouzushima.tokyo.jp":true,"kunitachi.tokyo.jp":true,"machida.tokyo.jp":true,"meguro.tokyo.jp":true,"minato.tokyo.jp":true,"mitaka.tokyo.jp":true,"mizuho.tokyo.jp":true,"musashimurayama.tokyo.jp":true,"musashino.tokyo.jp":true,"nakano.tokyo.jp":true,"nerima.tokyo.jp":true,"ogasawara.tokyo.jp":true,"okutama.tokyo.jp":true,"ome.tokyo.jp":true,"oshima.tokyo.jp":true,"ota.tokyo.jp":true,"setagaya.tokyo.jp":true,"shibuya.tokyo.jp":true,"shinagawa.tokyo.jp":true,"shinjuku.tokyo.jp":true,"suginami.tokyo.jp":true,"sumida.tokyo.jp":true,"tachikawa.tokyo.jp":true,"taito.tokyo.jp":true,"tama.tokyo.jp":true,"toshima.tokyo.jp":true,"chizu.tottori.jp":true,"hino.tottori.jp":true,"kawahara.tottori.jp":true,"koge.tottori.jp":true,"kotoura.tottori.jp":true,"misasa.tottori.jp":true,"nanbu.tottori.jp":true,"nichinan.tottori.jp":true,"sakaiminato.tottori.jp":true,"tottori.tottori.jp":true,"wakasa.tottori.jp":true,"yazu.tottori.jp":true,"yonago.tottori.jp":true,"asahi.toyama.jp":true,"fuchu.toyama.jp":true,"fukumitsu.toyama.jp":true,"funahashi.toyama.jp":true,"himi.toyama.jp":true,"imizu.toyama.jp":true,"inami.toyama.jp":true,"johana.toyama.jp":true,"kamiichi.toyama.jp":true,"kurobe.toyama.jp":true,"nakaniikawa.toyama.jp":true,"namerikawa.toyama.jp":true,"nanto.toyama.jp":true,"nyuzen.toyama.jp":true,"oyabe.toyama.jp":true,"taira.toyama.jp":true,"takaoka.toyama.jp":true,"tateyama.toyama.jp":true,"toga.toyama.jp":true,"tonami.toyama.jp":true,"toyama.toyama.jp":true,"unazuki.toyama.jp":true,"uozu.toyama.jp":true,"yamada.toyama.jp":true,"arida.wakayama.jp":true,"aridagawa.wakayama.jp":true,"gobo.wakayama.jp":true,"hashimoto.wakayama.jp":true,"hidaka.wakayama.jp":true,"hirogawa.wakayama.jp":true,"inami.wakayama.jp":true,"iwade.wakayama.jp":true,"kainan.wakayama.jp":true,"kamitonda.wakayama.jp":true,"katsuragi.wakayama.jp":true,"kimino.wakayama.jp":true,"kinokawa.wakayama.jp":true,"kitayama.wakayama.jp":true,"koya.wakayama.jp":true,"koza.wakayama.jp":true,"kozagawa.wakayama.jp":true,"kudoyama.wakayama.jp":true,"kushimoto.wakayama.jp":true,"mihama.wakayama.jp":true,"misato.wakayama.jp":true,"nachikatsuura.wakayama.jp":true,"shingu.wakayama.jp":true,"shirahama.wakayama.jp":true,"taiji.wakayama.jp":true,"tanabe.wakayama.jp":true,"wakayama.wakayama.jp":true,"yuasa.wakayama.jp":true,"yura.wakayama.jp":true,"asahi.yamagata.jp":true,"funagata.yamagata.jp":true,"higashine.yamagata.jp":true,"iide.yamagata.jp":true,"kahoku.yamagata.jp":true,"kaminoyama.yamagata.jp":true,"kaneyama.yamagata.jp":true,"kawanishi.yamagata.jp":true,"mamurogawa.yamagata.jp":true,"mikawa.yamagata.jp":true,"murayama.yamagata.jp":true,"nagai.yamagata.jp":true,"nakayama.yamagata.jp":true,"nanyo.yamagata.jp":true,"nishikawa.yamagata.jp":true,"obanazawa.yamagata.jp":true,"oe.yamagata.jp":true,"oguni.yamagata.jp":true,"ohkura.yamagata.jp":true,"oishida.yamagata.jp":true,"sagae.yamagata.jp":true,"sakata.yamagata.jp":true,"sakegawa.yamagata.jp":true,"shinjo.yamagata.jp":true,"shirataka.yamagata.jp":true,"shonai.yamagata.jp":true,"takahata.yamagata.jp":true,"tendo.yamagata.jp":true,"tozawa.yamagata.jp":true,"tsuruoka.yamagata.jp":true,"yamagata.yamagata.jp":true,"yamanobe.yamagata.jp":true,"yonezawa.yamagata.jp":true,"yuza.yamagata.jp":true,"abu.yamaguchi.jp":true,"hagi.yamaguchi.jp":true,"hikari.yamaguchi.jp":true,"hofu.yamaguchi.jp":true,"iwakuni.yamaguchi.jp":true,"kudamatsu.yamaguchi.jp":true,"mitou.yamaguchi.jp":true,"nagato.yamaguchi.jp":true,"oshima.yamaguchi.jp":true,"shimonoseki.yamaguchi.jp":true,"shunan.yamaguchi.jp":true,"tabuse.yamaguchi.jp":true,"tokuyama.yamaguchi.jp":true,"toyota.yamaguchi.jp":true,"ube.yamaguchi.jp":true,"yuu.yamaguchi.jp":true,"chuo.yamanashi.jp":true,"doshi.yamanashi.jp":true,"fuefuki.yamanashi.jp":true,"fujikawa.yamanashi.jp":true,"fujikawaguchiko.yamanashi.jp":true,"fujiyoshida.yamanashi.jp":true,"hayakawa.yamanashi.jp":true,"hokuto.yamanashi.jp":true,"ichikawamisato.yamanashi.jp":true,"kai.yamanashi.jp":true,"kofu.yamanashi.jp":true,"koshu.yamanashi.jp":true,"kosuge.yamanashi.jp":true,"minami-alps.yamanashi.jp":true,"minobu.yamanashi.jp":true,"nakamichi.yamanashi.jp":true,"nanbu.yamanashi.jp":true,"narusawa.yamanashi.jp":true,"nirasaki.yamanashi.jp":true,"nishikatsura.yamanashi.jp":true,"oshino.yamanashi.jp":true,"otsuki.yamanashi.jp":true,"showa.yamanashi.jp":true,"tabayama.yamanashi.jp":true,"tsuru.yamanashi.jp":true,"uenohara.yamanashi.jp":true,"yamanakako.yamanashi.jp":true,"yamanashi.yamanashi.jp":true,"*.ke":true,"kg":true,"org.kg":true,"net.kg":true,"com.kg":true,"edu.kg":true,"gov.kg":true,"mil.kg":true,"*.kh":true,"ki":true,"edu.ki":true,"biz.ki":true,"net.ki":true,"org.ki":true,"gov.ki":true,"info.ki":true,"com.ki":true,"km":true,"org.km":true,"nom.km":true,"gov.km":true,"prd.km":true,"tm.km":true,"edu.km":true,"mil.km":true,"ass.km":true,"com.km":true,"coop.km":true,"asso.km":true,"presse.km":true,"medecin.km":true,"notaires.km":true,"pharmaciens.km":true,"veterinaire.km":true,"gouv.km":true,"kn":true,"net.kn":true,"org.kn":true,"edu.kn":true,"gov.kn":true,"kp":true,"com.kp":true,"edu.kp":true,"gov.kp":true,"org.kp":true,"rep.kp":true,"tra.kp":true,"kr":true,"ac.kr":true,"co.kr":true,"es.kr":true,"go.kr":true,"hs.kr":true,"kg.kr":true,"mil.kr":true,"ms.kr":true,"ne.kr":true,"or.kr":true,"pe.kr":true,"re.kr":true,"sc.kr":true,"busan.kr":true,"chungbuk.kr":true,"chungnam.kr":true,"daegu.kr":true,"daejeon.kr":true,"gangwon.kr":true,"gwangju.kr":true,"gyeongbuk.kr":true,"gyeonggi.kr":true,"gyeongnam.kr":true,"incheon.kr":true,"jeju.kr":true,"jeonbuk.kr":true,"jeonnam.kr":true,"seoul.kr":true,"ulsan.kr":true,"*.kw":true,"ky":true,"edu.ky":true,"gov.ky":true,"com.ky":true,"org.ky":true,"net.ky":true,"kz":true,"org.kz":true,"edu.kz":true,"net.kz":true,"gov.kz":true,"mil.kz":true,"com.kz":true,"la":true,"int.la":true,"net.la":true,"info.la":true,"edu.la":true,"gov.la":true,"per.la":true,"com.la":true,"org.la":true,"lb":true,"com.lb":true,"edu.lb":true,"gov.lb":true,"net.lb":true,"org.lb":true,"lc":true,"com.lc":true,"net.lc":true,"co.lc":true,"org.lc":true,"edu.lc":true,"gov.lc":true,"li":true,"lk":true,"gov.lk":true,"sch.lk":true,"net.lk":true,"int.lk":true,"com.lk":true,"org.lk":true,"edu.lk":true,"ngo.lk":true,"soc.lk":true,"web.lk":true,"ltd.lk":true,"assn.lk":true,"grp.lk":true,"hotel.lk":true,"ac.lk":true,"lr":true,"com.lr":true,"edu.lr":true,"gov.lr":true,"org.lr":true,"net.lr":true,"ls":true,"co.ls":true,"org.ls":true,"lt":true,"gov.lt":true,"lu":true,"lv":true,"com.lv":true,"edu.lv":true,"gov.lv":true,"org.lv":true,"mil.lv":true,"id.lv":true,"net.lv":true,"asn.lv":true,"conf.lv":true,"ly":true,"com.ly":true,"net.ly":true,"gov.ly":true,"plc.ly":true,"edu.ly":true,"sch.ly":true,"med.ly":true,"org.ly":true,"id.ly":true,"ma":true,"co.ma":true,"net.ma":true,"gov.ma":true,"org.ma":true,"ac.ma":true,"press.ma":true,"mc":true,"tm.mc":true,"asso.mc":true,"md":true,"me":true,"co.me":true,"net.me":true,"org.me":true,"edu.me":true,"ac.me":true,"gov.me":true,"its.me":true,"priv.me":true,"mg":true,"org.mg":true,"nom.mg":true,"gov.mg":true,"prd.mg":true,"tm.mg":true,"edu.mg":true,"mil.mg":true,"com.mg":true,"co.mg":true,"mh":true,"mil":true,"mk":true,"com.mk":true,"org.mk":true,"net.mk":true,"edu.mk":true,"gov.mk":true,"inf.mk":true,"name.mk":true,"ml":true,"com.ml":true,"edu.ml":true,"gouv.ml":true,"gov.ml":true,"net.ml":true,"org.ml":true,"presse.ml":true,"*.mm":true,"mn":true,"gov.mn":true,"edu.mn":true,"org.mn":true,"mo":true,"com.mo":true,"net.mo":true,"org.mo":true,"edu.mo":true,"gov.mo":true,"mobi":true,"mp":true,"mq":true,"mr":true,"gov.mr":true,"ms":true,"com.ms":true,"edu.ms":true,"gov.ms":true,"net.ms":true,"org.ms":true,"mt":true,"com.mt":true,"edu.mt":true,"net.mt":true,"org.mt":true,"mu":true,"com.mu":true,"net.mu":true,"org.mu":true,"gov.mu":true,"ac.mu":true,"co.mu":true,"or.mu":true,"museum":true,"academy.museum":true,"agriculture.museum":true,"air.museum":true,"airguard.museum":true,"alabama.museum":true,"alaska.museum":true,"amber.museum":true,"ambulance.museum":true,"american.museum":true,"americana.museum":true,"americanantiques.museum":true,"americanart.museum":true,"amsterdam.museum":true,"and.museum":true,"annefrank.museum":true,"anthro.museum":true,"anthropology.museum":true,"antiques.museum":true,"aquarium.museum":true,"arboretum.museum":true,"archaeological.museum":true,"archaeology.museum":true,"architecture.museum":true,"art.museum":true,"artanddesign.museum":true,"artcenter.museum":true,"artdeco.museum":true,"arteducation.museum":true,"artgallery.museum":true,"arts.museum":true,"artsandcrafts.museum":true,"asmatart.museum":true,"assassination.museum":true,"assisi.museum":true,"association.museum":true,"astronomy.museum":true,"atlanta.museum":true,"austin.museum":true,"australia.museum":true,"automotive.museum":true,"aviation.museum":true,"axis.museum":true,"badajoz.museum":true,"baghdad.museum":true,"bahn.museum":true,"bale.museum":true,"baltimore.museum":true,"barcelona.museum":true,"baseball.museum":true,"basel.museum":true,"baths.museum":true,"bauern.museum":true,"beauxarts.museum":true,"beeldengeluid.museum":true,"bellevue.museum":true,"bergbau.museum":true,"berkeley.museum":true,"berlin.museum":true,"bern.museum":true,"bible.museum":true,"bilbao.museum":true,"bill.museum":true,"birdart.museum":true,"birthplace.museum":true,"bonn.museum":true,"boston.museum":true,"botanical.museum":true,"botanicalgarden.museum":true,"botanicgarden.museum":true,"botany.museum":true,"brandywinevalley.museum":true,"brasil.museum":true,"bristol.museum":true,"british.museum":true,"britishcolumbia.museum":true,"broadcast.museum":true,"brunel.museum":true,"brussel.museum":true,"brussels.museum":true,"bruxelles.museum":true,"building.museum":true,"burghof.museum":true,"bus.museum":true,"bushey.museum":true,"cadaques.museum":true,"california.museum":true,"cambridge.museum":true,"can.museum":true,"canada.museum":true,"capebreton.museum":true,"carrier.museum":true,"cartoonart.museum":true,"casadelamoneda.museum":true,"castle.museum":true,"castres.museum":true,"celtic.museum":true,"center.museum":true,"chattanooga.museum":true,"cheltenham.museum":true,"chesapeakebay.museum":true,"chicago.museum":true,"children.museum":true,"childrens.museum":true,"childrensgarden.museum":true,"chiropractic.museum":true,"chocolate.museum":true,"christiansburg.museum":true,"cincinnati.museum":true,"cinema.museum":true,"circus.museum":true,"civilisation.museum":true,"civilization.museum":true,"civilwar.museum":true,"clinton.museum":true,"clock.museum":true,"coal.museum":true,"coastaldefence.museum":true,"cody.museum":true,"coldwar.museum":true,"collection.museum":true,"colonialwilliamsburg.museum":true,"coloradoplateau.museum":true,"columbia.museum":true,"columbus.museum":true,"communication.museum":true,"communications.museum":true,"community.museum":true,"computer.museum":true,"computerhistory.museum":true,"xn--comunicaes-v6a2o.museum":true,"contemporary.museum":true,"contemporaryart.museum":true,"convent.museum":true,"copenhagen.museum":true,"corporation.museum":true,"xn--correios-e-telecomunicaes-ghc29a.museum":true,"corvette.museum":true,"costume.museum":true,"countryestate.museum":true,"county.museum":true,"crafts.museum":true,"cranbrook.museum":true,"creation.museum":true,"cultural.museum":true,"culturalcenter.museum":true,"culture.museum":true,"cyber.museum":true,"cymru.museum":true,"dali.museum":true,"dallas.museum":true,"database.museum":true,"ddr.museum":true,"decorativearts.museum":true,"delaware.museum":true,"delmenhorst.museum":true,"denmark.museum":true,"depot.museum":true,"design.museum":true,"detroit.museum":true,"dinosaur.museum":true,"discovery.museum":true,"dolls.museum":true,"donostia.museum":true,"durham.museum":true,"eastafrica.museum":true,"eastcoast.museum":true,"education.museum":true,"educational.museum":true,"egyptian.museum":true,"eisenbahn.museum":true,"elburg.museum":true,"elvendrell.museum":true,"embroidery.museum":true,"encyclopedic.museum":true,"england.museum":true,"entomology.museum":true,"environment.museum":true,"environmentalconservation.museum":true,"epilepsy.museum":true,"essex.museum":true,"estate.museum":true,"ethnology.museum":true,"exeter.museum":true,"exhibition.museum":true,"family.museum":true,"farm.museum":true,"farmequipment.museum":true,"farmers.museum":true,"farmstead.museum":true,"field.museum":true,"figueres.museum":true,"filatelia.museum":true,"film.museum":true,"fineart.museum":true,"finearts.museum":true,"finland.museum":true,"flanders.museum":true,"florida.museum":true,"force.museum":true,"fortmissoula.museum":true,"fortworth.museum":true,"foundation.museum":true,"francaise.museum":true,"frankfurt.museum":true,"franziskaner.museum":true,"freemasonry.museum":true,"freiburg.museum":true,"fribourg.museum":true,"frog.museum":true,"fundacio.museum":true,"furniture.museum":true,"gallery.museum":true,"garden.museum":true,"gateway.museum":true,"geelvinck.museum":true,"gemological.museum":true,"geology.museum":true,"georgia.museum":true,"giessen.museum":true,"glas.museum":true,"glass.museum":true,"gorge.museum":true,"grandrapids.museum":true,"graz.museum":true,"guernsey.museum":true,"halloffame.museum":true,"hamburg.museum":true,"handson.museum":true,"harvestcelebration.museum":true,"hawaii.museum":true,"health.museum":true,"heimatunduhren.museum":true,"hellas.museum":true,"helsinki.museum":true,"hembygdsforbund.museum":true,"heritage.museum":true,"histoire.museum":true,"historical.museum":true,"historicalsociety.museum":true,"historichouses.museum":true,"historisch.museum":true,"historisches.museum":true,"history.museum":true,"historyofscience.museum":true,"horology.museum":true,"house.museum":true,"humanities.museum":true,"illustration.museum":true,"imageandsound.museum":true,"indian.museum":true,"indiana.museum":true,"indianapolis.museum":true,"indianmarket.museum":true,"intelligence.museum":true,"interactive.museum":true,"iraq.museum":true,"iron.museum":true,"isleofman.museum":true,"jamison.museum":true,"jefferson.museum":true,"jerusalem.museum":true,"jewelry.museum":true,"jewish.museum":true,"jewishart.museum":true,"jfk.museum":true,"journalism.museum":true,"judaica.museum":true,"judygarland.museum":true,"juedisches.museum":true,"juif.museum":true,"karate.museum":true,"karikatur.museum":true,"kids.museum":true,"koebenhavn.museum":true,"koeln.museum":true,"kunst.museum":true,"kunstsammlung.museum":true,"kunstunddesign.museum":true,"labor.museum":true,"labour.museum":true,"lajolla.museum":true,"lancashire.museum":true,"landes.museum":true,"lans.museum":true,"xn--lns-qla.museum":true,"larsson.museum":true,"lewismiller.museum":true,"lincoln.museum":true,"linz.museum":true,"living.museum":true,"livinghistory.museum":true,"localhistory.museum":true,"london.museum":true,"losangeles.museum":true,"louvre.museum":true,"loyalist.museum":true,"lucerne.museum":true,"luxembourg.museum":true,"luzern.museum":true,"mad.museum":true,"madrid.museum":true,"mallorca.museum":true,"manchester.museum":true,"mansion.museum":true,"mansions.museum":true,"manx.museum":true,"marburg.museum":true,"maritime.museum":true,"maritimo.museum":true,"maryland.museum":true,"marylhurst.museum":true,"media.museum":true,"medical.museum":true,"medizinhistorisches.museum":true,"meeres.museum":true,"memorial.museum":true,"mesaverde.museum":true,"michigan.museum":true,"midatlantic.museum":true,"military.museum":true,"mill.museum":true,"miners.museum":true,"mining.museum":true,"minnesota.museum":true,"missile.museum":true,"missoula.museum":true,"modern.museum":true,"moma.museum":true,"money.museum":true,"monmouth.museum":true,"monticello.museum":true,"montreal.museum":true,"moscow.museum":true,"motorcycle.museum":true,"muenchen.museum":true,"muenster.museum":true,"mulhouse.museum":true,"muncie.museum":true,"museet.museum":true,"museumcenter.museum":true,"museumvereniging.museum":true,"music.museum":true,"national.museum":true,"nationalfirearms.museum":true,"nationalheritage.museum":true,"nativeamerican.museum":true,"naturalhistory.museum":true,"naturalhistorymuseum.museum":true,"naturalsciences.museum":true,"nature.museum":true,"naturhistorisches.museum":true,"natuurwetenschappen.museum":true,"naumburg.museum":true,"naval.museum":true,"nebraska.museum":true,"neues.museum":true,"newhampshire.museum":true,"newjersey.museum":true,"newmexico.museum":true,"newport.museum":true,"newspaper.museum":true,"newyork.museum":true,"niepce.museum":true,"norfolk.museum":true,"north.museum":true,"nrw.museum":true,"nuernberg.museum":true,"nuremberg.museum":true,"nyc.museum":true,"nyny.museum":true,"oceanographic.museum":true,"oceanographique.museum":true,"omaha.museum":true,"online.museum":true,"ontario.museum":true,"openair.museum":true,"oregon.museum":true,"oregontrail.museum":true,"otago.museum":true,"oxford.museum":true,"pacific.museum":true,"paderborn.museum":true,"palace.museum":true,"paleo.museum":true,"palmsprings.museum":true,"panama.museum":true,"paris.museum":true,"pasadena.museum":true,"pharmacy.museum":true,"philadelphia.museum":true,"philadelphiaarea.museum":true,"philately.museum":true,"phoenix.museum":true,"photography.museum":true,"pilots.museum":true,"pittsburgh.museum":true,"planetarium.museum":true,"plantation.museum":true,"plants.museum":true,"plaza.museum":true,"portal.museum":true,"portland.museum":true,"portlligat.museum":true,"posts-and-telecommunications.museum":true,"preservation.museum":true,"presidio.museum":true,"press.museum":true,"project.museum":true,"public.museum":true,"pubol.museum":true,"quebec.museum":true,"railroad.museum":true,"railway.museum":true,"research.museum":true,"resistance.museum":true,"riodejaneiro.museum":true,"rochester.museum":true,"rockart.museum":true,"roma.museum":true,"russia.museum":true,"saintlouis.museum":true,"salem.museum":true,"salvadordali.museum":true,"salzburg.museum":true,"sandiego.museum":true,"sanfrancisco.museum":true,"santabarbara.museum":true,"santacruz.museum":true,"santafe.museum":true,"saskatchewan.museum":true,"satx.museum":true,"savannahga.museum":true,"schlesisches.museum":true,"schoenbrunn.museum":true,"schokoladen.museum":true,"school.museum":true,"schweiz.museum":true,"science.museum":true,"scienceandhistory.museum":true,"scienceandindustry.museum":true,"sciencecenter.museum":true,"sciencecenters.museum":true,"science-fiction.museum":true,"sciencehistory.museum":true,"sciences.museum":true,"sciencesnaturelles.museum":true,"scotland.museum":true,"seaport.museum":true,"settlement.museum":true,"settlers.museum":true,"shell.museum":true,"sherbrooke.museum":true,"sibenik.museum":true,"silk.museum":true,"ski.museum":true,"skole.museum":true,"society.museum":true,"sologne.museum":true,"soundandvision.museum":true,"southcarolina.museum":true,"southwest.museum":true,"space.museum":true,"spy.museum":true,"square.museum":true,"stadt.museum":true,"stalbans.museum":true,"starnberg.museum":true,"state.museum":true,"stateofdelaware.museum":true,"station.museum":true,"steam.museum":true,"steiermark.museum":true,"stjohn.museum":true,"stockholm.museum":true,"stpetersburg.museum":true,"stuttgart.museum":true,"suisse.museum":true,"surgeonshall.museum":true,"surrey.museum":true,"svizzera.museum":true,"sweden.museum":true,"sydney.museum":true,"tank.museum":true,"tcm.museum":true,"technology.museum":true,"telekommunikation.museum":true,"television.museum":true,"texas.museum":true,"textile.museum":true,"theater.museum":true,"time.museum":true,"timekeeping.museum":true,"topology.museum":true,"torino.museum":true,"touch.museum":true,"town.museum":true,"transport.museum":true,"tree.museum":true,"trolley.museum":true,"trust.museum":true,"trustee.museum":true,"uhren.museum":true,"ulm.museum":true,"undersea.museum":true,"university.museum":true,"usa.museum":true,"usantiques.museum":true,"usarts.museum":true,"uscountryestate.museum":true,"usculture.museum":true,"usdecorativearts.museum":true,"usgarden.museum":true,"ushistory.museum":true,"ushuaia.museum":true,"uslivinghistory.museum":true,"utah.museum":true,"uvic.museum":true,"valley.museum":true,"vantaa.museum":true,"versailles.museum":true,"viking.museum":true,"village.museum":true,"virginia.museum":true,"virtual.museum":true,"virtuel.museum":true,"vlaanderen.museum":true,"volkenkunde.museum":true,"wales.museum":true,"wallonie.museum":true,"war.museum":true,"washingtondc.museum":true,"watchandclock.museum":true,"watch-and-clock.museum":true,"western.museum":true,"westfalen.museum":true,"whaling.museum":true,"wildlife.museum":true,"williamsburg.museum":true,"windmill.museum":true,"workshop.museum":true,"york.museum":true,"yorkshire.museum":true,"yosemite.museum":true,"youth.museum":true,"zoological.museum":true,"zoology.museum":true,"xn--9dbhblg6di.museum":true,"xn--h1aegh.museum":true,"mv":true,"aero.mv":true,"biz.mv":true,"com.mv":true,"coop.mv":true,"edu.mv":true,"gov.mv":true,"info.mv":true,"int.mv":true,"mil.mv":true,"museum.mv":true,"name.mv":true,"net.mv":true,"org.mv":true,"pro.mv":true,"mw":true,"ac.mw":true,"biz.mw":true,"co.mw":true,"com.mw":true,"coop.mw":true,"edu.mw":true,"gov.mw":true,"int.mw":true,"museum.mw":true,"net.mw":true,"org.mw":true,"mx":true,"com.mx":true,"org.mx":true,"gob.mx":true,"edu.mx":true,"net.mx":true,"my":true,"com.my":true,"net.my":true,"org.my":true,"gov.my":true,"edu.my":true,"mil.my":true,"name.my":true,"*.mz":true,"teledata.mz":false,"na":true,"info.na":true,"pro.na":true,"name.na":true,"school.na":true,"or.na":true,"dr.na":true,"us.na":true,"mx.na":true,"ca.na":true,"in.na":true,"cc.na":true,"tv.na":true,"ws.na":true,"mobi.na":true,"co.na":true,"com.na":true,"org.na":true,"name":true,"nc":true,"asso.nc":true,"ne":true,"net":true,"nf":true,"com.nf":true,"net.nf":true,"per.nf":true,"rec.nf":true,"web.nf":true,"arts.nf":true,"firm.nf":true,"info.nf":true,"other.nf":true,"store.nf":true,"ng":true,"com.ng":true,"edu.ng":true,"name.ng":true,"net.ng":true,"org.ng":true,"sch.ng":true,"gov.ng":true,"mil.ng":true,"mobi.ng":true,"*.ni":true,"nl":true,"bv.nl":true,"no":true,"fhs.no":true,"vgs.no":true,"fylkesbibl.no":true,"folkebibl.no":true,"museum.no":true,"idrett.no":true,"priv.no":true,"mil.no":true,"stat.no":true,"dep.no":true,"kommune.no":true,"herad.no":true,"aa.no":true,"ah.no":true,"bu.no":true,"fm.no":true,"hl.no":true,"hm.no":true,"jan-mayen.no":true,"mr.no":true,"nl.no":true,"nt.no":true,"of.no":true,"ol.no":true,"oslo.no":true,"rl.no":true,"sf.no":true,"st.no":true,"svalbard.no":true,"tm.no":true,"tr.no":true,"va.no":true,"vf.no":true,"gs.aa.no":true,"gs.ah.no":true,"gs.bu.no":true,"gs.fm.no":true,"gs.hl.no":true,"gs.hm.no":true,"gs.jan-mayen.no":true,"gs.mr.no":true,"gs.nl.no":true,"gs.nt.no":true,"gs.of.no":true,"gs.ol.no":true,"gs.oslo.no":true,"gs.rl.no":true,"gs.sf.no":true,"gs.st.no":true,"gs.svalbard.no":true,"gs.tm.no":true,"gs.tr.no":true,"gs.va.no":true,"gs.vf.no":true,"akrehamn.no":true,"xn--krehamn-dxa.no":true,"algard.no":true,"xn--lgrd-poac.no":true,"arna.no":true,"brumunddal.no":true,"bryne.no":true,"bronnoysund.no":true,"xn--brnnysund-m8ac.no":true,"drobak.no":true,"xn--drbak-wua.no":true,"egersund.no":true,"fetsund.no":true,"floro.no":true,"xn--flor-jra.no":true,"fredrikstad.no":true,"hokksund.no":true,"honefoss.no":true,"xn--hnefoss-q1a.no":true,"jessheim.no":true,"jorpeland.no":true,"xn--jrpeland-54a.no":true,"kirkenes.no":true,"kopervik.no":true,"krokstadelva.no":true,"langevag.no":true,"xn--langevg-jxa.no":true,"leirvik.no":true,"mjondalen.no":true,"xn--mjndalen-64a.no":true,"mo-i-rana.no":true,"mosjoen.no":true,"xn--mosjen-eya.no":true,"nesoddtangen.no":true,"orkanger.no":true,"osoyro.no":true,"xn--osyro-wua.no":true,"raholt.no":true,"xn--rholt-mra.no":true,"sandnessjoen.no":true,"xn--sandnessjen-ogb.no":true,"skedsmokorset.no":true,"slattum.no":true,"spjelkavik.no":true,"stathelle.no":true,"stavern.no":true,"stjordalshalsen.no":true,"xn--stjrdalshalsen-sqb.no":true,"tananger.no":true,"tranby.no":true,"vossevangen.no":true,"afjord.no":true,"xn--fjord-lra.no":true,"agdenes.no":true,"al.no":true,"xn--l-1fa.no":true,"alesund.no":true,"xn--lesund-hua.no":true,"alstahaug.no":true,"alta.no":true,"xn--lt-liac.no":true,"alaheadju.no":true,"xn--laheadju-7ya.no":true,"alvdal.no":true,"amli.no":true,"xn--mli-tla.no":true,"amot.no":true,"xn--mot-tla.no":true,"andebu.no":true,"andoy.no":true,"xn--andy-ira.no":true,"andasuolo.no":true,"ardal.no":true,"xn--rdal-poa.no":true,"aremark.no":true,"arendal.no":true,"xn--s-1fa.no":true,"aseral.no":true,"xn--seral-lra.no":true,"asker.no":true,"askim.no":true,"askvoll.no":true,"askoy.no":true,"xn--asky-ira.no":true,"asnes.no":true,"xn--snes-poa.no":true,"audnedaln.no":true,"aukra.no":true,"aure.no":true,"aurland.no":true,"aurskog-holand.no":true,"xn--aurskog-hland-jnb.no":true,"austevoll.no":true,"austrheim.no":true,"averoy.no":true,"xn--avery-yua.no":true,"balestrand.no":true,"ballangen.no":true,"balat.no":true,"xn--blt-elab.no":true,"balsfjord.no":true,"bahccavuotna.no":true,"xn--bhccavuotna-k7a.no":true,"bamble.no":true,"bardu.no":true,"beardu.no":true,"beiarn.no":true,"bajddar.no":true,"xn--bjddar-pta.no":true,"baidar.no":true,"xn--bidr-5nac.no":true,"berg.no":true,"bergen.no":true,"berlevag.no":true,"xn--berlevg-jxa.no":true,"bearalvahki.no":true,"xn--bearalvhki-y4a.no":true,"bindal.no":true,"birkenes.no":true,"bjarkoy.no":true,"xn--bjarky-fya.no":true,"bjerkreim.no":true,"bjugn.no":true,"bodo.no":true,"xn--bod-2na.no":true,"badaddja.no":true,"xn--bdddj-mrabd.no":true,"budejju.no":true,"bokn.no":true,"bremanger.no":true,"bronnoy.no":true,"xn--brnny-wuac.no":true,"bygland.no":true,"bykle.no":true,"barum.no":true,"xn--brum-voa.no":true,"bo.telemark.no":true,"xn--b-5ga.telemark.no":true,"bo.nordland.no":true,"xn--b-5ga.nordland.no":true,"bievat.no":true,"xn--bievt-0qa.no":true,"bomlo.no":true,"xn--bmlo-gra.no":true,"batsfjord.no":true,"xn--btsfjord-9za.no":true,"bahcavuotna.no":true,"xn--bhcavuotna-s4a.no":true,"dovre.no":true,"drammen.no":true,"drangedal.no":true,"dyroy.no":true,"xn--dyry-ira.no":true,"donna.no":true,"xn--dnna-gra.no":true,"eid.no":true,"eidfjord.no":true,"eidsberg.no":true,"eidskog.no":true,"eidsvoll.no":true,"eigersund.no":true,"elverum.no":true,"enebakk.no":true,"engerdal.no":true,"etne.no":true,"etnedal.no":true,"evenes.no":true,"evenassi.no":true,"xn--eveni-0qa01ga.no":true,"evje-og-hornnes.no":true,"farsund.no":true,"fauske.no":true,"fuossko.no":true,"fuoisku.no":true,"fedje.no":true,"fet.no":true,"finnoy.no":true,"xn--finny-yua.no":true,"fitjar.no":true,"fjaler.no":true,"fjell.no":true,"flakstad.no":true,"flatanger.no":true,"flekkefjord.no":true,"flesberg.no":true,"flora.no":true,"fla.no":true,"xn--fl-zia.no":true,"folldal.no":true,"forsand.no":true,"fosnes.no":true,"frei.no":true,"frogn.no":true,"froland.no":true,"frosta.no":true,"frana.no":true,"xn--frna-woa.no":true,"froya.no":true,"xn--frya-hra.no":true,"fusa.no":true,"fyresdal.no":true,"forde.no":true,"xn--frde-gra.no":true,"gamvik.no":true,"gangaviika.no":true,"xn--ggaviika-8ya47h.no":true,"gaular.no":true,"gausdal.no":true,"gildeskal.no":true,"xn--gildeskl-g0a.no":true,"giske.no":true,"gjemnes.no":true,"gjerdrum.no":true,"gjerstad.no":true,"gjesdal.no":true,"gjovik.no":true,"xn--gjvik-wua.no":true,"gloppen.no":true,"gol.no":true,"gran.no":true,"grane.no":true,"granvin.no":true,"gratangen.no":true,"grimstad.no":true,"grong.no":true,"kraanghke.no":true,"xn--kranghke-b0a.no":true,"grue.no":true,"gulen.no":true,"hadsel.no":true,"halden.no":true,"halsa.no":true,"hamar.no":true,"hamaroy.no":true,"habmer.no":true,"xn--hbmer-xqa.no":true,"hapmir.no":true,"xn--hpmir-xqa.no":true,"hammerfest.no":true,"hammarfeasta.no":true,"xn--hmmrfeasta-s4ac.no":true,"haram.no":true,"hareid.no":true,"harstad.no":true,"hasvik.no":true,"aknoluokta.no":true,"xn--koluokta-7ya57h.no":true,"hattfjelldal.no":true,"aarborte.no":true,"haugesund.no":true,"hemne.no":true,"hemnes.no":true,"hemsedal.no":true,"heroy.more-og-romsdal.no":true,"xn--hery-ira.xn--mre-og-romsdal-qqb.no":true,"heroy.nordland.no":true,"xn--hery-ira.nordland.no":true,"hitra.no":true,"hjartdal.no":true,"hjelmeland.no":true,"hobol.no":true,"xn--hobl-ira.no":true,"hof.no":true,"hol.no":true,"hole.no":true,"holmestrand.no":true,"holtalen.no":true,"xn--holtlen-hxa.no":true,"hornindal.no":true,"horten.no":true,"hurdal.no":true,"hurum.no":true,"hvaler.no":true,"hyllestad.no":true,"hagebostad.no":true,"xn--hgebostad-g3a.no":true,"hoyanger.no":true,"xn--hyanger-q1a.no":true,"hoylandet.no":true,"xn--hylandet-54a.no":true,"ha.no":true,"xn--h-2fa.no":true,"ibestad.no":true,"inderoy.no":true,"xn--indery-fya.no":true,"iveland.no":true,"jevnaker.no":true,"jondal.no":true,"jolster.no":true,"xn--jlster-bya.no":true,"karasjok.no":true,"karasjohka.no":true,"xn--krjohka-hwab49j.no":true,"karlsoy.no":true,"galsa.no":true,"xn--gls-elac.no":true,"karmoy.no":true,"xn--karmy-yua.no":true,"kautokeino.no":true,"guovdageaidnu.no":true,"klepp.no":true,"klabu.no":true,"xn--klbu-woa.no":true,"kongsberg.no":true,"kongsvinger.no":true,"kragero.no":true,"xn--krager-gya.no":true,"kristiansand.no":true,"kristiansund.no":true,"krodsherad.no":true,"xn--krdsherad-m8a.no":true,"kvalsund.no":true,"rahkkeravju.no":true,"xn--rhkkervju-01af.no":true,"kvam.no":true,"kvinesdal.no":true,"kvinnherad.no":true,"kviteseid.no":true,"kvitsoy.no":true,"xn--kvitsy-fya.no":true,"kvafjord.no":true,"xn--kvfjord-nxa.no":true,"giehtavuoatna.no":true,"kvanangen.no":true,"xn--kvnangen-k0a.no":true,"navuotna.no":true,"xn--nvuotna-hwa.no":true,"kafjord.no":true,"xn--kfjord-iua.no":true,"gaivuotna.no":true,"xn--givuotna-8ya.no":true,"larvik.no":true,"lavangen.no":true,"lavagis.no":true,"loabat.no":true,"xn--loabt-0qa.no":true,"lebesby.no":true,"davvesiida.no":true,"leikanger.no":true,"leirfjord.no":true,"leka.no":true,"leksvik.no":true,"lenvik.no":true,"leangaviika.no":true,"xn--leagaviika-52b.no":true,"lesja.no":true,"levanger.no":true,"lier.no":true,"lierne.no":true,"lillehammer.no":true,"lillesand.no":true,"lindesnes.no":true,"lindas.no":true,"xn--linds-pra.no":true,"lom.no":true,"loppa.no":true,"lahppi.no":true,"xn--lhppi-xqa.no":true,"lund.no":true,"lunner.no":true,"luroy.no":true,"xn--lury-ira.no":true,"luster.no":true,"lyngdal.no":true,"lyngen.no":true,"ivgu.no":true,"lardal.no":true,"lerdal.no":true,"xn--lrdal-sra.no":true,"lodingen.no":true,"xn--ldingen-q1a.no":true,"lorenskog.no":true,"xn--lrenskog-54a.no":true,"loten.no":true,"xn--lten-gra.no":true,"malvik.no":true,"masoy.no":true,"xn--msy-ula0h.no":true,"muosat.no":true,"xn--muost-0qa.no":true,"mandal.no":true,"marker.no":true,"marnardal.no":true,"masfjorden.no":true,"meland.no":true,"meldal.no":true,"melhus.no":true,"meloy.no":true,"xn--mely-ira.no":true,"meraker.no":true,"xn--merker-kua.no":true,"moareke.no":true,"xn--moreke-jua.no":true,"midsund.no":true,"midtre-gauldal.no":true,"modalen.no":true,"modum.no":true,"molde.no":true,"moskenes.no":true,"moss.no":true,"mosvik.no":true,"malselv.no":true,"xn--mlselv-iua.no":true,"malatvuopmi.no":true,"xn--mlatvuopmi-s4a.no":true,"namdalseid.no":true,"aejrie.no":true,"namsos.no":true,"namsskogan.no":true,"naamesjevuemie.no":true,"xn--nmesjevuemie-tcba.no":true,"laakesvuemie.no":true,"nannestad.no":true,"narvik.no":true,"narviika.no":true,"naustdal.no":true,"nedre-eiker.no":true,"nes.akershus.no":true,"nes.buskerud.no":true,"nesna.no":true,"nesodden.no":true,"nesseby.no":true,"unjarga.no":true,"xn--unjrga-rta.no":true,"nesset.no":true,"nissedal.no":true,"nittedal.no":true,"nord-aurdal.no":true,"nord-fron.no":true,"nord-odal.no":true,"norddal.no":true,"nordkapp.no":true,"davvenjarga.no":true,"xn--davvenjrga-y4a.no":true,"nordre-land.no":true,"nordreisa.no":true,"raisa.no":true,"xn--risa-5na.no":true,"nore-og-uvdal.no":true,"notodden.no":true,"naroy.no":true,"xn--nry-yla5g.no":true,"notteroy.no":true,"xn--nttery-byae.no":true,"odda.no":true,"oksnes.no":true,"xn--ksnes-uua.no":true,"oppdal.no":true,"oppegard.no":true,"xn--oppegrd-ixa.no":true,"orkdal.no":true,"orland.no":true,"xn--rland-uua.no":true,"orskog.no":true,"xn--rskog-uua.no":true,"orsta.no":true,"xn--rsta-fra.no":true,"os.hedmark.no":true,"os.hordaland.no":true,"osen.no":true,"osteroy.no":true,"xn--ostery-fya.no":true,"ostre-toten.no":true,"xn--stre-toten-zcb.no":true,"overhalla.no":true,"ovre-eiker.no":true,"xn--vre-eiker-k8a.no":true,"oyer.no":true,"xn--yer-zna.no":true,"oygarden.no":true,"xn--ygarden-p1a.no":true,"oystre-slidre.no":true,"xn--ystre-slidre-ujb.no":true,"porsanger.no":true,"porsangu.no":true,"xn--porsgu-sta26f.no":true,"porsgrunn.no":true,"radoy.no":true,"xn--rady-ira.no":true,"rakkestad.no":true,"rana.no":true,"ruovat.no":true,"randaberg.no":true,"rauma.no":true,"rendalen.no":true,"rennebu.no":true,"rennesoy.no":true,"xn--rennesy-v1a.no":true,"rindal.no":true,"ringebu.no":true,"ringerike.no":true,"ringsaker.no":true,"rissa.no":true,"risor.no":true,"xn--risr-ira.no":true,"roan.no":true,"rollag.no":true,"rygge.no":true,"ralingen.no":true,"xn--rlingen-mxa.no":true,"rodoy.no":true,"xn--rdy-0nab.no":true,"romskog.no":true,"xn--rmskog-bya.no":true,"roros.no":true,"xn--rros-gra.no":true,"rost.no":true,"xn--rst-0na.no":true,"royken.no":true,"xn--ryken-vua.no":true,"royrvik.no":true,"xn--ryrvik-bya.no":true,"rade.no":true,"xn--rde-ula.no":true,"salangen.no":true,"siellak.no":true,"saltdal.no":true,"salat.no":true,"xn--slt-elab.no":true,"xn--slat-5na.no":true,"samnanger.no":true,"sande.more-og-romsdal.no":true,"sande.xn--mre-og-romsdal-qqb.no":true,"sande.vestfold.no":true,"sandefjord.no":true,"sandnes.no":true,"sandoy.no":true,"xn--sandy-yua.no":true,"sarpsborg.no":true,"sauda.no":true,"sauherad.no":true,"sel.no":true,"selbu.no":true,"selje.no":true,"seljord.no":true,"sigdal.no":true,"siljan.no":true,"sirdal.no":true,"skaun.no":true,"skedsmo.no":true,"ski.no":true,"skien.no":true,"skiptvet.no":true,"skjervoy.no":true,"xn--skjervy-v1a.no":true,"skierva.no":true,"xn--skierv-uta.no":true,"skjak.no":true,"xn--skjk-soa.no":true,"skodje.no":true,"skanland.no":true,"xn--sknland-fxa.no":true,"skanit.no":true,"xn--sknit-yqa.no":true,"smola.no":true,"xn--smla-hra.no":true,"snillfjord.no":true,"snasa.no":true,"xn--snsa-roa.no":true,"snoasa.no":true,"snaase.no":true,"xn--snase-nra.no":true,"sogndal.no":true,"sokndal.no":true,"sola.no":true,"solund.no":true,"songdalen.no":true,"sortland.no":true,"spydeberg.no":true,"stange.no":true,"stavanger.no":true,"steigen.no":true,"steinkjer.no":true,"stjordal.no":true,"xn--stjrdal-s1a.no":true,"stokke.no":true,"stor-elvdal.no":true,"stord.no":true,"stordal.no":true,"storfjord.no":true,"omasvuotna.no":true,"strand.no":true,"stranda.no":true,"stryn.no":true,"sula.no":true,"suldal.no":true,"sund.no":true,"sunndal.no":true,"surnadal.no":true,"sveio.no":true,"svelvik.no":true,"sykkylven.no":true,"sogne.no":true,"xn--sgne-gra.no":true,"somna.no":true,"xn--smna-gra.no":true,"sondre-land.no":true,"xn--sndre-land-0cb.no":true,"sor-aurdal.no":true,"xn--sr-aurdal-l8a.no":true,"sor-fron.no":true,"xn--sr-fron-q1a.no":true,"sor-odal.no":true,"xn--sr-odal-q1a.no":true,"sor-varanger.no":true,"xn--sr-varanger-ggb.no":true,"matta-varjjat.no":true,"xn--mtta-vrjjat-k7af.no":true,"sorfold.no":true,"xn--srfold-bya.no":true,"sorreisa.no":true,"xn--srreisa-q1a.no":true,"sorum.no":true,"xn--srum-gra.no":true,"tana.no":true,"deatnu.no":true,"time.no":true,"tingvoll.no":true,"tinn.no":true,"tjeldsund.no":true,"dielddanuorri.no":true,"tjome.no":true,"xn--tjme-hra.no":true,"tokke.no":true,"tolga.no":true,"torsken.no":true,"tranoy.no":true,"xn--trany-yua.no":true,"tromso.no":true,"xn--troms-zua.no":true,"tromsa.no":true,"romsa.no":true,"trondheim.no":true,"troandin.no":true,"trysil.no":true,"trana.no":true,"xn--trna-woa.no":true,"trogstad.no":true,"xn--trgstad-r1a.no":true,"tvedestrand.no":true,"tydal.no":true,"tynset.no":true,"tysfjord.no":true,"divtasvuodna.no":true,"divttasvuotna.no":true,"tysnes.no":true,"tysvar.no":true,"xn--tysvr-vra.no":true,"tonsberg.no":true,"xn--tnsberg-q1a.no":true,"ullensaker.no":true,"ullensvang.no":true,"ulvik.no":true,"utsira.no":true,"vadso.no":true,"xn--vads-jra.no":true,"cahcesuolo.no":true,"xn--hcesuolo-7ya35b.no":true,"vaksdal.no":true,"valle.no":true,"vang.no":true,"vanylven.no":true,"vardo.no":true,"xn--vard-jra.no":true,"varggat.no":true,"xn--vrggt-xqad.no":true,"vefsn.no":true,"vaapste.no":true,"vega.no":true,"vegarshei.no":true,"xn--vegrshei-c0a.no":true,"vennesla.no":true,"verdal.no":true,"verran.no":true,"vestby.no":true,"vestnes.no":true,"vestre-slidre.no":true,"vestre-toten.no":true,"vestvagoy.no":true,"xn--vestvgy-ixa6o.no":true,"vevelstad.no":true,"vik.no":true,"vikna.no":true,"vindafjord.no":true,"volda.no":true,"voss.no":true,"varoy.no":true,"xn--vry-yla5g.no":true,"vagan.no":true,"xn--vgan-qoa.no":true,"voagat.no":true,"vagsoy.no":true,"xn--vgsy-qoa0j.no":true,"vaga.no":true,"xn--vg-yiab.no":true,"valer.ostfold.no":true,"xn--vler-qoa.xn--stfold-9xa.no":true,"valer.hedmark.no":true,"xn--vler-qoa.hedmark.no":true,"*.np":true,"nr":true,"biz.nr":true,"info.nr":true,"gov.nr":true,"edu.nr":true,"org.nr":true,"net.nr":true,"com.nr":true,"nu":true,"nz":true,"ac.nz":true,"co.nz":true,"cri.nz":true,"geek.nz":true,"gen.nz":true,"govt.nz":true,"health.nz":true,"iwi.nz":true,"kiwi.nz":true,"maori.nz":true,"mil.nz":true,"xn--mori-qsa.nz":true,"net.nz":true,"org.nz":true,"parliament.nz":true,"school.nz":true,"om":true,"co.om":true,"com.om":true,"edu.om":true,"gov.om":true,"med.om":true,"museum.om":true,"net.om":true,"org.om":true,"pro.om":true,"org":true,"pa":true,"ac.pa":true,"gob.pa":true,"com.pa":true,"org.pa":true,"sld.pa":true,"edu.pa":true,"net.pa":true,"ing.pa":true,"abo.pa":true,"med.pa":true,"nom.pa":true,"pe":true,"edu.pe":true,"gob.pe":true,"nom.pe":true,"mil.pe":true,"org.pe":true,"com.pe":true,"net.pe":true,"pf":true,"com.pf":true,"org.pf":true,"edu.pf":true,"*.pg":true,"ph":true,"com.ph":true,"net.ph":true,"org.ph":true,"gov.ph":true,"edu.ph":true,"ngo.ph":true,"mil.ph":true,"i.ph":true,"pk":true,"com.pk":true,"net.pk":true,"edu.pk":true,"org.pk":true,"fam.pk":true,"biz.pk":true,"web.pk":true,"gov.pk":true,"gob.pk":true,"gok.pk":true,"gon.pk":true,"gop.pk":true,"gos.pk":true,"info.pk":true,"pl":true,"com.pl":true,"net.pl":true,"org.pl":true,"aid.pl":true,"agro.pl":true,"atm.pl":true,"auto.pl":true,"biz.pl":true,"edu.pl":true,"gmina.pl":true,"gsm.pl":true,"info.pl":true,"mail.pl":true,"miasta.pl":true,"media.pl":true,"mil.pl":true,"nieruchomosci.pl":true,"nom.pl":true,"pc.pl":true,"powiat.pl":true,"priv.pl":true,"realestate.pl":true,"rel.pl":true,"sex.pl":true,"shop.pl":true,"sklep.pl":true,"sos.pl":true,"szkola.pl":true,"targi.pl":true,"tm.pl":true,"tourism.pl":true,"travel.pl":true,"turystyka.pl":true,"gov.pl":true,"ap.gov.pl":true,"ic.gov.pl":true,"is.gov.pl":true,"us.gov.pl":true,"kmpsp.gov.pl":true,"kppsp.gov.pl":true,"kwpsp.gov.pl":true,"psp.gov.pl":true,"wskr.gov.pl":true,"kwp.gov.pl":true,"mw.gov.pl":true,"ug.gov.pl":true,"um.gov.pl":true,"umig.gov.pl":true,"ugim.gov.pl":true,"upow.gov.pl":true,"uw.gov.pl":true,"starostwo.gov.pl":true,"pa.gov.pl":true,"po.gov.pl":true,"psse.gov.pl":true,"pup.gov.pl":true,"rzgw.gov.pl":true,"sa.gov.pl":true,"so.gov.pl":true,"sr.gov.pl":true,"wsa.gov.pl":true,"sko.gov.pl":true,"uzs.gov.pl":true,"wiih.gov.pl":true,"winb.gov.pl":true,"pinb.gov.pl":true,"wios.gov.pl":true,"witd.gov.pl":true,"wzmiuw.gov.pl":true,"piw.gov.pl":true,"wiw.gov.pl":true,"griw.gov.pl":true,"wif.gov.pl":true,"oum.gov.pl":true,"sdn.gov.pl":true,"zp.gov.pl":true,"uppo.gov.pl":true,"mup.gov.pl":true,"wuoz.gov.pl":true,"konsulat.gov.pl":true,"oirm.gov.pl":true,"augustow.pl":true,"babia-gora.pl":true,"bedzin.pl":true,"beskidy.pl":true,"bialowieza.pl":true,"bialystok.pl":true,"bielawa.pl":true,"bieszczady.pl":true,"boleslawiec.pl":true,"bydgoszcz.pl":true,"bytom.pl":true,"cieszyn.pl":true,"czeladz.pl":true,"czest.pl":true,"dlugoleka.pl":true,"elblag.pl":true,"elk.pl":true,"glogow.pl":true,"gniezno.pl":true,"gorlice.pl":true,"grajewo.pl":true,"ilawa.pl":true,"jaworzno.pl":true,"jelenia-gora.pl":true,"jgora.pl":true,"kalisz.pl":true,"kazimierz-dolny.pl":true,"karpacz.pl":true,"kartuzy.pl":true,"kaszuby.pl":true,"katowice.pl":true,"kepno.pl":true,"ketrzyn.pl":true,"klodzko.pl":true,"kobierzyce.pl":true,"kolobrzeg.pl":true,"konin.pl":true,"konskowola.pl":true,"kutno.pl":true,"lapy.pl":true,"lebork.pl":true,"legnica.pl":true,"lezajsk.pl":true,"limanowa.pl":true,"lomza.pl":true,"lowicz.pl":true,"lubin.pl":true,"lukow.pl":true,"malbork.pl":true,"malopolska.pl":true,"mazowsze.pl":true,"mazury.pl":true,"mielec.pl":true,"mielno.pl":true,"mragowo.pl":true,"naklo.pl":true,"nowaruda.pl":true,"nysa.pl":true,"olawa.pl":true,"olecko.pl":true,"olkusz.pl":true,"olsztyn.pl":true,"opoczno.pl":true,"opole.pl":true,"ostroda.pl":true,"ostroleka.pl":true,"ostrowiec.pl":true,"ostrowwlkp.pl":true,"pila.pl":true,"pisz.pl":true,"podhale.pl":true,"podlasie.pl":true,"polkowice.pl":true,"pomorze.pl":true,"pomorskie.pl":true,"prochowice.pl":true,"pruszkow.pl":true,"przeworsk.pl":true,"pulawy.pl":true,"radom.pl":true,"rawa-maz.pl":true,"rybnik.pl":true,"rzeszow.pl":true,"sanok.pl":true,"sejny.pl":true,"slask.pl":true,"slupsk.pl":true,"sosnowiec.pl":true,"stalowa-wola.pl":true,"skoczow.pl":true,"starachowice.pl":true,"stargard.pl":true,"suwalki.pl":true,"swidnica.pl":true,"swiebodzin.pl":true,"swinoujscie.pl":true,"szczecin.pl":true,"szczytno.pl":true,"tarnobrzeg.pl":true,"tgory.pl":true,"turek.pl":true,"tychy.pl":true,"ustka.pl":true,"walbrzych.pl":true,"warmia.pl":true,"warszawa.pl":true,"waw.pl":true,"wegrow.pl":true,"wielun.pl":true,"wlocl.pl":true,"wloclawek.pl":true,"wodzislaw.pl":true,"wolomin.pl":true,"wroclaw.pl":true,"zachpomor.pl":true,"zagan.pl":true,"zarow.pl":true,"zgora.pl":true,"zgorzelec.pl":true,"pm":true,"pn":true,"gov.pn":true,"co.pn":true,"org.pn":true,"edu.pn":true,"net.pn":true,"post":true,"pr":true,"com.pr":true,"net.pr":true,"org.pr":true,"gov.pr":true,"edu.pr":true,"isla.pr":true,"pro.pr":true,"biz.pr":true,"info.pr":true,"name.pr":true,"est.pr":true,"prof.pr":true,"ac.pr":true,"pro":true,"aca.pro":true,"bar.pro":true,"cpa.pro":true,"jur.pro":true,"law.pro":true,"med.pro":true,"eng.pro":true,"ps":true,"edu.ps":true,"gov.ps":true,"sec.ps":true,"plo.ps":true,"com.ps":true,"org.ps":true,"net.ps":true,"pt":true,"net.pt":true,"gov.pt":true,"org.pt":true,"edu.pt":true,"int.pt":true,"publ.pt":true,"com.pt":true,"nome.pt":true,"pw":true,"co.pw":true,"ne.pw":true,"or.pw":true,"ed.pw":true,"go.pw":true,"belau.pw":true,"py":true,"com.py":true,"coop.py":true,"edu.py":true,"gov.py":true,"mil.py":true,"net.py":true,"org.py":true,"qa":true,"com.qa":true,"edu.qa":true,"gov.qa":true,"mil.qa":true,"name.qa":true,"net.qa":true,"org.qa":true,"sch.qa":true,"re":true,"com.re":true,"asso.re":true,"nom.re":true,"ro":true,"com.ro":true,"org.ro":true,"tm.ro":true,"nt.ro":true,"nom.ro":true,"info.ro":true,"rec.ro":true,"arts.ro":true,"firm.ro":true,"store.ro":true,"www.ro":true,"rs":true,"co.rs":true,"org.rs":true,"edu.rs":true,"ac.rs":true,"gov.rs":true,"in.rs":true,"ru":true,"ac.ru":true,"com.ru":true,"edu.ru":true,"int.ru":true,"net.ru":true,"org.ru":true,"pp.ru":true,"adygeya.ru":true,"altai.ru":true,"amur.ru":true,"arkhangelsk.ru":true,"astrakhan.ru":true,"bashkiria.ru":true,"belgorod.ru":true,"bir.ru":true,"bryansk.ru":true,"buryatia.ru":true,"cbg.ru":true,"chel.ru":true,"chelyabinsk.ru":true,"chita.ru":true,"chukotka.ru":true,"chuvashia.ru":true,"dagestan.ru":true,"dudinka.ru":true,"e-burg.ru":true,"grozny.ru":true,"irkutsk.ru":true,"ivanovo.ru":true,"izhevsk.ru":true,"jar.ru":true,"joshkar-ola.ru":true,"kalmykia.ru":true,"kaluga.ru":true,"kamchatka.ru":true,"karelia.ru":true,"kazan.ru":true,"kchr.ru":true,"kemerovo.ru":true,"khabarovsk.ru":true,"khakassia.ru":true,"khv.ru":true,"kirov.ru":true,"koenig.ru":true,"komi.ru":true,"kostroma.ru":true,"krasnoyarsk.ru":true,"kuban.ru":true,"kurgan.ru":true,"kursk.ru":true,"lipetsk.ru":true,"magadan.ru":true,"mari.ru":true,"mari-el.ru":true,"marine.ru":true,"mordovia.ru":true,"msk.ru":true,"murmansk.ru":true,"nalchik.ru":true,"nnov.ru":true,"nov.ru":true,"novosibirsk.ru":true,"nsk.ru":true,"omsk.ru":true,"orenburg.ru":true,"oryol.ru":true,"palana.ru":true,"penza.ru":true,"perm.ru":true,"ptz.ru":true,"rnd.ru":true,"ryazan.ru":true,"sakhalin.ru":true,"samara.ru":true,"saratov.ru":true,"simbirsk.ru":true,"smolensk.ru":true,"spb.ru":true,"stavropol.ru":true,"stv.ru":true,"surgut.ru":true,"tambov.ru":true,"tatarstan.ru":true,"tom.ru":true,"tomsk.ru":true,"tsaritsyn.ru":true,"tsk.ru":true,"tula.ru":true,"tuva.ru":true,"tver.ru":true,"tyumen.ru":true,"udm.ru":true,"udmurtia.ru":true,"ulan-ude.ru":true,"vladikavkaz.ru":true,"vladimir.ru":true,"vladivostok.ru":true,"volgograd.ru":true,"vologda.ru":true,"voronezh.ru":true,"vrn.ru":true,"vyatka.ru":true,"yakutia.ru":true,"yamal.ru":true,"yaroslavl.ru":true,"yekaterinburg.ru":true,"yuzhno-sakhalinsk.ru":true,"amursk.ru":true,"baikal.ru":true,"cmw.ru":true,"fareast.ru":true,"jamal.ru":true,"kms.ru":true,"k-uralsk.ru":true,"kustanai.ru":true,"kuzbass.ru":true,"magnitka.ru":true,"mytis.ru":true,"nakhodka.ru":true,"nkz.ru":true,"norilsk.ru":true,"oskol.ru":true,"pyatigorsk.ru":true,"rubtsovsk.ru":true,"snz.ru":true,"syzran.ru":true,"vdonsk.ru":true,"zgrad.ru":true,"gov.ru":true,"mil.ru":true,"test.ru":true,"rw":true,"gov.rw":true,"net.rw":true,"edu.rw":true,"ac.rw":true,"com.rw":true,"co.rw":true,"int.rw":true,"mil.rw":true,"gouv.rw":true,"sa":true,"com.sa":true,"net.sa":true,"org.sa":true,"gov.sa":true,"med.sa":true,"pub.sa":true,"edu.sa":true,"sch.sa":true,"sb":true,"com.sb":true,"edu.sb":true,"gov.sb":true,"net.sb":true,"org.sb":true,"sc":true,"com.sc":true,"gov.sc":true,"net.sc":true,"org.sc":true,"edu.sc":true,"sd":true,"com.sd":true,"net.sd":true,"org.sd":true,"edu.sd":true,"med.sd":true,"tv.sd":true,"gov.sd":true,"info.sd":true,"se":true,"a.se":true,"ac.se":true,"b.se":true,"bd.se":true,"brand.se":true,"c.se":true,"d.se":true,"e.se":true,"f.se":true,"fh.se":true,"fhsk.se":true,"fhv.se":true,"g.se":true,"h.se":true,"i.se":true,"k.se":true,"komforb.se":true,"kommunalforbund.se":true,"komvux.se":true,"l.se":true,"lanbib.se":true,"m.se":true,"n.se":true,"naturbruksgymn.se":true,"o.se":true,"org.se":true,"p.se":true,"parti.se":true,"pp.se":true,"press.se":true,"r.se":true,"s.se":true,"t.se":true,"tm.se":true,"u.se":true,"w.se":true,"x.se":true,"y.se":true,"z.se":true,"sg":true,"com.sg":true,"net.sg":true,"org.sg":true,"gov.sg":true,"edu.sg":true,"per.sg":true,"sh":true,"com.sh":true,"net.sh":true,"gov.sh":true,"org.sh":true,"mil.sh":true,"si":true,"sj":true,"sk":true,"sl":true,"com.sl":true,"net.sl":true,"edu.sl":true,"gov.sl":true,"org.sl":true,"sm":true,"sn":true,"art.sn":true,"com.sn":true,"edu.sn":true,"gouv.sn":true,"org.sn":true,"perso.sn":true,"univ.sn":true,"so":true,"com.so":true,"net.so":true,"org.so":true,"sr":true,"st":true,"co.st":true,"com.st":true,"consulado.st":true,"edu.st":true,"embaixada.st":true,"gov.st":true,"mil.st":true,"net.st":true,"org.st":true,"principe.st":true,"saotome.st":true,"store.st":true,"su":true,"adygeya.su":true,"arkhangelsk.su":true,"balashov.su":true,"bashkiria.su":true,"bryansk.su":true,"dagestan.su":true,"grozny.su":true,"ivanovo.su":true,"kalmykia.su":true,"kaluga.su":true,"karelia.su":true,"khakassia.su":true,"krasnodar.su":true,"kurgan.su":true,"lenug.su":true,"mordovia.su":true,"msk.su":true,"murmansk.su":true,"nalchik.su":true,"nov.su":true,"obninsk.su":true,"penza.su":true,"pokrovsk.su":true,"sochi.su":true,"spb.su":true,"togliatti.su":true,"troitsk.su":true,"tula.su":true,"tuva.su":true,"vladikavkaz.su":true,"vladimir.su":true,"vologda.su":true,"sv":true,"com.sv":true,"edu.sv":true,"gob.sv":true,"org.sv":true,"red.sv":true,"sx":true,"gov.sx":true,"sy":true,"edu.sy":true,"gov.sy":true,"net.sy":true,"mil.sy":true,"com.sy":true,"org.sy":true,"sz":true,"co.sz":true,"ac.sz":true,"org.sz":true,"tc":true,"td":true,"tel":true,"tf":true,"tg":true,"th":true,"ac.th":true,"co.th":true,"go.th":true,"in.th":true,"mi.th":true,"net.th":true,"or.th":true,"tj":true,"ac.tj":true,"biz.tj":true,"co.tj":true,"com.tj":true,"edu.tj":true,"go.tj":true,"gov.tj":true,"int.tj":true,"mil.tj":true,"name.tj":true,"net.tj":true,"nic.tj":true,"org.tj":true,"test.tj":true,"web.tj":true,"tk":true,"tl":true,"gov.tl":true,"tm":true,"com.tm":true,"co.tm":true,"org.tm":true,"net.tm":true,"nom.tm":true,"gov.tm":true,"mil.tm":true,"edu.tm":true,"tn":true,"com.tn":true,"ens.tn":true,"fin.tn":true,"gov.tn":true,"ind.tn":true,"intl.tn":true,"nat.tn":true,"net.tn":true,"org.tn":true,"info.tn":true,"perso.tn":true,"tourism.tn":true,"edunet.tn":true,"rnrt.tn":true,"rns.tn":true,"rnu.tn":true,"mincom.tn":true,"agrinet.tn":true,"defense.tn":true,"turen.tn":true,"to":true,"com.to":true,"gov.to":true,"net.to":true,"org.to":true,"edu.to":true,"mil.to":true,"tp":true,"tr":true,"com.tr":true,"info.tr":true,"biz.tr":true,"net.tr":true,"org.tr":true,"web.tr":true,"gen.tr":true,"tv.tr":true,"av.tr":true,"dr.tr":true,"bbs.tr":true,"name.tr":true,"tel.tr":true,"gov.tr":true,"bel.tr":true,"pol.tr":true,"mil.tr":true,"k12.tr":true,"edu.tr":true,"kep.tr":true,"nc.tr":true,"gov.nc.tr":true,"travel":true,"tt":true,"co.tt":true,"com.tt":true,"org.tt":true,"net.tt":true,"biz.tt":true,"info.tt":true,"pro.tt":true,"int.tt":true,"coop.tt":true,"jobs.tt":true,"mobi.tt":true,"travel.tt":true,"museum.tt":true,"aero.tt":true,"name.tt":true,"gov.tt":true,"edu.tt":true,"tv":true,"tw":true,"edu.tw":true,"gov.tw":true,"mil.tw":true,"com.tw":true,"net.tw":true,"org.tw":true,"idv.tw":true,"game.tw":true,"ebiz.tw":true,"club.tw":true,"xn--zf0ao64a.tw":true,"xn--uc0atv.tw":true,"xn--czrw28b.tw":true,"tz":true,"ac.tz":true,"co.tz":true,"go.tz":true,"hotel.tz":true,"info.tz":true,"me.tz":true,"mil.tz":true,"mobi.tz":true,"ne.tz":true,"or.tz":true,"sc.tz":true,"tv.tz":true,"ua":true,"com.ua":true,"edu.ua":true,"gov.ua":true,"in.ua":true,"net.ua":true,"org.ua":true,"cherkassy.ua":true,"cherkasy.ua":true,"chernigov.ua":true,"chernihiv.ua":true,"chernivtsi.ua":true,"chernovtsy.ua":true,"ck.ua":true,"cn.ua":true,"cr.ua":true,"crimea.ua":true,"cv.ua":true,"dn.ua":true,"dnepropetrovsk.ua":true,"dnipropetrovsk.ua":true,"dominic.ua":true,"donetsk.ua":true,"dp.ua":true,"if.ua":true,"ivano-frankivsk.ua":true,"kh.ua":true,"kharkiv.ua":true,"kharkov.ua":true,"kherson.ua":true,"khmelnitskiy.ua":true,"khmelnytskyi.ua":true,"kiev.ua":true,"kirovograd.ua":true,"km.ua":true,"kr.ua":true,"krym.ua":true,"ks.ua":true,"kv.ua":true,"kyiv.ua":true,"lg.ua":true,"lt.ua":true,"lugansk.ua":true,"lutsk.ua":true,"lv.ua":true,"lviv.ua":true,"mk.ua":true,"mykolaiv.ua":true,"nikolaev.ua":true,"od.ua":true,"odesa.ua":true,"odessa.ua":true,"pl.ua":true,"poltava.ua":true,"rivne.ua":true,"rovno.ua":true,"rv.ua":true,"sb.ua":true,"sebastopol.ua":true,"sevastopol.ua":true,"sm.ua":true,"sumy.ua":true,"te.ua":true,"ternopil.ua":true,"uz.ua":true,"uzhgorod.ua":true,"vinnica.ua":true,"vinnytsia.ua":true,"vn.ua":true,"volyn.ua":true,"yalta.ua":true,"zaporizhzhe.ua":true,"zaporizhzhia.ua":true,"zhitomir.ua":true,"zhytomyr.ua":true,"zp.ua":true,"zt.ua":true,"ug":true,"co.ug":true,"or.ug":true,"ac.ug":true,"sc.ug":true,"go.ug":true,"ne.ug":true,"com.ug":true,"org.ug":true,"uk":true,"ac.uk":true,"co.uk":true,"gov.uk":true,"ltd.uk":true,"me.uk":true,"net.uk":true,"nhs.uk":true,"org.uk":true,"plc.uk":true,"police.uk":true,"*.sch.uk":true,"us":true,"dni.us":true,"fed.us":true,"isa.us":true,"kids.us":true,"nsn.us":true,"ak.us":true,"al.us":true,"ar.us":true,"as.us":true,"az.us":true,"ca.us":true,"co.us":true,"ct.us":true,"dc.us":true,"de.us":true,"fl.us":true,"ga.us":true,"gu.us":true,"hi.us":true,"ia.us":true,"id.us":true,"il.us":true,"in.us":true,"ks.us":true,"ky.us":true,"la.us":true,"ma.us":true,"md.us":true,"me.us":true,"mi.us":true,"mn.us":true,"mo.us":true,"ms.us":true,"mt.us":true,"nc.us":true,"nd.us":true,"ne.us":true,"nh.us":true,"nj.us":true,"nm.us":true,"nv.us":true,"ny.us":true,"oh.us":true,"ok.us":true,"or.us":true,"pa.us":true,"pr.us":true,"ri.us":true,"sc.us":true,"sd.us":true,"tn.us":true,"tx.us":true,"ut.us":true,"vi.us":true,"vt.us":true,"va.us":true,"wa.us":true,"wi.us":true,"wv.us":true,"wy.us":true,"k12.ak.us":true,"k12.al.us":true,"k12.ar.us":true,"k12.as.us":true,"k12.az.us":true,"k12.ca.us":true,"k12.co.us":true,"k12.ct.us":true,"k12.dc.us":true,"k12.de.us":true,"k12.fl.us":true,"k12.ga.us":true,"k12.gu.us":true,"k12.ia.us":true,"k12.id.us":true,"k12.il.us":true,"k12.in.us":true,"k12.ks.us":true,"k12.ky.us":true,"k12.la.us":true,"k12.ma.us":true,"k12.md.us":true,"k12.me.us":true,"k12.mi.us":true,"k12.mn.us":true,"k12.mo.us":true,"k12.ms.us":true,"k12.mt.us":true,"k12.nc.us":true,"k12.ne.us":true,"k12.nh.us":true,"k12.nj.us":true,"k12.nm.us":true,"k12.nv.us":true,"k12.ny.us":true,"k12.oh.us":true,"k12.ok.us":true,"k12.or.us":true,"k12.pa.us":true,"k12.pr.us":true,"k12.ri.us":true,"k12.sc.us":true,"k12.tn.us":true,"k12.tx.us":true,"k12.ut.us":true,"k12.vi.us":true,"k12.vt.us":true,"k12.va.us":true,"k12.wa.us":true,"k12.wi.us":true,"k12.wy.us":true,"cc.ak.us":true,"cc.al.us":true,"cc.ar.us":true,"cc.as.us":true,"cc.az.us":true,"cc.ca.us":true,"cc.co.us":true,"cc.ct.us":true,"cc.dc.us":true,"cc.de.us":true,"cc.fl.us":true,"cc.ga.us":true,"cc.gu.us":true,"cc.hi.us":true,"cc.ia.us":true,"cc.id.us":true,"cc.il.us":true,"cc.in.us":true,"cc.ks.us":true,"cc.ky.us":true,"cc.la.us":true,"cc.ma.us":true,"cc.md.us":true,"cc.me.us":true,"cc.mi.us":true,"cc.mn.us":true,"cc.mo.us":true,"cc.ms.us":true,"cc.mt.us":true,"cc.nc.us":true,"cc.nd.us":true,"cc.ne.us":true,"cc.nh.us":true,"cc.nj.us":true,"cc.nm.us":true,"cc.nv.us":true,"cc.ny.us":true,"cc.oh.us":true,"cc.ok.us":true,"cc.or.us":true,"cc.pa.us":true,"cc.pr.us":true,"cc.ri.us":true,"cc.sc.us":true,"cc.sd.us":true,"cc.tn.us":true,"cc.tx.us":true,"cc.ut.us":true,"cc.vi.us":true,"cc.vt.us":true,"cc.va.us":true,"cc.wa.us":true,"cc.wi.us":true,"cc.wv.us":true,"cc.wy.us":true,"lib.ak.us":true,"lib.al.us":true,"lib.ar.us":true,"lib.as.us":true,"lib.az.us":true,"lib.ca.us":true,"lib.co.us":true,"lib.ct.us":true,"lib.dc.us":true,"lib.de.us":true,"lib.fl.us":true,"lib.ga.us":true,"lib.gu.us":true,"lib.hi.us":true,"lib.ia.us":true,"lib.id.us":true,"lib.il.us":true,"lib.in.us":true,"lib.ks.us":true,"lib.ky.us":true,"lib.la.us":true,"lib.ma.us":true,"lib.md.us":true,"lib.me.us":true,"lib.mi.us":true,"lib.mn.us":true,"lib.mo.us":true,"lib.ms.us":true,"lib.mt.us":true,"lib.nc.us":true,"lib.nd.us":true,"lib.ne.us":true,"lib.nh.us":true,"lib.nj.us":true,"lib.nm.us":true,"lib.nv.us":true,"lib.ny.us":true,"lib.oh.us":true,"lib.ok.us":true,"lib.or.us":true,"lib.pa.us":true,"lib.pr.us":true,"lib.ri.us":true,"lib.sc.us":true,"lib.sd.us":true,"lib.tn.us":true,"lib.tx.us":true,"lib.ut.us":true,"lib.vi.us":true,"lib.vt.us":true,"lib.va.us":true,"lib.wa.us":true,"lib.wi.us":true,"lib.wy.us":true,"pvt.k12.ma.us":true,"chtr.k12.ma.us":true,"paroch.k12.ma.us":true,"uy":true,"com.uy":true,"edu.uy":true,"gub.uy":true,"mil.uy":true,"net.uy":true,"org.uy":true,"uz":true,"co.uz":true,"com.uz":true,"net.uz":true,"org.uz":true,"va":true,"vc":true,"com.vc":true,"net.vc":true,"org.vc":true,"gov.vc":true,"mil.vc":true,"edu.vc":true,"ve":true,"arts.ve":true,"co.ve":true,"com.ve":true,"e12.ve":true,"edu.ve":true,"firm.ve":true,"gob.ve":true,"gov.ve":true,"info.ve":true,"int.ve":true,"mil.ve":true,"net.ve":true,"org.ve":true,"rec.ve":true,"store.ve":true,"tec.ve":true,"web.ve":true,"vg":true,"vi":true,"co.vi":true,"com.vi":true,"k12.vi":true,"net.vi":true,"org.vi":true,"vn":true,"com.vn":true,"net.vn":true,"org.vn":true,"edu.vn":true,"gov.vn":true,"int.vn":true,"ac.vn":true,"biz.vn":true,"info.vn":true,"name.vn":true,"pro.vn":true,"health.vn":true,"vu":true,"com.vu":true,"edu.vu":true,"net.vu":true,"org.vu":true,"wf":true,"ws":true,"com.ws":true,"net.ws":true,"org.ws":true,"gov.ws":true,"edu.ws":true,"yt":true,"xn--mgbaam7a8h":true,"xn--y9a3aq":true,"xn--54b7fta0cc":true,"xn--90ais":true,"xn--fiqs8s":true,"xn--fiqz9s":true,"xn--lgbbat1ad8j":true,"xn--wgbh1c":true,"xn--node":true,"xn--qxam":true,"xn--j6w193g":true,"xn--h2brj9c":true,"xn--mgbbh1a71e":true,"xn--fpcrj9c3d":true,"xn--gecrj9c":true,"xn--s9brj9c":true,"xn--45brj9c":true,"xn--xkc2dl3a5ee0h":true,"xn--mgba3a4f16a":true,"xn--mgba3a4fra":true,"xn--mgbtx2b":true,"xn--mgbayh7gpa":true,"xn--3e0b707e":true,"xn--80ao21a":true,"xn--fzc2c9e2c":true,"xn--xkc2al3hye2a":true,"xn--mgbc0a9azcg":true,"xn--d1alf":true,"xn--l1acc":true,"xn--mix891f":true,"xn--mix082f":true,"xn--mgbx4cd0ab":true,"xn--mgb9awbf":true,"xn--mgbai9azgqp6j":true,"xn--mgbai9a5eva00b":true,"xn--ygbi2ammx":true,"xn--90a3ac":true,"xn--o1ac.xn--90a3ac":true,"xn--c1avg.xn--90a3ac":true,"xn--90azh.xn--90a3ac":true,"xn--d1at.xn--90a3ac":true,"xn--o1ach.xn--90a3ac":true,"xn--80au.xn--90a3ac":true,"xn--p1ai":true,"xn--wgbl6a":true,"xn--mgberp4a5d4ar":true,"xn--mgberp4a5d4a87g":true,"xn--mgbqly7c0a67fbc":true,"xn--mgbqly7cvafr":true,"xn--mgbpl2fh":true,"xn--yfro4i67o":true,"xn--clchc0ea0b2g2a9gcd":true,"xn--ogbpf8fl":true,"xn--mgbtf8fl":true,"xn--o3cw4h":true,"xn--pgbs0dh":true,"xn--kpry57d":true,"xn--kprw13d":true,"xn--nnx388a":true,"xn--j1amh":true,"xn--mgb2ddes":true,"xxx":true,"*.ye":true,"ac.za":true,"agrica.za":true,"alt.za":true,"co.za":true,"edu.za":true,"gov.za":true,"grondar.za":true,"law.za":true,"mil.za":true,"net.za":true,"ngo.za":true,"nis.za":true,"nom.za":true,"org.za":true,"school.za":true,"tm.za":true,"web.za":true,"*.zm":true,"*.zw":true,"aaa":true,"aarp":true,"abarth":true,"abb":true,"abbott":true,"abbvie":true,"abc":true,"able":true,"abogado":true,"abudhabi":true,"academy":true,"accenture":true,"accountant":true,"accountants":true,"aco":true,"active":true,"actor":true,"adac":true,"ads":true,"adult":true,"aeg":true,"aetna":true,"afamilycompany":true,"afl":true,"africa":true,"africamagic":true,"agakhan":true,"agency":true,"aig":true,"aigo":true,"airbus":true,"airforce":true,"airtel":true,"akdn":true,"alfaromeo":true,"alibaba":true,"alipay":true,"allfinanz":true,"allstate":true,"ally":true,"alsace":true,"alstom":true,"americanexpress":true,"americanfamily":true,"amex":true,"amfam":true,"amica":true,"amsterdam":true,"analytics":true,"android":true,"anquan":true,"anz":true,"aol":true,"apartments":true,"app":true,"apple":true,"aquarelle":true,"aramco":true,"archi":true,"army":true,"arte":true,"asda":true,"associates":true,"athleta":true,"attorney":true,"auction":true,"audi":true,"audible":true,"audio":true,"auspost":true,"author":true,"auto":true,"autos":true,"avianca":true,"aws":true,"axa":true,"azure":true,"baby":true,"baidu":true,"banamex":true,"bananarepublic":true,"band":true,"bank":true,"bar":true,"barcelona":true,"barclaycard":true,"barclays":true,"barefoot":true,"bargains":true,"basketball":true,"bauhaus":true,"bayern":true,"bbc":true,"bbt":true,"bbva":true,"bcg":true,"bcn":true,"beats":true,"beer":true,"bentley":true,"berlin":true,"best":true,"bestbuy":true,"bet":true,"bharti":true,"bible":true,"bid":true,"bike":true,"bing":true,"bingo":true,"bio":true,"black":true,"blackfriday":true,"blanco":true,"blockbuster":true,"blog":true,"bloomberg":true,"blue":true,"bms":true,"bmw":true,"bnl":true,"bnpparibas":true,"boats":true,"boehringer":true,"bofa":true,"bom":true,"bond":true,"boo":true,"book":true,"booking":true,"boots":true,"bosch":true,"bostik":true,"bot":true,"boutique":true,"bradesco":true,"bridgestone":true,"broadway":true,"broker":true,"brother":true,"brussels":true,"budapest":true,"bugatti":true,"build":true,"builders":true,"business":true,"buy":true,"buzz":true,"bzh":true,"cab":true,"cafe":true,"cal":true,"call":true,"calvinklein":true,"camera":true,"camp":true,"cancerresearch":true,"canon":true,"capetown":true,"capital":true,"capitalone":true,"car":true,"caravan":true,"cards":true,"care":true,"career":true,"careers":true,"cars":true,"cartier":true,"casa":true,"case":true,"caseih":true,"cash":true,"casino":true,"catering":true,"cba":true,"cbn":true,"cbre":true,"cbs":true,"ceb":true,"center":true,"ceo":true,"cern":true,"cfa":true,"cfd":true,"chanel":true,"channel":true,"chase":true,"chat":true,"cheap":true,"chintai":true,"chloe":true,"christmas":true,"chrome":true,"chrysler":true,"church":true,"cipriani":true,"circle":true,"cisco":true,"citadel":true,"citi":true,"citic":true,"city":true,"cityeats":true,"claims":true,"cleaning":true,"click":true,"clinic":true,"clothing":true,"cloud":true,"club":true,"clubmed":true,"coach":true,"codes":true,"coffee":true,"college":true,"cologne":true,"comcast":true,"commbank":true,"community":true,"company":true,"computer":true,"comsec":true,"condos":true,"construction":true,"consulting":true,"contact":true,"contractors":true,"cooking":true,"cookingchannel":true,"cool":true,"corsica":true,"country":true,"coupon":true,"coupons":true,"courses":true,"credit":true,"creditcard":true,"creditunion":true,"cricket":true,"crown":true,"crs":true,"cruises":true,"csc":true,"cuisinella":true,"cymru":true,"cyou":true,"dabur":true,"dad":true,"dance":true,"date":true,"dating":true,"datsun":true,"day":true,"dclk":true,"dds":true,"deal":true,"dealer":true,"deals":true,"degree":true,"delivery":true,"dell":true,"deloitte":true,"delta":true,"democrat":true,"dental":true,"dentist":true,"desi":true,"design":true,"dev":true,"dhl":true,"diamonds":true,"diet":true,"digital":true,"direct":true,"directory":true,"discount":true,"discover":true,"dish":true,"dnp":true,"docs":true,"dodge":true,"dog":true,"doha":true,"domains":true,"doosan":true,"dot":true,"download":true,"drive":true,"dstv":true,"dtv":true,"dubai":true,"duck":true,"dunlop":true,"duns":true,"dupont":true,"durban":true,"dvag":true,"dwg":true,"earth":true,"eat":true,"edeka":true,"education":true,"email":true,"emerck":true,"emerson":true,"energy":true,"engineer":true,"engineering":true,"enterprises":true,"epost":true,"epson":true,"equipment":true,"ericsson":true,"erni":true,"esq":true,"estate":true,"esurance":true,"etisalat":true,"eurovision":true,"eus":true,"events":true,"everbank":true,"exchange":true,"expert":true,"exposed":true,"express":true,"extraspace":true,"fage":true,"fail":true,"fairwinds":true,"faith":true,"family":true,"fan":true,"fans":true,"farm":true,"farmers":true,"fashion":true,"fast":true,"fedex":true,"feedback":true,"ferrari":true,"ferrero":true,"fiat":true,"fidelity":true,"fido":true,"film":true,"final":true,"finance":true,"financial":true,"fire":true,"firestone":true,"firmdale":true,"fish":true,"fishing":true,"fit":true,"fitness":true,"flickr":true,"flights":true,"flir":true,"florist":true,"flowers":true,"flsmidth":true,"fly":true,"foo":true,"foodnetwork":true,"football":true,"ford":true,"forex":true,"forsale":true,"forum":true,"foundation":true,"fox":true,"fresenius":true,"frl":true,"frogans":true,"frontdoor":true,"frontier":true,"ftr":true,"fujitsu":true,"fujixerox":true,"fund":true,"furniture":true,"futbol":true,"fyi":true,"gal":true,"gallery":true,"gallo":true,"gallup":true,"game":true,"games":true,"gap":true,"garden":true,"gbiz":true,"gdn":true,"gea":true,"gent":true,"genting":true,"george":true,"ggee":true,"gift":true,"gifts":true,"gives":true,"giving":true,"glade":true,"glass":true,"gle":true,"global":true,"globo":true,"gmail":true,"gmo":true,"gmx":true,"godaddy":true,"gold":true,"goldpoint":true,"golf":true,"goo":true,"goodhands":true,"goodyear":true,"goog":true,"google":true,"gop":true,"got":true,"gotv":true,"grainger":true,"graphics":true,"gratis":true,"green":true,"gripe":true,"group":true,"guardian":true,"gucci":true,"guge":true,"guide":true,"guitars":true,"guru":true,"hamburg":true,"hangout":true,"haus":true,"hbo":true,"hdfc":true,"hdfcbank":true,"health":true,"healthcare":true,"help":true,"helsinki":true,"here":true,"hermes":true,"hgtv":true,"hiphop":true,"hisamitsu":true,"hitachi":true,"hiv":true,"hkt":true,"hockey":true,"holdings":true,"holiday":true,"homedepot":true,"homegoods":true,"homes":true,"homesense":true,"honda":true,"honeywell":true,"horse":true,"host":true,"hosting":true,"hot":true,"hoteles":true,"hotmail":true,"house":true,"how":true,"hsbc":true,"htc":true,"hughes":true,"hyatt":true,"hyundai":true,"ibm":true,"icbc":true,"ice":true,"icu":true,"ieee":true,"ifm":true,"iinet":true,"ikano":true,"imamat":true,"imdb":true,"immo":true,"immobilien":true,"industries":true,"infiniti":true,"ing":true,"ink":true,"institute":true,"insurance":true,"insure":true,"intel":true,"international":true,"intuit":true,"investments":true,"ipiranga":true,"irish":true,"iselect":true,"ismaili":true,"ist":true,"istanbul":true,"itau":true,"itv":true,"iveco":true,"iwc":true,"jaguar":true,"java":true,"jcb":true,"jcp":true,"jeep":true,"jetzt":true,"jewelry":true,"jio":true,"jlc":true,"jll":true,"jmp":true,"jnj":true,"joburg":true,"jot":true,"joy":true,"jpmorgan":true,"jprs":true,"juegos":true,"juniper":true,"kaufen":true,"kddi":true,"kerryhotels":true,"kerrylogistics":true,"kerryproperties":true,"kfh":true,"kia":true,"kim":true,"kinder":true,"kindle":true,"kitchen":true,"kiwi":true,"koeln":true,"komatsu":true,"kosher":true,"kpmg":true,"kpn":true,"krd":true,"kred":true,"kuokgroup":true,"kyknet":true,"kyoto":true,"lacaixa":true,"ladbrokes":true,"lamborghini":true,"lancaster":true,"lancia":true,"lancome":true,"land":true,"landrover":true,"lanxess":true,"lasalle":true,"lat":true,"latino":true,"latrobe":true,"law":true,"lawyer":true,"lds":true,"lease":true,"leclerc":true,"lefrak":true,"legal":true,"lego":true,"lexus":true,"lgbt":true,"liaison":true,"lidl":true,"life":true,"lifeinsurance":true,"lifestyle":true,"lighting":true,"like":true,"lilly":true,"limited":true,"limo":true,"lincoln":true,"linde":true,"link":true,"lipsy":true,"live":true,"living":true,"lixil":true,"loan":true,"loans":true,"locker":true,"locus":true,"loft":true,"lol":true,"london":true,"lotte":true,"lotto":true,"love":true,"lpl":true,"lplfinancial":true,"ltd":true,"ltda":true,"lundbeck":true,"lupin":true,"luxe":true,"luxury":true,"macys":true,"madrid":true,"maif":true,"maison":true,"makeup":true,"man":true,"management":true,"mango":true,"market":true,"marketing":true,"markets":true,"marriott":true,"marshalls":true,"maserati":true,"mattel":true,"mba":true,"mcd":true,"mcdonalds":true,"mckinsey":true,"med":true,"media":true,"meet":true,"melbourne":true,"meme":true,"memorial":true,"men":true,"menu":true,"meo":true,"metlife":true,"miami":true,"microsoft":true,"mini":true,"mint":true,"mit":true,"mitsubishi":true,"mlb":true,"mls":true,"mma":true,"mnet":true,"mobily":true,"moda":true,"moe":true,"moi":true,"mom":true,"monash":true,"money":true,"monster":true,"montblanc":true,"mopar":true,"mormon":true,"mortgage":true,"moscow":true,"moto":true,"motorcycles":true,"mov":true,"movie":true,"movistar":true,"msd":true,"mtn":true,"mtpc":true,"mtr":true,"multichoice":true,"mutual":true,"mutuelle":true,"mzansimagic":true,"nab":true,"nadex":true,"nagoya":true,"naspers":true,"nationwide":true,"natura":true,"navy":true,"nba":true,"nec":true,"netbank":true,"netflix":true,"network":true,"neustar":true,"new":true,"newholland":true,"news":true,"next":true,"nextdirect":true,"nexus":true,"nfl":true,"ngo":true,"nhk":true,"nico":true,"nike":true,"nikon":true,"ninja":true,"nissan":true,"nokia":true,"northwesternmutual":true,"norton":true,"now":true,"nowruz":true,"nowtv":true,"nra":true,"nrw":true,"ntt":true,"nyc":true,"obi":true,"observer":true,"off":true,"office":true,"okinawa":true,"olayan":true,"olayangroup":true,"oldnavy":true,"ollo":true,"omega":true,"one":true,"ong":true,"onl":true,"online":true,"onyourside":true,"ooo":true,"open":true,"oracle":true,"orange":true,"organic":true,"orientexpress":true,"osaka":true,"otsuka":true,"ott":true,"ovh":true,"page":true,"pamperedchef":true,"panasonic":true,"panerai":true,"paris":true,"pars":true,"partners":true,"parts":true,"party":true,"passagens":true,"pay":true,"payu":true,"pccw":true,"pet":true,"pfizer":true,"pharmacy":true,"philips":true,"photo":true,"photography":true,"photos":true,"physio":true,"piaget":true,"pics":true,"pictet":true,"pictures":true,"pid":true,"pin":true,"ping":true,"pink":true,"pioneer":true,"pizza":true,"place":true,"play":true,"playstation":true,"plumbing":true,"plus":true,"pnc":true,"pohl":true,"poker":true,"politie":true,"porn":true,"pramerica":true,"praxi":true,"press":true,"prime":true,"prod":true,"productions":true,"prof":true,"progressive":true,"promo":true,"properties":true,"property":true,"protection":true,"pru":true,"prudential":true,"pub":true,"qpon":true,"quebec":true,"quest":true,"qvc":true,"racing":true,"raid":true,"read":true,"realestate":true,"realtor":true,"realty":true,"recipes":true,"red":true,"redstone":true,"redumbrella":true,"rehab":true,"reise":true,"reisen":true,"reit":true,"reliance":true,"ren":true,"rent":true,"rentals":true,"repair":true,"report":true,"republican":true,"rest":true,"restaurant":true,"review":true,"reviews":true,"rexroth":true,"rich":true,"richardli":true,"ricoh":true,"rightathome":true,"ril":true,"rio":true,"rip":true,"rocher":true,"rocks":true,"rodeo":true,"rogers":true,"room":true,"rsvp":true,"ruhr":true,"run":true,"rwe":true,"ryukyu":true,"saarland":true,"safe":true,"safety":true,"sakura":true,"sale":true,"salon":true,"samsclub":true,"samsung":true,"sandvik":true,"sandvikcoromant":true,"sanofi":true,"sap":true,"sapo":true,"sarl":true,"sas":true,"save":true,"saxo":true,"sbi":true,"sbs":true,"sca":true,"scb":true,"schaeffler":true,"schmidt":true,"scholarships":true,"school":true,"schule":true,"schwarz":true,"science":true,"scjohnson":true,"scor":true,"scot":true,"seat":true,"secure":true,"security":true,"seek":true,"sener":true,"services":true,"ses":true,"seven":true,"sew":true,"sex":true,"sexy":true,"sfr":true,"shangrila":true,"sharp":true,"shaw":true,"shell":true,"shia":true,"shiksha":true,"shoes":true,"shouji":true,"show":true,"showtime":true,"shriram":true,"silk":true,"sina":true,"singles":true,"site":true,"ski":true,"skin":true,"sky":true,"skype":true,"sling":true,"smart":true,"smile":true,"sncf":true,"soccer":true,"social":true,"softbank":true,"software":true,"sohu":true,"solar":true,"solutions":true,"song":true,"sony":true,"soy":true,"space":true,"spiegel":true,"spot":true,"spreadbetting":true,"srl":true,"srt":true,"stada":true,"staples":true,"star":true,"starhub":true,"statebank":true,"statefarm":true,"statoil":true,"stc":true,"stcgroup":true,"stockholm":true,"storage":true,"store":true,"studio":true,"study":true,"style":true,"sucks":true,"supersport":true,"supplies":true,"supply":true,"support":true,"surf":true,"surgery":true,"suzuki":true,"swatch":true,"swiftcover":true,"swiss":true,"sydney":true,"symantec":true,"systems":true,"tab":true,"taipei":true,"talk":true,"taobao":true,"target":true,"tatamotors":true,"tatar":true,"tattoo":true,"tax":true,"taxi":true,"tci":true,"tdk":true,"team":true,"tech":true,"technology":true,"telecity":true,"telefonica":true,"temasek":true,"tennis":true,"teva":true,"thd":true,"theater":true,"theatre":true,"theguardian":true,"tiaa":true,"tickets":true,"tienda":true,"tiffany":true,"tips":true,"tires":true,"tirol":true,"tjmaxx":true,"tjx":true,"tkmaxx":true,"tmall":true,"today":true,"tokyo":true,"tools":true,"top":true,"toray":true,"toshiba":true,"total":true,"tours":true,"town":true,"toyota":true,"toys":true,"trade":true,"trading":true,"training":true,"travelchannel":true,"travelers":true,"travelersinsurance":true,"trust":true,"trv":true,"tube":true,"tui":true,"tunes":true,"tushu":true,"tvs":true,"ubank":true,"ubs":true,"uconnect":true,"university":true,"uno":true,"uol":true,"ups":true,"vacations":true,"vana":true,"vanguard":true,"vegas":true,"ventures":true,"verisign":true,"versicherung":true,"vet":true,"viajes":true,"video":true,"vig":true,"viking":true,"villas":true,"vin":true,"vip":true,"virgin":true,"visa":true,"vision":true,"vista":true,"vistaprint":true,"viva":true,"vivo":true,"vlaanderen":true,"vodka":true,"volkswagen":true,"vote":true,"voting":true,"voto":true,"voyage":true,"vuelos":true,"wales":true,"walmart":true,"walter":true,"wang":true,"wanggou":true,"warman":true,"watch":true,"watches":true,"weather":true,"weatherchannel":true,"webcam":true,"weber":true,"website":true,"wed":true,"wedding":true,"weibo":true,"weir":true,"whoswho":true,"wien":true,"wiki":true,"williamhill":true,"win":true,"windows":true,"wine":true,"winners":true,"wme":true,"wolterskluwer":true,"woodside":true,"work":true,"works":true,"world":true,"wtc":true,"wtf":true,"xbox":true,"xerox":true,"xfinity":true,"xihuan":true,"xin":true,"xn--11b4c3d":true,"xn--1ck2e1b":true,"xn--1qqw23a":true,"xn--30rr7y":true,"xn--3bst00m":true,"xn--3ds443g":true,"xn--3oq18vl8pn36a":true,"xn--3pxu8k":true,"xn--42c2d9a":true,"xn--45q11c":true,"xn--4gbrim":true,"xn--4gq48lf9j":true,"xn--55qw42g":true,"xn--55qx5d":true,"xn--5su34j936bgsg":true,"xn--5tzm5g":true,"xn--6frz82g":true,"xn--6qq986b3xl":true,"xn--80adxhks":true,"xn--80asehdb":true,"xn--80aswg":true,"xn--8y0a063a":true,"xn--9dbq2a":true,"xn--9et52u":true,"xn--9krt00a":true,"xn--b4w605ferd":true,"xn--bck1b9a5dre4c":true,"xn--c1avg":true,"xn--c2br7g":true,"xn--cck2b3b":true,"xn--cg4bki":true,"xn--czr694b":true,"xn--czrs0t":true,"xn--czru2d":true,"xn--d1acj3b":true,"xn--eckvdtc9d":true,"xn--efvy88h":true,"xn--estv75g":true,"xn--fct429k":true,"xn--fhbei":true,"xn--fiq228c5hs":true,"xn--fiq64b":true,"xn--fjq720a":true,"xn--flw351e":true,"xn--fzys8d69uvgm":true,"xn--g2xx48c":true,"xn--gckr3f0f":true,"xn--hxt814e":true,"xn--i1b6b1a6a2e":true,"xn--imr513n":true,"xn--io0a7i":true,"xn--j1aef":true,"xn--jlq61u9w7b":true,"xn--jvr189m":true,"xn--kcrx77d1x4a":true,"xn--kpu716f":true,"xn--kput3i":true,"xn--mgba3a3ejt":true,"xn--mgba7c0bbn0a":true,"xn--mgbaakc7dvf":true,"xn--mgbab2bd":true,"xn--mgbb9fbpob":true,"xn--mgbca7dzdo":true,"xn--mgbt3dhd":true,"xn--mk1bu44c":true,"xn--mxtq1m":true,"xn--ngbc5azd":true,"xn--ngbe9e0a":true,"xn--nqv7f":true,"xn--nqv7fs00ema":true,"xn--nyqy26a":true,"xn--p1acf":true,"xn--pbt977c":true,"xn--pssy2u":true,"xn--q9jyb4c":true,"xn--qcka1pmc":true,"xn--rhqv96g":true,"xn--rovu88b":true,"xn--ses554g":true,"xn--t60b56a":true,"xn--tckwe":true,"xn--unup4y":true,"xn--vermgensberater-ctb":true,"xn--vermgensberatung-pwb":true,"xn--vhquv":true,"xn--vuq861b":true,"xn--w4r85el8fhu5dnra":true,"xn--w4rs40l":true,"xn--xhq521b":true,"xn--zfr164b":true,"xperia":true,"xyz":true,"yachts":true,"yahoo":true,"yamaxun":true,"yandex":true,"yodobashi":true,"yoga":true,"yokohama":true,"you":true,"youtube":true,"yun":true,"zappos":true,"zara":true,"zero":true,"zip":true,"zippo":true,"zone":true,"zuerich":true,"cloudfront.net":true,"ap-northeast-1.compute.amazonaws.com":true,"ap-southeast-1.compute.amazonaws.com":true,"ap-southeast-2.compute.amazonaws.com":true,"cn-north-1.compute.amazonaws.cn":true,"compute.amazonaws.cn":true,"compute.amazonaws.com":true,"compute-1.amazonaws.com":true,"eu-west-1.compute.amazonaws.com":true,"eu-central-1.compute.amazonaws.com":true,"sa-east-1.compute.amazonaws.com":true,"us-east-1.amazonaws.com":true,"us-gov-west-1.compute.amazonaws.com":true,"us-west-1.compute.amazonaws.com":true,"us-west-2.compute.amazonaws.com":true,"z-1.compute-1.amazonaws.com":true,"z-2.compute-1.amazonaws.com":true,"elasticbeanstalk.com":true,"elb.amazonaws.com":true,"s3.amazonaws.com":true,"s3-ap-northeast-1.amazonaws.com":true,"s3-ap-southeast-1.amazonaws.com":true,"s3-ap-southeast-2.amazonaws.com":true,"s3-external-1.amazonaws.com":true,"s3-external-2.amazonaws.com":true,"s3-fips-us-gov-west-1.amazonaws.com":true,"s3-eu-central-1.amazonaws.com":true,"s3-eu-west-1.amazonaws.com":true,"s3-sa-east-1.amazonaws.com":true,"s3-us-gov-west-1.amazonaws.com":true,"s3-us-west-1.amazonaws.com":true,"s3-us-west-2.amazonaws.com":true,"s3.cn-north-1.amazonaws.com.cn":true,"s3.eu-central-1.amazonaws.com":true,"betainabox.com":true,"ae.org":true,"ar.com":true,"br.com":true,"cn.com":true,"com.de":true,"com.se":true,"de.com":true,"eu.com":true,"gb.com":true,"gb.net":true,"hu.com":true,"hu.net":true,"jp.net":true,"jpn.com":true,"kr.com":true,"mex.com":true,"no.com":true,"qc.com":true,"ru.com":true,"sa.com":true,"se.com":true,"se.net":true,"uk.com":true,"uk.net":true,"us.com":true,"uy.com":true,"za.bz":true,"za.com":true,"africa.com":true,"gr.com":true,"in.net":true,"us.org":true,"co.com":true,"c.la":true,"cloudcontrolled.com":true,"cloudcontrolapp.com":true,"co.ca":true,"c.cdn77.org":true,"cdn77-ssl.net":true,"r.cdn77.net":true,"rsc.cdn77.org":true,"ssl.origin.cdn77-secure.org":true,"co.nl":true,"co.no":true,"*.platform.sh":true,"cupcake.is":true,"dreamhosters.com":true,"duckdns.org":true,"dyndns-at-home.com":true,"dyndns-at-work.com":true,"dyndns-blog.com":true,"dyndns-free.com":true,"dyndns-home.com":true,"dyndns-ip.com":true,"dyndns-mail.com":true,"dyndns-office.com":true,"dyndns-pics.com":true,"dyndns-remote.com":true,"dyndns-server.com":true,"dyndns-web.com":true,"dyndns-wiki.com":true,"dyndns-work.com":true,"dyndns.biz":true,"dyndns.info":true,"dyndns.org":true,"dyndns.tv":true,"at-band-camp.net":true,"ath.cx":true,"barrel-of-knowledge.info":true,"barrell-of-knowledge.info":true,"better-than.tv":true,"blogdns.com":true,"blogdns.net":true,"blogdns.org":true,"blogsite.org":true,"boldlygoingnowhere.org":true,"broke-it.net":true,"buyshouses.net":true,"cechire.com":true,"dnsalias.com":true,"dnsalias.net":true,"dnsalias.org":true,"dnsdojo.com":true,"dnsdojo.net":true,"dnsdojo.org":true,"does-it.net":true,"doesntexist.com":true,"doesntexist.org":true,"dontexist.com":true,"dontexist.net":true,"dontexist.org":true,"doomdns.com":true,"doomdns.org":true,"dvrdns.org":true,"dyn-o-saur.com":true,"dynalias.com":true,"dynalias.net":true,"dynalias.org":true,"dynathome.net":true,"dyndns.ws":true,"endofinternet.net":true,"endofinternet.org":true,"endoftheinternet.org":true,"est-a-la-maison.com":true,"est-a-la-masion.com":true,"est-le-patron.com":true,"est-mon-blogueur.com":true,"for-better.biz":true,"for-more.biz":true,"for-our.info":true,"for-some.biz":true,"for-the.biz":true,"forgot.her.name":true,"forgot.his.name":true,"from-ak.com":true,"from-al.com":true,"from-ar.com":true,"from-az.net":true,"from-ca.com":true,"from-co.net":true,"from-ct.com":true,"from-dc.com":true,"from-de.com":true,"from-fl.com":true,"from-ga.com":true,"from-hi.com":true,"from-ia.com":true,"from-id.com":true,"from-il.com":true,"from-in.com":true,"from-ks.com":true,"from-ky.com":true,"from-la.net":true,"from-ma.com":true,"from-md.com":true,"from-me.org":true,"from-mi.com":true,"from-mn.com":true,"from-mo.com":true,"from-ms.com":true,"from-mt.com":true,"from-nc.com":true,"from-nd.com":true,"from-ne.com":true,"from-nh.com":true,"from-nj.com":true,"from-nm.com":true,"from-nv.com":true,"from-ny.net":true,"from-oh.com":true,"from-ok.com":true,"from-or.com":true,"from-pa.com":true,"from-pr.com":true,"from-ri.com":true,"from-sc.com":true,"from-sd.com":true,"from-tn.com":true,"from-tx.com":true,"from-ut.com":true,"from-va.com":true,"from-vt.com":true,"from-wa.com":true,"from-wi.com":true,"from-wv.com":true,"from-wy.com":true,"ftpaccess.cc":true,"fuettertdasnetz.de":true,"game-host.org":true,"game-server.cc":true,"getmyip.com":true,"gets-it.net":true,"go.dyndns.org":true,"gotdns.com":true,"gotdns.org":true,"groks-the.info":true,"groks-this.info":true,"ham-radio-op.net":true,"here-for-more.info":true,"hobby-site.com":true,"hobby-site.org":true,"home.dyndns.org":true,"homedns.org":true,"homeftp.net":true,"homeftp.org":true,"homeip.net":true,"homelinux.com":true,"homelinux.net":true,"homelinux.org":true,"homeunix.com":true,"homeunix.net":true,"homeunix.org":true,"iamallama.com":true,"in-the-band.net":true,"is-a-anarchist.com":true,"is-a-blogger.com":true,"is-a-bookkeeper.com":true,"is-a-bruinsfan.org":true,"is-a-bulls-fan.com":true,"is-a-candidate.org":true,"is-a-caterer.com":true,"is-a-celticsfan.org":true,"is-a-chef.com":true,"is-a-chef.net":true,"is-a-chef.org":true,"is-a-conservative.com":true,"is-a-cpa.com":true,"is-a-cubicle-slave.com":true,"is-a-democrat.com":true,"is-a-designer.com":true,"is-a-doctor.com":true,"is-a-financialadvisor.com":true,"is-a-geek.com":true,"is-a-geek.net":true,"is-a-geek.org":true,"is-a-green.com":true,"is-a-guru.com":true,"is-a-hard-worker.com":true,"is-a-hunter.com":true,"is-a-knight.org":true,"is-a-landscaper.com":true,"is-a-lawyer.com":true,"is-a-liberal.com":true,"is-a-libertarian.com":true,"is-a-linux-user.org":true,"is-a-llama.com":true,"is-a-musician.com":true,"is-a-nascarfan.com":true,"is-a-nurse.com":true,"is-a-painter.com":true,"is-a-patsfan.org":true,"is-a-personaltrainer.com":true,"is-a-photographer.com":true,"is-a-player.com":true,"is-a-republican.com":true,"is-a-rockstar.com":true,"is-a-socialist.com":true,"is-a-soxfan.org":true,"is-a-student.com":true,"is-a-teacher.com":true,"is-a-techie.com":true,"is-a-therapist.com":true,"is-an-accountant.com":true,"is-an-actor.com":true,"is-an-actress.com":true,"is-an-anarchist.com":true,"is-an-artist.com":true,"is-an-engineer.com":true,"is-an-entertainer.com":true,"is-by.us":true,"is-certified.com":true,"is-found.org":true,"is-gone.com":true,"is-into-anime.com":true,"is-into-cars.com":true,"is-into-cartoons.com":true,"is-into-games.com":true,"is-leet.com":true,"is-lost.org":true,"is-not-certified.com":true,"is-saved.org":true,"is-slick.com":true,"is-uberleet.com":true,"is-very-bad.org":true,"is-very-evil.org":true,"is-very-good.org":true,"is-very-nice.org":true,"is-very-sweet.org":true,"is-with-theband.com":true,"isa-geek.com":true,"isa-geek.net":true,"isa-geek.org":true,"isa-hockeynut.com":true,"issmarterthanyou.com":true,"isteingeek.de":true,"istmein.de":true,"kicks-ass.net":true,"kicks-ass.org":true,"knowsitall.info":true,"land-4-sale.us":true,"lebtimnetz.de":true,"leitungsen.de":true,"likes-pie.com":true,"likescandy.com":true,"merseine.nu":true,"mine.nu":true,"misconfused.org":true,"mypets.ws":true,"myphotos.cc":true,"neat-url.com":true,"office-on-the.net":true,"on-the-web.tv":true,"podzone.net":true,"podzone.org":true,"readmyblog.org":true,"saves-the-whales.com":true,"scrapper-site.net":true,"scrapping.cc":true,"selfip.biz":true,"selfip.com":true,"selfip.info":true,"selfip.net":true,"selfip.org":true,"sells-for-less.com":true,"sells-for-u.com":true,"sells-it.net":true,"sellsyourhome.org":true,"servebbs.com":true,"servebbs.net":true,"servebbs.org":true,"serveftp.net":true,"serveftp.org":true,"servegame.org":true,"shacknet.nu":true,"simple-url.com":true,"space-to-rent.com":true,"stuff-4-sale.org":true,"stuff-4-sale.us":true,"teaches-yoga.com":true,"thruhere.net":true,"traeumtgerade.de":true,"webhop.biz":true,"webhop.info":true,"webhop.net":true,"webhop.org":true,"worse-than.tv":true,"writesthisblog.com":true,"eu.org":true,"al.eu.org":true,"asso.eu.org":true,"at.eu.org":true,"au.eu.org":true,"be.eu.org":true,"bg.eu.org":true,"ca.eu.org":true,"cd.eu.org":true,"ch.eu.org":true,"cn.eu.org":true,"cy.eu.org":true,"cz.eu.org":true,"de.eu.org":true,"dk.eu.org":true,"edu.eu.org":true,"ee.eu.org":true,"es.eu.org":true,"fi.eu.org":true,"fr.eu.org":true,"gr.eu.org":true,"hr.eu.org":true,"hu.eu.org":true,"ie.eu.org":true,"il.eu.org":true,"in.eu.org":true,"int.eu.org":true,"is.eu.org":true,"it.eu.org":true,"jp.eu.org":true,"kr.eu.org":true,"lt.eu.org":true,"lu.eu.org":true,"lv.eu.org":true,"mc.eu.org":true,"me.eu.org":true,"mk.eu.org":true,"mt.eu.org":true,"my.eu.org":true,"net.eu.org":true,"ng.eu.org":true,"nl.eu.org":true,"no.eu.org":true,"nz.eu.org":true,"paris.eu.org":true,"pl.eu.org":true,"pt.eu.org":true,"q-a.eu.org":true,"ro.eu.org":true,"ru.eu.org":true,"se.eu.org":true,"si.eu.org":true,"sk.eu.org":true,"tr.eu.org":true,"uk.eu.org":true,"us.eu.org":true,"a.ssl.fastly.net":true,"b.ssl.fastly.net":true,"global.ssl.fastly.net":true,"a.prod.fastly.net":true,"global.prod.fastly.net":true,"firebaseapp.com":true,"flynnhub.com":true,"service.gov.uk":true,"github.io":true,"githubusercontent.com":true,"ro.com":true,"appspot.com":true,"blogspot.ae":true,"blogspot.al":true,"blogspot.am":true,"blogspot.ba":true,"blogspot.be":true,"blogspot.bg":true,"blogspot.bj":true,"blogspot.ca":true,"blogspot.cf":true,"blogspot.ch":true,"blogspot.cl":true,"blogspot.co.at":true,"blogspot.co.id":true,"blogspot.co.il":true,"blogspot.co.ke":true,"blogspot.co.nz":true,"blogspot.co.uk":true,"blogspot.co.za":true,"blogspot.com":true,"blogspot.com.ar":true,"blogspot.com.au":true,"blogspot.com.br":true,"blogspot.com.by":true,"blogspot.com.co":true,"blogspot.com.cy":true,"blogspot.com.ee":true,"blogspot.com.eg":true,"blogspot.com.es":true,"blogspot.com.mt":true,"blogspot.com.ng":true,"blogspot.com.tr":true,"blogspot.com.uy":true,"blogspot.cv":true,"blogspot.cz":true,"blogspot.de":true,"blogspot.dk":true,"blogspot.fi":true,"blogspot.fr":true,"blogspot.gr":true,"blogspot.hk":true,"blogspot.hr":true,"blogspot.hu":true,"blogspot.ie":true,"blogspot.in":true,"blogspot.is":true,"blogspot.it":true,"blogspot.jp":true,"blogspot.kr":true,"blogspot.li":true,"blogspot.lt":true,"blogspot.lu":true,"blogspot.md":true,"blogspot.mk":true,"blogspot.mr":true,"blogspot.mx":true,"blogspot.my":true,"blogspot.nl":true,"blogspot.no":true,"blogspot.pe":true,"blogspot.pt":true,"blogspot.qa":true,"blogspot.re":true,"blogspot.ro":true,"blogspot.rs":true,"blogspot.ru":true,"blogspot.se":true,"blogspot.sg":true,"blogspot.si":true,"blogspot.sk":true,"blogspot.sn":true,"blogspot.td":true,"blogspot.tw":true,"blogspot.ug":true,"blogspot.vn":true,"codespot.com":true,"googleapis.com":true,"googlecode.com":true,"pagespeedmobilizer.com":true,"withgoogle.com":true,"withyoutube.com":true,"herokuapp.com":true,"herokussl.com":true,"iki.fi":true,"biz.at":true,"info.at":true,"co.pl":true,"azurewebsites.net":true,"azure-mobile.net":true,"cloudapp.net":true,"bmoattachments.org":true,"4u.com":true,"nfshost.com":true,"nyc.mn":true,"nid.io":true,"operaunite.com":true,"outsystemscloud.com":true,"art.pl":true,"gliwice.pl":true,"krakow.pl":true,"poznan.pl":true,"wroc.pl":true,"zakopane.pl":true,"pantheon.io":true,"gotpantheon.com":true,"priv.at":true,"qa2.com":true,"rhcloud.com":true,"sandcats.io":true,"biz.ua":true,"co.ua":true,"pp.ua":true,"sinaapp.com":true,"vipsinaapp.com":true,"1kapp.com":true,"gda.pl":true,"gdansk.pl":true,"gdynia.pl":true,"med.pl":true,"sopot.pl":true,"hk.com":true,"hk.org":true,"ltd.hk":true,"inc.hk":true,"yolasite.com":true,"za.net":true,"za.org":true});

	// END of automatically generated file


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("punycode");

/***/ },
/* 17 */
/***/ function(module, exports) {

	/*!
	 * Copyright (c) 2015, Salesforce.com, Inc.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *
	 * 1. Redistributions of source code must retain the above copyright notice,
	 * this list of conditions and the following disclaimer.
	 *
	 * 2. Redistributions in binary form must reproduce the above copyright notice,
	 * this list of conditions and the following disclaimer in the documentation
	 * and/or other materials provided with the distribution.
	 *
	 * 3. Neither the name of Salesforce.com nor the names of its contributors may
	 * be used to endorse or promote products derived from this software without
	 * specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	 * POSSIBILITY OF SUCH DAMAGE.
	 */
	'use strict';
	/*jshint unused:false */

	function Store() {
	}
	exports.Store = Store;

	// Stores may be synchronous, but are still required to use a
	// Continuation-Passing Style API.  The CookieJar itself will expose a "*Sync"
	// API that converts from synchronous-callbacks to imperative style.
	Store.prototype.synchronous = false;

	Store.prototype.findCookie = function(domain, path, key, cb) {
	  throw new Error('findCookie is not implemented');
	};

	Store.prototype.findCookies = function(domain, path, cb) {
	  throw new Error('findCookies is not implemented');
	};

	Store.prototype.putCookie = function(cookie, cb) {
	  throw new Error('putCookie is not implemented');
	};

	Store.prototype.updateCookie = function(oldCookie, newCookie, cb) {
	  // recommended default implementation:
	  // return this.putCookie(newCookie, cb);
	  throw new Error('updateCookie is not implemented');
	};

	Store.prototype.removeCookie = function(domain, path, key, cb) {
	  throw new Error('removeCookie is not implemented');
	};

	Store.prototype.removeCookies = function(domain, path, cb) {
	  throw new Error('removeCookies is not implemented');
	};

	Store.prototype.getAllCookies = function(cb) {
	  throw new Error('getAllCookies is not implemented (therefore jar cannot be serialized)');
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Copyright (c) 2015, Salesforce.com, Inc.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *
	 * 1. Redistributions of source code must retain the above copyright notice,
	 * this list of conditions and the following disclaimer.
	 *
	 * 2. Redistributions in binary form must reproduce the above copyright notice,
	 * this list of conditions and the following disclaimer in the documentation
	 * and/or other materials provided with the distribution.
	 *
	 * 3. Neither the name of Salesforce.com nor the names of its contributors may
	 * be used to endorse or promote products derived from this software without
	 * specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	 * POSSIBILITY OF SUCH DAMAGE.
	 */
	'use strict';
	var Store = __webpack_require__(17).Store;
	var permuteDomain = __webpack_require__(19).permuteDomain;
	var pathMatch = __webpack_require__(20).pathMatch;
	var util = __webpack_require__(21);

	function MemoryCookieStore() {
	  Store.call(this);
	  this.idx = {};
	}
	util.inherits(MemoryCookieStore, Store);
	exports.MemoryCookieStore = MemoryCookieStore;
	MemoryCookieStore.prototype.idx = null;

	// Since it's just a struct in RAM, this Store is synchronous
	MemoryCookieStore.prototype.synchronous = true;

	// force a default depth:
	MemoryCookieStore.prototype.inspect = function() {
	  return "{ idx: "+util.inspect(this.idx, false, 2)+' }';
	};

	MemoryCookieStore.prototype.findCookie = function(domain, path, key, cb) {
	  if (!this.idx[domain]) {
	    return cb(null,undefined);
	  }
	  if (!this.idx[domain][path]) {
	    return cb(null,undefined);
	  }
	  return cb(null,this.idx[domain][path][key]||null);
	};

	MemoryCookieStore.prototype.findCookies = function(domain, path, cb) {
	  var results = [];
	  if (!domain) {
	    return cb(null,[]);
	  }

	  var pathMatcher;
	  if (!path) {
	    // null means "all paths"
	    pathMatcher = function matchAll(domainIndex) {
	      for (var curPath in domainIndex) {
	        var pathIndex = domainIndex[curPath];
	        for (var key in pathIndex) {
	          results.push(pathIndex[key]);
	        }
	      }
	    };

	  } else {
	    pathMatcher = function matchRFC(domainIndex) {
	       //NOTE: we should use path-match algorithm from S5.1.4 here
	       //(see : https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/canonical_cookie.cc#L299)
	       Object.keys(domainIndex).forEach(function (cookiePath) {
	         if (pathMatch(path, cookiePath)) {
	           var pathIndex = domainIndex[cookiePath];

	           for (var key in pathIndex) {
	             results.push(pathIndex[key]);
	           }
	         }
	       });
	     };
	  }

	  var domains = permuteDomain(domain) || [domain];
	  var idx = this.idx;
	  domains.forEach(function(curDomain) {
	    var domainIndex = idx[curDomain];
	    if (!domainIndex) {
	      return;
	    }
	    pathMatcher(domainIndex);
	  });

	  cb(null,results);
	};

	MemoryCookieStore.prototype.putCookie = function(cookie, cb) {
	  if (!this.idx[cookie.domain]) {
	    this.idx[cookie.domain] = {};
	  }
	  if (!this.idx[cookie.domain][cookie.path]) {
	    this.idx[cookie.domain][cookie.path] = {};
	  }
	  this.idx[cookie.domain][cookie.path][cookie.key] = cookie;
	  cb(null);
	};

	MemoryCookieStore.prototype.updateCookie = function(oldCookie, newCookie, cb) {
	  // updateCookie() may avoid updating cookies that are identical.  For example,
	  // lastAccessed may not be important to some stores and an equality
	  // comparison could exclude that field.
	  this.putCookie(newCookie,cb);
	};

	MemoryCookieStore.prototype.removeCookie = function(domain, path, key, cb) {
	  if (this.idx[domain] && this.idx[domain][path] && this.idx[domain][path][key]) {
	    delete this.idx[domain][path][key];
	  }
	  cb(null);
	};

	MemoryCookieStore.prototype.removeCookies = function(domain, path, cb) {
	  if (this.idx[domain]) {
	    if (path) {
	      delete this.idx[domain][path];
	    } else {
	      delete this.idx[domain];
	    }
	  }
	  return cb(null);
	};

	MemoryCookieStore.prototype.getAllCookies = function(cb) {
	  var cookies = [];
	  var idx = this.idx;

	  var domains = Object.keys(idx);
	  domains.forEach(function(domain) {
	    var paths = Object.keys(idx[domain]);
	    paths.forEach(function(path) {
	      var keys = Object.keys(idx[domain][path]);
	      keys.forEach(function(key) {
	        if (key !== null) {
	          cookies.push(idx[domain][path][key]);
	        }
	      });
	    });
	  });

	  // Sort by creationIndex so deserializing retains the creation order.
	  // When implementing your own store, this SHOULD retain the order too
	  cookies.sort(function(a,b) {
	    return (a.creationIndex||0) - (b.creationIndex||0);
	  });

	  cb(null, cookies);
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Copyright (c) 2015, Salesforce.com, Inc.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *
	 * 1. Redistributions of source code must retain the above copyright notice,
	 * this list of conditions and the following disclaimer.
	 *
	 * 2. Redistributions in binary form must reproduce the above copyright notice,
	 * this list of conditions and the following disclaimer in the documentation
	 * and/or other materials provided with the distribution.
	 *
	 * 3. Neither the name of Salesforce.com nor the names of its contributors may
	 * be used to endorse or promote products derived from this software without
	 * specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	 * POSSIBILITY OF SUCH DAMAGE.
	 */
	"use strict";
	var pubsuffix = __webpack_require__(15);

	// Gives the permutation of all possible domainMatch()es of a given domain. The
	// array is in shortest-to-longest order.  Handy for indexing.
	function permuteDomain (domain) {
	  var pubSuf = pubsuffix.getPublicSuffix(domain);
	  if (!pubSuf) {
	    return null;
	  }
	  if (pubSuf == domain) {
	    return [domain];
	  }

	  var prefix = domain.slice(0, -(pubSuf.length + 1)); // ".example.com"
	  var parts = prefix.split('.').reverse();
	  var cur = pubSuf;
	  var permutations = [cur];
	  while (parts.length) {
	    cur = parts.shift() + '.' + cur;
	    permutations.push(cur);
	  }
	  return permutations;
	}

	exports.permuteDomain = permuteDomain;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/*!
	 * Copyright (c) 2015, Salesforce.com, Inc.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *
	 * 1. Redistributions of source code must retain the above copyright notice,
	 * this list of conditions and the following disclaimer.
	 *
	 * 2. Redistributions in binary form must reproduce the above copyright notice,
	 * this list of conditions and the following disclaimer in the documentation
	 * and/or other materials provided with the distribution.
	 *
	 * 3. Neither the name of Salesforce.com nor the names of its contributors may
	 * be used to endorse or promote products derived from this software without
	 * specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	 * POSSIBILITY OF SUCH DAMAGE.
	 */
	"use strict";
	/*
	 * "A request-path path-matches a given cookie-path if at least one of the
	 * following conditions holds:"
	 */
	function pathMatch (reqPath, cookiePath) {
	  // "o  The cookie-path and the request-path are identical."
	  if (cookiePath === reqPath) {
	    return true;
	  }

	  var idx = reqPath.indexOf(cookiePath);
	  if (idx === 0) {
	    // "o  The cookie-path is a prefix of the request-path, and the last
	    // character of the cookie-path is %x2F ("/")."
	    if (cookiePath.substr(-1) === "/") {
	      return true;
	    }

	    // " o  The cookie-path is a prefix of the request-path, and the first
	    // character of the request-path that is not included in the cookie- path
	    // is a %x2F ("/") character."
	    if (reqPath.substr(cookiePath.length, 1) === "/") {
	      return true;
	    }
	  }

	  return false;
	}

	exports.pathMatch = pathMatch;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
		"author": {
			"name": "Jeremy Stashewsky",
			"email": "jstashewsky@salesforce.com"
		},
		"contributors": [
			{
				"name": "Alexander Savin"
			},
			{
				"name": "Ian Livingstone"
			},
			{
				"name": "Ivan Nikulin"
			},
			{
				"name": "Lalit Kapoor"
			},
			{
				"name": "Sam Thompson"
			},
			{
				"name": "Sebastian Mayr"
			}
		],
		"license": "BSD-3-Clause",
		"name": "tough-cookie",
		"description": "RFC6265 Cookies and Cookie Jar for node.js",
		"keywords": [
			"HTTP",
			"cookie",
			"cookies",
			"set-cookie",
			"cookiejar",
			"jar",
			"RFC6265",
			"RFC2965"
		],
		"version": "2.2.2",
		"homepage": "https://github.com/SalesforceEng/tough-cookie",
		"repository": {
			"type": "git",
			"url": "git://github.com/SalesforceEng/tough-cookie.git"
		},
		"bugs": {
			"url": "https://github.com/SalesforceEng/tough-cookie/issues"
		},
		"main": "./lib/cookie",
		"files": [
			"lib"
		],
		"scripts": {
			"suffixup": "curl -o public_suffix_list.dat https://publicsuffix.org/list/public_suffix_list.dat && ./generate-pubsuffix.js",
			"test": "vows test/*_test.js"
		},
		"engines": {
			"node": ">=0.10.0"
		},
		"devDependencies": {
			"async": "^1.4.2",
			"vows": "^0.8.1"
		},
		"gitHead": "cc46628c4d7d2e8c372ecba29293ca8a207ec192",
		"_id": "tough-cookie@2.2.2",
		"_shasum": "c83a1830f4e5ef0b93ef2a3488e724f8de016ac7",
		"_from": "tough-cookie@>=2.2.0 <3.0.0",
		"_npmVersion": "3.3.12",
		"_nodeVersion": "5.1.1",
		"_npmUser": {
			"name": "jstash",
			"email": "jstash@gmail.com"
		},
		"dist": {
			"shasum": "c83a1830f4e5ef0b93ef2a3488e724f8de016ac7",
			"size": 61375,
			"noattachment": false,
			"key": "tough-cookie/-/tough-cookie-2.2.2.tgz",
			"tarball": "http://registry.npm.alibaba-inc.com/tough-cookie/download/tough-cookie-2.2.2.tgz"
		},
		"maintainers": [
			{
				"name": "goinstant",
				"email": "support@goinstant.com"
			},
			{
				"name": "jstash",
				"email": "jeremy@goinstant.com"
			}
		],
		"_npmOperationalInternal": {
			"host": "packages-13-west.internal.npmjs.com",
			"tmp": "tmp/tough-cookie-2.2.2.tgz_1457564639182_0.5129188685677946"
		},
		"directories": {},
		"publish_time": 1457564639570,
		"_cnpm_publish_time": 1457564639570,
		"_resolved": "http://registry.npm.alibaba-inc.com/tough-cookie/download/tough-cookie-2.2.2.tgz",
		"readme": "ERROR: No README data found!"
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const path = __webpack_require__(11);
	const URL = __webpack_require__(24).URL;
	const querystring = __webpack_require__(32);
	const domSymbolTree = __webpack_require__(33).domSymbolTree;
	const SYMBOL_TREE_POSITION = __webpack_require__(34).TreePosition;

	exports.toFileUrl = function (fileName) {
	  // Beyond just the `path.resolve`, this is mostly for the benefit of Windows,
	  // where we need to convert "\" to "/" and add an extra "/" prefix before the
	  // drive letter.
	  let pathname = path.resolve(process.cwd(), fileName).replace(/\\/g, "/");
	  if (pathname[0] !== "/") {
	    pathname = "/" + pathname;
	  }

	  // path might contain spaces, so convert those to %20
	  return "file://" + encodeURI(pathname);
	};

	/**
	 * Define a setter on an object
	 *
	 * This method replaces any existing setter but leaves getters in place.
	 *
	 * - `object` {Object} the object to define the setter on
	 * - `property` {String} the name of the setter
	 * - `setterFn` {Function} the setter
	 */
	exports.defineSetter = function defineSetter(object, property, setterFn) {
	  const descriptor = Object.getOwnPropertyDescriptor(object, property) || {
	    configurable: true,
	    enumerable: true
	  };

	  descriptor.set = setterFn;

	  Object.defineProperty(object, property, descriptor);
	};

	/**
	 * Define a getter on an object
	 *
	 * This method replaces any existing getter but leaves setters in place.
	 *
	 * - `object` {Object} the object to define the getter on
	 * - `property` {String} the name of the getter
	 * - `getterFn` {Function} the getter
	 */
	exports.defineGetter = function defineGetter(object, property, getterFn) {
	  const descriptor = Object.getOwnPropertyDescriptor(object, property) || {
	    configurable: true,
	    enumerable: true
	  };

	  descriptor.get = getterFn;

	  Object.defineProperty(object, property, descriptor);
	};

	/**
	 * Define a set of properties on an object, by copying the property descriptors
	 * from the original object.
	 *
	 * - `object` {Object} the target object
	 * - `properties` {Object} the source from which to copy property descriptors
	 */
	exports.define = function define(object, properties) {
	  for (const name of Object.getOwnPropertyNames(properties)) {
	    const propDesc = Object.getOwnPropertyDescriptor(properties, name);
	    Object.defineProperty(object, name, propDesc);
	  }
	};

	/**
	 * Define a list of constants on a constructor and its .prototype
	 *
	 * - `Constructor` {Function} the constructor to define the constants on
	 * - `propertyMap` {Object}  key/value map of properties to define
	 */
	exports.addConstants = function addConstants(Constructor, propertyMap) {
	  for (const property in propertyMap) {
	    const value = propertyMap[property];
	    addConstant(Constructor, property, value);
	    addConstant(Constructor.prototype, property, value);
	  }
	};

	function addConstant(object, property, value) {
	  Object.defineProperty(object, property, {
	    configurable: false,
	    enumerable: true,
	    writable: false,
	    value
	  });
	}

	let memoizeQueryTypeCounter = 0;

	/**
	 * Returns a version of a method that memoizes specific types of calls on the object
	 *
	 * - `fn` {Function} the method to be memozied
	 */
	exports.memoizeQuery = function memoizeQuery(fn) {
	  // Only memoize query functions with arity <= 2
	  if (fn.length > 2) {
	    return fn;
	  }

	  const type = memoizeQueryTypeCounter++;

	  return function () {
	    if (!this._memoizedQueries) {
	      return fn.apply(this, arguments);
	    }

	    if (!this._memoizedQueries[type]) {
	      this._memoizedQueries[type] = Object.create(null);
	    }

	    let key;
	    if (arguments.length === 1 && typeof arguments[0] === "string") {
	      key = arguments[0];
	    } else if (arguments.length === 2 && typeof arguments[0] === "string" && typeof arguments[1] === "string") {
	      key = arguments[0] + "::" + arguments[1];
	    } else {
	      return fn.apply(this, arguments);
	    }

	    if (!(key in this._memoizedQueries[type])) {
	      this._memoizedQueries[type][key] = fn.apply(this, arguments);
	    }
	    return this._memoizedQueries[type][key];
	  };
	};

	exports.resolveHref = function resolveHref(baseUrl, href) {
	  try {
	    return new URL(href, baseUrl).href;
	  } catch (e) {
	    // can't throw since this utility is basically used everywhere
	    // do what the spec says regarding anchor tags: just don't parse it
	    // https://html.spec.whatwg.org/#dom-hyperlink-href
	    return href;
	  }
	};

	exports.mapper = function (parent, filter, recursive) {
	  function skipRoot(node) {
	    return node !== parent && (!filter || filter(node));
	  }
	  return () => {
	    if (recursive !== false) { // default is not recursive
	      return domSymbolTree.treeToArray(parent, { filter: skipRoot });
	    }

	    return domSymbolTree.childrenToArray(parent, { filter });
	  };
	};

	function isValidAbsoluteURL(str) {
	  try {
	    /* eslint-disable no-new */
	    new URL(str);
	    /* eslint-enable no-new */

	    // If we can parse it, it's a valid absolute URL.
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	exports.isValidTargetOrigin = function (str) {
	  return str === "*" || str === "/" || isValidAbsoluteURL(str);
	};

	exports.simultaneousIterators = function* (first, second) {
	  for (;;) {
	    const firstResult = first.next();
	    const secondResult = second.next();

	    if (firstResult.done && secondResult.done) {
	      return;
	    }

	    yield [
	      firstResult.done ? null : firstResult.value,
	      secondResult.done ? null : secondResult.value
	    ];
	  }
	};

	exports.treeOrderSorter = function (a, b) {
	  const compare = domSymbolTree.compareTreePosition(a, b);

	  if (compare & SYMBOL_TREE_POSITION.PRECEDING) { // b is preceding a
	    return 1;
	  }

	  if (compare & SYMBOL_TREE_POSITION.FOLLOWING) {
	    return -1;
	  }

	  // disconnected or equal:
	  return 0;
	};

	exports.lengthFromProperties = function (arrayLike) {
	  let max = -1;
	  const keys = Object.keys(arrayLike);
	  const highestKeyIndex = keys.length - 1;

	  // Abuses a v8 implementation detail for a very fast case
	  // (if this implementation detail changes, this method will still
	  //  return correct results)
	  /* eslint-disable eqeqeq */
	  if (highestKeyIndex == keys[highestKeyIndex]) { // not ===
	    /* eslint-enable eqeqeq */
	    return keys.length;
	  }

	  for (let i = highestKeyIndex; i >= 0; --i) {
	    const asNumber = Number(keys[i]);

	    if (!Number.isNaN(asNumber) && asNumber > max) {
	      max = asNumber;
	    }
	  }
	  return max + 1;
	};

	const base64Regexp = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i;

	exports.parseDataUrl = function parseDataUrl(url) {
	  const urlParts = url.match(/^data:(.+?)(?:;(base64))?,(.*)$/);
	  let buffer;
	  if (urlParts[2] === "base64") {
	    if (urlParts[3] && !base64Regexp.test(urlParts[3])) {
	      throw new Error("Not a base64 string");
	    }
	    buffer = new Buffer(urlParts[3], "base64");
	  } else {
	    buffer = new Buffer(querystring.unescape(urlParts[3]));
	  }
	  return { buffer, type: urlParts[1] };
	};

	const tokenRegexp = exports.tokenRegexp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
	const fieldValueRegexp =
	  exports.fieldValueRegexp = /^[ \t]*(?:[\x21-\x7E\x80-\xFF](?:[ \t][\x21-\x7E\x80-\xFF])?)*[ \t]*$/;
	const contentTypeRegexp = /^(.*?)\/(.*?)([\t ]*;.*)?$/;
	const parameterValueRegexp = /^(.*?)=(.*)$/;
	const quotedStringRegexp = /"(?:[\t \x21\x23-\x5B\x5D-\x7E\x80-\xFF]|(?:\\[\t \x21-\x7E\x80-\xFF]))*"/;
	const qescRegExp = /\\([\t \x21-\x7E\x80-\xFF])/g;
	const quoteRegExp = /([\\"])/g;
	const headerListSeparatorRegexp = exports.headerListSeparatorRegexp = /,[ \t]*/;

	function qstring(val) {
	  if (tokenRegexp.test(val)) {
	    return val;
	  }
	  return "\"" + val.replace(quoteRegExp, "\\$1") + "\"";
	}

	class ContentType {
	  constructor(type, subtype, parameterList) {
	    this.type = type;
	    this.subtype = subtype;
	    this.parameterList = parameterList;
	  }
	  get(key) {
	    const param = this.parameterList.reverse().find(v => v.key === key);
	    return param ? param.value : null;
	  }
	  isXML() {
	    return (this.subtype === "xml" && (this.type === "text" || this.type === "application"))
	      || this.subtype.endsWith("+xml");
	  }
	  isHTML() {
	    return this.subtype === "html" && this.type === "text";
	  }
	  toString() {
	    return this.type + "/" + this.subtype +
	      this.parameterList.map(v => v.separator + (v.key ? v.key + "=" + qstring(v.value) : v.value))
	      .join("");
	  }
	}

	exports.parseContentType = function parseContentType(contentType) {
	  if (!contentType) {
	    return null;
	  }
	  const contentTypeMatch = contentTypeRegexp.exec(contentType);
	  if (contentTypeMatch) {
	    const type = contentTypeMatch[1];
	    const subtype = contentTypeMatch[2];
	    const parameters = contentTypeMatch[3];
	    if (tokenRegexp.test(type) && tokenRegexp.test(subtype)) {
	      const parameterPattern = /([\t ]*;[\t ]*)([^\t ;]*)/g;
	      const parameterList = [];
	      let match;
	      while (match = parameterPattern.exec(parameters)) {
	        const separator = match[1];
	        const keyValue = parameterValueRegexp.exec(match[2]);
	        let key;
	        let value;
	        if (keyValue && tokenRegexp.test(keyValue[1])) {
	          key = keyValue[1];
	          if(quotedStringRegexp.test(keyValue[2])) {
	            value = keyValue[2]
	              .substr(1, keyValue[2].length - 2)
	              .replace(qescRegExp, "$1");
	          } else {
	            value = keyValue[2];
	          }
	        }
	        if (key) {
	          parameterList.push({
	            separator,
	            key,
	            value
	          });
	        } else {
	          parameterList.push({
	            separator,
	            value: match[2]
	          });
	        }
	      }
	      return new ContentType(type, subtype, parameterList);
	    }
	    return null;
	  }
	  return null;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.URL = __webpack_require__(25).interface;
	exports.serializeURL = __webpack_require__(29).serializeURL;
	exports.serializeURLToUnicodeOrigin = __webpack_require__(29).serializeURLToUnicodeOrigin;
	exports.basicURLParse = __webpack_require__(29).basicURLParse;
	exports.setTheUsername = __webpack_require__(29).setTheUsername;
	exports.setThePassword = __webpack_require__(29).setThePassword;
	exports.serializeHost = __webpack_require__(29).serializeHost;
	exports.serializeInteger = __webpack_require__(29).serializeInteger;
	exports.parseURL = __webpack_require__(29).parseURL;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	const conversions = __webpack_require__(26);
	const utils = __webpack_require__(27);
	const Impl = __webpack_require__(28);

	const impl = utils.implSymbol;

	function URL(url) {
	  if (!this || this[impl] || !(this instanceof URL)) {
	    throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
	  }
	  if (arguments.length < 1) {
	    throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
	  }
	  const args = [];
	  for (let i = 0; i < arguments.length && i < 2; ++i) {
	    args[i] = arguments[i];
	  }
	  args[0] = conversions["USVString"](args[0]);
	  if (args[1] !== undefined) {
	  args[1] = conversions["USVString"](args[1]);
	  }

	  module.exports.setup(this, args);
	}

	URL.domainToASCII = function domainToASCII(domain) {
	  if (arguments.length < 1) {
	    throw new TypeError("Failed to execute 'domainToASCII' on 'URL': 1 argument required, but only " + arguments.length + " present.");
	  }
	  const args = [];
	  for (let i = 0; i < arguments.length && i < 1; ++i) {
	    args[i] = arguments[i];
	  }
	  args[0] = conversions["USVString"](args[0]);
	  return Impl.domainToASCII.apply(Impl, args);
	};

	URL.domainToUnicode = function domainToUnicode(domain) {
	  if (arguments.length < 1) {
	    throw new TypeError("Failed to execute 'domainToUnicode' on 'URL': 1 argument required, but only " + arguments.length + " present.");
	  }
	  const args = [];
	  for (let i = 0; i < arguments.length && i < 1; ++i) {
	    args[i] = arguments[i];
	  }
	  args[0] = conversions["USVString"](args[0]);
	  return Impl.domainToUnicode.apply(Impl, args);
	};
	Object.defineProperty(URL.prototype, "href", {
	  get() {
	    return this[impl].href;
	  },
	  set(V) {
	    V = conversions["USVString"](V);
	    this[impl].href = V;
	  },
	  enumerable: true,
	  configurable: true
	});

	URL.prototype.toString = function () {
	  if (!this || !module.exports.is(this)) {
	    throw new TypeError("Illegal invocation");
	  }
	  return this.href;
	};

	Object.defineProperty(URL.prototype, "origin", {
	  get() {
	    return this[impl].origin;
	  },
	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(URL.prototype, "protocol", {
	  get() {
	    return this[impl].protocol;
	  },
	  set(V) {
	    V = conversions["USVString"](V);
	    this[impl].protocol = V;
	  },
	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(URL.prototype, "username", {
	  get() {
	    return this[impl].username;
	  },
	  set(V) {
	    V = conversions["USVString"](V);
	    this[impl].username = V;
	  },
	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(URL.prototype, "password", {
	  get() {
	    return this[impl].password;
	  },
	  set(V) {
	    V = conversions["USVString"](V);
	    this[impl].password = V;
	  },
	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(URL.prototype, "host", {
	  get() {
	    return this[impl].host;
	  },
	  set(V) {
	    V = conversions["USVString"](V);
	    this[impl].host = V;
	  },
	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(URL.prototype, "hostname", {
	  get() {
	    return this[impl].hostname;
	  },
	  set(V) {
	    V = conversions["USVString"](V);
	    this[impl].hostname = V;
	  },
	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(URL.prototype, "port", {
	  get() {
	    return this[impl].port;
	  },
	  set(V) {
	    V = conversions["USVString"](V);
	    this[impl].port = V;
	  },
	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(URL.prototype, "pathname", {
	  get() {
	    return this[impl].pathname;
	  },
	  set(V) {
	    V = conversions["USVString"](V);
	    this[impl].pathname = V;
	  },
	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(URL.prototype, "search", {
	  get() {
	    return this[impl].search;
	  },
	  set(V) {
	    V = conversions["USVString"](V);
	    this[impl].search = V;
	  },
	  enumerable: true,
	  configurable: true
	});

	Object.defineProperty(URL.prototype, "hash", {
	  get() {
	    return this[impl].hash;
	  },
	  set(V) {
	    V = conversions["USVString"](V);
	    this[impl].hash = V;
	  },
	  enumerable: true,
	  configurable: true
	});


	module.exports = {
	  is(obj) {
	    return !!obj && obj[impl] instanceof Impl.implementation;
	  },
	  create(constructorArgs, privateData) {
	    let obj = Object.create(URL.prototype);
	    this.setup(obj, constructorArgs, privateData);
	    return obj;
	  },
	  setup(obj, constructorArgs, privateData) {
	    if (!privateData) privateData = {};
	    privateData.wrapper = obj;

	    obj[impl] = new Impl.implementation(constructorArgs, privateData);
	    obj[impl][utils.wrapperSymbol] = obj;
	  },
	  interface: URL,
	  expose: {
	    Window: { URL: URL },
	    Worker: { URL: URL }
	  }
	};



/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	var conversions = {};
	module.exports = conversions;

	function sign(x) {
	    return x < 0 ? -1 : 1;
	}

	function evenRound(x) {
	    // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
	    if ((x % 1) === 0.5 && (x & 1) === 0) { // [even number].5; round down (i.e. floor)
	        return Math.floor(x);
	    } else {
	        return Math.round(x);
	    }
	}

	function createNumberConversion(bitLength, typeOpts) {
	    if (!typeOpts.unsigned) {
	        --bitLength;
	    }
	    const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
	    const upperBound = Math.pow(2, bitLength) - 1;

	    const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
	    const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);

	    return function(V, opts) {
	        if (!opts) opts = {};

	        let x = +V;

	        if (opts.enforceRange) {
	            if (!Number.isFinite(x)) {
	                throw new TypeError("Argument is not a finite number");
	            }

	            x = sign(x) * Math.floor(Math.abs(x));
	            if (x < lowerBound || x > upperBound) {
	                throw new TypeError("Argument is not in byte range");
	            }

	            return x;
	        }

	        if (!isNaN(x) && opts.clamp) {
	            x = evenRound(x);

	            if (x < lowerBound) x = lowerBound;
	            if (x > upperBound) x = upperBound;
	            return x;
	        }

	        if (!Number.isFinite(x) || x === 0) {
	            return 0;
	        }

	        x = sign(x) * Math.floor(Math.abs(x));
	        x = x % moduloVal;

	        if (!typeOpts.unsigned && x >= moduloBound) {
	            return x - moduloVal;
	        } else if (typeOpts.unsigned) {
	            if (x < 0) {
	              x += moduloVal;
	            } else if (x === -0) { // don't return negative zero
	              return 0;
	            }
	        }

	        return x;
	    }
	}

	conversions["void"] = function () {
	    return undefined;
	};

	conversions["boolean"] = function (val) {
	    return !!val;
	};

	conversions["byte"] = createNumberConversion(8, { unsigned: false });
	conversions["octet"] = createNumberConversion(8, { unsigned: true });

	conversions["short"] = createNumberConversion(16, { unsigned: false });
	conversions["unsigned short"] = createNumberConversion(16, { unsigned: true });

	conversions["long"] = createNumberConversion(32, { unsigned: false });
	conversions["unsigned long"] = createNumberConversion(32, { unsigned: true });

	conversions["long long"] = createNumberConversion(32, { unsigned: false, moduloBitLength: 64 });
	conversions["unsigned long long"] = createNumberConversion(32, { unsigned: true, moduloBitLength: 64 });

	conversions["double"] = function (V) {
	    const x = +V;

	    if (!Number.isFinite(x)) {
	        throw new TypeError("Argument is not a finite floating-point value");
	    }

	    return x;
	};

	conversions["unrestricted double"] = function (V) {
	    const x = +V;

	    if (isNaN(x)) {
	        throw new TypeError("Argument is NaN");
	    }

	    return x;
	};

	// not quite valid, but good enough for JS
	conversions["float"] = conversions["double"];
	conversions["unrestricted float"] = conversions["unrestricted double"];

	conversions["DOMString"] = function (V, opts) {
	    if (!opts) opts = {};

	    if (opts.treatNullAsEmptyString && V === null) {
	        return "";
	    }

	    return String(V);
	};

	conversions["ByteString"] = function (V, opts) {
	    const x = String(V);
	    let c = undefined;
	    for (let i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
	        if (c > 255) {
	            throw new TypeError("Argument is not a valid bytestring");
	        }
	    }

	    return x;
	};

	conversions["USVString"] = function (V) {
	    const S = String(V);
	    const n = S.length;
	    const U = [];
	    for (let i = 0; i < n; ++i) {
	        const c = S.charCodeAt(i);
	        if (c < 0xD800 || c > 0xDFFF) {
	            U.push(String.fromCodePoint(c));
	        } else if (0xDC00 <= c && c <= 0xDFFF) {
	            U.push(String.fromCodePoint(0xFFFD));
	        } else {
	            if (i === n - 1) {
	                U.push(String.fromCodePoint(0xFFFD));
	            } else {
	                const d = S.charCodeAt(i + 1);
	                if (0xDC00 <= d && d <= 0xDFFF) {
	                    const a = c & 0x3FF;
	                    const b = d & 0x3FF;
	                    U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
	                    ++i;
	                } else {
	                    U.push(String.fromCodePoint(0xFFFD));
	                }
	            }
	        }
	    }

	    return U.join('');
	};

	conversions["Date"] = function (V, opts) {
	    if (!(V instanceof Date)) {
	        throw new TypeError("Argument is not a Date object");
	    }
	    if (isNaN(V)) {
	        return undefined;
	    }

	    return V;
	};

	conversions["RegExp"] = function (V, opts) {
	    if (!(V instanceof RegExp)) {
	        V = new RegExp(V);
	    }

	    return V;
	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	module.exports.mixin = function mixin(target, source) {
	  const keys = Object.getOwnPropertyNames(source);
	  for (let i = 0; i < keys.length; ++i) {
	    Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
	  }
	};

	module.exports.wrapperSymbol = Symbol("wrapper");
	module.exports.implSymbol = Symbol("impl");

	module.exports.wrapperForImpl = function (impl) {
	  return impl[module.exports.wrapperSymbol];
	};

	module.exports.implForWrapper = function (wrapper) {
	  return wrapper[module.exports.implSymbol];
	};



/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const usm = __webpack_require__(29);

	exports.implementation = class URLImpl {
	  constructor(constructorArgs) {
	    const url = constructorArgs[0];
	    const base = constructorArgs[1];

	    let parsedBase = null;
	    if (base !== undefined) {
	      parsedBase = usm.basicURLParse(base);
	      if (parsedBase.failure) {
	        throw new TypeError("Invalid base URL");
	      }
	    }

	    const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase });
	    if (parsedURL.failure) {
	      throw new TypeError("Invalid URL");
	    }

	    this._url = parsedURL;

	    // TODO: query stuff
	  }

	  static domainToASCII(domain) {
	    const asciiDomain = usm.parseHost(domain);
	    if (typeof asciiDomain !== "string") {
	      return "";
	    }
	    return asciiDomain;
	  }

	  static domainToUnicode(domain) {
	    const unicodeDomain = usm.parseHost(domain, true);
	    if (typeof unicodeDomain !== "string") {
	      return "";
	    }
	    return unicodeDomain;
	  }

	  get href() {
	    return usm.serializeURL(this._url);
	  }

	  set href(v) {
	    this._url = usm.basicURLParse(v);
	  }

	  get origin() {
	    return usm.serializeURLToUnicodeOrigin(this._url);
	  }

	  get protocol() {
	    return this._url.scheme + ":";
	  }

	  set protocol(v) {
	    usm.basicURLParse(v + ":", { url: this._url, stateOverride: "scheme start" });
	  }

	  get username() {
	    return this._url.username;
	  }

	  set username(v) {
	    if (this._url.host === null || this._url.nonRelative) {
	      return;
	    }

	    usm.setTheUsername(this._url, v);
	  }

	  get password() {
	    if (this._url.password === null) {
	      return "";
	    }

	    return this._url.password;
	  }

	  set password(v) {
	    if (this._url.host === null || this._url.nonRelative) {
	      return;
	    }

	    usm.setThePassword(this._url, v);
	  }

	  get host() {
	    const url = this._url;

	    if (url.host === null) {
	      return "";
	    }

	    if (url.port === null) {
	      return usm.serializeHost(url.host);
	    }

	    return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
	  }

	  set host(v) {
	    if (this._url.nonRelative) {
	      return;
	    }

	    usm.basicURLParse(v, { url: this._url, stateOverride: "host" });
	  }

	  get hostname() {
	    if (this._url.host === null) {
	      return "";
	    }

	    return usm.serializeHost(this._url.host);
	  }

	  set hostname(v) {
	    if (this._url.nonRelative) {
	      return;
	    }

	    usm.basicURLParse(v, { url: this._url, stateOverride: "hostname" });
	  }

	  get port() {
	    if (this._url.port === null) {
	      return "";
	    }

	    return usm.serializeInteger(this._url.port);
	  }

	  set port(v) {
	    if (this._url.host === null || this._url.nonRelative || this._url.scheme === "file") {
	      return;
	    }

	    usm.basicURLParse(v, { url: this._url, stateOverride: "port" });
	  }

	  get pathname() {
	    if (this._url.nonRelative) {
	      return this._url.path[0];
	    }

	    return "/" + this._url.path.join("/");
	  }

	  set pathname(v) {
	    if (this._url.nonRelative) {
	      return;
	    }

	    this._url.path = [];
	    usm.basicURLParse(v, { url: this._url, stateOverride: "path start" });
	  }

	  get search() {
	    if (this._url.query === null || this._url.query === "") {
	      return "";
	    }

	    return "?" + this._url.query;
	  }

	  set search(v) {
	    // TODO: query stuff

	    const url = this._url;

	    if (v === "") {
	      url.query = null;
	    }

	    const input = v[0] === "?" ? v.substring(1) : v;
	    url.query = "";
	    usm.basicURLParse(input, { url, stateOverride: "query" });
	  }

	  get hash() {
	    if (this._url.fragment === null || this._url.fragment === "") {
	      return "";
	    }

	    return "#" + this._url.fragment;
	  }

	  set hash(v) {
	    if (this._url.scheme === "javascript") {
	      return;
	    }

	    if (v === "") {
	      this._url.fragment = null;
	      return;
	    }

	    const input = v[0] === "#" ? v.substring(1) : v;
	    this._url.fragment = "";
	    usm.basicURLParse(input, { url: this._url, stateOverride: "fragment" });
	  }
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const punycode = __webpack_require__(16);

	const tr46 = __webpack_require__(30);

	const specialSchemas = {
	  "ftp": 21,
	  "file": null,
	  "gopher": 70,
	  "http": 80,
	  "https": 443,
	  "ws": 80,
	  "wss": 443
	};

	const localSchemas = [
	  "about",
	  "blob",
	  "data",
	  "filesystem"
	];

	const bufferReplacement = {
	  "%2e": ".",
	  ".%2e": "..",
	  "%2e.": "..",
	  "%2e%2e": ".."
	};

	const failure = Symbol("failure");

	function countSymbols(str) {
	  return punycode.ucs2.decode(str).length;
	}

	function at(input, idx) {
	  const c = input[idx];
	  return isNaN(c) ? undefined : String.fromCodePoint(c);
	}

	function isASCIIDigit(c) {
	  return c >= 0x30 && c <= 0x39;
	}

	function isASCIIAlpha(c) {
	  return (c >= 0x41 && c <= 0x5A) || (c >= 0x61 && c <= 0x7A);
	}

	function isASCIIHex(c) {
	  return isASCIIDigit(c) || (c >= 0x41 && c <= 0x46) || (c >= 0x61 && c <= 0x66);
	}

	function isSingleDot(buffer) {
	  return buffer === "." || buffer.toLowerCase() === "%2e";
	}

	function isDoubleDot(buffer) {
	  buffer = buffer.toLowerCase();
	  return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
	}

	function percentEncode(c) {
	  let hex = c.toString(16).toUpperCase();
	  if (hex.length === 1) {
	    hex = "0" + hex;
	  }

	  return "%" + hex;
	}

	const invalidCodePoint = String.fromCodePoint(65533);
	function utf8PercentEncode(c) {
	  const buf = new Buffer(c);
	  if (buf.toString() === invalidCodePoint) {
	    return "";
	  }

	  let str = "";

	  for (let i = 0; i < buf.length; ++i) {
	    str += percentEncode(buf[i]);
	  }

	  return str;
	}

	function utf8PercentDecode(str) {
	  const input = new Buffer(str);
	  const output = [];
	  for (let i = 0; i < input.length; ++i) {
	    if (input[i] !== 37) {
	      output.push(input[i]);
	    } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
	      output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
	      i += 2;
	    } else {
	      output.push(input[i]);
	    }
	  }
	  return new Buffer(output).toString();
	}

	function isSimpleEncode(c) {
	  return c <= 0x1F || c > 0x7E;
	}

	const defaultEncodeSet = [32, 34, 35, 60, 62, 63, 96, 123, 125];
	function isDefaultEncode(c) {
	  return isSimpleEncode(c) || defaultEncodeSet.indexOf(c) !== -1;
	}

	const userInfoEncodeSet = [47, 58, 59, 61, 64, 91, 92, 93, 94, 124];
	function isUserInfoEncode(c) {
	  return isDefaultEncode(c) || userInfoEncodeSet.indexOf(c) !== -1;
	}

	function encodeChar(c, checkCb) {
	  const c_str = String.fromCodePoint(c);

	  if (checkCb(c)) {
	    return utf8PercentEncode(c_str);
	  }

	  return c_str;
	}

	function parseIPv4Number(input) {
	  let R = 10;

	  if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
	    input = input.substring(2);
	    R = 16;
	  } else if (input.length >= 2 && input.charAt(0) === "0") {
	    input = input.substring(1);
	    R = 8;
	  }

	  if (input === "") {
	    return 0;
	  }

	  const regex = R === 10 ? /[^0-9]/ : (R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/);
	  if (regex.test(input)) {
	    return failure;
	  }

	  return parseInt(input, R);
	}

	function parseIPv4(input) {
	  let parts = input.split(".");
	  if (parts[parts.length - 1] === "") {
	    parts.pop();
	  }

	  if (parts.length > 4) {
	    return input;
	  }

	  let numbers = [];
	  for (const part of parts) {
	    const n = parseIPv4Number(part);
	    if (n === failure) {
	      return input;
	    }

	    numbers.push(n);
	  }

	  for (let i = 0; i < numbers.length - 1; ++i) {
	    if (numbers[i] > 255) {
	      return failure;
	    }
	  }
	  if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
	    return failure;
	  }

	  let ipv4 = numbers.pop();
	  let counter = 0;

	  for (const n of numbers) {
	    ipv4 += n * Math.pow(256, 3 - counter);
	    ++counter;
	  }

	  return ipv4;
	}

	function serializeIPv4(address) {
	  let output = "";
	  let n = address;

	  for (let i = 0; i < 4; ++i) {
	    output = String(n % 256) + output;
	    if (i !== 3) {
	      output = "." + output;
	    }
	    n = Math.floor(n / 256);
	  }

	  return output;
	}

	function parseIPv6(input) {
	  const ip = [0, 0, 0, 0, 0, 0, 0, 0];
	  let piecePtr = 0;
	  let compressPtr = null;
	  let pointer = 0;

	  input = punycode.ucs2.decode(input);

	  if (input[pointer] === 58) {
	    if (input[pointer + 1] !== 58) {
	      return failure;
	    }

	    pointer += 2;
	    ++piecePtr;
	    compressPtr = piecePtr;
	  }

	  let ipv4 = false;
	  Main:
	  while (pointer < input.length) {
	    if (piecePtr === 8) {
	      return failure;
	    }

	    if (input[pointer] === 58) {
	      if (compressPtr !== null) {
	        return failure;
	      }
	      ++pointer;
	      ++piecePtr;
	      compressPtr = piecePtr;
	      continue;
	    }

	    let value = 0;
	    let length = 0;

	    while (length < 4 && isASCIIHex(input[pointer])) {
	      value = value * 0x10 + parseInt(at(input, pointer), 16);
	      ++pointer;
	      ++length;
	    }

	    switch (at(input, pointer)) {
	      case ".":
	        if (length === 0) {
	          return failure;
	        }
	        pointer -= length;
	        ipv4 = true;
	        break Main;
	      case ":":
	        ++pointer;
	        if (input[pointer] === undefined) {
	          return failure;
	        }
	        break;
	      case undefined:
	        break;
	      default:
	        return failure;
	    }

	    ip[piecePtr] = value;
	    ++piecePtr;
	  }

	  if (ipv4 && piecePtr > 6) {
	    return failure;
	  } else if (input[pointer] !== undefined) {
	    let dotsSeen = 0;

	    while (input[pointer] !== undefined) {
	      let value = null;
	      if (!isASCIIDigit(input[pointer])) {
	        return failure;
	      }

	      while (isASCIIDigit(input[pointer])) {
	        const number = parseInt(at(input, pointer), 10);
	        if (value === null) {
	          value = number;
	        } else if (value === 0) {
	          return failure;
	        } else {
	          value = value * 10 + number;
	        }
	        ++pointer;
	        if (value > 255) {
	          return failure;
	        }
	      }

	      if (dotsSeen < 3 && input[pointer] !== 46) {
	        return failure;
	      }
	      ip[piecePtr] = ip[piecePtr] * 0x100 + value;
	      if (dotsSeen === 1 || dotsSeen === 3) {
	        ++piecePtr;
	      }

	      if (input[pointer] !== undefined) {
	        ++pointer;
	      }

	      if (dotsSeen === 3 && input[pointer] !== undefined) {
	        return failure;
	      }
	      ++dotsSeen;
	    }
	  }

	  if (compressPtr !== null) {
	    let swaps = piecePtr - compressPtr;
	    piecePtr = 7;
	    while (piecePtr !== 0 && swaps > 0) {
	      const temp = ip[compressPtr + swaps - 1]; // piece
	      ip[compressPtr + swaps - 1] = ip[piecePtr];
	      ip[piecePtr] = temp;
	      --piecePtr;
	      --swaps;
	    }
	  } else if (piecePtr !== 8) {
	    return failure;
	  }

	  return ip;
	}

	function serializeIPv6(address) {
	  let output = "";
	  const seqResult = findLongestZeroSequence(address);
	  const compressPtr = seqResult.idx;

	  for (var i = 0; i < address.length; ++i) {
	    if (compressPtr === i) {
	      if (i === 0) {
	        output += "::";
	      } else {
	        output += ":";
	      }

	      i += seqResult.len - 1;
	      continue;
	    }

	    output += address[i].toString(16);
	    if (i !== address.length - 1) {
	      output += ":";
	    }
	  }

	  return output;
	}

	function parseHost(input, isUnicode) {
	  if (input[0] === "[") {
	    if (input[input.length - 1] !== "]") {
	      return failure;
	    }

	    return parseIPv6(input.substring(1, input.length - 1));
	  }

	  const domain = utf8PercentDecode(input);
	  const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.TRANSITIONAL, false);
	  if (asciiDomain === null) {
	    return failure;
	  }

	  if (asciiDomain.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1) {
	    return failure;
	  }

	  let ipv4Host = parseIPv4(asciiDomain);
	  if (typeof ipv4Host === "number" || ipv4Host === failure) {
	    return ipv4Host;
	  }

	  return isUnicode ? tr46.toUnicode(asciiDomain, false).domain : asciiDomain;
	}

	function findLongestZeroSequence(arr) {
	  let maxIdx = null;
	  let maxLen = 1; // only find elements > 1
	  let currStart = null;
	  let currLen = 0;

	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] !== 0) {
	      if (currLen > maxLen) {
	        maxIdx = currStart;
	        maxLen = currLen;
	      }

	      currStart = null;
	      currLen = 0;
	    } else {
	      if (currStart === null) {
	        currStart = i;
	      }
	      ++currLen;
	    }
	  }

	  return {
	    idx: maxIdx,
	    len: maxLen
	  };
	}

	function serializeHost(host) {
	  if (typeof host === "number") {
	    return serializeIPv4(host);
	  }

	  // IPv6 serializer
	  if (host instanceof Array) {
	    return "[" + serializeIPv6(host) + "]";
	  }

	  return host;
	}

	function trimControlChars(url) {
	  return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
	}

	function URLStateMachine(input, base, encoding_override, url, state_override) {
	  this.pointer = 0;
	  this.input = input;
	  this.base = base || null;
	  this.encoding_override = encoding_override || "utf-8";
	  this.state_override = state_override;
	  this.url = url;
	  this.failure = false;
	  this.parse_error = false;

	  if (!this.url) {
	    this.url = {
	      scheme: "",
	      username: "",
	      password: null,
	      host: null,
	      port: null,
	      path: [],
	      query: null,
	      fragment: null,

	      nonRelative: false
	    };

	    const res = trimControlChars(this.input);
	    if (res !== this.input) {
	      this.parse_error = true;
	    }
	    this.input = res;
	  }

	  this.state = state_override || "scheme start";

	  this.buffer = "";
	  this.at_flag = false;
	  this.arr_flag = false;

	  this.input = punycode.ucs2.decode(this.input);

	  for (; this.pointer <= this.input.length; ++this.pointer) {
	    const c = this.input[this.pointer];
	    const c_str = isNaN(c) ? undefined : String.fromCodePoint(c);

	    // exec state machine
	    const ret = this["parse" + this.state](c, c_str);
	    if (ret === false) {
	      break; // terminate algorithm
	    } else if (ret === failure) {
	      this.failure = true;
	      break;
	    }
	  }
	}

	URLStateMachine.prototype["parse" + "scheme start"] =
	    function parseSchemeStart(c, c_str) {
	  if (isASCIIAlpha(c)) {
	    this.buffer += c_str.toLowerCase();
	    this.state = "scheme";
	  } else if (!this.state_override) {
	    this.state = "no scheme";
	    --this.pointer;
	  } else {
	    this.parse_error = true;
	    return false;
	  }
	};

	URLStateMachine.prototype["parse" + "scheme"] =
	    function parseScheme(c, c_str) {
	  if (isASCIIAlpha(c) || c === 43 || c === 45 || c === 46) {
	    this.buffer += c_str.toLowerCase();
	  } else if (c === 58) {
	    if (this.state_override) {
	      // TODO: XOR
	      if (specialSchemas[this.url.scheme] !== undefined && !specialSchemas[this.buffer]) {
	        return false;
	      } else if (specialSchemas[this.url.scheme] === undefined && specialSchemas[this.buffer]) {
	        return false;
	      }
	    }
	    this.url.scheme = this.buffer;
	    this.buffer = "";
	    if (this.state_override) {
	      return false;
	    }
	    if (this.url.scheme === "file") {
	      if (this.input[this.pointer + 1] === 47 && this.input[this.pointer + 2] === 47) {
	        this.parse_error = true;
	      }
	      this.state = "file";
	    } else if (specialSchemas[this.url.scheme] !== undefined && this.base !== null &&
	               this.base.scheme === this.url.scheme) {
	      this.state = "special relative or authority";
	    } else if (specialSchemas[this.url.scheme] !== undefined) {
	      this.state = "special authority slashes";
	    } else if (this.input[this.pointer + 1] === 47) {
	      this.state = "path or authority";
	      ++this.pointer;
	    } else {
	      this.url.nonRelative = true;
	      this.url.path.push("");
	      this.state = "non-relative path";
	    }
	  } else if (!this.state_override) {
	    this.buffer = "";
	    this.state = "no scheme";
	    this.pointer = -1;
	  } else {
	    this.parse_error = true;
	    return false;
	  }
	};

	URLStateMachine.prototype["parse" + "no scheme"] =
	    function parseNoScheme(c, c_str) {
	  //jshint unused:false
	  if (this.base === null || (this.base.nonRelative && c !== 35)) {
	    return failure;
	  } else if (this.base.nonRelative && c === 35) {
	    this.url.scheme = this.base.scheme;
	    this.url.path = this.base.path.slice();
	    this.url.query = this.base.query;
	    this.url.fragment = "";
	    this.url.nonRelative = true;
	    this.state = "fragment";
	  } else if (this.base.scheme === "file") {
	    this.state = "file";
	    --this.pointer;
	  } else {
	    this.state = "relative";
	    --this.pointer;
	  }
	};

	URLStateMachine.prototype["parse" + "special relative or authority"] =
	    function parseSpecialRelativeOrAuthority(c, c_str) {
	  if (c === 47 && this.input[this.pointer + 1] === 47) {
	    this.state = "special authority ignore slashes";
	    ++this.pointer;
	  } else {
	    this.parse_error = true;
	    this.state = "relative";
	    --this.pointer;
	  }
	};

	URLStateMachine.prototype["parse" + "path or authority"] =
	    function parsePathOrAuthority(c, c_str) {
	  if (c === 47) {
	    this.state = "authority";
	  } else {
	    this.state = "path";
	    --this.pointer;
	  }
	};

	URLStateMachine.prototype["parse" + "relative"] =
	    function parseRelative(c, c_str) {
	  this.url.scheme = this.base.scheme;
	  if (isNaN(c)) {
	    this.url.username = this.base.username;
	    this.url.password = this.base.password;
	    this.url.host = this.base.host;
	    this.url.port = this.base.port;
	    this.url.path = this.base.path.slice();
	    this.url.query = this.base.query;
	  } else if (c === 47) {
	    this.state = "relative slash";
	  } else if (c === 63) {
	    this.url.username = this.base.username;
	    this.url.password = this.base.password;
	    this.url.host = this.base.host;
	    this.url.port = this.base.port;
	    this.url.path = this.base.path.slice();
	    this.url.query = "";
	    this.state = "query";
	  } else if (c === 35) {
	    this.url.username = this.base.username;
	    this.url.password = this.base.password;
	    this.url.host = this.base.host;
	    this.url.port = this.base.port;
	    this.url.path = this.base.path.slice();
	    this.url.query = this.base.query;
	    this.url.fragment = "";
	    this.state = "fragment";
	  } else if (specialSchemas[this.url.scheme] !== undefined && c === 92) {
	    this.parse_error = true;
	    this.state = "relative slash";
	  } else {
	    this.url.username = this.base.username;
	    this.url.password = this.base.password;
	    this.url.host = this.base.host;
	    this.url.port = this.base.port;
	    this.url.path = this.base.path.slice(0, this.base.path.length - 1);

	    this.state = "path";
	    --this.pointer;
	  }
	};

	URLStateMachine.prototype["parse" + "relative slash"] =
	    function parseRelativeSlash(c, c_str) {
	  if (c === 47 || (specialSchemas[this.url.scheme] !== undefined && c === 92)) {
	    if (c === 92) {
	      this.parse_error = true;
	    }
	    this.state = "special authority ignore slashes";
	  } else {
	    this.url.username = this.base.username;
	    this.url.password = this.base.password;
	    this.url.host = this.base.host;
	    this.url.port = this.base.port;
	    this.state = "path";
	    --this.pointer;
	  }
	};

	URLStateMachine.prototype["parse" + "special authority slashes"] =
	    function parseSpecialAuthoritySlashes(c, c_str) {
	  if (c === 47 && this.input[this.pointer + 1] === 47) {
	    this.state = "special authority ignore slashes";
	    ++this.pointer;
	  } else {
	    this.parse_error = true;
	    this.state = "special authority ignore slashes";
	    --this.pointer;
	  }
	};

	URLStateMachine.prototype["parse" + "special authority ignore slashes"] =
	    function parseSpecialAuthorityIgnoreSlashes(c, c_str) {
	  if (c !== 47 && c !== 92) {
	    this.state = "authority";
	    --this.pointer;
	  } else {
	    this.parse_error = true;
	  }
	};

	URLStateMachine.prototype["parse" + "authority"] =
	    function parseAuthority(c, c_str) {
	  if (c === 64) {
	    this.parse_error = true;
	    if (this.at_flag) {
	      this.buffer = "%40" + this.buffer;
	    }
	    this.at_flag = true;

	    // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
	    const len = countSymbols(this.buffer);
	    for (let pointer = 0; pointer < len; ++pointer) {
	      /* jshint -W004 */
	      const c = this.buffer.codePointAt(pointer);
	      /* jshint +W004 */

	      if (c === 0x9 || c === 0xA || c === 0xD) {
	        continue;
	      }

	      if (c === 58 && this.url.password === null) {
	        this.url.password = "";
	        continue;
	      }
	      const encodedCodePoints = encodeChar(c, isUserInfoEncode);
	      if (this.url.password !== null) {
	        this.url.password += encodedCodePoints;
	      } else {
	        this.url.username += encodedCodePoints;
	      }
	    }
	    this.buffer = "";
	  } else if (isNaN(c) || c === 47 || c === 63 || c === 35 ||
	             (specialSchemas[this.url.scheme] !== undefined && c === 92)) {
	    this.pointer -= countSymbols(this.buffer) + 1;
	    this.buffer = "";
	    this.state = "host";
	  } else {
	    this.buffer += c_str;
	  }
	};

	URLStateMachine.prototype["parse" + "host name"] =
	URLStateMachine.prototype["parse" + "host"] =
	    function parseHostName(c, c_str) {
	  if (c === 58 && !this.arr_flag) {
	    if (specialSchemas[this.url.scheme] !== undefined && this.buffer === "") {
	      return failure;
	    }

	    let host = parseHost(this.buffer);
	    if (host === failure) {
	      return failure;
	    }

	    this.url.host = host;
	    this.buffer = "";
	    this.state = "port";
	    if (this.state_override === "host name") {
	      return false;
	    }
	  } else if (isNaN(c) || c === 47 || c === 63 || c === 35 ||
	             (specialSchemas[this.url.scheme] !== undefined && c === 92)) {
	    --this.pointer;
	    if (specialSchemas[this.url.scheme] !== undefined && this.buffer === "") {
	      return failure;
	    }

	    let host = parseHost(this.buffer);
	    if (host === failure) {
	      return failure;
	    }

	    this.url.host = host;
	    this.buffer = "";
	    this.state = "path start";
	    if (this.state_override) {
	      return false;
	    }
	  } else if (c === 0x9 || c === 0xA || c === 0xD) {
	    this.parse_error = true;
	  } else {
	    if (c === 91) {
	      this.arr_flag = true;
	    } else if (c === 93) {
	      this.arr_flag = false;
	    }
	    this.buffer += c_str;
	  }
	};

	URLStateMachine.prototype["parse" + "port"] =
	    function parsePort(c, c_str) {
	  if (isASCIIDigit(c)) {
	    this.buffer += c_str;
	  } else if (isNaN(c) || c === 47 || c === 63 || c === 35 ||
	             (specialSchemas[this.url.scheme] !== undefined && c === 92) ||
	             this.state_override) {
	    if (this.buffer !== "") {
	      const port = parseInt(this.buffer, 10);
	      if (port > Math.pow(2, 16) - 1) {
	        this.parse_error = true;
	        return failure;
	      }
	      this.url.port = port === specialSchemas[this.url.scheme] ? null : port;
	      this.buffer = "";
	    }
	    if (this.state_override) {
	      return false;
	    }
	    this.state = "path start";
	    --this.pointer;
	  } else if (c === 0x9 || c === 0xA || c === 0xD) {
	    this.parse_error = true;
	  } else {
	    this.parse_error = true;
	    return failure;
	  }
	};

	URLStateMachine.prototype["parse" + "file"] =
	    function parseFile(c, c_str) {
	  this.url.scheme = "file";
	  if (isNaN(c)) {
	    if (this.base !== null && this.base.scheme === "file") {
	      this.url.host = this.base.host;
	      this.url.path = this.base.path.slice();
	      this.url.query = this.base.query;
	    }
	  } else if (c === 47 || c === 92) {
	    if (c === 92) {
	      this.parse_error = true;
	    }
	    this.state = "file slash";
	  } else if (c === 63) {
	    if (this.base !== null && this.base.scheme === "file") {
	      this.url.host = this.base.host;
	      this.url.path = this.base.path.slice();
	      this.url.query = "";
	    }
	    this.state = "query";
	  } else if (c === 35) {
	    if (this.base !== null && this.base.scheme === "file") {
	      this.url.host = this.base.host;
	      this.url.path = this.base.path.slice();
	      this.url.query = this.base.query;
	      this.url.fragment = "";
	    }
	    this.state = "fragment";
	  } else {
	    if (this.base !== null && this.base.scheme === "file") {
	      if ((!isASCIIAlpha(c) || // windows drive letter
	           (this.input[this.pointer + 1] !== 58 && this.input[this.pointer + 1] !== 124)) ||
	          this.input.length - this.pointer - 1 === 1 || // remaining consists of 1 code point
	          [47, 92, 63, 35].indexOf(this.input[this.pointer + 2]) === -1) {
	        this.url.host = this.base.host;
	        this.url.path = this.base.path.slice();
	        this.url.path.pop();
	      } else {
	        this.parse_error = true;
	      }
	    }
	    this.state = "path";
	    --this.pointer;
	  }
	};

	URLStateMachine.prototype["parse" + "file slash"] =
	    function parseFileSlash(c, c_str) {
	  if (c === 47 || c === 92) {
	    if (c === 92) {
	      this.parse_error = true;
	    }
	    this.state = "file host";
	  } else {
	    if (this.base !== null && this.base.scheme === "file") {
	      if (this.base.path.length && isASCIIAlpha(this.base.path[0][0].charCodeAt(0)) && this.base.path[0][1] === ":") {
	        this.url.path.push(this.base.path[0]);
	      }
	    }
	    this.state = "path";
	    --this.pointer;
	  }
	};

	URLStateMachine.prototype["parse" + "file host"] =
	    function parseFileHost(c, c_str) {
	  if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
	    --this.pointer;
	    // don't need to count symbols here since we check ASCII values
	    if (this.buffer.length === 2 &&
	      isASCIIAlpha(this.buffer.codePointAt(0)) && (this.buffer[1] === ":" || this.buffer[1] === "|")) {
	      this.state = "path";
	    } else if (this.buffer === "") {
	      this.state = "path start";
	    } else {
	      let host = parseHost(this.buffer);
	      if (host === failure) {
	        return failure;
	      }
	      if (host !== "localhost") {
	        this.url.host = host;
	      }

	      this.buffer = "";
	      this.state = "path start";
	    }
	  } else if (c === 0x9 || c === 0xA || c === 0xD) {
	    this.parse_error = true;
	  } else {
	    this.buffer += c_str;
	  }
	};

	URLStateMachine.prototype["parse" + "path start"] =
	    function parsePathStart(c, c_str) {
	  if (specialSchemas[this.url.scheme] !== undefined && c === 92) {
	    this.parse_error = true;
	  }
	  this.state = "path";
	  if (c !== 47 && !(specialSchemas[this.url.scheme] !== undefined && c === 92)) {
	    --this.pointer;
	  }
	};

	URLStateMachine.prototype["parse" + "path"] =
	    function parsePath(c, c_str) {
	  if (isNaN(c) || c === 47 || (specialSchemas[this.url.scheme] !== undefined && c === 92) ||
	      (!this.state_override && (c === 63 || c === 35))) {
	    if (specialSchemas[this.url.scheme] !== undefined && c === 92) {
	      this.parse_error = true;
	    }

	    if (isDoubleDot(this.buffer)) {
	      this.url.path.pop();
	      if (c !== 47 && !(specialSchemas[this.url.scheme] !== undefined && c === 92)) {
	        this.url.path.push("");
	      }
	    } else if (isSingleDot(this.buffer) && c !== 47 &&
	               !(specialSchemas[this.url.scheme] !== undefined && c === 92)) {
	      this.url.path.push("");
	    } else if (!isSingleDot(this.buffer)) {
	      if (this.url.scheme === "file" && this.url.path.length === 0 &&
	        this.buffer.length === 2 && isASCIIAlpha(this.buffer.codePointAt(0)) &&
	        (this.buffer[1] === "|" || this.buffer[1] === ":")) {
	        if (this.url.host !== null) {
	          this.parse_error = true;
	        }
	        this.url.host = null;
	        this.buffer = this.buffer[0] + ":";
	      }
	      this.url.path.push(this.buffer);
	    }
	    this.buffer = "";
	    if (c === 63) {
	      this.url.query = "";
	      this.state = "query";
	    }
	    if (c === 35) {
	      this.url.fragment = "";
	      this.state = "fragment";
	    }
	  } else if (c === 0x9 || c === 0xA || c === 0xD) {
	    this.parse_error = true;
	  } else {
	    // TODO: If c is not a URL code point and not "%", parse error.

	    if (c === 37 &&
	      (!isASCIIHex(this.input[this.pointer + 1]) ||
	        !isASCIIHex(this.input[this.pointer + 2]))) {
	      this.parse_error = true;
	    }

	    if (c === 37 &&
	        this.input[this.pointer + 1] === 50 &&
	        (this.input[this.pointer + 2] === 101 || this.input[this.pointer + 2] === 69)) {
	      this.buffer += ".";
	      this.pointer += 2;
	    } else {
	      this.buffer += encodeChar(c, isDefaultEncode);
	    }
	  }
	};

	URLStateMachine.prototype["parse" + "non-relative path"] =
	    function parseNonRelativePath(c, c_str) {
	  if (c === 63) {
	    this.url.query = "";
	    this.state = "query";
	  } else if (c === 35) {
	    this.url.fragment = "";
	    this.state = "fragment";
	  } else {
	    // TODO: Add: not a URL code point
	    if (!isNaN(c) && c !== 37) {
	      this.parse_error = true;
	    }

	    if (c === 37 &&
	        (!isASCIIHex(this.input[this.pointer + 1]) ||
	         !isASCIIHex(this.input[this.pointer + 2]))) {
	      this.parse_error = true;
	    }

	    if (!isNaN(c) && c !== 0x9 && c !== 0xA && c !== 0xD) {
	      this.url.path[0] = this.url.path[0] + encodeChar(c, isSimpleEncode);
	    }
	  }
	};

	URLStateMachine.prototype["parse" + "query"] =
	    function parseQuery(c, c_str) {
	  if (isNaN(c) || (!this.state_override && c === 35)) {
	    if (specialSchemas[this.url.scheme] === undefined || this.url.scheme === "ws" || this.url.scheme === "wss") {
	      this.encoding_override = "utf-8";
	    }

	    const buffer = new Buffer(this.buffer); //TODO: Use encoding override instead
	    for (let i = 0; i < buffer.length; ++i) {
	      if (buffer[i] < 0x21 || buffer[i] > 0x7E || buffer[i] === 0x22 || buffer[i] === 0x23 ||
	          buffer[i] === 0x3C || buffer[i] === 0x3E) {
	        this.url.query += percentEncode(buffer[i]);
	      } else {
	        this.url.query += String.fromCodePoint(buffer[i]);
	      }
	    }

	    this.buffer = "";
	    if (c === 35) {
	      this.url.fragment = "";
	      this.state = "fragment";
	    }
	  } else if (c === 0x9 || c === 0xA || c === 0xD) {
	    this.parse_error = true;
	  } else {
	    //TODO: If c is not a URL code point and not "%", parse error.
	    if (c === 37 &&
	      (!isASCIIHex(this.input[this.pointer + 1]) ||
	        !isASCIIHex(this.input[this.pointer + 2]))) {
	      this.parse_error = true;
	    }

	    this.buffer += c_str;
	  }
	};

	URLStateMachine.prototype["parse" + "fragment"] =
	    function parseFragment(c, c_str) {
	  if (isNaN(c)) { // do nothing
	  } else if (c === 0x0 || c === 0x9 || c === 0xA || c === 0xD) {
	    this.parse_error = true;
	  } else {
	    //TODO: If c is not a URL code point and not "%", parse error.
	    if (c === 37 &&
	      (!isASCIIHex(this.input[this.pointer + 1]) ||
	        !isASCIIHex(this.input[this.pointer + 2]))) {
	      this.parse_error = true;
	    }

	    this.url.fragment += c_str;
	  }
	};

	function serializeURL(url, excludeFragment) {
	  let output = url.scheme + ":";
	  if (url.host !== null) {
	    output += "//" + url.username;
	    if (url.password !== null) {
	      output += ":" + url.password;
	    }
	    if (url.username !== "" || url.password !== null) {
	      output += "@";
	    }
	    output += serializeHost(url.host);
	    if (url.port !== null) {
	      output += ":" + url.port;
	    }
	  } else if (url.host === null && url.scheme === "file") {
	    output += "//";
	  }

	  if (url.nonRelative) {
	    output += url.path[0];
	  } else {
	    output += "/" + url.path.join("/");
	  }

	  if (url.query !== null) {
	    output += "?" + url.query;
	  }

	  if (!excludeFragment && url.fragment !== null) {
	    output += "#" + url.fragment;
	  }

	  return output;
	}

	function serializeOrigin(tuple) {
	  if (tuple.scheme === undefined || tuple.host === undefined || tuple.port === undefined) {
	    return "null";
	  }

	  let result = tuple.scheme + "://";
	  result += tr46.toUnicode(tuple.host, false).domain;

	  if (specialSchemas[tuple.scheme] && tuple.port !== specialSchemas[tuple.scheme]) {
	    result += ":" + tuple.port;
	  }

	  return result;
	}

	// TODO these will be useful for URL constructor
	function urlToASCII(domain) {
	  try {
	    const asciiDomain = parseHost(domain);
	    if (typeof asciiDomain !== "string") {
	      return "";
	    }
	    return asciiDomain;
	  } catch (e) {
	    return "";
	  }
	}

	function urlToUnicode(domain) {
	  try {
	    const unicodeDomain = parseHost(domain, true);
	    if (typeof unicodeDomain !== "string") {
	      return "";
	    }
	    return unicodeDomain;
	  } catch (e) {
	    return "";
	  }
	}

	module.exports.serializeURL = serializeURL;

	module.exports.serializeURLToUnicodeOrigin = function (url) {
	  switch (url.scheme) {
	    case "blob":
	      try {
	        return module.exports.serializeURLToUnicodeOrigin(module.exports.parseURL(url.path[0]));
	      } catch (e) {
	        // serializing an opaque identifier returns "null"
	        return "null";
	      }
	      break;
	    case "ftp":
	    case "gopher":
	    case "http":
	    case "https":
	    case "ws":
	    case "wss":
	      return serializeOrigin({
	        scheme: url.scheme,
	        host: serializeHost(url.host),
	        port: url.port === null ? specialSchemas[url.scheme] : url.port
	      });
	    case "file":
	      // spec says "exercise to the reader", chrome says "file://"
	      return "file://";
	    default:
	      // serializing an opaque identifier returns "null"
	      return "null";
	  }
	};

	module.exports.basicURLParse = function (input, options) {
	  if (options === undefined) {
	    options = {};
	  }

	  const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
	  if (usm.failure) {
	    throw new TypeError("Invalid URL");
	  }

	  return usm.url;
	};

	module.exports.setTheUsername = function (url, username) {
	  url.username = "";
	  const decoded = punycode.ucs2.decode(username);
	  for (let i = 0; i < decoded.length; ++i) {
	    url.username += encodeChar(decoded[i], isUserInfoEncode);
	  }
	};

	module.exports.setThePassword = function (url, password) {
	  if (password === "") {
	    url.password = null;
	  } else {
	    url.password = "";
	    const decoded = punycode.ucs2.decode(password);
	    for (let i = 0; i < decoded.length; ++i) {
	      url.password += encodeChar(decoded[i], isUserInfoEncode);
	    }
	  }
	};

	module.exports.serializeHost = serializeHost;

	module.exports.serializeInteger = function (integer) {
	  return String(integer);
	};

	module.exports.parseURL = function (input, options) {
	  if (options === undefined) {
	    options = {};
	  }

	  // We don't handle blobs, so this just delegates:
	  return module.exports.basicURLParse(input, { baseURL: options.baseURL, encodingOverride: options.encodingOverride });
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var punycode = __webpack_require__(16);
	var mappingTable = __webpack_require__(31);

	var PROCESSING_OPTIONS = {
	  TRANSITIONAL: 0,
	  NONTRANSITIONAL: 1
	};

	function normalize(str) { // fix bug in v8
	  return str.split('\u0000').map(function (s) { return s.normalize('NFC'); }).join('\u0000');
	}

	function findStatus(val) {
	  var start = 0;
	  var end = mappingTable.length - 1;

	  while (start <= end) {
	    var mid = Math.floor((start + end) / 2);

	    var target = mappingTable[mid];
	    if (target[0][0] <= val && target[0][1] >= val) {
	      return target;
	    } else if (target[0][0] > val) {
	      end = mid - 1;
	    } else {
	      start = mid + 1;
	    }
	  }

	  return null;
	}

	var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

	function countSymbols(string) {
	  return string
	    // replace every surrogate pair with a BMP symbol
	    .replace(regexAstralSymbols, '_')
	    // then get the length
	    .length;
	}

	function mapChars(domain_name, useSTD3, processing_option) {
	  var hasError = false;
	  var processed = "";

	  var len = countSymbols(domain_name);
	  for (var i = 0; i < len; ++i) {
	    var codePoint = domain_name.codePointAt(i);
	    var status = findStatus(codePoint);

	    switch (status[1]) {
	      case "disallowed":
	        hasError = true;
	        processed += String.fromCodePoint(codePoint);
	        break;
	      case "ignored":
	        break;
	      case "mapped":
	        processed += String.fromCodePoint.apply(String, status[2]);
	        break;
	      case "deviation":
	        if (processing_option === PROCESSING_OPTIONS.TRANSITIONAL) {
	          processed += String.fromCodePoint.apply(String, status[2]);
	        } else {
	          processed += String.fromCodePoint(codePoint);
	        }
	        break;
	      case "valid":
	        processed += String.fromCodePoint(codePoint);
	        break;
	      case "disallowed_STD3_mapped":
	        if (useSTD3) {
	          hasError = true;
	          processed += String.fromCodePoint(codePoint);
	        } else {
	          processed += String.fromCodePoint.apply(String, status[2]);
	        }
	        break;
	      case "disallowed_STD3_valid":
	        if (useSTD3) {
	          hasError = true;
	        }

	        processed += String.fromCodePoint(codePoint);
	        break;
	    }
	  }

	  return {
	    string: processed,
	    error: hasError
	  };
	}

	var combiningMarksRegex = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;

	function validateLabel(label, processing_option) {
	  if (label.substr(0, 4) === "xn--") {
	    label = punycode.toUnicode(label);
	    processing_option = PROCESSING_OPTIONS.NONTRANSITIONAL;
	  }

	  var error = false;

	  if (normalize(label) !== label ||
	      (label[3] === "-" && label[4] === "-") ||
	      label[0] === "-" || label[label.length - 1] === "-" ||
	      label.indexOf(".") !== -1 ||
	      label.search(combiningMarksRegex) === 0) {
	    error = true;
	  }

	  var len = countSymbols(label);
	  for (var i = 0; i < len; ++i) {
	    var status = findStatus(label.codePointAt(i));
	    if ((processing === PROCESSING_OPTIONS.TRANSITIONAL && status[1] !== "valid") ||
	        (processing === PROCESSING_OPTIONS.NONTRANSITIONAL &&
	         status[1] !== "valid" && status[1] !== "deviation")) {
	      error = true;
	      break;
	    }
	  }

	  return {
	    label: label,
	    error: error
	  };
	}

	function processing(domain_name, useSTD3, processing_option) {
	  var result = mapChars(domain_name, useSTD3, processing_option);
	  result.string = normalize(result.string);

	  var labels = result.string.split(".");
	  for (var i = 0; i < labels.length; ++i) {
	    try {
	      var validation = validateLabel(labels[i]);
	      labels[i] = validation.label;
	      result.error = result.error || validation.error;
	    } catch(e) {
	      result.error = true;
	    }
	  }

	  return {
	    string: labels.join("."),
	    error: result.error
	  };
	}

	module.exports.toASCII = function(domain_name, useSTD3, processing_option, verifyDnsLength) {
	  var result = processing(domain_name, useSTD3, processing_option);
	  var labels = result.string.split(".");
	  labels = labels.map(function(l) {
	    try {
	      return punycode.toASCII(l);
	    } catch(e) {
	      result.error = true;
	      return l;
	    }
	  });

	  if (verifyDnsLength) {
	    var total = labels.slice(0, labels.length - 1).join(".").length;
	    if (total.length > 253 || total.length === 0) {
	      result.error = true;
	    }

	    for (var i=0; i < labels.length; ++i) {
	      if (labels.length > 63 || labels.length === 0) {
	        result.error = true;
	        break;
	      }
	    }
	  }

	  if (result.error) return null;
	  return labels.join(".");
	};

	module.exports.toUnicode = function(domain_name, useSTD3) {
	  var result = processing(domain_name, useSTD3, PROCESSING_OPTIONS.NONTRANSITIONAL);

	  return {
	    domain: result.string,
	    error: result.error
	  };
	};

	module.exports.PROCESSING_OPTIONS = PROCESSING_OPTIONS;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = [
		[
			[
				0,
				44
			],
			"disallowed_STD3_valid"
		],
		[
			[
				45,
				46
			],
			"valid"
		],
		[
			[
				47,
				47
			],
			"disallowed_STD3_valid"
		],
		[
			[
				48,
				57
			],
			"valid"
		],
		[
			[
				58,
				64
			],
			"disallowed_STD3_valid"
		],
		[
			[
				65,
				65
			],
			"mapped",
			[
				97
			]
		],
		[
			[
				66,
				66
			],
			"mapped",
			[
				98
			]
		],
		[
			[
				67,
				67
			],
			"mapped",
			[
				99
			]
		],
		[
			[
				68,
				68
			],
			"mapped",
			[
				100
			]
		],
		[
			[
				69,
				69
			],
			"mapped",
			[
				101
			]
		],
		[
			[
				70,
				70
			],
			"mapped",
			[
				102
			]
		],
		[
			[
				71,
				71
			],
			"mapped",
			[
				103
			]
		],
		[
			[
				72,
				72
			],
			"mapped",
			[
				104
			]
		],
		[
			[
				73,
				73
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				74,
				74
			],
			"mapped",
			[
				106
			]
		],
		[
			[
				75,
				75
			],
			"mapped",
			[
				107
			]
		],
		[
			[
				76,
				76
			],
			"mapped",
			[
				108
			]
		],
		[
			[
				77,
				77
			],
			"mapped",
			[
				109
			]
		],
		[
			[
				78,
				78
			],
			"mapped",
			[
				110
			]
		],
		[
			[
				79,
				79
			],
			"mapped",
			[
				111
			]
		],
		[
			[
				80,
				80
			],
			"mapped",
			[
				112
			]
		],
		[
			[
				81,
				81
			],
			"mapped",
			[
				113
			]
		],
		[
			[
				82,
				82
			],
			"mapped",
			[
				114
			]
		],
		[
			[
				83,
				83
			],
			"mapped",
			[
				115
			]
		],
		[
			[
				84,
				84
			],
			"mapped",
			[
				116
			]
		],
		[
			[
				85,
				85
			],
			"mapped",
			[
				117
			]
		],
		[
			[
				86,
				86
			],
			"mapped",
			[
				118
			]
		],
		[
			[
				87,
				87
			],
			"mapped",
			[
				119
			]
		],
		[
			[
				88,
				88
			],
			"mapped",
			[
				120
			]
		],
		[
			[
				89,
				89
			],
			"mapped",
			[
				121
			]
		],
		[
			[
				90,
				90
			],
			"mapped",
			[
				122
			]
		],
		[
			[
				91,
				96
			],
			"disallowed_STD3_valid"
		],
		[
			[
				97,
				122
			],
			"valid"
		],
		[
			[
				123,
				127
			],
			"disallowed_STD3_valid"
		],
		[
			[
				128,
				159
			],
			"disallowed"
		],
		[
			[
				160,
				160
			],
			"disallowed_STD3_mapped",
			[
				32
			]
		],
		[
			[
				161,
				167
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				168,
				168
			],
			"disallowed_STD3_mapped",
			[
				32,
				776
			]
		],
		[
			[
				169,
				169
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				170,
				170
			],
			"mapped",
			[
				97
			]
		],
		[
			[
				171,
				172
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				173,
				173
			],
			"ignored"
		],
		[
			[
				174,
				174
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				175,
				175
			],
			"disallowed_STD3_mapped",
			[
				32,
				772
			]
		],
		[
			[
				176,
				177
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				178,
				178
			],
			"mapped",
			[
				50
			]
		],
		[
			[
				179,
				179
			],
			"mapped",
			[
				51
			]
		],
		[
			[
				180,
				180
			],
			"disallowed_STD3_mapped",
			[
				32,
				769
			]
		],
		[
			[
				181,
				181
			],
			"mapped",
			[
				956
			]
		],
		[
			[
				182,
				182
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				183,
				183
			],
			"valid"
		],
		[
			[
				184,
				184
			],
			"disallowed_STD3_mapped",
			[
				32,
				807
			]
		],
		[
			[
				185,
				185
			],
			"mapped",
			[
				49
			]
		],
		[
			[
				186,
				186
			],
			"mapped",
			[
				111
			]
		],
		[
			[
				187,
				187
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				188,
				188
			],
			"mapped",
			[
				49,
				8260,
				52
			]
		],
		[
			[
				189,
				189
			],
			"mapped",
			[
				49,
				8260,
				50
			]
		],
		[
			[
				190,
				190
			],
			"mapped",
			[
				51,
				8260,
				52
			]
		],
		[
			[
				191,
				191
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				192,
				192
			],
			"mapped",
			[
				224
			]
		],
		[
			[
				193,
				193
			],
			"mapped",
			[
				225
			]
		],
		[
			[
				194,
				194
			],
			"mapped",
			[
				226
			]
		],
		[
			[
				195,
				195
			],
			"mapped",
			[
				227
			]
		],
		[
			[
				196,
				196
			],
			"mapped",
			[
				228
			]
		],
		[
			[
				197,
				197
			],
			"mapped",
			[
				229
			]
		],
		[
			[
				198,
				198
			],
			"mapped",
			[
				230
			]
		],
		[
			[
				199,
				199
			],
			"mapped",
			[
				231
			]
		],
		[
			[
				200,
				200
			],
			"mapped",
			[
				232
			]
		],
		[
			[
				201,
				201
			],
			"mapped",
			[
				233
			]
		],
		[
			[
				202,
				202
			],
			"mapped",
			[
				234
			]
		],
		[
			[
				203,
				203
			],
			"mapped",
			[
				235
			]
		],
		[
			[
				204,
				204
			],
			"mapped",
			[
				236
			]
		],
		[
			[
				205,
				205
			],
			"mapped",
			[
				237
			]
		],
		[
			[
				206,
				206
			],
			"mapped",
			[
				238
			]
		],
		[
			[
				207,
				207
			],
			"mapped",
			[
				239
			]
		],
		[
			[
				208,
				208
			],
			"mapped",
			[
				240
			]
		],
		[
			[
				209,
				209
			],
			"mapped",
			[
				241
			]
		],
		[
			[
				210,
				210
			],
			"mapped",
			[
				242
			]
		],
		[
			[
				211,
				211
			],
			"mapped",
			[
				243
			]
		],
		[
			[
				212,
				212
			],
			"mapped",
			[
				244
			]
		],
		[
			[
				213,
				213
			],
			"mapped",
			[
				245
			]
		],
		[
			[
				214,
				214
			],
			"mapped",
			[
				246
			]
		],
		[
			[
				215,
				215
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				216,
				216
			],
			"mapped",
			[
				248
			]
		],
		[
			[
				217,
				217
			],
			"mapped",
			[
				249
			]
		],
		[
			[
				218,
				218
			],
			"mapped",
			[
				250
			]
		],
		[
			[
				219,
				219
			],
			"mapped",
			[
				251
			]
		],
		[
			[
				220,
				220
			],
			"mapped",
			[
				252
			]
		],
		[
			[
				221,
				221
			],
			"mapped",
			[
				253
			]
		],
		[
			[
				222,
				222
			],
			"mapped",
			[
				254
			]
		],
		[
			[
				223,
				223
			],
			"deviation",
			[
				115,
				115
			]
		],
		[
			[
				224,
				246
			],
			"valid"
		],
		[
			[
				247,
				247
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				248,
				255
			],
			"valid"
		],
		[
			[
				256,
				256
			],
			"mapped",
			[
				257
			]
		],
		[
			[
				257,
				257
			],
			"valid"
		],
		[
			[
				258,
				258
			],
			"mapped",
			[
				259
			]
		],
		[
			[
				259,
				259
			],
			"valid"
		],
		[
			[
				260,
				260
			],
			"mapped",
			[
				261
			]
		],
		[
			[
				261,
				261
			],
			"valid"
		],
		[
			[
				262,
				262
			],
			"mapped",
			[
				263
			]
		],
		[
			[
				263,
				263
			],
			"valid"
		],
		[
			[
				264,
				264
			],
			"mapped",
			[
				265
			]
		],
		[
			[
				265,
				265
			],
			"valid"
		],
		[
			[
				266,
				266
			],
			"mapped",
			[
				267
			]
		],
		[
			[
				267,
				267
			],
			"valid"
		],
		[
			[
				268,
				268
			],
			"mapped",
			[
				269
			]
		],
		[
			[
				269,
				269
			],
			"valid"
		],
		[
			[
				270,
				270
			],
			"mapped",
			[
				271
			]
		],
		[
			[
				271,
				271
			],
			"valid"
		],
		[
			[
				272,
				272
			],
			"mapped",
			[
				273
			]
		],
		[
			[
				273,
				273
			],
			"valid"
		],
		[
			[
				274,
				274
			],
			"mapped",
			[
				275
			]
		],
		[
			[
				275,
				275
			],
			"valid"
		],
		[
			[
				276,
				276
			],
			"mapped",
			[
				277
			]
		],
		[
			[
				277,
				277
			],
			"valid"
		],
		[
			[
				278,
				278
			],
			"mapped",
			[
				279
			]
		],
		[
			[
				279,
				279
			],
			"valid"
		],
		[
			[
				280,
				280
			],
			"mapped",
			[
				281
			]
		],
		[
			[
				281,
				281
			],
			"valid"
		],
		[
			[
				282,
				282
			],
			"mapped",
			[
				283
			]
		],
		[
			[
				283,
				283
			],
			"valid"
		],
		[
			[
				284,
				284
			],
			"mapped",
			[
				285
			]
		],
		[
			[
				285,
				285
			],
			"valid"
		],
		[
			[
				286,
				286
			],
			"mapped",
			[
				287
			]
		],
		[
			[
				287,
				287
			],
			"valid"
		],
		[
			[
				288,
				288
			],
			"mapped",
			[
				289
			]
		],
		[
			[
				289,
				289
			],
			"valid"
		],
		[
			[
				290,
				290
			],
			"mapped",
			[
				291
			]
		],
		[
			[
				291,
				291
			],
			"valid"
		],
		[
			[
				292,
				292
			],
			"mapped",
			[
				293
			]
		],
		[
			[
				293,
				293
			],
			"valid"
		],
		[
			[
				294,
				294
			],
			"mapped",
			[
				295
			]
		],
		[
			[
				295,
				295
			],
			"valid"
		],
		[
			[
				296,
				296
			],
			"mapped",
			[
				297
			]
		],
		[
			[
				297,
				297
			],
			"valid"
		],
		[
			[
				298,
				298
			],
			"mapped",
			[
				299
			]
		],
		[
			[
				299,
				299
			],
			"valid"
		],
		[
			[
				300,
				300
			],
			"mapped",
			[
				301
			]
		],
		[
			[
				301,
				301
			],
			"valid"
		],
		[
			[
				302,
				302
			],
			"mapped",
			[
				303
			]
		],
		[
			[
				303,
				303
			],
			"valid"
		],
		[
			[
				304,
				304
			],
			"mapped",
			[
				105,
				775
			]
		],
		[
			[
				305,
				305
			],
			"valid"
		],
		[
			[
				306,
				307
			],
			"mapped",
			[
				105,
				106
			]
		],
		[
			[
				308,
				308
			],
			"mapped",
			[
				309
			]
		],
		[
			[
				309,
				309
			],
			"valid"
		],
		[
			[
				310,
				310
			],
			"mapped",
			[
				311
			]
		],
		[
			[
				311,
				312
			],
			"valid"
		],
		[
			[
				313,
				313
			],
			"mapped",
			[
				314
			]
		],
		[
			[
				314,
				314
			],
			"valid"
		],
		[
			[
				315,
				315
			],
			"mapped",
			[
				316
			]
		],
		[
			[
				316,
				316
			],
			"valid"
		],
		[
			[
				317,
				317
			],
			"mapped",
			[
				318
			]
		],
		[
			[
				318,
				318
			],
			"valid"
		],
		[
			[
				319,
				320
			],
			"mapped",
			[
				108,
				183
			]
		],
		[
			[
				321,
				321
			],
			"mapped",
			[
				322
			]
		],
		[
			[
				322,
				322
			],
			"valid"
		],
		[
			[
				323,
				323
			],
			"mapped",
			[
				324
			]
		],
		[
			[
				324,
				324
			],
			"valid"
		],
		[
			[
				325,
				325
			],
			"mapped",
			[
				326
			]
		],
		[
			[
				326,
				326
			],
			"valid"
		],
		[
			[
				327,
				327
			],
			"mapped",
			[
				328
			]
		],
		[
			[
				328,
				328
			],
			"valid"
		],
		[
			[
				329,
				329
			],
			"mapped",
			[
				700,
				110
			]
		],
		[
			[
				330,
				330
			],
			"mapped",
			[
				331
			]
		],
		[
			[
				331,
				331
			],
			"valid"
		],
		[
			[
				332,
				332
			],
			"mapped",
			[
				333
			]
		],
		[
			[
				333,
				333
			],
			"valid"
		],
		[
			[
				334,
				334
			],
			"mapped",
			[
				335
			]
		],
		[
			[
				335,
				335
			],
			"valid"
		],
		[
			[
				336,
				336
			],
			"mapped",
			[
				337
			]
		],
		[
			[
				337,
				337
			],
			"valid"
		],
		[
			[
				338,
				338
			],
			"mapped",
			[
				339
			]
		],
		[
			[
				339,
				339
			],
			"valid"
		],
		[
			[
				340,
				340
			],
			"mapped",
			[
				341
			]
		],
		[
			[
				341,
				341
			],
			"valid"
		],
		[
			[
				342,
				342
			],
			"mapped",
			[
				343
			]
		],
		[
			[
				343,
				343
			],
			"valid"
		],
		[
			[
				344,
				344
			],
			"mapped",
			[
				345
			]
		],
		[
			[
				345,
				345
			],
			"valid"
		],
		[
			[
				346,
				346
			],
			"mapped",
			[
				347
			]
		],
		[
			[
				347,
				347
			],
			"valid"
		],
		[
			[
				348,
				348
			],
			"mapped",
			[
				349
			]
		],
		[
			[
				349,
				349
			],
			"valid"
		],
		[
			[
				350,
				350
			],
			"mapped",
			[
				351
			]
		],
		[
			[
				351,
				351
			],
			"valid"
		],
		[
			[
				352,
				352
			],
			"mapped",
			[
				353
			]
		],
		[
			[
				353,
				353
			],
			"valid"
		],
		[
			[
				354,
				354
			],
			"mapped",
			[
				355
			]
		],
		[
			[
				355,
				355
			],
			"valid"
		],
		[
			[
				356,
				356
			],
			"mapped",
			[
				357
			]
		],
		[
			[
				357,
				357
			],
			"valid"
		],
		[
			[
				358,
				358
			],
			"mapped",
			[
				359
			]
		],
		[
			[
				359,
				359
			],
			"valid"
		],
		[
			[
				360,
				360
			],
			"mapped",
			[
				361
			]
		],
		[
			[
				361,
				361
			],
			"valid"
		],
		[
			[
				362,
				362
			],
			"mapped",
			[
				363
			]
		],
		[
			[
				363,
				363
			],
			"valid"
		],
		[
			[
				364,
				364
			],
			"mapped",
			[
				365
			]
		],
		[
			[
				365,
				365
			],
			"valid"
		],
		[
			[
				366,
				366
			],
			"mapped",
			[
				367
			]
		],
		[
			[
				367,
				367
			],
			"valid"
		],
		[
			[
				368,
				368
			],
			"mapped",
			[
				369
			]
		],
		[
			[
				369,
				369
			],
			"valid"
		],
		[
			[
				370,
				370
			],
			"mapped",
			[
				371
			]
		],
		[
			[
				371,
				371
			],
			"valid"
		],
		[
			[
				372,
				372
			],
			"mapped",
			[
				373
			]
		],
		[
			[
				373,
				373
			],
			"valid"
		],
		[
			[
				374,
				374
			],
			"mapped",
			[
				375
			]
		],
		[
			[
				375,
				375
			],
			"valid"
		],
		[
			[
				376,
				376
			],
			"mapped",
			[
				255
			]
		],
		[
			[
				377,
				377
			],
			"mapped",
			[
				378
			]
		],
		[
			[
				378,
				378
			],
			"valid"
		],
		[
			[
				379,
				379
			],
			"mapped",
			[
				380
			]
		],
		[
			[
				380,
				380
			],
			"valid"
		],
		[
			[
				381,
				381
			],
			"mapped",
			[
				382
			]
		],
		[
			[
				382,
				382
			],
			"valid"
		],
		[
			[
				383,
				383
			],
			"mapped",
			[
				115
			]
		],
		[
			[
				384,
				384
			],
			"valid"
		],
		[
			[
				385,
				385
			],
			"mapped",
			[
				595
			]
		],
		[
			[
				386,
				386
			],
			"mapped",
			[
				387
			]
		],
		[
			[
				387,
				387
			],
			"valid"
		],
		[
			[
				388,
				388
			],
			"mapped",
			[
				389
			]
		],
		[
			[
				389,
				389
			],
			"valid"
		],
		[
			[
				390,
				390
			],
			"mapped",
			[
				596
			]
		],
		[
			[
				391,
				391
			],
			"mapped",
			[
				392
			]
		],
		[
			[
				392,
				392
			],
			"valid"
		],
		[
			[
				393,
				393
			],
			"mapped",
			[
				598
			]
		],
		[
			[
				394,
				394
			],
			"mapped",
			[
				599
			]
		],
		[
			[
				395,
				395
			],
			"mapped",
			[
				396
			]
		],
		[
			[
				396,
				397
			],
			"valid"
		],
		[
			[
				398,
				398
			],
			"mapped",
			[
				477
			]
		],
		[
			[
				399,
				399
			],
			"mapped",
			[
				601
			]
		],
		[
			[
				400,
				400
			],
			"mapped",
			[
				603
			]
		],
		[
			[
				401,
				401
			],
			"mapped",
			[
				402
			]
		],
		[
			[
				402,
				402
			],
			"valid"
		],
		[
			[
				403,
				403
			],
			"mapped",
			[
				608
			]
		],
		[
			[
				404,
				404
			],
			"mapped",
			[
				611
			]
		],
		[
			[
				405,
				405
			],
			"valid"
		],
		[
			[
				406,
				406
			],
			"mapped",
			[
				617
			]
		],
		[
			[
				407,
				407
			],
			"mapped",
			[
				616
			]
		],
		[
			[
				408,
				408
			],
			"mapped",
			[
				409
			]
		],
		[
			[
				409,
				411
			],
			"valid"
		],
		[
			[
				412,
				412
			],
			"mapped",
			[
				623
			]
		],
		[
			[
				413,
				413
			],
			"mapped",
			[
				626
			]
		],
		[
			[
				414,
				414
			],
			"valid"
		],
		[
			[
				415,
				415
			],
			"mapped",
			[
				629
			]
		],
		[
			[
				416,
				416
			],
			"mapped",
			[
				417
			]
		],
		[
			[
				417,
				417
			],
			"valid"
		],
		[
			[
				418,
				418
			],
			"mapped",
			[
				419
			]
		],
		[
			[
				419,
				419
			],
			"valid"
		],
		[
			[
				420,
				420
			],
			"mapped",
			[
				421
			]
		],
		[
			[
				421,
				421
			],
			"valid"
		],
		[
			[
				422,
				422
			],
			"mapped",
			[
				640
			]
		],
		[
			[
				423,
				423
			],
			"mapped",
			[
				424
			]
		],
		[
			[
				424,
				424
			],
			"valid"
		],
		[
			[
				425,
				425
			],
			"mapped",
			[
				643
			]
		],
		[
			[
				426,
				427
			],
			"valid"
		],
		[
			[
				428,
				428
			],
			"mapped",
			[
				429
			]
		],
		[
			[
				429,
				429
			],
			"valid"
		],
		[
			[
				430,
				430
			],
			"mapped",
			[
				648
			]
		],
		[
			[
				431,
				431
			],
			"mapped",
			[
				432
			]
		],
		[
			[
				432,
				432
			],
			"valid"
		],
		[
			[
				433,
				433
			],
			"mapped",
			[
				650
			]
		],
		[
			[
				434,
				434
			],
			"mapped",
			[
				651
			]
		],
		[
			[
				435,
				435
			],
			"mapped",
			[
				436
			]
		],
		[
			[
				436,
				436
			],
			"valid"
		],
		[
			[
				437,
				437
			],
			"mapped",
			[
				438
			]
		],
		[
			[
				438,
				438
			],
			"valid"
		],
		[
			[
				439,
				439
			],
			"mapped",
			[
				658
			]
		],
		[
			[
				440,
				440
			],
			"mapped",
			[
				441
			]
		],
		[
			[
				441,
				443
			],
			"valid"
		],
		[
			[
				444,
				444
			],
			"mapped",
			[
				445
			]
		],
		[
			[
				445,
				451
			],
			"valid"
		],
		[
			[
				452,
				454
			],
			"mapped",
			[
				100,
				382
			]
		],
		[
			[
				455,
				457
			],
			"mapped",
			[
				108,
				106
			]
		],
		[
			[
				458,
				460
			],
			"mapped",
			[
				110,
				106
			]
		],
		[
			[
				461,
				461
			],
			"mapped",
			[
				462
			]
		],
		[
			[
				462,
				462
			],
			"valid"
		],
		[
			[
				463,
				463
			],
			"mapped",
			[
				464
			]
		],
		[
			[
				464,
				464
			],
			"valid"
		],
		[
			[
				465,
				465
			],
			"mapped",
			[
				466
			]
		],
		[
			[
				466,
				466
			],
			"valid"
		],
		[
			[
				467,
				467
			],
			"mapped",
			[
				468
			]
		],
		[
			[
				468,
				468
			],
			"valid"
		],
		[
			[
				469,
				469
			],
			"mapped",
			[
				470
			]
		],
		[
			[
				470,
				470
			],
			"valid"
		],
		[
			[
				471,
				471
			],
			"mapped",
			[
				472
			]
		],
		[
			[
				472,
				472
			],
			"valid"
		],
		[
			[
				473,
				473
			],
			"mapped",
			[
				474
			]
		],
		[
			[
				474,
				474
			],
			"valid"
		],
		[
			[
				475,
				475
			],
			"mapped",
			[
				476
			]
		],
		[
			[
				476,
				477
			],
			"valid"
		],
		[
			[
				478,
				478
			],
			"mapped",
			[
				479
			]
		],
		[
			[
				479,
				479
			],
			"valid"
		],
		[
			[
				480,
				480
			],
			"mapped",
			[
				481
			]
		],
		[
			[
				481,
				481
			],
			"valid"
		],
		[
			[
				482,
				482
			],
			"mapped",
			[
				483
			]
		],
		[
			[
				483,
				483
			],
			"valid"
		],
		[
			[
				484,
				484
			],
			"mapped",
			[
				485
			]
		],
		[
			[
				485,
				485
			],
			"valid"
		],
		[
			[
				486,
				486
			],
			"mapped",
			[
				487
			]
		],
		[
			[
				487,
				487
			],
			"valid"
		],
		[
			[
				488,
				488
			],
			"mapped",
			[
				489
			]
		],
		[
			[
				489,
				489
			],
			"valid"
		],
		[
			[
				490,
				490
			],
			"mapped",
			[
				491
			]
		],
		[
			[
				491,
				491
			],
			"valid"
		],
		[
			[
				492,
				492
			],
			"mapped",
			[
				493
			]
		],
		[
			[
				493,
				493
			],
			"valid"
		],
		[
			[
				494,
				494
			],
			"mapped",
			[
				495
			]
		],
		[
			[
				495,
				496
			],
			"valid"
		],
		[
			[
				497,
				499
			],
			"mapped",
			[
				100,
				122
			]
		],
		[
			[
				500,
				500
			],
			"mapped",
			[
				501
			]
		],
		[
			[
				501,
				501
			],
			"valid"
		],
		[
			[
				502,
				502
			],
			"mapped",
			[
				405
			]
		],
		[
			[
				503,
				503
			],
			"mapped",
			[
				447
			]
		],
		[
			[
				504,
				504
			],
			"mapped",
			[
				505
			]
		],
		[
			[
				505,
				505
			],
			"valid"
		],
		[
			[
				506,
				506
			],
			"mapped",
			[
				507
			]
		],
		[
			[
				507,
				507
			],
			"valid"
		],
		[
			[
				508,
				508
			],
			"mapped",
			[
				509
			]
		],
		[
			[
				509,
				509
			],
			"valid"
		],
		[
			[
				510,
				510
			],
			"mapped",
			[
				511
			]
		],
		[
			[
				511,
				511
			],
			"valid"
		],
		[
			[
				512,
				512
			],
			"mapped",
			[
				513
			]
		],
		[
			[
				513,
				513
			],
			"valid"
		],
		[
			[
				514,
				514
			],
			"mapped",
			[
				515
			]
		],
		[
			[
				515,
				515
			],
			"valid"
		],
		[
			[
				516,
				516
			],
			"mapped",
			[
				517
			]
		],
		[
			[
				517,
				517
			],
			"valid"
		],
		[
			[
				518,
				518
			],
			"mapped",
			[
				519
			]
		],
		[
			[
				519,
				519
			],
			"valid"
		],
		[
			[
				520,
				520
			],
			"mapped",
			[
				521
			]
		],
		[
			[
				521,
				521
			],
			"valid"
		],
		[
			[
				522,
				522
			],
			"mapped",
			[
				523
			]
		],
		[
			[
				523,
				523
			],
			"valid"
		],
		[
			[
				524,
				524
			],
			"mapped",
			[
				525
			]
		],
		[
			[
				525,
				525
			],
			"valid"
		],
		[
			[
				526,
				526
			],
			"mapped",
			[
				527
			]
		],
		[
			[
				527,
				527
			],
			"valid"
		],
		[
			[
				528,
				528
			],
			"mapped",
			[
				529
			]
		],
		[
			[
				529,
				529
			],
			"valid"
		],
		[
			[
				530,
				530
			],
			"mapped",
			[
				531
			]
		],
		[
			[
				531,
				531
			],
			"valid"
		],
		[
			[
				532,
				532
			],
			"mapped",
			[
				533
			]
		],
		[
			[
				533,
				533
			],
			"valid"
		],
		[
			[
				534,
				534
			],
			"mapped",
			[
				535
			]
		],
		[
			[
				535,
				535
			],
			"valid"
		],
		[
			[
				536,
				536
			],
			"mapped",
			[
				537
			]
		],
		[
			[
				537,
				537
			],
			"valid"
		],
		[
			[
				538,
				538
			],
			"mapped",
			[
				539
			]
		],
		[
			[
				539,
				539
			],
			"valid"
		],
		[
			[
				540,
				540
			],
			"mapped",
			[
				541
			]
		],
		[
			[
				541,
				541
			],
			"valid"
		],
		[
			[
				542,
				542
			],
			"mapped",
			[
				543
			]
		],
		[
			[
				543,
				543
			],
			"valid"
		],
		[
			[
				544,
				544
			],
			"mapped",
			[
				414
			]
		],
		[
			[
				545,
				545
			],
			"valid"
		],
		[
			[
				546,
				546
			],
			"mapped",
			[
				547
			]
		],
		[
			[
				547,
				547
			],
			"valid"
		],
		[
			[
				548,
				548
			],
			"mapped",
			[
				549
			]
		],
		[
			[
				549,
				549
			],
			"valid"
		],
		[
			[
				550,
				550
			],
			"mapped",
			[
				551
			]
		],
		[
			[
				551,
				551
			],
			"valid"
		],
		[
			[
				552,
				552
			],
			"mapped",
			[
				553
			]
		],
		[
			[
				553,
				553
			],
			"valid"
		],
		[
			[
				554,
				554
			],
			"mapped",
			[
				555
			]
		],
		[
			[
				555,
				555
			],
			"valid"
		],
		[
			[
				556,
				556
			],
			"mapped",
			[
				557
			]
		],
		[
			[
				557,
				557
			],
			"valid"
		],
		[
			[
				558,
				558
			],
			"mapped",
			[
				559
			]
		],
		[
			[
				559,
				559
			],
			"valid"
		],
		[
			[
				560,
				560
			],
			"mapped",
			[
				561
			]
		],
		[
			[
				561,
				561
			],
			"valid"
		],
		[
			[
				562,
				562
			],
			"mapped",
			[
				563
			]
		],
		[
			[
				563,
				563
			],
			"valid"
		],
		[
			[
				564,
				566
			],
			"valid"
		],
		[
			[
				567,
				569
			],
			"valid"
		],
		[
			[
				570,
				570
			],
			"mapped",
			[
				11365
			]
		],
		[
			[
				571,
				571
			],
			"mapped",
			[
				572
			]
		],
		[
			[
				572,
				572
			],
			"valid"
		],
		[
			[
				573,
				573
			],
			"mapped",
			[
				410
			]
		],
		[
			[
				574,
				574
			],
			"mapped",
			[
				11366
			]
		],
		[
			[
				575,
				576
			],
			"valid"
		],
		[
			[
				577,
				577
			],
			"mapped",
			[
				578
			]
		],
		[
			[
				578,
				578
			],
			"valid"
		],
		[
			[
				579,
				579
			],
			"mapped",
			[
				384
			]
		],
		[
			[
				580,
				580
			],
			"mapped",
			[
				649
			]
		],
		[
			[
				581,
				581
			],
			"mapped",
			[
				652
			]
		],
		[
			[
				582,
				582
			],
			"mapped",
			[
				583
			]
		],
		[
			[
				583,
				583
			],
			"valid"
		],
		[
			[
				584,
				584
			],
			"mapped",
			[
				585
			]
		],
		[
			[
				585,
				585
			],
			"valid"
		],
		[
			[
				586,
				586
			],
			"mapped",
			[
				587
			]
		],
		[
			[
				587,
				587
			],
			"valid"
		],
		[
			[
				588,
				588
			],
			"mapped",
			[
				589
			]
		],
		[
			[
				589,
				589
			],
			"valid"
		],
		[
			[
				590,
				590
			],
			"mapped",
			[
				591
			]
		],
		[
			[
				591,
				591
			],
			"valid"
		],
		[
			[
				592,
				680
			],
			"valid"
		],
		[
			[
				681,
				685
			],
			"valid"
		],
		[
			[
				686,
				687
			],
			"valid"
		],
		[
			[
				688,
				688
			],
			"mapped",
			[
				104
			]
		],
		[
			[
				689,
				689
			],
			"mapped",
			[
				614
			]
		],
		[
			[
				690,
				690
			],
			"mapped",
			[
				106
			]
		],
		[
			[
				691,
				691
			],
			"mapped",
			[
				114
			]
		],
		[
			[
				692,
				692
			],
			"mapped",
			[
				633
			]
		],
		[
			[
				693,
				693
			],
			"mapped",
			[
				635
			]
		],
		[
			[
				694,
				694
			],
			"mapped",
			[
				641
			]
		],
		[
			[
				695,
				695
			],
			"mapped",
			[
				119
			]
		],
		[
			[
				696,
				696
			],
			"mapped",
			[
				121
			]
		],
		[
			[
				697,
				705
			],
			"valid"
		],
		[
			[
				706,
				709
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				710,
				721
			],
			"valid"
		],
		[
			[
				722,
				727
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				728,
				728
			],
			"disallowed_STD3_mapped",
			[
				32,
				774
			]
		],
		[
			[
				729,
				729
			],
			"disallowed_STD3_mapped",
			[
				32,
				775
			]
		],
		[
			[
				730,
				730
			],
			"disallowed_STD3_mapped",
			[
				32,
				778
			]
		],
		[
			[
				731,
				731
			],
			"disallowed_STD3_mapped",
			[
				32,
				808
			]
		],
		[
			[
				732,
				732
			],
			"disallowed_STD3_mapped",
			[
				32,
				771
			]
		],
		[
			[
				733,
				733
			],
			"disallowed_STD3_mapped",
			[
				32,
				779
			]
		],
		[
			[
				734,
				734
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				735,
				735
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				736,
				736
			],
			"mapped",
			[
				611
			]
		],
		[
			[
				737,
				737
			],
			"mapped",
			[
				108
			]
		],
		[
			[
				738,
				738
			],
			"mapped",
			[
				115
			]
		],
		[
			[
				739,
				739
			],
			"mapped",
			[
				120
			]
		],
		[
			[
				740,
				740
			],
			"mapped",
			[
				661
			]
		],
		[
			[
				741,
				745
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				746,
				747
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				748,
				748
			],
			"valid"
		],
		[
			[
				749,
				749
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				750,
				750
			],
			"valid"
		],
		[
			[
				751,
				767
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				768,
				831
			],
			"valid"
		],
		[
			[
				832,
				832
			],
			"mapped",
			[
				768
			]
		],
		[
			[
				833,
				833
			],
			"mapped",
			[
				769
			]
		],
		[
			[
				834,
				834
			],
			"valid"
		],
		[
			[
				835,
				835
			],
			"mapped",
			[
				787
			]
		],
		[
			[
				836,
				836
			],
			"mapped",
			[
				776,
				769
			]
		],
		[
			[
				837,
				837
			],
			"mapped",
			[
				953
			]
		],
		[
			[
				838,
				846
			],
			"valid"
		],
		[
			[
				847,
				847
			],
			"ignored"
		],
		[
			[
				848,
				855
			],
			"valid"
		],
		[
			[
				856,
				860
			],
			"valid"
		],
		[
			[
				861,
				863
			],
			"valid"
		],
		[
			[
				864,
				865
			],
			"valid"
		],
		[
			[
				866,
				866
			],
			"valid"
		],
		[
			[
				867,
				879
			],
			"valid"
		],
		[
			[
				880,
				880
			],
			"mapped",
			[
				881
			]
		],
		[
			[
				881,
				881
			],
			"valid"
		],
		[
			[
				882,
				882
			],
			"mapped",
			[
				883
			]
		],
		[
			[
				883,
				883
			],
			"valid"
		],
		[
			[
				884,
				884
			],
			"mapped",
			[
				697
			]
		],
		[
			[
				885,
				885
			],
			"valid"
		],
		[
			[
				886,
				886
			],
			"mapped",
			[
				887
			]
		],
		[
			[
				887,
				887
			],
			"valid"
		],
		[
			[
				888,
				889
			],
			"disallowed"
		],
		[
			[
				890,
				890
			],
			"disallowed_STD3_mapped",
			[
				32,
				953
			]
		],
		[
			[
				891,
				893
			],
			"valid"
		],
		[
			[
				894,
				894
			],
			"disallowed_STD3_mapped",
			[
				59
			]
		],
		[
			[
				895,
				895
			],
			"mapped",
			[
				1011
			]
		],
		[
			[
				896,
				899
			],
			"disallowed"
		],
		[
			[
				900,
				900
			],
			"disallowed_STD3_mapped",
			[
				32,
				769
			]
		],
		[
			[
				901,
				901
			],
			"disallowed_STD3_mapped",
			[
				32,
				776,
				769
			]
		],
		[
			[
				902,
				902
			],
			"mapped",
			[
				940
			]
		],
		[
			[
				903,
				903
			],
			"mapped",
			[
				183
			]
		],
		[
			[
				904,
				904
			],
			"mapped",
			[
				941
			]
		],
		[
			[
				905,
				905
			],
			"mapped",
			[
				942
			]
		],
		[
			[
				906,
				906
			],
			"mapped",
			[
				943
			]
		],
		[
			[
				907,
				907
			],
			"disallowed"
		],
		[
			[
				908,
				908
			],
			"mapped",
			[
				972
			]
		],
		[
			[
				909,
				909
			],
			"disallowed"
		],
		[
			[
				910,
				910
			],
			"mapped",
			[
				973
			]
		],
		[
			[
				911,
				911
			],
			"mapped",
			[
				974
			]
		],
		[
			[
				912,
				912
			],
			"valid"
		],
		[
			[
				913,
				913
			],
			"mapped",
			[
				945
			]
		],
		[
			[
				914,
				914
			],
			"mapped",
			[
				946
			]
		],
		[
			[
				915,
				915
			],
			"mapped",
			[
				947
			]
		],
		[
			[
				916,
				916
			],
			"mapped",
			[
				948
			]
		],
		[
			[
				917,
				917
			],
			"mapped",
			[
				949
			]
		],
		[
			[
				918,
				918
			],
			"mapped",
			[
				950
			]
		],
		[
			[
				919,
				919
			],
			"mapped",
			[
				951
			]
		],
		[
			[
				920,
				920
			],
			"mapped",
			[
				952
			]
		],
		[
			[
				921,
				921
			],
			"mapped",
			[
				953
			]
		],
		[
			[
				922,
				922
			],
			"mapped",
			[
				954
			]
		],
		[
			[
				923,
				923
			],
			"mapped",
			[
				955
			]
		],
		[
			[
				924,
				924
			],
			"mapped",
			[
				956
			]
		],
		[
			[
				925,
				925
			],
			"mapped",
			[
				957
			]
		],
		[
			[
				926,
				926
			],
			"mapped",
			[
				958
			]
		],
		[
			[
				927,
				927
			],
			"mapped",
			[
				959
			]
		],
		[
			[
				928,
				928
			],
			"mapped",
			[
				960
			]
		],
		[
			[
				929,
				929
			],
			"mapped",
			[
				961
			]
		],
		[
			[
				930,
				930
			],
			"disallowed"
		],
		[
			[
				931,
				931
			],
			"mapped",
			[
				963
			]
		],
		[
			[
				932,
				932
			],
			"mapped",
			[
				964
			]
		],
		[
			[
				933,
				933
			],
			"mapped",
			[
				965
			]
		],
		[
			[
				934,
				934
			],
			"mapped",
			[
				966
			]
		],
		[
			[
				935,
				935
			],
			"mapped",
			[
				967
			]
		],
		[
			[
				936,
				936
			],
			"mapped",
			[
				968
			]
		],
		[
			[
				937,
				937
			],
			"mapped",
			[
				969
			]
		],
		[
			[
				938,
				938
			],
			"mapped",
			[
				970
			]
		],
		[
			[
				939,
				939
			],
			"mapped",
			[
				971
			]
		],
		[
			[
				940,
				961
			],
			"valid"
		],
		[
			[
				962,
				962
			],
			"deviation",
			[
				963
			]
		],
		[
			[
				963,
				974
			],
			"valid"
		],
		[
			[
				975,
				975
			],
			"mapped",
			[
				983
			]
		],
		[
			[
				976,
				976
			],
			"mapped",
			[
				946
			]
		],
		[
			[
				977,
				977
			],
			"mapped",
			[
				952
			]
		],
		[
			[
				978,
				978
			],
			"mapped",
			[
				965
			]
		],
		[
			[
				979,
				979
			],
			"mapped",
			[
				973
			]
		],
		[
			[
				980,
				980
			],
			"mapped",
			[
				971
			]
		],
		[
			[
				981,
				981
			],
			"mapped",
			[
				966
			]
		],
		[
			[
				982,
				982
			],
			"mapped",
			[
				960
			]
		],
		[
			[
				983,
				983
			],
			"valid"
		],
		[
			[
				984,
				984
			],
			"mapped",
			[
				985
			]
		],
		[
			[
				985,
				985
			],
			"valid"
		],
		[
			[
				986,
				986
			],
			"mapped",
			[
				987
			]
		],
		[
			[
				987,
				987
			],
			"valid"
		],
		[
			[
				988,
				988
			],
			"mapped",
			[
				989
			]
		],
		[
			[
				989,
				989
			],
			"valid"
		],
		[
			[
				990,
				990
			],
			"mapped",
			[
				991
			]
		],
		[
			[
				991,
				991
			],
			"valid"
		],
		[
			[
				992,
				992
			],
			"mapped",
			[
				993
			]
		],
		[
			[
				993,
				993
			],
			"valid"
		],
		[
			[
				994,
				994
			],
			"mapped",
			[
				995
			]
		],
		[
			[
				995,
				995
			],
			"valid"
		],
		[
			[
				996,
				996
			],
			"mapped",
			[
				997
			]
		],
		[
			[
				997,
				997
			],
			"valid"
		],
		[
			[
				998,
				998
			],
			"mapped",
			[
				999
			]
		],
		[
			[
				999,
				999
			],
			"valid"
		],
		[
			[
				1000,
				1000
			],
			"mapped",
			[
				1001
			]
		],
		[
			[
				1001,
				1001
			],
			"valid"
		],
		[
			[
				1002,
				1002
			],
			"mapped",
			[
				1003
			]
		],
		[
			[
				1003,
				1003
			],
			"valid"
		],
		[
			[
				1004,
				1004
			],
			"mapped",
			[
				1005
			]
		],
		[
			[
				1005,
				1005
			],
			"valid"
		],
		[
			[
				1006,
				1006
			],
			"mapped",
			[
				1007
			]
		],
		[
			[
				1007,
				1007
			],
			"valid"
		],
		[
			[
				1008,
				1008
			],
			"mapped",
			[
				954
			]
		],
		[
			[
				1009,
				1009
			],
			"mapped",
			[
				961
			]
		],
		[
			[
				1010,
				1010
			],
			"mapped",
			[
				963
			]
		],
		[
			[
				1011,
				1011
			],
			"valid"
		],
		[
			[
				1012,
				1012
			],
			"mapped",
			[
				952
			]
		],
		[
			[
				1013,
				1013
			],
			"mapped",
			[
				949
			]
		],
		[
			[
				1014,
				1014
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1015,
				1015
			],
			"mapped",
			[
				1016
			]
		],
		[
			[
				1016,
				1016
			],
			"valid"
		],
		[
			[
				1017,
				1017
			],
			"mapped",
			[
				963
			]
		],
		[
			[
				1018,
				1018
			],
			"mapped",
			[
				1019
			]
		],
		[
			[
				1019,
				1019
			],
			"valid"
		],
		[
			[
				1020,
				1020
			],
			"valid"
		],
		[
			[
				1021,
				1021
			],
			"mapped",
			[
				891
			]
		],
		[
			[
				1022,
				1022
			],
			"mapped",
			[
				892
			]
		],
		[
			[
				1023,
				1023
			],
			"mapped",
			[
				893
			]
		],
		[
			[
				1024,
				1024
			],
			"mapped",
			[
				1104
			]
		],
		[
			[
				1025,
				1025
			],
			"mapped",
			[
				1105
			]
		],
		[
			[
				1026,
				1026
			],
			"mapped",
			[
				1106
			]
		],
		[
			[
				1027,
				1027
			],
			"mapped",
			[
				1107
			]
		],
		[
			[
				1028,
				1028
			],
			"mapped",
			[
				1108
			]
		],
		[
			[
				1029,
				1029
			],
			"mapped",
			[
				1109
			]
		],
		[
			[
				1030,
				1030
			],
			"mapped",
			[
				1110
			]
		],
		[
			[
				1031,
				1031
			],
			"mapped",
			[
				1111
			]
		],
		[
			[
				1032,
				1032
			],
			"mapped",
			[
				1112
			]
		],
		[
			[
				1033,
				1033
			],
			"mapped",
			[
				1113
			]
		],
		[
			[
				1034,
				1034
			],
			"mapped",
			[
				1114
			]
		],
		[
			[
				1035,
				1035
			],
			"mapped",
			[
				1115
			]
		],
		[
			[
				1036,
				1036
			],
			"mapped",
			[
				1116
			]
		],
		[
			[
				1037,
				1037
			],
			"mapped",
			[
				1117
			]
		],
		[
			[
				1038,
				1038
			],
			"mapped",
			[
				1118
			]
		],
		[
			[
				1039,
				1039
			],
			"mapped",
			[
				1119
			]
		],
		[
			[
				1040,
				1040
			],
			"mapped",
			[
				1072
			]
		],
		[
			[
				1041,
				1041
			],
			"mapped",
			[
				1073
			]
		],
		[
			[
				1042,
				1042
			],
			"mapped",
			[
				1074
			]
		],
		[
			[
				1043,
				1043
			],
			"mapped",
			[
				1075
			]
		],
		[
			[
				1044,
				1044
			],
			"mapped",
			[
				1076
			]
		],
		[
			[
				1045,
				1045
			],
			"mapped",
			[
				1077
			]
		],
		[
			[
				1046,
				1046
			],
			"mapped",
			[
				1078
			]
		],
		[
			[
				1047,
				1047
			],
			"mapped",
			[
				1079
			]
		],
		[
			[
				1048,
				1048
			],
			"mapped",
			[
				1080
			]
		],
		[
			[
				1049,
				1049
			],
			"mapped",
			[
				1081
			]
		],
		[
			[
				1050,
				1050
			],
			"mapped",
			[
				1082
			]
		],
		[
			[
				1051,
				1051
			],
			"mapped",
			[
				1083
			]
		],
		[
			[
				1052,
				1052
			],
			"mapped",
			[
				1084
			]
		],
		[
			[
				1053,
				1053
			],
			"mapped",
			[
				1085
			]
		],
		[
			[
				1054,
				1054
			],
			"mapped",
			[
				1086
			]
		],
		[
			[
				1055,
				1055
			],
			"mapped",
			[
				1087
			]
		],
		[
			[
				1056,
				1056
			],
			"mapped",
			[
				1088
			]
		],
		[
			[
				1057,
				1057
			],
			"mapped",
			[
				1089
			]
		],
		[
			[
				1058,
				1058
			],
			"mapped",
			[
				1090
			]
		],
		[
			[
				1059,
				1059
			],
			"mapped",
			[
				1091
			]
		],
		[
			[
				1060,
				1060
			],
			"mapped",
			[
				1092
			]
		],
		[
			[
				1061,
				1061
			],
			"mapped",
			[
				1093
			]
		],
		[
			[
				1062,
				1062
			],
			"mapped",
			[
				1094
			]
		],
		[
			[
				1063,
				1063
			],
			"mapped",
			[
				1095
			]
		],
		[
			[
				1064,
				1064
			],
			"mapped",
			[
				1096
			]
		],
		[
			[
				1065,
				1065
			],
			"mapped",
			[
				1097
			]
		],
		[
			[
				1066,
				1066
			],
			"mapped",
			[
				1098
			]
		],
		[
			[
				1067,
				1067
			],
			"mapped",
			[
				1099
			]
		],
		[
			[
				1068,
				1068
			],
			"mapped",
			[
				1100
			]
		],
		[
			[
				1069,
				1069
			],
			"mapped",
			[
				1101
			]
		],
		[
			[
				1070,
				1070
			],
			"mapped",
			[
				1102
			]
		],
		[
			[
				1071,
				1071
			],
			"mapped",
			[
				1103
			]
		],
		[
			[
				1072,
				1103
			],
			"valid"
		],
		[
			[
				1104,
				1104
			],
			"valid"
		],
		[
			[
				1105,
				1116
			],
			"valid"
		],
		[
			[
				1117,
				1117
			],
			"valid"
		],
		[
			[
				1118,
				1119
			],
			"valid"
		],
		[
			[
				1120,
				1120
			],
			"mapped",
			[
				1121
			]
		],
		[
			[
				1121,
				1121
			],
			"valid"
		],
		[
			[
				1122,
				1122
			],
			"mapped",
			[
				1123
			]
		],
		[
			[
				1123,
				1123
			],
			"valid"
		],
		[
			[
				1124,
				1124
			],
			"mapped",
			[
				1125
			]
		],
		[
			[
				1125,
				1125
			],
			"valid"
		],
		[
			[
				1126,
				1126
			],
			"mapped",
			[
				1127
			]
		],
		[
			[
				1127,
				1127
			],
			"valid"
		],
		[
			[
				1128,
				1128
			],
			"mapped",
			[
				1129
			]
		],
		[
			[
				1129,
				1129
			],
			"valid"
		],
		[
			[
				1130,
				1130
			],
			"mapped",
			[
				1131
			]
		],
		[
			[
				1131,
				1131
			],
			"valid"
		],
		[
			[
				1132,
				1132
			],
			"mapped",
			[
				1133
			]
		],
		[
			[
				1133,
				1133
			],
			"valid"
		],
		[
			[
				1134,
				1134
			],
			"mapped",
			[
				1135
			]
		],
		[
			[
				1135,
				1135
			],
			"valid"
		],
		[
			[
				1136,
				1136
			],
			"mapped",
			[
				1137
			]
		],
		[
			[
				1137,
				1137
			],
			"valid"
		],
		[
			[
				1138,
				1138
			],
			"mapped",
			[
				1139
			]
		],
		[
			[
				1139,
				1139
			],
			"valid"
		],
		[
			[
				1140,
				1140
			],
			"mapped",
			[
				1141
			]
		],
		[
			[
				1141,
				1141
			],
			"valid"
		],
		[
			[
				1142,
				1142
			],
			"mapped",
			[
				1143
			]
		],
		[
			[
				1143,
				1143
			],
			"valid"
		],
		[
			[
				1144,
				1144
			],
			"mapped",
			[
				1145
			]
		],
		[
			[
				1145,
				1145
			],
			"valid"
		],
		[
			[
				1146,
				1146
			],
			"mapped",
			[
				1147
			]
		],
		[
			[
				1147,
				1147
			],
			"valid"
		],
		[
			[
				1148,
				1148
			],
			"mapped",
			[
				1149
			]
		],
		[
			[
				1149,
				1149
			],
			"valid"
		],
		[
			[
				1150,
				1150
			],
			"mapped",
			[
				1151
			]
		],
		[
			[
				1151,
				1151
			],
			"valid"
		],
		[
			[
				1152,
				1152
			],
			"mapped",
			[
				1153
			]
		],
		[
			[
				1153,
				1153
			],
			"valid"
		],
		[
			[
				1154,
				1154
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1155,
				1158
			],
			"valid"
		],
		[
			[
				1159,
				1159
			],
			"valid"
		],
		[
			[
				1160,
				1161
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1162,
				1162
			],
			"mapped",
			[
				1163
			]
		],
		[
			[
				1163,
				1163
			],
			"valid"
		],
		[
			[
				1164,
				1164
			],
			"mapped",
			[
				1165
			]
		],
		[
			[
				1165,
				1165
			],
			"valid"
		],
		[
			[
				1166,
				1166
			],
			"mapped",
			[
				1167
			]
		],
		[
			[
				1167,
				1167
			],
			"valid"
		],
		[
			[
				1168,
				1168
			],
			"mapped",
			[
				1169
			]
		],
		[
			[
				1169,
				1169
			],
			"valid"
		],
		[
			[
				1170,
				1170
			],
			"mapped",
			[
				1171
			]
		],
		[
			[
				1171,
				1171
			],
			"valid"
		],
		[
			[
				1172,
				1172
			],
			"mapped",
			[
				1173
			]
		],
		[
			[
				1173,
				1173
			],
			"valid"
		],
		[
			[
				1174,
				1174
			],
			"mapped",
			[
				1175
			]
		],
		[
			[
				1175,
				1175
			],
			"valid"
		],
		[
			[
				1176,
				1176
			],
			"mapped",
			[
				1177
			]
		],
		[
			[
				1177,
				1177
			],
			"valid"
		],
		[
			[
				1178,
				1178
			],
			"mapped",
			[
				1179
			]
		],
		[
			[
				1179,
				1179
			],
			"valid"
		],
		[
			[
				1180,
				1180
			],
			"mapped",
			[
				1181
			]
		],
		[
			[
				1181,
				1181
			],
			"valid"
		],
		[
			[
				1182,
				1182
			],
			"mapped",
			[
				1183
			]
		],
		[
			[
				1183,
				1183
			],
			"valid"
		],
		[
			[
				1184,
				1184
			],
			"mapped",
			[
				1185
			]
		],
		[
			[
				1185,
				1185
			],
			"valid"
		],
		[
			[
				1186,
				1186
			],
			"mapped",
			[
				1187
			]
		],
		[
			[
				1187,
				1187
			],
			"valid"
		],
		[
			[
				1188,
				1188
			],
			"mapped",
			[
				1189
			]
		],
		[
			[
				1189,
				1189
			],
			"valid"
		],
		[
			[
				1190,
				1190
			],
			"mapped",
			[
				1191
			]
		],
		[
			[
				1191,
				1191
			],
			"valid"
		],
		[
			[
				1192,
				1192
			],
			"mapped",
			[
				1193
			]
		],
		[
			[
				1193,
				1193
			],
			"valid"
		],
		[
			[
				1194,
				1194
			],
			"mapped",
			[
				1195
			]
		],
		[
			[
				1195,
				1195
			],
			"valid"
		],
		[
			[
				1196,
				1196
			],
			"mapped",
			[
				1197
			]
		],
		[
			[
				1197,
				1197
			],
			"valid"
		],
		[
			[
				1198,
				1198
			],
			"mapped",
			[
				1199
			]
		],
		[
			[
				1199,
				1199
			],
			"valid"
		],
		[
			[
				1200,
				1200
			],
			"mapped",
			[
				1201
			]
		],
		[
			[
				1201,
				1201
			],
			"valid"
		],
		[
			[
				1202,
				1202
			],
			"mapped",
			[
				1203
			]
		],
		[
			[
				1203,
				1203
			],
			"valid"
		],
		[
			[
				1204,
				1204
			],
			"mapped",
			[
				1205
			]
		],
		[
			[
				1205,
				1205
			],
			"valid"
		],
		[
			[
				1206,
				1206
			],
			"mapped",
			[
				1207
			]
		],
		[
			[
				1207,
				1207
			],
			"valid"
		],
		[
			[
				1208,
				1208
			],
			"mapped",
			[
				1209
			]
		],
		[
			[
				1209,
				1209
			],
			"valid"
		],
		[
			[
				1210,
				1210
			],
			"mapped",
			[
				1211
			]
		],
		[
			[
				1211,
				1211
			],
			"valid"
		],
		[
			[
				1212,
				1212
			],
			"mapped",
			[
				1213
			]
		],
		[
			[
				1213,
				1213
			],
			"valid"
		],
		[
			[
				1214,
				1214
			],
			"mapped",
			[
				1215
			]
		],
		[
			[
				1215,
				1215
			],
			"valid"
		],
		[
			[
				1216,
				1216
			],
			"disallowed"
		],
		[
			[
				1217,
				1217
			],
			"mapped",
			[
				1218
			]
		],
		[
			[
				1218,
				1218
			],
			"valid"
		],
		[
			[
				1219,
				1219
			],
			"mapped",
			[
				1220
			]
		],
		[
			[
				1220,
				1220
			],
			"valid"
		],
		[
			[
				1221,
				1221
			],
			"mapped",
			[
				1222
			]
		],
		[
			[
				1222,
				1222
			],
			"valid"
		],
		[
			[
				1223,
				1223
			],
			"mapped",
			[
				1224
			]
		],
		[
			[
				1224,
				1224
			],
			"valid"
		],
		[
			[
				1225,
				1225
			],
			"mapped",
			[
				1226
			]
		],
		[
			[
				1226,
				1226
			],
			"valid"
		],
		[
			[
				1227,
				1227
			],
			"mapped",
			[
				1228
			]
		],
		[
			[
				1228,
				1228
			],
			"valid"
		],
		[
			[
				1229,
				1229
			],
			"mapped",
			[
				1230
			]
		],
		[
			[
				1230,
				1230
			],
			"valid"
		],
		[
			[
				1231,
				1231
			],
			"valid"
		],
		[
			[
				1232,
				1232
			],
			"mapped",
			[
				1233
			]
		],
		[
			[
				1233,
				1233
			],
			"valid"
		],
		[
			[
				1234,
				1234
			],
			"mapped",
			[
				1235
			]
		],
		[
			[
				1235,
				1235
			],
			"valid"
		],
		[
			[
				1236,
				1236
			],
			"mapped",
			[
				1237
			]
		],
		[
			[
				1237,
				1237
			],
			"valid"
		],
		[
			[
				1238,
				1238
			],
			"mapped",
			[
				1239
			]
		],
		[
			[
				1239,
				1239
			],
			"valid"
		],
		[
			[
				1240,
				1240
			],
			"mapped",
			[
				1241
			]
		],
		[
			[
				1241,
				1241
			],
			"valid"
		],
		[
			[
				1242,
				1242
			],
			"mapped",
			[
				1243
			]
		],
		[
			[
				1243,
				1243
			],
			"valid"
		],
		[
			[
				1244,
				1244
			],
			"mapped",
			[
				1245
			]
		],
		[
			[
				1245,
				1245
			],
			"valid"
		],
		[
			[
				1246,
				1246
			],
			"mapped",
			[
				1247
			]
		],
		[
			[
				1247,
				1247
			],
			"valid"
		],
		[
			[
				1248,
				1248
			],
			"mapped",
			[
				1249
			]
		],
		[
			[
				1249,
				1249
			],
			"valid"
		],
		[
			[
				1250,
				1250
			],
			"mapped",
			[
				1251
			]
		],
		[
			[
				1251,
				1251
			],
			"valid"
		],
		[
			[
				1252,
				1252
			],
			"mapped",
			[
				1253
			]
		],
		[
			[
				1253,
				1253
			],
			"valid"
		],
		[
			[
				1254,
				1254
			],
			"mapped",
			[
				1255
			]
		],
		[
			[
				1255,
				1255
			],
			"valid"
		],
		[
			[
				1256,
				1256
			],
			"mapped",
			[
				1257
			]
		],
		[
			[
				1257,
				1257
			],
			"valid"
		],
		[
			[
				1258,
				1258
			],
			"mapped",
			[
				1259
			]
		],
		[
			[
				1259,
				1259
			],
			"valid"
		],
		[
			[
				1260,
				1260
			],
			"mapped",
			[
				1261
			]
		],
		[
			[
				1261,
				1261
			],
			"valid"
		],
		[
			[
				1262,
				1262
			],
			"mapped",
			[
				1263
			]
		],
		[
			[
				1263,
				1263
			],
			"valid"
		],
		[
			[
				1264,
				1264
			],
			"mapped",
			[
				1265
			]
		],
		[
			[
				1265,
				1265
			],
			"valid"
		],
		[
			[
				1266,
				1266
			],
			"mapped",
			[
				1267
			]
		],
		[
			[
				1267,
				1267
			],
			"valid"
		],
		[
			[
				1268,
				1268
			],
			"mapped",
			[
				1269
			]
		],
		[
			[
				1269,
				1269
			],
			"valid"
		],
		[
			[
				1270,
				1270
			],
			"mapped",
			[
				1271
			]
		],
		[
			[
				1271,
				1271
			],
			"valid"
		],
		[
			[
				1272,
				1272
			],
			"mapped",
			[
				1273
			]
		],
		[
			[
				1273,
				1273
			],
			"valid"
		],
		[
			[
				1274,
				1274
			],
			"mapped",
			[
				1275
			]
		],
		[
			[
				1275,
				1275
			],
			"valid"
		],
		[
			[
				1276,
				1276
			],
			"mapped",
			[
				1277
			]
		],
		[
			[
				1277,
				1277
			],
			"valid"
		],
		[
			[
				1278,
				1278
			],
			"mapped",
			[
				1279
			]
		],
		[
			[
				1279,
				1279
			],
			"valid"
		],
		[
			[
				1280,
				1280
			],
			"mapped",
			[
				1281
			]
		],
		[
			[
				1281,
				1281
			],
			"valid"
		],
		[
			[
				1282,
				1282
			],
			"mapped",
			[
				1283
			]
		],
		[
			[
				1283,
				1283
			],
			"valid"
		],
		[
			[
				1284,
				1284
			],
			"mapped",
			[
				1285
			]
		],
		[
			[
				1285,
				1285
			],
			"valid"
		],
		[
			[
				1286,
				1286
			],
			"mapped",
			[
				1287
			]
		],
		[
			[
				1287,
				1287
			],
			"valid"
		],
		[
			[
				1288,
				1288
			],
			"mapped",
			[
				1289
			]
		],
		[
			[
				1289,
				1289
			],
			"valid"
		],
		[
			[
				1290,
				1290
			],
			"mapped",
			[
				1291
			]
		],
		[
			[
				1291,
				1291
			],
			"valid"
		],
		[
			[
				1292,
				1292
			],
			"mapped",
			[
				1293
			]
		],
		[
			[
				1293,
				1293
			],
			"valid"
		],
		[
			[
				1294,
				1294
			],
			"mapped",
			[
				1295
			]
		],
		[
			[
				1295,
				1295
			],
			"valid"
		],
		[
			[
				1296,
				1296
			],
			"mapped",
			[
				1297
			]
		],
		[
			[
				1297,
				1297
			],
			"valid"
		],
		[
			[
				1298,
				1298
			],
			"mapped",
			[
				1299
			]
		],
		[
			[
				1299,
				1299
			],
			"valid"
		],
		[
			[
				1300,
				1300
			],
			"mapped",
			[
				1301
			]
		],
		[
			[
				1301,
				1301
			],
			"valid"
		],
		[
			[
				1302,
				1302
			],
			"mapped",
			[
				1303
			]
		],
		[
			[
				1303,
				1303
			],
			"valid"
		],
		[
			[
				1304,
				1304
			],
			"mapped",
			[
				1305
			]
		],
		[
			[
				1305,
				1305
			],
			"valid"
		],
		[
			[
				1306,
				1306
			],
			"mapped",
			[
				1307
			]
		],
		[
			[
				1307,
				1307
			],
			"valid"
		],
		[
			[
				1308,
				1308
			],
			"mapped",
			[
				1309
			]
		],
		[
			[
				1309,
				1309
			],
			"valid"
		],
		[
			[
				1310,
				1310
			],
			"mapped",
			[
				1311
			]
		],
		[
			[
				1311,
				1311
			],
			"valid"
		],
		[
			[
				1312,
				1312
			],
			"mapped",
			[
				1313
			]
		],
		[
			[
				1313,
				1313
			],
			"valid"
		],
		[
			[
				1314,
				1314
			],
			"mapped",
			[
				1315
			]
		],
		[
			[
				1315,
				1315
			],
			"valid"
		],
		[
			[
				1316,
				1316
			],
			"mapped",
			[
				1317
			]
		],
		[
			[
				1317,
				1317
			],
			"valid"
		],
		[
			[
				1318,
				1318
			],
			"mapped",
			[
				1319
			]
		],
		[
			[
				1319,
				1319
			],
			"valid"
		],
		[
			[
				1320,
				1320
			],
			"mapped",
			[
				1321
			]
		],
		[
			[
				1321,
				1321
			],
			"valid"
		],
		[
			[
				1322,
				1322
			],
			"mapped",
			[
				1323
			]
		],
		[
			[
				1323,
				1323
			],
			"valid"
		],
		[
			[
				1324,
				1324
			],
			"mapped",
			[
				1325
			]
		],
		[
			[
				1325,
				1325
			],
			"valid"
		],
		[
			[
				1326,
				1326
			],
			"mapped",
			[
				1327
			]
		],
		[
			[
				1327,
				1327
			],
			"valid"
		],
		[
			[
				1328,
				1328
			],
			"disallowed"
		],
		[
			[
				1329,
				1329
			],
			"mapped",
			[
				1377
			]
		],
		[
			[
				1330,
				1330
			],
			"mapped",
			[
				1378
			]
		],
		[
			[
				1331,
				1331
			],
			"mapped",
			[
				1379
			]
		],
		[
			[
				1332,
				1332
			],
			"mapped",
			[
				1380
			]
		],
		[
			[
				1333,
				1333
			],
			"mapped",
			[
				1381
			]
		],
		[
			[
				1334,
				1334
			],
			"mapped",
			[
				1382
			]
		],
		[
			[
				1335,
				1335
			],
			"mapped",
			[
				1383
			]
		],
		[
			[
				1336,
				1336
			],
			"mapped",
			[
				1384
			]
		],
		[
			[
				1337,
				1337
			],
			"mapped",
			[
				1385
			]
		],
		[
			[
				1338,
				1338
			],
			"mapped",
			[
				1386
			]
		],
		[
			[
				1339,
				1339
			],
			"mapped",
			[
				1387
			]
		],
		[
			[
				1340,
				1340
			],
			"mapped",
			[
				1388
			]
		],
		[
			[
				1341,
				1341
			],
			"mapped",
			[
				1389
			]
		],
		[
			[
				1342,
				1342
			],
			"mapped",
			[
				1390
			]
		],
		[
			[
				1343,
				1343
			],
			"mapped",
			[
				1391
			]
		],
		[
			[
				1344,
				1344
			],
			"mapped",
			[
				1392
			]
		],
		[
			[
				1345,
				1345
			],
			"mapped",
			[
				1393
			]
		],
		[
			[
				1346,
				1346
			],
			"mapped",
			[
				1394
			]
		],
		[
			[
				1347,
				1347
			],
			"mapped",
			[
				1395
			]
		],
		[
			[
				1348,
				1348
			],
			"mapped",
			[
				1396
			]
		],
		[
			[
				1349,
				1349
			],
			"mapped",
			[
				1397
			]
		],
		[
			[
				1350,
				1350
			],
			"mapped",
			[
				1398
			]
		],
		[
			[
				1351,
				1351
			],
			"mapped",
			[
				1399
			]
		],
		[
			[
				1352,
				1352
			],
			"mapped",
			[
				1400
			]
		],
		[
			[
				1353,
				1353
			],
			"mapped",
			[
				1401
			]
		],
		[
			[
				1354,
				1354
			],
			"mapped",
			[
				1402
			]
		],
		[
			[
				1355,
				1355
			],
			"mapped",
			[
				1403
			]
		],
		[
			[
				1356,
				1356
			],
			"mapped",
			[
				1404
			]
		],
		[
			[
				1357,
				1357
			],
			"mapped",
			[
				1405
			]
		],
		[
			[
				1358,
				1358
			],
			"mapped",
			[
				1406
			]
		],
		[
			[
				1359,
				1359
			],
			"mapped",
			[
				1407
			]
		],
		[
			[
				1360,
				1360
			],
			"mapped",
			[
				1408
			]
		],
		[
			[
				1361,
				1361
			],
			"mapped",
			[
				1409
			]
		],
		[
			[
				1362,
				1362
			],
			"mapped",
			[
				1410
			]
		],
		[
			[
				1363,
				1363
			],
			"mapped",
			[
				1411
			]
		],
		[
			[
				1364,
				1364
			],
			"mapped",
			[
				1412
			]
		],
		[
			[
				1365,
				1365
			],
			"mapped",
			[
				1413
			]
		],
		[
			[
				1366,
				1366
			],
			"mapped",
			[
				1414
			]
		],
		[
			[
				1367,
				1368
			],
			"disallowed"
		],
		[
			[
				1369,
				1369
			],
			"valid"
		],
		[
			[
				1370,
				1375
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1376,
				1376
			],
			"disallowed"
		],
		[
			[
				1377,
				1414
			],
			"valid"
		],
		[
			[
				1415,
				1415
			],
			"mapped",
			[
				1381,
				1410
			]
		],
		[
			[
				1416,
				1416
			],
			"disallowed"
		],
		[
			[
				1417,
				1417
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1418,
				1418
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1419,
				1420
			],
			"disallowed"
		],
		[
			[
				1421,
				1422
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1423,
				1423
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1424,
				1424
			],
			"disallowed"
		],
		[
			[
				1425,
				1441
			],
			"valid"
		],
		[
			[
				1442,
				1442
			],
			"valid"
		],
		[
			[
				1443,
				1455
			],
			"valid"
		],
		[
			[
				1456,
				1465
			],
			"valid"
		],
		[
			[
				1466,
				1466
			],
			"valid"
		],
		[
			[
				1467,
				1469
			],
			"valid"
		],
		[
			[
				1470,
				1470
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1471,
				1471
			],
			"valid"
		],
		[
			[
				1472,
				1472
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1473,
				1474
			],
			"valid"
		],
		[
			[
				1475,
				1475
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1476,
				1476
			],
			"valid"
		],
		[
			[
				1477,
				1477
			],
			"valid"
		],
		[
			[
				1478,
				1478
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1479,
				1479
			],
			"valid"
		],
		[
			[
				1480,
				1487
			],
			"disallowed"
		],
		[
			[
				1488,
				1514
			],
			"valid"
		],
		[
			[
				1515,
				1519
			],
			"disallowed"
		],
		[
			[
				1520,
				1524
			],
			"valid"
		],
		[
			[
				1525,
				1535
			],
			"disallowed"
		],
		[
			[
				1536,
				1539
			],
			"disallowed"
		],
		[
			[
				1540,
				1540
			],
			"disallowed"
		],
		[
			[
				1541,
				1541
			],
			"disallowed"
		],
		[
			[
				1542,
				1546
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1547,
				1547
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1548,
				1548
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1549,
				1551
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1552,
				1557
			],
			"valid"
		],
		[
			[
				1558,
				1562
			],
			"valid"
		],
		[
			[
				1563,
				1563
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1564,
				1564
			],
			"disallowed"
		],
		[
			[
				1565,
				1565
			],
			"disallowed"
		],
		[
			[
				1566,
				1566
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1567,
				1567
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1568,
				1568
			],
			"valid"
		],
		[
			[
				1569,
				1594
			],
			"valid"
		],
		[
			[
				1595,
				1599
			],
			"valid"
		],
		[
			[
				1600,
				1600
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1601,
				1618
			],
			"valid"
		],
		[
			[
				1619,
				1621
			],
			"valid"
		],
		[
			[
				1622,
				1624
			],
			"valid"
		],
		[
			[
				1625,
				1630
			],
			"valid"
		],
		[
			[
				1631,
				1631
			],
			"valid"
		],
		[
			[
				1632,
				1641
			],
			"valid"
		],
		[
			[
				1642,
				1645
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1646,
				1647
			],
			"valid"
		],
		[
			[
				1648,
				1652
			],
			"valid"
		],
		[
			[
				1653,
				1653
			],
			"mapped",
			[
				1575,
				1652
			]
		],
		[
			[
				1654,
				1654
			],
			"mapped",
			[
				1608,
				1652
			]
		],
		[
			[
				1655,
				1655
			],
			"mapped",
			[
				1735,
				1652
			]
		],
		[
			[
				1656,
				1656
			],
			"mapped",
			[
				1610,
				1652
			]
		],
		[
			[
				1657,
				1719
			],
			"valid"
		],
		[
			[
				1720,
				1721
			],
			"valid"
		],
		[
			[
				1722,
				1726
			],
			"valid"
		],
		[
			[
				1727,
				1727
			],
			"valid"
		],
		[
			[
				1728,
				1742
			],
			"valid"
		],
		[
			[
				1743,
				1743
			],
			"valid"
		],
		[
			[
				1744,
				1747
			],
			"valid"
		],
		[
			[
				1748,
				1748
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1749,
				1756
			],
			"valid"
		],
		[
			[
				1757,
				1757
			],
			"disallowed"
		],
		[
			[
				1758,
				1758
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1759,
				1768
			],
			"valid"
		],
		[
			[
				1769,
				1769
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1770,
				1773
			],
			"valid"
		],
		[
			[
				1774,
				1775
			],
			"valid"
		],
		[
			[
				1776,
				1785
			],
			"valid"
		],
		[
			[
				1786,
				1790
			],
			"valid"
		],
		[
			[
				1791,
				1791
			],
			"valid"
		],
		[
			[
				1792,
				1805
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				1806,
				1806
			],
			"disallowed"
		],
		[
			[
				1807,
				1807
			],
			"disallowed"
		],
		[
			[
				1808,
				1836
			],
			"valid"
		],
		[
			[
				1837,
				1839
			],
			"valid"
		],
		[
			[
				1840,
				1866
			],
			"valid"
		],
		[
			[
				1867,
				1868
			],
			"disallowed"
		],
		[
			[
				1869,
				1871
			],
			"valid"
		],
		[
			[
				1872,
				1901
			],
			"valid"
		],
		[
			[
				1902,
				1919
			],
			"valid"
		],
		[
			[
				1920,
				1968
			],
			"valid"
		],
		[
			[
				1969,
				1969
			],
			"valid"
		],
		[
			[
				1970,
				1983
			],
			"disallowed"
		],
		[
			[
				1984,
				2037
			],
			"valid"
		],
		[
			[
				2038,
				2042
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2043,
				2047
			],
			"disallowed"
		],
		[
			[
				2048,
				2093
			],
			"valid"
		],
		[
			[
				2094,
				2095
			],
			"disallowed"
		],
		[
			[
				2096,
				2110
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2111,
				2111
			],
			"disallowed"
		],
		[
			[
				2112,
				2139
			],
			"valid"
		],
		[
			[
				2140,
				2141
			],
			"disallowed"
		],
		[
			[
				2142,
				2142
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2143,
				2207
			],
			"disallowed"
		],
		[
			[
				2208,
				2208
			],
			"valid"
		],
		[
			[
				2209,
				2209
			],
			"valid"
		],
		[
			[
				2210,
				2220
			],
			"valid"
		],
		[
			[
				2221,
				2226
			],
			"valid"
		],
		[
			[
				2227,
				2228
			],
			"valid"
		],
		[
			[
				2229,
				2274
			],
			"disallowed"
		],
		[
			[
				2275,
				2275
			],
			"valid"
		],
		[
			[
				2276,
				2302
			],
			"valid"
		],
		[
			[
				2303,
				2303
			],
			"valid"
		],
		[
			[
				2304,
				2304
			],
			"valid"
		],
		[
			[
				2305,
				2307
			],
			"valid"
		],
		[
			[
				2308,
				2308
			],
			"valid"
		],
		[
			[
				2309,
				2361
			],
			"valid"
		],
		[
			[
				2362,
				2363
			],
			"valid"
		],
		[
			[
				2364,
				2381
			],
			"valid"
		],
		[
			[
				2382,
				2382
			],
			"valid"
		],
		[
			[
				2383,
				2383
			],
			"valid"
		],
		[
			[
				2384,
				2388
			],
			"valid"
		],
		[
			[
				2389,
				2389
			],
			"valid"
		],
		[
			[
				2390,
				2391
			],
			"valid"
		],
		[
			[
				2392,
				2392
			],
			"mapped",
			[
				2325,
				2364
			]
		],
		[
			[
				2393,
				2393
			],
			"mapped",
			[
				2326,
				2364
			]
		],
		[
			[
				2394,
				2394
			],
			"mapped",
			[
				2327,
				2364
			]
		],
		[
			[
				2395,
				2395
			],
			"mapped",
			[
				2332,
				2364
			]
		],
		[
			[
				2396,
				2396
			],
			"mapped",
			[
				2337,
				2364
			]
		],
		[
			[
				2397,
				2397
			],
			"mapped",
			[
				2338,
				2364
			]
		],
		[
			[
				2398,
				2398
			],
			"mapped",
			[
				2347,
				2364
			]
		],
		[
			[
				2399,
				2399
			],
			"mapped",
			[
				2351,
				2364
			]
		],
		[
			[
				2400,
				2403
			],
			"valid"
		],
		[
			[
				2404,
				2405
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2406,
				2415
			],
			"valid"
		],
		[
			[
				2416,
				2416
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2417,
				2418
			],
			"valid"
		],
		[
			[
				2419,
				2423
			],
			"valid"
		],
		[
			[
				2424,
				2424
			],
			"valid"
		],
		[
			[
				2425,
				2426
			],
			"valid"
		],
		[
			[
				2427,
				2428
			],
			"valid"
		],
		[
			[
				2429,
				2429
			],
			"valid"
		],
		[
			[
				2430,
				2431
			],
			"valid"
		],
		[
			[
				2432,
				2432
			],
			"valid"
		],
		[
			[
				2433,
				2435
			],
			"valid"
		],
		[
			[
				2436,
				2436
			],
			"disallowed"
		],
		[
			[
				2437,
				2444
			],
			"valid"
		],
		[
			[
				2445,
				2446
			],
			"disallowed"
		],
		[
			[
				2447,
				2448
			],
			"valid"
		],
		[
			[
				2449,
				2450
			],
			"disallowed"
		],
		[
			[
				2451,
				2472
			],
			"valid"
		],
		[
			[
				2473,
				2473
			],
			"disallowed"
		],
		[
			[
				2474,
				2480
			],
			"valid"
		],
		[
			[
				2481,
				2481
			],
			"disallowed"
		],
		[
			[
				2482,
				2482
			],
			"valid"
		],
		[
			[
				2483,
				2485
			],
			"disallowed"
		],
		[
			[
				2486,
				2489
			],
			"valid"
		],
		[
			[
				2490,
				2491
			],
			"disallowed"
		],
		[
			[
				2492,
				2492
			],
			"valid"
		],
		[
			[
				2493,
				2493
			],
			"valid"
		],
		[
			[
				2494,
				2500
			],
			"valid"
		],
		[
			[
				2501,
				2502
			],
			"disallowed"
		],
		[
			[
				2503,
				2504
			],
			"valid"
		],
		[
			[
				2505,
				2506
			],
			"disallowed"
		],
		[
			[
				2507,
				2509
			],
			"valid"
		],
		[
			[
				2510,
				2510
			],
			"valid"
		],
		[
			[
				2511,
				2518
			],
			"disallowed"
		],
		[
			[
				2519,
				2519
			],
			"valid"
		],
		[
			[
				2520,
				2523
			],
			"disallowed"
		],
		[
			[
				2524,
				2524
			],
			"mapped",
			[
				2465,
				2492
			]
		],
		[
			[
				2525,
				2525
			],
			"mapped",
			[
				2466,
				2492
			]
		],
		[
			[
				2526,
				2526
			],
			"disallowed"
		],
		[
			[
				2527,
				2527
			],
			"mapped",
			[
				2479,
				2492
			]
		],
		[
			[
				2528,
				2531
			],
			"valid"
		],
		[
			[
				2532,
				2533
			],
			"disallowed"
		],
		[
			[
				2534,
				2545
			],
			"valid"
		],
		[
			[
				2546,
				2554
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2555,
				2555
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2556,
				2560
			],
			"disallowed"
		],
		[
			[
				2561,
				2561
			],
			"valid"
		],
		[
			[
				2562,
				2562
			],
			"valid"
		],
		[
			[
				2563,
				2563
			],
			"valid"
		],
		[
			[
				2564,
				2564
			],
			"disallowed"
		],
		[
			[
				2565,
				2570
			],
			"valid"
		],
		[
			[
				2571,
				2574
			],
			"disallowed"
		],
		[
			[
				2575,
				2576
			],
			"valid"
		],
		[
			[
				2577,
				2578
			],
			"disallowed"
		],
		[
			[
				2579,
				2600
			],
			"valid"
		],
		[
			[
				2601,
				2601
			],
			"disallowed"
		],
		[
			[
				2602,
				2608
			],
			"valid"
		],
		[
			[
				2609,
				2609
			],
			"disallowed"
		],
		[
			[
				2610,
				2610
			],
			"valid"
		],
		[
			[
				2611,
				2611
			],
			"mapped",
			[
				2610,
				2620
			]
		],
		[
			[
				2612,
				2612
			],
			"disallowed"
		],
		[
			[
				2613,
				2613
			],
			"valid"
		],
		[
			[
				2614,
				2614
			],
			"mapped",
			[
				2616,
				2620
			]
		],
		[
			[
				2615,
				2615
			],
			"disallowed"
		],
		[
			[
				2616,
				2617
			],
			"valid"
		],
		[
			[
				2618,
				2619
			],
			"disallowed"
		],
		[
			[
				2620,
				2620
			],
			"valid"
		],
		[
			[
				2621,
				2621
			],
			"disallowed"
		],
		[
			[
				2622,
				2626
			],
			"valid"
		],
		[
			[
				2627,
				2630
			],
			"disallowed"
		],
		[
			[
				2631,
				2632
			],
			"valid"
		],
		[
			[
				2633,
				2634
			],
			"disallowed"
		],
		[
			[
				2635,
				2637
			],
			"valid"
		],
		[
			[
				2638,
				2640
			],
			"disallowed"
		],
		[
			[
				2641,
				2641
			],
			"valid"
		],
		[
			[
				2642,
				2648
			],
			"disallowed"
		],
		[
			[
				2649,
				2649
			],
			"mapped",
			[
				2582,
				2620
			]
		],
		[
			[
				2650,
				2650
			],
			"mapped",
			[
				2583,
				2620
			]
		],
		[
			[
				2651,
				2651
			],
			"mapped",
			[
				2588,
				2620
			]
		],
		[
			[
				2652,
				2652
			],
			"valid"
		],
		[
			[
				2653,
				2653
			],
			"disallowed"
		],
		[
			[
				2654,
				2654
			],
			"mapped",
			[
				2603,
				2620
			]
		],
		[
			[
				2655,
				2661
			],
			"disallowed"
		],
		[
			[
				2662,
				2676
			],
			"valid"
		],
		[
			[
				2677,
				2677
			],
			"valid"
		],
		[
			[
				2678,
				2688
			],
			"disallowed"
		],
		[
			[
				2689,
				2691
			],
			"valid"
		],
		[
			[
				2692,
				2692
			],
			"disallowed"
		],
		[
			[
				2693,
				2699
			],
			"valid"
		],
		[
			[
				2700,
				2700
			],
			"valid"
		],
		[
			[
				2701,
				2701
			],
			"valid"
		],
		[
			[
				2702,
				2702
			],
			"disallowed"
		],
		[
			[
				2703,
				2705
			],
			"valid"
		],
		[
			[
				2706,
				2706
			],
			"disallowed"
		],
		[
			[
				2707,
				2728
			],
			"valid"
		],
		[
			[
				2729,
				2729
			],
			"disallowed"
		],
		[
			[
				2730,
				2736
			],
			"valid"
		],
		[
			[
				2737,
				2737
			],
			"disallowed"
		],
		[
			[
				2738,
				2739
			],
			"valid"
		],
		[
			[
				2740,
				2740
			],
			"disallowed"
		],
		[
			[
				2741,
				2745
			],
			"valid"
		],
		[
			[
				2746,
				2747
			],
			"disallowed"
		],
		[
			[
				2748,
				2757
			],
			"valid"
		],
		[
			[
				2758,
				2758
			],
			"disallowed"
		],
		[
			[
				2759,
				2761
			],
			"valid"
		],
		[
			[
				2762,
				2762
			],
			"disallowed"
		],
		[
			[
				2763,
				2765
			],
			"valid"
		],
		[
			[
				2766,
				2767
			],
			"disallowed"
		],
		[
			[
				2768,
				2768
			],
			"valid"
		],
		[
			[
				2769,
				2783
			],
			"disallowed"
		],
		[
			[
				2784,
				2784
			],
			"valid"
		],
		[
			[
				2785,
				2787
			],
			"valid"
		],
		[
			[
				2788,
				2789
			],
			"disallowed"
		],
		[
			[
				2790,
				2799
			],
			"valid"
		],
		[
			[
				2800,
				2800
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2801,
				2801
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2802,
				2808
			],
			"disallowed"
		],
		[
			[
				2809,
				2809
			],
			"valid"
		],
		[
			[
				2810,
				2816
			],
			"disallowed"
		],
		[
			[
				2817,
				2819
			],
			"valid"
		],
		[
			[
				2820,
				2820
			],
			"disallowed"
		],
		[
			[
				2821,
				2828
			],
			"valid"
		],
		[
			[
				2829,
				2830
			],
			"disallowed"
		],
		[
			[
				2831,
				2832
			],
			"valid"
		],
		[
			[
				2833,
				2834
			],
			"disallowed"
		],
		[
			[
				2835,
				2856
			],
			"valid"
		],
		[
			[
				2857,
				2857
			],
			"disallowed"
		],
		[
			[
				2858,
				2864
			],
			"valid"
		],
		[
			[
				2865,
				2865
			],
			"disallowed"
		],
		[
			[
				2866,
				2867
			],
			"valid"
		],
		[
			[
				2868,
				2868
			],
			"disallowed"
		],
		[
			[
				2869,
				2869
			],
			"valid"
		],
		[
			[
				2870,
				2873
			],
			"valid"
		],
		[
			[
				2874,
				2875
			],
			"disallowed"
		],
		[
			[
				2876,
				2883
			],
			"valid"
		],
		[
			[
				2884,
				2884
			],
			"valid"
		],
		[
			[
				2885,
				2886
			],
			"disallowed"
		],
		[
			[
				2887,
				2888
			],
			"valid"
		],
		[
			[
				2889,
				2890
			],
			"disallowed"
		],
		[
			[
				2891,
				2893
			],
			"valid"
		],
		[
			[
				2894,
				2901
			],
			"disallowed"
		],
		[
			[
				2902,
				2903
			],
			"valid"
		],
		[
			[
				2904,
				2907
			],
			"disallowed"
		],
		[
			[
				2908,
				2908
			],
			"mapped",
			[
				2849,
				2876
			]
		],
		[
			[
				2909,
				2909
			],
			"mapped",
			[
				2850,
				2876
			]
		],
		[
			[
				2910,
				2910
			],
			"disallowed"
		],
		[
			[
				2911,
				2913
			],
			"valid"
		],
		[
			[
				2914,
				2915
			],
			"valid"
		],
		[
			[
				2916,
				2917
			],
			"disallowed"
		],
		[
			[
				2918,
				2927
			],
			"valid"
		],
		[
			[
				2928,
				2928
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2929,
				2929
			],
			"valid"
		],
		[
			[
				2930,
				2935
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				2936,
				2945
			],
			"disallowed"
		],
		[
			[
				2946,
				2947
			],
			"valid"
		],
		[
			[
				2948,
				2948
			],
			"disallowed"
		],
		[
			[
				2949,
				2954
			],
			"valid"
		],
		[
			[
				2955,
				2957
			],
			"disallowed"
		],
		[
			[
				2958,
				2960
			],
			"valid"
		],
		[
			[
				2961,
				2961
			],
			"disallowed"
		],
		[
			[
				2962,
				2965
			],
			"valid"
		],
		[
			[
				2966,
				2968
			],
			"disallowed"
		],
		[
			[
				2969,
				2970
			],
			"valid"
		],
		[
			[
				2971,
				2971
			],
			"disallowed"
		],
		[
			[
				2972,
				2972
			],
			"valid"
		],
		[
			[
				2973,
				2973
			],
			"disallowed"
		],
		[
			[
				2974,
				2975
			],
			"valid"
		],
		[
			[
				2976,
				2978
			],
			"disallowed"
		],
		[
			[
				2979,
				2980
			],
			"valid"
		],
		[
			[
				2981,
				2983
			],
			"disallowed"
		],
		[
			[
				2984,
				2986
			],
			"valid"
		],
		[
			[
				2987,
				2989
			],
			"disallowed"
		],
		[
			[
				2990,
				2997
			],
			"valid"
		],
		[
			[
				2998,
				2998
			],
			"valid"
		],
		[
			[
				2999,
				3001
			],
			"valid"
		],
		[
			[
				3002,
				3005
			],
			"disallowed"
		],
		[
			[
				3006,
				3010
			],
			"valid"
		],
		[
			[
				3011,
				3013
			],
			"disallowed"
		],
		[
			[
				3014,
				3016
			],
			"valid"
		],
		[
			[
				3017,
				3017
			],
			"disallowed"
		],
		[
			[
				3018,
				3021
			],
			"valid"
		],
		[
			[
				3022,
				3023
			],
			"disallowed"
		],
		[
			[
				3024,
				3024
			],
			"valid"
		],
		[
			[
				3025,
				3030
			],
			"disallowed"
		],
		[
			[
				3031,
				3031
			],
			"valid"
		],
		[
			[
				3032,
				3045
			],
			"disallowed"
		],
		[
			[
				3046,
				3046
			],
			"valid"
		],
		[
			[
				3047,
				3055
			],
			"valid"
		],
		[
			[
				3056,
				3058
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3059,
				3066
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3067,
				3071
			],
			"disallowed"
		],
		[
			[
				3072,
				3072
			],
			"valid"
		],
		[
			[
				3073,
				3075
			],
			"valid"
		],
		[
			[
				3076,
				3076
			],
			"disallowed"
		],
		[
			[
				3077,
				3084
			],
			"valid"
		],
		[
			[
				3085,
				3085
			],
			"disallowed"
		],
		[
			[
				3086,
				3088
			],
			"valid"
		],
		[
			[
				3089,
				3089
			],
			"disallowed"
		],
		[
			[
				3090,
				3112
			],
			"valid"
		],
		[
			[
				3113,
				3113
			],
			"disallowed"
		],
		[
			[
				3114,
				3123
			],
			"valid"
		],
		[
			[
				3124,
				3124
			],
			"valid"
		],
		[
			[
				3125,
				3129
			],
			"valid"
		],
		[
			[
				3130,
				3132
			],
			"disallowed"
		],
		[
			[
				3133,
				3133
			],
			"valid"
		],
		[
			[
				3134,
				3140
			],
			"valid"
		],
		[
			[
				3141,
				3141
			],
			"disallowed"
		],
		[
			[
				3142,
				3144
			],
			"valid"
		],
		[
			[
				3145,
				3145
			],
			"disallowed"
		],
		[
			[
				3146,
				3149
			],
			"valid"
		],
		[
			[
				3150,
				3156
			],
			"disallowed"
		],
		[
			[
				3157,
				3158
			],
			"valid"
		],
		[
			[
				3159,
				3159
			],
			"disallowed"
		],
		[
			[
				3160,
				3161
			],
			"valid"
		],
		[
			[
				3162,
				3162
			],
			"valid"
		],
		[
			[
				3163,
				3167
			],
			"disallowed"
		],
		[
			[
				3168,
				3169
			],
			"valid"
		],
		[
			[
				3170,
				3171
			],
			"valid"
		],
		[
			[
				3172,
				3173
			],
			"disallowed"
		],
		[
			[
				3174,
				3183
			],
			"valid"
		],
		[
			[
				3184,
				3191
			],
			"disallowed"
		],
		[
			[
				3192,
				3199
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3200,
				3200
			],
			"disallowed"
		],
		[
			[
				3201,
				3201
			],
			"valid"
		],
		[
			[
				3202,
				3203
			],
			"valid"
		],
		[
			[
				3204,
				3204
			],
			"disallowed"
		],
		[
			[
				3205,
				3212
			],
			"valid"
		],
		[
			[
				3213,
				3213
			],
			"disallowed"
		],
		[
			[
				3214,
				3216
			],
			"valid"
		],
		[
			[
				3217,
				3217
			],
			"disallowed"
		],
		[
			[
				3218,
				3240
			],
			"valid"
		],
		[
			[
				3241,
				3241
			],
			"disallowed"
		],
		[
			[
				3242,
				3251
			],
			"valid"
		],
		[
			[
				3252,
				3252
			],
			"disallowed"
		],
		[
			[
				3253,
				3257
			],
			"valid"
		],
		[
			[
				3258,
				3259
			],
			"disallowed"
		],
		[
			[
				3260,
				3261
			],
			"valid"
		],
		[
			[
				3262,
				3268
			],
			"valid"
		],
		[
			[
				3269,
				3269
			],
			"disallowed"
		],
		[
			[
				3270,
				3272
			],
			"valid"
		],
		[
			[
				3273,
				3273
			],
			"disallowed"
		],
		[
			[
				3274,
				3277
			],
			"valid"
		],
		[
			[
				3278,
				3284
			],
			"disallowed"
		],
		[
			[
				3285,
				3286
			],
			"valid"
		],
		[
			[
				3287,
				3293
			],
			"disallowed"
		],
		[
			[
				3294,
				3294
			],
			"valid"
		],
		[
			[
				3295,
				3295
			],
			"disallowed"
		],
		[
			[
				3296,
				3297
			],
			"valid"
		],
		[
			[
				3298,
				3299
			],
			"valid"
		],
		[
			[
				3300,
				3301
			],
			"disallowed"
		],
		[
			[
				3302,
				3311
			],
			"valid"
		],
		[
			[
				3312,
				3312
			],
			"disallowed"
		],
		[
			[
				3313,
				3314
			],
			"valid"
		],
		[
			[
				3315,
				3328
			],
			"disallowed"
		],
		[
			[
				3329,
				3329
			],
			"valid"
		],
		[
			[
				3330,
				3331
			],
			"valid"
		],
		[
			[
				3332,
				3332
			],
			"disallowed"
		],
		[
			[
				3333,
				3340
			],
			"valid"
		],
		[
			[
				3341,
				3341
			],
			"disallowed"
		],
		[
			[
				3342,
				3344
			],
			"valid"
		],
		[
			[
				3345,
				3345
			],
			"disallowed"
		],
		[
			[
				3346,
				3368
			],
			"valid"
		],
		[
			[
				3369,
				3369
			],
			"valid"
		],
		[
			[
				3370,
				3385
			],
			"valid"
		],
		[
			[
				3386,
				3386
			],
			"valid"
		],
		[
			[
				3387,
				3388
			],
			"disallowed"
		],
		[
			[
				3389,
				3389
			],
			"valid"
		],
		[
			[
				3390,
				3395
			],
			"valid"
		],
		[
			[
				3396,
				3396
			],
			"valid"
		],
		[
			[
				3397,
				3397
			],
			"disallowed"
		],
		[
			[
				3398,
				3400
			],
			"valid"
		],
		[
			[
				3401,
				3401
			],
			"disallowed"
		],
		[
			[
				3402,
				3405
			],
			"valid"
		],
		[
			[
				3406,
				3406
			],
			"valid"
		],
		[
			[
				3407,
				3414
			],
			"disallowed"
		],
		[
			[
				3415,
				3415
			],
			"valid"
		],
		[
			[
				3416,
				3422
			],
			"disallowed"
		],
		[
			[
				3423,
				3423
			],
			"valid"
		],
		[
			[
				3424,
				3425
			],
			"valid"
		],
		[
			[
				3426,
				3427
			],
			"valid"
		],
		[
			[
				3428,
				3429
			],
			"disallowed"
		],
		[
			[
				3430,
				3439
			],
			"valid"
		],
		[
			[
				3440,
				3445
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3446,
				3448
			],
			"disallowed"
		],
		[
			[
				3449,
				3449
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3450,
				3455
			],
			"valid"
		],
		[
			[
				3456,
				3457
			],
			"disallowed"
		],
		[
			[
				3458,
				3459
			],
			"valid"
		],
		[
			[
				3460,
				3460
			],
			"disallowed"
		],
		[
			[
				3461,
				3478
			],
			"valid"
		],
		[
			[
				3479,
				3481
			],
			"disallowed"
		],
		[
			[
				3482,
				3505
			],
			"valid"
		],
		[
			[
				3506,
				3506
			],
			"disallowed"
		],
		[
			[
				3507,
				3515
			],
			"valid"
		],
		[
			[
				3516,
				3516
			],
			"disallowed"
		],
		[
			[
				3517,
				3517
			],
			"valid"
		],
		[
			[
				3518,
				3519
			],
			"disallowed"
		],
		[
			[
				3520,
				3526
			],
			"valid"
		],
		[
			[
				3527,
				3529
			],
			"disallowed"
		],
		[
			[
				3530,
				3530
			],
			"valid"
		],
		[
			[
				3531,
				3534
			],
			"disallowed"
		],
		[
			[
				3535,
				3540
			],
			"valid"
		],
		[
			[
				3541,
				3541
			],
			"disallowed"
		],
		[
			[
				3542,
				3542
			],
			"valid"
		],
		[
			[
				3543,
				3543
			],
			"disallowed"
		],
		[
			[
				3544,
				3551
			],
			"valid"
		],
		[
			[
				3552,
				3557
			],
			"disallowed"
		],
		[
			[
				3558,
				3567
			],
			"valid"
		],
		[
			[
				3568,
				3569
			],
			"disallowed"
		],
		[
			[
				3570,
				3571
			],
			"valid"
		],
		[
			[
				3572,
				3572
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3573,
				3584
			],
			"disallowed"
		],
		[
			[
				3585,
				3634
			],
			"valid"
		],
		[
			[
				3635,
				3635
			],
			"mapped",
			[
				3661,
				3634
			]
		],
		[
			[
				3636,
				3642
			],
			"valid"
		],
		[
			[
				3643,
				3646
			],
			"disallowed"
		],
		[
			[
				3647,
				3647
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3648,
				3662
			],
			"valid"
		],
		[
			[
				3663,
				3663
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3664,
				3673
			],
			"valid"
		],
		[
			[
				3674,
				3675
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3676,
				3712
			],
			"disallowed"
		],
		[
			[
				3713,
				3714
			],
			"valid"
		],
		[
			[
				3715,
				3715
			],
			"disallowed"
		],
		[
			[
				3716,
				3716
			],
			"valid"
		],
		[
			[
				3717,
				3718
			],
			"disallowed"
		],
		[
			[
				3719,
				3720
			],
			"valid"
		],
		[
			[
				3721,
				3721
			],
			"disallowed"
		],
		[
			[
				3722,
				3722
			],
			"valid"
		],
		[
			[
				3723,
				3724
			],
			"disallowed"
		],
		[
			[
				3725,
				3725
			],
			"valid"
		],
		[
			[
				3726,
				3731
			],
			"disallowed"
		],
		[
			[
				3732,
				3735
			],
			"valid"
		],
		[
			[
				3736,
				3736
			],
			"disallowed"
		],
		[
			[
				3737,
				3743
			],
			"valid"
		],
		[
			[
				3744,
				3744
			],
			"disallowed"
		],
		[
			[
				3745,
				3747
			],
			"valid"
		],
		[
			[
				3748,
				3748
			],
			"disallowed"
		],
		[
			[
				3749,
				3749
			],
			"valid"
		],
		[
			[
				3750,
				3750
			],
			"disallowed"
		],
		[
			[
				3751,
				3751
			],
			"valid"
		],
		[
			[
				3752,
				3753
			],
			"disallowed"
		],
		[
			[
				3754,
				3755
			],
			"valid"
		],
		[
			[
				3756,
				3756
			],
			"disallowed"
		],
		[
			[
				3757,
				3762
			],
			"valid"
		],
		[
			[
				3763,
				3763
			],
			"mapped",
			[
				3789,
				3762
			]
		],
		[
			[
				3764,
				3769
			],
			"valid"
		],
		[
			[
				3770,
				3770
			],
			"disallowed"
		],
		[
			[
				3771,
				3773
			],
			"valid"
		],
		[
			[
				3774,
				3775
			],
			"disallowed"
		],
		[
			[
				3776,
				3780
			],
			"valid"
		],
		[
			[
				3781,
				3781
			],
			"disallowed"
		],
		[
			[
				3782,
				3782
			],
			"valid"
		],
		[
			[
				3783,
				3783
			],
			"disallowed"
		],
		[
			[
				3784,
				3789
			],
			"valid"
		],
		[
			[
				3790,
				3791
			],
			"disallowed"
		],
		[
			[
				3792,
				3801
			],
			"valid"
		],
		[
			[
				3802,
				3803
			],
			"disallowed"
		],
		[
			[
				3804,
				3804
			],
			"mapped",
			[
				3755,
				3737
			]
		],
		[
			[
				3805,
				3805
			],
			"mapped",
			[
				3755,
				3745
			]
		],
		[
			[
				3806,
				3807
			],
			"valid"
		],
		[
			[
				3808,
				3839
			],
			"disallowed"
		],
		[
			[
				3840,
				3840
			],
			"valid"
		],
		[
			[
				3841,
				3850
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3851,
				3851
			],
			"valid"
		],
		[
			[
				3852,
				3852
			],
			"mapped",
			[
				3851
			]
		],
		[
			[
				3853,
				3863
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3864,
				3865
			],
			"valid"
		],
		[
			[
				3866,
				3871
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3872,
				3881
			],
			"valid"
		],
		[
			[
				3882,
				3892
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3893,
				3893
			],
			"valid"
		],
		[
			[
				3894,
				3894
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3895,
				3895
			],
			"valid"
		],
		[
			[
				3896,
				3896
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3897,
				3897
			],
			"valid"
		],
		[
			[
				3898,
				3901
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3902,
				3906
			],
			"valid"
		],
		[
			[
				3907,
				3907
			],
			"mapped",
			[
				3906,
				4023
			]
		],
		[
			[
				3908,
				3911
			],
			"valid"
		],
		[
			[
				3912,
				3912
			],
			"disallowed"
		],
		[
			[
				3913,
				3916
			],
			"valid"
		],
		[
			[
				3917,
				3917
			],
			"mapped",
			[
				3916,
				4023
			]
		],
		[
			[
				3918,
				3921
			],
			"valid"
		],
		[
			[
				3922,
				3922
			],
			"mapped",
			[
				3921,
				4023
			]
		],
		[
			[
				3923,
				3926
			],
			"valid"
		],
		[
			[
				3927,
				3927
			],
			"mapped",
			[
				3926,
				4023
			]
		],
		[
			[
				3928,
				3931
			],
			"valid"
		],
		[
			[
				3932,
				3932
			],
			"mapped",
			[
				3931,
				4023
			]
		],
		[
			[
				3933,
				3944
			],
			"valid"
		],
		[
			[
				3945,
				3945
			],
			"mapped",
			[
				3904,
				4021
			]
		],
		[
			[
				3946,
				3946
			],
			"valid"
		],
		[
			[
				3947,
				3948
			],
			"valid"
		],
		[
			[
				3949,
				3952
			],
			"disallowed"
		],
		[
			[
				3953,
				3954
			],
			"valid"
		],
		[
			[
				3955,
				3955
			],
			"mapped",
			[
				3953,
				3954
			]
		],
		[
			[
				3956,
				3956
			],
			"valid"
		],
		[
			[
				3957,
				3957
			],
			"mapped",
			[
				3953,
				3956
			]
		],
		[
			[
				3958,
				3958
			],
			"mapped",
			[
				4018,
				3968
			]
		],
		[
			[
				3959,
				3959
			],
			"mapped",
			[
				4018,
				3953,
				3968
			]
		],
		[
			[
				3960,
				3960
			],
			"mapped",
			[
				4019,
				3968
			]
		],
		[
			[
				3961,
				3961
			],
			"mapped",
			[
				4019,
				3953,
				3968
			]
		],
		[
			[
				3962,
				3968
			],
			"valid"
		],
		[
			[
				3969,
				3969
			],
			"mapped",
			[
				3953,
				3968
			]
		],
		[
			[
				3970,
				3972
			],
			"valid"
		],
		[
			[
				3973,
				3973
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				3974,
				3979
			],
			"valid"
		],
		[
			[
				3980,
				3983
			],
			"valid"
		],
		[
			[
				3984,
				3986
			],
			"valid"
		],
		[
			[
				3987,
				3987
			],
			"mapped",
			[
				3986,
				4023
			]
		],
		[
			[
				3988,
				3989
			],
			"valid"
		],
		[
			[
				3990,
				3990
			],
			"valid"
		],
		[
			[
				3991,
				3991
			],
			"valid"
		],
		[
			[
				3992,
				3992
			],
			"disallowed"
		],
		[
			[
				3993,
				3996
			],
			"valid"
		],
		[
			[
				3997,
				3997
			],
			"mapped",
			[
				3996,
				4023
			]
		],
		[
			[
				3998,
				4001
			],
			"valid"
		],
		[
			[
				4002,
				4002
			],
			"mapped",
			[
				4001,
				4023
			]
		],
		[
			[
				4003,
				4006
			],
			"valid"
		],
		[
			[
				4007,
				4007
			],
			"mapped",
			[
				4006,
				4023
			]
		],
		[
			[
				4008,
				4011
			],
			"valid"
		],
		[
			[
				4012,
				4012
			],
			"mapped",
			[
				4011,
				4023
			]
		],
		[
			[
				4013,
				4013
			],
			"valid"
		],
		[
			[
				4014,
				4016
			],
			"valid"
		],
		[
			[
				4017,
				4023
			],
			"valid"
		],
		[
			[
				4024,
				4024
			],
			"valid"
		],
		[
			[
				4025,
				4025
			],
			"mapped",
			[
				3984,
				4021
			]
		],
		[
			[
				4026,
				4028
			],
			"valid"
		],
		[
			[
				4029,
				4029
			],
			"disallowed"
		],
		[
			[
				4030,
				4037
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4038,
				4038
			],
			"valid"
		],
		[
			[
				4039,
				4044
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4045,
				4045
			],
			"disallowed"
		],
		[
			[
				4046,
				4046
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4047,
				4047
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4048,
				4049
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4050,
				4052
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4053,
				4056
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4057,
				4058
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4059,
				4095
			],
			"disallowed"
		],
		[
			[
				4096,
				4129
			],
			"valid"
		],
		[
			[
				4130,
				4130
			],
			"valid"
		],
		[
			[
				4131,
				4135
			],
			"valid"
		],
		[
			[
				4136,
				4136
			],
			"valid"
		],
		[
			[
				4137,
				4138
			],
			"valid"
		],
		[
			[
				4139,
				4139
			],
			"valid"
		],
		[
			[
				4140,
				4146
			],
			"valid"
		],
		[
			[
				4147,
				4149
			],
			"valid"
		],
		[
			[
				4150,
				4153
			],
			"valid"
		],
		[
			[
				4154,
				4159
			],
			"valid"
		],
		[
			[
				4160,
				4169
			],
			"valid"
		],
		[
			[
				4170,
				4175
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4176,
				4185
			],
			"valid"
		],
		[
			[
				4186,
				4249
			],
			"valid"
		],
		[
			[
				4250,
				4253
			],
			"valid"
		],
		[
			[
				4254,
				4255
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4256,
				4293
			],
			"disallowed"
		],
		[
			[
				4294,
				4294
			],
			"disallowed"
		],
		[
			[
				4295,
				4295
			],
			"mapped",
			[
				11559
			]
		],
		[
			[
				4296,
				4300
			],
			"disallowed"
		],
		[
			[
				4301,
				4301
			],
			"mapped",
			[
				11565
			]
		],
		[
			[
				4302,
				4303
			],
			"disallowed"
		],
		[
			[
				4304,
				4342
			],
			"valid"
		],
		[
			[
				4343,
				4344
			],
			"valid"
		],
		[
			[
				4345,
				4346
			],
			"valid"
		],
		[
			[
				4347,
				4347
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4348,
				4348
			],
			"mapped",
			[
				4316
			]
		],
		[
			[
				4349,
				4351
			],
			"valid"
		],
		[
			[
				4352,
				4441
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4442,
				4446
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4447,
				4448
			],
			"disallowed"
		],
		[
			[
				4449,
				4514
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4515,
				4519
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4520,
				4601
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4602,
				4607
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4608,
				4614
			],
			"valid"
		],
		[
			[
				4615,
				4615
			],
			"valid"
		],
		[
			[
				4616,
				4678
			],
			"valid"
		],
		[
			[
				4679,
				4679
			],
			"valid"
		],
		[
			[
				4680,
				4680
			],
			"valid"
		],
		[
			[
				4681,
				4681
			],
			"disallowed"
		],
		[
			[
				4682,
				4685
			],
			"valid"
		],
		[
			[
				4686,
				4687
			],
			"disallowed"
		],
		[
			[
				4688,
				4694
			],
			"valid"
		],
		[
			[
				4695,
				4695
			],
			"disallowed"
		],
		[
			[
				4696,
				4696
			],
			"valid"
		],
		[
			[
				4697,
				4697
			],
			"disallowed"
		],
		[
			[
				4698,
				4701
			],
			"valid"
		],
		[
			[
				4702,
				4703
			],
			"disallowed"
		],
		[
			[
				4704,
				4742
			],
			"valid"
		],
		[
			[
				4743,
				4743
			],
			"valid"
		],
		[
			[
				4744,
				4744
			],
			"valid"
		],
		[
			[
				4745,
				4745
			],
			"disallowed"
		],
		[
			[
				4746,
				4749
			],
			"valid"
		],
		[
			[
				4750,
				4751
			],
			"disallowed"
		],
		[
			[
				4752,
				4782
			],
			"valid"
		],
		[
			[
				4783,
				4783
			],
			"valid"
		],
		[
			[
				4784,
				4784
			],
			"valid"
		],
		[
			[
				4785,
				4785
			],
			"disallowed"
		],
		[
			[
				4786,
				4789
			],
			"valid"
		],
		[
			[
				4790,
				4791
			],
			"disallowed"
		],
		[
			[
				4792,
				4798
			],
			"valid"
		],
		[
			[
				4799,
				4799
			],
			"disallowed"
		],
		[
			[
				4800,
				4800
			],
			"valid"
		],
		[
			[
				4801,
				4801
			],
			"disallowed"
		],
		[
			[
				4802,
				4805
			],
			"valid"
		],
		[
			[
				4806,
				4807
			],
			"disallowed"
		],
		[
			[
				4808,
				4814
			],
			"valid"
		],
		[
			[
				4815,
				4815
			],
			"valid"
		],
		[
			[
				4816,
				4822
			],
			"valid"
		],
		[
			[
				4823,
				4823
			],
			"disallowed"
		],
		[
			[
				4824,
				4846
			],
			"valid"
		],
		[
			[
				4847,
				4847
			],
			"valid"
		],
		[
			[
				4848,
				4878
			],
			"valid"
		],
		[
			[
				4879,
				4879
			],
			"valid"
		],
		[
			[
				4880,
				4880
			],
			"valid"
		],
		[
			[
				4881,
				4881
			],
			"disallowed"
		],
		[
			[
				4882,
				4885
			],
			"valid"
		],
		[
			[
				4886,
				4887
			],
			"disallowed"
		],
		[
			[
				4888,
				4894
			],
			"valid"
		],
		[
			[
				4895,
				4895
			],
			"valid"
		],
		[
			[
				4896,
				4934
			],
			"valid"
		],
		[
			[
				4935,
				4935
			],
			"valid"
		],
		[
			[
				4936,
				4954
			],
			"valid"
		],
		[
			[
				4955,
				4956
			],
			"disallowed"
		],
		[
			[
				4957,
				4958
			],
			"valid"
		],
		[
			[
				4959,
				4959
			],
			"valid"
		],
		[
			[
				4960,
				4960
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4961,
				4988
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				4989,
				4991
			],
			"disallowed"
		],
		[
			[
				4992,
				5007
			],
			"valid"
		],
		[
			[
				5008,
				5017
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				5018,
				5023
			],
			"disallowed"
		],
		[
			[
				5024,
				5108
			],
			"valid"
		],
		[
			[
				5109,
				5109
			],
			"valid"
		],
		[
			[
				5110,
				5111
			],
			"disallowed"
		],
		[
			[
				5112,
				5112
			],
			"mapped",
			[
				5104
			]
		],
		[
			[
				5113,
				5113
			],
			"mapped",
			[
				5105
			]
		],
		[
			[
				5114,
				5114
			],
			"mapped",
			[
				5106
			]
		],
		[
			[
				5115,
				5115
			],
			"mapped",
			[
				5107
			]
		],
		[
			[
				5116,
				5116
			],
			"mapped",
			[
				5108
			]
		],
		[
			[
				5117,
				5117
			],
			"mapped",
			[
				5109
			]
		],
		[
			[
				5118,
				5119
			],
			"disallowed"
		],
		[
			[
				5120,
				5120
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				5121,
				5740
			],
			"valid"
		],
		[
			[
				5741,
				5742
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				5743,
				5750
			],
			"valid"
		],
		[
			[
				5751,
				5759
			],
			"valid"
		],
		[
			[
				5760,
				5760
			],
			"disallowed"
		],
		[
			[
				5761,
				5786
			],
			"valid"
		],
		[
			[
				5787,
				5788
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				5789,
				5791
			],
			"disallowed"
		],
		[
			[
				5792,
				5866
			],
			"valid"
		],
		[
			[
				5867,
				5872
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				5873,
				5880
			],
			"valid"
		],
		[
			[
				5881,
				5887
			],
			"disallowed"
		],
		[
			[
				5888,
				5900
			],
			"valid"
		],
		[
			[
				5901,
				5901
			],
			"disallowed"
		],
		[
			[
				5902,
				5908
			],
			"valid"
		],
		[
			[
				5909,
				5919
			],
			"disallowed"
		],
		[
			[
				5920,
				5940
			],
			"valid"
		],
		[
			[
				5941,
				5942
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				5943,
				5951
			],
			"disallowed"
		],
		[
			[
				5952,
				5971
			],
			"valid"
		],
		[
			[
				5972,
				5983
			],
			"disallowed"
		],
		[
			[
				5984,
				5996
			],
			"valid"
		],
		[
			[
				5997,
				5997
			],
			"disallowed"
		],
		[
			[
				5998,
				6000
			],
			"valid"
		],
		[
			[
				6001,
				6001
			],
			"disallowed"
		],
		[
			[
				6002,
				6003
			],
			"valid"
		],
		[
			[
				6004,
				6015
			],
			"disallowed"
		],
		[
			[
				6016,
				6067
			],
			"valid"
		],
		[
			[
				6068,
				6069
			],
			"disallowed"
		],
		[
			[
				6070,
				6099
			],
			"valid"
		],
		[
			[
				6100,
				6102
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6103,
				6103
			],
			"valid"
		],
		[
			[
				6104,
				6107
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6108,
				6108
			],
			"valid"
		],
		[
			[
				6109,
				6109
			],
			"valid"
		],
		[
			[
				6110,
				6111
			],
			"disallowed"
		],
		[
			[
				6112,
				6121
			],
			"valid"
		],
		[
			[
				6122,
				6127
			],
			"disallowed"
		],
		[
			[
				6128,
				6137
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6138,
				6143
			],
			"disallowed"
		],
		[
			[
				6144,
				6149
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6150,
				6150
			],
			"disallowed"
		],
		[
			[
				6151,
				6154
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6155,
				6157
			],
			"ignored"
		],
		[
			[
				6158,
				6158
			],
			"disallowed"
		],
		[
			[
				6159,
				6159
			],
			"disallowed"
		],
		[
			[
				6160,
				6169
			],
			"valid"
		],
		[
			[
				6170,
				6175
			],
			"disallowed"
		],
		[
			[
				6176,
				6263
			],
			"valid"
		],
		[
			[
				6264,
				6271
			],
			"disallowed"
		],
		[
			[
				6272,
				6313
			],
			"valid"
		],
		[
			[
				6314,
				6314
			],
			"valid"
		],
		[
			[
				6315,
				6319
			],
			"disallowed"
		],
		[
			[
				6320,
				6389
			],
			"valid"
		],
		[
			[
				6390,
				6399
			],
			"disallowed"
		],
		[
			[
				6400,
				6428
			],
			"valid"
		],
		[
			[
				6429,
				6430
			],
			"valid"
		],
		[
			[
				6431,
				6431
			],
			"disallowed"
		],
		[
			[
				6432,
				6443
			],
			"valid"
		],
		[
			[
				6444,
				6447
			],
			"disallowed"
		],
		[
			[
				6448,
				6459
			],
			"valid"
		],
		[
			[
				6460,
				6463
			],
			"disallowed"
		],
		[
			[
				6464,
				6464
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6465,
				6467
			],
			"disallowed"
		],
		[
			[
				6468,
				6469
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6470,
				6509
			],
			"valid"
		],
		[
			[
				6510,
				6511
			],
			"disallowed"
		],
		[
			[
				6512,
				6516
			],
			"valid"
		],
		[
			[
				6517,
				6527
			],
			"disallowed"
		],
		[
			[
				6528,
				6569
			],
			"valid"
		],
		[
			[
				6570,
				6571
			],
			"valid"
		],
		[
			[
				6572,
				6575
			],
			"disallowed"
		],
		[
			[
				6576,
				6601
			],
			"valid"
		],
		[
			[
				6602,
				6607
			],
			"disallowed"
		],
		[
			[
				6608,
				6617
			],
			"valid"
		],
		[
			[
				6618,
				6618
			],
			"valid",
			[],
			"XV8"
		],
		[
			[
				6619,
				6621
			],
			"disallowed"
		],
		[
			[
				6622,
				6623
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6624,
				6655
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6656,
				6683
			],
			"valid"
		],
		[
			[
				6684,
				6685
			],
			"disallowed"
		],
		[
			[
				6686,
				6687
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6688,
				6750
			],
			"valid"
		],
		[
			[
				6751,
				6751
			],
			"disallowed"
		],
		[
			[
				6752,
				6780
			],
			"valid"
		],
		[
			[
				6781,
				6782
			],
			"disallowed"
		],
		[
			[
				6783,
				6793
			],
			"valid"
		],
		[
			[
				6794,
				6799
			],
			"disallowed"
		],
		[
			[
				6800,
				6809
			],
			"valid"
		],
		[
			[
				6810,
				6815
			],
			"disallowed"
		],
		[
			[
				6816,
				6822
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6823,
				6823
			],
			"valid"
		],
		[
			[
				6824,
				6829
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6830,
				6831
			],
			"disallowed"
		],
		[
			[
				6832,
				6845
			],
			"valid"
		],
		[
			[
				6846,
				6846
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				6847,
				6911
			],
			"disallowed"
		],
		[
			[
				6912,
				6987
			],
			"valid"
		],
		[
			[
				6988,
				6991
			],
			"disallowed"
		],
		[
			[
				6992,
				7001
			],
			"valid"
		],
		[
			[
				7002,
				7018
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				7019,
				7027
			],
			"valid"
		],
		[
			[
				7028,
				7036
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				7037,
				7039
			],
			"disallowed"
		],
		[
			[
				7040,
				7082
			],
			"valid"
		],
		[
			[
				7083,
				7085
			],
			"valid"
		],
		[
			[
				7086,
				7097
			],
			"valid"
		],
		[
			[
				7098,
				7103
			],
			"valid"
		],
		[
			[
				7104,
				7155
			],
			"valid"
		],
		[
			[
				7156,
				7163
			],
			"disallowed"
		],
		[
			[
				7164,
				7167
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				7168,
				7223
			],
			"valid"
		],
		[
			[
				7224,
				7226
			],
			"disallowed"
		],
		[
			[
				7227,
				7231
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				7232,
				7241
			],
			"valid"
		],
		[
			[
				7242,
				7244
			],
			"disallowed"
		],
		[
			[
				7245,
				7293
			],
			"valid"
		],
		[
			[
				7294,
				7295
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				7296,
				7359
			],
			"disallowed"
		],
		[
			[
				7360,
				7367
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				7368,
				7375
			],
			"disallowed"
		],
		[
			[
				7376,
				7378
			],
			"valid"
		],
		[
			[
				7379,
				7379
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				7380,
				7410
			],
			"valid"
		],
		[
			[
				7411,
				7414
			],
			"valid"
		],
		[
			[
				7415,
				7415
			],
			"disallowed"
		],
		[
			[
				7416,
				7417
			],
			"valid"
		],
		[
			[
				7418,
				7423
			],
			"disallowed"
		],
		[
			[
				7424,
				7467
			],
			"valid"
		],
		[
			[
				7468,
				7468
			],
			"mapped",
			[
				97
			]
		],
		[
			[
				7469,
				7469
			],
			"mapped",
			[
				230
			]
		],
		[
			[
				7470,
				7470
			],
			"mapped",
			[
				98
			]
		],
		[
			[
				7471,
				7471
			],
			"valid"
		],
		[
			[
				7472,
				7472
			],
			"mapped",
			[
				100
			]
		],
		[
			[
				7473,
				7473
			],
			"mapped",
			[
				101
			]
		],
		[
			[
				7474,
				7474
			],
			"mapped",
			[
				477
			]
		],
		[
			[
				7475,
				7475
			],
			"mapped",
			[
				103
			]
		],
		[
			[
				7476,
				7476
			],
			"mapped",
			[
				104
			]
		],
		[
			[
				7477,
				7477
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				7478,
				7478
			],
			"mapped",
			[
				106
			]
		],
		[
			[
				7479,
				7479
			],
			"mapped",
			[
				107
			]
		],
		[
			[
				7480,
				7480
			],
			"mapped",
			[
				108
			]
		],
		[
			[
				7481,
				7481
			],
			"mapped",
			[
				109
			]
		],
		[
			[
				7482,
				7482
			],
			"mapped",
			[
				110
			]
		],
		[
			[
				7483,
				7483
			],
			"valid"
		],
		[
			[
				7484,
				7484
			],
			"mapped",
			[
				111
			]
		],
		[
			[
				7485,
				7485
			],
			"mapped",
			[
				547
			]
		],
		[
			[
				7486,
				7486
			],
			"mapped",
			[
				112
			]
		],
		[
			[
				7487,
				7487
			],
			"mapped",
			[
				114
			]
		],
		[
			[
				7488,
				7488
			],
			"mapped",
			[
				116
			]
		],
		[
			[
				7489,
				7489
			],
			"mapped",
			[
				117
			]
		],
		[
			[
				7490,
				7490
			],
			"mapped",
			[
				119
			]
		],
		[
			[
				7491,
				7491
			],
			"mapped",
			[
				97
			]
		],
		[
			[
				7492,
				7492
			],
			"mapped",
			[
				592
			]
		],
		[
			[
				7493,
				7493
			],
			"mapped",
			[
				593
			]
		],
		[
			[
				7494,
				7494
			],
			"mapped",
			[
				7426
			]
		],
		[
			[
				7495,
				7495
			],
			"mapped",
			[
				98
			]
		],
		[
			[
				7496,
				7496
			],
			"mapped",
			[
				100
			]
		],
		[
			[
				7497,
				7497
			],
			"mapped",
			[
				101
			]
		],
		[
			[
				7498,
				7498
			],
			"mapped",
			[
				601
			]
		],
		[
			[
				7499,
				7499
			],
			"mapped",
			[
				603
			]
		],
		[
			[
				7500,
				7500
			],
			"mapped",
			[
				604
			]
		],
		[
			[
				7501,
				7501
			],
			"mapped",
			[
				103
			]
		],
		[
			[
				7502,
				7502
			],
			"valid"
		],
		[
			[
				7503,
				7503
			],
			"mapped",
			[
				107
			]
		],
		[
			[
				7504,
				7504
			],
			"mapped",
			[
				109
			]
		],
		[
			[
				7505,
				7505
			],
			"mapped",
			[
				331
			]
		],
		[
			[
				7506,
				7506
			],
			"mapped",
			[
				111
			]
		],
		[
			[
				7507,
				7507
			],
			"mapped",
			[
				596
			]
		],
		[
			[
				7508,
				7508
			],
			"mapped",
			[
				7446
			]
		],
		[
			[
				7509,
				7509
			],
			"mapped",
			[
				7447
			]
		],
		[
			[
				7510,
				7510
			],
			"mapped",
			[
				112
			]
		],
		[
			[
				7511,
				7511
			],
			"mapped",
			[
				116
			]
		],
		[
			[
				7512,
				7512
			],
			"mapped",
			[
				117
			]
		],
		[
			[
				7513,
				7513
			],
			"mapped",
			[
				7453
			]
		],
		[
			[
				7514,
				7514
			],
			"mapped",
			[
				623
			]
		],
		[
			[
				7515,
				7515
			],
			"mapped",
			[
				118
			]
		],
		[
			[
				7516,
				7516
			],
			"mapped",
			[
				7461
			]
		],
		[
			[
				7517,
				7517
			],
			"mapped",
			[
				946
			]
		],
		[
			[
				7518,
				7518
			],
			"mapped",
			[
				947
			]
		],
		[
			[
				7519,
				7519
			],
			"mapped",
			[
				948
			]
		],
		[
			[
				7520,
				7520
			],
			"mapped",
			[
				966
			]
		],
		[
			[
				7521,
				7521
			],
			"mapped",
			[
				967
			]
		],
		[
			[
				7522,
				7522
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				7523,
				7523
			],
			"mapped",
			[
				114
			]
		],
		[
			[
				7524,
				7524
			],
			"mapped",
			[
				117
			]
		],
		[
			[
				7525,
				7525
			],
			"mapped",
			[
				118
			]
		],
		[
			[
				7526,
				7526
			],
			"mapped",
			[
				946
			]
		],
		[
			[
				7527,
				7527
			],
			"mapped",
			[
				947
			]
		],
		[
			[
				7528,
				7528
			],
			"mapped",
			[
				961
			]
		],
		[
			[
				7529,
				7529
			],
			"mapped",
			[
				966
			]
		],
		[
			[
				7530,
				7530
			],
			"mapped",
			[
				967
			]
		],
		[
			[
				7531,
				7531
			],
			"valid"
		],
		[
			[
				7532,
				7543
			],
			"valid"
		],
		[
			[
				7544,
				7544
			],
			"mapped",
			[
				1085
			]
		],
		[
			[
				7545,
				7578
			],
			"valid"
		],
		[
			[
				7579,
				7579
			],
			"mapped",
			[
				594
			]
		],
		[
			[
				7580,
				7580
			],
			"mapped",
			[
				99
			]
		],
		[
			[
				7581,
				7581
			],
			"mapped",
			[
				597
			]
		],
		[
			[
				7582,
				7582
			],
			"mapped",
			[
				240
			]
		],
		[
			[
				7583,
				7583
			],
			"mapped",
			[
				604
			]
		],
		[
			[
				7584,
				7584
			],
			"mapped",
			[
				102
			]
		],
		[
			[
				7585,
				7585
			],
			"mapped",
			[
				607
			]
		],
		[
			[
				7586,
				7586
			],
			"mapped",
			[
				609
			]
		],
		[
			[
				7587,
				7587
			],
			"mapped",
			[
				613
			]
		],
		[
			[
				7588,
				7588
			],
			"mapped",
			[
				616
			]
		],
		[
			[
				7589,
				7589
			],
			"mapped",
			[
				617
			]
		],
		[
			[
				7590,
				7590
			],
			"mapped",
			[
				618
			]
		],
		[
			[
				7591,
				7591
			],
			"mapped",
			[
				7547
			]
		],
		[
			[
				7592,
				7592
			],
			"mapped",
			[
				669
			]
		],
		[
			[
				7593,
				7593
			],
			"mapped",
			[
				621
			]
		],
		[
			[
				7594,
				7594
			],
			"mapped",
			[
				7557
			]
		],
		[
			[
				7595,
				7595
			],
			"mapped",
			[
				671
			]
		],
		[
			[
				7596,
				7596
			],
			"mapped",
			[
				625
			]
		],
		[
			[
				7597,
				7597
			],
			"mapped",
			[
				624
			]
		],
		[
			[
				7598,
				7598
			],
			"mapped",
			[
				626
			]
		],
		[
			[
				7599,
				7599
			],
			"mapped",
			[
				627
			]
		],
		[
			[
				7600,
				7600
			],
			"mapped",
			[
				628
			]
		],
		[
			[
				7601,
				7601
			],
			"mapped",
			[
				629
			]
		],
		[
			[
				7602,
				7602
			],
			"mapped",
			[
				632
			]
		],
		[
			[
				7603,
				7603
			],
			"mapped",
			[
				642
			]
		],
		[
			[
				7604,
				7604
			],
			"mapped",
			[
				643
			]
		],
		[
			[
				7605,
				7605
			],
			"mapped",
			[
				427
			]
		],
		[
			[
				7606,
				7606
			],
			"mapped",
			[
				649
			]
		],
		[
			[
				7607,
				7607
			],
			"mapped",
			[
				650
			]
		],
		[
			[
				7608,
				7608
			],
			"mapped",
			[
				7452
			]
		],
		[
			[
				7609,
				7609
			],
			"mapped",
			[
				651
			]
		],
		[
			[
				7610,
				7610
			],
			"mapped",
			[
				652
			]
		],
		[
			[
				7611,
				7611
			],
			"mapped",
			[
				122
			]
		],
		[
			[
				7612,
				7612
			],
			"mapped",
			[
				656
			]
		],
		[
			[
				7613,
				7613
			],
			"mapped",
			[
				657
			]
		],
		[
			[
				7614,
				7614
			],
			"mapped",
			[
				658
			]
		],
		[
			[
				7615,
				7615
			],
			"mapped",
			[
				952
			]
		],
		[
			[
				7616,
				7619
			],
			"valid"
		],
		[
			[
				7620,
				7626
			],
			"valid"
		],
		[
			[
				7627,
				7654
			],
			"valid"
		],
		[
			[
				7655,
				7669
			],
			"valid"
		],
		[
			[
				7670,
				7675
			],
			"disallowed"
		],
		[
			[
				7676,
				7676
			],
			"valid"
		],
		[
			[
				7677,
				7677
			],
			"valid"
		],
		[
			[
				7678,
				7679
			],
			"valid"
		],
		[
			[
				7680,
				7680
			],
			"mapped",
			[
				7681
			]
		],
		[
			[
				7681,
				7681
			],
			"valid"
		],
		[
			[
				7682,
				7682
			],
			"mapped",
			[
				7683
			]
		],
		[
			[
				7683,
				7683
			],
			"valid"
		],
		[
			[
				7684,
				7684
			],
			"mapped",
			[
				7685
			]
		],
		[
			[
				7685,
				7685
			],
			"valid"
		],
		[
			[
				7686,
				7686
			],
			"mapped",
			[
				7687
			]
		],
		[
			[
				7687,
				7687
			],
			"valid"
		],
		[
			[
				7688,
				7688
			],
			"mapped",
			[
				7689
			]
		],
		[
			[
				7689,
				7689
			],
			"valid"
		],
		[
			[
				7690,
				7690
			],
			"mapped",
			[
				7691
			]
		],
		[
			[
				7691,
				7691
			],
			"valid"
		],
		[
			[
				7692,
				7692
			],
			"mapped",
			[
				7693
			]
		],
		[
			[
				7693,
				7693
			],
			"valid"
		],
		[
			[
				7694,
				7694
			],
			"mapped",
			[
				7695
			]
		],
		[
			[
				7695,
				7695
			],
			"valid"
		],
		[
			[
				7696,
				7696
			],
			"mapped",
			[
				7697
			]
		],
		[
			[
				7697,
				7697
			],
			"valid"
		],
		[
			[
				7698,
				7698
			],
			"mapped",
			[
				7699
			]
		],
		[
			[
				7699,
				7699
			],
			"valid"
		],
		[
			[
				7700,
				7700
			],
			"mapped",
			[
				7701
			]
		],
		[
			[
				7701,
				7701
			],
			"valid"
		],
		[
			[
				7702,
				7702
			],
			"mapped",
			[
				7703
			]
		],
		[
			[
				7703,
				7703
			],
			"valid"
		],
		[
			[
				7704,
				7704
			],
			"mapped",
			[
				7705
			]
		],
		[
			[
				7705,
				7705
			],
			"valid"
		],
		[
			[
				7706,
				7706
			],
			"mapped",
			[
				7707
			]
		],
		[
			[
				7707,
				7707
			],
			"valid"
		],
		[
			[
				7708,
				7708
			],
			"mapped",
			[
				7709
			]
		],
		[
			[
				7709,
				7709
			],
			"valid"
		],
		[
			[
				7710,
				7710
			],
			"mapped",
			[
				7711
			]
		],
		[
			[
				7711,
				7711
			],
			"valid"
		],
		[
			[
				7712,
				7712
			],
			"mapped",
			[
				7713
			]
		],
		[
			[
				7713,
				7713
			],
			"valid"
		],
		[
			[
				7714,
				7714
			],
			"mapped",
			[
				7715
			]
		],
		[
			[
				7715,
				7715
			],
			"valid"
		],
		[
			[
				7716,
				7716
			],
			"mapped",
			[
				7717
			]
		],
		[
			[
				7717,
				7717
			],
			"valid"
		],
		[
			[
				7718,
				7718
			],
			"mapped",
			[
				7719
			]
		],
		[
			[
				7719,
				7719
			],
			"valid"
		],
		[
			[
				7720,
				7720
			],
			"mapped",
			[
				7721
			]
		],
		[
			[
				7721,
				7721
			],
			"valid"
		],
		[
			[
				7722,
				7722
			],
			"mapped",
			[
				7723
			]
		],
		[
			[
				7723,
				7723
			],
			"valid"
		],
		[
			[
				7724,
				7724
			],
			"mapped",
			[
				7725
			]
		],
		[
			[
				7725,
				7725
			],
			"valid"
		],
		[
			[
				7726,
				7726
			],
			"mapped",
			[
				7727
			]
		],
		[
			[
				7727,
				7727
			],
			"valid"
		],
		[
			[
				7728,
				7728
			],
			"mapped",
			[
				7729
			]
		],
		[
			[
				7729,
				7729
			],
			"valid"
		],
		[
			[
				7730,
				7730
			],
			"mapped",
			[
				7731
			]
		],
		[
			[
				7731,
				7731
			],
			"valid"
		],
		[
			[
				7732,
				7732
			],
			"mapped",
			[
				7733
			]
		],
		[
			[
				7733,
				7733
			],
			"valid"
		],
		[
			[
				7734,
				7734
			],
			"mapped",
			[
				7735
			]
		],
		[
			[
				7735,
				7735
			],
			"valid"
		],
		[
			[
				7736,
				7736
			],
			"mapped",
			[
				7737
			]
		],
		[
			[
				7737,
				7737
			],
			"valid"
		],
		[
			[
				7738,
				7738
			],
			"mapped",
			[
				7739
			]
		],
		[
			[
				7739,
				7739
			],
			"valid"
		],
		[
			[
				7740,
				7740
			],
			"mapped",
			[
				7741
			]
		],
		[
			[
				7741,
				7741
			],
			"valid"
		],
		[
			[
				7742,
				7742
			],
			"mapped",
			[
				7743
			]
		],
		[
			[
				7743,
				7743
			],
			"valid"
		],
		[
			[
				7744,
				7744
			],
			"mapped",
			[
				7745
			]
		],
		[
			[
				7745,
				7745
			],
			"valid"
		],
		[
			[
				7746,
				7746
			],
			"mapped",
			[
				7747
			]
		],
		[
			[
				7747,
				7747
			],
			"valid"
		],
		[
			[
				7748,
				7748
			],
			"mapped",
			[
				7749
			]
		],
		[
			[
				7749,
				7749
			],
			"valid"
		],
		[
			[
				7750,
				7750
			],
			"mapped",
			[
				7751
			]
		],
		[
			[
				7751,
				7751
			],
			"valid"
		],
		[
			[
				7752,
				7752
			],
			"mapped",
			[
				7753
			]
		],
		[
			[
				7753,
				7753
			],
			"valid"
		],
		[
			[
				7754,
				7754
			],
			"mapped",
			[
				7755
			]
		],
		[
			[
				7755,
				7755
			],
			"valid"
		],
		[
			[
				7756,
				7756
			],
			"mapped",
			[
				7757
			]
		],
		[
			[
				7757,
				7757
			],
			"valid"
		],
		[
			[
				7758,
				7758
			],
			"mapped",
			[
				7759
			]
		],
		[
			[
				7759,
				7759
			],
			"valid"
		],
		[
			[
				7760,
				7760
			],
			"mapped",
			[
				7761
			]
		],
		[
			[
				7761,
				7761
			],
			"valid"
		],
		[
			[
				7762,
				7762
			],
			"mapped",
			[
				7763
			]
		],
		[
			[
				7763,
				7763
			],
			"valid"
		],
		[
			[
				7764,
				7764
			],
			"mapped",
			[
				7765
			]
		],
		[
			[
				7765,
				7765
			],
			"valid"
		],
		[
			[
				7766,
				7766
			],
			"mapped",
			[
				7767
			]
		],
		[
			[
				7767,
				7767
			],
			"valid"
		],
		[
			[
				7768,
				7768
			],
			"mapped",
			[
				7769
			]
		],
		[
			[
				7769,
				7769
			],
			"valid"
		],
		[
			[
				7770,
				7770
			],
			"mapped",
			[
				7771
			]
		],
		[
			[
				7771,
				7771
			],
			"valid"
		],
		[
			[
				7772,
				7772
			],
			"mapped",
			[
				7773
			]
		],
		[
			[
				7773,
				7773
			],
			"valid"
		],
		[
			[
				7774,
				7774
			],
			"mapped",
			[
				7775
			]
		],
		[
			[
				7775,
				7775
			],
			"valid"
		],
		[
			[
				7776,
				7776
			],
			"mapped",
			[
				7777
			]
		],
		[
			[
				7777,
				7777
			],
			"valid"
		],
		[
			[
				7778,
				7778
			],
			"mapped",
			[
				7779
			]
		],
		[
			[
				7779,
				7779
			],
			"valid"
		],
		[
			[
				7780,
				7780
			],
			"mapped",
			[
				7781
			]
		],
		[
			[
				7781,
				7781
			],
			"valid"
		],
		[
			[
				7782,
				7782
			],
			"mapped",
			[
				7783
			]
		],
		[
			[
				7783,
				7783
			],
			"valid"
		],
		[
			[
				7784,
				7784
			],
			"mapped",
			[
				7785
			]
		],
		[
			[
				7785,
				7785
			],
			"valid"
		],
		[
			[
				7786,
				7786
			],
			"mapped",
			[
				7787
			]
		],
		[
			[
				7787,
				7787
			],
			"valid"
		],
		[
			[
				7788,
				7788
			],
			"mapped",
			[
				7789
			]
		],
		[
			[
				7789,
				7789
			],
			"valid"
		],
		[
			[
				7790,
				7790
			],
			"mapped",
			[
				7791
			]
		],
		[
			[
				7791,
				7791
			],
			"valid"
		],
		[
			[
				7792,
				7792
			],
			"mapped",
			[
				7793
			]
		],
		[
			[
				7793,
				7793
			],
			"valid"
		],
		[
			[
				7794,
				7794
			],
			"mapped",
			[
				7795
			]
		],
		[
			[
				7795,
				7795
			],
			"valid"
		],
		[
			[
				7796,
				7796
			],
			"mapped",
			[
				7797
			]
		],
		[
			[
				7797,
				7797
			],
			"valid"
		],
		[
			[
				7798,
				7798
			],
			"mapped",
			[
				7799
			]
		],
		[
			[
				7799,
				7799
			],
			"valid"
		],
		[
			[
				7800,
				7800
			],
			"mapped",
			[
				7801
			]
		],
		[
			[
				7801,
				7801
			],
			"valid"
		],
		[
			[
				7802,
				7802
			],
			"mapped",
			[
				7803
			]
		],
		[
			[
				7803,
				7803
			],
			"valid"
		],
		[
			[
				7804,
				7804
			],
			"mapped",
			[
				7805
			]
		],
		[
			[
				7805,
				7805
			],
			"valid"
		],
		[
			[
				7806,
				7806
			],
			"mapped",
			[
				7807
			]
		],
		[
			[
				7807,
				7807
			],
			"valid"
		],
		[
			[
				7808,
				7808
			],
			"mapped",
			[
				7809
			]
		],
		[
			[
				7809,
				7809
			],
			"valid"
		],
		[
			[
				7810,
				7810
			],
			"mapped",
			[
				7811
			]
		],
		[
			[
				7811,
				7811
			],
			"valid"
		],
		[
			[
				7812,
				7812
			],
			"mapped",
			[
				7813
			]
		],
		[
			[
				7813,
				7813
			],
			"valid"
		],
		[
			[
				7814,
				7814
			],
			"mapped",
			[
				7815
			]
		],
		[
			[
				7815,
				7815
			],
			"valid"
		],
		[
			[
				7816,
				7816
			],
			"mapped",
			[
				7817
			]
		],
		[
			[
				7817,
				7817
			],
			"valid"
		],
		[
			[
				7818,
				7818
			],
			"mapped",
			[
				7819
			]
		],
		[
			[
				7819,
				7819
			],
			"valid"
		],
		[
			[
				7820,
				7820
			],
			"mapped",
			[
				7821
			]
		],
		[
			[
				7821,
				7821
			],
			"valid"
		],
		[
			[
				7822,
				7822
			],
			"mapped",
			[
				7823
			]
		],
		[
			[
				7823,
				7823
			],
			"valid"
		],
		[
			[
				7824,
				7824
			],
			"mapped",
			[
				7825
			]
		],
		[
			[
				7825,
				7825
			],
			"valid"
		],
		[
			[
				7826,
				7826
			],
			"mapped",
			[
				7827
			]
		],
		[
			[
				7827,
				7827
			],
			"valid"
		],
		[
			[
				7828,
				7828
			],
			"mapped",
			[
				7829
			]
		],
		[
			[
				7829,
				7833
			],
			"valid"
		],
		[
			[
				7834,
				7834
			],
			"mapped",
			[
				97,
				702
			]
		],
		[
			[
				7835,
				7835
			],
			"mapped",
			[
				7777
			]
		],
		[
			[
				7836,
				7837
			],
			"valid"
		],
		[
			[
				7838,
				7838
			],
			"mapped",
			[
				115,
				115
			]
		],
		[
			[
				7839,
				7839
			],
			"valid"
		],
		[
			[
				7840,
				7840
			],
			"mapped",
			[
				7841
			]
		],
		[
			[
				7841,
				7841
			],
			"valid"
		],
		[
			[
				7842,
				7842
			],
			"mapped",
			[
				7843
			]
		],
		[
			[
				7843,
				7843
			],
			"valid"
		],
		[
			[
				7844,
				7844
			],
			"mapped",
			[
				7845
			]
		],
		[
			[
				7845,
				7845
			],
			"valid"
		],
		[
			[
				7846,
				7846
			],
			"mapped",
			[
				7847
			]
		],
		[
			[
				7847,
				7847
			],
			"valid"
		],
		[
			[
				7848,
				7848
			],
			"mapped",
			[
				7849
			]
		],
		[
			[
				7849,
				7849
			],
			"valid"
		],
		[
			[
				7850,
				7850
			],
			"mapped",
			[
				7851
			]
		],
		[
			[
				7851,
				7851
			],
			"valid"
		],
		[
			[
				7852,
				7852
			],
			"mapped",
			[
				7853
			]
		],
		[
			[
				7853,
				7853
			],
			"valid"
		],
		[
			[
				7854,
				7854
			],
			"mapped",
			[
				7855
			]
		],
		[
			[
				7855,
				7855
			],
			"valid"
		],
		[
			[
				7856,
				7856
			],
			"mapped",
			[
				7857
			]
		],
		[
			[
				7857,
				7857
			],
			"valid"
		],
		[
			[
				7858,
				7858
			],
			"mapped",
			[
				7859
			]
		],
		[
			[
				7859,
				7859
			],
			"valid"
		],
		[
			[
				7860,
				7860
			],
			"mapped",
			[
				7861
			]
		],
		[
			[
				7861,
				7861
			],
			"valid"
		],
		[
			[
				7862,
				7862
			],
			"mapped",
			[
				7863
			]
		],
		[
			[
				7863,
				7863
			],
			"valid"
		],
		[
			[
				7864,
				7864
			],
			"mapped",
			[
				7865
			]
		],
		[
			[
				7865,
				7865
			],
			"valid"
		],
		[
			[
				7866,
				7866
			],
			"mapped",
			[
				7867
			]
		],
		[
			[
				7867,
				7867
			],
			"valid"
		],
		[
			[
				7868,
				7868
			],
			"mapped",
			[
				7869
			]
		],
		[
			[
				7869,
				7869
			],
			"valid"
		],
		[
			[
				7870,
				7870
			],
			"mapped",
			[
				7871
			]
		],
		[
			[
				7871,
				7871
			],
			"valid"
		],
		[
			[
				7872,
				7872
			],
			"mapped",
			[
				7873
			]
		],
		[
			[
				7873,
				7873
			],
			"valid"
		],
		[
			[
				7874,
				7874
			],
			"mapped",
			[
				7875
			]
		],
		[
			[
				7875,
				7875
			],
			"valid"
		],
		[
			[
				7876,
				7876
			],
			"mapped",
			[
				7877
			]
		],
		[
			[
				7877,
				7877
			],
			"valid"
		],
		[
			[
				7878,
				7878
			],
			"mapped",
			[
				7879
			]
		],
		[
			[
				7879,
				7879
			],
			"valid"
		],
		[
			[
				7880,
				7880
			],
			"mapped",
			[
				7881
			]
		],
		[
			[
				7881,
				7881
			],
			"valid"
		],
		[
			[
				7882,
				7882
			],
			"mapped",
			[
				7883
			]
		],
		[
			[
				7883,
				7883
			],
			"valid"
		],
		[
			[
				7884,
				7884
			],
			"mapped",
			[
				7885
			]
		],
		[
			[
				7885,
				7885
			],
			"valid"
		],
		[
			[
				7886,
				7886
			],
			"mapped",
			[
				7887
			]
		],
		[
			[
				7887,
				7887
			],
			"valid"
		],
		[
			[
				7888,
				7888
			],
			"mapped",
			[
				7889
			]
		],
		[
			[
				7889,
				7889
			],
			"valid"
		],
		[
			[
				7890,
				7890
			],
			"mapped",
			[
				7891
			]
		],
		[
			[
				7891,
				7891
			],
			"valid"
		],
		[
			[
				7892,
				7892
			],
			"mapped",
			[
				7893
			]
		],
		[
			[
				7893,
				7893
			],
			"valid"
		],
		[
			[
				7894,
				7894
			],
			"mapped",
			[
				7895
			]
		],
		[
			[
				7895,
				7895
			],
			"valid"
		],
		[
			[
				7896,
				7896
			],
			"mapped",
			[
				7897
			]
		],
		[
			[
				7897,
				7897
			],
			"valid"
		],
		[
			[
				7898,
				7898
			],
			"mapped",
			[
				7899
			]
		],
		[
			[
				7899,
				7899
			],
			"valid"
		],
		[
			[
				7900,
				7900
			],
			"mapped",
			[
				7901
			]
		],
		[
			[
				7901,
				7901
			],
			"valid"
		],
		[
			[
				7902,
				7902
			],
			"mapped",
			[
				7903
			]
		],
		[
			[
				7903,
				7903
			],
			"valid"
		],
		[
			[
				7904,
				7904
			],
			"mapped",
			[
				7905
			]
		],
		[
			[
				7905,
				7905
			],
			"valid"
		],
		[
			[
				7906,
				7906
			],
			"mapped",
			[
				7907
			]
		],
		[
			[
				7907,
				7907
			],
			"valid"
		],
		[
			[
				7908,
				7908
			],
			"mapped",
			[
				7909
			]
		],
		[
			[
				7909,
				7909
			],
			"valid"
		],
		[
			[
				7910,
				7910
			],
			"mapped",
			[
				7911
			]
		],
		[
			[
				7911,
				7911
			],
			"valid"
		],
		[
			[
				7912,
				7912
			],
			"mapped",
			[
				7913
			]
		],
		[
			[
				7913,
				7913
			],
			"valid"
		],
		[
			[
				7914,
				7914
			],
			"mapped",
			[
				7915
			]
		],
		[
			[
				7915,
				7915
			],
			"valid"
		],
		[
			[
				7916,
				7916
			],
			"mapped",
			[
				7917
			]
		],
		[
			[
				7917,
				7917
			],
			"valid"
		],
		[
			[
				7918,
				7918
			],
			"mapped",
			[
				7919
			]
		],
		[
			[
				7919,
				7919
			],
			"valid"
		],
		[
			[
				7920,
				7920
			],
			"mapped",
			[
				7921
			]
		],
		[
			[
				7921,
				7921
			],
			"valid"
		],
		[
			[
				7922,
				7922
			],
			"mapped",
			[
				7923
			]
		],
		[
			[
				7923,
				7923
			],
			"valid"
		],
		[
			[
				7924,
				7924
			],
			"mapped",
			[
				7925
			]
		],
		[
			[
				7925,
				7925
			],
			"valid"
		],
		[
			[
				7926,
				7926
			],
			"mapped",
			[
				7927
			]
		],
		[
			[
				7927,
				7927
			],
			"valid"
		],
		[
			[
				7928,
				7928
			],
			"mapped",
			[
				7929
			]
		],
		[
			[
				7929,
				7929
			],
			"valid"
		],
		[
			[
				7930,
				7930
			],
			"mapped",
			[
				7931
			]
		],
		[
			[
				7931,
				7931
			],
			"valid"
		],
		[
			[
				7932,
				7932
			],
			"mapped",
			[
				7933
			]
		],
		[
			[
				7933,
				7933
			],
			"valid"
		],
		[
			[
				7934,
				7934
			],
			"mapped",
			[
				7935
			]
		],
		[
			[
				7935,
				7935
			],
			"valid"
		],
		[
			[
				7936,
				7943
			],
			"valid"
		],
		[
			[
				7944,
				7944
			],
			"mapped",
			[
				7936
			]
		],
		[
			[
				7945,
				7945
			],
			"mapped",
			[
				7937
			]
		],
		[
			[
				7946,
				7946
			],
			"mapped",
			[
				7938
			]
		],
		[
			[
				7947,
				7947
			],
			"mapped",
			[
				7939
			]
		],
		[
			[
				7948,
				7948
			],
			"mapped",
			[
				7940
			]
		],
		[
			[
				7949,
				7949
			],
			"mapped",
			[
				7941
			]
		],
		[
			[
				7950,
				7950
			],
			"mapped",
			[
				7942
			]
		],
		[
			[
				7951,
				7951
			],
			"mapped",
			[
				7943
			]
		],
		[
			[
				7952,
				7957
			],
			"valid"
		],
		[
			[
				7958,
				7959
			],
			"disallowed"
		],
		[
			[
				7960,
				7960
			],
			"mapped",
			[
				7952
			]
		],
		[
			[
				7961,
				7961
			],
			"mapped",
			[
				7953
			]
		],
		[
			[
				7962,
				7962
			],
			"mapped",
			[
				7954
			]
		],
		[
			[
				7963,
				7963
			],
			"mapped",
			[
				7955
			]
		],
		[
			[
				7964,
				7964
			],
			"mapped",
			[
				7956
			]
		],
		[
			[
				7965,
				7965
			],
			"mapped",
			[
				7957
			]
		],
		[
			[
				7966,
				7967
			],
			"disallowed"
		],
		[
			[
				7968,
				7975
			],
			"valid"
		],
		[
			[
				7976,
				7976
			],
			"mapped",
			[
				7968
			]
		],
		[
			[
				7977,
				7977
			],
			"mapped",
			[
				7969
			]
		],
		[
			[
				7978,
				7978
			],
			"mapped",
			[
				7970
			]
		],
		[
			[
				7979,
				7979
			],
			"mapped",
			[
				7971
			]
		],
		[
			[
				7980,
				7980
			],
			"mapped",
			[
				7972
			]
		],
		[
			[
				7981,
				7981
			],
			"mapped",
			[
				7973
			]
		],
		[
			[
				7982,
				7982
			],
			"mapped",
			[
				7974
			]
		],
		[
			[
				7983,
				7983
			],
			"mapped",
			[
				7975
			]
		],
		[
			[
				7984,
				7991
			],
			"valid"
		],
		[
			[
				7992,
				7992
			],
			"mapped",
			[
				7984
			]
		],
		[
			[
				7993,
				7993
			],
			"mapped",
			[
				7985
			]
		],
		[
			[
				7994,
				7994
			],
			"mapped",
			[
				7986
			]
		],
		[
			[
				7995,
				7995
			],
			"mapped",
			[
				7987
			]
		],
		[
			[
				7996,
				7996
			],
			"mapped",
			[
				7988
			]
		],
		[
			[
				7997,
				7997
			],
			"mapped",
			[
				7989
			]
		],
		[
			[
				7998,
				7998
			],
			"mapped",
			[
				7990
			]
		],
		[
			[
				7999,
				7999
			],
			"mapped",
			[
				7991
			]
		],
		[
			[
				8000,
				8005
			],
			"valid"
		],
		[
			[
				8006,
				8007
			],
			"disallowed"
		],
		[
			[
				8008,
				8008
			],
			"mapped",
			[
				8000
			]
		],
		[
			[
				8009,
				8009
			],
			"mapped",
			[
				8001
			]
		],
		[
			[
				8010,
				8010
			],
			"mapped",
			[
				8002
			]
		],
		[
			[
				8011,
				8011
			],
			"mapped",
			[
				8003
			]
		],
		[
			[
				8012,
				8012
			],
			"mapped",
			[
				8004
			]
		],
		[
			[
				8013,
				8013
			],
			"mapped",
			[
				8005
			]
		],
		[
			[
				8014,
				8015
			],
			"disallowed"
		],
		[
			[
				8016,
				8023
			],
			"valid"
		],
		[
			[
				8024,
				8024
			],
			"disallowed"
		],
		[
			[
				8025,
				8025
			],
			"mapped",
			[
				8017
			]
		],
		[
			[
				8026,
				8026
			],
			"disallowed"
		],
		[
			[
				8027,
				8027
			],
			"mapped",
			[
				8019
			]
		],
		[
			[
				8028,
				8028
			],
			"disallowed"
		],
		[
			[
				8029,
				8029
			],
			"mapped",
			[
				8021
			]
		],
		[
			[
				8030,
				8030
			],
			"disallowed"
		],
		[
			[
				8031,
				8031
			],
			"mapped",
			[
				8023
			]
		],
		[
			[
				8032,
				8039
			],
			"valid"
		],
		[
			[
				8040,
				8040
			],
			"mapped",
			[
				8032
			]
		],
		[
			[
				8041,
				8041
			],
			"mapped",
			[
				8033
			]
		],
		[
			[
				8042,
				8042
			],
			"mapped",
			[
				8034
			]
		],
		[
			[
				8043,
				8043
			],
			"mapped",
			[
				8035
			]
		],
		[
			[
				8044,
				8044
			],
			"mapped",
			[
				8036
			]
		],
		[
			[
				8045,
				8045
			],
			"mapped",
			[
				8037
			]
		],
		[
			[
				8046,
				8046
			],
			"mapped",
			[
				8038
			]
		],
		[
			[
				8047,
				8047
			],
			"mapped",
			[
				8039
			]
		],
		[
			[
				8048,
				8048
			],
			"valid"
		],
		[
			[
				8049,
				8049
			],
			"mapped",
			[
				940
			]
		],
		[
			[
				8050,
				8050
			],
			"valid"
		],
		[
			[
				8051,
				8051
			],
			"mapped",
			[
				941
			]
		],
		[
			[
				8052,
				8052
			],
			"valid"
		],
		[
			[
				8053,
				8053
			],
			"mapped",
			[
				942
			]
		],
		[
			[
				8054,
				8054
			],
			"valid"
		],
		[
			[
				8055,
				8055
			],
			"mapped",
			[
				943
			]
		],
		[
			[
				8056,
				8056
			],
			"valid"
		],
		[
			[
				8057,
				8057
			],
			"mapped",
			[
				972
			]
		],
		[
			[
				8058,
				8058
			],
			"valid"
		],
		[
			[
				8059,
				8059
			],
			"mapped",
			[
				973
			]
		],
		[
			[
				8060,
				8060
			],
			"valid"
		],
		[
			[
				8061,
				8061
			],
			"mapped",
			[
				974
			]
		],
		[
			[
				8062,
				8063
			],
			"disallowed"
		],
		[
			[
				8064,
				8064
			],
			"mapped",
			[
				7936,
				953
			]
		],
		[
			[
				8065,
				8065
			],
			"mapped",
			[
				7937,
				953
			]
		],
		[
			[
				8066,
				8066
			],
			"mapped",
			[
				7938,
				953
			]
		],
		[
			[
				8067,
				8067
			],
			"mapped",
			[
				7939,
				953
			]
		],
		[
			[
				8068,
				8068
			],
			"mapped",
			[
				7940,
				953
			]
		],
		[
			[
				8069,
				8069
			],
			"mapped",
			[
				7941,
				953
			]
		],
		[
			[
				8070,
				8070
			],
			"mapped",
			[
				7942,
				953
			]
		],
		[
			[
				8071,
				8071
			],
			"mapped",
			[
				7943,
				953
			]
		],
		[
			[
				8072,
				8072
			],
			"mapped",
			[
				7936,
				953
			]
		],
		[
			[
				8073,
				8073
			],
			"mapped",
			[
				7937,
				953
			]
		],
		[
			[
				8074,
				8074
			],
			"mapped",
			[
				7938,
				953
			]
		],
		[
			[
				8075,
				8075
			],
			"mapped",
			[
				7939,
				953
			]
		],
		[
			[
				8076,
				8076
			],
			"mapped",
			[
				7940,
				953
			]
		],
		[
			[
				8077,
				8077
			],
			"mapped",
			[
				7941,
				953
			]
		],
		[
			[
				8078,
				8078
			],
			"mapped",
			[
				7942,
				953
			]
		],
		[
			[
				8079,
				8079
			],
			"mapped",
			[
				7943,
				953
			]
		],
		[
			[
				8080,
				8080
			],
			"mapped",
			[
				7968,
				953
			]
		],
		[
			[
				8081,
				8081
			],
			"mapped",
			[
				7969,
				953
			]
		],
		[
			[
				8082,
				8082
			],
			"mapped",
			[
				7970,
				953
			]
		],
		[
			[
				8083,
				8083
			],
			"mapped",
			[
				7971,
				953
			]
		],
		[
			[
				8084,
				8084
			],
			"mapped",
			[
				7972,
				953
			]
		],
		[
			[
				8085,
				8085
			],
			"mapped",
			[
				7973,
				953
			]
		],
		[
			[
				8086,
				8086
			],
			"mapped",
			[
				7974,
				953
			]
		],
		[
			[
				8087,
				8087
			],
			"mapped",
			[
				7975,
				953
			]
		],
		[
			[
				8088,
				8088
			],
			"mapped",
			[
				7968,
				953
			]
		],
		[
			[
				8089,
				8089
			],
			"mapped",
			[
				7969,
				953
			]
		],
		[
			[
				8090,
				8090
			],
			"mapped",
			[
				7970,
				953
			]
		],
		[
			[
				8091,
				8091
			],
			"mapped",
			[
				7971,
				953
			]
		],
		[
			[
				8092,
				8092
			],
			"mapped",
			[
				7972,
				953
			]
		],
		[
			[
				8093,
				8093
			],
			"mapped",
			[
				7973,
				953
			]
		],
		[
			[
				8094,
				8094
			],
			"mapped",
			[
				7974,
				953
			]
		],
		[
			[
				8095,
				8095
			],
			"mapped",
			[
				7975,
				953
			]
		],
		[
			[
				8096,
				8096
			],
			"mapped",
			[
				8032,
				953
			]
		],
		[
			[
				8097,
				8097
			],
			"mapped",
			[
				8033,
				953
			]
		],
		[
			[
				8098,
				8098
			],
			"mapped",
			[
				8034,
				953
			]
		],
		[
			[
				8099,
				8099
			],
			"mapped",
			[
				8035,
				953
			]
		],
		[
			[
				8100,
				8100
			],
			"mapped",
			[
				8036,
				953
			]
		],
		[
			[
				8101,
				8101
			],
			"mapped",
			[
				8037,
				953
			]
		],
		[
			[
				8102,
				8102
			],
			"mapped",
			[
				8038,
				953
			]
		],
		[
			[
				8103,
				8103
			],
			"mapped",
			[
				8039,
				953
			]
		],
		[
			[
				8104,
				8104
			],
			"mapped",
			[
				8032,
				953
			]
		],
		[
			[
				8105,
				8105
			],
			"mapped",
			[
				8033,
				953
			]
		],
		[
			[
				8106,
				8106
			],
			"mapped",
			[
				8034,
				953
			]
		],
		[
			[
				8107,
				8107
			],
			"mapped",
			[
				8035,
				953
			]
		],
		[
			[
				8108,
				8108
			],
			"mapped",
			[
				8036,
				953
			]
		],
		[
			[
				8109,
				8109
			],
			"mapped",
			[
				8037,
				953
			]
		],
		[
			[
				8110,
				8110
			],
			"mapped",
			[
				8038,
				953
			]
		],
		[
			[
				8111,
				8111
			],
			"mapped",
			[
				8039,
				953
			]
		],
		[
			[
				8112,
				8113
			],
			"valid"
		],
		[
			[
				8114,
				8114
			],
			"mapped",
			[
				8048,
				953
			]
		],
		[
			[
				8115,
				8115
			],
			"mapped",
			[
				945,
				953
			]
		],
		[
			[
				8116,
				8116
			],
			"mapped",
			[
				940,
				953
			]
		],
		[
			[
				8117,
				8117
			],
			"disallowed"
		],
		[
			[
				8118,
				8118
			],
			"valid"
		],
		[
			[
				8119,
				8119
			],
			"mapped",
			[
				8118,
				953
			]
		],
		[
			[
				8120,
				8120
			],
			"mapped",
			[
				8112
			]
		],
		[
			[
				8121,
				8121
			],
			"mapped",
			[
				8113
			]
		],
		[
			[
				8122,
				8122
			],
			"mapped",
			[
				8048
			]
		],
		[
			[
				8123,
				8123
			],
			"mapped",
			[
				940
			]
		],
		[
			[
				8124,
				8124
			],
			"mapped",
			[
				945,
				953
			]
		],
		[
			[
				8125,
				8125
			],
			"disallowed_STD3_mapped",
			[
				32,
				787
			]
		],
		[
			[
				8126,
				8126
			],
			"mapped",
			[
				953
			]
		],
		[
			[
				8127,
				8127
			],
			"disallowed_STD3_mapped",
			[
				32,
				787
			]
		],
		[
			[
				8128,
				8128
			],
			"disallowed_STD3_mapped",
			[
				32,
				834
			]
		],
		[
			[
				8129,
				8129
			],
			"disallowed_STD3_mapped",
			[
				32,
				776,
				834
			]
		],
		[
			[
				8130,
				8130
			],
			"mapped",
			[
				8052,
				953
			]
		],
		[
			[
				8131,
				8131
			],
			"mapped",
			[
				951,
				953
			]
		],
		[
			[
				8132,
				8132
			],
			"mapped",
			[
				942,
				953
			]
		],
		[
			[
				8133,
				8133
			],
			"disallowed"
		],
		[
			[
				8134,
				8134
			],
			"valid"
		],
		[
			[
				8135,
				8135
			],
			"mapped",
			[
				8134,
				953
			]
		],
		[
			[
				8136,
				8136
			],
			"mapped",
			[
				8050
			]
		],
		[
			[
				8137,
				8137
			],
			"mapped",
			[
				941
			]
		],
		[
			[
				8138,
				8138
			],
			"mapped",
			[
				8052
			]
		],
		[
			[
				8139,
				8139
			],
			"mapped",
			[
				942
			]
		],
		[
			[
				8140,
				8140
			],
			"mapped",
			[
				951,
				953
			]
		],
		[
			[
				8141,
				8141
			],
			"disallowed_STD3_mapped",
			[
				32,
				787,
				768
			]
		],
		[
			[
				8142,
				8142
			],
			"disallowed_STD3_mapped",
			[
				32,
				787,
				769
			]
		],
		[
			[
				8143,
				8143
			],
			"disallowed_STD3_mapped",
			[
				32,
				787,
				834
			]
		],
		[
			[
				8144,
				8146
			],
			"valid"
		],
		[
			[
				8147,
				8147
			],
			"mapped",
			[
				912
			]
		],
		[
			[
				8148,
				8149
			],
			"disallowed"
		],
		[
			[
				8150,
				8151
			],
			"valid"
		],
		[
			[
				8152,
				8152
			],
			"mapped",
			[
				8144
			]
		],
		[
			[
				8153,
				8153
			],
			"mapped",
			[
				8145
			]
		],
		[
			[
				8154,
				8154
			],
			"mapped",
			[
				8054
			]
		],
		[
			[
				8155,
				8155
			],
			"mapped",
			[
				943
			]
		],
		[
			[
				8156,
				8156
			],
			"disallowed"
		],
		[
			[
				8157,
				8157
			],
			"disallowed_STD3_mapped",
			[
				32,
				788,
				768
			]
		],
		[
			[
				8158,
				8158
			],
			"disallowed_STD3_mapped",
			[
				32,
				788,
				769
			]
		],
		[
			[
				8159,
				8159
			],
			"disallowed_STD3_mapped",
			[
				32,
				788,
				834
			]
		],
		[
			[
				8160,
				8162
			],
			"valid"
		],
		[
			[
				8163,
				8163
			],
			"mapped",
			[
				944
			]
		],
		[
			[
				8164,
				8167
			],
			"valid"
		],
		[
			[
				8168,
				8168
			],
			"mapped",
			[
				8160
			]
		],
		[
			[
				8169,
				8169
			],
			"mapped",
			[
				8161
			]
		],
		[
			[
				8170,
				8170
			],
			"mapped",
			[
				8058
			]
		],
		[
			[
				8171,
				8171
			],
			"mapped",
			[
				973
			]
		],
		[
			[
				8172,
				8172
			],
			"mapped",
			[
				8165
			]
		],
		[
			[
				8173,
				8173
			],
			"disallowed_STD3_mapped",
			[
				32,
				776,
				768
			]
		],
		[
			[
				8174,
				8174
			],
			"disallowed_STD3_mapped",
			[
				32,
				776,
				769
			]
		],
		[
			[
				8175,
				8175
			],
			"disallowed_STD3_mapped",
			[
				96
			]
		],
		[
			[
				8176,
				8177
			],
			"disallowed"
		],
		[
			[
				8178,
				8178
			],
			"mapped",
			[
				8060,
				953
			]
		],
		[
			[
				8179,
				8179
			],
			"mapped",
			[
				969,
				953
			]
		],
		[
			[
				8180,
				8180
			],
			"mapped",
			[
				974,
				953
			]
		],
		[
			[
				8181,
				8181
			],
			"disallowed"
		],
		[
			[
				8182,
				8182
			],
			"valid"
		],
		[
			[
				8183,
				8183
			],
			"mapped",
			[
				8182,
				953
			]
		],
		[
			[
				8184,
				8184
			],
			"mapped",
			[
				8056
			]
		],
		[
			[
				8185,
				8185
			],
			"mapped",
			[
				972
			]
		],
		[
			[
				8186,
				8186
			],
			"mapped",
			[
				8060
			]
		],
		[
			[
				8187,
				8187
			],
			"mapped",
			[
				974
			]
		],
		[
			[
				8188,
				8188
			],
			"mapped",
			[
				969,
				953
			]
		],
		[
			[
				8189,
				8189
			],
			"disallowed_STD3_mapped",
			[
				32,
				769
			]
		],
		[
			[
				8190,
				8190
			],
			"disallowed_STD3_mapped",
			[
				32,
				788
			]
		],
		[
			[
				8191,
				8191
			],
			"disallowed"
		],
		[
			[
				8192,
				8202
			],
			"disallowed_STD3_mapped",
			[
				32
			]
		],
		[
			[
				8203,
				8203
			],
			"ignored"
		],
		[
			[
				8204,
				8205
			],
			"deviation",
			[]
		],
		[
			[
				8206,
				8207
			],
			"disallowed"
		],
		[
			[
				8208,
				8208
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8209,
				8209
			],
			"mapped",
			[
				8208
			]
		],
		[
			[
				8210,
				8214
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8215,
				8215
			],
			"disallowed_STD3_mapped",
			[
				32,
				819
			]
		],
		[
			[
				8216,
				8227
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8228,
				8230
			],
			"disallowed"
		],
		[
			[
				8231,
				8231
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8232,
				8238
			],
			"disallowed"
		],
		[
			[
				8239,
				8239
			],
			"disallowed_STD3_mapped",
			[
				32
			]
		],
		[
			[
				8240,
				8242
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8243,
				8243
			],
			"mapped",
			[
				8242,
				8242
			]
		],
		[
			[
				8244,
				8244
			],
			"mapped",
			[
				8242,
				8242,
				8242
			]
		],
		[
			[
				8245,
				8245
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8246,
				8246
			],
			"mapped",
			[
				8245,
				8245
			]
		],
		[
			[
				8247,
				8247
			],
			"mapped",
			[
				8245,
				8245,
				8245
			]
		],
		[
			[
				8248,
				8251
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8252,
				8252
			],
			"disallowed_STD3_mapped",
			[
				33,
				33
			]
		],
		[
			[
				8253,
				8253
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8254,
				8254
			],
			"disallowed_STD3_mapped",
			[
				32,
				773
			]
		],
		[
			[
				8255,
				8262
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8263,
				8263
			],
			"disallowed_STD3_mapped",
			[
				63,
				63
			]
		],
		[
			[
				8264,
				8264
			],
			"disallowed_STD3_mapped",
			[
				63,
				33
			]
		],
		[
			[
				8265,
				8265
			],
			"disallowed_STD3_mapped",
			[
				33,
				63
			]
		],
		[
			[
				8266,
				8269
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8270,
				8274
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8275,
				8276
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8277,
				8278
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8279,
				8279
			],
			"mapped",
			[
				8242,
				8242,
				8242,
				8242
			]
		],
		[
			[
				8280,
				8286
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8287,
				8287
			],
			"disallowed_STD3_mapped",
			[
				32
			]
		],
		[
			[
				8288,
				8288
			],
			"ignored"
		],
		[
			[
				8289,
				8291
			],
			"disallowed"
		],
		[
			[
				8292,
				8292
			],
			"ignored"
		],
		[
			[
				8293,
				8293
			],
			"disallowed"
		],
		[
			[
				8294,
				8297
			],
			"disallowed"
		],
		[
			[
				8298,
				8303
			],
			"disallowed"
		],
		[
			[
				8304,
				8304
			],
			"mapped",
			[
				48
			]
		],
		[
			[
				8305,
				8305
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				8306,
				8307
			],
			"disallowed"
		],
		[
			[
				8308,
				8308
			],
			"mapped",
			[
				52
			]
		],
		[
			[
				8309,
				8309
			],
			"mapped",
			[
				53
			]
		],
		[
			[
				8310,
				8310
			],
			"mapped",
			[
				54
			]
		],
		[
			[
				8311,
				8311
			],
			"mapped",
			[
				55
			]
		],
		[
			[
				8312,
				8312
			],
			"mapped",
			[
				56
			]
		],
		[
			[
				8313,
				8313
			],
			"mapped",
			[
				57
			]
		],
		[
			[
				8314,
				8314
			],
			"disallowed_STD3_mapped",
			[
				43
			]
		],
		[
			[
				8315,
				8315
			],
			"mapped",
			[
				8722
			]
		],
		[
			[
				8316,
				8316
			],
			"disallowed_STD3_mapped",
			[
				61
			]
		],
		[
			[
				8317,
				8317
			],
			"disallowed_STD3_mapped",
			[
				40
			]
		],
		[
			[
				8318,
				8318
			],
			"disallowed_STD3_mapped",
			[
				41
			]
		],
		[
			[
				8319,
				8319
			],
			"mapped",
			[
				110
			]
		],
		[
			[
				8320,
				8320
			],
			"mapped",
			[
				48
			]
		],
		[
			[
				8321,
				8321
			],
			"mapped",
			[
				49
			]
		],
		[
			[
				8322,
				8322
			],
			"mapped",
			[
				50
			]
		],
		[
			[
				8323,
				8323
			],
			"mapped",
			[
				51
			]
		],
		[
			[
				8324,
				8324
			],
			"mapped",
			[
				52
			]
		],
		[
			[
				8325,
				8325
			],
			"mapped",
			[
				53
			]
		],
		[
			[
				8326,
				8326
			],
			"mapped",
			[
				54
			]
		],
		[
			[
				8327,
				8327
			],
			"mapped",
			[
				55
			]
		],
		[
			[
				8328,
				8328
			],
			"mapped",
			[
				56
			]
		],
		[
			[
				8329,
				8329
			],
			"mapped",
			[
				57
			]
		],
		[
			[
				8330,
				8330
			],
			"disallowed_STD3_mapped",
			[
				43
			]
		],
		[
			[
				8331,
				8331
			],
			"mapped",
			[
				8722
			]
		],
		[
			[
				8332,
				8332
			],
			"disallowed_STD3_mapped",
			[
				61
			]
		],
		[
			[
				8333,
				8333
			],
			"disallowed_STD3_mapped",
			[
				40
			]
		],
		[
			[
				8334,
				8334
			],
			"disallowed_STD3_mapped",
			[
				41
			]
		],
		[
			[
				8335,
				8335
			],
			"disallowed"
		],
		[
			[
				8336,
				8336
			],
			"mapped",
			[
				97
			]
		],
		[
			[
				8337,
				8337
			],
			"mapped",
			[
				101
			]
		],
		[
			[
				8338,
				8338
			],
			"mapped",
			[
				111
			]
		],
		[
			[
				8339,
				8339
			],
			"mapped",
			[
				120
			]
		],
		[
			[
				8340,
				8340
			],
			"mapped",
			[
				601
			]
		],
		[
			[
				8341,
				8341
			],
			"mapped",
			[
				104
			]
		],
		[
			[
				8342,
				8342
			],
			"mapped",
			[
				107
			]
		],
		[
			[
				8343,
				8343
			],
			"mapped",
			[
				108
			]
		],
		[
			[
				8344,
				8344
			],
			"mapped",
			[
				109
			]
		],
		[
			[
				8345,
				8345
			],
			"mapped",
			[
				110
			]
		],
		[
			[
				8346,
				8346
			],
			"mapped",
			[
				112
			]
		],
		[
			[
				8347,
				8347
			],
			"mapped",
			[
				115
			]
		],
		[
			[
				8348,
				8348
			],
			"mapped",
			[
				116
			]
		],
		[
			[
				8349,
				8351
			],
			"disallowed"
		],
		[
			[
				8352,
				8359
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8360,
				8360
			],
			"mapped",
			[
				114,
				115
			]
		],
		[
			[
				8361,
				8362
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8363,
				8363
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8364,
				8364
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8365,
				8367
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8368,
				8369
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8370,
				8373
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8374,
				8376
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8377,
				8377
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8378,
				8378
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8379,
				8381
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8382,
				8382
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8383,
				8399
			],
			"disallowed"
		],
		[
			[
				8400,
				8417
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8418,
				8419
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8420,
				8426
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8427,
				8427
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8428,
				8431
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8432,
				8432
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8433,
				8447
			],
			"disallowed"
		],
		[
			[
				8448,
				8448
			],
			"disallowed_STD3_mapped",
			[
				97,
				47,
				99
			]
		],
		[
			[
				8449,
				8449
			],
			"disallowed_STD3_mapped",
			[
				97,
				47,
				115
			]
		],
		[
			[
				8450,
				8450
			],
			"mapped",
			[
				99
			]
		],
		[
			[
				8451,
				8451
			],
			"mapped",
			[
				176,
				99
			]
		],
		[
			[
				8452,
				8452
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8453,
				8453
			],
			"disallowed_STD3_mapped",
			[
				99,
				47,
				111
			]
		],
		[
			[
				8454,
				8454
			],
			"disallowed_STD3_mapped",
			[
				99,
				47,
				117
			]
		],
		[
			[
				8455,
				8455
			],
			"mapped",
			[
				603
			]
		],
		[
			[
				8456,
				8456
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8457,
				8457
			],
			"mapped",
			[
				176,
				102
			]
		],
		[
			[
				8458,
				8458
			],
			"mapped",
			[
				103
			]
		],
		[
			[
				8459,
				8462
			],
			"mapped",
			[
				104
			]
		],
		[
			[
				8463,
				8463
			],
			"mapped",
			[
				295
			]
		],
		[
			[
				8464,
				8465
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				8466,
				8467
			],
			"mapped",
			[
				108
			]
		],
		[
			[
				8468,
				8468
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8469,
				8469
			],
			"mapped",
			[
				110
			]
		],
		[
			[
				8470,
				8470
			],
			"mapped",
			[
				110,
				111
			]
		],
		[
			[
				8471,
				8472
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8473,
				8473
			],
			"mapped",
			[
				112
			]
		],
		[
			[
				8474,
				8474
			],
			"mapped",
			[
				113
			]
		],
		[
			[
				8475,
				8477
			],
			"mapped",
			[
				114
			]
		],
		[
			[
				8478,
				8479
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8480,
				8480
			],
			"mapped",
			[
				115,
				109
			]
		],
		[
			[
				8481,
				8481
			],
			"mapped",
			[
				116,
				101,
				108
			]
		],
		[
			[
				8482,
				8482
			],
			"mapped",
			[
				116,
				109
			]
		],
		[
			[
				8483,
				8483
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8484,
				8484
			],
			"mapped",
			[
				122
			]
		],
		[
			[
				8485,
				8485
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8486,
				8486
			],
			"mapped",
			[
				969
			]
		],
		[
			[
				8487,
				8487
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8488,
				8488
			],
			"mapped",
			[
				122
			]
		],
		[
			[
				8489,
				8489
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8490,
				8490
			],
			"mapped",
			[
				107
			]
		],
		[
			[
				8491,
				8491
			],
			"mapped",
			[
				229
			]
		],
		[
			[
				8492,
				8492
			],
			"mapped",
			[
				98
			]
		],
		[
			[
				8493,
				8493
			],
			"mapped",
			[
				99
			]
		],
		[
			[
				8494,
				8494
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8495,
				8496
			],
			"mapped",
			[
				101
			]
		],
		[
			[
				8497,
				8497
			],
			"mapped",
			[
				102
			]
		],
		[
			[
				8498,
				8498
			],
			"disallowed"
		],
		[
			[
				8499,
				8499
			],
			"mapped",
			[
				109
			]
		],
		[
			[
				8500,
				8500
			],
			"mapped",
			[
				111
			]
		],
		[
			[
				8501,
				8501
			],
			"mapped",
			[
				1488
			]
		],
		[
			[
				8502,
				8502
			],
			"mapped",
			[
				1489
			]
		],
		[
			[
				8503,
				8503
			],
			"mapped",
			[
				1490
			]
		],
		[
			[
				8504,
				8504
			],
			"mapped",
			[
				1491
			]
		],
		[
			[
				8505,
				8505
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				8506,
				8506
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8507,
				8507
			],
			"mapped",
			[
				102,
				97,
				120
			]
		],
		[
			[
				8508,
				8508
			],
			"mapped",
			[
				960
			]
		],
		[
			[
				8509,
				8510
			],
			"mapped",
			[
				947
			]
		],
		[
			[
				8511,
				8511
			],
			"mapped",
			[
				960
			]
		],
		[
			[
				8512,
				8512
			],
			"mapped",
			[
				8721
			]
		],
		[
			[
				8513,
				8516
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8517,
				8518
			],
			"mapped",
			[
				100
			]
		],
		[
			[
				8519,
				8519
			],
			"mapped",
			[
				101
			]
		],
		[
			[
				8520,
				8520
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				8521,
				8521
			],
			"mapped",
			[
				106
			]
		],
		[
			[
				8522,
				8523
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8524,
				8524
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8525,
				8525
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8526,
				8526
			],
			"valid"
		],
		[
			[
				8527,
				8527
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8528,
				8528
			],
			"mapped",
			[
				49,
				8260,
				55
			]
		],
		[
			[
				8529,
				8529
			],
			"mapped",
			[
				49,
				8260,
				57
			]
		],
		[
			[
				8530,
				8530
			],
			"mapped",
			[
				49,
				8260,
				49,
				48
			]
		],
		[
			[
				8531,
				8531
			],
			"mapped",
			[
				49,
				8260,
				51
			]
		],
		[
			[
				8532,
				8532
			],
			"mapped",
			[
				50,
				8260,
				51
			]
		],
		[
			[
				8533,
				8533
			],
			"mapped",
			[
				49,
				8260,
				53
			]
		],
		[
			[
				8534,
				8534
			],
			"mapped",
			[
				50,
				8260,
				53
			]
		],
		[
			[
				8535,
				8535
			],
			"mapped",
			[
				51,
				8260,
				53
			]
		],
		[
			[
				8536,
				8536
			],
			"mapped",
			[
				52,
				8260,
				53
			]
		],
		[
			[
				8537,
				8537
			],
			"mapped",
			[
				49,
				8260,
				54
			]
		],
		[
			[
				8538,
				8538
			],
			"mapped",
			[
				53,
				8260,
				54
			]
		],
		[
			[
				8539,
				8539
			],
			"mapped",
			[
				49,
				8260,
				56
			]
		],
		[
			[
				8540,
				8540
			],
			"mapped",
			[
				51,
				8260,
				56
			]
		],
		[
			[
				8541,
				8541
			],
			"mapped",
			[
				53,
				8260,
				56
			]
		],
		[
			[
				8542,
				8542
			],
			"mapped",
			[
				55,
				8260,
				56
			]
		],
		[
			[
				8543,
				8543
			],
			"mapped",
			[
				49,
				8260
			]
		],
		[
			[
				8544,
				8544
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				8545,
				8545
			],
			"mapped",
			[
				105,
				105
			]
		],
		[
			[
				8546,
				8546
			],
			"mapped",
			[
				105,
				105,
				105
			]
		],
		[
			[
				8547,
				8547
			],
			"mapped",
			[
				105,
				118
			]
		],
		[
			[
				8548,
				8548
			],
			"mapped",
			[
				118
			]
		],
		[
			[
				8549,
				8549
			],
			"mapped",
			[
				118,
				105
			]
		],
		[
			[
				8550,
				8550
			],
			"mapped",
			[
				118,
				105,
				105
			]
		],
		[
			[
				8551,
				8551
			],
			"mapped",
			[
				118,
				105,
				105,
				105
			]
		],
		[
			[
				8552,
				8552
			],
			"mapped",
			[
				105,
				120
			]
		],
		[
			[
				8553,
				8553
			],
			"mapped",
			[
				120
			]
		],
		[
			[
				8554,
				8554
			],
			"mapped",
			[
				120,
				105
			]
		],
		[
			[
				8555,
				8555
			],
			"mapped",
			[
				120,
				105,
				105
			]
		],
		[
			[
				8556,
				8556
			],
			"mapped",
			[
				108
			]
		],
		[
			[
				8557,
				8557
			],
			"mapped",
			[
				99
			]
		],
		[
			[
				8558,
				8558
			],
			"mapped",
			[
				100
			]
		],
		[
			[
				8559,
				8559
			],
			"mapped",
			[
				109
			]
		],
		[
			[
				8560,
				8560
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				8561,
				8561
			],
			"mapped",
			[
				105,
				105
			]
		],
		[
			[
				8562,
				8562
			],
			"mapped",
			[
				105,
				105,
				105
			]
		],
		[
			[
				8563,
				8563
			],
			"mapped",
			[
				105,
				118
			]
		],
		[
			[
				8564,
				8564
			],
			"mapped",
			[
				118
			]
		],
		[
			[
				8565,
				8565
			],
			"mapped",
			[
				118,
				105
			]
		],
		[
			[
				8566,
				8566
			],
			"mapped",
			[
				118,
				105,
				105
			]
		],
		[
			[
				8567,
				8567
			],
			"mapped",
			[
				118,
				105,
				105,
				105
			]
		],
		[
			[
				8568,
				8568
			],
			"mapped",
			[
				105,
				120
			]
		],
		[
			[
				8569,
				8569
			],
			"mapped",
			[
				120
			]
		],
		[
			[
				8570,
				8570
			],
			"mapped",
			[
				120,
				105
			]
		],
		[
			[
				8571,
				8571
			],
			"mapped",
			[
				120,
				105,
				105
			]
		],
		[
			[
				8572,
				8572
			],
			"mapped",
			[
				108
			]
		],
		[
			[
				8573,
				8573
			],
			"mapped",
			[
				99
			]
		],
		[
			[
				8574,
				8574
			],
			"mapped",
			[
				100
			]
		],
		[
			[
				8575,
				8575
			],
			"mapped",
			[
				109
			]
		],
		[
			[
				8576,
				8578
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8579,
				8579
			],
			"disallowed"
		],
		[
			[
				8580,
				8580
			],
			"valid"
		],
		[
			[
				8581,
				8584
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8585,
				8585
			],
			"mapped",
			[
				48,
				8260,
				51
			]
		],
		[
			[
				8586,
				8587
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8588,
				8591
			],
			"disallowed"
		],
		[
			[
				8592,
				8682
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8683,
				8691
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8692,
				8703
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8704,
				8747
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8748,
				8748
			],
			"mapped",
			[
				8747,
				8747
			]
		],
		[
			[
				8749,
				8749
			],
			"mapped",
			[
				8747,
				8747,
				8747
			]
		],
		[
			[
				8750,
				8750
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8751,
				8751
			],
			"mapped",
			[
				8750,
				8750
			]
		],
		[
			[
				8752,
				8752
			],
			"mapped",
			[
				8750,
				8750,
				8750
			]
		],
		[
			[
				8753,
				8799
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8800,
				8800
			],
			"disallowed_STD3_valid"
		],
		[
			[
				8801,
				8813
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8814,
				8815
			],
			"disallowed_STD3_valid"
		],
		[
			[
				8816,
				8945
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8946,
				8959
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8960,
				8960
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8961,
				8961
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				8962,
				9000
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9001,
				9001
			],
			"mapped",
			[
				12296
			]
		],
		[
			[
				9002,
				9002
			],
			"mapped",
			[
				12297
			]
		],
		[
			[
				9003,
				9082
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9083,
				9083
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9084,
				9084
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9085,
				9114
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9115,
				9166
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9167,
				9168
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9169,
				9179
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9180,
				9191
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9192,
				9192
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9193,
				9203
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9204,
				9210
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9211,
				9215
			],
			"disallowed"
		],
		[
			[
				9216,
				9252
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9253,
				9254
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9255,
				9279
			],
			"disallowed"
		],
		[
			[
				9280,
				9290
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9291,
				9311
			],
			"disallowed"
		],
		[
			[
				9312,
				9312
			],
			"mapped",
			[
				49
			]
		],
		[
			[
				9313,
				9313
			],
			"mapped",
			[
				50
			]
		],
		[
			[
				9314,
				9314
			],
			"mapped",
			[
				51
			]
		],
		[
			[
				9315,
				9315
			],
			"mapped",
			[
				52
			]
		],
		[
			[
				9316,
				9316
			],
			"mapped",
			[
				53
			]
		],
		[
			[
				9317,
				9317
			],
			"mapped",
			[
				54
			]
		],
		[
			[
				9318,
				9318
			],
			"mapped",
			[
				55
			]
		],
		[
			[
				9319,
				9319
			],
			"mapped",
			[
				56
			]
		],
		[
			[
				9320,
				9320
			],
			"mapped",
			[
				57
			]
		],
		[
			[
				9321,
				9321
			],
			"mapped",
			[
				49,
				48
			]
		],
		[
			[
				9322,
				9322
			],
			"mapped",
			[
				49,
				49
			]
		],
		[
			[
				9323,
				9323
			],
			"mapped",
			[
				49,
				50
			]
		],
		[
			[
				9324,
				9324
			],
			"mapped",
			[
				49,
				51
			]
		],
		[
			[
				9325,
				9325
			],
			"mapped",
			[
				49,
				52
			]
		],
		[
			[
				9326,
				9326
			],
			"mapped",
			[
				49,
				53
			]
		],
		[
			[
				9327,
				9327
			],
			"mapped",
			[
				49,
				54
			]
		],
		[
			[
				9328,
				9328
			],
			"mapped",
			[
				49,
				55
			]
		],
		[
			[
				9329,
				9329
			],
			"mapped",
			[
				49,
				56
			]
		],
		[
			[
				9330,
				9330
			],
			"mapped",
			[
				49,
				57
			]
		],
		[
			[
				9331,
				9331
			],
			"mapped",
			[
				50,
				48
			]
		],
		[
			[
				9332,
				9332
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				41
			]
		],
		[
			[
				9333,
				9333
			],
			"disallowed_STD3_mapped",
			[
				40,
				50,
				41
			]
		],
		[
			[
				9334,
				9334
			],
			"disallowed_STD3_mapped",
			[
				40,
				51,
				41
			]
		],
		[
			[
				9335,
				9335
			],
			"disallowed_STD3_mapped",
			[
				40,
				52,
				41
			]
		],
		[
			[
				9336,
				9336
			],
			"disallowed_STD3_mapped",
			[
				40,
				53,
				41
			]
		],
		[
			[
				9337,
				9337
			],
			"disallowed_STD3_mapped",
			[
				40,
				54,
				41
			]
		],
		[
			[
				9338,
				9338
			],
			"disallowed_STD3_mapped",
			[
				40,
				55,
				41
			]
		],
		[
			[
				9339,
				9339
			],
			"disallowed_STD3_mapped",
			[
				40,
				56,
				41
			]
		],
		[
			[
				9340,
				9340
			],
			"disallowed_STD3_mapped",
			[
				40,
				57,
				41
			]
		],
		[
			[
				9341,
				9341
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				48,
				41
			]
		],
		[
			[
				9342,
				9342
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				49,
				41
			]
		],
		[
			[
				9343,
				9343
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				50,
				41
			]
		],
		[
			[
				9344,
				9344
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				51,
				41
			]
		],
		[
			[
				9345,
				9345
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				52,
				41
			]
		],
		[
			[
				9346,
				9346
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				53,
				41
			]
		],
		[
			[
				9347,
				9347
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				54,
				41
			]
		],
		[
			[
				9348,
				9348
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				55,
				41
			]
		],
		[
			[
				9349,
				9349
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				56,
				41
			]
		],
		[
			[
				9350,
				9350
			],
			"disallowed_STD3_mapped",
			[
				40,
				49,
				57,
				41
			]
		],
		[
			[
				9351,
				9351
			],
			"disallowed_STD3_mapped",
			[
				40,
				50,
				48,
				41
			]
		],
		[
			[
				9352,
				9371
			],
			"disallowed"
		],
		[
			[
				9372,
				9372
			],
			"disallowed_STD3_mapped",
			[
				40,
				97,
				41
			]
		],
		[
			[
				9373,
				9373
			],
			"disallowed_STD3_mapped",
			[
				40,
				98,
				41
			]
		],
		[
			[
				9374,
				9374
			],
			"disallowed_STD3_mapped",
			[
				40,
				99,
				41
			]
		],
		[
			[
				9375,
				9375
			],
			"disallowed_STD3_mapped",
			[
				40,
				100,
				41
			]
		],
		[
			[
				9376,
				9376
			],
			"disallowed_STD3_mapped",
			[
				40,
				101,
				41
			]
		],
		[
			[
				9377,
				9377
			],
			"disallowed_STD3_mapped",
			[
				40,
				102,
				41
			]
		],
		[
			[
				9378,
				9378
			],
			"disallowed_STD3_mapped",
			[
				40,
				103,
				41
			]
		],
		[
			[
				9379,
				9379
			],
			"disallowed_STD3_mapped",
			[
				40,
				104,
				41
			]
		],
		[
			[
				9380,
				9380
			],
			"disallowed_STD3_mapped",
			[
				40,
				105,
				41
			]
		],
		[
			[
				9381,
				9381
			],
			"disallowed_STD3_mapped",
			[
				40,
				106,
				41
			]
		],
		[
			[
				9382,
				9382
			],
			"disallowed_STD3_mapped",
			[
				40,
				107,
				41
			]
		],
		[
			[
				9383,
				9383
			],
			"disallowed_STD3_mapped",
			[
				40,
				108,
				41
			]
		],
		[
			[
				9384,
				9384
			],
			"disallowed_STD3_mapped",
			[
				40,
				109,
				41
			]
		],
		[
			[
				9385,
				9385
			],
			"disallowed_STD3_mapped",
			[
				40,
				110,
				41
			]
		],
		[
			[
				9386,
				9386
			],
			"disallowed_STD3_mapped",
			[
				40,
				111,
				41
			]
		],
		[
			[
				9387,
				9387
			],
			"disallowed_STD3_mapped",
			[
				40,
				112,
				41
			]
		],
		[
			[
				9388,
				9388
			],
			"disallowed_STD3_mapped",
			[
				40,
				113,
				41
			]
		],
		[
			[
				9389,
				9389
			],
			"disallowed_STD3_mapped",
			[
				40,
				114,
				41
			]
		],
		[
			[
				9390,
				9390
			],
			"disallowed_STD3_mapped",
			[
				40,
				115,
				41
			]
		],
		[
			[
				9391,
				9391
			],
			"disallowed_STD3_mapped",
			[
				40,
				116,
				41
			]
		],
		[
			[
				9392,
				9392
			],
			"disallowed_STD3_mapped",
			[
				40,
				117,
				41
			]
		],
		[
			[
				9393,
				9393
			],
			"disallowed_STD3_mapped",
			[
				40,
				118,
				41
			]
		],
		[
			[
				9394,
				9394
			],
			"disallowed_STD3_mapped",
			[
				40,
				119,
				41
			]
		],
		[
			[
				9395,
				9395
			],
			"disallowed_STD3_mapped",
			[
				40,
				120,
				41
			]
		],
		[
			[
				9396,
				9396
			],
			"disallowed_STD3_mapped",
			[
				40,
				121,
				41
			]
		],
		[
			[
				9397,
				9397
			],
			"disallowed_STD3_mapped",
			[
				40,
				122,
				41
			]
		],
		[
			[
				9398,
				9398
			],
			"mapped",
			[
				97
			]
		],
		[
			[
				9399,
				9399
			],
			"mapped",
			[
				98
			]
		],
		[
			[
				9400,
				9400
			],
			"mapped",
			[
				99
			]
		],
		[
			[
				9401,
				9401
			],
			"mapped",
			[
				100
			]
		],
		[
			[
				9402,
				9402
			],
			"mapped",
			[
				101
			]
		],
		[
			[
				9403,
				9403
			],
			"mapped",
			[
				102
			]
		],
		[
			[
				9404,
				9404
			],
			"mapped",
			[
				103
			]
		],
		[
			[
				9405,
				9405
			],
			"mapped",
			[
				104
			]
		],
		[
			[
				9406,
				9406
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				9407,
				9407
			],
			"mapped",
			[
				106
			]
		],
		[
			[
				9408,
				9408
			],
			"mapped",
			[
				107
			]
		],
		[
			[
				9409,
				9409
			],
			"mapped",
			[
				108
			]
		],
		[
			[
				9410,
				9410
			],
			"mapped",
			[
				109
			]
		],
		[
			[
				9411,
				9411
			],
			"mapped",
			[
				110
			]
		],
		[
			[
				9412,
				9412
			],
			"mapped",
			[
				111
			]
		],
		[
			[
				9413,
				9413
			],
			"mapped",
			[
				112
			]
		],
		[
			[
				9414,
				9414
			],
			"mapped",
			[
				113
			]
		],
		[
			[
				9415,
				9415
			],
			"mapped",
			[
				114
			]
		],
		[
			[
				9416,
				9416
			],
			"mapped",
			[
				115
			]
		],
		[
			[
				9417,
				9417
			],
			"mapped",
			[
				116
			]
		],
		[
			[
				9418,
				9418
			],
			"mapped",
			[
				117
			]
		],
		[
			[
				9419,
				9419
			],
			"mapped",
			[
				118
			]
		],
		[
			[
				9420,
				9420
			],
			"mapped",
			[
				119
			]
		],
		[
			[
				9421,
				9421
			],
			"mapped",
			[
				120
			]
		],
		[
			[
				9422,
				9422
			],
			"mapped",
			[
				121
			]
		],
		[
			[
				9423,
				9423
			],
			"mapped",
			[
				122
			]
		],
		[
			[
				9424,
				9424
			],
			"mapped",
			[
				97
			]
		],
		[
			[
				9425,
				9425
			],
			"mapped",
			[
				98
			]
		],
		[
			[
				9426,
				9426
			],
			"mapped",
			[
				99
			]
		],
		[
			[
				9427,
				9427
			],
			"mapped",
			[
				100
			]
		],
		[
			[
				9428,
				9428
			],
			"mapped",
			[
				101
			]
		],
		[
			[
				9429,
				9429
			],
			"mapped",
			[
				102
			]
		],
		[
			[
				9430,
				9430
			],
			"mapped",
			[
				103
			]
		],
		[
			[
				9431,
				9431
			],
			"mapped",
			[
				104
			]
		],
		[
			[
				9432,
				9432
			],
			"mapped",
			[
				105
			]
		],
		[
			[
				9433,
				9433
			],
			"mapped",
			[
				106
			]
		],
		[
			[
				9434,
				9434
			],
			"mapped",
			[
				107
			]
		],
		[
			[
				9435,
				9435
			],
			"mapped",
			[
				108
			]
		],
		[
			[
				9436,
				9436
			],
			"mapped",
			[
				109
			]
		],
		[
			[
				9437,
				9437
			],
			"mapped",
			[
				110
			]
		],
		[
			[
				9438,
				9438
			],
			"mapped",
			[
				111
			]
		],
		[
			[
				9439,
				9439
			],
			"mapped",
			[
				112
			]
		],
		[
			[
				9440,
				9440
			],
			"mapped",
			[
				113
			]
		],
		[
			[
				9441,
				9441
			],
			"mapped",
			[
				114
			]
		],
		[
			[
				9442,
				9442
			],
			"mapped",
			[
				115
			]
		],
		[
			[
				9443,
				9443
			],
			"mapped",
			[
				116
			]
		],
		[
			[
				9444,
				9444
			],
			"mapped",
			[
				117
			]
		],
		[
			[
				9445,
				9445
			],
			"mapped",
			[
				118
			]
		],
		[
			[
				9446,
				9446
			],
			"mapped",
			[
				119
			]
		],
		[
			[
				9447,
				9447
			],
			"mapped",
			[
				120
			]
		],
		[
			[
				9448,
				9448
			],
			"mapped",
			[
				121
			]
		],
		[
			[
				9449,
				9449
			],
			"mapped",
			[
				122
			]
		],
		[
			[
				9450,
				9450
			],
			"mapped",
			[
				48
			]
		],
		[
			[
				9451,
				9470
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9471,
				9471
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9472,
				9621
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9622,
				9631
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9632,
				9711
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9712,
				9719
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9720,
				9727
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9728,
				9747
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9748,
				9749
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9750,
				9751
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9752,
				9752
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9753,
				9753
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9754,
				9839
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9840,
				9841
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9842,
				9853
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9854,
				9855
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9856,
				9865
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9866,
				9873
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9874,
				9884
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9885,
				9885
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9886,
				9887
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9888,
				9889
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9890,
				9905
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9906,
				9906
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9907,
				9916
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9917,
				9919
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9920,
				9923
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9924,
				9933
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9934,
				9934
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9935,
				9953
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9954,
				9954
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9955,
				9955
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9956,
				9959
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9960,
				9983
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9984,
				9984
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9985,
				9988
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9989,
				9989
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9990,
				9993
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9994,
				9995
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				9996,
				10023
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10024,
				10024
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10025,
				10059
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10060,
				10060
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10061,
				10061
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10062,
				10062
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10063,
				10066
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10067,
				10069
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10070,
				10070
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10071,
				10071
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10072,
				10078
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10079,
				10080
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10081,
				10087
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10088,
				10101
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10102,
				10132
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10133,
				10135
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10136,
				10159
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10160,
				10160
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10161,
				10174
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10175,
				10175
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10176,
				10182
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10183,
				10186
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10187,
				10187
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10188,
				10188
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10189,
				10189
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10190,
				10191
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10192,
				10219
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10220,
				10223
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10224,
				10239
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10240,
				10495
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10496,
				10763
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10764,
				10764
			],
			"mapped",
			[
				8747,
				8747,
				8747,
				8747
			]
		],
		[
			[
				10765,
				10867
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10868,
				10868
			],
			"disallowed_STD3_mapped",
			[
				58,
				58,
				61
			]
		],
		[
			[
				10869,
				10869
			],
			"disallowed_STD3_mapped",
			[
				61,
				61
			]
		],
		[
			[
				10870,
				10870
			],
			"disallowed_STD3_mapped",
			[
				61,
				61,
				61
			]
		],
		[
			[
				10871,
				10971
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				10972,
				10972
			],
			"mapped",
			[
				10973,
				824
			]
		],
		[
			[
				10973,
				11007
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11008,
				11021
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11022,
				11027
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11028,
				11034
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11035,
				11039
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11040,
				11043
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11044,
				11084
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11085,
				11087
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11088,
				11092
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11093,
				11097
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11098,
				11123
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11124,
				11125
			],
			"disallowed"
		],
		[
			[
				11126,
				11157
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11158,
				11159
			],
			"disallowed"
		],
		[
			[
				11160,
				11193
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11194,
				11196
			],
			"disallowed"
		],
		[
			[
				11197,
				11208
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11209,
				11209
			],
			"disallowed"
		],
		[
			[
				11210,
				11217
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11218,
				11243
			],
			"disallowed"
		],
		[
			[
				11244,
				11247
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11248,
				11263
			],
			"disallowed"
		],
		[
			[
				11264,
				11264
			],
			"mapped",
			[
				11312
			]
		],
		[
			[
				11265,
				11265
			],
			"mapped",
			[
				11313
			]
		],
		[
			[
				11266,
				11266
			],
			"mapped",
			[
				11314
			]
		],
		[
			[
				11267,
				11267
			],
			"mapped",
			[
				11315
			]
		],
		[
			[
				11268,
				11268
			],
			"mapped",
			[
				11316
			]
		],
		[
			[
				11269,
				11269
			],
			"mapped",
			[
				11317
			]
		],
		[
			[
				11270,
				11270
			],
			"mapped",
			[
				11318
			]
		],
		[
			[
				11271,
				11271
			],
			"mapped",
			[
				11319
			]
		],
		[
			[
				11272,
				11272
			],
			"mapped",
			[
				11320
			]
		],
		[
			[
				11273,
				11273
			],
			"mapped",
			[
				11321
			]
		],
		[
			[
				11274,
				11274
			],
			"mapped",
			[
				11322
			]
		],
		[
			[
				11275,
				11275
			],
			"mapped",
			[
				11323
			]
		],
		[
			[
				11276,
				11276
			],
			"mapped",
			[
				11324
			]
		],
		[
			[
				11277,
				11277
			],
			"mapped",
			[
				11325
			]
		],
		[
			[
				11278,
				11278
			],
			"mapped",
			[
				11326
			]
		],
		[
			[
				11279,
				11279
			],
			"mapped",
			[
				11327
			]
		],
		[
			[
				11280,
				11280
			],
			"mapped",
			[
				11328
			]
		],
		[
			[
				11281,
				11281
			],
			"mapped",
			[
				11329
			]
		],
		[
			[
				11282,
				11282
			],
			"mapped",
			[
				11330
			]
		],
		[
			[
				11283,
				11283
			],
			"mapped",
			[
				11331
			]
		],
		[
			[
				11284,
				11284
			],
			"mapped",
			[
				11332
			]
		],
		[
			[
				11285,
				11285
			],
			"mapped",
			[
				11333
			]
		],
		[
			[
				11286,
				11286
			],
			"mapped",
			[
				11334
			]
		],
		[
			[
				11287,
				11287
			],
			"mapped",
			[
				11335
			]
		],
		[
			[
				11288,
				11288
			],
			"mapped",
			[
				11336
			]
		],
		[
			[
				11289,
				11289
			],
			"mapped",
			[
				11337
			]
		],
		[
			[
				11290,
				11290
			],
			"mapped",
			[
				11338
			]
		],
		[
			[
				11291,
				11291
			],
			"mapped",
			[
				11339
			]
		],
		[
			[
				11292,
				11292
			],
			"mapped",
			[
				11340
			]
		],
		[
			[
				11293,
				11293
			],
			"mapped",
			[
				11341
			]
		],
		[
			[
				11294,
				11294
			],
			"mapped",
			[
				11342
			]
		],
		[
			[
				11295,
				11295
			],
			"mapped",
			[
				11343
			]
		],
		[
			[
				11296,
				11296
			],
			"mapped",
			[
				11344
			]
		],
		[
			[
				11297,
				11297
			],
			"mapped",
			[
				11345
			]
		],
		[
			[
				11298,
				11298
			],
			"mapped",
			[
				11346
			]
		],
		[
			[
				11299,
				11299
			],
			"mapped",
			[
				11347
			]
		],
		[
			[
				11300,
				11300
			],
			"mapped",
			[
				11348
			]
		],
		[
			[
				11301,
				11301
			],
			"mapped",
			[
				11349
			]
		],
		[
			[
				11302,
				11302
			],
			"mapped",
			[
				11350
			]
		],
		[
			[
				11303,
				11303
			],
			"mapped",
			[
				11351
			]
		],
		[
			[
				11304,
				11304
			],
			"mapped",
			[
				11352
			]
		],
		[
			[
				11305,
				11305
			],
			"mapped",
			[
				11353
			]
		],
		[
			[
				11306,
				11306
			],
			"mapped",
			[
				11354
			]
		],
		[
			[
				11307,
				11307
			],
			"mapped",
			[
				11355
			]
		],
		[
			[
				11308,
				11308
			],
			"mapped",
			[
				11356
			]
		],
		[
			[
				11309,
				11309
			],
			"mapped",
			[
				11357
			]
		],
		[
			[
				11310,
				11310
			],
			"mapped",
			[
				11358
			]
		],
		[
			[
				11311,
				11311
			],
			"disallowed"
		],
		[
			[
				11312,
				11358
			],
			"valid"
		],
		[
			[
				11359,
				11359
			],
			"disallowed"
		],
		[
			[
				11360,
				11360
			],
			"mapped",
			[
				11361
			]
		],
		[
			[
				11361,
				11361
			],
			"valid"
		],
		[
			[
				11362,
				11362
			],
			"mapped",
			[
				619
			]
		],
		[
			[
				11363,
				11363
			],
			"mapped",
			[
				7549
			]
		],
		[
			[
				11364,
				11364
			],
			"mapped",
			[
				637
			]
		],
		[
			[
				11365,
				11366
			],
			"valid"
		],
		[
			[
				11367,
				11367
			],
			"mapped",
			[
				11368
			]
		],
		[
			[
				11368,
				11368
			],
			"valid"
		],
		[
			[
				11369,
				11369
			],
			"mapped",
			[
				11370
			]
		],
		[
			[
				11370,
				11370
			],
			"valid"
		],
		[
			[
				11371,
				11371
			],
			"mapped",
			[
				11372
			]
		],
		[
			[
				11372,
				11372
			],
			"valid"
		],
		[
			[
				11373,
				11373
			],
			"mapped",
			[
				593
			]
		],
		[
			[
				11374,
				11374
			],
			"mapped",
			[
				625
			]
		],
		[
			[
				11375,
				11375
			],
			"mapped",
			[
				592
			]
		],
		[
			[
				11376,
				11376
			],
			"mapped",
			[
				594
			]
		],
		[
			[
				11377,
				11377
			],
			"valid"
		],
		[
			[
				11378,
				11378
			],
			"mapped",
			[
				11379
			]
		],
		[
			[
				11379,
				11379
			],
			"valid"
		],
		[
			[
				11380,
				11380
			],
			"valid"
		],
		[
			[
				11381,
				11381
			],
			"mapped",
			[
				11382
			]
		],
		[
			[
				11382,
				11383
			],
			"valid"
		],
		[
			[
				11384,
				11387
			],
			"valid"
		],
		[
			[
				11388,
				11388
			],
			"mapped",
			[
				106
			]
		],
		[
			[
				11389,
				11389
			],
			"mapped",
			[
				118
			]
		],
		[
			[
				11390,
				11390
			],
			"mapped",
			[
				575
			]
		],
		[
			[
				11391,
				11391
			],
			"mapped",
			[
				576
			]
		],
		[
			[
				11392,
				11392
			],
			"mapped",
			[
				11393
			]
		],
		[
			[
				11393,
				11393
			],
			"valid"
		],
		[
			[
				11394,
				11394
			],
			"mapped",
			[
				11395
			]
		],
		[
			[
				11395,
				11395
			],
			"valid"
		],
		[
			[
				11396,
				11396
			],
			"mapped",
			[
				11397
			]
		],
		[
			[
				11397,
				11397
			],
			"valid"
		],
		[
			[
				11398,
				11398
			],
			"mapped",
			[
				11399
			]
		],
		[
			[
				11399,
				11399
			],
			"valid"
		],
		[
			[
				11400,
				11400
			],
			"mapped",
			[
				11401
			]
		],
		[
			[
				11401,
				11401
			],
			"valid"
		],
		[
			[
				11402,
				11402
			],
			"mapped",
			[
				11403
			]
		],
		[
			[
				11403,
				11403
			],
			"valid"
		],
		[
			[
				11404,
				11404
			],
			"mapped",
			[
				11405
			]
		],
		[
			[
				11405,
				11405
			],
			"valid"
		],
		[
			[
				11406,
				11406
			],
			"mapped",
			[
				11407
			]
		],
		[
			[
				11407,
				11407
			],
			"valid"
		],
		[
			[
				11408,
				11408
			],
			"mapped",
			[
				11409
			]
		],
		[
			[
				11409,
				11409
			],
			"valid"
		],
		[
			[
				11410,
				11410
			],
			"mapped",
			[
				11411
			]
		],
		[
			[
				11411,
				11411
			],
			"valid"
		],
		[
			[
				11412,
				11412
			],
			"mapped",
			[
				11413
			]
		],
		[
			[
				11413,
				11413
			],
			"valid"
		],
		[
			[
				11414,
				11414
			],
			"mapped",
			[
				11415
			]
		],
		[
			[
				11415,
				11415
			],
			"valid"
		],
		[
			[
				11416,
				11416
			],
			"mapped",
			[
				11417
			]
		],
		[
			[
				11417,
				11417
			],
			"valid"
		],
		[
			[
				11418,
				11418
			],
			"mapped",
			[
				11419
			]
		],
		[
			[
				11419,
				11419
			],
			"valid"
		],
		[
			[
				11420,
				11420
			],
			"mapped",
			[
				11421
			]
		],
		[
			[
				11421,
				11421
			],
			"valid"
		],
		[
			[
				11422,
				11422
			],
			"mapped",
			[
				11423
			]
		],
		[
			[
				11423,
				11423
			],
			"valid"
		],
		[
			[
				11424,
				11424
			],
			"mapped",
			[
				11425
			]
		],
		[
			[
				11425,
				11425
			],
			"valid"
		],
		[
			[
				11426,
				11426
			],
			"mapped",
			[
				11427
			]
		],
		[
			[
				11427,
				11427
			],
			"valid"
		],
		[
			[
				11428,
				11428
			],
			"mapped",
			[
				11429
			]
		],
		[
			[
				11429,
				11429
			],
			"valid"
		],
		[
			[
				11430,
				11430
			],
			"mapped",
			[
				11431
			]
		],
		[
			[
				11431,
				11431
			],
			"valid"
		],
		[
			[
				11432,
				11432
			],
			"mapped",
			[
				11433
			]
		],
		[
			[
				11433,
				11433
			],
			"valid"
		],
		[
			[
				11434,
				11434
			],
			"mapped",
			[
				11435
			]
		],
		[
			[
				11435,
				11435
			],
			"valid"
		],
		[
			[
				11436,
				11436
			],
			"mapped",
			[
				11437
			]
		],
		[
			[
				11437,
				11437
			],
			"valid"
		],
		[
			[
				11438,
				11438
			],
			"mapped",
			[
				11439
			]
		],
		[
			[
				11439,
				11439
			],
			"valid"
		],
		[
			[
				11440,
				11440
			],
			"mapped",
			[
				11441
			]
		],
		[
			[
				11441,
				11441
			],
			"valid"
		],
		[
			[
				11442,
				11442
			],
			"mapped",
			[
				11443
			]
		],
		[
			[
				11443,
				11443
			],
			"valid"
		],
		[
			[
				11444,
				11444
			],
			"mapped",
			[
				11445
			]
		],
		[
			[
				11445,
				11445
			],
			"valid"
		],
		[
			[
				11446,
				11446
			],
			"mapped",
			[
				11447
			]
		],
		[
			[
				11447,
				11447
			],
			"valid"
		],
		[
			[
				11448,
				11448
			],
			"mapped",
			[
				11449
			]
		],
		[
			[
				11449,
				11449
			],
			"valid"
		],
		[
			[
				11450,
				11450
			],
			"mapped",
			[
				11451
			]
		],
		[
			[
				11451,
				11451
			],
			"valid"
		],
		[
			[
				11452,
				11452
			],
			"mapped",
			[
				11453
			]
		],
		[
			[
				11453,
				11453
			],
			"valid"
		],
		[
			[
				11454,
				11454
			],
			"mapped",
			[
				11455
			]
		],
		[
			[
				11455,
				11455
			],
			"valid"
		],
		[
			[
				11456,
				11456
			],
			"mapped",
			[
				11457
			]
		],
		[
			[
				11457,
				11457
			],
			"valid"
		],
		[
			[
				11458,
				11458
			],
			"mapped",
			[
				11459
			]
		],
		[
			[
				11459,
				11459
			],
			"valid"
		],
		[
			[
				11460,
				11460
			],
			"mapped",
			[
				11461
			]
		],
		[
			[
				11461,
				11461
			],
			"valid"
		],
		[
			[
				11462,
				11462
			],
			"mapped",
			[
				11463
			]
		],
		[
			[
				11463,
				11463
			],
			"valid"
		],
		[
			[
				11464,
				11464
			],
			"mapped",
			[
				11465
			]
		],
		[
			[
				11465,
				11465
			],
			"valid"
		],
		[
			[
				11466,
				11466
			],
			"mapped",
			[
				11467
			]
		],
		[
			[
				11467,
				11467
			],
			"valid"
		],
		[
			[
				11468,
				11468
			],
			"mapped",
			[
				11469
			]
		],
		[
			[
				11469,
				11469
			],
			"valid"
		],
		[
			[
				11470,
				11470
			],
			"mapped",
			[
				11471
			]
		],
		[
			[
				11471,
				11471
			],
			"valid"
		],
		[
			[
				11472,
				11472
			],
			"mapped",
			[
				11473
			]
		],
		[
			[
				11473,
				11473
			],
			"valid"
		],
		[
			[
				11474,
				11474
			],
			"mapped",
			[
				11475
			]
		],
		[
			[
				11475,
				11475
			],
			"valid"
		],
		[
			[
				11476,
				11476
			],
			"mapped",
			[
				11477
			]
		],
		[
			[
				11477,
				11477
			],
			"valid"
		],
		[
			[
				11478,
				11478
			],
			"mapped",
			[
				11479
			]
		],
		[
			[
				11479,
				11479
			],
			"valid"
		],
		[
			[
				11480,
				11480
			],
			"mapped",
			[
				11481
			]
		],
		[
			[
				11481,
				11481
			],
			"valid"
		],
		[
			[
				11482,
				11482
			],
			"mapped",
			[
				11483
			]
		],
		[
			[
				11483,
				11483
			],
			"valid"
		],
		[
			[
				11484,
				11484
			],
			"mapped",
			[
				11485
			]
		],
		[
			[
				11485,
				11485
			],
			"valid"
		],
		[
			[
				11486,
				11486
			],
			"mapped",
			[
				11487
			]
		],
		[
			[
				11487,
				11487
			],
			"valid"
		],
		[
			[
				11488,
				11488
			],
			"mapped",
			[
				11489
			]
		],
		[
			[
				11489,
				11489
			],
			"valid"
		],
		[
			[
				11490,
				11490
			],
			"mapped",
			[
				11491
			]
		],
		[
			[
				11491,
				11492
			],
			"valid"
		],
		[
			[
				11493,
				11498
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11499,
				11499
			],
			"mapped",
			[
				11500
			]
		],
		[
			[
				11500,
				11500
			],
			"valid"
		],
		[
			[
				11501,
				11501
			],
			"mapped",
			[
				11502
			]
		],
		[
			[
				11502,
				11505
			],
			"valid"
		],
		[
			[
				11506,
				11506
			],
			"mapped",
			[
				11507
			]
		],
		[
			[
				11507,
				11507
			],
			"valid"
		],
		[
			[
				11508,
				11512
			],
			"disallowed"
		],
		[
			[
				11513,
				11519
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11520,
				11557
			],
			"valid"
		],
		[
			[
				11558,
				11558
			],
			"disallowed"
		],
		[
			[
				11559,
				11559
			],
			"valid"
		],
		[
			[
				11560,
				11564
			],
			"disallowed"
		],
		[
			[
				11565,
				11565
			],
			"valid"
		],
		[
			[
				11566,
				11567
			],
			"disallowed"
		],
		[
			[
				11568,
				11621
			],
			"valid"
		],
		[
			[
				11622,
				11623
			],
			"valid"
		],
		[
			[
				11624,
				11630
			],
			"disallowed"
		],
		[
			[
				11631,
				11631
			],
			"mapped",
			[
				11617
			]
		],
		[
			[
				11632,
				11632
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11633,
				11646
			],
			"disallowed"
		],
		[
			[
				11647,
				11647
			],
			"valid"
		],
		[
			[
				11648,
				11670
			],
			"valid"
		],
		[
			[
				11671,
				11679
			],
			"disallowed"
		],
		[
			[
				11680,
				11686
			],
			"valid"
		],
		[
			[
				11687,
				11687
			],
			"disallowed"
		],
		[
			[
				11688,
				11694
			],
			"valid"
		],
		[
			[
				11695,
				11695
			],
			"disallowed"
		],
		[
			[
				11696,
				11702
			],
			"valid"
		],
		[
			[
				11703,
				11703
			],
			"disallowed"
		],
		[
			[
				11704,
				11710
			],
			"valid"
		],
		[
			[
				11711,
				11711
			],
			"disallowed"
		],
		[
			[
				11712,
				11718
			],
			"valid"
		],
		[
			[
				11719,
				11719
			],
			"disallowed"
		],
		[
			[
				11720,
				11726
			],
			"valid"
		],
		[
			[
				11727,
				11727
			],
			"disallowed"
		],
		[
			[
				11728,
				11734
			],
			"valid"
		],
		[
			[
				11735,
				11735
			],
			"disallowed"
		],
		[
			[
				11736,
				11742
			],
			"valid"
		],
		[
			[
				11743,
				11743
			],
			"disallowed"
		],
		[
			[
				11744,
				11775
			],
			"valid"
		],
		[
			[
				11776,
				11799
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11800,
				11803
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11804,
				11805
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11806,
				11822
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11823,
				11823
			],
			"valid"
		],
		[
			[
				11824,
				11824
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11825,
				11825
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11826,
				11835
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11836,
				11842
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11843,
				11903
			],
			"disallowed"
		],
		[
			[
				11904,
				11929
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11930,
				11930
			],
			"disallowed"
		],
		[
			[
				11931,
				11934
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				11935,
				11935
			],
			"mapped",
			[
				27597
			]
		],
		[
			[
				11936,
				12018
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12019,
				12019
			],
			"mapped",
			[
				40863
			]
		],
		[
			[
				12020,
				12031
			],
			"disallowed"
		],
		[
			[
				12032,
				12032
			],
			"mapped",
			[
				19968
			]
		],
		[
			[
				12033,
				12033
			],
			"mapped",
			[
				20008
			]
		],
		[
			[
				12034,
				12034
			],
			"mapped",
			[
				20022
			]
		],
		[
			[
				12035,
				12035
			],
			"mapped",
			[
				20031
			]
		],
		[
			[
				12036,
				12036
			],
			"mapped",
			[
				20057
			]
		],
		[
			[
				12037,
				12037
			],
			"mapped",
			[
				20101
			]
		],
		[
			[
				12038,
				12038
			],
			"mapped",
			[
				20108
			]
		],
		[
			[
				12039,
				12039
			],
			"mapped",
			[
				20128
			]
		],
		[
			[
				12040,
				12040
			],
			"mapped",
			[
				20154
			]
		],
		[
			[
				12041,
				12041
			],
			"mapped",
			[
				20799
			]
		],
		[
			[
				12042,
				12042
			],
			"mapped",
			[
				20837
			]
		],
		[
			[
				12043,
				12043
			],
			"mapped",
			[
				20843
			]
		],
		[
			[
				12044,
				12044
			],
			"mapped",
			[
				20866
			]
		],
		[
			[
				12045,
				12045
			],
			"mapped",
			[
				20886
			]
		],
		[
			[
				12046,
				12046
			],
			"mapped",
			[
				20907
			]
		],
		[
			[
				12047,
				12047
			],
			"mapped",
			[
				20960
			]
		],
		[
			[
				12048,
				12048
			],
			"mapped",
			[
				20981
			]
		],
		[
			[
				12049,
				12049
			],
			"mapped",
			[
				20992
			]
		],
		[
			[
				12050,
				12050
			],
			"mapped",
			[
				21147
			]
		],
		[
			[
				12051,
				12051
			],
			"mapped",
			[
				21241
			]
		],
		[
			[
				12052,
				12052
			],
			"mapped",
			[
				21269
			]
		],
		[
			[
				12053,
				12053
			],
			"mapped",
			[
				21274
			]
		],
		[
			[
				12054,
				12054
			],
			"mapped",
			[
				21304
			]
		],
		[
			[
				12055,
				12055
			],
			"mapped",
			[
				21313
			]
		],
		[
			[
				12056,
				12056
			],
			"mapped",
			[
				21340
			]
		],
		[
			[
				12057,
				12057
			],
			"mapped",
			[
				21353
			]
		],
		[
			[
				12058,
				12058
			],
			"mapped",
			[
				21378
			]
		],
		[
			[
				12059,
				12059
			],
			"mapped",
			[
				21430
			]
		],
		[
			[
				12060,
				12060
			],
			"mapped",
			[
				21448
			]
		],
		[
			[
				12061,
				12061
			],
			"mapped",
			[
				21475
			]
		],
		[
			[
				12062,
				12062
			],
			"mapped",
			[
				22231
			]
		],
		[
			[
				12063,
				12063
			],
			"mapped",
			[
				22303
			]
		],
		[
			[
				12064,
				12064
			],
			"mapped",
			[
				22763
			]
		],
		[
			[
				12065,
				12065
			],
			"mapped",
			[
				22786
			]
		],
		[
			[
				12066,
				12066
			],
			"mapped",
			[
				22794
			]
		],
		[
			[
				12067,
				12067
			],
			"mapped",
			[
				22805
			]
		],
		[
			[
				12068,
				12068
			],
			"mapped",
			[
				22823
			]
		],
		[
			[
				12069,
				12069
			],
			"mapped",
			[
				22899
			]
		],
		[
			[
				12070,
				12070
			],
			"mapped",
			[
				23376
			]
		],
		[
			[
				12071,
				12071
			],
			"mapped",
			[
				23424
			]
		],
		[
			[
				12072,
				12072
			],
			"mapped",
			[
				23544
			]
		],
		[
			[
				12073,
				12073
			],
			"mapped",
			[
				23567
			]
		],
		[
			[
				12074,
				12074
			],
			"mapped",
			[
				23586
			]
		],
		[
			[
				12075,
				12075
			],
			"mapped",
			[
				23608
			]
		],
		[
			[
				12076,
				12076
			],
			"mapped",
			[
				23662
			]
		],
		[
			[
				12077,
				12077
			],
			"mapped",
			[
				23665
			]
		],
		[
			[
				12078,
				12078
			],
			"mapped",
			[
				24027
			]
		],
		[
			[
				12079,
				12079
			],
			"mapped",
			[
				24037
			]
		],
		[
			[
				12080,
				12080
			],
			"mapped",
			[
				24049
			]
		],
		[
			[
				12081,
				12081
			],
			"mapped",
			[
				24062
			]
		],
		[
			[
				12082,
				12082
			],
			"mapped",
			[
				24178
			]
		],
		[
			[
				12083,
				12083
			],
			"mapped",
			[
				24186
			]
		],
		[
			[
				12084,
				12084
			],
			"mapped",
			[
				24191
			]
		],
		[
			[
				12085,
				12085
			],
			"mapped",
			[
				24308
			]
		],
		[
			[
				12086,
				12086
			],
			"mapped",
			[
				24318
			]
		],
		[
			[
				12087,
				12087
			],
			"mapped",
			[
				24331
			]
		],
		[
			[
				12088,
				12088
			],
			"mapped",
			[
				24339
			]
		],
		[
			[
				12089,
				12089
			],
			"mapped",
			[
				24400
			]
		],
		[
			[
				12090,
				12090
			],
			"mapped",
			[
				24417
			]
		],
		[
			[
				12091,
				12091
			],
			"mapped",
			[
				24435
			]
		],
		[
			[
				12092,
				12092
			],
			"mapped",
			[
				24515
			]
		],
		[
			[
				12093,
				12093
			],
			"mapped",
			[
				25096
			]
		],
		[
			[
				12094,
				12094
			],
			"mapped",
			[
				25142
			]
		],
		[
			[
				12095,
				12095
			],
			"mapped",
			[
				25163
			]
		],
		[
			[
				12096,
				12096
			],
			"mapped",
			[
				25903
			]
		],
		[
			[
				12097,
				12097
			],
			"mapped",
			[
				25908
			]
		],
		[
			[
				12098,
				12098
			],
			"mapped",
			[
				25991
			]
		],
		[
			[
				12099,
				12099
			],
			"mapped",
			[
				26007
			]
		],
		[
			[
				12100,
				12100
			],
			"mapped",
			[
				26020
			]
		],
		[
			[
				12101,
				12101
			],
			"mapped",
			[
				26041
			]
		],
		[
			[
				12102,
				12102
			],
			"mapped",
			[
				26080
			]
		],
		[
			[
				12103,
				12103
			],
			"mapped",
			[
				26085
			]
		],
		[
			[
				12104,
				12104
			],
			"mapped",
			[
				26352
			]
		],
		[
			[
				12105,
				12105
			],
			"mapped",
			[
				26376
			]
		],
		[
			[
				12106,
				12106
			],
			"mapped",
			[
				26408
			]
		],
		[
			[
				12107,
				12107
			],
			"mapped",
			[
				27424
			]
		],
		[
			[
				12108,
				12108
			],
			"mapped",
			[
				27490
			]
		],
		[
			[
				12109,
				12109
			],
			"mapped",
			[
				27513
			]
		],
		[
			[
				12110,
				12110
			],
			"mapped",
			[
				27571
			]
		],
		[
			[
				12111,
				12111
			],
			"mapped",
			[
				27595
			]
		],
		[
			[
				12112,
				12112
			],
			"mapped",
			[
				27604
			]
		],
		[
			[
				12113,
				12113
			],
			"mapped",
			[
				27611
			]
		],
		[
			[
				12114,
				12114
			],
			"mapped",
			[
				27663
			]
		],
		[
			[
				12115,
				12115
			],
			"mapped",
			[
				27668
			]
		],
		[
			[
				12116,
				12116
			],
			"mapped",
			[
				27700
			]
		],
		[
			[
				12117,
				12117
			],
			"mapped",
			[
				28779
			]
		],
		[
			[
				12118,
				12118
			],
			"mapped",
			[
				29226
			]
		],
		[
			[
				12119,
				12119
			],
			"mapped",
			[
				29238
			]
		],
		[
			[
				12120,
				12120
			],
			"mapped",
			[
				29243
			]
		],
		[
			[
				12121,
				12121
			],
			"mapped",
			[
				29247
			]
		],
		[
			[
				12122,
				12122
			],
			"mapped",
			[
				29255
			]
		],
		[
			[
				12123,
				12123
			],
			"mapped",
			[
				29273
			]
		],
		[
			[
				12124,
				12124
			],
			"mapped",
			[
				29275
			]
		],
		[
			[
				12125,
				12125
			],
			"mapped",
			[
				29356
			]
		],
		[
			[
				12126,
				12126
			],
			"mapped",
			[
				29572
			]
		],
		[
			[
				12127,
				12127
			],
			"mapped",
			[
				29577
			]
		],
		[
			[
				12128,
				12128
			],
			"mapped",
			[
				29916
			]
		],
		[
			[
				12129,
				12129
			],
			"mapped",
			[
				29926
			]
		],
		[
			[
				12130,
				12130
			],
			"mapped",
			[
				29976
			]
		],
		[
			[
				12131,
				12131
			],
			"mapped",
			[
				29983
			]
		],
		[
			[
				12132,
				12132
			],
			"mapped",
			[
				29992
			]
		],
		[
			[
				12133,
				12133
			],
			"mapped",
			[
				30000
			]
		],
		[
			[
				12134,
				12134
			],
			"mapped",
			[
				30091
			]
		],
		[
			[
				12135,
				12135
			],
			"mapped",
			[
				30098
			]
		],
		[
			[
				12136,
				12136
			],
			"mapped",
			[
				30326
			]
		],
		[
			[
				12137,
				12137
			],
			"mapped",
			[
				30333
			]
		],
		[
			[
				12138,
				12138
			],
			"mapped",
			[
				30382
			]
		],
		[
			[
				12139,
				12139
			],
			"mapped",
			[
				30399
			]
		],
		[
			[
				12140,
				12140
			],
			"mapped",
			[
				30446
			]
		],
		[
			[
				12141,
				12141
			],
			"mapped",
			[
				30683
			]
		],
		[
			[
				12142,
				12142
			],
			"mapped",
			[
				30690
			]
		],
		[
			[
				12143,
				12143
			],
			"mapped",
			[
				30707
			]
		],
		[
			[
				12144,
				12144
			],
			"mapped",
			[
				31034
			]
		],
		[
			[
				12145,
				12145
			],
			"mapped",
			[
				31160
			]
		],
		[
			[
				12146,
				12146
			],
			"mapped",
			[
				31166
			]
		],
		[
			[
				12147,
				12147
			],
			"mapped",
			[
				31348
			]
		],
		[
			[
				12148,
				12148
			],
			"mapped",
			[
				31435
			]
		],
		[
			[
				12149,
				12149
			],
			"mapped",
			[
				31481
			]
		],
		[
			[
				12150,
				12150
			],
			"mapped",
			[
				31859
			]
		],
		[
			[
				12151,
				12151
			],
			"mapped",
			[
				31992
			]
		],
		[
			[
				12152,
				12152
			],
			"mapped",
			[
				32566
			]
		],
		[
			[
				12153,
				12153
			],
			"mapped",
			[
				32593
			]
		],
		[
			[
				12154,
				12154
			],
			"mapped",
			[
				32650
			]
		],
		[
			[
				12155,
				12155
			],
			"mapped",
			[
				32701
			]
		],
		[
			[
				12156,
				12156
			],
			"mapped",
			[
				32769
			]
		],
		[
			[
				12157,
				12157
			],
			"mapped",
			[
				32780
			]
		],
		[
			[
				12158,
				12158
			],
			"mapped",
			[
				32786
			]
		],
		[
			[
				12159,
				12159
			],
			"mapped",
			[
				32819
			]
		],
		[
			[
				12160,
				12160
			],
			"mapped",
			[
				32895
			]
		],
		[
			[
				12161,
				12161
			],
			"mapped",
			[
				32905
			]
		],
		[
			[
				12162,
				12162
			],
			"mapped",
			[
				33251
			]
		],
		[
			[
				12163,
				12163
			],
			"mapped",
			[
				33258
			]
		],
		[
			[
				12164,
				12164
			],
			"mapped",
			[
				33267
			]
		],
		[
			[
				12165,
				12165
			],
			"mapped",
			[
				33276
			]
		],
		[
			[
				12166,
				12166
			],
			"mapped",
			[
				33292
			]
		],
		[
			[
				12167,
				12167
			],
			"mapped",
			[
				33307
			]
		],
		[
			[
				12168,
				12168
			],
			"mapped",
			[
				33311
			]
		],
		[
			[
				12169,
				12169
			],
			"mapped",
			[
				33390
			]
		],
		[
			[
				12170,
				12170
			],
			"mapped",
			[
				33394
			]
		],
		[
			[
				12171,
				12171
			],
			"mapped",
			[
				33400
			]
		],
		[
			[
				12172,
				12172
			],
			"mapped",
			[
				34381
			]
		],
		[
			[
				12173,
				12173
			],
			"mapped",
			[
				34411
			]
		],
		[
			[
				12174,
				12174
			],
			"mapped",
			[
				34880
			]
		],
		[
			[
				12175,
				12175
			],
			"mapped",
			[
				34892
			]
		],
		[
			[
				12176,
				12176
			],
			"mapped",
			[
				34915
			]
		],
		[
			[
				12177,
				12177
			],
			"mapped",
			[
				35198
			]
		],
		[
			[
				12178,
				12178
			],
			"mapped",
			[
				35211
			]
		],
		[
			[
				12179,
				12179
			],
			"mapped",
			[
				35282
			]
		],
		[
			[
				12180,
				12180
			],
			"mapped",
			[
				35328
			]
		],
		[
			[
				12181,
				12181
			],
			"mapped",
			[
				35895
			]
		],
		[
			[
				12182,
				12182
			],
			"mapped",
			[
				35910
			]
		],
		[
			[
				12183,
				12183
			],
			"mapped",
			[
				35925
			]
		],
		[
			[
				12184,
				12184
			],
			"mapped",
			[
				35960
			]
		],
		[
			[
				12185,
				12185
			],
			"mapped",
			[
				35997
			]
		],
		[
			[
				12186,
				12186
			],
			"mapped",
			[
				36196
			]
		],
		[
			[
				12187,
				12187
			],
			"mapped",
			[
				36208
			]
		],
		[
			[
				12188,
				12188
			],
			"mapped",
			[
				36275
			]
		],
		[
			[
				12189,
				12189
			],
			"mapped",
			[
				36523
			]
		],
		[
			[
				12190,
				12190
			],
			"mapped",
			[
				36554
			]
		],
		[
			[
				12191,
				12191
			],
			"mapped",
			[
				36763
			]
		],
		[
			[
				12192,
				12192
			],
			"mapped",
			[
				36784
			]
		],
		[
			[
				12193,
				12193
			],
			"mapped",
			[
				36789
			]
		],
		[
			[
				12194,
				12194
			],
			"mapped",
			[
				37009
			]
		],
		[
			[
				12195,
				12195
			],
			"mapped",
			[
				37193
			]
		],
		[
			[
				12196,
				12196
			],
			"mapped",
			[
				37318
			]
		],
		[
			[
				12197,
				12197
			],
			"mapped",
			[
				37324
			]
		],
		[
			[
				12198,
				12198
			],
			"mapped",
			[
				37329
			]
		],
		[
			[
				12199,
				12199
			],
			"mapped",
			[
				38263
			]
		],
		[
			[
				12200,
				12200
			],
			"mapped",
			[
				38272
			]
		],
		[
			[
				12201,
				12201
			],
			"mapped",
			[
				38428
			]
		],
		[
			[
				12202,
				12202
			],
			"mapped",
			[
				38582
			]
		],
		[
			[
				12203,
				12203
			],
			"mapped",
			[
				38585
			]
		],
		[
			[
				12204,
				12204
			],
			"mapped",
			[
				38632
			]
		],
		[
			[
				12205,
				12205
			],
			"mapped",
			[
				38737
			]
		],
		[
			[
				12206,
				12206
			],
			"mapped",
			[
				38750
			]
		],
		[
			[
				12207,
				12207
			],
			"mapped",
			[
				38754
			]
		],
		[
			[
				12208,
				12208
			],
			"mapped",
			[
				38761
			]
		],
		[
			[
				12209,
				12209
			],
			"mapped",
			[
				38859
			]
		],
		[
			[
				12210,
				12210
			],
			"mapped",
			[
				38893
			]
		],
		[
			[
				12211,
				12211
			],
			"mapped",
			[
				38899
			]
		],
		[
			[
				12212,
				12212
			],
			"mapped",
			[
				38913
			]
		],
		[
			[
				12213,
				12213
			],
			"mapped",
			[
				39080
			]
		],
		[
			[
				12214,
				12214
			],
			"mapped",
			[
				39131
			]
		],
		[
			[
				12215,
				12215
			],
			"mapped",
			[
				39135
			]
		],
		[
			[
				12216,
				12216
			],
			"mapped",
			[
				39318
			]
		],
		[
			[
				12217,
				12217
			],
			"mapped",
			[
				39321
			]
		],
		[
			[
				12218,
				12218
			],
			"mapped",
			[
				39340
			]
		],
		[
			[
				12219,
				12219
			],
			"mapped",
			[
				39592
			]
		],
		[
			[
				12220,
				12220
			],
			"mapped",
			[
				39640
			]
		],
		[
			[
				12221,
				12221
			],
			"mapped",
			[
				39647
			]
		],
		[
			[
				12222,
				12222
			],
			"mapped",
			[
				39717
			]
		],
		[
			[
				12223,
				12223
			],
			"mapped",
			[
				39727
			]
		],
		[
			[
				12224,
				12224
			],
			"mapped",
			[
				39730
			]
		],
		[
			[
				12225,
				12225
			],
			"mapped",
			[
				39740
			]
		],
		[
			[
				12226,
				12226
			],
			"mapped",
			[
				39770
			]
		],
		[
			[
				12227,
				12227
			],
			"mapped",
			[
				40165
			]
		],
		[
			[
				12228,
				12228
			],
			"mapped",
			[
				40565
			]
		],
		[
			[
				12229,
				12229
			],
			"mapped",
			[
				40575
			]
		],
		[
			[
				12230,
				12230
			],
			"mapped",
			[
				40613
			]
		],
		[
			[
				12231,
				12231
			],
			"mapped",
			[
				40635
			]
		],
		[
			[
				12232,
				12232
			],
			"mapped",
			[
				40643
			]
		],
		[
			[
				12233,
				12233
			],
			"mapped",
			[
				40653
			]
		],
		[
			[
				12234,
				12234
			],
			"mapped",
			[
				40657
			]
		],
		[
			[
				12235,
				12235
			],
			"mapped",
			[
				40697
			]
		],
		[
			[
				12236,
				12236
			],
			"mapped",
			[
				40701
			]
		],
		[
			[
				12237,
				12237
			],
			"mapped",
			[
				40718
			]
		],
		[
			[
				12238,
				12238
			],
			"mapped",
			[
				40723
			]
		],
		[
			[
				12239,
				12239
			],
			"mapped",
			[
				40736
			]
		],
		[
			[
				12240,
				12240
			],
			"mapped",
			[
				40763
			]
		],
		[
			[
				12241,
				12241
			],
			"mapped",
			[
				40778
			]
		],
		[
			[
				12242,
				12242
			],
			"mapped",
			[
				40786
			]
		],
		[
			[
				12243,
				12243
			],
			"mapped",
			[
				40845
			]
		],
		[
			[
				12244,
				12244
			],
			"mapped",
			[
				40860
			]
		],
		[
			[
				12245,
				12245
			],
			"mapped",
			[
				40864
			]
		],
		[
			[
				12246,
				12271
			],
			"disallowed"
		],
		[
			[
				12272,
				12283
			],
			"disallowed"
		],
		[
			[
				12284,
				12287
			],
			"disallowed"
		],
		[
			[
				12288,
				12288
			],
			"disallowed_STD3_mapped",
			[
				32
			]
		],
		[
			[
				12289,
				12289
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12290,
				12290
			],
			"mapped",
			[
				46
			]
		],
		[
			[
				12291,
				12292
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12293,
				12295
			],
			"valid"
		],
		[
			[
				12296,
				12329
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12330,
				12333
			],
			"valid"
		],
		[
			[
				12334,
				12341
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12342,
				12342
			],
			"mapped",
			[
				12306
			]
		],
		[
			[
				12343,
				12343
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12344,
				12344
			],
			"mapped",
			[
				21313
			]
		],
		[
			[
				12345,
				12345
			],
			"mapped",
			[
				21316
			]
		],
		[
			[
				12346,
				12346
			],
			"mapped",
			[
				21317
			]
		],
		[
			[
				12347,
				12347
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12348,
				12348
			],
			"valid"
		],
		[
			[
				12349,
				12349
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12350,
				12350
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12351,
				12351
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12352,
				12352
			],
			"disallowed"
		],
		[
			[
				12353,
				12436
			],
			"valid"
		],
		[
			[
				12437,
				12438
			],
			"valid"
		],
		[
			[
				12439,
				12440
			],
			"disallowed"
		],
		[
			[
				12441,
				12442
			],
			"valid"
		],
		[
			[
				12443,
				12443
			],
			"disallowed_STD3_mapped",
			[
				32,
				12441
			]
		],
		[
			[
				12444,
				12444
			],
			"disallowed_STD3_mapped",
			[
				32,
				12442
			]
		],
		[
			[
				12445,
				12446
			],
			"valid"
		],
		[
			[
				12447,
				12447
			],
			"mapped",
			[
				12424,
				12426
			]
		],
		[
			[
				12448,
				12448
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12449,
				12542
			],
			"valid"
		],
		[
			[
				12543,
				12543
			],
			"mapped",
			[
				12467,
				12488
			]
		],
		[
			[
				12544,
				12548
			],
			"disallowed"
		],
		[
			[
				12549,
				12588
			],
			"valid"
		],
		[
			[
				12589,
				12589
			],
			"valid"
		],
		[
			[
				12590,
				12592
			],
			"disallowed"
		],
		[
			[
				12593,
				12593
			],
			"mapped",
			[
				4352
			]
		],
		[
			[
				12594,
				12594
			],
			"mapped",
			[
				4353
			]
		],
		[
			[
				12595,
				12595
			],
			"mapped",
			[
				4522
			]
		],
		[
			[
				12596,
				12596
			],
			"mapped",
			[
				4354
			]
		],
		[
			[
				12597,
				12597
			],
			"mapped",
			[
				4524
			]
		],
		[
			[
				12598,
				12598
			],
			"mapped",
			[
				4525
			]
		],
		[
			[
				12599,
				12599
			],
			"mapped",
			[
				4355
			]
		],
		[
			[
				12600,
				12600
			],
			"mapped",
			[
				4356
			]
		],
		[
			[
				12601,
				12601
			],
			"mapped",
			[
				4357
			]
		],
		[
			[
				12602,
				12602
			],
			"mapped",
			[
				4528
			]
		],
		[
			[
				12603,
				12603
			],
			"mapped",
			[
				4529
			]
		],
		[
			[
				12604,
				12604
			],
			"mapped",
			[
				4530
			]
		],
		[
			[
				12605,
				12605
			],
			"mapped",
			[
				4531
			]
		],
		[
			[
				12606,
				12606
			],
			"mapped",
			[
				4532
			]
		],
		[
			[
				12607,
				12607
			],
			"mapped",
			[
				4533
			]
		],
		[
			[
				12608,
				12608
			],
			"mapped",
			[
				4378
			]
		],
		[
			[
				12609,
				12609
			],
			"mapped",
			[
				4358
			]
		],
		[
			[
				12610,
				12610
			],
			"mapped",
			[
				4359
			]
		],
		[
			[
				12611,
				12611
			],
			"mapped",
			[
				4360
			]
		],
		[
			[
				12612,
				12612
			],
			"mapped",
			[
				4385
			]
		],
		[
			[
				12613,
				12613
			],
			"mapped",
			[
				4361
			]
		],
		[
			[
				12614,
				12614
			],
			"mapped",
			[
				4362
			]
		],
		[
			[
				12615,
				12615
			],
			"mapped",
			[
				4363
			]
		],
		[
			[
				12616,
				12616
			],
			"mapped",
			[
				4364
			]
		],
		[
			[
				12617,
				12617
			],
			"mapped",
			[
				4365
			]
		],
		[
			[
				12618,
				12618
			],
			"mapped",
			[
				4366
			]
		],
		[
			[
				12619,
				12619
			],
			"mapped",
			[
				4367
			]
		],
		[
			[
				12620,
				12620
			],
			"mapped",
			[
				4368
			]
		],
		[
			[
				12621,
				12621
			],
			"mapped",
			[
				4369
			]
		],
		[
			[
				12622,
				12622
			],
			"mapped",
			[
				4370
			]
		],
		[
			[
				12623,
				12623
			],
			"mapped",
			[
				4449
			]
		],
		[
			[
				12624,
				12624
			],
			"mapped",
			[
				4450
			]
		],
		[
			[
				12625,
				12625
			],
			"mapped",
			[
				4451
			]
		],
		[
			[
				12626,
				12626
			],
			"mapped",
			[
				4452
			]
		],
		[
			[
				12627,
				12627
			],
			"mapped",
			[
				4453
			]
		],
		[
			[
				12628,
				12628
			],
			"mapped",
			[
				4454
			]
		],
		[
			[
				12629,
				12629
			],
			"mapped",
			[
				4455
			]
		],
		[
			[
				12630,
				12630
			],
			"mapped",
			[
				4456
			]
		],
		[
			[
				12631,
				12631
			],
			"mapped",
			[
				4457
			]
		],
		[
			[
				12632,
				12632
			],
			"mapped",
			[
				4458
			]
		],
		[
			[
				12633,
				12633
			],
			"mapped",
			[
				4459
			]
		],
		[
			[
				12634,
				12634
			],
			"mapped",
			[
				4460
			]
		],
		[
			[
				12635,
				12635
			],
			"mapped",
			[
				4461
			]
		],
		[
			[
				12636,
				12636
			],
			"mapped",
			[
				4462
			]
		],
		[
			[
				12637,
				12637
			],
			"mapped",
			[
				4463
			]
		],
		[
			[
				12638,
				12638
			],
			"mapped",
			[
				4464
			]
		],
		[
			[
				12639,
				12639
			],
			"mapped",
			[
				4465
			]
		],
		[
			[
				12640,
				12640
			],
			"mapped",
			[
				4466
			]
		],
		[
			[
				12641,
				12641
			],
			"mapped",
			[
				4467
			]
		],
		[
			[
				12642,
				12642
			],
			"mapped",
			[
				4468
			]
		],
		[
			[
				12643,
				12643
			],
			"mapped",
			[
				4469
			]
		],
		[
			[
				12644,
				12644
			],
			"disallowed"
		],
		[
			[
				12645,
				12645
			],
			"mapped",
			[
				4372
			]
		],
		[
			[
				12646,
				12646
			],
			"mapped",
			[
				4373
			]
		],
		[
			[
				12647,
				12647
			],
			"mapped",
			[
				4551
			]
		],
		[
			[
				12648,
				12648
			],
			"mapped",
			[
				4552
			]
		],
		[
			[
				12649,
				12649
			],
			"mapped",
			[
				4556
			]
		],
		[
			[
				12650,
				12650
			],
			"mapped",
			[
				4558
			]
		],
		[
			[
				12651,
				12651
			],
			"mapped",
			[
				4563
			]
		],
		[
			[
				12652,
				12652
			],
			"mapped",
			[
				4567
			]
		],
		[
			[
				12653,
				12653
			],
			"mapped",
			[
				4569
			]
		],
		[
			[
				12654,
				12654
			],
			"mapped",
			[
				4380
			]
		],
		[
			[
				12655,
				12655
			],
			"mapped",
			[
				4573
			]
		],
		[
			[
				12656,
				12656
			],
			"mapped",
			[
				4575
			]
		],
		[
			[
				12657,
				12657
			],
			"mapped",
			[
				4381
			]
		],
		[
			[
				12658,
				12658
			],
			"mapped",
			[
				4382
			]
		],
		[
			[
				12659,
				12659
			],
			"mapped",
			[
				4384
			]
		],
		[
			[
				12660,
				12660
			],
			"mapped",
			[
				4386
			]
		],
		[
			[
				12661,
				12661
			],
			"mapped",
			[
				4387
			]
		],
		[
			[
				12662,
				12662
			],
			"mapped",
			[
				4391
			]
		],
		[
			[
				12663,
				12663
			],
			"mapped",
			[
				4393
			]
		],
		[
			[
				12664,
				12664
			],
			"mapped",
			[
				4395
			]
		],
		[
			[
				12665,
				12665
			],
			"mapped",
			[
				4396
			]
		],
		[
			[
				12666,
				12666
			],
			"mapped",
			[
				4397
			]
		],
		[
			[
				12667,
				12667
			],
			"mapped",
			[
				4398
			]
		],
		[
			[
				12668,
				12668
			],
			"mapped",
			[
				4399
			]
		],
		[
			[
				12669,
				12669
			],
			"mapped",
			[
				4402
			]
		],
		[
			[
				12670,
				12670
			],
			"mapped",
			[
				4406
			]
		],
		[
			[
				12671,
				12671
			],
			"mapped",
			[
				4416
			]
		],
		[
			[
				12672,
				12672
			],
			"mapped",
			[
				4423
			]
		],
		[
			[
				12673,
				12673
			],
			"mapped",
			[
				4428
			]
		],
		[
			[
				12674,
				12674
			],
			"mapped",
			[
				4593
			]
		],
		[
			[
				12675,
				12675
			],
			"mapped",
			[
				4594
			]
		],
		[
			[
				12676,
				12676
			],
			"mapped",
			[
				4439
			]
		],
		[
			[
				12677,
				12677
			],
			"mapped",
			[
				4440
			]
		],
		[
			[
				12678,
				12678
			],
			"mapped",
			[
				4441
			]
		],
		[
			[
				12679,
				12679
			],
			"mapped",
			[
				4484
			]
		],
		[
			[
				12680,
				12680
			],
			"mapped",
			[
				4485
			]
		],
		[
			[
				12681,
				12681
			],
			"mapped",
			[
				4488
			]
		],
		[
			[
				12682,
				12682
			],
			"mapped",
			[
				4497
			]
		],
		[
			[
				12683,
				12683
			],
			"mapped",
			[
				4498
			]
		],
		[
			[
				12684,
				12684
			],
			"mapped",
			[
				4500
			]
		],
		[
			[
				12685,
				12685
			],
			"mapped",
			[
				4510
			]
		],
		[
			[
				12686,
				12686
			],
			"mapped",
			[
				4513
			]
		],
		[
			[
				12687,
				12687
			],
			"disallowed"
		],
		[
			[
				12688,
				12689
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12690,
				12690
			],
			"mapped",
			[
				19968
			]
		],
		[
			[
				12691,
				12691
			],
			"mapped",
			[
				20108
			]
		],
		[
			[
				12692,
				12692
			],
			"mapped",
			[
				19977
			]
		],
		[
			[
				12693,
				12693
			],
			"mapped",
			[
				22235
			]
		],
		[
			[
				12694,
				12694
			],
			"mapped",
			[
				19978
			]
		],
		[
			[
				12695,
				12695
			],
			"mapped",
			[
				20013
			]
		],
		[
			[
				12696,
				12696
			],
			"mapped",
			[
				19979
			]
		],
		[
			[
				12697,
				12697
			],
			"mapped",
			[
				30002
			]
		],
		[
			[
				12698,
				12698
			],
			"mapped",
			[
				20057
			]
		],
		[
			[
				12699,
				12699
			],
			"mapped",
			[
				19993
			]
		],
		[
			[
				12700,
				12700
			],
			"mapped",
			[
				19969
			]
		],
		[
			[
				12701,
				12701
			],
			"mapped",
			[
				22825
			]
		],
		[
			[
				12702,
				12702
			],
			"mapped",
			[
				22320
			]
		],
		[
			[
				12703,
				12703
			],
			"mapped",
			[
				20154
			]
		],
		[
			[
				12704,
				12727
			],
			"valid"
		],
		[
			[
				12728,
				12730
			],
			"valid"
		],
		[
			[
				12731,
				12735
			],
			"disallowed"
		],
		[
			[
				12736,
				12751
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12752,
				12771
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12772,
				12783
			],
			"disallowed"
		],
		[
			[
				12784,
				12799
			],
			"valid"
		],
		[
			[
				12800,
				12800
			],
			"disallowed_STD3_mapped",
			[
				40,
				4352,
				41
			]
		],
		[
			[
				12801,
				12801
			],
			"disallowed_STD3_mapped",
			[
				40,
				4354,
				41
			]
		],
		[
			[
				12802,
				12802
			],
			"disallowed_STD3_mapped",
			[
				40,
				4355,
				41
			]
		],
		[
			[
				12803,
				12803
			],
			"disallowed_STD3_mapped",
			[
				40,
				4357,
				41
			]
		],
		[
			[
				12804,
				12804
			],
			"disallowed_STD3_mapped",
			[
				40,
				4358,
				41
			]
		],
		[
			[
				12805,
				12805
			],
			"disallowed_STD3_mapped",
			[
				40,
				4359,
				41
			]
		],
		[
			[
				12806,
				12806
			],
			"disallowed_STD3_mapped",
			[
				40,
				4361,
				41
			]
		],
		[
			[
				12807,
				12807
			],
			"disallowed_STD3_mapped",
			[
				40,
				4363,
				41
			]
		],
		[
			[
				12808,
				12808
			],
			"disallowed_STD3_mapped",
			[
				40,
				4364,
				41
			]
		],
		[
			[
				12809,
				12809
			],
			"disallowed_STD3_mapped",
			[
				40,
				4366,
				41
			]
		],
		[
			[
				12810,
				12810
			],
			"disallowed_STD3_mapped",
			[
				40,
				4367,
				41
			]
		],
		[
			[
				12811,
				12811
			],
			"disallowed_STD3_mapped",
			[
				40,
				4368,
				41
			]
		],
		[
			[
				12812,
				12812
			],
			"disallowed_STD3_mapped",
			[
				40,
				4369,
				41
			]
		],
		[
			[
				12813,
				12813
			],
			"disallowed_STD3_mapped",
			[
				40,
				4370,
				41
			]
		],
		[
			[
				12814,
				12814
			],
			"disallowed_STD3_mapped",
			[
				40,
				44032,
				41
			]
		],
		[
			[
				12815,
				12815
			],
			"disallowed_STD3_mapped",
			[
				40,
				45208,
				41
			]
		],
		[
			[
				12816,
				12816
			],
			"disallowed_STD3_mapped",
			[
				40,
				45796,
				41
			]
		],
		[
			[
				12817,
				12817
			],
			"disallowed_STD3_mapped",
			[
				40,
				46972,
				41
			]
		],
		[
			[
				12818,
				12818
			],
			"disallowed_STD3_mapped",
			[
				40,
				47560,
				41
			]
		],
		[
			[
				12819,
				12819
			],
			"disallowed_STD3_mapped",
			[
				40,
				48148,
				41
			]
		],
		[
			[
				12820,
				12820
			],
			"disallowed_STD3_mapped",
			[
				40,
				49324,
				41
			]
		],
		[
			[
				12821,
				12821
			],
			"disallowed_STD3_mapped",
			[
				40,
				50500,
				41
			]
		],
		[
			[
				12822,
				12822
			],
			"disallowed_STD3_mapped",
			[
				40,
				51088,
				41
			]
		],
		[
			[
				12823,
				12823
			],
			"disallowed_STD3_mapped",
			[
				40,
				52264,
				41
			]
		],
		[
			[
				12824,
				12824
			],
			"disallowed_STD3_mapped",
			[
				40,
				52852,
				41
			]
		],
		[
			[
				12825,
				12825
			],
			"disallowed_STD3_mapped",
			[
				40,
				53440,
				41
			]
		],
		[
			[
				12826,
				12826
			],
			"disallowed_STD3_mapped",
			[
				40,
				54028,
				41
			]
		],
		[
			[
				12827,
				12827
			],
			"disallowed_STD3_mapped",
			[
				40,
				54616,
				41
			]
		],
		[
			[
				12828,
				12828
			],
			"disallowed_STD3_mapped",
			[
				40,
				51452,
				41
			]
		],
		[
			[
				12829,
				12829
			],
			"disallowed_STD3_mapped",
			[
				40,
				50724,
				51204,
				41
			]
		],
		[
			[
				12830,
				12830
			],
			"disallowed_STD3_mapped",
			[
				40,
				50724,
				54980,
				41
			]
		],
		[
			[
				12831,
				12831
			],
			"disallowed"
		],
		[
			[
				12832,
				12832
			],
			"disallowed_STD3_mapped",
			[
				40,
				19968,
				41
			]
		],
		[
			[
				12833,
				12833
			],
			"disallowed_STD3_mapped",
			[
				40,
				20108,
				41
			]
		],
		[
			[
				12834,
				12834
			],
			"disallowed_STD3_mapped",
			[
				40,
				19977,
				41
			]
		],
		[
			[
				12835,
				12835
			],
			"disallowed_STD3_mapped",
			[
				40,
				22235,
				41
			]
		],
		[
			[
				12836,
				12836
			],
			"disallowed_STD3_mapped",
			[
				40,
				20116,
				41
			]
		],
		[
			[
				12837,
				12837
			],
			"disallowed_STD3_mapped",
			[
				40,
				20845,
				41
			]
		],
		[
			[
				12838,
				12838
			],
			"disallowed_STD3_mapped",
			[
				40,
				19971,
				41
			]
		],
		[
			[
				12839,
				12839
			],
			"disallowed_STD3_mapped",
			[
				40,
				20843,
				41
			]
		],
		[
			[
				12840,
				12840
			],
			"disallowed_STD3_mapped",
			[
				40,
				20061,
				41
			]
		],
		[
			[
				12841,
				12841
			],
			"disallowed_STD3_mapped",
			[
				40,
				21313,
				41
			]
		],
		[
			[
				12842,
				12842
			],
			"disallowed_STD3_mapped",
			[
				40,
				26376,
				41
			]
		],
		[
			[
				12843,
				12843
			],
			"disallowed_STD3_mapped",
			[
				40,
				28779,
				41
			]
		],
		[
			[
				12844,
				12844
			],
			"disallowed_STD3_mapped",
			[
				40,
				27700,
				41
			]
		],
		[
			[
				12845,
				12845
			],
			"disallowed_STD3_mapped",
			[
				40,
				26408,
				41
			]
		],
		[
			[
				12846,
				12846
			],
			"disallowed_STD3_mapped",
			[
				40,
				37329,
				41
			]
		],
		[
			[
				12847,
				12847
			],
			"disallowed_STD3_mapped",
			[
				40,
				22303,
				41
			]
		],
		[
			[
				12848,
				12848
			],
			"disallowed_STD3_mapped",
			[
				40,
				26085,
				41
			]
		],
		[
			[
				12849,
				12849
			],
			"disallowed_STD3_mapped",
			[
				40,
				26666,
				41
			]
		],
		[
			[
				12850,
				12850
			],
			"disallowed_STD3_mapped",
			[
				40,
				26377,
				41
			]
		],
		[
			[
				12851,
				12851
			],
			"disallowed_STD3_mapped",
			[
				40,
				31038,
				41
			]
		],
		[
			[
				12852,
				12852
			],
			"disallowed_STD3_mapped",
			[
				40,
				21517,
				41
			]
		],
		[
			[
				12853,
				12853
			],
			"disallowed_STD3_mapped",
			[
				40,
				29305,
				41
			]
		],
		[
			[
				12854,
				12854
			],
			"disallowed_STD3_mapped",
			[
				40,
				36001,
				41
			]
		],
		[
			[
				12855,
				12855
			],
			"disallowed_STD3_mapped",
			[
				40,
				31069,
				41
			]
		],
		[
			[
				12856,
				12856
			],
			"disallowed_STD3_mapped",
			[
				40,
				21172,
				41
			]
		],
		[
			[
				12857,
				12857
			],
			"disallowed_STD3_mapped",
			[
				40,
				20195,
				41
			]
		],
		[
			[
				12858,
				12858
			],
			"disallowed_STD3_mapped",
			[
				40,
				21628,
				41
			]
		],
		[
			[
				12859,
				12859
			],
			"disallowed_STD3_mapped",
			[
				40,
				23398,
				41
			]
		],
		[
			[
				12860,
				12860
			],
			"disallowed_STD3_mapped",
			[
				40,
				30435,
				41
			]
		],
		[
			[
				12861,
				12861
			],
			"disallowed_STD3_mapped",
			[
				40,
				20225,
				41
			]
		],
		[
			[
				12862,
				12862
			],
			"disallowed_STD3_mapped",
			[
				40,
				36039,
				41
			]
		],
		[
			[
				12863,
				12863
			],
			"disallowed_STD3_mapped",
			[
				40,
				21332,
				41
			]
		],
		[
			[
				12864,
				12864
			],
			"disallowed_STD3_mapped",
			[
				40,
				31085,
				41
			]
		],
		[
			[
				12865,
				12865
			],
			"disallowed_STD3_mapped",
			[
				40,
				20241,
				41
			]
		],
		[
			[
				12866,
				12866
			],
			"disallowed_STD3_mapped",
			[
				40,
				33258,
				41
			]
		],
		[
			[
				12867,
				12867
			],
			"disallowed_STD3_mapped",
			[
				40,
				33267,
				41
			]
		],
		[
			[
				12868,
				12868
			],
			"mapped",
			[
				21839
			]
		],
		[
			[
				12869,
				12869
			],
			"mapped",
			[
				24188
			]
		],
		[
			[
				12870,
				12870
			],
			"mapped",
			[
				25991
			]
		],
		[
			[
				12871,
				12871
			],
			"mapped",
			[
				31631
			]
		],
		[
			[
				12872,
				12879
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12880,
				12880
			],
			"mapped",
			[
				112,
				116,
				101
			]
		],
		[
			[
				12881,
				12881
			],
			"mapped",
			[
				50,
				49
			]
		],
		[
			[
				12882,
				12882
			],
			"mapped",
			[
				50,
				50
			]
		],
		[
			[
				12883,
				12883
			],
			"mapped",
			[
				50,
				51
			]
		],
		[
			[
				12884,
				12884
			],
			"mapped",
			[
				50,
				52
			]
		],
		[
			[
				12885,
				12885
			],
			"mapped",
			[
				50,
				53
			]
		],
		[
			[
				12886,
				12886
			],
			"mapped",
			[
				50,
				54
			]
		],
		[
			[
				12887,
				12887
			],
			"mapped",
			[
				50,
				55
			]
		],
		[
			[
				12888,
				12888
			],
			"mapped",
			[
				50,
				56
			]
		],
		[
			[
				12889,
				12889
			],
			"mapped",
			[
				50,
				57
			]
		],
		[
			[
				12890,
				12890
			],
			"mapped",
			[
				51,
				48
			]
		],
		[
			[
				12891,
				12891
			],
			"mapped",
			[
				51,
				49
			]
		],
		[
			[
				12892,
				12892
			],
			"mapped",
			[
				51,
				50
			]
		],
		[
			[
				12893,
				12893
			],
			"mapped",
			[
				51,
				51
			]
		],
		[
			[
				12894,
				12894
			],
			"mapped",
			[
				51,
				52
			]
		],
		[
			[
				12895,
				12895
			],
			"mapped",
			[
				51,
				53
			]
		],
		[
			[
				12896,
				12896
			],
			"mapped",
			[
				4352
			]
		],
		[
			[
				12897,
				12897
			],
			"mapped",
			[
				4354
			]
		],
		[
			[
				12898,
				12898
			],
			"mapped",
			[
				4355
			]
		],
		[
			[
				12899,
				12899
			],
			"mapped",
			[
				4357
			]
		],
		[
			[
				12900,
				12900
			],
			"mapped",
			[
				4358
			]
		],
		[
			[
				12901,
				12901
			],
			"mapped",
			[
				4359
			]
		],
		[
			[
				12902,
				12902
			],
			"mapped",
			[
				4361
			]
		],
		[
			[
				12903,
				12903
			],
			"mapped",
			[
				4363
			]
		],
		[
			[
				12904,
				12904
			],
			"mapped",
			[
				4364
			]
		],
		[
			[
				12905,
				12905
			],
			"mapped",
			[
				4366
			]
		],
		[
			[
				12906,
				12906
			],
			"mapped",
			[
				4367
			]
		],
		[
			[
				12907,
				12907
			],
			"mapped",
			[
				4368
			]
		],
		[
			[
				12908,
				12908
			],
			"mapped",
			[
				4369
			]
		],
		[
			[
				12909,
				12909
			],
			"mapped",
			[
				4370
			]
		],
		[
			[
				12910,
				12910
			],
			"mapped",
			[
				44032
			]
		],
		[
			[
				12911,
				12911
			],
			"mapped",
			[
				45208
			]
		],
		[
			[
				12912,
				12912
			],
			"mapped",
			[
				45796
			]
		],
		[
			[
				12913,
				12913
			],
			"mapped",
			[
				46972
			]
		],
		[
			[
				12914,
				12914
			],
			"mapped",
			[
				47560
			]
		],
		[
			[
				12915,
				12915
			],
			"mapped",
			[
				48148
			]
		],
		[
			[
				12916,
				12916
			],
			"mapped",
			[
				49324
			]
		],
		[
			[
				12917,
				12917
			],
			"mapped",
			[
				50500
			]
		],
		[
			[
				12918,
				12918
			],
			"mapped",
			[
				51088
			]
		],
		[
			[
				12919,
				12919
			],
			"mapped",
			[
				52264
			]
		],
		[
			[
				12920,
				12920
			],
			"mapped",
			[
				52852
			]
		],
		[
			[
				12921,
				12921
			],
			"mapped",
			[
				53440
			]
		],
		[
			[
				12922,
				12922
			],
			"mapped",
			[
				54028
			]
		],
		[
			[
				12923,
				12923
			],
			"mapped",
			[
				54616
			]
		],
		[
			[
				12924,
				12924
			],
			"mapped",
			[
				52280,
				44256
			]
		],
		[
			[
				12925,
				12925
			],
			"mapped",
			[
				51452,
				51032
			]
		],
		[
			[
				12926,
				12926
			],
			"mapped",
			[
				50864
			]
		],
		[
			[
				12927,
				12927
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				12928,
				12928
			],
			"mapped",
			[
				19968
			]
		],
		[
			[
				12929,
				12929
			],
			"mapped",
			[
				20108
			]
		],
		[
			[
				12930,
				12930
			],
			"mapped",
			[
				19977
			]
		],
		[
			[
				12931,
				12931
			],
			"mapped",
			[
				22235
			]
		],
		[
			[
				12932,
				12932
			],
			"mapped",
			[
				20116
			]
		],
		[
			[
				12933,
				12933
			],
			"mapped",
			[
				20845
			]
		],
		[
			[
				12934,
				12934
			],
			"mapped",
			[
				19971
			]
		],
		[
			[
				12935,
				12935
			],
			"mapped",
			[
				20843
			]
		],
		[
			[
				12936,
				12936
			],
			"mapped",
			[
				20061
			]
		],
		[
			[
				12937,
				12937
			],
			"mapped",
			[
				21313
			]
		],
		[
			[
				12938,
				12938
			],
			"mapped",
			[
				26376
			]
		],
		[
			[
				12939,
				12939
			],
			"mapped",
			[
				28779
			]
		],
		[
			[
				12940,
				12940
			],
			"mapped",
			[
				27700
			]
		],
		[
			[
				12941,
				12941
			],
			"mapped",
			[
				26408
			]
		],
		[
			[
				12942,
				12942
			],
			"mapped",
			[
				37329
			]
		],
		[
			[
				12943,
				12943
			],
			"mapped",
			[
				22303
			]
		],
		[
			[
				12944,
				12944
			],
			"mapped",
			[
				26085
			]
		],
		[
			[
				12945,
				12945
			],
			"mapped",
			[
				26666
			]
		],
		[
			[
				12946,
				12946
			],
			"mapped",
			[
				26377
			]
		],
		[
			[
				12947,
				12947
			],
			"mapped",
			[
				31038
			]
		],
		[
			[
				12948,
				12948
			],
			"mapped",
			[
				21517
			]
		],
		[
			[
				12949,
				12949
			],
			"mapped",
			[
				29305
			]
		],
		[
			[
				12950,
				12950
			],
			"mapped",
			[
				36001
			]
		],
		[
			[
				12951,
				12951
			],
			"mapped",
			[
				31069
			]
		],
		[
			[
				12952,
				12952
			],
			"mapped",
			[
				21172
			]
		],
		[
			[
				12953,
				12953
			],
			"mapped",
			[
				31192
			]
		],
		[
			[
				12954,
				12954
			],
			"mapped",
			[
				30007
			]
		],
		[
			[
				12955,
				12955
			],
			"mapped",
			[
				22899
			]
		],
		[
			[
				12956,
				12956
			],
			"mapped",
			[
				36969
			]
		],
		[
			[
				12957,
				12957
			],
			"mapped",
			[
				20778
			]
		],
		[
			[
				12958,
				12958
			],
			"mapped",
			[
				21360
			]
		],
		[
			[
				12959,
				12959
			],
			"mapped",
			[
				27880
			]
		],
		[
			[
				12960,
				12960
			],
			"mapped",
			[
				38917
			]
		],
		[
			[
				12961,
				12961
			],
			"mapped",
			[
				20241
			]
		],
		[
			[
				12962,
				12962
			],
			"mapped",
			[
				20889
			]
		],
		[
			[
				12963,
				12963
			],
			"mapped",
			[
				27491
			]
		],
		[
			[
				12964,
				12964
			],
			"mapped",
			[
				19978
			]
		],
		[
			[
				12965,
				12965
			],
			"mapped",
			[
				20013
			]
		],
		[
			[
				12966,
				12966
			],
			"mapped",
			[
				19979
			]
		],
		[
			[
				12967,
				12967
			],
			"mapped",
			[
				24038
			]
		],
		[
			[
				12968,
				12968
			],
			"mapped",
			[
				21491
			]
		],
		[
			[
				12969,
				12969
			],
			"mapped",
			[
				21307
			]
		],
		[
			[
				12970,
				12970
			],
			"mapped",
			[
				23447
			]
		],
		[
			[
				12971,
				12971
			],
			"mapped",
			[
				23398
			]
		],
		[
			[
				12972,
				12972
			],
			"mapped",
			[
				30435
			]
		],
		[
			[
				12973,
				12973
			],
			"mapped",
			[
				20225
			]
		],
		[
			[
				12974,
				12974
			],
			"mapped",
			[
				36039
			]
		],
		[
			[
				12975,
				12975
			],
			"mapped",
			[
				21332
			]
		],
		[
			[
				12976,
				12976
			],
			"mapped",
			[
				22812
			]
		],
		[
			[
				12977,
				12977
			],
			"mapped",
			[
				51,
				54
			]
		],
		[
			[
				12978,
				12978
			],
			"mapped",
			[
				51,
				55
			]
		],
		[
			[
				12979,
				12979
			],
			"mapped",
			[
				51,
				56
			]
		],
		[
			[
				12980,
				12980
			],
			"mapped",
			[
				51,
				57
			]
		],
		[
			[
				12981,
				12981
			],
			"mapped",
			[
				52,
				48
			]
		],
		[
			[
				12982,
				12982
			],
			"mapped",
			[
				52,
				49
			]
		],
		[
			[
				12983,
				12983
			],
			"mapped",
			[
				52,
				50
			]
		],
		[
			[
				12984,
				12984
			],
			"mapped",
			[
				52,
				51
			]
		],
		[
			[
				12985,
				12985
			],
			"mapped",
			[
				52,
				52
			]
		],
		[
			[
				12986,
				12986
			],
			"mapped",
			[
				52,
				53
			]
		],
		[
			[
				12987,
				12987
			],
			"mapped",
			[
				52,
				54
			]
		],
		[
			[
				12988,
				12988
			],
			"mapped",
			[
				52,
				55
			]
		],
		[
			[
				12989,
				12989
			],
			"mapped",
			[
				52,
				56
			]
		],
		[
			[
				12990,
				12990
			],
			"mapped",
			[
				52,
				57
			]
		],
		[
			[
				12991,
				12991
			],
			"mapped",
			[
				53,
				48
			]
		],
		[
			[
				12992,
				12992
			],
			"mapped",
			[
				49,
				26376
			]
		],
		[
			[
				12993,
				12993
			],
			"mapped",
			[
				50,
				26376
			]
		],
		[
			[
				12994,
				12994
			],
			"mapped",
			[
				51,
				26376
			]
		],
		[
			[
				12995,
				12995
			],
			"mapped",
			[
				52,
				26376
			]
		],
		[
			[
				12996,
				12996
			],
			"mapped",
			[
				53,
				26376
			]
		],
		[
			[
				12997,
				12997
			],
			"mapped",
			[
				54,
				26376
			]
		],
		[
			[
				12998,
				12998
			],
			"mapped",
			[
				55,
				26376
			]
		],
		[
			[
				12999,
				12999
			],
			"mapped",
			[
				56,
				26376
			]
		],
		[
			[
				13000,
				13000
			],
			"mapped",
			[
				57,
				26376
			]
		],
		[
			[
				13001,
				13001
			],
			"mapped",
			[
				49,
				48,
				26376
			]
		],
		[
			[
				13002,
				13002
			],
			"mapped",
			[
				49,
				49,
				26376
			]
		],
		[
			[
				13003,
				13003
			],
			"mapped",
			[
				49,
				50,
				26376
			]
		],
		[
			[
				13004,
				13004
			],
			"mapped",
			[
				104,
				103
			]
		],
		[
			[
				13005,
				13005
			],
			"mapped",
			[
				101,
				114,
				103
			]
		],
		[
			[
				13006,
				13006
			],
			"mapped",
			[
				101,
				118
			]
		],
		[
			[
				13007,
				13007
			],
			"mapped",
			[
				108,
				116,
				100
			]
		],
		[
			[
				13008,
				13008
			],
			"mapped",
			[
				12450
			]
		],
		[
			[
				13009,
				13009
			],
			"mapped",
			[
				12452
			]
		],
		[
			[
				13010,
				13010
			],
			"mapped",
			[
				12454
			]
		],
		[
			[
				13011,
				13011
			],
			"mapped",
			[
				12456
			]
		],
		[
			[
				13012,
				13012
			],
			"mapped",
			[
				12458
			]
		],
		[
			[
				13013,
				13013
			],
			"mapped",
			[
				12459
			]
		],
		[
			[
				13014,
				13014
			],
			"mapped",
			[
				12461
			]
		],
		[
			[
				13015,
				13015
			],
			"mapped",
			[
				12463
			]
		],
		[
			[
				13016,
				13016
			],
			"mapped",
			[
				12465
			]
		],
		[
			[
				13017,
				13017
			],
			"mapped",
			[
				12467
			]
		],
		[
			[
				13018,
				13018
			],
			"mapped",
			[
				12469
			]
		],
		[
			[
				13019,
				13019
			],
			"mapped",
			[
				12471
			]
		],
		[
			[
				13020,
				13020
			],
			"mapped",
			[
				12473
			]
		],
		[
			[
				13021,
				13021
			],
			"mapped",
			[
				12475
			]
		],
		[
			[
				13022,
				13022
			],
			"mapped",
			[
				12477
			]
		],
		[
			[
				13023,
				13023
			],
			"mapped",
			[
				12479
			]
		],
		[
			[
				13024,
				13024
			],
			"mapped",
			[
				12481
			]
		],
		[
			[
				13025,
				13025
			],
			"mapped",
			[
				12484
			]
		],
		[
			[
				13026,
				13026
			],
			"mapped",
			[
				12486
			]
		],
		[
			[
				13027,
				13027
			],
			"mapped",
			[
				12488
			]
		],
		[
			[
				13028,
				13028
			],
			"mapped",
			[
				12490
			]
		],
		[
			[
				13029,
				13029
			],
			"mapped",
			[
				12491
			]
		],
		[
			[
				13030,
				13030
			],
			"mapped",
			[
				12492
			]
		],
		[
			[
				13031,
				13031
			],
			"mapped",
			[
				12493
			]
		],
		[
			[
				13032,
				13032
			],
			"mapped",
			[
				12494
			]
		],
		[
			[
				13033,
				13033
			],
			"mapped",
			[
				12495
			]
		],
		[
			[
				13034,
				13034
			],
			"mapped",
			[
				12498
			]
		],
		[
			[
				13035,
				13035
			],
			"mapped",
			[
				12501
			]
		],
		[
			[
				13036,
				13036
			],
			"mapped",
			[
				12504
			]
		],
		[
			[
				13037,
				13037
			],
			"mapped",
			[
				12507
			]
		],
		[
			[
				13038,
				13038
			],
			"mapped",
			[
				12510
			]
		],
		[
			[
				13039,
				13039
			],
			"mapped",
			[
				12511
			]
		],
		[
			[
				13040,
				13040
			],
			"mapped",
			[
				12512
			]
		],
		[
			[
				13041,
				13041
			],
			"mapped",
			[
				12513
			]
		],
		[
			[
				13042,
				13042
			],
			"mapped",
			[
				12514
			]
		],
		[
			[
				13043,
				13043
			],
			"mapped",
			[
				12516
			]
		],
		[
			[
				13044,
				13044
			],
			"mapped",
			[
				12518
			]
		],
		[
			[
				13045,
				13045
			],
			"mapped",
			[
				12520
			]
		],
		[
			[
				13046,
				13046
			],
			"mapped",
			[
				12521
			]
		],
		[
			[
				13047,
				13047
			],
			"mapped",
			[
				12522
			]
		],
		[
			[
				13048,
				13048
			],
			"mapped",
			[
				12523
			]
		],
		[
			[
				13049,
				13049
			],
			"mapped",
			[
				12524
			]
		],
		[
			[
				13050,
				13050
			],
			"mapped",
			[
				12525
			]
		],
		[
			[
				13051,
				13051
			],
			"mapped",
			[
				12527
			]
		],
		[
			[
				13052,
				13052
			],
			"mapped",
			[
				12528
			]
		],
		[
			[
				13053,
				13053
			],
			"mapped",
			[
				12529
			]
		],
		[
			[
				13054,
				13054
			],
			"mapped",
			[
				12530
			]
		],
		[
			[
				13055,
				13055
			],
			"disallowed"
		],
		[
			[
				13056,
				13056
			],
			"mapped",
			[
				12450,
				12497,
				12540,
				12488
			]
		],
		[
			[
				13057,
				13057
			],
			"mapped",
			[
				12450,
				12523,
				12501,
				12449
			]
		],
		[
			[
				13058,
				13058
			],
			"mapped",
			[
				12450,
				12531,
				12506,
				12450
			]
		],
		[
			[
				13059,
				13059
			],
			"mapped",
			[
				12450,
				12540,
				12523
			]
		],
		[
			[
				13060,
				13060
			],
			"mapped",
			[
				12452,
				12491,
				12531,
				12464
			]
		],
		[
			[
				13061,
				13061
			],
			"mapped",
			[
				12452,
				12531,
				12481
			]
		],
		[
			[
				13062,
				13062
			],
			"mapped",
			[
				12454,
				12457,
				12531
			]
		],
		[
			[
				13063,
				13063
			],
			"mapped",
			[
				12456,
				12473,
				12463,
				12540,
				12489
			]
		],
		[
			[
				13064,
				13064
			],
			"mapped",
			[
				12456,
				12540,
				12459,
				12540
			]
		],
		[
			[
				13065,
				13065
			],
			"mapped",
			[
				12458,
				12531,
				12473
			]
		],
		[
			[
				13066,
				13066
			],
			"mapped",
			[
				12458,
				12540,
				12512
			]
		],
		[
			[
				13067,
				13067
			],
			"mapped",
			[
				12459,
				12452,
				12522
			]
		],
		[
			[
				13068,
				13068
			],
			"mapped",
			[
				12459,
				12521,
				12483,
				12488
			]
		],
		[
			[
				13069,
				13069
			],
			"mapped",
			[
				12459,
				12525,
				12522,
				12540
			]
		],
		[
			[
				13070,
				13070
			],
			"mapped",
			[
				12460,
				12525,
				12531
			]
		],
		[
			[
				13071,
				13071
			],
			"mapped",
			[
				12460,
				12531,
				12510
			]
		],
		[
			[
				13072,
				13072
			],
			"mapped",
			[
				12462,
				12460
			]
		],
		[
			[
				13073,
				13073
			],
			"mapped",
			[
				12462,
				12491,
				12540
			]
		],
		[
			[
				13074,
				13074
			],
			"mapped",
			[
				12461,
				12517,
				12522,
				12540
			]
		],
		[
			[
				13075,
				13075
			],
			"mapped",
			[
				12462,
				12523,
				12480,
				12540
			]
		],
		[
			[
				13076,
				13076
			],
			"mapped",
			[
				12461,
				12525
			]
		],
		[
			[
				13077,
				13077
			],
			"mapped",
			[
				12461,
				12525,
				12464,
				12521,
				12512
			]
		],
		[
			[
				13078,
				13078
			],
			"mapped",
			[
				12461,
				12525,
				12513,
				12540,
				12488,
				12523
			]
		],
		[
			[
				13079,
				13079
			],
			"mapped",
			[
				12461,
				12525,
				12527,
				12483,
				12488
			]
		],
		[
			[
				13080,
				13080
			],
			"mapped",
			[
				12464,
				12521,
				12512
			]
		],
		[
			[
				13081,
				13081
			],
			"mapped",
			[
				12464,
				12521,
				12512,
				12488,
				12531
			]
		],
		[
			[
				13082,
				13082
			],
			"mapped",
			[
				12463,
				12523,
				12476,
				12452,
				12525
			]
		],
		[
			[
				13083,
				13083
			],
			"mapped",
			[
				12463,
				12525,
				12540,
				12493
			]
		],
		[
			[
				13084,
				13084
			],
			"mapped",
			[
				12465,
				12540,
				12473
			]
		],
		[
			[
				13085,
				13085
			],
			"mapped",
			[
				12467,
				12523,
				12490
			]
		],
		[
			[
				13086,
				13086
			],
			"mapped",
			[
				12467,
				12540,
				12509
			]
		],
		[
			[
				13087,
				13087
			],
			"mapped",
			[
				12469,
				12452,
				12463,
				12523
			]
		],
		[
			[
				13088,
				13088
			],
			"mapped",
			[
				12469,
				12531,
				12481,
				12540,
				12512
			]
		],
		[
			[
				13089,
				13089
			],
			"mapped",
			[
				12471,
				12522,
				12531,
				12464
			]
		],
		[
			[
				13090,
				13090
			],
			"mapped",
			[
				12475,
				12531,
				12481
			]
		],
		[
			[
				13091,
				13091
			],
			"mapped",
			[
				12475,
				12531,
				12488
			]
		],
		[
			[
				13092,
				13092
			],
			"mapped",
			[
				12480,
				12540,
				12473
			]
		],
		[
			[
				13093,
				13093
			],
			"mapped",
			[
				12487,
				12471
			]
		],
		[
			[
				13094,
				13094
			],
			"mapped",
			[
				12489,
				12523
			]
		],
		[
			[
				13095,
				13095
			],
			"mapped",
			[
				12488,
				12531
			]
		],
		[
			[
				13096,
				13096
			],
			"mapped",
			[
				12490,
				12494
			]
		],
		[
			[
				13097,
				13097
			],
			"mapped",
			[
				12494,
				12483,
				12488
			]
		],
		[
			[
				13098,
				13098
			],
			"mapped",
			[
				12495,
				12452,
				12484
			]
		],
		[
			[
				13099,
				13099
			],
			"mapped",
			[
				12497,
				12540,
				12475,
				12531,
				12488
			]
		],
		[
			[
				13100,
				13100
			],
			"mapped",
			[
				12497,
				12540,
				12484
			]
		],
		[
			[
				13101,
				13101
			],
			"mapped",
			[
				12496,
				12540,
				12524,
				12523
			]
		],
		[
			[
				13102,
				13102
			],
			"mapped",
			[
				12500,
				12450,
				12473,
				12488,
				12523
			]
		],
		[
			[
				13103,
				13103
			],
			"mapped",
			[
				12500,
				12463,
				12523
			]
		],
		[
			[
				13104,
				13104
			],
			"mapped",
			[
				12500,
				12467
			]
		],
		[
			[
				13105,
				13105
			],
			"mapped",
			[
				12499,
				12523
			]
		],
		[
			[
				13106,
				13106
			],
			"mapped",
			[
				12501,
				12449,
				12521,
				12483,
				12489
			]
		],
		[
			[
				13107,
				13107
			],
			"mapped",
			[
				12501,
				12451,
				12540,
				12488
			]
		],
		[
			[
				13108,
				13108
			],
			"mapped",
			[
				12502,
				12483,
				12471,
				12455,
				12523
			]
		],
		[
			[
				13109,
				13109
			],
			"mapped",
			[
				12501,
				12521,
				12531
			]
		],
		[
			[
				13110,
				13110
			],
			"mapped",
			[
				12504,
				12463,
				12479,
				12540,
				12523
			]
		],
		[
			[
				13111,
				13111
			],
			"mapped",
			[
				12506,
				12477
			]
		],
		[
			[
				13112,
				13112
			],
			"mapped",
			[
				12506,
				12491,
				12498
			]
		],
		[
			[
				13113,
				13113
			],
			"mapped",
			[
				12504,
				12523,
				12484
			]
		],
		[
			[
				13114,
				13114
			],
			"mapped",
			[
				12506,
				12531,
				12473
			]
		],
		[
			[
				13115,
				13115
			],
			"mapped",
			[
				12506,
				12540,
				12472
			]
		],
		[
			[
				13116,
				13116
			],
			"mapped",
			[
				12505,
				12540,
				12479
			]
		],
		[
			[
				13117,
				13117
			],
			"mapped",
			[
				12509,
				12452,
				12531,
				12488
			]
		],
		[
			[
				13118,
				13118
			],
			"mapped",
			[
				12508,
				12523,
				12488
			]
		],
		[
			[
				13119,
				13119
			],
			"mapped",
			[
				12507,
				12531
			]
		],
		[
			[
				13120,
				13120
			],
			"mapped",
			[
				12509,
				12531,
				12489
			]
		],
		[
			[
				13121,
				13121
			],
			"mapped",
			[
				12507,
				12540,
				12523
			]
		],
		[
			[
				13122,
				13122
			],
			"mapped",
			[
				12507,
				12540,
				12531
			]
		],
		[
			[
				13123,
				13123
			],
			"mapped",
			[
				12510,
				12452,
				12463,
				12525
			]
		],
		[
			[
				13124,
				13124
			],
			"mapped",
			[
				12510,
				12452,
				12523
			]
		],
		[
			[
				13125,
				13125
			],
			"mapped",
			[
				12510,
				12483,
				12495
			]
		],
		[
			[
				13126,
				13126
			],
			"mapped",
			[
				12510,
				12523,
				12463
			]
		],
		[
			[
				13127,
				13127
			],
			"mapped",
			[
				12510,
				12531,
				12471,
				12519,
				12531
			]
		],
		[
			[
				13128,
				13128
			],
			"mapped",
			[
				12511,
				12463,
				12525,
				12531
			]
		],
		[
			[
				13129,
				13129
			],
			"mapped",
			[
				12511,
				12522
			]
		],
		[
			[
				13130,
				13130
			],
			"mapped",
			[
				12511,
				12522,
				12496,
				12540,
				12523
			]
		],
		[
			[
				13131,
				13131
			],
			"mapped",
			[
				12513,
				12460
			]
		],
		[
			[
				13132,
				13132
			],
			"mapped",
			[
				12513,
				12460,
				12488,
				12531
			]
		],
		[
			[
				13133,
				13133
			],
			"mapped",
			[
				12513,
				12540,
				12488,
				12523
			]
		],
		[
			[
				13134,
				13134
			],
			"mapped",
			[
				12516,
				12540,
				12489
			]
		],
		[
			[
				13135,
				13135
			],
			"mapped",
			[
				12516,
				12540,
				12523
			]
		],
		[
			[
				13136,
				13136
			],
			"mapped",
			[
				12518,
				12450,
				12531
			]
		],
		[
			[
				13137,
				13137
			],
			"mapped",
			[
				12522,
				12483,
				12488,
				12523
			]
		],
		[
			[
				13138,
				13138
			],
			"mapped",
			[
				12522,
				12521
			]
		],
		[
			[
				13139,
				13139
			],
			"mapped",
			[
				12523,
				12500,
				12540
			]
		],
		[
			[
				13140,
				13140
			],
			"mapped",
			[
				12523,
				12540,
				12502,
				12523
			]
		],
		[
			[
				13141,
				13141
			],
			"mapped",
			[
				12524,
				12512
			]
		],
		[
			[
				13142,
				13142
			],
			"mapped",
			[
				12524,
				12531,
				12488,
				12466,
				12531
			]
		],
		[
			[
				13143,
				13143
			],
			"mapped",
			[
				12527,
				12483,
				12488
			]
		],
		[
			[
				13144,
				13144
			],
			"mapped",
			[
				48,
				28857
			]
		],
		[
			[
				13145,
				13145
			],
			"mapped",
			[
				49,
				28857
			]
		],
		[
			[
				13146,
				13146
			],
			"mapped",
			[
				50,
				28857
			]
		],
		[
			[
				13147,
				13147
			],
			"mapped",
			[
				51,
				28857
			]
		],
		[
			[
				13148,
				13148
			],
			"mapped",
			[
				52,
				28857
			]
		],
		[
			[
				13149,
				13149
			],
			"mapped",
			[
				53,
				28857
			]
		],
		[
			[
				13150,
				13150
			],
			"mapped",
			[
				54,
				28857
			]
		],
		[
			[
				13151,
				13151
			],
			"mapped",
			[
				55,
				28857
			]
		],
		[
			[
				13152,
				13152
			],
			"mapped",
			[
				56,
				28857
			]
		],
		[
			[
				13153,
				13153
			],
			"mapped",
			[
				57,
				28857
			]
		],
		[
			[
				13154,
				13154
			],
			"mapped",
			[
				49,
				48,
				28857
			]
		],
		[
			[
				13155,
				13155
			],
			"mapped",
			[
				49,
				49,
				28857
			]
		],
		[
			[
				13156,
				13156
			],
			"mapped",
			[
				49,
				50,
				28857
			]
		],
		[
			[
				13157,
				13157
			],
			"mapped",
			[
				49,
				51,
				28857
			]
		],
		[
			[
				13158,
				13158
			],
			"mapped",
			[
				49,
				52,
				28857
			]
		],
		[
			[
				13159,
				13159
			],
			"mapped",
			[
				49,
				53,
				28857
			]
		],
		[
			[
				13160,
				13160
			],
			"mapped",
			[
				49,
				54,
				28857
			]
		],
		[
			[
				13161,
				13161
			],
			"mapped",
			[
				49,
				55,
				28857
			]
		],
		[
			[
				13162,
				13162
			],
			"mapped",
			[
				49,
				56,
				28857
			]
		],
		[
			[
				13163,
				13163
			],
			"mapped",
			[
				49,
				57,
				28857
			]
		],
		[
			[
				13164,
				13164
			],
			"mapped",
			[
				50,
				48,
				28857
			]
		],
		[
			[
				13165,
				13165
			],
			"mapped",
			[
				50,
				49,
				28857
			]
		],
		[
			[
				13166,
				13166
			],
			"mapped",
			[
				50,
				50,
				28857
			]
		],
		[
			[
				13167,
				13167
			],
			"mapped",
			[
				50,
				51,
				28857
			]
		],
		[
			[
				13168,
				13168
			],
			"mapped",
			[
				50,
				52,
				28857
			]
		],
		[
			[
				13169,
				13169
			],
			"mapped",
			[
				104,
				112,
				97
			]
		],
		[
			[
				13170,
				13170
			],
			"mapped",
			[
				100,
				97
			]
		],
		[
			[
				13171,
				13171
			],
			"mapped",
			[
				97,
				117
			]
		],
		[
			[
				13172,
				13172
			],
			"mapped",
			[
				98,
				97,
				114
			]
		],
		[
			[
				13173,
				13173
			],
			"mapped",
			[
				111,
				118
			]
		],
		[
			[
				13174,
				13174
			],
			"mapped",
			[
				112,
				99
			]
		],
		[
			[
				13175,
				13175
			],
			"mapped",
			[
				100,
				109
			]
		],
		[
			[
				13176,
				13176
			],
			"mapped",
			[
				100,
				109,
				50
			]
		],
		[
			[
				13177,
				13177
			],
			"mapped",
			[
				100,
				109,
				51
			]
		],
		[
			[
				13178,
				13178
			],
			"mapped",
			[
				105,
				117
			]
		],
		[
			[
				13179,
				13179
			],
			"mapped",
			[
				24179,
				25104
			]
		],
		[
			[
				13180,
				13180
			],
			"mapped",
			[
				26157,
				21644
			]
		],
		[
			[
				13181,
				13181
			],
			"mapped",
			[
				22823,
				27491
			]
		],
		[
			[
				13182,
				13182
			],
			"mapped",
			[
				26126,
				27835
			]
		],
		[
			[
				13183,
				13183
			],
			"mapped",
			[
				26666,
				24335,
				20250,
				31038
			]
		],
		[
			[
				13184,
				13184
			],
			"mapped",
			[
				112,
				97
			]
		],
		[
			[
				13185,
				13185
			],
			"mapped",
			[
				110,
				97
			]
		],
		[
			[
				13186,
				13186
			],
			"mapped",
			[
				956,
				97
			]
		],
		[
			[
				13187,
				13187
			],
			"mapped",
			[
				109,
				97
			]
		],
		[
			[
				13188,
				13188
			],
			"mapped",
			[
				107,
				97
			]
		],
		[
			[
				13189,
				13189
			],
			"mapped",
			[
				107,
				98
			]
		],
		[
			[
				13190,
				13190
			],
			"mapped",
			[
				109,
				98
			]
		],
		[
			[
				13191,
				13191
			],
			"mapped",
			[
				103,
				98
			]
		],
		[
			[
				13192,
				13192
			],
			"mapped",
			[
				99,
				97,
				108
			]
		],
		[
			[
				13193,
				13193
			],
			"mapped",
			[
				107,
				99,
				97,
				108
			]
		],
		[
			[
				13194,
				13194
			],
			"mapped",
			[
				112,
				102
			]
		],
		[
			[
				13195,
				13195
			],
			"mapped",
			[
				110,
				102
			]
		],
		[
			[
				13196,
				13196
			],
			"mapped",
			[
				956,
				102
			]
		],
		[
			[
				13197,
				13197
			],
			"mapped",
			[
				956,
				103
			]
		],
		[
			[
				13198,
				13198
			],
			"mapped",
			[
				109,
				103
			]
		],
		[
			[
				13199,
				13199
			],
			"mapped",
			[
				107,
				103
			]
		],
		[
			[
				13200,
				13200
			],
			"mapped",
			[
				104,
				122
			]
		],
		[
			[
				13201,
				13201
			],
			"mapped",
			[
				107,
				104,
				122
			]
		],
		[
			[
				13202,
				13202
			],
			"mapped",
			[
				109,
				104,
				122
			]
		],
		[
			[
				13203,
				13203
			],
			"mapped",
			[
				103,
				104,
				122
			]
		],
		[
			[
				13204,
				13204
			],
			"mapped",
			[
				116,
				104,
				122
			]
		],
		[
			[
				13205,
				13205
			],
			"mapped",
			[
				956,
				108
			]
		],
		[
			[
				13206,
				13206
			],
			"mapped",
			[
				109,
				108
			]
		],
		[
			[
				13207,
				13207
			],
			"mapped",
			[
				100,
				108
			]
		],
		[
			[
				13208,
				13208
			],
			"mapped",
			[
				107,
				108
			]
		],
		[
			[
				13209,
				13209
			],
			"mapped",
			[
				102,
				109
			]
		],
		[
			[
				13210,
				13210
			],
			"mapped",
			[
				110,
				109
			]
		],
		[
			[
				13211,
				13211
			],
			"mapped",
			[
				956,
				109
			]
		],
		[
			[
				13212,
				13212
			],
			"mapped",
			[
				109,
				109
			]
		],
		[
			[
				13213,
				13213
			],
			"mapped",
			[
				99,
				109
			]
		],
		[
			[
				13214,
				13214
			],
			"mapped",
			[
				107,
				109
			]
		],
		[
			[
				13215,
				13215
			],
			"mapped",
			[
				109,
				109,
				50
			]
		],
		[
			[
				13216,
				13216
			],
			"mapped",
			[
				99,
				109,
				50
			]
		],
		[
			[
				13217,
				13217
			],
			"mapped",
			[
				109,
				50
			]
		],
		[
			[
				13218,
				13218
			],
			"mapped",
			[
				107,
				109,
				50
			]
		],
		[
			[
				13219,
				13219
			],
			"mapped",
			[
				109,
				109,
				51
			]
		],
		[
			[
				13220,
				13220
			],
			"mapped",
			[
				99,
				109,
				51
			]
		],
		[
			[
				13221,
				13221
			],
			"mapped",
			[
				109,
				51
			]
		],
		[
			[
				13222,
				13222
			],
			"mapped",
			[
				107,
				109,
				51
			]
		],
		[
			[
				13223,
				13223
			],
			"mapped",
			[
				109,
				8725,
				115
			]
		],
		[
			[
				13224,
				13224
			],
			"mapped",
			[
				109,
				8725,
				115,
				50
			]
		],
		[
			[
				13225,
				13225
			],
			"mapped",
			[
				112,
				97
			]
		],
		[
			[
				13226,
				13226
			],
			"mapped",
			[
				107,
				112,
				97
			]
		],
		[
			[
				13227,
				13227
			],
			"mapped",
			[
				109,
				112,
				97
			]
		],
		[
			[
				13228,
				13228
			],
			"mapped",
			[
				103,
				112,
				97
			]
		],
		[
			[
				13229,
				13229
			],
			"mapped",
			[
				114,
				97,
				100
			]
		],
		[
			[
				13230,
				13230
			],
			"mapped",
			[
				114,
				97,
				100,
				8725,
				115
			]
		],
		[
			[
				13231,
				13231
			],
			"mapped",
			[
				114,
				97,
				100,
				8725,
				115,
				50
			]
		],
		[
			[
				13232,
				13232
			],
			"mapped",
			[
				112,
				115
			]
		],
		[
			[
				13233,
				13233
			],
			"mapped",
			[
				110,
				115
			]
		],
		[
			[
				13234,
				13234
			],
			"mapped",
			[
				956,
				115
			]
		],
		[
			[
				13235,
				13235
			],
			"mapped",
			[
				109,
				115
			]
		],
		[
			[
				13236,
				13236
			],
			"mapped",
			[
				112,
				118
			]
		],
		[
			[
				13237,
				13237
			],
			"mapped",
			[
				110,
				118
			]
		],
		[
			[
				13238,
				13238
			],
			"mapped",
			[
				956,
				118
			]
		],
		[
			[
				13239,
				13239
			],
			"mapped",
			[
				109,
				118
			]
		],
		[
			[
				13240,
				13240
			],
			"mapped",
			[
				107,
				118
			]
		],
		[
			[
				13241,
				13241
			],
			"mapped",
			[
				109,
				118
			]
		],
		[
			[
				13242,
				13242
			],
			"mapped",
			[
				112,
				119
			]
		],
		[
			[
				13243,
				13243
			],
			"mapped",
			[
				110,
				119
			]
		],
		[
			[
				13244,
				13244
			],
			"mapped",
			[
				956,
				119
			]
		],
		[
			[
				13245,
				13245
			],
			"mapped",
			[
				109,
				119
			]
		],
		[
			[
				13246,
				13246
			],
			"mapped",
			[
				107,
				119
			]
		],
		[
			[
				13247,
				13247
			],
			"mapped",
			[
				109,
				119
			]
		],
		[
			[
				13248,
				13248
			],
			"mapped",
			[
				107,
				969
			]
		],
		[
			[
				13249,
				13249
			],
			"mapped",
			[
				109,
				969
			]
		],
		[
			[
				13250,
				13250
			],
			"disallowed"
		],
		[
			[
				13251,
				13251
			],
			"mapped",
			[
				98,
				113
			]
		],
		[
			[
				13252,
				13252
			],
			"mapped",
			[
				99,
				99
			]
		],
		[
			[
				13253,
				13253
			],
			"mapped",
			[
				99,
				100
			]
		],
		[
			[
				13254,
				13254
			],
			"mapped",
			[
				99,
				8725,
				107,
				103
			]
		],
		[
			[
				13255,
				13255
			],
			"disallowed"
		],
		[
			[
				13256,
				13256
			],
			"mapped",
			[
				100,
				98
			]
		],
		[
			[
				13257,
				13257
			],
			"mapped",
			[
				103,
				121
			]
		],
		[
			[
				13258,
				13258
			],
			"mapped",
			[
				104,
				97
			]
		],
		[
			[
				13259,
				13259
			],
			"mapped",
			[
				104,
				112
			]
		],
		[
			[
				13260,
				13260
			],
			"mapped",
			[
				105,
				110
			]
		],
		[
			[
				13261,
				13261
			],
			"mapped",
			[
				107,
				107
			]
		],
		[
			[
				13262,
				13262
			],
			"mapped",
			[
				107,
				109
			]
		],
		[
			[
				13263,
				13263
			],
			"mapped",
			[
				107,
				116
			]
		],
		[
			[
				13264,
				13264
			],
			"mapped",
			[
				108,
				109
			]
		],
		[
			[
				13265,
				13265
			],
			"mapped",
			[
				108,
				110
			]
		],
		[
			[
				13266,
				13266
			],
			"mapped",
			[
				108,
				111,
				103
			]
		],
		[
			[
				13267,
				13267
			],
			"mapped",
			[
				108,
				120
			]
		],
		[
			[
				13268,
				13268
			],
			"mapped",
			[
				109,
				98
			]
		],
		[
			[
				13269,
				13269
			],
			"mapped",
			[
				109,
				105,
				108
			]
		],
		[
			[
				13270,
				13270
			],
			"mapped",
			[
				109,
				111,
				108
			]
		],
		[
			[
				13271,
				13271
			],
			"mapped",
			[
				112,
				104
			]
		],
		[
			[
				13272,
				13272
			],
			"disallowed"
		],
		[
			[
				13273,
				13273
			],
			"mapped",
			[
				112,
				112,
				109
			]
		],
		[
			[
				13274,
				13274
			],
			"mapped",
			[
				112,
				114
			]
		],
		[
			[
				13275,
				13275
			],
			"mapped",
			[
				115,
				114
			]
		],
		[
			[
				13276,
				13276
			],
			"mapped",
			[
				115,
				118
			]
		],
		[
			[
				13277,
				13277
			],
			"mapped",
			[
				119,
				98
			]
		],
		[
			[
				13278,
				13278
			],
			"mapped",
			[
				118,
				8725,
				109
			]
		],
		[
			[
				13279,
				13279
			],
			"mapped",
			[
				97,
				8725,
				109
			]
		],
		[
			[
				13280,
				13280
			],
			"mapped",
			[
				49,
				26085
			]
		],
		[
			[
				13281,
				13281
			],
			"mapped",
			[
				50,
				26085
			]
		],
		[
			[
				13282,
				13282
			],
			"mapped",
			[
				51,
				26085
			]
		],
		[
			[
				13283,
				13283
			],
			"mapped",
			[
				52,
				26085
			]
		],
		[
			[
				13284,
				13284
			],
			"mapped",
			[
				53,
				26085
			]
		],
		[
			[
				13285,
				13285
			],
			"mapped",
			[
				54,
				26085
			]
		],
		[
			[
				13286,
				13286
			],
			"mapped",
			[
				55,
				26085
			]
		],
		[
			[
				13287,
				13287
			],
			"mapped",
			[
				56,
				26085
			]
		],
		[
			[
				13288,
				13288
			],
			"mapped",
			[
				57,
				26085
			]
		],
		[
			[
				13289,
				13289
			],
			"mapped",
			[
				49,
				48,
				26085
			]
		],
		[
			[
				13290,
				13290
			],
			"mapped",
			[
				49,
				49,
				26085
			]
		],
		[
			[
				13291,
				13291
			],
			"mapped",
			[
				49,
				50,
				26085
			]
		],
		[
			[
				13292,
				13292
			],
			"mapped",
			[
				49,
				51,
				26085
			]
		],
		[
			[
				13293,
				13293
			],
			"mapped",
			[
				49,
				52,
				26085
			]
		],
		[
			[
				13294,
				13294
			],
			"mapped",
			[
				49,
				53,
				26085
			]
		],
		[
			[
				13295,
				13295
			],
			"mapped",
			[
				49,
				54,
				26085
			]
		],
		[
			[
				13296,
				13296
			],
			"mapped",
			[
				49,
				55,
				26085
			]
		],
		[
			[
				13297,
				13297
			],
			"mapped",
			[
				49,
				56,
				26085
			]
		],
		[
			[
				13298,
				13298
			],
			"mapped",
			[
				49,
				57,
				26085
			]
		],
		[
			[
				13299,
				13299
			],
			"mapped",
			[
				50,
				48,
				26085
			]
		],
		[
			[
				13300,
				13300
			],
			"mapped",
			[
				50,
				49,
				26085
			]
		],
		[
			[
				13301,
				13301
			],
			"mapped",
			[
				50,
				50,
				26085
			]
		],
		[
			[
				13302,
				13302
			],
			"mapped",
			[
				50,
				51,
				26085
			]
		],
		[
			[
				13303,
				13303
			],
			"mapped",
			[
				50,
				52,
				26085
			]
		],
		[
			[
				13304,
				13304
			],
			"mapped",
			[
				50,
				53,
				26085
			]
		],
		[
			[
				13305,
				13305
			],
			"mapped",
			[
				50,
				54,
				26085
			]
		],
		[
			[
				13306,
				13306
			],
			"mapped",
			[
				50,
				55,
				26085
			]
		],
		[
			[
				13307,
				13307
			],
			"mapped",
			[
				50,
				56,
				26085
			]
		],
		[
			[
				13308,
				13308
			],
			"mapped",
			[
				50,
				57,
				26085
			]
		],
		[
			[
				13309,
				13309
			],
			"mapped",
			[
				51,
				48,
				26085
			]
		],
		[
			[
				13310,
				13310
			],
			"mapped",
			[
				51,
				49,
				26085
			]
		],
		[
			[
				13311,
				13311
			],
			"mapped",
			[
				103,
				97,
				108
			]
		],
		[
			[
				13312,
				19893
			],
			"valid"
		],
		[
			[
				19894,
				19903
			],
			"disallowed"
		],
		[
			[
				19904,
				19967
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				19968,
				40869
			],
			"valid"
		],
		[
			[
				40870,
				40891
			],
			"valid"
		],
		[
			[
				40892,
				40899
			],
			"valid"
		],
		[
			[
				40900,
				40907
			],
			"valid"
		],
		[
			[
				40908,
				40908
			],
			"valid"
		],
		[
			[
				40909,
				40917
			],
			"valid"
		],
		[
			[
				40918,
				40959
			],
			"disallowed"
		],
		[
			[
				40960,
				42124
			],
			"valid"
		],
		[
			[
				42125,
				42127
			],
			"disallowed"
		],
		[
			[
				42128,
				42145
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42146,
				42147
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42148,
				42163
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42164,
				42164
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42165,
				42176
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42177,
				42177
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42178,
				42180
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42181,
				42181
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42182,
				42182
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42183,
				42191
			],
			"disallowed"
		],
		[
			[
				42192,
				42237
			],
			"valid"
		],
		[
			[
				42238,
				42239
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42240,
				42508
			],
			"valid"
		],
		[
			[
				42509,
				42511
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42512,
				42539
			],
			"valid"
		],
		[
			[
				42540,
				42559
			],
			"disallowed"
		],
		[
			[
				42560,
				42560
			],
			"mapped",
			[
				42561
			]
		],
		[
			[
				42561,
				42561
			],
			"valid"
		],
		[
			[
				42562,
				42562
			],
			"mapped",
			[
				42563
			]
		],
		[
			[
				42563,
				42563
			],
			"valid"
		],
		[
			[
				42564,
				42564
			],
			"mapped",
			[
				42565
			]
		],
		[
			[
				42565,
				42565
			],
			"valid"
		],
		[
			[
				42566,
				42566
			],
			"mapped",
			[
				42567
			]
		],
		[
			[
				42567,
				42567
			],
			"valid"
		],
		[
			[
				42568,
				42568
			],
			"mapped",
			[
				42569
			]
		],
		[
			[
				42569,
				42569
			],
			"valid"
		],
		[
			[
				42570,
				42570
			],
			"mapped",
			[
				42571
			]
		],
		[
			[
				42571,
				42571
			],
			"valid"
		],
		[
			[
				42572,
				42572
			],
			"mapped",
			[
				42573
			]
		],
		[
			[
				42573,
				42573
			],
			"valid"
		],
		[
			[
				42574,
				42574
			],
			"mapped",
			[
				42575
			]
		],
		[
			[
				42575,
				42575
			],
			"valid"
		],
		[
			[
				42576,
				42576
			],
			"mapped",
			[
				42577
			]
		],
		[
			[
				42577,
				42577
			],
			"valid"
		],
		[
			[
				42578,
				42578
			],
			"mapped",
			[
				42579
			]
		],
		[
			[
				42579,
				42579
			],
			"valid"
		],
		[
			[
				42580,
				42580
			],
			"mapped",
			[
				42581
			]
		],
		[
			[
				42581,
				42581
			],
			"valid"
		],
		[
			[
				42582,
				42582
			],
			"mapped",
			[
				42583
			]
		],
		[
			[
				42583,
				42583
			],
			"valid"
		],
		[
			[
				42584,
				42584
			],
			"mapped",
			[
				42585
			]
		],
		[
			[
				42585,
				42585
			],
			"valid"
		],
		[
			[
				42586,
				42586
			],
			"mapped",
			[
				42587
			]
		],
		[
			[
				42587,
				42587
			],
			"valid"
		],
		[
			[
				42588,
				42588
			],
			"mapped",
			[
				42589
			]
		],
		[
			[
				42589,
				42589
			],
			"valid"
		],
		[
			[
				42590,
				42590
			],
			"mapped",
			[
				42591
			]
		],
		[
			[
				42591,
				42591
			],
			"valid"
		],
		[
			[
				42592,
				42592
			],
			"mapped",
			[
				42593
			]
		],
		[
			[
				42593,
				42593
			],
			"valid"
		],
		[
			[
				42594,
				42594
			],
			"mapped",
			[
				42595
			]
		],
		[
			[
				42595,
				42595
			],
			"valid"
		],
		[
			[
				42596,
				42596
			],
			"mapped",
			[
				42597
			]
		],
		[
			[
				42597,
				42597
			],
			"valid"
		],
		[
			[
				42598,
				42598
			],
			"mapped",
			[
				42599
			]
		],
		[
			[
				42599,
				42599
			],
			"valid"
		],
		[
			[
				42600,
				42600
			],
			"mapped",
			[
				42601
			]
		],
		[
			[
				42601,
				42601
			],
			"valid"
		],
		[
			[
				42602,
				42602
			],
			"mapped",
			[
				42603
			]
		],
		[
			[
				42603,
				42603
			],
			"valid"
		],
		[
			[
				42604,
				42604
			],
			"mapped",
			[
				42605
			]
		],
		[
			[
				42605,
				42607
			],
			"valid"
		],
		[
			[
				42608,
				42611
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42612,
				42619
			],
			"valid"
		],
		[
			[
				42620,
				42621
			],
			"valid"
		],
		[
			[
				42622,
				42622
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42623,
				42623
			],
			"valid"
		],
		[
			[
				42624,
				42624
			],
			"mapped",
			[
				42625
			]
		],
		[
			[
				42625,
				42625
			],
			"valid"
		],
		[
			[
				42626,
				42626
			],
			"mapped",
			[
				42627
			]
		],
		[
			[
				42627,
				42627
			],
			"valid"
		],
		[
			[
				42628,
				42628
			],
			"mapped",
			[
				42629
			]
		],
		[
			[
				42629,
				42629
			],
			"valid"
		],
		[
			[
				42630,
				42630
			],
			"mapped",
			[
				42631
			]
		],
		[
			[
				42631,
				42631
			],
			"valid"
		],
		[
			[
				42632,
				42632
			],
			"mapped",
			[
				42633
			]
		],
		[
			[
				42633,
				42633
			],
			"valid"
		],
		[
			[
				42634,
				42634
			],
			"mapped",
			[
				42635
			]
		],
		[
			[
				42635,
				42635
			],
			"valid"
		],
		[
			[
				42636,
				42636
			],
			"mapped",
			[
				42637
			]
		],
		[
			[
				42637,
				42637
			],
			"valid"
		],
		[
			[
				42638,
				42638
			],
			"mapped",
			[
				42639
			]
		],
		[
			[
				42639,
				42639
			],
			"valid"
		],
		[
			[
				42640,
				42640
			],
			"mapped",
			[
				42641
			]
		],
		[
			[
				42641,
				42641
			],
			"valid"
		],
		[
			[
				42642,
				42642
			],
			"mapped",
			[
				42643
			]
		],
		[
			[
				42643,
				42643
			],
			"valid"
		],
		[
			[
				42644,
				42644
			],
			"mapped",
			[
				42645
			]
		],
		[
			[
				42645,
				42645
			],
			"valid"
		],
		[
			[
				42646,
				42646
			],
			"mapped",
			[
				42647
			]
		],
		[
			[
				42647,
				42647
			],
			"valid"
		],
		[
			[
				42648,
				42648
			],
			"mapped",
			[
				42649
			]
		],
		[
			[
				42649,
				42649
			],
			"valid"
		],
		[
			[
				42650,
				42650
			],
			"mapped",
			[
				42651
			]
		],
		[
			[
				42651,
				42651
			],
			"valid"
		],
		[
			[
				42652,
				42652
			],
			"mapped",
			[
				1098
			]
		],
		[
			[
				42653,
				42653
			],
			"mapped",
			[
				1100
			]
		],
		[
			[
				42654,
				42654
			],
			"valid"
		],
		[
			[
				42655,
				42655
			],
			"valid"
		],
		[
			[
				42656,
				42725
			],
			"valid"
		],
		[
			[
				42726,
				42735
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42736,
				42737
			],
			"valid"
		],
		[
			[
				42738,
				42743
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42744,
				42751
			],
			"disallowed"
		],
		[
			[
				42752,
				42774
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42775,
				42778
			],
			"valid"
		],
		[
			[
				42779,
				42783
			],
			"valid"
		],
		[
			[
				42784,
				42785
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42786,
				42786
			],
			"mapped",
			[
				42787
			]
		],
		[
			[
				42787,
				42787
			],
			"valid"
		],
		[
			[
				42788,
				42788
			],
			"mapped",
			[
				42789
			]
		],
		[
			[
				42789,
				42789
			],
			"valid"
		],
		[
			[
				42790,
				42790
			],
			"mapped",
			[
				42791
			]
		],
		[
			[
				42791,
				42791
			],
			"valid"
		],
		[
			[
				42792,
				42792
			],
			"mapped",
			[
				42793
			]
		],
		[
			[
				42793,
				42793
			],
			"valid"
		],
		[
			[
				42794,
				42794
			],
			"mapped",
			[
				42795
			]
		],
		[
			[
				42795,
				42795
			],
			"valid"
		],
		[
			[
				42796,
				42796
			],
			"mapped",
			[
				42797
			]
		],
		[
			[
				42797,
				42797
			],
			"valid"
		],
		[
			[
				42798,
				42798
			],
			"mapped",
			[
				42799
			]
		],
		[
			[
				42799,
				42801
			],
			"valid"
		],
		[
			[
				42802,
				42802
			],
			"mapped",
			[
				42803
			]
		],
		[
			[
				42803,
				42803
			],
			"valid"
		],
		[
			[
				42804,
				42804
			],
			"mapped",
			[
				42805
			]
		],
		[
			[
				42805,
				42805
			],
			"valid"
		],
		[
			[
				42806,
				42806
			],
			"mapped",
			[
				42807
			]
		],
		[
			[
				42807,
				42807
			],
			"valid"
		],
		[
			[
				42808,
				42808
			],
			"mapped",
			[
				42809
			]
		],
		[
			[
				42809,
				42809
			],
			"valid"
		],
		[
			[
				42810,
				42810
			],
			"mapped",
			[
				42811
			]
		],
		[
			[
				42811,
				42811
			],
			"valid"
		],
		[
			[
				42812,
				42812
			],
			"mapped",
			[
				42813
			]
		],
		[
			[
				42813,
				42813
			],
			"valid"
		],
		[
			[
				42814,
				42814
			],
			"mapped",
			[
				42815
			]
		],
		[
			[
				42815,
				42815
			],
			"valid"
		],
		[
			[
				42816,
				42816
			],
			"mapped",
			[
				42817
			]
		],
		[
			[
				42817,
				42817
			],
			"valid"
		],
		[
			[
				42818,
				42818
			],
			"mapped",
			[
				42819
			]
		],
		[
			[
				42819,
				42819
			],
			"valid"
		],
		[
			[
				42820,
				42820
			],
			"mapped",
			[
				42821
			]
		],
		[
			[
				42821,
				42821
			],
			"valid"
		],
		[
			[
				42822,
				42822
			],
			"mapped",
			[
				42823
			]
		],
		[
			[
				42823,
				42823
			],
			"valid"
		],
		[
			[
				42824,
				42824
			],
			"mapped",
			[
				42825
			]
		],
		[
			[
				42825,
				42825
			],
			"valid"
		],
		[
			[
				42826,
				42826
			],
			"mapped",
			[
				42827
			]
		],
		[
			[
				42827,
				42827
			],
			"valid"
		],
		[
			[
				42828,
				42828
			],
			"mapped",
			[
				42829
			]
		],
		[
			[
				42829,
				42829
			],
			"valid"
		],
		[
			[
				42830,
				42830
			],
			"mapped",
			[
				42831
			]
		],
		[
			[
				42831,
				42831
			],
			"valid"
		],
		[
			[
				42832,
				42832
			],
			"mapped",
			[
				42833
			]
		],
		[
			[
				42833,
				42833
			],
			"valid"
		],
		[
			[
				42834,
				42834
			],
			"mapped",
			[
				42835
			]
		],
		[
			[
				42835,
				42835
			],
			"valid"
		],
		[
			[
				42836,
				42836
			],
			"mapped",
			[
				42837
			]
		],
		[
			[
				42837,
				42837
			],
			"valid"
		],
		[
			[
				42838,
				42838
			],
			"mapped",
			[
				42839
			]
		],
		[
			[
				42839,
				42839
			],
			"valid"
		],
		[
			[
				42840,
				42840
			],
			"mapped",
			[
				42841
			]
		],
		[
			[
				42841,
				42841
			],
			"valid"
		],
		[
			[
				42842,
				42842
			],
			"mapped",
			[
				42843
			]
		],
		[
			[
				42843,
				42843
			],
			"valid"
		],
		[
			[
				42844,
				42844
			],
			"mapped",
			[
				42845
			]
		],
		[
			[
				42845,
				42845
			],
			"valid"
		],
		[
			[
				42846,
				42846
			],
			"mapped",
			[
				42847
			]
		],
		[
			[
				42847,
				42847
			],
			"valid"
		],
		[
			[
				42848,
				42848
			],
			"mapped",
			[
				42849
			]
		],
		[
			[
				42849,
				42849
			],
			"valid"
		],
		[
			[
				42850,
				42850
			],
			"mapped",
			[
				42851
			]
		],
		[
			[
				42851,
				42851
			],
			"valid"
		],
		[
			[
				42852,
				42852
			],
			"mapped",
			[
				42853
			]
		],
		[
			[
				42853,
				42853
			],
			"valid"
		],
		[
			[
				42854,
				42854
			],
			"mapped",
			[
				42855
			]
		],
		[
			[
				42855,
				42855
			],
			"valid"
		],
		[
			[
				42856,
				42856
			],
			"mapped",
			[
				42857
			]
		],
		[
			[
				42857,
				42857
			],
			"valid"
		],
		[
			[
				42858,
				42858
			],
			"mapped",
			[
				42859
			]
		],
		[
			[
				42859,
				42859
			],
			"valid"
		],
		[
			[
				42860,
				42860
			],
			"mapped",
			[
				42861
			]
		],
		[
			[
				42861,
				42861
			],
			"valid"
		],
		[
			[
				42862,
				42862
			],
			"mapped",
			[
				42863
			]
		],
		[
			[
				42863,
				42863
			],
			"valid"
		],
		[
			[
				42864,
				42864
			],
			"mapped",
			[
				42863
			]
		],
		[
			[
				42865,
				42872
			],
			"valid"
		],
		[
			[
				42873,
				42873
			],
			"mapped",
			[
				42874
			]
		],
		[
			[
				42874,
				42874
			],
			"valid"
		],
		[
			[
				42875,
				42875
			],
			"mapped",
			[
				42876
			]
		],
		[
			[
				42876,
				42876
			],
			"valid"
		],
		[
			[
				42877,
				42877
			],
			"mapped",
			[
				7545
			]
		],
		[
			[
				42878,
				42878
			],
			"mapped",
			[
				42879
			]
		],
		[
			[
				42879,
				42879
			],
			"valid"
		],
		[
			[
				42880,
				42880
			],
			"mapped",
			[
				42881
			]
		],
		[
			[
				42881,
				42881
			],
			"valid"
		],
		[
			[
				42882,
				42882
			],
			"mapped",
			[
				42883
			]
		],
		[
			[
				42883,
				42883
			],
			"valid"
		],
		[
			[
				42884,
				42884
			],
			"mapped",
			[
				42885
			]
		],
		[
			[
				42885,
				42885
			],
			"valid"
		],
		[
			[
				42886,
				42886
			],
			"mapped",
			[
				42887
			]
		],
		[
			[
				42887,
				42888
			],
			"valid"
		],
		[
			[
				42889,
				42890
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				42891,
				42891
			],
			"mapped",
			[
				42892
			]
		],
		[
			[
				42892,
				42892
			],
			"valid"
		],
		[
			[
				42893,
				42893
			],
			"mapped",
			[
				613
			]
		],
		[
			[
				42894,
				42894
			],
			"valid"
		],
		[
			[
				42895,
				42895
			],
			"valid"
		],
		[
			[
				42896,
				42896
			],
			"mapped",
			[
				42897
			]
		],
		[
			[
				42897,
				42897
			],
			"valid"
		],
		[
			[
				42898,
				42898
			],
			"mapped",
			[
				42899
			]
		],
		[
			[
				42899,
				42899
			],
			"valid"
		],
		[
			[
				42900,
				42901
			],
			"valid"
		],
		[
			[
				42902,
				42902
			],
			"mapped",
			[
				42903
			]
		],
		[
			[
				42903,
				42903
			],
			"valid"
		],
		[
			[
				42904,
				42904
			],
			"mapped",
			[
				42905
			]
		],
		[
			[
				42905,
				42905
			],
			"valid"
		],
		[
			[
				42906,
				42906
			],
			"mapped",
			[
				42907
			]
		],
		[
			[
				42907,
				42907
			],
			"valid"
		],
		[
			[
				42908,
				42908
			],
			"mapped",
			[
				42909
			]
		],
		[
			[
				42909,
				42909
			],
			"valid"
		],
		[
			[
				42910,
				42910
			],
			"mapped",
			[
				42911
			]
		],
		[
			[
				42911,
				42911
			],
			"valid"
		],
		[
			[
				42912,
				42912
			],
			"mapped",
			[
				42913
			]
		],
		[
			[
				42913,
				42913
			],
			"valid"
		],
		[
			[
				42914,
				42914
			],
			"mapped",
			[
				42915
			]
		],
		[
			[
				42915,
				42915
			],
			"valid"
		],
		[
			[
				42916,
				42916
			],
			"mapped",
			[
				42917
			]
		],
		[
			[
				42917,
				42917
			],
			"valid"
		],
		[
			[
				42918,
				42918
			],
			"mapped",
			[
				42919
			]
		],
		[
			[
				42919,
				42919
			],
			"valid"
		],
		[
			[
				42920,
				42920
			],
			"mapped",
			[
				42921
			]
		],
		[
			[
				42921,
				42921
			],
			"valid"
		],
		[
			[
				42922,
				42922
			],
			"mapped",
			[
				614
			]
		],
		[
			[
				42923,
				42923
			],
			"mapped",
			[
				604
			]
		],
		[
			[
				42924,
				42924
			],
			"mapped",
			[
				609
			]
		],
		[
			[
				42925,
				42925
			],
			"mapped",
			[
				620
			]
		],
		[
			[
				42926,
				42927
			],
			"disallowed"
		],
		[
			[
				42928,
				42928
			],
			"mapped",
			[
				670
			]
		],
		[
			[
				42929,
				42929
			],
			"mapped",
			[
				647
			]
		],
		[
			[
				42930,
				42930
			],
			"mapped",
			[
				669
			]
		],
		[
			[
				42931,
				42931
			],
			"mapped",
			[
				43859
			]
		],
		[
			[
				42932,
				42932
			],
			"mapped",
			[
				42933
			]
		],
		[
			[
				42933,
				42933
			],
			"valid"
		],
		[
			[
				42934,
				42934
			],
			"mapped",
			[
				42935
			]
		],
		[
			[
				42935,
				42935
			],
			"valid"
		],
		[
			[
				42936,
				42998
			],
			"disallowed"
		],
		[
			[
				42999,
				42999
			],
			"valid"
		],
		[
			[
				43000,
				43000
			],
			"mapped",
			[
				295
			]
		],
		[
			[
				43001,
				43001
			],
			"mapped",
			[
				339
			]
		],
		[
			[
				43002,
				43002
			],
			"valid"
		],
		[
			[
				43003,
				43007
			],
			"valid"
		],
		[
			[
				43008,
				43047
			],
			"valid"
		],
		[
			[
				43048,
				43051
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43052,
				43055
			],
			"disallowed"
		],
		[
			[
				43056,
				43065
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43066,
				43071
			],
			"disallowed"
		],
		[
			[
				43072,
				43123
			],
			"valid"
		],
		[
			[
				43124,
				43127
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43128,
				43135
			],
			"disallowed"
		],
		[
			[
				43136,
				43204
			],
			"valid"
		],
		[
			[
				43205,
				43213
			],
			"disallowed"
		],
		[
			[
				43214,
				43215
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43216,
				43225
			],
			"valid"
		],
		[
			[
				43226,
				43231
			],
			"disallowed"
		],
		[
			[
				43232,
				43255
			],
			"valid"
		],
		[
			[
				43256,
				43258
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43259,
				43259
			],
			"valid"
		],
		[
			[
				43260,
				43260
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43261,
				43261
			],
			"valid"
		],
		[
			[
				43262,
				43263
			],
			"disallowed"
		],
		[
			[
				43264,
				43309
			],
			"valid"
		],
		[
			[
				43310,
				43311
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43312,
				43347
			],
			"valid"
		],
		[
			[
				43348,
				43358
			],
			"disallowed"
		],
		[
			[
				43359,
				43359
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43360,
				43388
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43389,
				43391
			],
			"disallowed"
		],
		[
			[
				43392,
				43456
			],
			"valid"
		],
		[
			[
				43457,
				43469
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43470,
				43470
			],
			"disallowed"
		],
		[
			[
				43471,
				43481
			],
			"valid"
		],
		[
			[
				43482,
				43485
			],
			"disallowed"
		],
		[
			[
				43486,
				43487
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43488,
				43518
			],
			"valid"
		],
		[
			[
				43519,
				43519
			],
			"disallowed"
		],
		[
			[
				43520,
				43574
			],
			"valid"
		],
		[
			[
				43575,
				43583
			],
			"disallowed"
		],
		[
			[
				43584,
				43597
			],
			"valid"
		],
		[
			[
				43598,
				43599
			],
			"disallowed"
		],
		[
			[
				43600,
				43609
			],
			"valid"
		],
		[
			[
				43610,
				43611
			],
			"disallowed"
		],
		[
			[
				43612,
				43615
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43616,
				43638
			],
			"valid"
		],
		[
			[
				43639,
				43641
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43642,
				43643
			],
			"valid"
		],
		[
			[
				43644,
				43647
			],
			"valid"
		],
		[
			[
				43648,
				43714
			],
			"valid"
		],
		[
			[
				43715,
				43738
			],
			"disallowed"
		],
		[
			[
				43739,
				43741
			],
			"valid"
		],
		[
			[
				43742,
				43743
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43744,
				43759
			],
			"valid"
		],
		[
			[
				43760,
				43761
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43762,
				43766
			],
			"valid"
		],
		[
			[
				43767,
				43776
			],
			"disallowed"
		],
		[
			[
				43777,
				43782
			],
			"valid"
		],
		[
			[
				43783,
				43784
			],
			"disallowed"
		],
		[
			[
				43785,
				43790
			],
			"valid"
		],
		[
			[
				43791,
				43792
			],
			"disallowed"
		],
		[
			[
				43793,
				43798
			],
			"valid"
		],
		[
			[
				43799,
				43807
			],
			"disallowed"
		],
		[
			[
				43808,
				43814
			],
			"valid"
		],
		[
			[
				43815,
				43815
			],
			"disallowed"
		],
		[
			[
				43816,
				43822
			],
			"valid"
		],
		[
			[
				43823,
				43823
			],
			"disallowed"
		],
		[
			[
				43824,
				43866
			],
			"valid"
		],
		[
			[
				43867,
				43867
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				43868,
				43868
			],
			"mapped",
			[
				42791
			]
		],
		[
			[
				43869,
				43869
			],
			"mapped",
			[
				43831
			]
		],
		[
			[
				43870,
				43870
			],
			"mapped",
			[
				619
			]
		],
		[
			[
				43871,
				43871
			],
			"mapped",
			[
				43858
			]
		],
		[
			[
				43872,
				43875
			],
			"valid"
		],
		[
			[
				43876,
				43877
			],
			"valid"
		],
		[
			[
				43878,
				43887
			],
			"disallowed"
		],
		[
			[
				43888,
				43888
			],
			"mapped",
			[
				5024
			]
		],
		[
			[
				43889,
				43889
			],
			"mapped",
			[
				5025
			]
		],
		[
			[
				43890,
				43890
			],
			"mapped",
			[
				5026
			]
		],
		[
			[
				43891,
				43891
			],
			"mapped",
			[
				5027
			]
		],
		[
			[
				43892,
				43892
			],
			"mapped",
			[
				5028
			]
		],
		[
			[
				43893,
				43893
			],
			"mapped",
			[
				5029
			]
		],
		[
			[
				43894,
				43894
			],
			"mapped",
			[
				5030
			]
		],
		[
			[
				43895,
				43895
			],
			"mapped",
			[
				5031
			]
		],
		[
			[
				43896,
				43896
			],
			"mapped",
			[
				5032
			]
		],
		[
			[
				43897,
				43897
			],
			"mapped",
			[
				5033
			]
		],
		[
			[
				43898,
				43898
			],
			"mapped",
			[
				5034
			]
		],
		[
			[
				43899,
				43899
			],
			"mapped",
			[
				5035
			]
		],
		[
			[
				43900,
				43900
			],
			"mapped",
			[
				5036
			]
		],
		[
			[
				43901,
				43901
			],
			"mapped",
			[
				5037
			]
		],
		[
			[
				43902,
				43902
			],
			"mapped",
			[
				5038
			]
		],
		[
			[
				43903,
				43903
			],
			"mapped",
			[
				5039
			]
		],
		[
			[
				43904,
				43904
			],
			"mapped",
			[
				5040
			]
		],
		[
			[
				43905,
				43905
			],
			"mapped",
			[
				5041
			]
		],
		[
			[
				43906,
				43906
			],
			"mapped",
			[
				5042
			]
		],
		[
			[
				43907,
				43907
			],
			"mapped",
			[
				5043
			]
		],
		[
			[
				43908,
				43908
			],
			"mapped",
			[
				5044
			]
		],
		[
			[
				43909,
				43909
			],
			"mapped",
			[
				5045
			]
		],
		[
			[
				43910,
				43910
			],
			"mapped",
			[
				5046
			]
		],
		[
			[
				43911,
				43911
			],
			"mapped",
			[
				5047
			]
		],
		[
			[
				43912,
				43912
			],
			"mapped",
			[
				5048
			]
		],
		[
			[
				43913,
				43913
			],
			"mapped",
			[
				5049
			]
		],
		[
			[
				43914,
				43914
			],
			"mapped",
			[
				5050
			]
		],
		[
			[
				43915,
				43915
			],
			"mapped",
			[
				5051
			]
		],
		[
			[
				43916,
				43916
			],
			"mapped",
			[
				5052
			]
		],
		[
			[
				43917,
				43917
			],
			"mapped",
			[
				5053
			]
		],
		[
			[
				43918,
				43918
			],
			"mapped",
			[
				5054
			]
		],
		[
			[
				43919,
				43919
			],
			"mapped",
			[
				5055
			]
		],
		[
			[
				43920,
				43920
			],
			"mapped",
			[
				5056
			]
		],
		[
			[
				43921,
				43921
			],
			"mapped",
			[
				5057
			]
		],
		[
			[
				43922,
				43922
			],
			"mapped",
			[
				5058
			]
		],
		[
			[
				43923,
				43923
			],
			"mapped",
			[
				5059
			]
		],
		[
			[
				43924,
				43924
			],
			"mapped",
			[
				5060
			]
		],
		[
			[
				43925,
				43925
			],
			"mapped",
			[
				5061
			]
		],
		[
			[
				43926,
				43926
			],
			"mapped",
			[
				5062
			]
		],
		[
			[
				43927,
				43927
			],
			"mapped",
			[
				5063
			]
		],
		[
			[
				43928,
				43928
			],
			"mapped",
			[
				5064
			]
		],
		[
			[
				43929,
				43929
			],
			"mapped",
			[
				5065
			]
		],
		[
			[
				43930,
				43930
			],
			"mapped",
			[
				5066
			]
		],
		[
			[
				43931,
				43931
			],
			"mapped",
			[
				5067
			]
		],
		[
			[
				43932,
				43932
			],
			"mapped",
			[
				5068
			]
		],
		[
			[
				43933,
				43933
			],
			"mapped",
			[
				5069
			]
		],
		[
			[
				43934,
				43934
			],
			"mapped",
			[
				5070
			]
		],
		[
			[
				43935,
				43935
			],
			"mapped",
			[
				5071
			]
		],
		[
			[
				43936,
				43936
			],
			"mapped",
			[
				5072
			]
		],
		[
			[
				43937,
				43937
			],
			"mapped",
			[
				5073
			]
		],
		[
			[
				43938,
				43938
			],
			"mapped",
			[
				5074
			]
		],
		[
			[
				43939,
				43939
			],
			"mapped",
			[
				5075
			]
		],
		[
			[
				43940,
				43940
			],
			"mapped",
			[
				5076
			]
		],
		[
			[
				43941,
				43941
			],
			"mapped",
			[
				5077
			]
		],
		[
			[
				43942,
				43942
			],
			"mapped",
			[
				5078
			]
		],
		[
			[
				43943,
				43943
			],
			"mapped",
			[
				5079
			]
		],
		[
			[
				43944,
				43944
			],
			"mapped",
			[
				5080
			]
		],
		[
			[
				43945,
				43945
			],
			"mapped",
			[
				5081
			]
		],
		[
			[
				43946,
				43946
			],
			"mapped",
			[
				5082
			]
		],
		[
			[
				43947,
				43947
			],
			"mapped",
			[
				5083
			]
		],
		[
			[
				43948,
				43948
			],
			"mapped",
			[
				5084
			]
		],
		[
			[
				43949,
				43949
			],
			"mapped",
			[
				5085
			]
		],
		[
			[
				43950,
				43950
			],
			"mapped",
			[
				5086
			]
		],
		[
			[
				43951,
				43951
			],
			"mapped",
			[
				5087
			]
		],
		[
			[
				43952,
				43952
			],
			"mapped",
			[
				5088
			]
		],
		[
			[
				43953,
				43953
			],
			"mapped",
			[
				5089
			]
		],
		[
			[
				43954,
				43954
			],
			"mapped",
			[
				5090
			]
		],
		[
			[
				43955,
				43955
			],
			"mapped",
			[
				5091
			]
		],
		[
			[
				43956,
				43956
			],
			"mapped",
			[
				5092
			]
		],
		[
			[
				43957,
				43957
			],
			"mapped",
			[
				5093
			]
		],
		[
			[
				43958,
				43958
			],
			"mapped",
			[
				5094
			]
		],
		[
			[
				43959,
				43959
			],
			"mapped",
			[
				5095
			]
		],
		[
			[
				43960,
				43960
			],
			"mapped",
			[
				5096
			]
		],
		[
			[
				43961,
				43961
			],
			"mapped",
			[
				5097
			]
		],
		[
			[
				43962,
				43962
			],
			"mapped",
			[
				5098
			]
		],
		[
			[
				43963,
				43963
			],
			"mapped",
			[
				5099
			]
		],
		[
			[
				43964,
				43964
			],
			"mapped",
			[
				5100
			]
		],
		[
			[
				43965,
				43965
			],
			"mapped",
			[
				5101
			]
		],
		[
			[
				43966,
				43966
			],
			"mapped",
			[
				5102
			]
		],
		[
			[
				43967,
				43967
			],
			"mapped",
			[
				5103
			]
		],
		[
			[
				43968,
				44010
			],
			"valid"
		],
		[
			[
				44011,
				44011
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				44012,
				44013
			],
			"valid"
		],
		[
			[
				44014,
				44015
			],
			"disallowed"
		],
		[
			[
				44016,
				44025
			],
			"valid"
		],
		[
			[
				44026,
				44031
			],
			"disallowed"
		],
		[
			[
				44032,
				55203
			],
			"valid"
		],
		[
			[
				55204,
				55215
			],
			"disallowed"
		],
		[
			[
				55216,
				55238
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				55239,
				55242
			],
			"disallowed"
		],
		[
			[
				55243,
				55291
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				55292,
				55295
			],
			"disallowed"
		],
		[
			[
				55296,
				57343
			],
			"disallowed"
		],
		[
			[
				57344,
				63743
			],
			"disallowed"
		],
		[
			[
				63744,
				63744
			],
			"mapped",
			[
				35912
			]
		],
		[
			[
				63745,
				63745
			],
			"mapped",
			[
				26356
			]
		],
		[
			[
				63746,
				63746
			],
			"mapped",
			[
				36554
			]
		],
		[
			[
				63747,
				63747
			],
			"mapped",
			[
				36040
			]
		],
		[
			[
				63748,
				63748
			],
			"mapped",
			[
				28369
			]
		],
		[
			[
				63749,
				63749
			],
			"mapped",
			[
				20018
			]
		],
		[
			[
				63750,
				63750
			],
			"mapped",
			[
				21477
			]
		],
		[
			[
				63751,
				63752
			],
			"mapped",
			[
				40860
			]
		],
		[
			[
				63753,
				63753
			],
			"mapped",
			[
				22865
			]
		],
		[
			[
				63754,
				63754
			],
			"mapped",
			[
				37329
			]
		],
		[
			[
				63755,
				63755
			],
			"mapped",
			[
				21895
			]
		],
		[
			[
				63756,
				63756
			],
			"mapped",
			[
				22856
			]
		],
		[
			[
				63757,
				63757
			],
			"mapped",
			[
				25078
			]
		],
		[
			[
				63758,
				63758
			],
			"mapped",
			[
				30313
			]
		],
		[
			[
				63759,
				63759
			],
			"mapped",
			[
				32645
			]
		],
		[
			[
				63760,
				63760
			],
			"mapped",
			[
				34367
			]
		],
		[
			[
				63761,
				63761
			],
			"mapped",
			[
				34746
			]
		],
		[
			[
				63762,
				63762
			],
			"mapped",
			[
				35064
			]
		],
		[
			[
				63763,
				63763
			],
			"mapped",
			[
				37007
			]
		],
		[
			[
				63764,
				63764
			],
			"mapped",
			[
				27138
			]
		],
		[
			[
				63765,
				63765
			],
			"mapped",
			[
				27931
			]
		],
		[
			[
				63766,
				63766
			],
			"mapped",
			[
				28889
			]
		],
		[
			[
				63767,
				63767
			],
			"mapped",
			[
				29662
			]
		],
		[
			[
				63768,
				63768
			],
			"mapped",
			[
				33853
			]
		],
		[
			[
				63769,
				63769
			],
			"mapped",
			[
				37226
			]
		],
		[
			[
				63770,
				63770
			],
			"mapped",
			[
				39409
			]
		],
		[
			[
				63771,
				63771
			],
			"mapped",
			[
				20098
			]
		],
		[
			[
				63772,
				63772
			],
			"mapped",
			[
				21365
			]
		],
		[
			[
				63773,
				63773
			],
			"mapped",
			[
				27396
			]
		],
		[
			[
				63774,
				63774
			],
			"mapped",
			[
				29211
			]
		],
		[
			[
				63775,
				63775
			],
			"mapped",
			[
				34349
			]
		],
		[
			[
				63776,
				63776
			],
			"mapped",
			[
				40478
			]
		],
		[
			[
				63777,
				63777
			],
			"mapped",
			[
				23888
			]
		],
		[
			[
				63778,
				63778
			],
			"mapped",
			[
				28651
			]
		],
		[
			[
				63779,
				63779
			],
			"mapped",
			[
				34253
			]
		],
		[
			[
				63780,
				63780
			],
			"mapped",
			[
				35172
			]
		],
		[
			[
				63781,
				63781
			],
			"mapped",
			[
				25289
			]
		],
		[
			[
				63782,
				63782
			],
			"mapped",
			[
				33240
			]
		],
		[
			[
				63783,
				63783
			],
			"mapped",
			[
				34847
			]
		],
		[
			[
				63784,
				63784
			],
			"mapped",
			[
				24266
			]
		],
		[
			[
				63785,
				63785
			],
			"mapped",
			[
				26391
			]
		],
		[
			[
				63786,
				63786
			],
			"mapped",
			[
				28010
			]
		],
		[
			[
				63787,
				63787
			],
			"mapped",
			[
				29436
			]
		],
		[
			[
				63788,
				63788
			],
			"mapped",
			[
				37070
			]
		],
		[
			[
				63789,
				63789
			],
			"mapped",
			[
				20358
			]
		],
		[
			[
				63790,
				63790
			],
			"mapped",
			[
				20919
			]
		],
		[
			[
				63791,
				63791
			],
			"mapped",
			[
				21214
			]
		],
		[
			[
				63792,
				63792
			],
			"mapped",
			[
				25796
			]
		],
		[
			[
				63793,
				63793
			],
			"mapped",
			[
				27347
			]
		],
		[
			[
				63794,
				63794
			],
			"mapped",
			[
				29200
			]
		],
		[
			[
				63795,
				63795
			],
			"mapped",
			[
				30439
			]
		],
		[
			[
				63796,
				63796
			],
			"mapped",
			[
				32769
			]
		],
		[
			[
				63797,
				63797
			],
			"mapped",
			[
				34310
			]
		],
		[
			[
				63798,
				63798
			],
			"mapped",
			[
				34396
			]
		],
		[
			[
				63799,
				63799
			],
			"mapped",
			[
				36335
			]
		],
		[
			[
				63800,
				63800
			],
			"mapped",
			[
				38706
			]
		],
		[
			[
				63801,
				63801
			],
			"mapped",
			[
				39791
			]
		],
		[
			[
				63802,
				63802
			],
			"mapped",
			[
				40442
			]
		],
		[
			[
				63803,
				63803
			],
			"mapped",
			[
				30860
			]
		],
		[
			[
				63804,
				63804
			],
			"mapped",
			[
				31103
			]
		],
		[
			[
				63805,
				63805
			],
			"mapped",
			[
				32160
			]
		],
		[
			[
				63806,
				63806
			],
			"mapped",
			[
				33737
			]
		],
		[
			[
				63807,
				63807
			],
			"mapped",
			[
				37636
			]
		],
		[
			[
				63808,
				63808
			],
			"mapped",
			[
				40575
			]
		],
		[
			[
				63809,
				63809
			],
			"mapped",
			[
				35542
			]
		],
		[
			[
				63810,
				63810
			],
			"mapped",
			[
				22751
			]
		],
		[
			[
				63811,
				63811
			],
			"mapped",
			[
				24324
			]
		],
		[
			[
				63812,
				63812
			],
			"mapped",
			[
				31840
			]
		],
		[
			[
				63813,
				63813
			],
			"mapped",
			[
				32894
			]
		],
		[
			[
				63814,
				63814
			],
			"mapped",
			[
				29282
			]
		],
		[
			[
				63815,
				63815
			],
			"mapped",
			[
				30922
			]
		],
		[
			[
				63816,
				63816
			],
			"mapped",
			[
				36034
			]
		],
		[
			[
				63817,
				63817
			],
			"mapped",
			[
				38647
			]
		],
		[
			[
				63818,
				63818
			],
			"mapped",
			[
				22744
			]
		],
		[
			[
				63819,
				63819
			],
			"mapped",
			[
				23650
			]
		],
		[
			[
				63820,
				63820
			],
			"mapped",
			[
				27155
			]
		],
		[
			[
				63821,
				63821
			],
			"mapped",
			[
				28122
			]
		],
		[
			[
				63822,
				63822
			],
			"mapped",
			[
				28431
			]
		],
		[
			[
				63823,
				63823
			],
			"mapped",
			[
				32047
			]
		],
		[
			[
				63824,
				63824
			],
			"mapped",
			[
				32311
			]
		],
		[
			[
				63825,
				63825
			],
			"mapped",
			[
				38475
			]
		],
		[
			[
				63826,
				63826
			],
			"mapped",
			[
				21202
			]
		],
		[
			[
				63827,
				63827
			],
			"mapped",
			[
				32907
			]
		],
		[
			[
				63828,
				63828
			],
			"mapped",
			[
				20956
			]
		],
		[
			[
				63829,
				63829
			],
			"mapped",
			[
				20940
			]
		],
		[
			[
				63830,
				63830
			],
			"mapped",
			[
				31260
			]
		],
		[
			[
				63831,
				63831
			],
			"mapped",
			[
				32190
			]
		],
		[
			[
				63832,
				63832
			],
			"mapped",
			[
				33777
			]
		],
		[
			[
				63833,
				63833
			],
			"mapped",
			[
				38517
			]
		],
		[
			[
				63834,
				63834
			],
			"mapped",
			[
				35712
			]
		],
		[
			[
				63835,
				63835
			],
			"mapped",
			[
				25295
			]
		],
		[
			[
				63836,
				63836
			],
			"mapped",
			[
				27138
			]
		],
		[
			[
				63837,
				63837
			],
			"mapped",
			[
				35582
			]
		],
		[
			[
				63838,
				63838
			],
			"mapped",
			[
				20025
			]
		],
		[
			[
				63839,
				63839
			],
			"mapped",
			[
				23527
			]
		],
		[
			[
				63840,
				63840
			],
			"mapped",
			[
				24594
			]
		],
		[
			[
				63841,
				63841
			],
			"mapped",
			[
				29575
			]
		],
		[
			[
				63842,
				63842
			],
			"mapped",
			[
				30064
			]
		],
		[
			[
				63843,
				63843
			],
			"mapped",
			[
				21271
			]
		],
		[
			[
				63844,
				63844
			],
			"mapped",
			[
				30971
			]
		],
		[
			[
				63845,
				63845
			],
			"mapped",
			[
				20415
			]
		],
		[
			[
				63846,
				63846
			],
			"mapped",
			[
				24489
			]
		],
		[
			[
				63847,
				63847
			],
			"mapped",
			[
				19981
			]
		],
		[
			[
				63848,
				63848
			],
			"mapped",
			[
				27852
			]
		],
		[
			[
				63849,
				63849
			],
			"mapped",
			[
				25976
			]
		],
		[
			[
				63850,
				63850
			],
			"mapped",
			[
				32034
			]
		],
		[
			[
				63851,
				63851
			],
			"mapped",
			[
				21443
			]
		],
		[
			[
				63852,
				63852
			],
			"mapped",
			[
				22622
			]
		],
		[
			[
				63853,
				63853
			],
			"mapped",
			[
				30465
			]
		],
		[
			[
				63854,
				63854
			],
			"mapped",
			[
				33865
			]
		],
		[
			[
				63855,
				63855
			],
			"mapped",
			[
				35498
			]
		],
		[
			[
				63856,
				63856
			],
			"mapped",
			[
				27578
			]
		],
		[
			[
				63857,
				63857
			],
			"mapped",
			[
				36784
			]
		],
		[
			[
				63858,
				63858
			],
			"mapped",
			[
				27784
			]
		],
		[
			[
				63859,
				63859
			],
			"mapped",
			[
				25342
			]
		],
		[
			[
				63860,
				63860
			],
			"mapped",
			[
				33509
			]
		],
		[
			[
				63861,
				63861
			],
			"mapped",
			[
				25504
			]
		],
		[
			[
				63862,
				63862
			],
			"mapped",
			[
				30053
			]
		],
		[
			[
				63863,
				63863
			],
			"mapped",
			[
				20142
			]
		],
		[
			[
				63864,
				63864
			],
			"mapped",
			[
				20841
			]
		],
		[
			[
				63865,
				63865
			],
			"mapped",
			[
				20937
			]
		],
		[
			[
				63866,
				63866
			],
			"mapped",
			[
				26753
			]
		],
		[
			[
				63867,
				63867
			],
			"mapped",
			[
				31975
			]
		],
		[
			[
				63868,
				63868
			],
			"mapped",
			[
				33391
			]
		],
		[
			[
				63869,
				63869
			],
			"mapped",
			[
				35538
			]
		],
		[
			[
				63870,
				63870
			],
			"mapped",
			[
				37327
			]
		],
		[
			[
				63871,
				63871
			],
			"mapped",
			[
				21237
			]
		],
		[
			[
				63872,
				63872
			],
			"mapped",
			[
				21570
			]
		],
		[
			[
				63873,
				63873
			],
			"mapped",
			[
				22899
			]
		],
		[
			[
				63874,
				63874
			],
			"mapped",
			[
				24300
			]
		],
		[
			[
				63875,
				63875
			],
			"mapped",
			[
				26053
			]
		],
		[
			[
				63876,
				63876
			],
			"mapped",
			[
				28670
			]
		],
		[
			[
				63877,
				63877
			],
			"mapped",
			[
				31018
			]
		],
		[
			[
				63878,
				63878
			],
			"mapped",
			[
				38317
			]
		],
		[
			[
				63879,
				63879
			],
			"mapped",
			[
				39530
			]
		],
		[
			[
				63880,
				63880
			],
			"mapped",
			[
				40599
			]
		],
		[
			[
				63881,
				63881
			],
			"mapped",
			[
				40654
			]
		],
		[
			[
				63882,
				63882
			],
			"mapped",
			[
				21147
			]
		],
		[
			[
				63883,
				63883
			],
			"mapped",
			[
				26310
			]
		],
		[
			[
				63884,
				63884
			],
			"mapped",
			[
				27511
			]
		],
		[
			[
				63885,
				63885
			],
			"mapped",
			[
				36706
			]
		],
		[
			[
				63886,
				63886
			],
			"mapped",
			[
				24180
			]
		],
		[
			[
				63887,
				63887
			],
			"mapped",
			[
				24976
			]
		],
		[
			[
				63888,
				63888
			],
			"mapped",
			[
				25088
			]
		],
		[
			[
				63889,
				63889
			],
			"mapped",
			[
				25754
			]
		],
		[
			[
				63890,
				63890
			],
			"mapped",
			[
				28451
			]
		],
		[
			[
				63891,
				63891
			],
			"mapped",
			[
				29001
			]
		],
		[
			[
				63892,
				63892
			],
			"mapped",
			[
				29833
			]
		],
		[
			[
				63893,
				63893
			],
			"mapped",
			[
				31178
			]
		],
		[
			[
				63894,
				63894
			],
			"mapped",
			[
				32244
			]
		],
		[
			[
				63895,
				63895
			],
			"mapped",
			[
				32879
			]
		],
		[
			[
				63896,
				63896
			],
			"mapped",
			[
				36646
			]
		],
		[
			[
				63897,
				63897
			],
			"mapped",
			[
				34030
			]
		],
		[
			[
				63898,
				63898
			],
			"mapped",
			[
				36899
			]
		],
		[
			[
				63899,
				63899
			],
			"mapped",
			[
				37706
			]
		],
		[
			[
				63900,
				63900
			],
			"mapped",
			[
				21015
			]
		],
		[
			[
				63901,
				63901
			],
			"mapped",
			[
				21155
			]
		],
		[
			[
				63902,
				63902
			],
			"mapped",
			[
				21693
			]
		],
		[
			[
				63903,
				63903
			],
			"mapped",
			[
				28872
			]
		],
		[
			[
				63904,
				63904
			],
			"mapped",
			[
				35010
			]
		],
		[
			[
				63905,
				63905
			],
			"mapped",
			[
				35498
			]
		],
		[
			[
				63906,
				63906
			],
			"mapped",
			[
				24265
			]
		],
		[
			[
				63907,
				63907
			],
			"mapped",
			[
				24565
			]
		],
		[
			[
				63908,
				63908
			],
			"mapped",
			[
				25467
			]
		],
		[
			[
				63909,
				63909
			],
			"mapped",
			[
				27566
			]
		],
		[
			[
				63910,
				63910
			],
			"mapped",
			[
				31806
			]
		],
		[
			[
				63911,
				63911
			],
			"mapped",
			[
				29557
			]
		],
		[
			[
				63912,
				63912
			],
			"mapped",
			[
				20196
			]
		],
		[
			[
				63913,
				63913
			],
			"mapped",
			[
				22265
			]
		],
		[
			[
				63914,
				63914
			],
			"mapped",
			[
				23527
			]
		],
		[
			[
				63915,
				63915
			],
			"mapped",
			[
				23994
			]
		],
		[
			[
				63916,
				63916
			],
			"mapped",
			[
				24604
			]
		],
		[
			[
				63917,
				63917
			],
			"mapped",
			[
				29618
			]
		],
		[
			[
				63918,
				63918
			],
			"mapped",
			[
				29801
			]
		],
		[
			[
				63919,
				63919
			],
			"mapped",
			[
				32666
			]
		],
		[
			[
				63920,
				63920
			],
			"mapped",
			[
				32838
			]
		],
		[
			[
				63921,
				63921
			],
			"mapped",
			[
				37428
			]
		],
		[
			[
				63922,
				63922
			],
			"mapped",
			[
				38646
			]
		],
		[
			[
				63923,
				63923
			],
			"mapped",
			[
				38728
			]
		],
		[
			[
				63924,
				63924
			],
			"mapped",
			[
				38936
			]
		],
		[
			[
				63925,
				63925
			],
			"mapped",
			[
				20363
			]
		],
		[
			[
				63926,
				63926
			],
			"mapped",
			[
				31150
			]
		],
		[
			[
				63927,
				63927
			],
			"mapped",
			[
				37300
			]
		],
		[
			[
				63928,
				63928
			],
			"mapped",
			[
				38584
			]
		],
		[
			[
				63929,
				63929
			],
			"mapped",
			[
				24801
			]
		],
		[
			[
				63930,
				63930
			],
			"mapped",
			[
				20102
			]
		],
		[
			[
				63931,
				63931
			],
			"mapped",
			[
				20698
			]
		],
		[
			[
				63932,
				63932
			],
			"mapped",
			[
				23534
			]
		],
		[
			[
				63933,
				63933
			],
			"mapped",
			[
				23615
			]
		],
		[
			[
				63934,
				63934
			],
			"mapped",
			[
				26009
			]
		],
		[
			[
				63935,
				63935
			],
			"mapped",
			[
				27138
			]
		],
		[
			[
				63936,
				63936
			],
			"mapped",
			[
				29134
			]
		],
		[
			[
				63937,
				63937
			],
			"mapped",
			[
				30274
			]
		],
		[
			[
				63938,
				63938
			],
			"mapped",
			[
				34044
			]
		],
		[
			[
				63939,
				63939
			],
			"mapped",
			[
				36988
			]
		],
		[
			[
				63940,
				63940
			],
			"mapped",
			[
				40845
			]
		],
		[
			[
				63941,
				63941
			],
			"mapped",
			[
				26248
			]
		],
		[
			[
				63942,
				63942
			],
			"mapped",
			[
				38446
			]
		],
		[
			[
				63943,
				63943
			],
			"mapped",
			[
				21129
			]
		],
		[
			[
				63944,
				63944
			],
			"mapped",
			[
				26491
			]
		],
		[
			[
				63945,
				63945
			],
			"mapped",
			[
				26611
			]
		],
		[
			[
				63946,
				63946
			],
			"mapped",
			[
				27969
			]
		],
		[
			[
				63947,
				63947
			],
			"mapped",
			[
				28316
			]
		],
		[
			[
				63948,
				63948
			],
			"mapped",
			[
				29705
			]
		],
		[
			[
				63949,
				63949
			],
			"mapped",
			[
				30041
			]
		],
		[
			[
				63950,
				63950
			],
			"mapped",
			[
				30827
			]
		],
		[
			[
				63951,
				63951
			],
			"mapped",
			[
				32016
			]
		],
		[
			[
				63952,
				63952
			],
			"mapped",
			[
				39006
			]
		],
		[
			[
				63953,
				63953
			],
			"mapped",
			[
				20845
			]
		],
		[
			[
				63954,
				63954
			],
			"mapped",
			[
				25134
			]
		],
		[
			[
				63955,
				63955
			],
			"mapped",
			[
				38520
			]
		],
		[
			[
				63956,
				63956
			],
			"mapped",
			[
				20523
			]
		],
		[
			[
				63957,
				63957
			],
			"mapped",
			[
				23833
			]
		],
		[
			[
				63958,
				63958
			],
			"mapped",
			[
				28138
			]
		],
		[
			[
				63959,
				63959
			],
			"mapped",
			[
				36650
			]
		],
		[
			[
				63960,
				63960
			],
			"mapped",
			[
				24459
			]
		],
		[
			[
				63961,
				63961
			],
			"mapped",
			[
				24900
			]
		],
		[
			[
				63962,
				63962
			],
			"mapped",
			[
				26647
			]
		],
		[
			[
				63963,
				63963
			],
			"mapped",
			[
				29575
			]
		],
		[
			[
				63964,
				63964
			],
			"mapped",
			[
				38534
			]
		],
		[
			[
				63965,
				63965
			],
			"mapped",
			[
				21033
			]
		],
		[
			[
				63966,
				63966
			],
			"mapped",
			[
				21519
			]
		],
		[
			[
				63967,
				63967
			],
			"mapped",
			[
				23653
			]
		],
		[
			[
				63968,
				63968
			],
			"mapped",
			[
				26131
			]
		],
		[
			[
				63969,
				63969
			],
			"mapped",
			[
				26446
			]
		],
		[
			[
				63970,
				63970
			],
			"mapped",
			[
				26792
			]
		],
		[
			[
				63971,
				63971
			],
			"mapped",
			[
				27877
			]
		],
		[
			[
				63972,
				63972
			],
			"mapped",
			[
				29702
			]
		],
		[
			[
				63973,
				63973
			],
			"mapped",
			[
				30178
			]
		],
		[
			[
				63974,
				63974
			],
			"mapped",
			[
				32633
			]
		],
		[
			[
				63975,
				63975
			],
			"mapped",
			[
				35023
			]
		],
		[
			[
				63976,
				63976
			],
			"mapped",
			[
				35041
			]
		],
		[
			[
				63977,
				63977
			],
			"mapped",
			[
				37324
			]
		],
		[
			[
				63978,
				63978
			],
			"mapped",
			[
				38626
			]
		],
		[
			[
				63979,
				63979
			],
			"mapped",
			[
				21311
			]
		],
		[
			[
				63980,
				63980
			],
			"mapped",
			[
				28346
			]
		],
		[
			[
				63981,
				63981
			],
			"mapped",
			[
				21533
			]
		],
		[
			[
				63982,
				63982
			],
			"mapped",
			[
				29136
			]
		],
		[
			[
				63983,
				63983
			],
			"mapped",
			[
				29848
			]
		],
		[
			[
				63984,
				63984
			],
			"mapped",
			[
				34298
			]
		],
		[
			[
				63985,
				63985
			],
			"mapped",
			[
				38563
			]
		],
		[
			[
				63986,
				63986
			],
			"mapped",
			[
				40023
			]
		],
		[
			[
				63987,
				63987
			],
			"mapped",
			[
				40607
			]
		],
		[
			[
				63988,
				63988
			],
			"mapped",
			[
				26519
			]
		],
		[
			[
				63989,
				63989
			],
			"mapped",
			[
				28107
			]
		],
		[
			[
				63990,
				63990
			],
			"mapped",
			[
				33256
			]
		],
		[
			[
				63991,
				63991
			],
			"mapped",
			[
				31435
			]
		],
		[
			[
				63992,
				63992
			],
			"mapped",
			[
				31520
			]
		],
		[
			[
				63993,
				63993
			],
			"mapped",
			[
				31890
			]
		],
		[
			[
				63994,
				63994
			],
			"mapped",
			[
				29376
			]
		],
		[
			[
				63995,
				63995
			],
			"mapped",
			[
				28825
			]
		],
		[
			[
				63996,
				63996
			],
			"mapped",
			[
				35672
			]
		],
		[
			[
				63997,
				63997
			],
			"mapped",
			[
				20160
			]
		],
		[
			[
				63998,
				63998
			],
			"mapped",
			[
				33590
			]
		],
		[
			[
				63999,
				63999
			],
			"mapped",
			[
				21050
			]
		],
		[
			[
				64000,
				64000
			],
			"mapped",
			[
				20999
			]
		],
		[
			[
				64001,
				64001
			],
			"mapped",
			[
				24230
			]
		],
		[
			[
				64002,
				64002
			],
			"mapped",
			[
				25299
			]
		],
		[
			[
				64003,
				64003
			],
			"mapped",
			[
				31958
			]
		],
		[
			[
				64004,
				64004
			],
			"mapped",
			[
				23429
			]
		],
		[
			[
				64005,
				64005
			],
			"mapped",
			[
				27934
			]
		],
		[
			[
				64006,
				64006
			],
			"mapped",
			[
				26292
			]
		],
		[
			[
				64007,
				64007
			],
			"mapped",
			[
				36667
			]
		],
		[
			[
				64008,
				64008
			],
			"mapped",
			[
				34892
			]
		],
		[
			[
				64009,
				64009
			],
			"mapped",
			[
				38477
			]
		],
		[
			[
				64010,
				64010
			],
			"mapped",
			[
				35211
			]
		],
		[
			[
				64011,
				64011
			],
			"mapped",
			[
				24275
			]
		],
		[
			[
				64012,
				64012
			],
			"mapped",
			[
				20800
			]
		],
		[
			[
				64013,
				64013
			],
			"mapped",
			[
				21952
			]
		],
		[
			[
				64014,
				64015
			],
			"valid"
		],
		[
			[
				64016,
				64016
			],
			"mapped",
			[
				22618
			]
		],
		[
			[
				64017,
				64017
			],
			"valid"
		],
		[
			[
				64018,
				64018
			],
			"mapped",
			[
				26228
			]
		],
		[
			[
				64019,
				64020
			],
			"valid"
		],
		[
			[
				64021,
				64021
			],
			"mapped",
			[
				20958
			]
		],
		[
			[
				64022,
				64022
			],
			"mapped",
			[
				29482
			]
		],
		[
			[
				64023,
				64023
			],
			"mapped",
			[
				30410
			]
		],
		[
			[
				64024,
				64024
			],
			"mapped",
			[
				31036
			]
		],
		[
			[
				64025,
				64025
			],
			"mapped",
			[
				31070
			]
		],
		[
			[
				64026,
				64026
			],
			"mapped",
			[
				31077
			]
		],
		[
			[
				64027,
				64027
			],
			"mapped",
			[
				31119
			]
		],
		[
			[
				64028,
				64028
			],
			"mapped",
			[
				38742
			]
		],
		[
			[
				64029,
				64029
			],
			"mapped",
			[
				31934
			]
		],
		[
			[
				64030,
				64030
			],
			"mapped",
			[
				32701
			]
		],
		[
			[
				64031,
				64031
			],
			"valid"
		],
		[
			[
				64032,
				64032
			],
			"mapped",
			[
				34322
			]
		],
		[
			[
				64033,
				64033
			],
			"valid"
		],
		[
			[
				64034,
				64034
			],
			"mapped",
			[
				35576
			]
		],
		[
			[
				64035,
				64036
			],
			"valid"
		],
		[
			[
				64037,
				64037
			],
			"mapped",
			[
				36920
			]
		],
		[
			[
				64038,
				64038
			],
			"mapped",
			[
				37117
			]
		],
		[
			[
				64039,
				64041
			],
			"valid"
		],
		[
			[
				64042,
				64042
			],
			"mapped",
			[
				39151
			]
		],
		[
			[
				64043,
				64043
			],
			"mapped",
			[
				39164
			]
		],
		[
			[
				64044,
				64044
			],
			"mapped",
			[
				39208
			]
		],
		[
			[
				64045,
				64045
			],
			"mapped",
			[
				40372
			]
		],
		[
			[
				64046,
				64046
			],
			"mapped",
			[
				37086
			]
		],
		[
			[
				64047,
				64047
			],
			"mapped",
			[
				38583
			]
		],
		[
			[
				64048,
				64048
			],
			"mapped",
			[
				20398
			]
		],
		[
			[
				64049,
				64049
			],
			"mapped",
			[
				20711
			]
		],
		[
			[
				64050,
				64050
			],
			"mapped",
			[
				20813
			]
		],
		[
			[
				64051,
				64051
			],
			"mapped",
			[
				21193
			]
		],
		[
			[
				64052,
				64052
			],
			"mapped",
			[
				21220
			]
		],
		[
			[
				64053,
				64053
			],
			"mapped",
			[
				21329
			]
		],
		[
			[
				64054,
				64054
			],
			"mapped",
			[
				21917
			]
		],
		[
			[
				64055,
				64055
			],
			"mapped",
			[
				22022
			]
		],
		[
			[
				64056,
				64056
			],
			"mapped",
			[
				22120
			]
		],
		[
			[
				64057,
				64057
			],
			"mapped",
			[
				22592
			]
		],
		[
			[
				64058,
				64058
			],
			"mapped",
			[
				22696
			]
		],
		[
			[
				64059,
				64059
			],
			"mapped",
			[
				23652
			]
		],
		[
			[
				64060,
				64060
			],
			"mapped",
			[
				23662
			]
		],
		[
			[
				64061,
				64061
			],
			"mapped",
			[
				24724
			]
		],
		[
			[
				64062,
				64062
			],
			"mapped",
			[
				24936
			]
		],
		[
			[
				64063,
				64063
			],
			"mapped",
			[
				24974
			]
		],
		[
			[
				64064,
				64064
			],
			"mapped",
			[
				25074
			]
		],
		[
			[
				64065,
				64065
			],
			"mapped",
			[
				25935
			]
		],
		[
			[
				64066,
				64066
			],
			"mapped",
			[
				26082
			]
		],
		[
			[
				64067,
				64067
			],
			"mapped",
			[
				26257
			]
		],
		[
			[
				64068,
				64068
			],
			"mapped",
			[
				26757
			]
		],
		[
			[
				64069,
				64069
			],
			"mapped",
			[
				28023
			]
		],
		[
			[
				64070,
				64070
			],
			"mapped",
			[
				28186
			]
		],
		[
			[
				64071,
				64071
			],
			"mapped",
			[
				28450
			]
		],
		[
			[
				64072,
				64072
			],
			"mapped",
			[
				29038
			]
		],
		[
			[
				64073,
				64073
			],
			"mapped",
			[
				29227
			]
		],
		[
			[
				64074,
				64074
			],
			"mapped",
			[
				29730
			]
		],
		[
			[
				64075,
				64075
			],
			"mapped",
			[
				30865
			]
		],
		[
			[
				64076,
				64076
			],
			"mapped",
			[
				31038
			]
		],
		[
			[
				64077,
				64077
			],
			"mapped",
			[
				31049
			]
		],
		[
			[
				64078,
				64078
			],
			"mapped",
			[
				31048
			]
		],
		[
			[
				64079,
				64079
			],
			"mapped",
			[
				31056
			]
		],
		[
			[
				64080,
				64080
			],
			"mapped",
			[
				31062
			]
		],
		[
			[
				64081,
				64081
			],
			"mapped",
			[
				31069
			]
		],
		[
			[
				64082,
				64082
			],
			"mapped",
			[
				31117
			]
		],
		[
			[
				64083,
				64083
			],
			"mapped",
			[
				31118
			]
		],
		[
			[
				64084,
				64084
			],
			"mapped",
			[
				31296
			]
		],
		[
			[
				64085,
				64085
			],
			"mapped",
			[
				31361
			]
		],
		[
			[
				64086,
				64086
			],
			"mapped",
			[
				31680
			]
		],
		[
			[
				64087,
				64087
			],
			"mapped",
			[
				32244
			]
		],
		[
			[
				64088,
				64088
			],
			"mapped",
			[
				32265
			]
		],
		[
			[
				64089,
				64089
			],
			"mapped",
			[
				32321
			]
		],
		[
			[
				64090,
				64090
			],
			"mapped",
			[
				32626
			]
		],
		[
			[
				64091,
				64091
			],
			"mapped",
			[
				32773
			]
		],
		[
			[
				64092,
				64092
			],
			"mapped",
			[
				33261
			]
		],
		[
			[
				64093,
				64094
			],
			"mapped",
			[
				33401
			]
		],
		[
			[
				64095,
				64095
			],
			"mapped",
			[
				33879
			]
		],
		[
			[
				64096,
				64096
			],
			"mapped",
			[
				35088
			]
		],
		[
			[
				64097,
				64097
			],
			"mapped",
			[
				35222
			]
		],
		[
			[
				64098,
				64098
			],
			"mapped",
			[
				35585
			]
		],
		[
			[
				64099,
				64099
			],
			"mapped",
			[
				35641
			]
		],
		[
			[
				64100,
				64100
			],
			"mapped",
			[
				36051
			]
		],
		[
			[
				64101,
				64101
			],
			"mapped",
			[
				36104
			]
		],
		[
			[
				64102,
				64102
			],
			"mapped",
			[
				36790
			]
		],
		[
			[
				64103,
				64103
			],
			"mapped",
			[
				36920
			]
		],
		[
			[
				64104,
				64104
			],
			"mapped",
			[
				38627
			]
		],
		[
			[
				64105,
				64105
			],
			"mapped",
			[
				38911
			]
		],
		[
			[
				64106,
				64106
			],
			"mapped",
			[
				38971
			]
		],
		[
			[
				64107,
				64107
			],
			"mapped",
			[
				24693
			]
		],
		[
			[
				64108,
				64108
			],
			"mapped",
			[
				148206
			]
		],
		[
			[
				64109,
				64109
			],
			"mapped",
			[
				33304
			]
		],
		[
			[
				64110,
				64111
			],
			"disallowed"
		],
		[
			[
				64112,
				64112
			],
			"mapped",
			[
				20006
			]
		],
		[
			[
				64113,
				64113
			],
			"mapped",
			[
				20917
			]
		],
		[
			[
				64114,
				64114
			],
			"mapped",
			[
				20840
			]
		],
		[
			[
				64115,
				64115
			],
			"mapped",
			[
				20352
			]
		],
		[
			[
				64116,
				64116
			],
			"mapped",
			[
				20805
			]
		],
		[
			[
				64117,
				64117
			],
			"mapped",
			[
				20864
			]
		],
		[
			[
				64118,
				64118
			],
			"mapped",
			[
				21191
			]
		],
		[
			[
				64119,
				64119
			],
			"mapped",
			[
				21242
			]
		],
		[
			[
				64120,
				64120
			],
			"mapped",
			[
				21917
			]
		],
		[
			[
				64121,
				64121
			],
			"mapped",
			[
				21845
			]
		],
		[
			[
				64122,
				64122
			],
			"mapped",
			[
				21913
			]
		],
		[
			[
				64123,
				64123
			],
			"mapped",
			[
				21986
			]
		],
		[
			[
				64124,
				64124
			],
			"mapped",
			[
				22618
			]
		],
		[
			[
				64125,
				64125
			],
			"mapped",
			[
				22707
			]
		],
		[
			[
				64126,
				64126
			],
			"mapped",
			[
				22852
			]
		],
		[
			[
				64127,
				64127
			],
			"mapped",
			[
				22868
			]
		],
		[
			[
				64128,
				64128
			],
			"mapped",
			[
				23138
			]
		],
		[
			[
				64129,
				64129
			],
			"mapped",
			[
				23336
			]
		],
		[
			[
				64130,
				64130
			],
			"mapped",
			[
				24274
			]
		],
		[
			[
				64131,
				64131
			],
			"mapped",
			[
				24281
			]
		],
		[
			[
				64132,
				64132
			],
			"mapped",
			[
				24425
			]
		],
		[
			[
				64133,
				64133
			],
			"mapped",
			[
				24493
			]
		],
		[
			[
				64134,
				64134
			],
			"mapped",
			[
				24792
			]
		],
		[
			[
				64135,
				64135
			],
			"mapped",
			[
				24910
			]
		],
		[
			[
				64136,
				64136
			],
			"mapped",
			[
				24840
			]
		],
		[
			[
				64137,
				64137
			],
			"mapped",
			[
				24974
			]
		],
		[
			[
				64138,
				64138
			],
			"mapped",
			[
				24928
			]
		],
		[
			[
				64139,
				64139
			],
			"mapped",
			[
				25074
			]
		],
		[
			[
				64140,
				64140
			],
			"mapped",
			[
				25140
			]
		],
		[
			[
				64141,
				64141
			],
			"mapped",
			[
				25540
			]
		],
		[
			[
				64142,
				64142
			],
			"mapped",
			[
				25628
			]
		],
		[
			[
				64143,
				64143
			],
			"mapped",
			[
				25682
			]
		],
		[
			[
				64144,
				64144
			],
			"mapped",
			[
				25942
			]
		],
		[
			[
				64145,
				64145
			],
			"mapped",
			[
				26228
			]
		],
		[
			[
				64146,
				64146
			],
			"mapped",
			[
				26391
			]
		],
		[
			[
				64147,
				64147
			],
			"mapped",
			[
				26395
			]
		],
		[
			[
				64148,
				64148
			],
			"mapped",
			[
				26454
			]
		],
		[
			[
				64149,
				64149
			],
			"mapped",
			[
				27513
			]
		],
		[
			[
				64150,
				64150
			],
			"mapped",
			[
				27578
			]
		],
		[
			[
				64151,
				64151
			],
			"mapped",
			[
				27969
			]
		],
		[
			[
				64152,
				64152
			],
			"mapped",
			[
				28379
			]
		],
		[
			[
				64153,
				64153
			],
			"mapped",
			[
				28363
			]
		],
		[
			[
				64154,
				64154
			],
			"mapped",
			[
				28450
			]
		],
		[
			[
				64155,
				64155
			],
			"mapped",
			[
				28702
			]
		],
		[
			[
				64156,
				64156
			],
			"mapped",
			[
				29038
			]
		],
		[
			[
				64157,
				64157
			],
			"mapped",
			[
				30631
			]
		],
		[
			[
				64158,
				64158
			],
			"mapped",
			[
				29237
			]
		],
		[
			[
				64159,
				64159
			],
			"mapped",
			[
				29359
			]
		],
		[
			[
				64160,
				64160
			],
			"mapped",
			[
				29482
			]
		],
		[
			[
				64161,
				64161
			],
			"mapped",
			[
				29809
			]
		],
		[
			[
				64162,
				64162
			],
			"mapped",
			[
				29958
			]
		],
		[
			[
				64163,
				64163
			],
			"mapped",
			[
				30011
			]
		],
		[
			[
				64164,
				64164
			],
			"mapped",
			[
				30237
			]
		],
		[
			[
				64165,
				64165
			],
			"mapped",
			[
				30239
			]
		],
		[
			[
				64166,
				64166
			],
			"mapped",
			[
				30410
			]
		],
		[
			[
				64167,
				64167
			],
			"mapped",
			[
				30427
			]
		],
		[
			[
				64168,
				64168
			],
			"mapped",
			[
				30452
			]
		],
		[
			[
				64169,
				64169
			],
			"mapped",
			[
				30538
			]
		],
		[
			[
				64170,
				64170
			],
			"mapped",
			[
				30528
			]
		],
		[
			[
				64171,
				64171
			],
			"mapped",
			[
				30924
			]
		],
		[
			[
				64172,
				64172
			],
			"mapped",
			[
				31409
			]
		],
		[
			[
				64173,
				64173
			],
			"mapped",
			[
				31680
			]
		],
		[
			[
				64174,
				64174
			],
			"mapped",
			[
				31867
			]
		],
		[
			[
				64175,
				64175
			],
			"mapped",
			[
				32091
			]
		],
		[
			[
				64176,
				64176
			],
			"mapped",
			[
				32244
			]
		],
		[
			[
				64177,
				64177
			],
			"mapped",
			[
				32574
			]
		],
		[
			[
				64178,
				64178
			],
			"mapped",
			[
				32773
			]
		],
		[
			[
				64179,
				64179
			],
			"mapped",
			[
				33618
			]
		],
		[
			[
				64180,
				64180
			],
			"mapped",
			[
				33775
			]
		],
		[
			[
				64181,
				64181
			],
			"mapped",
			[
				34681
			]
		],
		[
			[
				64182,
				64182
			],
			"mapped",
			[
				35137
			]
		],
		[
			[
				64183,
				64183
			],
			"mapped",
			[
				35206
			]
		],
		[
			[
				64184,
				64184
			],
			"mapped",
			[
				35222
			]
		],
		[
			[
				64185,
				64185
			],
			"mapped",
			[
				35519
			]
		],
		[
			[
				64186,
				64186
			],
			"mapped",
			[
				35576
			]
		],
		[
			[
				64187,
				64187
			],
			"mapped",
			[
				35531
			]
		],
		[
			[
				64188,
				64188
			],
			"mapped",
			[
				35585
			]
		],
		[
			[
				64189,
				64189
			],
			"mapped",
			[
				35582
			]
		],
		[
			[
				64190,
				64190
			],
			"mapped",
			[
				35565
			]
		],
		[
			[
				64191,
				64191
			],
			"mapped",
			[
				35641
			]
		],
		[
			[
				64192,
				64192
			],
			"mapped",
			[
				35722
			]
		],
		[
			[
				64193,
				64193
			],
			"mapped",
			[
				36104
			]
		],
		[
			[
				64194,
				64194
			],
			"mapped",
			[
				36664
			]
		],
		[
			[
				64195,
				64195
			],
			"mapped",
			[
				36978
			]
		],
		[
			[
				64196,
				64196
			],
			"mapped",
			[
				37273
			]
		],
		[
			[
				64197,
				64197
			],
			"mapped",
			[
				37494
			]
		],
		[
			[
				64198,
				64198
			],
			"mapped",
			[
				38524
			]
		],
		[
			[
				64199,
				64199
			],
			"mapped",
			[
				38627
			]
		],
		[
			[
				64200,
				64200
			],
			"mapped",
			[
				38742
			]
		],
		[
			[
				64201,
				64201
			],
			"mapped",
			[
				38875
			]
		],
		[
			[
				64202,
				64202
			],
			"mapped",
			[
				38911
			]
		],
		[
			[
				64203,
				64203
			],
			"mapped",
			[
				38923
			]
		],
		[
			[
				64204,
				64204
			],
			"mapped",
			[
				38971
			]
		],
		[
			[
				64205,
				64205
			],
			"mapped",
			[
				39698
			]
		],
		[
			[
				64206,
				64206
			],
			"mapped",
			[
				40860
			]
		],
		[
			[
				64207,
				64207
			],
			"mapped",
			[
				141386
			]
		],
		[
			[
				64208,
				64208
			],
			"mapped",
			[
				141380
			]
		],
		[
			[
				64209,
				64209
			],
			"mapped",
			[
				144341
			]
		],
		[
			[
				64210,
				64210
			],
			"mapped",
			[
				15261
			]
		],
		[
			[
				64211,
				64211
			],
			"mapped",
			[
				16408
			]
		],
		[
			[
				64212,
				64212
			],
			"mapped",
			[
				16441
			]
		],
		[
			[
				64213,
				64213
			],
			"mapped",
			[
				152137
			]
		],
		[
			[
				64214,
				64214
			],
			"mapped",
			[
				154832
			]
		],
		[
			[
				64215,
				64215
			],
			"mapped",
			[
				163539
			]
		],
		[
			[
				64216,
				64216
			],
			"mapped",
			[
				40771
			]
		],
		[
			[
				64217,
				64217
			],
			"mapped",
			[
				40846
			]
		],
		[
			[
				64218,
				64255
			],
			"disallowed"
		],
		[
			[
				64256,
				64256
			],
			"mapped",
			[
				102,
				102
			]
		],
		[
			[
				64257,
				64257
			],
			"mapped",
			[
				102,
				105
			]
		],
		[
			[
				64258,
				64258
			],
			"mapped",
			[
				102,
				108
			]
		],
		[
			[
				64259,
				64259
			],
			"mapped",
			[
				102,
				102,
				105
			]
		],
		[
			[
				64260,
				64260
			],
			"mapped",
			[
				102,
				102,
				108
			]
		],
		[
			[
				64261,
				64262
			],
			"mapped",
			[
				115,
				116
			]
		],
		[
			[
				64263,
				64274
			],
			"disallowed"
		],
		[
			[
				64275,
				64275
			],
			"mapped",
			[
				1396,
				1398
			]
		],
		[
			[
				64276,
				64276
			],
			"mapped",
			[
				1396,
				1381
			]
		],
		[
			[
				64277,
				64277
			],
			"mapped",
			[
				1396,
				1387
			]
		],
		[
			[
				64278,
				64278
			],
			"mapped",
			[
				1406,
				1398
			]
		],
		[
			[
				64279,
				64279
			],
			"mapped",
			[
				1396,
				1389
			]
		],
		[
			[
				64280,
				64284
			],
			"disallowed"
		],
		[
			[
				64285,
				64285
			],
			"mapped",
			[
				1497,
				1460
			]
		],
		[
			[
				64286,
				64286
			],
			"valid"
		],
		[
			[
				64287,
				64287
			],
			"mapped",
			[
				1522,
				1463
			]
		],
		[
			[
				64288,
				64288
			],
			"mapped",
			[
				1506
			]
		],
		[
			[
				64289,
				64289
			],
			"mapped",
			[
				1488
			]
		],
		[
			[
				64290,
				64290
			],
			"mapped",
			[
				1491
			]
		],
		[
			[
				64291,
				64291
			],
			"mapped",
			[
				1492
			]
		],
		[
			[
				64292,
				64292
			],
			"mapped",
			[
				1499
			]
		],
		[
			[
				64293,
				64293
			],
			"mapped",
			[
				1500
			]
		],
		[
			[
				64294,
				64294
			],
			"mapped",
			[
				1501
			]
		],
		[
			[
				64295,
				64295
			],
			"mapped",
			[
				1512
			]
		],
		[
			[
				64296,
				64296
			],
			"mapped",
			[
				1514
			]
		],
		[
			[
				64297,
				64297
			],
			"disallowed_STD3_mapped",
			[
				43
			]
		],
		[
			[
				64298,
				64298
			],
			"mapped",
			[
				1513,
				1473
			]
		],
		[
			[
				64299,
				64299
			],
			"mapped",
			[
				1513,
				1474
			]
		],
		[
			[
				64300,
				64300
			],
			"mapped",
			[
				1513,
				1468,
				1473
			]
		],
		[
			[
				64301,
				64301
			],
			"mapped",
			[
				1513,
				1468,
				1474
			]
		],
		[
			[
				64302,
				64302
			],
			"mapped",
			[
				1488,
				1463
			]
		],
		[
			[
				64303,
				64303
			],
			"mapped",
			[
				1488,
				1464
			]
		],
		[
			[
				64304,
				64304
			],
			"mapped",
			[
				1488,
				1468
			]
		],
		[
			[
				64305,
				64305
			],
			"mapped",
			[
				1489,
				1468
			]
		],
		[
			[
				64306,
				64306
			],
			"mapped",
			[
				1490,
				1468
			]
		],
		[
			[
				64307,
				64307
			],
			"mapped",
			[
				1491,
				1468
			]
		],
		[
			[
				64308,
				64308
			],
			"mapped",
			[
				1492,
				1468
			]
		],
		[
			[
				64309,
				64309
			],
			"mapped",
			[
				1493,
				1468
			]
		],
		[
			[
				64310,
				64310
			],
			"mapped",
			[
				1494,
				1468
			]
		],
		[
			[
				64311,
				64311
			],
			"disallowed"
		],
		[
			[
				64312,
				64312
			],
			"mapped",
			[
				1496,
				1468
			]
		],
		[
			[
				64313,
				64313
			],
			"mapped",
			[
				1497,
				1468
			]
		],
		[
			[
				64314,
				64314
			],
			"mapped",
			[
				1498,
				1468
			]
		],
		[
			[
				64315,
				64315
			],
			"mapped",
			[
				1499,
				1468
			]
		],
		[
			[
				64316,
				64316
			],
			"mapped",
			[
				1500,
				1468
			]
		],
		[
			[
				64317,
				64317
			],
			"disallowed"
		],
		[
			[
				64318,
				64318
			],
			"mapped",
			[
				1502,
				1468
			]
		],
		[
			[
				64319,
				64319
			],
			"disallowed"
		],
		[
			[
				64320,
				64320
			],
			"mapped",
			[
				1504,
				1468
			]
		],
		[
			[
				64321,
				64321
			],
			"mapped",
			[
				1505,
				1468
			]
		],
		[
			[
				64322,
				64322
			],
			"disallowed"
		],
		[
			[
				64323,
				64323
			],
			"mapped",
			[
				1507,
				1468
			]
		],
		[
			[
				64324,
				64324
			],
			"mapped",
			[
				1508,
				1468
			]
		],
		[
			[
				64325,
				64325
			],
			"disallowed"
		],
		[
			[
				64326,
				64326
			],
			"mapped",
			[
				1510,
				1468
			]
		],
		[
			[
				64327,
				64327
			],
			"mapped",
			[
				1511,
				1468
			]
		],
		[
			[
				64328,
				64328
			],
			"mapped",
			[
				1512,
				1468
			]
		],
		[
			[
				64329,
				64329
			],
			"mapped",
			[
				1513,
				1468
			]
		],
		[
			[
				64330,
				64330
			],
			"mapped",
			[
				1514,
				1468
			]
		],
		[
			[
				64331,
				64331
			],
			"mapped",
			[
				1493,
				1465
			]
		],
		[
			[
				64332,
				64332
			],
			"mapped",
			[
				1489,
				1471
			]
		],
		[
			[
				64333,
				64333
			],
			"mapped",
			[
				1499,
				1471
			]
		],
		[
			[
				64334,
				64334
			],
			"mapped",
			[
				1508,
				1471
			]
		],
		[
			[
				64335,
				64335
			],
			"mapped",
			[
				1488,
				1500
			]
		],
		[
			[
				64336,
				64337
			],
			"mapped",
			[
				1649
			]
		],
		[
			[
				64338,
				64341
			],
			"mapped",
			[
				1659
			]
		],
		[
			[
				64342,
				64345
			],
			"mapped",
			[
				1662
			]
		],
		[
			[
				64346,
				64349
			],
			"mapped",
			[
				1664
			]
		],
		[
			[
				64350,
				64353
			],
			"mapped",
			[
				1658
			]
		],
		[
			[
				64354,
				64357
			],
			"mapped",
			[
				1663
			]
		],
		[
			[
				64358,
				64361
			],
			"mapped",
			[
				1657
			]
		],
		[
			[
				64362,
				64365
			],
			"mapped",
			[
				1700
			]
		],
		[
			[
				64366,
				64369
			],
			"mapped",
			[
				1702
			]
		],
		[
			[
				64370,
				64373
			],
			"mapped",
			[
				1668
			]
		],
		[
			[
				64374,
				64377
			],
			"mapped",
			[
				1667
			]
		],
		[
			[
				64378,
				64381
			],
			"mapped",
			[
				1670
			]
		],
		[
			[
				64382,
				64385
			],
			"mapped",
			[
				1671
			]
		],
		[
			[
				64386,
				64387
			],
			"mapped",
			[
				1677
			]
		],
		[
			[
				64388,
				64389
			],
			"mapped",
			[
				1676
			]
		],
		[
			[
				64390,
				64391
			],
			"mapped",
			[
				1678
			]
		],
		[
			[
				64392,
				64393
			],
			"mapped",
			[
				1672
			]
		],
		[
			[
				64394,
				64395
			],
			"mapped",
			[
				1688
			]
		],
		[
			[
				64396,
				64397
			],
			"mapped",
			[
				1681
			]
		],
		[
			[
				64398,
				64401
			],
			"mapped",
			[
				1705
			]
		],
		[
			[
				64402,
				64405
			],
			"mapped",
			[
				1711
			]
		],
		[
			[
				64406,
				64409
			],
			"mapped",
			[
				1715
			]
		],
		[
			[
				64410,
				64413
			],
			"mapped",
			[
				1713
			]
		],
		[
			[
				64414,
				64415
			],
			"mapped",
			[
				1722
			]
		],
		[
			[
				64416,
				64419
			],
			"mapped",
			[
				1723
			]
		],
		[
			[
				64420,
				64421
			],
			"mapped",
			[
				1728
			]
		],
		[
			[
				64422,
				64425
			],
			"mapped",
			[
				1729
			]
		],
		[
			[
				64426,
				64429
			],
			"mapped",
			[
				1726
			]
		],
		[
			[
				64430,
				64431
			],
			"mapped",
			[
				1746
			]
		],
		[
			[
				64432,
				64433
			],
			"mapped",
			[
				1747
			]
		],
		[
			[
				64434,
				64449
			],
			"valid",
			[],
			"NV8"
		],
		[
			[
				64450,
				64466
			],
			"disallowed"
		],
		[
			[
				64467,
				64470
			],
			"mapped",
			[
				1709
			]
		],
		[
			[
				64471,
				64472
			],
			"mapped",
			[
				1735
			]
		],
		[
			[
				64473,
				64474
			],
			"mapped",
			[
				1734
			]
		],
		[
			[
				64475,
				64476
			],
			"mapped",
			[
				1736
			]
		],
		[
			[
				64477,
				64477
			],
			"mapped",
			[
				1735,
				1652
			]
		],
		[
			[
				64478,
				64479
			],
			"mapped",
			[
				1739
			]
		],
		[
			[
				64480,
				64481
			],
			"mapped",
			[
				1733
			]
		],
		[
			[
				64482,
				64483
			],
			"mapped",
			[
				1737
			]
		],
		[
			[
				64484,
				64487
			],
			"mapped",
			[
				1744
			]
		],
		[
			[
				64488,
				64489
			],
			"mapped",
			[
				1609
			]
		],
		[
			[
				64490,
				64491
			],
			"mapped",
			[
				1574,
				1575
			]
		],
		[
			[
				64492,
				64493
			],
			"mapped",
			[
				1574,
				1749
			]
		],
		[
			[
				64494,
				64495
			],
			"mapped",
			[
				1574,
				1608
			]
		],
		[
			[
				64496,
				64497
			],
			"mapped",
			[
				1574,
				1735
			]
		],
		[
			[
				64498,
				64499
			],
			"mapped",
			[
				1574,
				1734
			]
		],
		[
			[
				64500,
				64501
			],
			"mapped",
			[
				1574,
				1736
			]
		],
		[
			[
				64502,
				64504
			],
			"mapped",
			[
				1574,
				1744
			]
		],
		[
			[
				64505,
				64507
			],
			"mapped",
			[
				1574,
				1609
			]
		],
		[
			[
				64508,
				64511
			],
			"mapped",
			[
				1740
			]
		],
		[
			[
				64512,
				64512
			],
			"mapped",
			[
				1574,
				1580
			]
		],
		[
			[
				64513,
				64513
			],
			"mapped",
			[
				1574,
				1581
			]
		],
		[
			[
				64514,
				64514
			],
			"mapped",
			[
				1574,
				1605
			]
		],
		[
			[
				64515,
				64515
			],
			"mapped",
			[
				1574,
				1609
			]
		],
		[
			[
				64516,
				64516
			],
			"mapped",
			[
				1574,
				1610
			]
		],
		[
			[
				64517,
				64517
			],
			"mapped",
			[
				1576,
				1580
			]
		],
		[
			[
				64518,
				64518
			],
			"mapped",
			[
				1576,
				1581
			]
		],
		[
			[
				64519,
				64519
			],
			"mapped",
			[
				1576,
				1582
			]
		],
		[
			[
				64520,
				64520
			],
			"mapped",
			[
				1576,
				1605
			]
		],
		[
			[
				64521,
				64521
			],
			"mapped",
			[
				1576,
				1609
			]
		],
		[
			[
				64522,
				64522
			],
			"mapped",
			[
				1576,
				1610
			]
		],
		[
			[
				64523,
				64523
			],
			"mapped",
			[
				1578,
				1580
			]
		],
		[
			[
				64524,
				64524
			],
			"mapped",
			[
				1578,
				1581
			]
		],
		[
			[
				64525,
				64525
			],
			"mapped",
			[
				1578,
				1582
			]
		],
		[
			[
				64526,
				64526
			],
			"mapped",
			[
				1578,
				1605
			]
		],
		[
			[
				64527,
				64527
			],
			"mapped",
			[
				1578,
				1609
			]
		],
		[
			[
				64528,
				64528
			],
			"mapped",
			[
				1578,
				1610
			]
		],
		[
			[
				64529,
				64529
			],
			"mapped",
			[
				1579,
				1580
			]
		],
		[
			[
				64530,
				64530
			],
			"mapped",
			[
				1579,
				1605
			]
		],
		[
			[
				64531,
				64531
			],
			"mapped",
			[
				1579,
				1609
			]
		],
		[
			[
				64532,
				64532
			],
			"mapped",
			[
				1579,
				1610
			]
		],
		[
			[
				64533,
				64533
			],
			"mapped",
			[
				1580,
				1581
			]
		],
		[
			[
				64534,
				64534
			],
			"mapped",
			[
				1580,
				1605
			]
		],
		[
			[
				64535,
				64535
			],
			"mapped",
			[
				1581,
				1580
			]
		],
		[
			[
				64536,
				64536
			],
			"mapped",
			[
				1581,
				1605
			]
		],
		[
			[
				64537,
				64537
			],
			"mapped",
			[
				1582,
				1580
			]
		],
		[
			[
				64538,
				64538
			],
			"mapped",
			[
				1582,
				1581
			]
		],
		[
			[
				64539,
				64539
			],
			"mapped",
			[
				1582,
				1605
			]
		],
		[
			[
				64540,
				64540
			],
			"mapped",
			[
				1587,
				1580
			]
		],
		[
			[
				64541,
				64541
			],
			"mapped",
			[
				1587,
				1581
			]
		],
		[
			[
				64542,
				64542
			],
			"mapped",
			[
				1587,
				1582
			]
		],
		[
			[
				64543,
				64543
			],
			"mapped",
			[
				1587,
				1605
			]
		],
		[
			[
				64544,
				64544
			],
			"mapped",
			[
				1589,
				1581
			]
		],
		[
			[
				64545,
				64545
			],
			"mapped",
			[
				1589,
				1605
			]
		],
		[
			[
				64546,
				64546
			],
			"mapped",
			[
				1590,
				1580
			]
		],
		[
			[
				64547,
				64547
			],
			"mapped",
			[
				1590,
				1581
			]
		],
		[
			[
				64548,
				64548
			],
			"mapped",
			[
				1590,
				1582
			]
		],
		[
			[
				64549,
				64549
			],
			"mapped",
			[
				1590,
				1605
			]
		],
		[
			[
				64550,
				64550
			],
			"mapped",
			[
				1591,
				1581
			]
		],
		[
			[
				64551,
				64551
			],
			"mapped",
			[
				1591,
				1605
			]
		],
		[
			[
				64552,
				64552
			],
			"mapped",
			[
				1592,
				1605
			]
		],
		[
			[
				64553,
				64553
			],
			"mapped",
			[
				1593,
				1580
			]
		],
		[
			[
				64554,
				64554
			],
			"mapped",
			[
				1593,
				1605
			]
		],
		[
			[
				64555,
				64555
			],
			"mapped",
			[
				1594,
				1580
			]
		],
		[
			[
				64556,
				64556
			],
			"mapped",
			[
				1594,
				1605
			]
		],
		[
			[
				64557,
				64557
			],
			"mapped",
			[
				1601,
				1580
			]
		],
		[
			[
				64558,
				64558
			],
			"mapped",
			[
				1601,
				1581
			]
		],
		[
			[
				64559,
				64559
			],
			"mapped",
			[
				1601,
				1582
			]
		],
		[
			[
				64560,
				64560
			],
			"mapped",
			[
				1601,
				1605
			]
		],
		[
			[
				64561,
				64561
			],
			"mapped",
			[
				1601,
				1609
			]
		],
		[
			[
				64562,
				64562
			],
			"mapped",
			[
				1601,
				1610
			]
		],
		[
			[
				64563,
				64563
			],
			"mapped",
			[
				1602,
				1581
			]
		],
		[
			[
				64564,
				64564
			],
			"mapped",
			[
				1602,
				1605
			]
		],
		[
			[
				64565,
				64565
			],
			"mapped",
			[
				1602,
				1609
			]
		],
		[
			[
				64566,
				64566
			],
			"mapped",
			[
				1602,
				1610
			]
		],
		[
			[
				64567,
				64567
			],
			"mapped",
			[
				1603,
				1575
			]
		],
		[
			[
				64568,
				64568
			],
			"mapped",
			[
				1603,
				1580
			]
		],
		[
			[
				64569,
				64569
			],
			"mapped",
			[
				1603,
				1581
			]
		],
		[
			[
				64570,
				64570
			],
			"mapped",
			[
				1603,
				1582
			]
		],
		[
			[
				64571,
				64571
			],
			"mapped",
			[
				1603,
				1604
			]
		],
		[
			[
				64572,
				64572
			],
			"mapped",
			[
				1603,
				1605
			]
		],
		[
			[
				64573,
				64573
			],
			"mapped",
			[
				1603,
				1609
			]
		],
		[
			[
				64574,
				64574
			],
			"mapped",
			[
				1603,
				1610
			]
		],
		[
			[
				64575,
				64575
			],
			"mapped",
			[
				1604,
				1580
			]
		],
		[
			[
				64576,
				64576
			],
			"mapped",
			[
				1604,
				1581
			]
		],
		[
			[
				64577,
				64577
			],
			"mapped",
			[
				1604,
				1582
			]
		],
		[
			[
				64578,
				64578
			],
			"mapped",
			[
				1604,
				1605
			]
		],
		[
			[
				64579,
				64579
			],
			"mapped",
			[
				1604,
				1609
			]
		],
		[
			[
				64580,
				64580
			],
			"mapped",
			[
				1604,
				1610
			]
		],
		[
			[
				64581,
				64581
			],
			"mapped",
			[
				1605,
				1580
			]
		],
		[
			[
				64582,
				64582
			],
			"mapped",
			[
				1605,
				1581
			]
		],
		[
			[
				64583,
				64583
			],
			"mapped",
			[
				1605,
				1582
			]
		],
		[
			[
				64584,
				64584
			],
			"mapped",
			[
				1605,
				1605
			]
		],
		[
			[
				64585,
				64585
			],
			"mapped",
			[
				1605,
				1609
			]
		],
		[
			[
				64586,
				64586
			],
			"mapped",
			[
				1605,
				1610
			]
		],
		[
			[
				64587,
				64587
			],
			"mapped",
			[
				1606,
				1580
			]
		],
		[
			[
				64588,
				64588
			],
			"mapped",
			[
				1606,
				1581
			]
		],
		[
			[
				64589,
				64589
			],
			"mapped",
			[
				1606,
				1582
			]
		],
		[
			[
				64590,
				64590
			],
			"mapped",
			[
				1606,
				1605
			]
		],
		[
			[
				64591,
				64591
			],
			"mapped",
			[
				1606,
				1609
			]
		],
		[
			[
				64592,
				64592
			],
			"mapped",
			[
				1606,
				1610
			]
		],
		[
			[
				64593,
				64593
			],
			"mapped",
			[
				1607,
				1580
			]
		],
		[
			[
				64594,
				64594
			],
			"mapped",
			[
				1607,
				1605
			]
		],
		[
			[
				64595,
				64595
			],
			"mapped",
			[
				1607,
				1609
			]
		],
		[
			[
				64596,
				64596
			],
			"mapped",
			[
				1607,
				1610
			]
		],
		[
			[
				64597,
				64597
			],
			"mapped",
			[
				1610,
				1580
			]
		],
		[
			[
				64598,
				64598
			],
			"mapped",
			[
				1610,
				1581
			]
		],
		[
			[
				64599,
				64599
			],
			"mapped",
			[
				1610,
				1582
			]
		],
		[
			[
				64600,
				64600
			],
			"mapped",
			[
				1610,
				1605
			]
		],
		[
			[
				64601,
				64601
			],
			"mapped",
			[
				1610,
				1609
			]
		],
		[
			[
				64602,
				64602
			],
			"mapped",
			[
				1610,
				1610
			]
		],
		[
			[
				64603,
				64603
			],
			"mapped",
			[
				1584,
				1648
			]
		],
		[
			[
				64604,
				64604
			],
			"mapped",
			[
				1585,
				1648
			]
		],
		[
			[
				64605,
				64605
			],
			"mapped",
			[
				1609,
				1648
			]
		],
		[
			[
				64606,
				64606
			],
			"disallowed_STD3_mapped",
			[
				32,
				1612,
				1617
			]
		],
		[
			[
				64607,
				64607
			],
			"disallowed_STD3_mapped",
			[
				32,
				1613,
				1617
			]
		],
		[
			[
				64608,
				64608
			],
			"disallowed_STD3_mapped",
			[
				32,
				1614,
				1617
			]
		],
		[
			[
				64609,
				64609
			],
			"disallowed_STD3_mapped",
			[
				32,
				1615,
				1617
			]
		],
		[
			[
				64610,
				64610
			],
			"disallowed_STD3_mapped",
			[
				32,
				1616,
				1617
			]
		],
		[
			[
				64611,
				64611
			],
			"disallowed_STD3_mapped",
			[
				32,
				1617,
				1648
			]
		],
		[
			[
				64612,
				64612
			],
			"mapped",
			[
				1574,
				1585
			]
		],
		[
			[
				64613,
				64613
			],
			"mapped",
			[
				1574,
				1586
			]
		],
		[
			[
				64614,
				64614
			],
			"mapped",
			[
				1574,
				1605
			]
		],
		[
			[
				64615,
				64615
			],
			"mapped",
			[
				1574,
				1606
			]
		],
		[
			[
				64616,
				64616
			],
			"mapped",
			[
				1574,
				1609
			]
		],
		[
			[
				64617,
				64617
			],
			"mapped",
			[
				1574,
				1610
			]
		],
		[
			[
				64618,
				64618
			],
			"mapped",
			[
				1576,
				1585
			]
		],
		[
			[
				64619,
				64619
			],
			"mapped",
			[
				1576,
				1586
			]
		],
		[
			[
				64620,
				64620
			],
			"mapped",
			[
				1576,
				1605
			]
		],
		[
			[
				64621,
				64621
			],
			"mapped",
			[
				1576,
				1606
			]
		],
		[
			[
				64622,
				64622
			],
			"mapped",
			[
				1576,
				1609
			]
		],
		[
			[
				64623,
				64623
			],
			"mapped",
			[
				1576,
				1610
			]
		],
		[
			[
				64624,
				64624
			],
			"mapped",
			[
				1578,
				1585
			]
		],
		[
			[
				64625,
				64625
			],
			"mapped",
			[
				1578,
				1586
			]
		],
		[
			[
				64626,
				64626
			],
			"mapped",
			[
				1578,
				1605
			]
		],
		[
			[
				64627,
				64627
			],
			"mapped",
			[
				1578,
				1606
			]
		],
		[
			[
				64628,
				64628
			],
			"mapped",
			[
				1578,
				1609
			]
		],
		[
			[
				64629,
				64629
			],
			"mapped",
			[
				1578,
				1610
			]
		],
		[
			[
				64630,
				64630
			],
			"mapped",
			[
				1579,
				1585
			]
		],
		[
			[
				64631,
				64631
			],
			"mapped",
			[
				1579,
				1586
			]
		],
		[
			[
				64632,
				64632
			],
			"mapped",
			[
				1579,
				1605
			]
		],
		[
			[
				64633,
				64633
			],
			"mapped",
			[
				1579,
				1606
			]
		],
		[
			[
				64634,
				64634
			],
			"mapped",
			[
				1579,
				1609
			]
		],
		[
			[
				64635,
				64635
			],
			"mapped",
			[
				1579,
				1610
			]
		],
		[
			[
				64636,
				64636
			],
			"mapped",
			[
				1601,
				1609
			]
		],
		[
			[
				64637,
				64637
			],
			"mapped",
			[
				1601,
				1610
			]
		],
		[
			[
				64638,
				64638
			],
			"mapped",
			[
				1602,
				1609
			]
		],
		[
			[
				64639,
				64639
			],
			"mapped",
			[
				1602,
				1610
			]
		],
		[
			[
				64640,
				64640
			],
			"mapped",
			[
				1603,
				1575
			]
		],
		[
			[
				64641,
				64641
			],
			"mapped",
			[
				1603,
				1604
			]
		],
		[
			[
				64642,
				64642
			],
			"mapped",
			[
				1603,
				1605
			]
		],
		[
			[
				64643,
				64643
			],
			"mapped",
			[
				1603,
				1609
			]
		],
		[
			[
				64644,
				64644
			],
			"mapped",
			[
				1603,
				1610
			]
		],
		[
			[
				64645,
				64645
			],
			"mapped",
			[
				1604,
				1605
			]
		],
		[
			[
				64646,
				64646
			],
			"mapped",
			[
				1604,
				1609
			]
		],
		[
			[
				64647,
				64647
			],
			"mapped",
			[
				1604,
				1610
			]
		],
		[
			[
				64648,
				64648
			],
			"mapped",
			[
				1605,
				1575
			]
		],
		[
			[
				64649,
				64649
			],
			"mapped",
			[
				1605,
				1605
			]
		],
		[
			[
				64650,
				64650
			],
			"mapped",
			[
				1606,
				1585
			]
		],
		[
			[
				64651,
				64651
			],
			"mapped",
			[
				1606,
				1586
			]
		],
		[
			[
				64652,
				64652
			],
			"mapped",
			[
				1606,
				1605
			]
		],
		[
			[
				64653,
				64653
			],
			"mapped",
			[
				1606,
				1606
			]
		],
		[
			[
				64654,
				64654
			],
			"mapped",
			[
				1606,
				1609
			]
		],
		[
			[
				64655,
				64655
			],
			"mapped",
			[
				1606,
				1610
			]
		],
		[
			[
				64656,
				64656
			],
			"mapped",
			[
				1609,
				1648
			]
		],
		[
			[
				64657,
				64657
			],
			"mapped",
			[
				1610,
				1585
			]
		],
		[
			[
				64658,
				64658
			],
			"mapped",
			[
				1610,
				1586
			]
		],
		[
			[
				64659,
				64659
			],
			"mapped",
			[
				1610,
				1605
			]
		],
		[
			[
				64660,
				64660
			],
			"mapped",
			[
				1610,
				1606
			]
		],
		[
			[
				64661,
				64661
			],
			"mapped",
			[
				1610,
				1609
			]
		],
		[
			[
				64662,
				64662
			],
			"mapped",
			[
				1610,
				1610
			]
		],
		[
			[
				64663,
				64663
			],
			"mapped",
			[
				1574,
				1580
			]
		],
		[
			[
				64664,
				64664
			],
			"mapped",
			[
				1574,
				1581
			]
		],
		[
			[
				64665,
				64665
			],
			"mapped",
			[
				1574,
				1582
			]
		],
		[
			[
				64666,
				64666
			],
			"mapped",
			[
				1574,
				1605
			]
		],
		[
			[
				64667,
				64667
			],
			"mapped",
			[
				1574,
				1607
			]
		],
		[
			[
				64668,
				64668
			],
			"mapped",
			[
				1576,
				1580
			]
		],
		[
			[
				64669,
				64669
			],
			"mapped",
			[
				1576,
				1581
			]
		],
		[
			[
				64670,
				64670
			],
			"mapped",
			[
				1576,
				1582
			]
		],
		[
			[
				64671,
				64671
			],
			"mapped",
			[
				1576,
				1605
			]
		],
		[
			[
				64672,
				64672
			],
			"mapped",
			[
				1576,
				1607
			]
		],
		[
			[
				64673,
				64673
			],
			"mapped",
			[
				1578,
				1580
			]
		],
		[
			[
				64674,
				64674
			],
			"mapped",
			[
				1578,
				1581
			]
		],
		[
			[
				64675,
				64675
			],
			"mapped",
			[
				1578,
				1582
			]
		],
		[
			[
				64676,
				64676
			],
			"mapped",
			[
				1578,
				1605
			]
		],
		[
			[
				64677,
				64677
			],
			"mapped",
			[
				1578,
				1607
			]
		],
		[
			[
				64678,
				64678
			],
			"mapped",
			[
				1579,
				1605
			]
		],
		[
			[
				64679,
				64679
			],
			"mapped",
			[
				1580,
				1581
			]
		],
		[
			[
				64680,
				64680
			],
			"mapped",
			[
				1580,
				1605
			]
		],
		[
			[
				64681,
				64681
			],
			"mapped",
			[
				1581,
				1580
			]
		],
		[
			[
				64682,
				64682
			],
			"mapped",
			[
				1581,
				1605
			]
		],
		[
			[
				64683,
				64683
			],
			"mapped",
			[
				1582,
				1580
			]
		],
		[
			[
				64684,
				64684
			],
			"mapped",
			[
				1582,
				1605
			]
		],
		[
			[
				64685,
				64685
			],
			"mapped",
			[
				1587,
				1580
			]
		],
		[
			[
				64686,
				64686
			],
			"mapped",
			[
				1587,
				1581
			]
		],
		[
			[
				64687,
				64687
			],
			"mapped",
			[
				1587,
				1582
			]
		],
		[
			[
				64688,
				64688
			],
			"mapped",
			[
				1587,
				1605
			]
		],
		[
			[
				64689,
				64689
			],
			"mapped",
			[
				1589,
				1581
			]
		],
		[
			[
				64690,
				64690
			],
			"mapped",
			[
				1589,
				1582
			]
		],
		[
			[
				64691,
				64691
			],
			"mapped",
			[
				1589,
				1605
			]
		],
		[
			[
				64692,
				64692
			],
			"mapped",
			[
				1590,
				1580
			]
		],
		[
			[
				64693,
				64693
			],
			"mapped",
			[
				1590,
				1581
			]
		],
		[
			[
				64694,
				64694
			],
			"mapped",
			[
				1590,
				1582
			]
		],
		[
			[
				64695,
				64695
			],
			"mapped",
			[
				1590,
				1605
			]
		],
		[
			[
				64696,
				64696
			],
			"mapped",
			[
				1591,
				1581
			]
		],
		[
			[
				64697,
				64697
			],
			"mapped",
			[
				1592,
				1605
			]
		],
		[
			[
				64698,
				64698
			],
			"mapped",
			[
				1593,
				1580
			]
		],
		[
			[
				64699,
				64699
			],
			"mapped",
			[
				1593,
				1605
			]
		],
		[
			[
				64700,
				64700
			],
			"mapped",
			[
				1594,
				1580
			]
		],
		[
			[
				64701,
				64701
			],
			"mapped",
			[
				1594,
				1605
			]
		],
		[
			[
				64702,
				64702
			],
			"mapped",
			[
				1601,
				1580
			]
		],
		[
			[
				64703,
				64703
			],
			"mapped",
			[
				1601,
				1581
			]
		],
		[
			[
				64704,
				64704
			],
			"mapped",
			[
				1601,
				1582
			]
		],
		[
			[
				64705,
				64705
			],
			"mapped",
			[
				1601,
				1605
			]
		],
		[
			[
				64706,
				64706
			],
			"mapped",
			[
				1602,
				1581
			]
		],
		[
			[
				64707,
				64707
			],
			"mapped",
			[
				1602,
				1605
			]
		],
		[
			[
				64708,
				64708
			],
			"mapped",
			[
				1603,
				1580
			]
		],
		[
			[
				64709,
				64709
			],
			"mapped",
			[
				1603,
				1581
			]
		],
		[
			[
				64710,
				64710
			],
			"mapped",
			[
				1603,
				1582
			]
		],
		[
			[
				64711,
				64711
			],
			"mapped",
			[
				1603,
				1604
			]
		],
		[
			[
				64712,
				64712
			],
			"mapped",
			[
				1603,
				1605
			]
		],
		[
			[
				64713,
				64713
			],
			"mapped",
			[
				1604,
				1580
			]
		],
		[
			[
				64714,
				64714
			],
			"mapped",
			[
				1604,
				1581
			]
		],
		[
			[
				64715,
				64715
			],
			"mapped",
			[
				1604,
				1582
			]
		],
		[
			[
				64716,
				64716
			],
			"mapped",
			[
				1604,
				1605
			]
		],
		[
			[
				64717,
				64717
			],
			"mapped",
			[
				1604,
				1607
			]
		],
		[
			[
				64718,
				64718
			],
			"mapped",
			[
				1605,
				1580
			]
		],
		[
			[
				64719,
				64719
			],
			"mapped",
			[
				1605,
				1581
			]
		],
		[
			[
				64720,
				64720
			],
			"mapped",
			[
				1605,
				1582
			]
		],
		[
			[
				64721,
				64721
			],
			"mapped",
			[
				1605,
				1605
			]
		],
		[
			[
				64722,
				64722
			],
			"mapped",
			[
				1606,
				1580
			]
		],
		[
			[
				64723,
				64723
			],
			"mapped",
			[
				1606,
				1581
			]
		],
		[
			[
				64724,
				64724
		[