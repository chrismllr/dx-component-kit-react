(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.jsUtils = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var isArray = exports.isArray = function isArray(possibleArr) {
    return Object.prototype.toString.call(possibleArr) === '[object Array]';
  };

  var isPresent = exports.isPresent = function isPresent(val) {
    return val && val !== '' && val !== null && val !== undefined && val.length;
  };

  var noop = exports.noop = function noop() {};

  var trimWhitespace = exports.trimWhitespace = function trimWhitespace() {
    var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };

  var isAPromise = exports.isAPromise = function isAPromise(promise) {
    if ((typeof promise === 'undefined' ? 'undefined' : _typeof(promise)) === 'object') {
      return typeof promise.then === 'function';
    }

    return false;
  };

  var removeSpaces = exports.removeSpaces = function removeSpaces() {
    var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    return str.replace(/\s+/g, '');
  };
});